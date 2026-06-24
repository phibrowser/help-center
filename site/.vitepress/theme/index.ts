import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import PhiSidebarButton from "./PhiSidebarButton.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Render the Phi assistant button next to the search box. It lives in the
      // before-slot; custom.css reorders the search box ahead of it and pairs
      // them together on the left (see the .phi-ai-button rules there).
      "nav-bar-content-before": () => h(PhiSidebarButton),
    });
  },
};
