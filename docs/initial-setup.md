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

## Future updates

When raising the minimum Node.js or pnpm major version, update all of these together:

- `.node-version`
- `package.json` `engines.node`
- `package.json` `engines.pnpm`
- This setup note, if the policy changes materially
