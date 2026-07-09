import { loadPostHog } from "./posthog-client";

// Cookieless PostHog for the help center.
//
// This is a documentation surface for a privacy-first product, so analytics
// runs without cookies or any device storage: `persistence: "memory"` keeps
// state in the page's JS runtime only, and `person_profiles: "identified_only"`
// means no anonymous person profile is created (and we never call identify()).
// Because nothing is written to the visitor's device, no GDPR cookie-consent
// banner is required — visitors reach the docs without a popup.
//
// The marketing site (philanding) keeps its own heavier GA4 + PostHog + consent
// setup; this is intentionally lighter and self-contained. The PostHog project
// API key is a public, write-only client key (inlined into the bundle
// regardless), and since both sites share the phibrowser.com domain it is the
// same key.
const POSTHOG_KEY = "phc_khD82ML7hPHCa9Br3QpjpD67GFXFGaLLrMDw8RAd3gZQ";

let started = false;

// requestIdleCallback is unavailable in some browsers (older Safari); fall back
// to a short timeout so the bootstrap still runs off the critical path.
function onIdle(cb: () => void): void {
  const ric = (
    window as {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number },
      ) => void;
    }
  ).requestIdleCallback;
  if (ric) {
    ric(cb, { timeout: 2000 });
  } else {
    setTimeout(cb, 1);
  }
}

// Entry point, called once from the client-only branch of the theme's
// enhanceApp. Deferred to idle so posthog-js stays off the critical load path.
// `defaults: "2025-05-24"` enables autocapture and
// capture_pageview: "history_change", so VitePress SPA navigations are tracked
// automatically — no manual pageview call is needed.
export function initAnalytics(): void {
  if (started || typeof window === "undefined") return;
  started = true;
  onIdle(() => {
    void loadPostHog().then((posthog) => {
      if (posthog.__loaded) return;

      posthog.init(POSTHOG_KEY, {
        api_host: "https://us.i.posthog.com",
        ui_host: "https://us.posthog.com",
        defaults: "2025-05-24",
        // Cookieless: no cookies, no localStorage — nothing on the device.
        persistence: "memory",
        person_profiles: "identified_only",
        // Surveys/feature flags/session recording are unused here — this stops
        // posthog from fetching the extra surveys.js payload.
        disable_surveys: true,
      });
    });
  });
}
