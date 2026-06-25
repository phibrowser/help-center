import { defineConfig } from "vitepress";

// Deployed under the /help/ sub-path. VitePress prepends this base to asset and
// internal-link URLs (nav/sidebar links, theme logo, bundled assets) and to
// route-relative Markdown links automatically — so Markdown keeps writing
// /faq/ and /guides/... and they resolve under /help/ at runtime. Raw `head`
// tags are the exception: VitePress does not rewrite their attributes, so the
// icon hrefs below include `base` explicitly.
const base = "/help/";

export default defineConfig({
  title: "Phi Help",
  description: "Help and FAQ for Phi Browser.",
  base,
  // Emitted at /help/sitemap.xml. The hostname includes the /help/ base so the
  // generated <loc> URLs are absolute under the sub-path (e.g.
  // https://phibrowser.com/help/faq/). philanding's robots.txt references this
  // file as a second sitemap so search engines discover the help-center pages.
  sitemap: { hostname: "https://phibrowser.com/help/" },
  cleanUrls: true,
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
      { text: "Help", link: "/guides/" },
      { text: "FAQ", link: "/faq/" },
    ],
    sidebar: [
      {
        text: "Help",
        items: [
          { text: "Overview", link: "/guides/" },
          { text: "Getting started", link: "/get-started/" },
          { text: "Frequently asked questions", link: "/faq/" },
          { text: "Layouts & navigation", link: "/guides/layouts/" },
          { text: "Spaces & Profiles", link: "/guides/spaces/" },
          { text: "Bookmarks & pinned tabs", link: "/guides/bookmarks/" },
          { text: "Themes & appearance", link: "/guides/themes/" },
          { text: "Meet your assistant", link: "/guides/ai/" },
          { text: "Memory", link: "/guides/memory/" },
          { text: "Skills", link: "/guides/skills/" },
          { text: "New tab & widgets", link: "/guides/new-tab/" },
          { text: "Automation & Phi Link", link: "/guides/automation/" },
          { text: "Phi Sentinel", link: "/guides/sentinel/" },
          { text: "Privacy & your data", link: "/guides/privacy/" },
          { text: "Time Machine backups", link: "/guides/time-machine/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
