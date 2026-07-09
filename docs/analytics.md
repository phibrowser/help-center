# Analytics: cookieless PostHog

Added 2026-07-09. Source of truth for how the help center reports analytics.

## Why

The help center benefits from lightweight analytics — which pages readers reach, which they bounce from, what they search for — so the docs can be improved with evidence rather than guesswork.

An earlier draft mirrored the marketing site (philanding) with Google Analytics 4 + PostHog + a cookie-consent banner. That was reconsidered and dropped for this site, because:

- This is a **documentation surface for a privacy-first product**. Its own privacy page (`site/privacy/index.md`) stresses local-first, "does not sell browsing-derived data." Putting Google's ad-tech tracker on it reads as off-brand.
- **GA4 uses cookies**, which under GDPR/ePrivacy forces an opt-in consent banner — friction for someone who arrived to solve a problem.
- The industry trend for docs/devtool sites is exactly the opposite: **cookieless, privacy-first analytics** (Plausible, Fathom, or PostHog's cookieless mode) that need **no consent banner**.

So the help center runs **PostHog only, in cookieless mode, with no GA and no consent banner**. The marketing site keeps its own heavier GA + PostHog + consent setup unchanged.

## How it works

This is a VitePress site. The integration is small:

- `theme/analytics/analytics.ts` — `initAnalytics()` defers to `requestIdleCallback` (with a `setTimeout` fallback for older Safari), then lazily `import()`s and initializes PostHog.
- `theme/analytics/posthog-client.ts` — a shared-promise lazy loader for the `posthog-js` singleton, so the ~60 KiB library is code-split into its own async chunk (kept off the critical load path).
- `theme/index.ts` — calls `initAnalytics()` from the client-only branch of `enhanceApp` (guarded by `import.meta.env.SSR`).

### Cookieless configuration

PostHog is initialized with:

- `persistence: "memory"` — state lives only in the page's JS runtime; **no cookies, no localStorage, nothing written to the device**.
- `person_profiles: "identified_only"` — no anonymous person profile is created. The site never calls `identify()`, so no personal identifier is stored.
- `defaults: "2025-05-24"` — enables autocapture and `capture_pageview: "history_change"`, so VitePress SPA navigations are tracked automatically (no manual pageview call).
- `disable_surveys: true` — surveys/flags/session-recording are unused; this avoids fetching the extra `surveys.js` payload.
- `api_host: "https://us.i.posthog.com"`, `ui_host: "https://us.posthog.com"` — direct connection to PostHog US Cloud.

Because nothing is stored on the visitor's device and no personal data is collected, **no GDPR cookie-consent banner is required**.

### Shared, public ID

`phc_khD82ML7hPHCa9Br3QpjpD67GFXFGaLLrMDw8RAd3gZQ` (in `analytics.ts`) is a public, write-only PostHog project API key — inlined into the browser bundle regardless, so it is hardcoded. Since help-center shares the `phibrowser.com` domain with the marketing site, it is the same key; help traffic can be filtered by host in PostHog.

## Dependency and build note

`posthog-js` is a runtime dependency. It transitively pulls in `core-js`, whose only build script is a postinstall funding banner the prebuilt bundle does not need — it is set to `false` in `pnpm-workspace.yaml` `allowBuilds` so `pnpm` does not error on the ignored script.

## Extending: custom events

For explicit events later, resolve the singleton via `loadPostHog()` and call `posthog.capture("event_name", { ... })`. Keep to anonymous, cookieless events — do not call `identify()` — to preserve the no-banner property. There are no custom events today; the setup is autocapture + pageviews only.

## Open issues

None. If cross-site (marketing ↔ help) funnel analysis is ever needed, note it would require identifiers that reintroduce a consent obligation — a deliberate trade-off that was declined here in favor of a banner-free help site.
