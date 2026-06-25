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
`Open as Split`, the **Chat** button, the menu-bar Sentinel, `cmd+tab`) are
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

## Memory guide (2026-06-24)

Added a dedicated Help chapter for the Memory system at `site/help/memory.md`,
linked in the `Help` sidebar (after `Meet your assistant`) and in the overview's
four-part list and "Where to go next" list. Until now Memory only existed as a
short `## Memory` sub-section inside `site/help/ai.md`.

Why: Memory is the first of Phi's four AI parts but had no page of its own. The
owner asked for a standalone guide that explains what Memory is, how it learns
from browsing, how the assistant uses it, and how the user stays in control, and
that also points to **Anamnesis**, the standalone version of the same system for
Chrome/Chromium browsers.

Decisions (agreed with the owner):

- The old `## Memory` section in `ai.md` was trimmed to a one-sentence teaser
  that links to `/help/memory`. The `## Memory` heading is kept so the `#memory`
  anchor still resolves, but the canonical link in `site/help/privacy.md` was
  repointed from `/help/ai#memory` to `/help/memory`.
- Anamnesis gets a short section with an outbound link to
  <https://phibrowser.com/anamnesis/>, not a deep comparison.
- Depth is concept-first in the house style (second person, why-focused, plain
  text, no images) while naming the key user-facing features.

Source material: the Memory implementation at
`../phi-ai/ai-extension/lexington/` (codename "lexington"; the standalone build
is "Anamnesis"), plus the product framing on
<https://phibrowser.com/news/introduce-memory-system-for-ai/> and
<https://phibrowser.com/anamnesis/>. User-facing terminology used in the guide —
**observations**, **Memory Galaxy**, per-site **memory collection**, import /
export, and **Anamnesis** — matches the extension. Internal details (the
egocentric knowledge-graph layers, the observation pipeline, IndexedDB stores,
retrieval/RRF) were deliberately left out.

Open issue: the Memory feature evolves in the extension repo. If the user-facing
concepts or controls (Memory Galaxy, memory collection toggle, import/export) are
renamed or reworked there, update `site/help/memory.md` to match. Anamnesis is a
separate product on the Chrome Web Store; if its model (BYO API key, portability)
changes, revisit that section.

Entry point (follow-up): the Memory Galaxy section now says where to open Memory. On the new tab there
is an entry just below the search box; in the browser chrome the button's position depends on the
[layout mode](/help/layouts) — **bottom-left** in Performance and Balanced, **top-right** in
Comfortable. Confirmed against `../phibrowser-mac/`: a `MemoryButton` in
`Sources/UserInterface/WebContent/Header/HeaderTrailingArea.swift` (top-right header, Comfortable) and
a bottom-bar memory button in `Sources/UserInterface/WebContent/FloatingSidebar/` (the floating
sidebar used in the non-Comfortable modes), both opening `chrome://memory`; the new-tab entry is in
`sidecar/src/components/newtab-view.tsx` (`openMemoryPage`). If the button placement or the
mode→position mapping changes, update `site/help/memory.md`.

## Phi Sentinel guide & Private AI (2026-06-24)

Promoted Phi Sentinel to its own Help chapter at `site/help/sentinel.md`, linked in the `Help`
sidebar (after `Automation & Phi Link`) and in the overview's "Where to go next" list.

Why: the owner asked the Help section to cover Phi Sentinel and its Private AI feature (running AI
on-device, which the owner colloquially calls "Local LLM"). Until now Sentinel was only a short
`## Phi Sentinel` sub-section inside `site/help/automation.md`, framed purely as the scheduled-task
orchestrator, and there was zero coverage of Private AI anywhere. Private AI is about privacy and
_where_ AI runs, not automation, so it did not fit under "Automation & Phi Link"; a dedicated Sentinel
guide covers both jobs Sentinel does — keeping automation running, and hosting Private AI.

Decisions (agreed with the owner):

