# Initial setup notes

## Original requirement

Create a public GitHub repository under the `phibrowser` organization for a Help, FAQ, and Docs site. The site must use VitePress with pnpm, Prettier, Husky, and lint-staged. User-facing site content must live under `site/` so repository-level AI and handoff documentation can use `docs/` without colliding with the VitePress content tree.

The requested toolchain policy is minimum Node.js 24 and minimum pnpm 11, without maximum version caps or patch-level locks.

## Implementation

The project was initialized as `help-center`.

Key implementation details:

- VitePress content and configuration live under `site/`.
- `pnpm dev` runs `vitepress dev site --port ${PORT:-3000}`, so the default port is `3000` and the `PORT` environment variable can override it.
- Prettier is configured with an intentionally empty `.prettierrc` containing `{}`.
- Husky runs lint-staged from `.husky/pre-commit`.
- lint-staged formats staged files with `prettier --write --ignore-unknown`.
- `.npmrc` enables `engine-strict=true` so pnpm enforces the declared minimum engines.
- `.node-version` contains `24` as the baseline local Node.js major version.
- `package.json` declares `node >=24` and `pnpm >=11` as minimum-only engine ranges.
- Corepack-based package-manager pinning is intentionally not used.

During dependency installation, pnpm required approval for the `esbuild` build script used by the VitePress dependency chain. The approval is recorded in `pnpm-workspace.yaml` with `allowBuilds.esbuild: true`.

## Validation

The project should be validated with:

```sh
pnpm format:check
pnpm build
```

## Open issues

No open implementation issues are known at initial setup time. Future content structure can be expanded once Phi has finalized the Help, FAQ, and Docs information architecture.

## Content scope update

The site's short-term purpose was refined to be primarily an information site:
host help docs and orient new users. It is intentionally not a download landing
page, because the official marketing site already makes downloading prominent.

Changes made for this scope:

- Added a `Get started` page (`site/get-started/index.md`) that folds in the two
  install methods. The official `.dmg` download from
  <https://phibrowser.com/download/> is presented as the primary path, with
  Homebrew (`brew install --cask phibrowser/tap/phi`) as the alternative.
- Removed the placeholder `FAQ` and `Docs` sections. FAQ content is already
  covered on the marketing site, and a separate Docs section is not meaningful
  yet. The site now has two sections: `Get started` and `Help`.
- The home page stays informational: neutral hero actions (`Get started`,
  `Browse Help`) with no strong download call-to-action.

Open issue: the repo-level `README.md` and `package.json` still describe the
project as a "Help, FAQ, and documentation site for Phi." These were left as-is
as repository metadata; update them if the FAQ/Docs framing should be dropped
there too. **Resolved in "Naming and positioning unification" below.**

## New-user guides

The `Help` section was filled in with narrative new-user guides that orient a
brand-new Phi user. They intentionally **complement, not duplicate**, the
official FAQ at <https://phibrowser.com/help/>, which is already a thorough
Q&A reference. These guides give the "what / why / how to think about it" and
cross-link to the official FAQ for step-level answers.

Pages under `site/help/`:

- `index.md` — overview ("What is Phi"), doubling as the Guides landing page.
- `layouts.md` — why a vertical sidebar, the three layout modes (Performance /
  Balanced / Comfortable), tabs/pinned tabs/bookmarks (and how bookmarks differ
  per mode), Split View, Tab Groups, and how the assistant reads layout context.
- `ai.md` — Memory, the Assistant, and Skills (Memory's local-first handling,
  how to reach the assistant, what it can do).
- `automation.md` — agentic capabilities: on-demand actions, scheduled tasks,
  Phi Sentinel (the menu-bar background orchestrator), and Phi Link (Telegram).
- `privacy.md` — local-first model, what Phi does not collect, the cloud-LLM
  processing nuance, viewing/deleting memory, turning AI off (which permanently
  wipes memory), and the open-source core.

The `get-started/index.md` page also gained a "First run" and "Coming from
Chrome?" section. The sidebar in `site/.vitepress/config.mts` is grouped into
`Get started` and `Guides`.

Source material and accuracy: the guides were grounded in user-facing facts
confirmed from the official site (phibrowser.com and the full answer text of its
`/help/` FAQ) and the sibling repositories `../phibrowser-mac/` and
`../phi-ai/`. Concrete UI references that appear in the guides (e.g.
`Settings → Phi AI`, `View → Always show bookmark bar`, right-click
`Open as Split`, the floating chat button, the menu-bar Sentinel, `cmd+tab`) are
taken directly from the official FAQ rather than invented. Anything not
confirmed there is kept general, and step-level detail is deferred to the FAQ.

## Naming and positioning unification (2026-06-24)

The project's wording for "what the site is called", "what the product is
called", and "what content it covers" had drifted apart across surfaces:

- The GitHub repository description read `Help site for Phinomenon.` (the
  company/team name, neither the product nor the site name).
- The site name alternated between `Phi Help Center` (VitePress `title` and the
  home hero) and `Help Center` (the `README.md` heading).
