import { defineConfig } from "vitepress";
import type { DefaultTheme, HeadConfig } from "vitepress";

// Deployed under the /help/ sub-path. VitePress prepends this base to asset and
// internal-link URLs (nav/sidebar links, theme logo, bundled assets) and to
// route-relative Markdown links automatically — so Markdown keeps writing
// /faq/ and /guides/... and they resolve under /help/ at runtime. Raw `head`
// tags are the exception: VitePress does not rewrite their attributes, so the
// icon hrefs below include `base` explicitly.
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
    text: "Start here",
    items: [
      { text: "What is Phi Browser", link: "/guides/" },
      { text: "Getting started", link: "/get-started/" },
      { text: "Switching to Phi", link: "/guides/switching-to-phi/" },
    ],
  },
  {
    text: "Browser workspace",
    items: [
      { text: "Layouts & navigation", link: "/guides/layouts/" },
      { text: "Spaces & Profiles", link: "/guides/spaces/" },
      { text: "Bookmarks & pinned tabs", link: "/guides/bookmarks/" },
      { text: "Themes & appearance", link: "/guides/themes/" },
      { text: "New tab & widgets", link: "/guides/new-tab/" },
    ],
  },
  {
    text: "Assistant & automation",
    items: [
      { text: "Meet your assistant", link: "/guides/ai/" },
      { text: "Memory", link: "/guides/memory/" },
      { text: "Skills", link: "/guides/skills/" },
      { text: "Automation & Phi Link", link: "/guides/automation/" },
      { text: "Phi Sentinel", link: "/guides/sentinel/" },
    ],
  },
  {
    text: "Privacy & recovery",
    items: [
      { text: "Privacy & your data", link: "/guides/privacy/" },
      { text: "Time Machine backups", link: "/guides/time-machine/" },
    ],
  },
];

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
      { text: "Guide", link: "/guides/" },
      { text: "FAQ", link: "/faq/" },
    ],
    sidebar: {
      "/guides/": guideSidebar,
      "/get-started/": guideSidebar,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