- Dedicated `site/help/sentinel.md`; the `## Phi Sentinel` section in `automation.md` was trimmed to a
  one-sentence pointer to it (heading kept so the `#phi-sentinel` anchor still resolves).
- Terminology: use **Private AI** (the real Sentinel UI name). "Local LLM" is just the owner's
  colloquial name and is not used as the headline; the page only notes lightly that it runs a model on
  your Mac.
- Depth: concept + key practical points (what / why: privacy, offline, no per-request cost; per-task
  coverage — Memory and Data search on-device by default, Chat and Web tasks stay on Phi Cloud unless a
  stronger model is installed; bring-your-own provider; Apple Silicon + 16 GB gate). No install
  walkthrough, model catalog, ports, or MLX/Runner internals.
- `site/help/privacy.md` got a sentence noting Private AI can keep some tasks entirely on-device. The
  FAQ (`faq/sentinel.md`) was intentionally left unchanged this pass.

Source material: the Sentinel repo at `../sentinel/` — `docs/architecture-overview.md`,
`docs/llm-integration.md`, and the Private AI UI strings under
`ui/src/components/experimental/private-ai/`. User-facing terms used in the guide (**Private AI**,
task labels **Chat / Memory / Web tasks / Data search**, **Phi Cloud**, **On this Mac**, **Apple
Silicon**, 16 GB RAM) come straight from those UI strings. Internal mechanics (MLX servers,
`127.0.0.1` ports, model IDs, the Local LLM subsystem / AI Gateway split, Runner supervision) were
deliberately omitted.

Open issue: Private AI is an evolving, experimental Sentinel feature. If the shipped models, the
per-task routing defaults (which tasks are local by default), the hardware gate, or the "Private AI"
naming change, update `site/help/sentinel.md` and the privacy.md note to match.

## Skills guide (2026-06-24)

Promoted Skills to its own Help chapter at `site/help/skills.md`, linked in the `Help` sidebar (after
`Memory`) and in the overview's four-part list and "Where to go next" list. Until now Skills was only
a short `## Skills` sub-section inside `site/help/ai.md`; that section was trimmed to a one-sentence
teaser linking to `/help/skills`.

Why: the owner asked to pull Skills out and cover it properly, "for example the Skill marketplace".

Important reality check (drove the content): the owner expected a "Skill marketplace / store". An
exploration of `../phi-ai/phi-agent/` and `../phi-ai/ai-extension/sidecar/` found **no marketplace,
store, community publishing, or cross-user skill sharing**. What actually exists is a **Skills library
/ management page** in the Sidecar extension (`sidecar/src/pages/skills/index.tsx`): a spotlight of
featured built-in Skills, browse/filter (**All / Built-in / User created / Enabled**) + search, and
per-skill **Add/Remove to your library**, **Enable/Disable**, **View**. Built-in Skills are
Phi-maintained and opt-in; users create their own via a built-in **Skill Creator** meta-skill (user
skills are plain-markdown instructions, **Edit/Delete**). Skills always run through the assistant —
auto-discovered when relevant, or picked explicitly from the Skills list while composing a message.

Decision (agreed with the owner): write the built-in **Skills library** faithfully and do **not** use
"marketplace / store / community" wording, since that feature does not exist yet. Terminology used:
**Skills**, **built-in Skills**, **your library**, **Skill Creator**, **Enable/Disable**. Internal
mechanics (`SKILL.md` format, trusted JS scripts / `allowed-tools`, `/api/skills` routes, server
storage) were deliberately omitted.

Entry point: a follow-up added how to reach the Skills library — the **menu in the top-right corner of
the new tab** (the `⋮` overflow menu in `sidecar/src/components/newtab-menu.tsx`, which holds Recent
Conversations, Widgets, and a **Skills** item, `skills.menuLabel`). `site/help/new-tab.md`'s "Quick
access" line was updated to list the Skills library alongside recent conversations and widgets, for
consistency with how that menu is already described there.

