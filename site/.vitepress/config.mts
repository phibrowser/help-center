import { defineConfig } from "vitepress";
import type { DefaultTheme, HeadConfig } from "vitepress";

// Deployed under the /help/ sub-path. VitePress prepends this base to asset and
// internal-link URLs (nav/sidebar links, theme logo, bundled assets) and to
// route-relative Markdown links automatically — so Markdown keeps writing
// route paths such as /faq/ and /memory/ and they resolve under /help/ at
// runtime. Raw `head` tags are the exception: VitePress does not rewrite their
// attributes, so the icon hrefs below include `base` explicitly.
const base = "/help/";
const productionOrigin = "https://phibrowser.com";
const productionBaseUrl = `${productionOrigin}${base}`;

function getPagePath(relativePath: string): string {
  if (relativePath === "index.md") {
    return "";
  }

  return relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
}

function getCanonicalUrl(relativePath: string): string {
  return new URL(getPagePath(relativePath), productionBaseUrl).href;
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

const guideSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Start Here",
    items: [
      { text: "What is Phi Browser?", link: "/what-is-phi-browser/" },
      { text: "Getting Started", link: "/get-started/" },
      { text: "Switching to Phi", link: "/switching-to-phi/" },
    ],
  },
  {
    text: "Browser Workspace",
    items: [
      { text: "Layouts & Navigation", link: "/layouts/" },
      { text: "Spaces & Profiles", link: "/spaces/" },
      { text: "Bookmarks & Pinned Tabs", link: "/bookmarks/" },
      { text: "Themes & Appearance", link: "/themes/" },
      { text: "New Tab & Widgets", link: "/new-tab/" },
    ],
  },
  {
    text: "Assistant & Automation",
    items: [
      { text: "Meet your assistant", link: "/ai/" },
      { text: "Memory", link: "/memory/" },
      { text: "Skills", link: "/skills/" },
      { text: "Automation & Phi Link", link: "/automation/" },
      { text: "Phi Sentinel", link: "/sentinel/" },
    ],
  },
  {
    text: "Privacy & Recovery",
    items: [
      { text: "Privacy & Your Data", link: "/privacy/" },
      { text: "Time Machine Backups", link: "/time-machine/" },
    ],
  },
];

const guideSidebarPaths = [
  "/what-is-phi-browser/",
  "/get-started/",
  "/switching-to-phi/",
  "/layouts/",
  "/spaces/",
  "/bookmarks/",
  "/themes/",
  "/new-tab/",
  "/ai/",
  "/memory/",
  "/skills/",
  "/automation/",
  "/sentinel/",
  "/privacy/",
  "/time-machine/",
];

const sidebar = Object.fromEntries(
  guideSidebarPaths.map((path) => [path, guideSidebar]),
);

export default defineConfig({
  title: "Phi Help",
  description: "Help and FAQ for Phi Browser.",
  base,
  // Emitted at /help/sitemap.xml. The hostname includes the /help/ base so the
  // generated <loc> URLs are absolute under the sub-path (e.g.
  // https://phibrowser.com/help/faq/). philanding's robots.txt references this
  // file as a second sitemap so search engines discover the help-center pages.
  sitemap: { hostname: productionBaseUrl },
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
    logo: { light: "/phi-mark-dark.svg", dark: "/phi-mark-light.svg" },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Phi Browser", link: "https://phibrowser.com" },
      { text: "Guide", link: "/what-is-phi-browser/" },
      { text: "FAQ", link: "/faq/" },
    ],
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
