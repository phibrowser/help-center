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
there too.

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

## Future updates

When raising the minimum Node.js or pnpm major version, update all of these together:

- `.node-version`
- `package.json` `engines.node`
- `package.json` `engines.pnpm`
- This setup note, if the policy changes materially