Source material: `../phi-ai/phi-agent/` (skills service, `skills/built-in/`) and
`../phi-ai/ai-extension/sidecar/` (the Skills page and `src/locales/en.json` strings).

Open issue: if a real Skill marketplace / sharing / publishing feature ships later, `site/help/skills.md`
should be expanded to cover it (the owner already anticipates this framing).

## Themes & appearance guide (2026-06-24)

Added a Help chapter for the theme system at `site/help/themes.md`, linked in the `Help` sidebar
(after `Layouts & navigation`, grouping the two browser-appearance guides) and in the overview's
"Where to go next" list. `site/help/new-tab.md`'s "adapts to your light or dark theme" line was
repointed to link the new guide.

Why: the owner asked for a guide on the theme system, with scope including (but not limited to) the
new tab, the window, the selected-text background on web pages (which can be turned off), and the
sidebar.

Decisions / framing:

- Treat it as one unified Phi Browser feature set in **Settings → General**, not per-surface controls.
  Two sections: **Theme** (the **Color** preset swatches + an **Opacity** slider + the **Apply theme
  to text selection on web pages** toggle) and **Appearance** (**Color appearance**: System / Light /
  Dark).
- Scope section spells out what the theme colors: the **window** (toolbar / address bar / tabs, with
  Opacity controlling tint strength), the **sidebar** (selected/hovered tabs), the **new tab** (it
  follows the window theme automatically), and **selected text on web pages** (the toggle, on by
  default).
- Concept + key practical points, house voice; no internals.

Source material: `../phibrowser-mac/` —
`Sources/UserInterface/Preferences/General/GeneralSettingView.swift` (the Theme + Appearance UI),
`Sources/Utilities/Theme/ThemedColors.swift` (the eight built-in presets: Pure (default), Mint, Mist,
Aqua, Iris, Petal, Coral, Amber), and `Sources/Notifications/MessageCard/WindowThemeMessageRouter.swift`
(`selectionTintEnabled`, the web-page selection tint toggle). The new tab inherits the native window
theme via the extension's window-theme bridge (`../phi-ai/ai-extension/window-theme/`), so the NTP is
documented as following the browser theme rather than having its own control. (The lexington popup's
standalone System/Light/Dark selector applies to the standalone/Anamnesis build, not Phi Browser, so
it was intentionally not described here.)

Open issue: preset names and the exact Settings layout can change in the browser repo. If the presets,
the Opacity control, or the selection-tint toggle label change, update `site/help/themes.md`.

## Chat with Tabs (2026-06-24)

Added a `## Chat with Tabs` section to `site/help/ai.md` (right after "Talking to it"), plus a bullet
in that page's "different sides" list, and linked "attach a tab" from `site/help/new-tab.md`'s ask-box
line to it (`/help/ai#chat-with-tabs`). The redundant Split View / Tab Group sentence at the end of
"Talking to it" was folded into the new section to avoid duplication.

Why: the owner asked to introduce the Chat with Tabs feature somewhere suitable and to note that the
auto-add-current-tab-on-open behavior can be turned off in settings. No new page — Chat with Tabs is a
facet of talking to the assistant, so it lives in `ai.md`.

What it documents:

- You can attach one or more open tabs to a conversation as context and ask across them; because the
  assistant understands Split View and Tab Groups, attaching a grouped tab can bring the whole set.
- By default, opening the assistant auto-attaches the current tab. This is the
  **Automatically add current tab as context to new conversation** toggle under **Settings → Phi AI →
  AI Sidebar**; turn it off to start with nothing attached (you can still attach tabs manually).

Source material: `../phi-ai/ai-extension/sidecar/src/services/features.ts` — the Chat with Tabs
service and `getInitialChatAttachment` (auto-attach priority Tab Group > Split View > single tab); and
`../phibrowser-mac/Sources/UserInterface/Preferences/AISettings/AISettingView.swift` — the **AI
Sidebar** section toggle (exact label "Automatically add current tab as context to new conversation",
backed by `PhiPreferences.AISettings.enableChatWithTabs`). The "Settings → Phi AI" literal menu path
is kept (it is the real menu name), consistent with privacy.md and the FAQ.

