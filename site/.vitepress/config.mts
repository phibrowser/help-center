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
          { text: "Layouts & navigation", link: "/help/layouts" },
          { text: "Meet Phi AI", link: "/help/ai" },
          { text: "Automation & Phi Link", link: "/help/automation" },
          { text: "Privacy & your data", link: "/help/privacy" },
        ],
      },
      {
        text: "FAQ",
        items: [
          { text: "Overview", link: "/faq/" },
          { text: "Layouts & navigation", link: "/faq/layouts" },
          { text: "Bookmarks & tabs", link: "/faq/bookmarks" },
          { text: "Split View & Tab Groups", link: "/faq/split-view" },
          { text: "AI features", link: "/faq/ai" },
          { text: "Phi Sentinel", link: "/faq/sentinel" },
          { text: "Phi Link", link: "/faq/link" },
          { text: "Pricing & availability", link: "/faq/pricing" },
          { text: "Privacy & data", link: "/faq/privacy" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
