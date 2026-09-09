# Advanced settings and Kiosk shortcuts

Source synchronization of six existing Help pages into de, es, fr, ja,
ko, nl, zh-Hans, and zh-Hant. The user requested American English spelling
for this update, overriding the writing skill's British spelling default.

## Scope

- Move the Developer mode and automatic Picture-in-Picture paths to
  Advanced in agent-passwords, phi-browser-skill, and tips-and-shortcuts.
- Add Advanced to the account deletion path in privacy. The rest of the
  deletion and data-handling statements are unchanged.
- Describe the Kiosk toolbar actions with default shortcuts Cmd+O and
  Cmd+Shift+O, and their customization in Settings, Shortcuts, Kiosk & Peek.
- Add Peek's Cmd+O action and its shared shortcut setting with Kiosk.
- Add both actions to the tips shortcut table and link to their guides.
- Follow-up on September 9: add the global Cmd+Option+N shortcut, its
  Navigation enable switch, and the New Kiosk Window customization under
  Shortcuts, File, to Kiosk and tips-and-shortcuts in all nine languages.
- Use the Space displayed in the Kiosk toolbar as the destination. Do not
  add URL Rule priority details or a separate Kiosk-only shortcut caveat.
- Keep General paths in themes and Navigation paths in Kiosk and Peek.

The English spelling changes do not alter meaning. The existing
`personalise-each-space` anchor is preserved with an explicit ID.

## Sources and provenance

The English starting point is Help Center commit
`9d4e9836a1800c2d88fb985b86eab665096a4280`. `english-delta.diff` records the
uncommitted English changes. `source-hashes.json` records the final six
English files and the 48 synchronized locale files.

Product behavior and labels were checked against phi-browser-mac commit
`41b171ebd88d0b086815a15a954c5fda72fbcd12`, including the Advanced settings
view, shortcut defaults and labels, Kiosk target resolution, and Peek's
shortcut handler. `refs.json` contains the exact current UI labels.

The global shortcut follow-up was checked against phi-browser-mac commit
`3edef1d7341d007f593137c7ce36979310cb97a7`. The registrar uses the configured
New Kiosk Window shortcut, and Navigation displays that binding in the
enable switch. Its labels and revision are recorded in `refs.json`.
`global-brief.md` adds three entries and revises `tips.settings` in each
existing locale seed, preserving the earlier translation work.

The [Privacy Policy](https://phibrowser.com/privacy/) account-deletion
section and [Terms of Use](https://phibrowser.com/terms/) automation and
credential sections were checked on September 8, 2026. The policy's
navigation example omits the new Advanced pane; this update follows the
current Mac UI without changing the deletion statements.

One translator agent per locale produced `seeds/<locale>.json` from
`slice.json`, its locale brief, the product glossary, and existing page
wording. All new product labels were available in the current Mac catalog;
no new terminology needed to be coined. Evidence paths are retained in
each seed. This is machine translation with a second agent self-check,
not independent human approval.

## Review and baseline state

The six affected pages are marked `translation: complete` and
`contentReview: todo`. Product terminology and search QA review are
reopened for the new labels and searchable text. Earlier approval
evidence is retained as history. Privacy/legal gate states are unchanged
because this delta changes navigation paths, not legal meaning.

The existing `sourceRevision`, `e8cd0d8da5b6e1d8fc5c8eca5598bf0856f4a62e`,
is unavailable in this checkout. It is left unchanged: this task does not
claim to reconcile older source changes or establish a new committed
baseline. `pnpm i18n:status` therefore reports attention needed, and the
build's source-baseline check warns that it skips this unavailable
revision. Current-delta coverage is checked directly against the seeds
and file hashes instead.

Before a future baseline update, reconcile any older English changes,
including the privacy wording changed by commit `9d4e983`, then record
the actual committed source revision. Human content, terminology, and
search reviews remain pending. No commit, push, or deployment is part of
this run.

## Validation

- English writing checker: six pages, zero problems.
- Locale delta checks: all nine keys in each of eight seeds; exact product
  labels and shortcut symbols; localized links; table shape; no banned
  dashes, formal register substitutions, or Chinese honorifics.
- All 54 edited pages pass frontmatter, single-H1, and banned-character
  checks. Reapplying the eight seeds after formatting changes no bytes.
- `pnpm format:check` and `git diff --check`: passed.
- `pnpm build`: passed. Source validation covered nine locales and 234
  Markdown files. Generated validation covered 234 pages and 40 search
  queries, including links, anchors, emphasis, locale metadata, and sitemap.
- `pnpm i18n:status`: reports the missing source baseline and pending
  reviews described above. No baseline or approval gate was bypassed or
  changed to claim a complete historical synchronization.

Running the English-oriented writing checker across all 54 pages reports
13 findings. Twelve also occur in the original files: French `utilise`,
Dutch `Log in`, and existing Traditional Chinese `phi-browser Skill`
capitalization. The sole additional match is the valid French verb
`utilise` in the new Peek paragraph. These findings are recorded rather
than changing unrelated wording or replacing French with English.

No browser UI or deployed-site verification was performed. Owner review
list for newly coined terms: empty.
