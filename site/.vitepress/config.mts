import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Phi Help",
  description: "Help and FAQ for Phi Browser.",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/icon.svg" }],
    ["link", { rel: "icon", sizes: "any", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
  ],
  themeConfig: {
    logo: { light: "/phi-mark-dark.svg", dark: "/phi-mark-light.svg" },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Help", link: "/help/" },
      { text: "FAQ", link: "/faq/" },
    ],
    sidebar: [
      {
        text: "Help",
        items: [
          { text: "Overview", link: "/help/" },
          { text: "Getting started", link: "/get-started/" },
          { text: "Frequently asked questions", link: "/faq/" },
          { text: "Layouts & navigation", link: "/help/layouts/" },
          { text: "Spaces & Profiles", link: "/help/spaces/" },
          { text: "Bookmarks & pinned tabs", link: "/help/bookmarks/" },
          { text: "Themes & appearance", link: "/help/themes/" },
          { text: "Meet your assistant", link: "/help/ai/" },
          { text: "Memory", link: "/help/memory/" },
          { text: "Skills", link: "/help/skills/" },
          { text: "New tab & widgets", link: "/help/new-tab/" },
          { text: "Automation & Phi Link", link: "/help/automation/" },
          { text: "Phi Sentinel", link: "/help/sentinel/" },
          { text: "Privacy & your data", link: "/help/privacy/" },
          { text: "Time Machine backups", link: "/help/time-machine/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