- `README.md` and `package.json` described the project as a "Help, FAQ, and
  documentation site for Phi", while the site actually ships only `Get started`
  and `Help` narrative guides and links out to the official FAQ.
- Body content always used the short name `Phi`, with no formal full name.

Decisions (agreed with the owner):

- Site name is **Phi Help**.
- Product name is **Phi Browser**, introduced in full on first mention and then
  shortened to **Phi**. Feature names (`Phi AI`, `Phi Link`, `Phi Sentinel`)
  are unchanged.
- Positioning phrase is **"Help and FAQ for Phi Browser."** The `FAQ` framing is
  intentionally kept; in-site FAQ pages are deferred and will be added later, so
  no empty placeholder pages were created in this pass.

What changed:

- GitHub repository description set to `Help and FAQ for Phi Browser.`
- `README.md`: heading `Help Center` → `Phi Help`; tagline and the "Site
  content" line updated to drop the stale `FAQ, and documentation` / `Docs`
  framing in favor of `Help and FAQ`.
- `package.json` `description` → `Help and FAQ for Phi Browser.`
- `site/.vitepress/config.mts`: `title` → `Phi Help`; `description` → `Help and
FAQ for Phi Browser.`
- `site/index.md`: hero `name` → `Phi Help`; tagline and image `alt` now say
  `Phi Browser`. The hero `text` and feature blurbs stay content-accurate (they
  reflect what is on the site today) so the user-facing home page does not
  advertise FAQ pages that do not exist yet — the full "Help and FAQ" positioning
  lives in the project metadata.
- `site/help/index.md` and `site/get-started/index.md`: the first mention on each
  top-level entry page now uses the full name `Phi Browser`, then continues with
  `Phi`. Deeper guides (`layouts.md`, `ai.md`, `automation.md`, `privacy.md`)
  keep the short name `Phi` to avoid repetition.

Open issue: in-site FAQ pages do not exist yet. The "official FAQ" links to
<https://phibrowser.com/help/> in the guide pages stay as-is until in-site FAQ
content lands; revisit those links when the FAQ section is built. **Resolved in
"In-site FAQ and Help restructure" below.**

## In-site FAQ and Help restructure (2026-06-24)

Following the naming work above, the owner asked to (1) add a real FAQ to the
site and (2) fold `Get started` into `Help` instead of keeping it as a separate
top-level section.

Information architecture is now two pillars — **Help** and **FAQ**:

- Top nav is `Help` and `FAQ`.
- The sidebar has one `Help` group (Overview, Getting started, Layouts &
  navigation, Meet Phi AI, Automation & Phi Link, Privacy & your data) and a
  `FAQ` group. The install page keeps its `/get-started/` URL; it is no longer a
  separate top-level nav/sidebar group, just an item inside `Help`, and is now
  labeled `Getting started`.

FAQ content lives under `site/faq/`, one page per category (the owner asked to
split the original single page):

- `index.md` is the FAQ landing — a short intro plus a linked list of the topic
  pages.
- Each category is its own page (`layouts`, `bookmarks`, `split-view`, `ai`,
  `sentinel`, `link`, `pricing`, `privacy`) with the category as `H1` and each
  question as `H2`, so the in-page outline lists the questions.
- It mirrors the full official FAQ, rewritten in the site's voice and grounded
  in the same source — the published FAQ at <https://phibrowser.com/help/>,
  which is served from Strapi (there is no static FAQ source file in the repo;
  the live page is the canonical text).
- The FAQ sidebar group lists the landing page plus the category pages.
- The official FAQ's "Getting started" category was not duplicated as a FAQ
  page; that material already lives in the Help `Getting started` guide (its
  "Coming from Chrome?" section), so the FAQ landing links there instead.

Guide cross-links were repointed and simplified, per the owner: now that the FAQ
is in-site and always present in the nav, the four deep guides (`layouts.md`,
`ai.md`, `automation.md`, `privacy.md`) had their trailing "see the official
FAQ" footers removed. The `Help` overview (`site/help/index.md`) keeps a single
FAQ pointer, repointed from `https://phibrowser.com/help/` to the in-site
`/faq/`.

The home page (`site/index.md`) was updated now that the FAQ exists: the hero
`text` is `Help and FAQ`, a `Read the FAQ` action was added, and the two feature
cards are now `Help` and `FAQ`.

Open issue: the in-site FAQ duplicates the Strapi-backed official FAQ by hand, so
the two can drift. If the official FAQ changes often, consider generating
`site/faq/` from the same Strapi source instead of maintaining it manually.

## Assistant voice: do not call it "Phi AI" (2026-06-24)

Editorial decision from the owner on how to refer to Phi's AI: we generally do
**not** call it "Phi AI". After install, the user gives the assistant a name and
an avatar and refers to it by that name from then on. It is meant to feel like a
real presence working alongside you — not a traditional bot, "an AI", or a
model you operate.

Applied:

