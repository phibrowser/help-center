// Mechanical gates for the zh-Hans re-translation run (Stage 5 of phi-translate-validate).
// Usage: node docs/i18n-runs/2026-08-28-zh-hans/gates.mjs <output-root>
// <output-root> contains zh-Hans/<page>/index.md files and zh-Hans.json.
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2];
if (!root) {
  console.error("usage: gates.mjs <output-root>");
  process.exit(2);
}
const here = path.dirname(new URL(import.meta.url).pathname);
const slice = JSON.parse(
  fs.readFileSync(path.join(here, "slice.json"), "utf8"),
);
const refs = JSON.parse(
  fs.readFileSync(path.join(here, "refs-zh-Hans.json"), "utf8"),
);
const failures = [];
const warnings = [];
const fail = (m) => failures.push(m);
const warn = (m) => warnings.push(m);

const BANNED = /[—–]|您/g;

function maskCode(source) {
  const lines = source.split("\n");
  let inFence = false;
  let inFront = lines[0] === "---";
  return lines
    .map((line, i) => {
      if (inFront) {
        if (i > 0 && line === "---") inFront = false;
        return line; // frontmatter prose is checked too
      }
      if (/^\s*```/.test(line)) {
        inFence = !inFence;
        return "";
      }
      if (inFence) return "";
      return line
        .replace(/`[^`]*`/g, "`code`")
        .replace(/\]\([^)]*\)/g, "](link)");
    })
    .join("\n");
}

