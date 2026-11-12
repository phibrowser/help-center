// Builds /help/llms.txt and /help/llms-full.txt from the English pages.
// See docs/llms-txt.md for the format, the decisions, and how it is checked.
import { guideGroups, guideRoutes } from "./i18n/guide.ts";
import type { LocaleResource } from "./i18n/types.ts";

export type LlmsSourcePage = {
  // Route path without the base, as VitePress reports it: "/faq/".
  url: string;
  // Raw Markdown source, front matter included.
  src: string;
  frontmatter: Record<string, unknown>;
};

export type LlmsOptions = {
  // "https://phibrowser.com/help/"
  baseUrl: string;
  resource: LocaleResource;
};

type LlmsPage = {
  route: string;
  url: string;
  title: string;
  description: string;
  // Page body in plain Markdown, without its H1.
  body: string;
};

const SUMMARY =
  "Guides and FAQ for Phi Browser, a web browser for Macs with a built-in AI assistant, made by Phinomenon Inc.";
const MAIN_SITE_LLMS_URL = "https://phibrowser.com/llms.txt";
const LICENSE_NOTE =
  "Content © Phinomenon Inc., licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Source: https://github.com/phibrowser/help-center";
const FAQ_ROUTE = "/faq/";
const UNGROUPED_HEADING = "More";
const CALLOUT_LABELS: Record<string, string> = {
  info: "Note",
  tip: "Tip",
  warning: "Warning",
  danger: "Warning",
};

