import { createRequire } from "node:module";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

import {
  defaultLocaleResource,
  localeResources,
} from "../site/.vitepress/i18n/locales/index.ts";

const DIST_DIRECTORY = "site/.vitepress/dist/help";
const require = createRequire(import.meta.url);
const vitepressEntry = require.resolve("vitepress");
const miniSearchEntry = require.resolve("minisearch", {
  paths: [path.dirname(vitepressEntry)],
});
const { default: MiniSearch } = await import(pathToFileURL(miniSearchEntry));
const failures = [];

function getOutputFile(resource, relativeFile) {
  const route = relativeFile.replace(/(^|\/)index\.md$/, "$1");
  return path.join(
    DIST_DIRECTORY,
    resource.root ? "" : resource.key,
    route,
    "index.html",
  );
}

function getPublicRoute(resource, relativeFile) {
  const route = relativeFile.replace(/(^|\/)index\.md$/, "$1");
  return `/help/${resource.root ? "" : `${resource.key}/`}${route}`;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tokenize(text) {
  return Array.from(
    new Intl.Segmenter(undefined, { granularity: "word" }).segment(text),
  )
    .filter((segment) => segment.isWordLike)
    .map((segment) => segment.segment);
}

const registeredDirectories = localeResources
  .filter((resource) => !resource.root)
  .map((resource) => resource.key);
const rootFiles = await collectRootMarkdownFiles();
const sitemap = await readFile(
  path.join(DIST_DIRECTORY, "sitemap.xml"),
  "utf8",
);

async function collectRootMarkdownFiles() {
  const files = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (directory === "site" && registeredDirectories.includes(entry.name)) {
        continue;
      }
      const resolvedPath = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(resolvedPath);
      else if (entry.name.endsWith(".md")) {
        files.push(path.relative("site", resolvedPath));
      }
    }
  }
  await walk("site");
  return files.sort();
}

for (const resource of localeResources) {
  for (const relativeFile of rootFiles) {
    const outputFile = getOutputFile(resource, relativeFile);
    let html;
    try {
      html = await readFile(outputFile, "utf8");
    } catch (error) {
      if (error?.code === "ENOENT") {
        failures.push(`${outputFile} was not generated`);
        continue;
      }
      throw error;
    }

    const route = getPublicRoute(resource, relativeFile);
    const canonical = `https://phibrowser.com${route}`;
    if (!html.includes(`<html lang="${resource.lang}"`)) {
      failures.push(`${outputFile} has the wrong html lang`);
    }
    if (!html.includes(`<link rel="canonical" href="${canonical}">`)) {
      failures.push(`${outputFile} has the wrong canonical URL`);
    }
    if (!html.includes(resource.customTheme.cookieSettings)) {
      failures.push(`${outputFile} is missing locale theme copy`);
    }
    if (html.includes("**")) {
      failures.push(`${outputFile} contains a literal ** delimiter`);
    }

    const sitemapEntry = sitemap.match(
      new RegExp(`<url><loc>${escapeRegex(canonical)}</loc>[\\s\\S]*?</url>`),
    )?.[0];
    const expectedAlternates = [
      ...localeResources.map((alternate) => ({
        hreflang: alternate.lang,
        href: `https://phibrowser.com${getPublicRoute(alternate, relativeFile)}`,
      })),
      {
        hreflang: "x-default",
        href: `https://phibrowser.com${getPublicRoute(defaultLocaleResource, relativeFile)}`,
      },
    ];
    for (const { hreflang, href } of expectedAlternates) {
      const sitemapLink = `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"`;
      if (!sitemapEntry?.includes(sitemapLink)) {
        failures.push(`${canonical} is missing ${hreflang} sitemap hreflang`);
      }
      const headLink = `<link rel="alternate" hreflang="${hreflang}" href="${href}">`;
      if (!html.includes(headLink)) {
        failures.push(`${outputFile} is missing ${hreflang} head hreflang`);
      }
    }
  }

  const sampleFile = getOutputFile(resource, "get-started/index.md");
  const sampleHtml = await readFile(sampleFile, "utf8");
  if (!sampleHtml.includes(`title="${resource.markdown.copyCode}"`)) {
    failures.push(`${sampleFile} has the wrong code-copy title`);
  }
  if (
    !sampleHtml.includes(
      `--vp-code-copy-copied-text-content: "${resource.markdown.copied}"`,
    )
  ) {
    failures.push(`${sampleFile} has the wrong copied-state label`);
  }

  const indexFiles = (
    await readdir(path.join(DIST_DIRECTORY, "assets/chunks"))
  ).filter((file) => file.startsWith(`@localSearchIndex${resource.key}.`));
  if (indexFiles.length !== 1) {
    failures.push(
      `Expected one search index for ${resource.key}, found ${indexFiles.length}`,
    );
    continue;
  }

  const serialized = (
    await import(
      pathToFileURL(
        path.resolve(DIST_DIRECTORY, "assets/chunks", indexFiles[0]),
      )
    )
  ).default;
  const search = MiniSearch.loadJSON(serialized, {
    fields: ["title", "titles", "text"],
    storeFields: ["title", "titles"],
    tokenize,
  });
  for (const query of resource.searchQueries) {
    const results = search.search(query, {
      fuzzy: 0.2,
      prefix: true,
      boost: { title: 4, text: 2, titles: 1 },
    });
    if (results.length === 0) {
      failures.push(`${resource.key} search returned no results for ${query}`);
    }
  }
}

if (
  sitemap.match(/<url>/g)?.length !==
  rootFiles.length * localeResources.length
) {
  failures.push("Sitemap URL count does not match page and locale parity.");
}

if (failures.length > 0) {
  console.error("Built i18n validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Built i18n validation passed for ${localeResources.length} locales, ${rootFiles.length * localeResources.length} pages, and ${localeResources.reduce((count, resource) => count + resource.searchQueries.length, 0)} search queries.`,
  );
}
