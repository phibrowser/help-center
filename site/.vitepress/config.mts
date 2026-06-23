import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Phi Help Center",
  description: "Help and getting-started docs for Phi.",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/icon.svg" }],
    ["link", { rel: "icon", sizes: "any", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
  ],
  themeConfig: {
    logo: { light: "/phi-mark-dark.svg", dark: "/phi-mark-light.svg" },
    nav: [
      { text: "Get started", link: "/get-started/" },
      { text: "Help", link: "/help/" },
    ],
    sidebar: [
      {
        text: "Get started",
        items: [{ text: "Install", link: "/get-started/" }],
      },
      {
        text: "Guides",
        items: [
          { text: "Overview", link: "/help/" },
          { text: "Layouts & navigation", link: "/help/layouts" },
          { text: "Meet Phi AI", link: "/help/ai" },
          { text: "Automation & Phi Link", link: "/help/automation" },
          { text: "Privacy & your data", link: "/help/privacy" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
