import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import PhiSidebarButton from "./PhiSidebarButton.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    // Render the "Ask Phi" button next to the search box. The button gates its
    // own visibility: it only appears when running inside Phi Browser with the
    // Sidecar extension installed (see PhiSidebarButton.vue).
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-before": () => h(PhiSidebarButton),
    });
  },
};
