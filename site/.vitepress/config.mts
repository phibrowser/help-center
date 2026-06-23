import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Phi Help Center",
  description: "Help, FAQ, and documentation for Phi.",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Help", link: "/help/" },
      { text: "FAQ", link: "/faq/" },
      { text: "Docs", link: "/docs/" },
    ],
    sidebar: [
      {
        text: "Help Center",
        items: [
          { text: "Home", link: "/" },
          { text: "Help", link: "/help/" },
          { text: "FAQ", link: "/faq/" },
          { text: "Docs", link: "/docs/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/phibrowser/help-center" },
    ],
  },
});