function toAbsoluteUrl(route: string, baseUrl: string): string {
  return new URL(route.replace(/^\//, ""), baseUrl).href;
}

// Route-relative links ("/memory/#x") and same-page anchors ("#x") only work
// inside the site, so both become absolute URLs of the HTML pages.
function absolutizeLinks(
  line: string,
  pageUrl: string,
  baseUrl: string,
): string {
  return line.replace(
    /\]\((\/[^)\s]*|#[^)\s]*)\)/g,
    (_match, target: string) =>
      `](${target.startsWith("#") ? `${pageUrl}${target}` : toAbsoluteUrl(target, baseUrl)})`,
  );
}

function stripFrontmatter(src: string): string {
  return src.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
}

// Turns VitePress Markdown into plain Markdown: containers become headings or
// blockquotes, custom heading anchors and decorative spans are removed, and
// site-relative links become absolute. Code fences pass through untouched.
// Anything it does not understand throws, so the build fails instead of
// shipping VitePress syntax to readers that cannot render it.
export function toPlainMarkdown(
  src: string,
  pageUrl: string,
  baseUrl: string,
): string {
  const out: string[] = [];
  let fence: string | undefined;
  let container: "details" | "callout" | undefined;
  let headingLevel = 1;

  const pushBlank = () => {
    if (out.length > 0 && out[out.length - 1] !== "") out.push("");
  };
  const clean = (line: string) =>
    absolutizeLinks(
      line.replace(/<span\b[^>]*><\/span>/g, ""),
      pageUrl,
      baseUrl,
    );

  for (const line of stripFrontmatter(src).split(/\r?\n/)) {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    if (fence) {
      if (fenceMatch && fenceMatch[1].startsWith(fence)) fence = undefined;
      out.push(container === "callout" ? `> ${line}` : line);
      continue;
    }
    if (fenceMatch) {
      fence = fenceMatch[1];
      out.push(container === "callout" ? `> ${line}` : line);
      continue;
    }

    const open = line.match(/^:::+\s*(\w+)\s*(.*?)\s*$/);
    if (open) {
      if (container) {
        throw new Error(`${pageUrl}: nested containers are not supported`);
      }
      const [, type, title] = open;
      if (type === "details") {
        pushBlank();
        out.push(
          `${"#".repeat(Math.min(headingLevel + 1, 6))} ${clean(title || "Details")}`,
          "",
        );
        container = "details";
      } else if (type in CALLOUT_LABELS) {
        pushBlank();
        out.push(`> **${clean(title || CALLOUT_LABELS[type])}**`, ">");
        container = "callout";
      } else {
        throw new Error(`${pageUrl}: unknown container type "${type}"`);
      }
      continue;
    }
    if (/^:::+\s*$/.test(line)) {
      if (!container) {
        throw new Error(`${pageUrl}: container closed without being opened`);
      }
      container = undefined;
      continue;
    }

    if (container === "callout") {
      out.push(line === "" ? ">" : `> ${clean(line)}`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*?)(?:\s*\{#[^}]+\})?\s*$/);
    if (heading && !container) {
      headingLevel = heading[1].length;
      out.push(`${heading[1]} ${clean(heading[2])}`);
      continue;
    }

    out.push(clean(line));
  }

  if (fence || container) {
    throw new Error(`${pageUrl}: unclosed code fence or container`);
  }

  return out.join("\n").trim();
}

function toLlmsPage(page: LlmsSourcePage, baseUrl: string): LlmsPage {
  const url = toAbsoluteUrl(page.url, baseUrl);
  const markdown = toPlainMarkdown(page.src, url, baseUrl);
  const title = markdown.match(/^# (.+)\n/)?.[1];
  const description = page.frontmatter.description;

  if (!title) {
    throw new Error(`${page.url}: the page must start with an H1`);
  }
  if (typeof description !== "string" || description.trim() === "") {
    throw new Error(`${page.url}: front matter needs a description`);
  }

  return {
    route: page.url,
    url,
    title,
    description: description.trim(),
    body: markdown.slice(markdown.indexOf("\n") + 1).trim(),
  };
}

// Sidebar groups in sidebar order, then the FAQ, then any page that is in
// neither, so a new page shows up even before it is added to the sidebar.
function groupPages(
  pages: LlmsPage[],
  resource: LocaleResource,
): { heading: string; pages: LlmsPage[] }[] {
  const byRoute = new Map(pages.map((page) => [page.route, page]));
  const take = (route: string) => {
    const page = byRoute.get(route);
    byRoute.delete(route);
    return page;
  };

  const sections = [
    ...guideGroups.map((group) => ({
      heading: resource.theme.groups[group.key],
      pages: group.items.map((key) => take(guideRoutes[key])),
    })),
    { heading: resource.theme.nav.faq, pages: [take(FAQ_ROUTE)] },
  ];
  sections.push({
    heading: UNGROUPED_HEADING,
    pages: [...byRoute.values()].sort((a, b) => a.route.localeCompare(b.route)),
  });

  return sections
    .map((section) => ({
      heading: section.heading,
      pages: section.pages.filter((page) => page !== undefined),
    }))
    .filter((section) => section.pages.length > 0);
}

export function buildLlmsFiles(
  sourcePages: LlmsSourcePage[],
  { baseUrl, resource }: LlmsOptions,
): { llmsTxt: string; llmsFullTxt: string } {
  const pages = sourcePages
    // The home page is a layout with navigation only, not a document.
    .filter((page) => page.frontmatter.layout !== "home")
    .map((page) => toLlmsPage(page, baseUrl));
  const sections = groupPages(pages, resource);
  const fullUrl = new URL("llms-full.txt", baseUrl).href;
  const indexUrl = new URL("llms.txt", baseUrl).href;
  const header = [`# ${resource.site.title}`, "", `> ${SUMMARY}`, ""];

  const llmsTxt = [
    ...header,
    `The pages below are the English originals. The full text of all of them is in one Markdown file: [llms-full.txt](${fullUrl}). For a summary of the product, Release Notes, and news, see [phibrowser.com/llms.txt](${MAIN_SITE_LLMS_URL}).`,
    "",
    ...sections.flatMap((section) => [
      `## ${section.heading}`,
      "",
      ...section.pages.map(
        (page) => `- [${page.title}](${page.url}): ${page.description}`,
      ),
      "",
    ]),
  ].join("\n");

  const llmsFullTxt = [
    ...header,
    `The full text of every English page of the Phi Browser help center, in the order of [llms.txt](${indexUrl}).`,
    "",
    LICENSE_NOTE,
    "",
    ...sections.flatMap((section) =>
      section.pages.flatMap((page) => [
        "---",
        "",
        `# ${page.title}`,
        "",
        `Source: ${page.url}`,
        "",
        page.body,
        "",
      ]),
    ),
  ].join("\n");

  return { llmsTxt, llmsFullTxt };
}
