import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import CookieConsent from "./CookieConsent.vue";
import PhiSidebarButton from "./PhiSidebarButton.vue";
import { initAnalytics } from "./analytics/analytics";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    // Render the "Ask Phi" button next to the search box. The button gates its
    // own visibility: it only appears when running inside Phi Browser with the
    // Sidecar extension installed (see PhiSidebarButton.vue).
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-before": () => h(PhiSidebarButton),
      "layout-bottom": () => h(CookieConsent),
    });
  },
  enhanceApp() {
    // Client-only: restore PostHog at idle only for a returning visitor with a
    // shared Statistics grant. First-time grants initialize through the
    // consent component; without a grant the SDK is never downloaded.
    if (!import.meta.env.SSR) {
      initAnalytics();
    }
  },
};
