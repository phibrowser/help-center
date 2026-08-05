# Analytics and shared cookie consent

Implemented 2026-08-05 16:27:23 CST (+0800). Source of truth for Help analytics and its shared phibrowser.com consent behavior.

## Why

The requirement was to make a first visit directly to `https://phibrowser.com/help/` show the same category-based Cookie Banner behavior as the main site and to share the visitor's choice across both applications.

Help previously initialized PostHog immediately in cookieless memory mode and intentionally showed no banner. That behavior no longer matched the shared-site requirement. Help now follows the main site's strict Statistics consent rule: no analytics SDK or analytics request exists before a Statistics grant.

The Help vendor scope remains intentionally narrower than the main site:

| Category   | Help behavior                         | Shared main-site effect                                 |
| ---------- | ------------------------------------- | ------------------------------------------------------- |
| Functional | Consent storage only; always on       | Same definition                                         |
| Statistics | PostHog only, loaded after a grant    | The main site may load PostHog and Google Analytics     |
| Marketing  | No marketing vendor is loaded by Help | The main site may load its advertising conversion tools |

Help does **not** load Google Analytics or the X Ads Pixel. It still reads and writes both optional category choices so navigating between `/help/` and the main site preserves one decision.

## Shared storage contract

Both applications use the same-origin `localStorage` record under `phi_cookie_consent`. Although the UI calls this a cookie choice, the consent record itself is local storage rather than an HTTP cookie.

```json
{
  "version": 2,
  "statistics": "granted" | "denied",
  "marketing": "granted" | "denied",
  "updatedAt": 1754382443000,
  "gpcActiveAtSave": false
}
```

Sharing works because production serves both applications from the same origin, `https://phibrowser.com`; URL paths do not partition local storage. A standalone preview or deployment on another origin cannot share the record.

`site/.vitepress/theme/consent/consent.ts` mirrors the philanding v2 contract:

- Validates untrusted storage data with `zod/mini`.
- Migrates legacy `{"analytics":"denied"}` to an all-denied v2 record.
- Treats legacy `{"analytics":"granted"}` as absent and asks again because the old bundled grant was not per-category consent.
- Keeps an in-memory fallback if local storage writes fail.
- Applies the same Global Privacy Control precedence as the main site.

Under GPC, both optional categories are denied and the first-visit Banner is suppressed. A deliberate choice saved from the preferences panel while GPC is visible overrides the signal for this site, matching philanding.

## UI behavior

`site/.vitepress/theme/CookieConsent.vue` is mounted once through the VitePress default theme's `layout-bottom` slot.

- With no effective choice, the Banner appears after 800 ms.
- Accept all and Reject all have identical visual weight.
- Customize settings exposes Functional, Statistics, and Marketing categories.
- Cookie Settings and Your Privacy Choices remain available in the global Help footer so withdrawing consent is as easy as granting it.
- Your Privacy Choices provides the same one-click Marketing opt-out semantics as the main site.
- Privacy links point to the main site's `/privacy/` policy. The Help page at `/help/privacy/` describes Phi Browser product data rather than website tracking.

Every save writes the shared record and immediately applies the effective choice on Help.

## PostHog lifecycle

The integration is split by responsibility:

- `site/.vitepress/theme/analytics/analytics.ts` restores a returning Statistics grant at idle.
- `site/.vitepress/theme/analytics/posthog-client.ts` owns one shared lazy-load and initialization promise.
- `site/.vitepress/theme/consent/apply-consent.ts` applies a new grant or denial immediately.
- `site/.vitepress/theme/analytics/posthog-sanitize.ts` removes `code` and `q` query parameters from automatically captured current/referrer URL properties while preserving attribution parameters.

PostHog uses the same public project key and initialization policy as philanding:

- `api_host: "https://us.i.posthog.com"`
- `ui_host: "https://us.posthog.com"`
- `defaults: "2025-05-24"`
- `opt_out_capturing_by_default: true` as defense in depth
- `disable_surveys: true`

There is no `persistence: "memory"` override anymore. After Statistics consent, PostHog uses its normal persistence so its analytics behavior aligns with the main site. Before consent, the dynamic import is not executed at all; opted-out initialization alone is insufficient because PostHog can still request remote configuration and write persistence.

On Statistics denial, Help opts out an already initialized PostHog singleton and best-effort removes `_ga*` and `ph_*` first-party cookies plus `ph_*` local-storage entries. Removing `_ga*` matters even though Help does not load GA because the decision is shared with the main site. Marketing denial similarly removes observed `_twpid`, `_twclid`, and `muc_ads` cookies without loading an advertising SDK.

## Validation

Automated project validation completed during implementation:

```sh
pnpm format:check
pnpm build
```

The production build confirms that PostHog remains a dynamically imported chunk. A static build cannot prove browser network behavior or production routing.

## Required follow-up

| Action                                                                                                              | Owner                                                                   | Timing / dependency                                         | Evidence of completion                                                                              |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Review the final Banner/preferences wording and provider disclosure                                                 | Privacy/legal owner with the relevant jurisdiction and engagement scope | Before production publication                               | Written approval against the final deployed copy and privacy policy                                 |
| Verify a fresh production-origin visit sends no PostHog request and creates no `_ga*` or `ph_*` data before consent | Deploying engineer or QA                                                | After deployment to `https://phibrowser.com/help/`          | DevTools Network/Application capture for fresh, reject, Statistics-only, and GPC cases              |
| Verify choices made on Help are reflected by the main site's settings, and vice versa                               | Deploying engineer or QA                                                | After both current builds are on the same production origin | Recorded cross-navigation test showing the same `phi_cookie_consent` v2 value and matching UI state |

Omitting the production-origin checks risks shipping a routing, caching, or vendor-runtime difference that the static build cannot detect.

## Open issues

- Cross-tab synchronization remains unchanged from philanding: another already-open tab observes a new decision only after reload. A shared `storage` event bridge in both applications would be required to resolve this live.
- Marketing cookie cleanup is best-effort and must be rechecked if the main site changes advertising vendors.
- Consent has no expiry. The stored `updatedAt` value enables a future policy-defined re-prompt interval.
