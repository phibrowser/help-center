---
name: phi-help-localization
description: Translate, synchronize, review, and prepare Phi Help Center locales using the repository's isolated localization workspaces and guarded promotion workflow. Use when adding a Help language, translating `localization/<locale>/`, updating a locale after English source changes, checking localization status, assisting a locale review, or preparing a locale for promotion. Do not use this workflow for unrelated Phi UI string repositories.
compatibility: Requires the help-center repository, Node.js 24+, pnpm 11+, Git, and the repository's i18n scripts.
---

# Phi Help localization

Use the repository workflow. Do not improvise a parallel locale pipeline or translate directly into the publishable site tree.

## Required context

Before changing a locale:

1. Confirm the current repository is `help-center` and inspect `git status --short --branch`.
2. Read `docs/localization-guide.md` completely.
3. Read `../phi-help-writing/SKILL.md` and its linked references. `.agents/skills` is the canonical project Skill directory; `.claude/skills` is only a symlinked compatibility entry. Apply the writing Skill's accuracy, voice, product terminology, and punctuation rules to translated prose in a way that remains natural in the target language.
4. Read `localization/<locale>/status.json` when the workspace exists.
5. Read `site/.vitepress/i18n/schema.ts` before editing `resource.json` or `status.json` manually.
6. If the task concerns Chinese, preserve script-first locale identity: `zh-Hans` and `zh-Hant` are separate translations, and missing Traditional Chinese must fall back to English rather than Simplified Chinese.

Treat current source files and scripts as authoritative if this Skill and the repository disagree. Stop and report the discrepancy instead of bypassing a check.

## First decide the task mode

Use one of these modes and state it before editing:

- **New locale draft:** create an isolated workspace and translate it.
- **Continue translation:** work inside an existing isolated workspace.
- **Source synchronization:** incorporate English changes into an existing locale and reset affected review state.
- **Review assistance:** identify issues or apply reviewer-requested corrections without claiming independent approval.
- **Promotion preparation:** validate readiness and present blockers or the exact promotion action for authorization.

Ask for the locale if it is missing. It must be one of the non-default codes in `site/.vitepress/i18n/supported-locales.json`, which mirrors the main site's language list; the native language-menu label comes from that catalog and is not chosen per locale. Ask who owns translation if the task requires assigning an owner. Do not invent a person's name.

## Non-negotiable boundaries

- Draft content lives only under `localization/<locale>/content/` and `localization/<locale>/resource.json`.
- Never manually add a draft to `site/`, `site/.vitepress/i18n/locales/registry.json`, navigation, or generic locale code.
- Never add language-code branches or translated literals to generic configuration, Vue components, CSS, or tests.
- Preserve complete page parity. Do not promote or describe a partially translated locale as publishable.
- Do not use machine translation output as independent review.
- Do not set `contentReview` or a global review gate to `approved` unless the named responsible reviewer actually approved the final material and supplied evidence.
- Do not fabricate owners, review evidence, legal conclusions, search QA, deployment evidence, or source revisions.
- Translation completion, content approval, privacy/legal approval, promotion, commit, push, deployment, publication, and production verification are distinct states.
- `pnpm i18n:promote` is a maintainer action. Run it only when the user explicitly requests promotion after seeing readiness and consequences.
- A request to translate does not authorize commit, push, deployment, or publication.

## New locale draft

Start only from committed, clean root-language Markdown:

```sh
pnpm i18n:scaffold <locale>
```

If the locale is not in the shared catalog, stop and report it; do not add a language to the catalog without the main site making the same change.

The command must create:

```text
localization/<locale>/
├── content/
├── resource.json
└── status.json
```

Verify that the locale is absent from:

- `site/<locale>/`;
- `site/.vitepress/i18n/locales/registry.json`;
- generated deployment output.

If the scaffold refuses dirty English source or an existing workspace, stop and report the blocker. Do not delete or overwrite the existing material without explicit user direction.

## Translate `resource.json`

Translate every user-facing string while preserving the schema and identifiers.

Keep unchanged:

- `key`;
- `lang`;
- `label` (the catalog language name);
- `root: false`;
- JSON property names and guide route keys;
- literal product, provider, setting, and command names unless approved target-language product terminology says otherwise.

Translate:

- site metadata;
- navigation, sidebar, controls, 404, and accessibility labels;
- local-search UI;
- Ask Phi and project-owned component copy;
- Cookie Consent and privacy controls;
- code-copy labels;
- realistic target-language `searchQueries`.

`searchQueries` are acceptance examples, not translations chosen only because they produce a hit. Use phrases a native user would plausibly search for and confirm that the intended pages appear after build.

Privacy and consent copy must preserve source meaning, but an agent translation is not privacy/legal approval. Leave that review gate open until a qualified reviewer approves the final wording for the relevant jurisdictions.

## Translate Markdown

Translate every file under `localization/<locale>/content/`.

Preserve:

