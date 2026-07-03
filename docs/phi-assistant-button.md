# Phi assistant button (Ask Phi)

Status: live since 2026-07-03. Last updated: 2026-07-03 15:14 CST.

This is the living reference for the **Ask Phi** button in the Help Center nav
bar — the sparkles icon next to the search box that opens Phi Browser's AI
sidebar. For the chronological history of how it got here (the original inert
`postMessage` contract, the temporary hide, and the restore), see the dated
entries in [`initial-setup.md`](./initial-setup.md); this file describes the
feature as it currently works.

## What it does

- Renders a sparkles button next to the search box **only when the page is
  running inside Phi Browser with the Sidecar extension installed**. In any other
  browser (plain Chrome, Firefox, Safari) the button does not render at all.
- Clicking it opens Phi's AI sidebar (`toggleChatSidebar(true)`), the same
  sidebar the right-click "Ask Phi about …" flow uses.

## Architecture — Route A (`externally_connectable` + `onMessageExternal`)

The AI sidebar **is** the Sidecar extension (fixed id
`fenmfiepnpdlhplemgijlimpbebebljo`, pinned by an inlined `key` in its manifest).
Its background service worker already opens the sidebar via the private
`chrome.phinomenonPrivate.toggleChatSidebar(true)` API (used by the context-menu
selection flow).

A first-party web page that the Sidecar allowlists in
`externally_connectable.matches` can message that background directly with
`chrome.runtime.sendMessage(extId, msg)`, and the background answers via
`chrome.runtime.onMessageExternal`. **No native (`phibrowser-mac`) or framework
change is involved** — the page talks to the extension, the extension opens the
sidebar.

This replaced an earlier `window.postMessage` contract that could never work:
nothing in native or the Sidecar listens to a page's `window` messages (native
injects no page-facing `window.phi` API; the Sidecar's only content script,
`selection-tracker`, merely reports text selections).

### Why the button is gated on a probe

Route A is what finally makes reliable "am I inside Phi?" detection possible. The
button sends a `phi:ping` on mount and renders only once the Sidecar responds.
Outside Phi the response never comes (extension absent → the callback carries
`chrome.runtime.lastError`; or `window.chrome` is undefined entirely), so the
button stays hidden. The button appears one tick after mount rather than on first
paint — intentional, and better than flashing a dead button.

## Message contract (page → Sidecar background)

All messages carry `source: "phi-help"`; the background ignores anything else.

| Message                                            | Response                                   | Effect                                         |
| -------------------------------------------------- | ------------------------------------------ | ---------------------------------------------- |
| `{ source: "phi-help", type: "phi:ping" }`         | `{ ok: true }`                             | Presence probe; gates the button's visibility. |
| `{ source: "phi-help", type: "phi:open-sidebar" }` | `{ ok: true }`                             | Background calls `toggleChatSidebar(true)`.    |
| (untrusted sender)                                 | `{ ok: false, error: "untrusted-sender" }` | Rejected before any action.                    |
| (unknown `type`)                                   | `{ ok: false, error: "unknown-type" }`     | No-op.                                         |

## Files

### help-center (this repo)

- `site/.vitepress/theme/PhiSidebarButton.vue` — the button. Sends
  `chrome.runtime.sendMessage(EXT_ID, …)`, gates rendering with `v-if="isPhi"`
  after the `phi:ping` probe, and calls `phi:open-sidebar` on click. `EXT_ID` is
  the fixed Sidecar id above.
- `site/.vitepress/theme/index.ts` — extends the default VitePress theme and
  mounts the button in the `nav-bar-content-before` slot via a `Layout` wrapper.
- `site/.vitepress/theme/custom.css` — navbar layout. The button carries the
  `margin-right: auto` spacer (search pill + button paired on the left, nav menu
  on the right); a `:has()` fallback moves the spacer back onto the search box
  when the button is absent (non-Phi browsers).

### Sidecar (`phi-ai` repo, `staging-3` worktree)

Path: `/Users/sjdhome/Projects/Phi/phi-ai-staging-3/ai-extension/sidecar`.

- `manifest.config.ts` — adds the Help Center origins to
  `externally_connectable.matches`:
  - Production: `https://phibrowser.com/help/*` (scoped to `/help/` so
    `chrome.runtime` is not exposed to the whole origin).
  - Staging: `https://stag.phibrowser.com/help/*` — **best-guess** mirror of the
    `account.stag.phibrowser.com` convention; confirm the real host.
  - Local dev only (`DEPLOY_ENV=dev`, the default `pnpm build`):
    `http://localhost/*` and `http://127.0.0.1/*`. Match patterns ignore the
    port, so this covers `:3000`, `:5173`, `:4173`, etc. Release builds
    (`build:prod`) omit these.
- `background.js` — the `chrome.runtime.onMessageExternal` handler plus
  `isTrustedHelpSender()`.

### phibrowser-mac

No changes. (An alternative `phi://native/…` deeplink route would have needed
`DeeplinkHandler.swift`; Route A avoids it.)

## Security model

Defence in depth on top of the manifest allowlist:

- The manifest only exposes `chrome.runtime` to the `/help/` path of the trusted
  origins, not the whole `phibrowser.com` origin.
- `isTrustedHelpSender()` re-validates `sender.origin` / `sender.url` in the
  background: production origins must be on the `/help/` path; `localhost` /
  `127.0.0.1` are trusted on any port/path but **only reach the background in dev
  builds**, because release manifests never allowlist localhost.
- Unknown senders and unknown message types are rejected without side effects.

## Local development

Because dev builds allowlist localhost, the button works when the Help Center
runs locally:

1. Build the dev Sidecar (`pnpm build` in
   `phi-ai-staging-3/ai-extension/sidecar`) and reload it in Phi Canary. The dev
   build shares the same extension id as release (the `key` is inlined
   unconditionally), so the page connects with the same `EXT_ID`.
2. Run the Help Center locally (any port; `localhost` trust ignores the path, so
   the `/help/` base is not required for local connection) and open it in Phi.
3. The probe resolves → the button appears → clicking opens the sidebar.

## Deferred: search-to-sidebar ("Chat with Phi: &lt;query&gt;")

Opening the sidebar pre-filled from a search query is future work. The reusable
path is the Sidecar `ChatView` `initialMessage` prop, which auto-sends via
`chat-view.tsx`'s effect (`chat.sendMessage(buildInitialSendMessagePayload({ initialMessage }))`).
A future `phi:ask` message would carry the query end to end:
background stores it (mirroring `pendingSelections`), flushes it to the sidebar
port on connect, and calls `toggleChatSidebar(true)`.

## Open issues

- **Staging host unconfirmed** — `stag.phibrowser.com/help/*` is a best guess;
  confirm the real staging help domain and correct the manifest if it differs.
- **Version coupling** — gating depends on the installed Sidecar carrying the new
  `externally_connectable` matches. Older Sidecar builds leave the button hidden
  even inside Phi, so the manifest change must ship before (or with) any Help
  Center release that expects the button to appear.