Open issue: if the toggle label, its Settings location (AI Sidebar section), or the auto-attach
behavior changes, update the `## Chat with Tabs` section in `site/help/ai.md`.

## Agent / agentic expansion (2026-06-24)

Expanded the agentic coverage in `site/help/automation.md` in place (no new page). It previously had
only a thin intro plus `## On-demand actions` and `## Scheduled tasks` ("two modes") and did not cover
the agent's background work or its approval/control story.

Why: the owner asked to fill out the **Agent** feature.

What changed:

- Intro now frames three ways the agent works: act **now** (on-demand), run **in the background**
  (Shadow Tasks), and run **on a schedule** (scheduled tasks).
- **On-demand actions** enriched with the confirm-before-acting behavior (Confirm / Deny, risk-flagged).
- New `## Background tasks` section introducing **Shadow Tasks**: detached background runs that wait for
  approval, report progress/results/artifacts on the Shadow Tasks page (results do not auto-return to
  chat), notify on completion (Phi Link), and can be cancelled or rerun.
- `## Scheduled tasks` tied to background tasks + Phi Sentinel.
- New short `## Staying in control` consolidating the safety story; links to privacy.
- Existing `## On-demand actions`, `## Scheduled tasks`, `## Phi Sentinel`, `## Phi Link` headings kept
  so anchors (notably `/help/automation#scheduled-tasks`, used by `sentinel.md`) still resolve.
- `site/help/index.md`'s four-part **Agentic** bullet nudged to mention background tasks.

Decision (agreed with the owner): use the real product name **Shadow Tasks**, concept-first. The
`shadow:` command prefix and the technical task-page internals (Run ID, Worker Debug, Live Stream) were
intentionally left out as too power-user.

Source material: `../phi-ai/phi-agent/` (README + `agents/tools/runtime-descriptors.ts`:
`browser_task.execute`, `shadow_task.execute`, `scheduled_task.*`, `user_action.request` with low/
medium/high risk + Confirm/Deny) and `../phi-ai/ai-extension/sidecar/` (the Shadow Tasks page and
`src/locales/en.json` → `shadowTasks`: Waiting for approval → Queued → Running → Completed, Cancel /
Rerun, artifacts).

Open issue: if Shadow Tasks is renamed, or the approval/notification flow changes, update
`site/help/automation.md`. FAQ (`faq/ai.md`) still has only the older agentic Q&As (on-demand /
scheduled); a "background tasks" Q&A could be added later if desired.

## Trailing-slash URLs via directory-index pages (2026-06-25)

Why: the owner asked to enable **trailing slash** for the site, so every page URL ends in
`/` (e.g. `/help/layouts/` rather than `/help/layouts`).

VitePress 1.6.4 has no `trailingSlash` config option — only `cleanUrls` (already `true`), which
strips the `.html` extension but does not add a trailing slash. The repo also has no host-level
config (Netlify/Vercel/Cloudflare) where a redirect rule could be added. The only reliable,
host-independent way to get trailing-slash URLs in VitePress is the **directory-index** layout:
a page authored as `foo/index.md` builds to `foo/index.html`, which is served at `/foo/`.

What changed:

- Every non-index content page was moved from `<name>.md` to `<name>/index.md` (via `git mv`):
  all of `site/help/*.md` and `site/faq/*.md`. The already-index pages
  (`site/index.md`, `site/help/index.md`, `site/faq/index.md`, `site/get-started/index.md`)
  were left in place.