- `site/help/ai.md` retitled from `Meet Phi AI` to `Meet your assistant` and
  rewritten to lead with the named companion; Memory, talking to it, and Skills
  are framed as sides of that companion. The `## Memory` heading is kept
  verbatim because `site/help/privacy.md` links to its `#memory` anchor.
- The `Meet Phi AI` label/link text was updated to `Meet your assistant` (or
  `your assistant` in lowercase prose) in the sidebar (`config.mts`), the Help
  overview, and the Get started page.
- The FAQ question `What is the Phi AI Assistant?` became `What is the
assistant?`.

Deliberately left as-is: the literal settings path **Settings → Phi AI** in
`get-started`, `privacy`, and the FAQ. That is the actual menu name in the
product (a UI label), not a conversational way of naming the assistant.

## New tab & widgets guide (2026-06-24)

Added a Help chapter for the new tab page and widgets at
`site/help/new-tab.md`, linked in the `Help` sidebar (after `Meet your
assistant`) and in the overview's "Where to go next" list. The owner asked for
an "NTP & Widgets" chapter; the page is titled **New tab & widgets** because
"NTP" is internal jargon and the site is end-user facing.

Source material: grounded in the Phi AI extension at
`../phi-ai/ai-extension/sidecar/` (and the widget catalog in
`../phi-ai/memory/src/artifacts/catalog.ts`). Only user-visible behavior was
written up; implementation details (the Sidecar/Lexington split, per-widget
iframes, `chrome.storage`/IndexedDB persistence, dev-only controls) were
deliberately left out. The built-in widget list (Clock, Weather, Quote of the
day, Memory image, Pomodoro, Currency, Quick translator, Top sites, GitHub
stars, Recent reads, Hot posts, Daily report, Weekly report) and the management
verbs (Move & Resize, Refresh, Edit, Delete) match the extension's catalog and
localized strings.

Open issue: these features evolve in the extension repo. If widgets are
added/removed or renamed there, update `site/help/new-tab.md` to match.

## Search (2026-06-24)

Enabled VitePress's built-in local search (`themeConfig.search.provider:
"local"`, backed by MiniSearch) instead of Algolia DocSearch.

Rationale: the site is tiny (~17 pages, English) and statically deployed. Local
search builds its index at build time and runs entirely in the browser — no
external service, API keys, crawler, or approval, and no search queries sent to
a third party, which fits the site's local-first/privacy framing. Algolia is
aimed at large, multi-page (or multi-repo) docs that need analytics, ranking
control, or stronger typo tolerance; it would be over-engineered here and adds a
network dependency.

Revisit if the content grows to hundreds of pages (the client-side index gets
heavy) or there is a real need for search analytics or cross-site search. If
Chinese content is ever added, local search still works but MiniSearch needs CJK
tokenization options (CJK does not split on spaces).

## Phi assistant button in the nav bar (2026-06-24)

Added an AI button next to the search box that is meant to open Phi Browser's
own AI assistant sidebar.

Why this needs a contract: investigation of `../phi-ai/` and `../phibrowser-mac/`
found **no page-facing API** for an ordinary web page to open Phi's sidebar. The
sidebar is native (`phibrowser-mac` `ChatButton` -> `Tab.toggleAIChat()`); the
only injected page API (`window.__phiCtx.askPhi`) exists solely inside new-tab
widget sandboxes, and `externally_connectable` is limited to
`account.phibrowser.com`. So the button cannot work until Phi adds a listener.

Agreed approach (with the owner): the page emits a message and Phi implements
the listener later.

- Contract: the button calls
  `window.postMessage({ source: "phi-help", type: "phi:open-sidebar" }, window.location.origin)`.
- Phi Browser (a content script injected into pages, or the native layer) should
  listen on `window` for a `message` whose `data.source === "phi-help"` and
  `data.type === "phi:open-sidebar"`, and toggle the assistant sidebar.
- In any non-Phi browser nothing is listening, so the click is a harmless no-op.

Implementation:

- `site/.vitepress/theme/PhiSidebarButton.vue` — the button (a sparkles/AI icon)
  and the `postMessage` call.
- `site/.vitepress/theme/index.ts` now extends the default theme and renders the
  button in the `nav-bar-content-before` slot. The default search box is
  `flex-grow: 1` (a transparent full-width bar with the visible pill on its
  left), so `custom.css` shrinks it (`flex-grow: 0`), reorders it ahead of the
  button (`order: -1`), and gives the button `margin-right: auto`. The result is
  the search pill and the button paired together on the left, with the nav menu
  pushed to the right.

Open issues:

- The browser-side listener does not exist yet; the button is inert until Phi
  ships it. If the message shape changes, update both sides.
- The button shows in every browser (the site is public). There is no reliable
  way to detect "running inside Phi" from a normal page today, so it is not
  gated; revisit if a detection signal becomes available.

## Future updates

When raising the minimum Node.js or pnpm major version, update all of these together:

- `.node-version`
- `package.json` `engines.node`
- `package.json` `engines.pnpm`
- This setup note, if the policy changes materially
