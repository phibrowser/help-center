import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { createMarkdownRenderer } from "vitepress";

const CJK_LOCALES = ["zh-Hans", "zh-Hant", "ja", "ko"];
const MARKDOWN_STRONG_PATTERN = /\*\*(.+?)\*\*/g;
const HTML_STRONG_PATTERN = /<strong(?:\s|>)/g;

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

const renderer = await createMarkdownRenderer(process.cwd(), {}, "/help/");
const failures = [];
let checkedFiles = 0;

for (const locale of CJK_LOCALES) {
  const localeDirectory = path.join("site", locale);
  let files;

  try {
    files = await collectMarkdownFiles(localeDirectory);
  } catch (error) {
    if (error?.code === "ENOENT") continue;
    throw error;
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

    const renderedProse = removeRenderedCode(renderer.render(source));
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
  }
}

if (failures.length > 0) {
  console.error("CJK emphasis validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error(
    "\nUse <strong>...</strong> only for the reported parser-incompatible spans.",
  );
  process.exitCode = 1;
} else {
  console.log(
    `CJK emphasis validation passed for ${checkedFiles} Markdown files.`,
  );
}