- All internal root-relative links were rewritten to the trailing-slash form across the Markdown
  content and `site/.vitepress/config.mts` (nav + sidebar): `/help/layouts` → `/help/layouts/`,
  and anchors moved the slash before the hash, e.g. `/help/privacy#turning-ai-off` →
  `/help/privacy/#turning-ai-off`. Section landing links that were already slashed (`/help/`,
  `/faq/`, `/get-started/`) were untouched.
- `cleanUrls: true` is kept. With the directory-index layout the page paths already carry the
  trailing slash; `cleanUrls` still governs whether the `.html` is shown and is orthogonal here.

Verified with `pnpm build`: 0 dead links, and `site/.vitepress/dist/` now emits
`help/<name>/index.html` / `faq/<name>/index.html` for every page.

Convention going forward: **author every new content page as `<section>/<name>/index.md`**, and
write internal links with a trailing slash (`/section/name/`, anchors as `/section/name/#anchor`).
A flat `<name>.md` would publish at `/section/name` (no trailing slash) and break the convention.

## Fix "floating chat button" wording (2026-06-25)

Corrected the description of how users open the assistant. The guides said to use
the **floating chat button**, which is inaccurate — there is no floating button.

Confirmed against `../phibrowser-mac/`: the control is `ChatButton`
(`Sources/UserInterface/Sidebar/Bottom/ChatButton.swift`), a capsule button
labeled **Chat** that opens the AI Chat sidebar via `state.toggleAIChat()`.
There is no floating button — the "floating" wording was wrong.

Its position is **layout-dependent**, gated on `LayoutMode.showsNavigationAtTop`
(`= self != .performance`, in `Sources/UserInterface/Preferences/PhiPreferences.swift`).
`ChatButton` is rendered in exactly two places (whole-repo grep confirmed):

- **Sidebar bottom bar** (`Sidebar/Bottom/SidebarBottomBar.swift`,
  `SidebarBottomBarSwiftUIView`). Visible only when `navigationAtTop == false`,
  i.e. **Performance** — `updateChatButtonVisibility()` hides it when
  `navigationAtTop`.
- **Page header trailing (top-right) area** (`WebContent/Header/HeaderTrailingArea.swift`).
  Shown when `showChatButton = navigationAtTop && …`, i.e. **Balanced** and
  **Comfortable**.

So: bottom of the sidebar in Performance; top-right of the page header in
Balanced and Comfortable. (Balanced and Comfortable share the same
`HeaderTrailingArea` component; the docs describe them together — decided with
the owner, "option B".)

Changed the phrasing to a layout-aware description in:

- `site/help/ai/index.md` (the "Talking to it" list) — links to `/help/layouts/`
- `site/faq/ai/index.md` ("How do I talk to the assistant?")
- the UI-reference list in this doc's "Naming, positioning, and structure" note

If the `navigationAtTop` → position mapping changes, or `ChatButton` moves out of
either mount point, update both guides to match.

## Content scope update — Spaces & Profiles guides (2026-06-25)

### Requirement

Add Spaces / Profiles coverage to the Help and FAQ, derived from the real
`../phibrowser-mac/` implementation, and contrast Phi's model with Arc and Dia.

### How

Added two new pages and wired them into navigation:

- `site/help/spaces/index.md` — "Spaces & Profiles" Help guide: the two-layer
  model (Space = look/feel + bookmarks; Profile = cookies/history/logins/extensions
  isolation), what lives in a Space, create/switch/rename/delete, URL Rules, and a
  "Coming from Arc or Dia" comparison.
- `site/faq/spaces/index.md` — matching concise Q&A.
- Registered both in `site/.vitepress/config.mts` sidebar (after Layouts), and
  added pointers in `site/help/index.md` and `site/faq/index.md`.

Facts were verified against the source, not assumed. Key code references:

- `Sources/States/Space/SpaceManager.swift`, `Sources/States/ProfileManager.swift` —
  a Space binds to exactly one `profileId`; a Profile can back multiple Spaces
  (N Spaces : 1 Profile).
