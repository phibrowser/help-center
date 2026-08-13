import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import {
  LOCALIZATION_DIRECTORY,
  getPromotionBlockers,
  getRootContentFiles,
  isRootContentCurrent,
  readLocalizationStatus,
} from "./i18n-utils.mjs";

import { createMarkdownRenderer } from "vitepress";

import {
  defaultLocaleResource,
  localeResources,
} from "../site/.vitepress/i18n/locales/index.ts";

const MARKDOWN_STRONG_PATTERN = /\*\*(.+?)\*\*/g;
const HTML_STRONG_PATTERN = /<strong(?:\s|>)/g;
const LANGUAGE_AGNOSTIC_FILES = [
  "site/.vitepress/config.mts",
  "site/.vitepress/i18n-config.ts",
  "site/.vitepress/i18n/guide.ts",
  "site/.vitepress/i18n/types.ts",
  "site/.vitepress/i18n/schema.ts",
  "site/.vitepress/theme/CookieConsent.vue",
  "site/.vitepress/theme/PhiSidebarButton.vue",
  "site/.vitepress/theme/custom.css",
  "scripts/test-i18n.mjs",
];

async function collectMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const resolvedPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(resolvedPath)));
    } else if (entry.name.endsWith(".md")) {
      files.push(resolvedPath);
    }
  }

  return files.sort();
}

function maskCode(source) {
  const lines = source.split("\n");
  let frontmatter = lines[0] === "---";
  let fenceCharacter;
  let fenceLength = 0;

  return lines
    .map((line, index) => {
      if (frontmatter) {
        if (index > 0 && line === "---") frontmatter = false;
        return "";
      }

      const fence = line.match(/^\s*(`{3,}|~{3,})/);
      if (fenceCharacter) {
        if (
          fence &&
          fence[1][0] === fenceCharacter &&
          fence[1].length >= fenceLength
        ) {
          fenceCharacter = undefined;
          fenceLength = 0;
        }
        return "";
      }

      if (fence) {
        fenceCharacter = fence[1][0];
        fenceLength = fence[1].length;
        return "";
      }

      return line.replace(/(`+)(.+?)\1/g, "code");
    })
    .join("\n");
}

