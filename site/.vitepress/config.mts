import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vitepress";
import type { HeadConfig } from "vitepress";
import {
  localeConfig,
  localeRoutePrefixes,
  ZH_HANS_LOCALE,
} from "./i18n-config";

// Deployed under the /help/ sub-path. VitePress prepends this base to asset and
// internal-link URLs (nav/sidebar links, theme logo, bundled assets) and to
// route-relative Markdown links automatically, so Markdown keeps writing
// route paths such as /faq/ and /memory/ and they resolve under /help/ at
// runtime. Raw `head` tags are the exception: VitePress does not rewrite their
// attributes, so the icon hrefs below include `base` explicitly.
const base = "/help/";
const productionOrigin = "https://phibrowser.com";
const productionBaseUrl = `${productionOrigin}${base}`;

function getLocaleIndex(value: unknown): string | undefined {
  if (
    typeof value === "object" &&
    value !== null &&
    "localeIndex" in value &&
    typeof value.localeIndex === "string"
  ) {
    return value.localeIndex;
  }

  return undefined;
}

function getPagePath(relativePath: string): string {
  if (relativePath === "index.md") {
    return "";
  }

  return relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
}

function getCanonicalUrl(relativePath: string): string {
  return new URL(getPagePath(relativePath), productionBaseUrl).href;
}

function normalizeRoutePath(url: string): string {
  const pathname =
    url.startsWith("http://") || url.startsWith("https://")
      ? new URL(url).pathname
      : `/${url}`;
  const routePath = pathname.startsWith(base)
    ? pathname.slice(base.length - 1)
    : pathname;

  if (routePath === "" || routePath === "/") {
    return "/";
  }

  return routePath.endsWith("/") ? routePath : `${routePath}/`;
}

function getSourceFileForRoute(routePath: string): string | undefined {
  const candidates =
    routePath === "/"
      ? [resolve("site", "index.md")]
      : [
          resolve("site", routePath.replace(/^\/|\/$/g, ""), "index.md"),
          resolve("site", `${routePath.replace(/^\/|\/$/g, "")}.md`),
        ];

  return candidates.find((candidate) => existsSync(candidate));
}

function getLastModifiedIsoTimestamp(routePath: string): string | undefined {
  const sourceFile = getSourceFileForRoute(routePath);

  if (!sourceFile) {
    return undefined;
  }

  try {
    const gitDate = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", sourceFile],
      { encoding: "utf8" },
    ).trim();

    if (gitDate) {
      return gitDate;
    }
  } catch {
    // Fall back to the file timestamp below when the build does not have git metadata.
  }

  return statSync(sourceFile).mtime.toISOString();
}

function stripLocalePrefix(routePath: string): string {
  for (const prefix of localeRoutePrefixes) {
    if (routePath === `${prefix}/`) {
      return "/";
    }

    if (routePath.startsWith(`${prefix}/`)) {
      return routePath.slice(prefix.length);
    }
  }

  return routePath;
}

function getSitemapChangeFrequency(routePath: string): "weekly" | "monthly" {
  return routePath === "/" || routePath === "/faq/" ? "weekly" : "monthly";
}

function getSitemapPriority(routePath: string): number {
  if (routePath === "/") {
    return 1;
  }

  if (
    routePath === "/what-is-phi-browser/" ||
    routePath === "/get-started/" ||
    routePath === "/faq/"
  ) {
    return 0.8;
  }

  return 0.6;
}

function createSocialHead(
  title: string,
  description: string,
  url: string,
): HeadConfig[] {
  return [
    ["link", { rel: "canonical", href: url }],
    ["meta", { property: "og:site_name", content: "Phi Help" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { property: "og:url", content: url }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:description", content: description }],
  ];
}

export default defineConfig({
  title: "Phi Help",
  description: "Help and FAQ for Phi Browser.",
  locales: localeConfig,
  base,
  outDir: ".vitepress/dist/help",
  // Emitted at /help/sitemap.xml. The hostname includes the /help/ base so the
  // generated <loc> URLs are absolute under the sub-path (e.g.
  // https://phibrowser.com/help/faq/). philanding's robots.txt references this
  // file as a second sitemap so search engines discover the help-center pages.
  sitemap: {
    hostname: productionBaseUrl,
    transformItems(items) {
      return items.map((item) => {
        const routePath = normalizeRoutePath(item.url);
        const contentRoutePath = stripLocalePrefix(routePath);

        return {
          ...item,
          lastmod: item.lastmod ?? getLastModifiedIsoTimestamp(routePath),
          changefreq: getSitemapChangeFrequency(contentRoutePath),
          priority: getSitemapPriority(contentRoutePath),
        };
      });
    },
  },
  markdown: {
    config(markdown) {
      const renderFence = markdown.renderer.rules.fence;

      if (!renderFence) {
        return;
      }

      markdown.renderer.rules.fence = (...args) => {
        const html = renderFence(...args);
        const environment = args[3];

        return getLocaleIndex(environment) === ZH_HANS_LOCALE
          ? html.replace('title="Copy Code"', 'title="复制代码"')
          : html;
      };
    },
  },
  cleanUrls: true,
  transformHead({ description, pageData, title }) {
    if (pageData.isNotFound || pageData.relativePath === "") {
      return;
    }

    return createSocialHead(
      title,
      description,
      getCanonicalUrl(pageData.relativePath),
    );
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: `${base}icon.svg` }],
    ["link", { rel: "icon", sizes: "any", href: `${base}favicon.ico` }],
    ["link", { rel: "apple-touch-icon", href: `${base}apple-touch-icon.png` }],
  ],
  themeConfig: {
    externalLinkIcon: true,
    logo: { light: "/phi-mark-dark.svg", dark: "/phi-mark-light.svg" },
    search: {
      provider: "local",
      options: {
        locales: {
          [ZH_HANS_LOCALE]: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "清除搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "未找到相关结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "回车键",
                  navigateText: "切换",
                  navigateUpKeyAriaLabel: "向上箭头",
                  navigateDownKeyAriaLabel: "向下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc 键",
                },
              },
            },
          },
        },
        miniSearch: {
          options: {
            tokenize(text) {
              return Array.from(
                new Intl.Segmenter(undefined, { granularity: "word" }).segment(
                  text,
                ),
              )
                .filter((segment) => segment.isWordLike)
                .map((segment) => segment.segment);
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