- `Sources/UserInterface/Sidebar/Spaces/CreateSpacePanel.swift` — confirmed UI
  copy: "Each space has its own independent bookmarks" and "Each profile has its
  own cookies, history, and extensions." Profile picker offers **New Profile**.
- `Sources/States/Space/URLRouter.swift`, `LocalStorage/LocalStore+SpaceURLRule.swift`,
  `Sidebar/Spaces/SpaceURLRulesEditor.swift`, `SpaceChooserView.swift` — URL Rules
  match types (Domain suffix / Domain / Domain contains / URL), **Ask every time**
  → **Open in which Space?** chooser, most-specific-rule-wins precedence.
- Pinned tabs are Profile-scoped (shared across Spaces of the same Profile);
  bookmarks and the optional theme override are per-Space.

Comparison facts (Arc same two-layer model; Dia dropped Spaces, uses Profiles as
workspaces in separate windows) were cross-checked via web sources in June 2026,
since the knowledge cutoff predates current Dia behavior. Per owner guidance, the
guides frame URL Rules as _inspired by_ Arc's Air Traffic Control (Arc's own
branded routing feature), not invented by Phi and not claimed to be identical.

### Validation

`pnpm format:check` and `pnpm build` both pass; the two new pages render.

### Open issues

- The Swift URL-matching logic is mirrored by a C++ `phi::PhiURLRouter` with no
  automated drift check. If routing precedence changes on either side, the URL
  Rules section of both guides may need revisiting.
- Arc/Dia behavior is competitor-dependent and may drift; revisit the comparison
  if either product changes its Spaces/Profiles model.

## Time Machine backups guides (2026-06-25)

### Requirement

Add Time Machine coverage to Help and FAQ, derived from the real
`../phibrowser-mac/` implementation.

### How

Added two pages and wired them into navigation:

- `site/help/time-machine/index.md` — "Time Machine backups" Help guide.
- `site/faq/time-machine/index.md` — matching concise Q&A.
- Registered both in `site/.vitepress/config.mts` sidebar (after Privacy) and
  added pointers in `site/help/index.md` and `site/faq/index.md`.

### Key facts (verified against source, not assumed)

The crucial framing decision: Phi's Time Machine is a **version rollback** safety
net, **not** Apple's Time Machine and **not** a continuous/scheduled backup. The
guides lead with that distinction to prevent the obvious confusion.

- `Sources/Application/TimeMachine/TimeMachineSnapshotManager.swift`,
  `TimeMachineBootstrap.swift` — a snapshot is created automatically at launch,
  only when the running build matches the rollback policy's `backupTriggerBuild`,
  and only once per such build. Users do not trigger or schedule it.
- `Sources/Application/TimeMachine/TimeMachineModels.swift` — a snapshot captures
  the previous app version plus its data (Phi data always; Chromium data when the
  policy sets `includeChromiumData`). `menuTitle` format is
  `Phi <version> (<build>) on yyyy.M.d`.
- `Sources/Application/AppController+Menu.swift` — verified UI copy: Help menu
  **Time Machine Backups**; empty state **No Backups Available** (catalog-read
  failure shows **Backups Unavailable**); confirm title **"Restore Time Machine
  Backup?"** with body "Phi will quit and restore %@. The current app and selected
  user data will be replaced." and a **Restore** button.
- `Sources/Networking/TimeMachinePackageDownloader.swift`,
  `TimeMachineRestoreCoordinator.swift` — restore downloads the previous version
  (`rollbackPackageURL`, SHA-256 verified), so a network connection is required;
  the restore is crash-recoverable.
- Snapshots are local-only: no cloud, no account binding, not cross-device, not
  encrypted (the guides say "stored locally on your Mac" and do not claim
  encryption).
- The sibling **Manage User Data** (`AppController+Menu.swift:282-293`:
  **Export User Data…** / **Import User Data…**) is the user-controlled manual
  backup; the guides point to it as the tool for new-Mac migration, which Time
  Machine intentionally does not cover.

### Validation