function countMatches(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function findContextFailures(source, renderer) {
  const failures = [];
  const lines = source.split("\n");

  for (const [lineIndex, line] of lines.entries()) {
    for (const match of line.matchAll(MARKDOWN_STRONG_PATTERN)) {
      const start = match.index;
      const end = start + match[0].length;
      const before = start > 0 ? line[start - 1] : "";
      const after = end < line.length ? line[end] : "";
      const rendered = renderer.renderInline(`${before}${match[0]}${after}`);

      if (rendered.includes("**")) {
        failures.push({
          line: lineIndex + 1,
          excerpt: `${before}${match[0]}${after}`,
        });
      }
    }
  }

  return failures;
}

function removeRenderedCode(html) {
  return html
    .replace(/<pre(?:\s[^>]*)?>[\s\S]*?<\/pre>/g, "")
    .replace(/<code(?:\s[^>]*)?>[\s\S]*?<\/code>/g, "");
}

function getRenderedAnchorIds(html) {
  return new Set(
    [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
  );
}

function getInternalLinks(html) {
  return [...html.matchAll(/<a\s[^>]*href="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/help/") || href.startsWith("#"));
}

function resolveLinkSourceFile(href, currentFile, resource) {
  const [pathPart, anchor] = href.split("#", 2);
  if (pathPart === "") return { file: currentFile, anchor };

  const localeBase = resource.root ? "/help/" : `/help/${resource.key}/`;
  if (!pathPart.startsWith(localeBase)) {
    return { wrongLocale: true };
  }

  const route = pathPart.slice(localeBase.length).replace(/^\/|\/$/g, "");
  const contentDirectory = getContentDirectory(resource);
  return {
    file: route
      ? path.join(contentDirectory, route, "index.md")
      : path.join(contentDirectory, "index.md"),
    anchor,
  };
}

function getContentDirectory(resource) {
  return resource.root ? "site" : path.join("site", resource.key);
}

function isLocalizedContentFile(file, localizedDirectoryNames) {
  const relativePath = path.relative("site", file);
  return localizedDirectoryNames.some(
    (directory) =>
      relativePath === directory || relativePath.startsWith(`${directory}/`),
  );
}

const renderer = await createMarkdownRenderer(process.cwd(), {}, "/help/");
const failures = [];
const localeSpecificTokens = localeResources.flatMap((resource) => [
  ...(resource.root ? [] : [resource.key]),
  resource.lang,
  resource.label,
]);

for (const file of LANGUAGE_AGNOSTIC_FILES) {
  const source = await readFile(file, "utf8");
  for (const token of new Set(localeSpecificTokens)) {
    if (source.includes(token)) {
      failures.push(
        `${file} contains locale-specific token ${JSON.stringify(token)}`,
      );
    }
  }
}

const localizedResources = localeResources.filter((resource) => !resource.root);
const localizedDirectoryNames = localizedResources.map(
  (resource) => resource.key,
);
const rootFiles = getRootContentFiles(
  await collectMarkdownFiles(getContentDirectory(defaultLocaleResource)),
  localizedDirectoryNames,
);
const rootRelativeFiles = rootFiles.map((file) => path.relative("site", file));
let checkedFiles = 0;

for (const resource of localizedResources) {
  const statusFile = path.join(
    LOCALIZATION_DIRECTORY,
    resource.key,
    "status.json",
  );
  try {
    const status = await readLocalizationStatus(statusFile);
    if (status.locale !== resource.key) {
      failures.push(`${statusFile} locale does not match ${resource.key}`);
    }
    for (const blocker of getPromotionBlockers(status, rootRelativeFiles, {
      requireApproval: false,
    })) {
      failures.push(`${statusFile}: ${blocker}`);
    }
    if (!isRootContentCurrent(status.sourceRevision, rootFiles)) {
      failures.push(
        `${resource.key} translation is stale relative to root content; update ${statusFile}`,
      );
    }
  } catch (error) {
    if (error?.code === "ENOENT") {
      failures.push(
        `${resource.key} is registered but ${statusFile} is missing`,
      );
    } else {
      throw error;
    }
  }
}

for (const resource of localeResources) {
  const contentDirectory = getContentDirectory(resource);
  let files;

  try {
    files = await collectMarkdownFiles(contentDirectory);
  } catch (error) {
    if (error?.code === "ENOENT") {
      failures.push(
        `Locale ${resource.key} has no content directory at ${contentDirectory}`,
      );
      continue;
    }
    throw error;
  }

  if (resource.root) {
    files = files.filter(
      (file) => !isLocalizedContentFile(file, localizedDirectoryNames),
    );
  } else {
    const localizedRelativeFiles = files.map((file) =>
      path.relative(contentDirectory, file),
    );
    const missingFiles = rootRelativeFiles.filter(
      (file) => !localizedRelativeFiles.includes(file),
    );
    const extraFiles = localizedRelativeFiles.filter(
      (file) => !rootRelativeFiles.includes(file),
    );

    for (const file of missingFiles) {
      failures.push(`Locale ${resource.key} is missing ${file}`);
    }
    for (const file of extraFiles) {
      failures.push(`Locale ${resource.key} has unexpected page ${file}`);
    }
  }

  for (const file of files) {
    checkedFiles += 1;
    const source = await readFile(file, "utf8");
    const proseSource = maskCode(source);
    const contextFailures = findContextFailures(proseSource, renderer);

    for (const failure of contextFailures) {
      failures.push(
        `${file}:${failure.line} cannot render strong emphasis in context: ${failure.excerpt}`,
      );
    }

    const renderedHtml = renderer.render(source);
    const renderedProse = removeRenderedCode(renderedHtml);
    const intendedStrongCount =
      countMatches(proseSource, MARKDOWN_STRONG_PATTERN) +
      countMatches(proseSource, HTML_STRONG_PATTERN);
    const renderedStrongCount = countMatches(
      renderedProse,
      HTML_STRONG_PATTERN,
    );

    if (renderedProse.includes("**")) {
      failures.push(`${file} renders a literal ** delimiter in prose`);
    }

    if (renderedStrongCount !== intendedStrongCount) {
      failures.push(
        `${file} intends ${intendedStrongCount} strong spans but renders ${renderedStrongCount}`,
      );
    }

    for (const href of getInternalLinks(renderedHtml)) {
      const target = resolveLinkSourceFile(href, file, resource);
      if (target.wrongLocale) {
        failures.push(`${file} links outside its locale tree: ${href}`);
        continue;
      }

      try {
        const targetSource = await readFile(target.file, "utf8");
        if (target.anchor) {
          const targetHtml = renderer.render(targetSource);
          if (!getRenderedAnchorIds(targetHtml).has(target.anchor)) {
            failures.push(`${file} links to missing anchor ${href}`);
          }
        }
      } catch (error) {
        if (error?.code === "ENOENT") {
          failures.push(`${file} links to missing page ${href}`);
        } else {
          throw error;
        }
      }
    }
  }
}

if (failures.length > 0) {
  console.error("i18n validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error(
    "\nUse <strong>...</strong> only for parser-incompatible emphasis spans.",
  );
  process.exitCode = 1;
} else {
  console.log(
    `i18n validation passed for ${localeResources.length} locales and ${checkedFiles} Markdown files.`,
  );
}
