// Checks the built /help/llms.txt and /help/llms-full.txt against the English
// source pages and the built HTML. See docs/llms-txt.md.
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { localeResources } from "../site/.vitepress/i18n/locales/index.ts";
import { collectFiles, SITE_DIRECTORY } from "./i18n-utils.mjs";

const DIST_DIRECTORY = "site/.vitepress/dist/help";
const BASE_URL = "https://phibrowser.com/help/";
const failures = [];

const localeDirectories = localeResources
  .filter((resource) => !resource.root)
  .map((resource) => resource.key);

function isEnglishPage(relativeFile) {
  const [first] = relativeFile.split(path.sep);
  return first !== ".vitepress" && !localeDirectories.includes(first);
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

const llmsTxt = await readFile(path.join(DIST_DIRECTORY, "llms.txt"), "utf8");
const llmsFullTxt = await readFile(
  path.join(DIST_DIRECTORY, "llms-full.txt"),
  "utf8",
);

// Format from llmstxt.org: one H1 first, then a blockquote summary, and no
// heading other than H2 in the index.
for (const [name, text] of [
  ["llms.txt", llmsTxt],
  ["llms-full.txt", llmsFullTxt],
]) {
  const lines = text.split("\n");
  if (!/^# \S/.test(lines[0]))
    failures.push(`${name} does not start with an H1`);
  if (!/^> \S/.test(lines[2])) {
    failures.push(`${name} has no blockquote summary after the H1`);
  }
  if (!text.endsWith("\n"))
    failures.push(`${name} does not end with a newline`);
}
if (llmsTxt.split("\n").filter((line) => /^# /.test(line)).length !== 1) {
  failures.push("llms.txt has more than one H1");
}
if (/^#{3,} /m.test(llmsTxt)) {
  failures.push("llms.txt has a heading deeper than H2");
}

// Every English page except the home page is listed once in the index, with
// the H1 as link text and the front matter description, and appears once in
// the full file.
const sourceFiles = (await collectFiles(SITE_DIRECTORY, ".md"))
  .map((file) => path.relative(SITE_DIRECTORY, file))
  .filter((file) => isEnglishPage(file) && file !== "index.md");

for (const relativeFile of sourceFiles) {
  const source = await readFile(
    path.join(SITE_DIRECTORY, relativeFile),
    "utf8",
  );
  const route = relativeFile
    .split(path.sep)
    .join("/")
    .replace(/(^|\/)index\.md$/, "$1")
    .replace(/\.md$/, "");
  const url = `${BASE_URL}${route}`;
  const title = source.match(/^# (.+?)(?:\s*\{#[^}]+\})?\s*$/m)?.[1];
  const description = source.match(/^description: "(.+)"\s*$/m)?.[1];
  const entry = `- [${title}](${url}): ${description}`;

  if (llmsTxt.split("\n").filter((line) => line === entry).length !== 1) {
    failures.push(
      `llms.txt does not list ${relativeFile} exactly once as: ${entry}`,
    );
  }
  if (llmsFullTxt.split(`\n# ${title}\n\nSource: ${url}\n`).length !== 2) {
    failures.push(
      `llms-full.txt does not contain ${relativeFile} exactly once`,
    );
  }
}

const listedCount = llmsTxt
  .split("\n")
  .filter((line) => line.startsWith("- [")).length;
if (listedCount !== sourceFiles.length) {
  failures.push(
    `llms.txt lists ${listedCount} pages, expected ${sourceFiles.length}`,
  );
}

// Workers serves .txt without a charset unless _headers declares one.
const headers = await readFile(
  path.join(path.dirname(DIST_DIRECTORY), "_headers"),
  "utf8",
);
for (const name of ["llms.txt", "llms-full.txt"]) {
  if (
    !headers.includes(
      `/help/${name}\n  Content-Type: text/plain; charset=utf-8\n`,
    )
  ) {
    failures.push(`_headers does not declare the charset of /help/${name}`);
  }
}

// No VitePress-only syntax or site-relative link survives in either file.
for (const [name, text] of [
  ["llms.txt", llmsTxt],
  ["llms-full.txt", llmsFullTxt],
]) {
  for (const [label, pattern] of [
    ["a ::: container", /^:::/m],
    ["a site-relative link", /\]\((?:\/|#)/],
    ["a custom heading anchor", /^#{1,6} .*\{#[^}]+\}\s*$/m],
    ["an HTML span", /<span\b/],
  ]) {
    if (pattern.test(text)) failures.push(`${name} still contains ${label}`);
  }
}

// Every help-center link resolves to a built file, and its #anchor to an id
// in that page.
const htmlCache = new Map();
const links = new Set(
  [
    ...`${llmsTxt}\n${llmsFullTxt}`.matchAll(
      /\]\((https?:\/\/[^)\s]+)\)|^Source: (\S+)$/gm,
    ),
  ].map((match) => match[1] ?? match[2]),
);
let checkedLinks = 0;
for (const link of links) {
  if (!link.startsWith(BASE_URL)) continue;
  checkedLinks += 1;
  const { pathname, hash } = new URL(link);
  const relative = decodeURIComponent(pathname.slice("/help/".length));
  const file = path.join(
    DIST_DIRECTORY,
    relative === "" || relative.endsWith("/")
      ? `${relative}index.html`
      : path.extname(relative)
        ? relative
        : `${relative}.html`,
  );
  if (!(await exists(file))) {
    failures.push(`${link} has no built file at ${file}`);
    continue;
  }
  if (hash) {
    if (!htmlCache.has(file)) htmlCache.set(file, await readFile(file, "utf8"));
    if (
      !htmlCache
        .get(file)
        .includes(` id="${decodeURIComponent(hash.slice(1))}"`)
    ) {
      failures.push(`${link} points at an anchor that is not on the page`);
    }
  }
}

if (failures.length > 0) {
  console.error("Built llms.txt validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Built llms.txt validation passed for ${sourceFiles.length} pages and ${checkedLinks} help-center links.`,
  );
}