`pnpm format:check` and `pnpm build` both pass; the two new pages render.

### Open issues

- Behavior is policy-driven (`Resources/TimeMachineRollbackPolicy.json`). The
  guides stay general about _when_ snapshots appear ("before certain major
  updates") rather than naming build numbers, so they should not need updates as
  the policy changes. Revisit only if the menu strings or the restore flow change.

## Bookmarks & pinned tabs guide (2026-06-25)

### Requirement

Add a dedicated chapter on bookmarks and pinned tabs. The owner's framing: Phi's
bookmarks open in place as a tab (like Arc/Dia), and pinned tabs are also borrowed
from Arc/Dia — verify against `../phibrowser-mac/` and the web before writing.

### How

- Added `site/help/bookmarks/index.md` — "Bookmarks & pinned tabs" Help guide.
- Enriched the existing `site/faq/bookmarks/index.md` (did not add a new FAQ page,
  since one already exists) with Q&As on click-in-place behavior, per-Space vs
  per-Profile scope, pin/unpin, and an updated Arc/Dia comparison.
- Registered the Help page in `site/.vitepress/config.mts` sidebar (after Spaces)
  and added a pointer in `site/help/index.md`.
- Trimmed the overlapping "Tabs, pinned tabs, and bookmarks" section in
  `site/help/layouts/index.md` to a short overview that points to the new chapter,
  removing the duplicated per-mode bookmark-creation detail (still covered in the
  bookmarks FAQ) and the standalone Arc paragraph (now in the new chapter).

### Key facts (verified against source, not assumed)

- `Sources/States/BrowserState+Bookmark.swift` (`openBookmark(_:)`) — clicking a
  bookmark activates its bound tab if already open (`setAsActiveTab()`), otherwise
  creates a tab bound to the bookmark via `customGuid`. This is the "opens in place
  as a tab" behavior, not a throwaway new tab.
- `LocalStore+Bookmark.swift` `bookmarksPublisher(profileId:spaceId:)` — bookmarks
  are scoped per (Profile, Space). `LocalStore.swift` `getAllPinnedTabs(for
profileId:)` — pinned tabs are scoped per Profile (shared across that Profile's
  Spaces). Consistent with the Spaces & Profiles guide.
- Verified UI strings: **Add to Bookmark** / **Add to Bookmark Bar** (Comfortable)
  / **Add to Folder** / **New Nested Folder** / **Add Split to Bookmark**, and
  **Pin** / **Unpin** / **Pin Split** / **Unpin Split** (`TabModel+Sidebar.swift`,
  `BookmarkModel+Sidebar.swift`). Drag-to-pin is confirmed by the pinned-grid empty
  hint "Drag tabs here or pin them from the tab list"
  (`PinnedTabViewController.swift`). Bookmarks support folders/nesting and pinned
  tabs support drag reordering.

### Comparison facts (web-verified, June 2026)

- **Arc** has no traditional bookmarks (uses pinned tabs + Favorites) and opens
  links from pinned tabs in a **Peek** window. The guide explicitly says Phi has
  **no Peek equivalent** and keeps a real bookmark tree — do not attribute Peek
  behavior to Phi.
- **Dia** keeps bookmarks but surfaces them mainly via its command bar; Phi keeps
  them visible in the sidebar.
- Phi pinned tabs are per-Profile, framed as closer to Arc's cross-Space Favorites
  than Arc's per-Space pinned tabs.

### Validation

`pnpm format:check` and `pnpm build` both pass.

### Open issues

- Some interactions (drag a tab out of the grid to unpin, drag-to-bookmark exact
  affordance) are documented from established behavior / the existing layouts
  guide rather than fully traced in code; revisit if pin/unpin drag rules change.

## Future updates

When raising the minimum Node.js or pnpm major version, update all of these together:

- `.node-version`
- `package.json` `engines.node`
- `package.json` `engines.pnpm`
- This setup note, if the policy changes materially