- frontmatter and a translated `description`;
- one H1 and the source heading hierarchy;
- custom containers, code fences, commands, explicit IDs, and Markdown structure;
- factual qualifications, limitations, privacy disclosures, third-party roles, and automation warnings;
- the distinction between Browser Skills and the phi-browser skill;
- all intended Help and external links.

Use current product behavior, UI strings, policies, and approved terminology as evidence. Flag uncertainty instead of inventing a translation or product claim. Do not silently turn future behavior into present tense.

Rewrite internal Help links to the target locale prefix. For locale `fr`:

```md
[Memory](/memory/)
```

becomes:

```md
[Mémoire](/fr/memory/)
```

Do not prefix main-site links such as `/privacy/` unless an approved localized destination exists.

Use normal `**...**` emphasis first. For scripts without spaces, use targeted `<strong>...</strong>` only where `pnpm test:i18n` demonstrates a parser-incompatible span. Do not convert all emphasis to HTML.

## Maintain truthful status

Use only these workflow values:

- `todo`
- `in_progress`
- `complete`
- `approved`

During agent translation:

- set a page to `in_progress` while incomplete;
- set its translation to `complete` only after the entire page has been translated and self-checked;
- leave `contentReview` unchanged unless recording a real independent review;
- do not promote `complete` to `approved` on your own authority.

A translation owner may later mark translation `approved`. An independent content reviewer may mark `contentReview` `approved`. Global product terminology, privacy/legal, and search QA gates require the actual owner's name and concrete evidence tied to the final content or tested build.

Run:

```sh
pnpm i18n:status <locale>
```

A nonzero result is expected while a draft is incomplete. Report every blocker; do not weaken the gate to make it pass.

## Synchronize after English changes

If status reports stale root content:

1. Inspect the English changes after `sourceRevision`.
2. Map every changed, added, removed, or renamed English page to the locale workspace.
3. Apply the source changes semantically, not as a blind textual merge.
4. Reset affected translation and content-review states to reflect the real work required.
5. Reset any global approval invalidated by changed terminology, privacy wording, or search behavior.
6. Update `sourceRevision` only after all relevant English changes have actually been incorporated.
7. Re-run status and validation.

Never change `sourceRevision` only to silence stale detection.

## Review assistance

When assisting a reviewer:

- produce findings with file paths and source evidence;
- distinguish translation defects, factual/product issues, terminology issues, legal/privacy questions, search issues, and preferences;
- apply corrections the reviewer requests;
- preserve unresolved disagreements and uncertainty;
- identify which statuses need reopening after edits.

You may record an approval only when the user explicitly provides the reviewer identity, scope, final decision, and evidence. Your own second pass is self-review, not independent review.

## Validation

For draft work, run at minimum:

```sh
pnpm i18n:status <locale>
pnpm format:check
```

`pnpm i18n:status` checks workflow metadata, page inventory, approvals, and the English source baseline. The isolated draft is not part of VitePress, so neither `pnpm test:i18n` nor `pnpm build` renders or link-checks it before promotion. Do not report an unpromoted draft as technically build-validated.

You may run the following commands before promotion to confirm that the already registered site remains healthy, but label that scope accurately:

```sh
pnpm test:i18n
pnpm build
```

Full source, link, anchor, emphasis, SEO, sitemap, and search validation for the new locale occurs after authorized promotion copies it into the publishable tree. Promotion rolls back its publication-tree changes when source validation fails.

A registered locale may truthfully report `registered/review-pending`. Do not call that reviewed or production-ready.

Do not start a local dev server yourself. When visual or runtime QA is needed, ask the user to start the documented environment and return URLs, screenshots, logs, or test results. Request checks for desktop and mobile navigation, language switching, long headings, typography, local search, code copying, Cookie Consent, Ask Phi, and locale 404 behavior.

## Promotion handoff

When `pnpm i18n:status <locale>` reports `ready-to-promote`:

1. Summarize the exact locale, source revision, owners, approvals, evidence, validation results, and remaining manual or external actions.
2. Explain that promotion copies the draft into `site/<locale>/`, adds the locale resource, and registers it for the build, search index, language menu, sitemap, and deployment artifacts.
3. Ask for explicit authorization before running:

```sh
pnpm i18n:promote <locale>
```

4. After authorized promotion, run `pnpm build` and report whether the locale is merely promoted locally or has separately been committed, pushed, deployed, and production-verified.

Promotion does not authorize publication. Deployment and any external action require separate explicit approval.

## Completion report

Always report:

- task mode and locale;
- files translated or synchronized;
- source revision used;
- translation and review state;
- validation commands and results;
- unresolved product, terminology, privacy/legal, search, layout, or source-sync issues;
- required next action, responsible party, trigger or timing, dependencies, and evidence needed.

Use exact lifecycle language: draft, translation complete, review pending, ready to promote, promoted locally, committed, pushed, deployed, or production-verified. Do not collapse these into “done.”