function checkPage(key, entry) {
  const outFile = path.join(root, "zh-Hans", key);
  if (!fs.existsSync(outFile)) return fail(`${key}: output missing`);
  const out = fs.readFileSync(outFile, "utf8");
  const src = fs.readFileSync(entry.source, "utf8");
  const prose = maskCode(out);

  for (const m of out.matchAll(BANNED)) {
    const line = out.slice(0, m.index).split("\n").length;
    fail(`${key}:${line}: banned character ${JSON.stringify(m[0])}`);
  }
  // Traditional-character leak: only flag characters that have a distinct Simplified form.
  for (const m of prose.matchAll(
    /[個們這為與於裡開關記憶設電網頁標籤檔資訊選項將時間機書瀏覽擴檢視儲刪輸連結尋歷紀錄隱帳號夾預進階說閉啟複製貼還無應]/g,
  )) {
    const line = prose.slice(0, m.index).split("\n").length;
    fail(`${key}:${line}: traditional character ${m[0]}`);
  }
  if (/登陆/.test(prose)) fail(`${key}: 登陆 (must be 登录)`);
  if (/[“”"]/.test(prose.replace(/^---[\s\S]*?\n---/, "")))
    warn(`${key}: straight or curly double quotes in prose; use 「」`);

  const srcHeadings = src.split("\n").filter((l) => /^#{1,6} /.test(l));
  const outHeadings = out.split("\n").filter((l) => /^#{1,6} /.test(l));
  if (srcHeadings.length !== outHeadings.length)
    fail(
      `${key}: heading count ${outHeadings.length}, expected ${srcHeadings.length}`,
    );
  for (let i = 0; i < Math.min(srcHeadings.length, outHeadings.length); i++) {
    const sl = srcHeadings[i].match(/^#+/)[0].length;
    const ol = outHeadings[i].match(/^#+/)[0].length;
    if (sl !== ol)
      fail(
        `${key}: heading ${i + 1} level ${ol}, expected ${sl}: ${outHeadings[i]}`,
      );
  }
  const h1 = outHeadings.filter((h) => /^# /.test(h));
  if (key !== "index.md") {
    if (h1.length !== 1) fail(`${key}: expected exactly one H1`);
    const titleKey = Object.entries({
      "what-is-phi-browser/index.md": "whatIsPhi",
      "get-started/index.md": "gettingStarted",
      "switching-to-phi/index.md": "switchingToPhi",
      "tips-and-shortcuts/index.md": "tipsAndShortcuts",
      "layouts/index.md": "layouts",
      "spaces/index.md": "spaces",
      "incognito/index.md": "incognito",
      "bookmarks/index.md": "bookmarks",
      "import-export/index.md": "importExport",
      "tab-management/index.md": "tabManagement",
      "themes/index.md": "themes",
      "new-tab/index.md": "newTab",
      "ai/index.md": "assistant",
      "memory/index.md": "memory",
      "skills/index.md": "skills",
      "automation/index.md": "automation",
      "phi-browser-skill/index.md": "phiBrowserSkill",
      "phi-cli/index.md": "phiCli",
      "agent-passwords/index.md": "agentPasswords",
      "sentinel/index.md": "sentinel",
      "privacy/index.md": "privacy",
      "time-machine/index.md": "timeMachine",
      "faq/index.md": "faq",
    }).find(([k]) => k === key)?.[1];
    const expected = refs.pageTitles[titleKey];
    if (
      h1[0] &&
      expected &&
      h1[0].replace(/^# /, "").replace(/\s*\{#.*\}$/, "") !== expected
    )
      fail(
        `${key}: H1 ${JSON.stringify(h1[0])} does not equal refs title ${JSON.stringify(expected)}`,
      );
  }
  for (const [srcHeading, id] of Object.entries(entry.requiredAnchorIds)) {
    const idx = srcHeadings.indexOf(srcHeading);
    const target = outHeadings[idx] || "";
    if (!target.endsWith(`{#${id}}`))
      fail(`${key}: heading ${idx + 1} must end with {#${id}}: ${target}`);
  }
  const explicitIds = (out.match(/\{#[^}]+\}/g) || []).length;
  const expectedIds = Object.keys(entry.requiredAnchorIds).length;
  if (explicitIds !== expectedIds)
    warn(`${key}: ${explicitIds} explicit ids, expected ${expectedIds}`);

  const srcFences = (src.match(/^```/gm) || []).length;
  const outFences = (out.match(/^```/gm) || []).length;
  if (srcFences !== outFences)
    fail(`${key}: code fence markers ${outFences}, expected ${srcFences}`);
  const srcCont = (src.match(/^::: /gm) || []).length;
  const outCont = (out.match(/^::: /gm) || []).length;
  if (srcCont !== outCont)
    fail(`${key}: containers ${outCont}, expected ${srcCont}`);
  const srcLinks = (src.match(/\]\(/g) || []).length;
  const outLinks = (out.match(/\]\(/g) || []).length;
  if (srcLinks !== outLinks)
    warn(`${key}: links ${outLinks}, expected ${srcLinks}`);

  for (const m of out.matchAll(/\]\((\/[^)#]*)(#[^)]*)?\)/g)) {
    if (!m[1].startsWith("/zh-Hans/"))
      fail(`${key}: Help link not localised: ${m[0]}`);
  }
  for (const m of out.matchAll(/link: (\/[^\n]*)/g)) {
    if (!m[1].startsWith("/zh-Hans/") && !m[1].startsWith("/phi-mark"))
      fail(`${key}: frontmatter link not localised: ${m[0]}`);
  }
  for (const m of src.matchAll(/https?:\/\/[^\s)]+/g)) {
    if (!out.includes(m[0])) fail(`${key}: external URL missing: ${m[0]}`);
  }
  if (!/^description: /m.test(out))
    fail(`${key}: frontmatter description missing`);
  if (/^description: "[A-Za-z ,.'-]+"$/m.test(out))
    fail(`${key}: description still English`);

  // pangu spacing (warning): CJK directly touching a Latin letter or digit.
  const body = prose.replace(/^---[\s\S]*?\n---/, "");
  for (const m of body.matchAll(/[一-鿿][A-Za-z0-9]|[A-Za-z0-9][一-鿿]/g)) {
    const line = body.slice(0, m.index).split("\n").length;
    warn(`${key}:${line}: spacing ${JSON.stringify(m[0])}`);
  }
  for (const m of body.matchAll(/(?:简单地|只需|轻松地|请注意|值得一提)/g)) {
    warn(`${key}: filler ${m[0]}`);
  }
}

function checkResource() {
  const file = path.join(root, "zh-Hans.json");
  if (!fs.existsSync(file)) return fail("zh-Hans.json missing");
  let res;
  try {
    res = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    return fail(`zh-Hans.json does not parse: ${e.message}`);
  }
  const en = JSON.parse(
    fs.readFileSync("site/.vitepress/i18n/locales/en.json", "utf8"),
  );
  const flatten = (o, p = "") =>
    Object.entries(o).flatMap(([k, v]) =>
      v && typeof v === "object" && !Array.isArray(v)
        ? flatten(v, `${p}${k}.`)
        : [[`${p}${k}`, v]],
    );
  const enKeys = flatten(en).map(([k]) => k);
  const resFlat = Object.fromEntries(flatten(res));
  for (const k of enKeys)
    if (!(k in resFlat)) fail(`zh-Hans.json: missing key ${k}`);
  for (const k of Object.keys(resFlat))
    if (!enKeys.includes(k)) fail(`zh-Hans.json: extra key ${k}`);
  if (
    res.key !== "zh-Hans" ||
    res.lang !== "zh-Hans" ||
    res.root !== false ||
    res.label !== "简体中文"
  )
    fail("zh-Hans.json: key/lang/root/label wrong");
  const text = JSON.stringify(res);
  for (const m of text.matchAll(BANNED))
    fail(`zh-Hans.json: banned character ${JSON.stringify(m[0])}`);
  for (const [k, v] of Object.entries(refs.pageTitles)) {
    if (k === "note") continue;
    if (k === "faq") {
      if (res.theme.nav.faq !== v)
        fail(`zh-Hans.json: nav.faq ${res.theme.nav.faq} != ${v}`);
      continue;
    }
    if (res.theme.pages[k] !== v)
      fail(
        `zh-Hans.json: pages.${k} ${JSON.stringify(res.theme.pages[k])} != ${JSON.stringify(v)}`,
      );
  }
  for (const [k, v] of Object.entries(refs.navGroups)) {
    const actual = res.theme.nav[k] ?? res.theme.groups[k];
    if (actual !== v)
      fail(
        `zh-Hans.json: nav/group ${k} ${JSON.stringify(actual)} != ${JSON.stringify(v)}`,
      );
  }
  for (const [k, v] of flatten(res)) {
    if (
      typeof v === "string" &&
      /[。．]$/.test(v) &&
      /^(theme\.(nav|groups|pages|controls)|search\.button|customTheme\.(askPhi|privacyControls|cookieSettings|privacyChoices|cookieConsent|rejectAll|acceptAll|customizeSettings|cookiePreferences|close|functional|alwaysOn|statistics|marketing|saveChoices|optOutOfSaleAndSharing)$|markdown)/.test(
        k,
      )
    )
      fail(`zh-Hans.json: trailing period on label ${k}`);
  }
  if (
    !Array.isArray(res.searchQueries) ||
    res.searchQueries.length < 3 ||
    new Set(res.searchQueries).size !== res.searchQueries.length
  )
    fail("zh-Hans.json: searchQueries must be >= 3 distinct queries");
}

for (const [key, entry] of Object.entries(slice.entries)) {
  if (key === "resource.json") checkResource();
  else checkPage(key, entry);
}

// Cross-page consistency: every link text that points at a page must equal that page's title.
const routeToTitle = {
  "what-is-phi-browser": "whatIsPhi",
  "get-started": "gettingStarted",
  "switching-to-phi": "switchingToPhi",
  "tips-and-shortcuts": "tipsAndShortcuts",
  layouts: "layouts",
  spaces: "spaces",
  incognito: "incognito",
  bookmarks: "bookmarks",
  "import-export": "importExport",
  "tab-management": "tabManagement",
  themes: "themes",
  "new-tab": "newTab",
  ai: "assistant",
  memory: "memory",
  skills: "skills",
  automation: "automation",
  "phi-browser-skill": "phiBrowserSkill",
  "phi-cli": "phiCli",
  "agent-passwords": "agentPasswords",
  sentinel: "sentinel",
  privacy: "privacy",
  "time-machine": "timeMachine",
  faq: "faq",
};
for (const key of Object.keys(slice.entries)) {
  if (key === "resource.json") continue;
  const outFile = path.join(root, "zh-Hans", key);
  if (!fs.existsSync(outFile)) continue;
  const out = fs.readFileSync(outFile, "utf8");
  for (const m of out.matchAll(/\[([^\]]+)\]\(\/zh-Hans\/([a-z-]+)\/\)/g)) {
    const expected = refs.pageTitles[routeToTitle[m[2]]];
    if (expected && m[1] !== expected)
      warn(
        `${key}: link text ${JSON.stringify(m[1])} to /${m[2]}/ (page title is ${JSON.stringify(expected)})`,
      );
  }
}

for (const w of warnings) console.log(`warn: ${w}`);
for (const f of failures) console.log(`FAIL: ${f}`);
console.log(`\n${failures.length} failures, ${warnings.length} warnings`);
process.exit(failures.length ? 1 : 0);
