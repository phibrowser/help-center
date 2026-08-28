# Localization agent Skill

Implementation performed: 2026-08-13 14:55:26 CST (+0800).

Status: implemented and committed locally on the `experiment/i18n-language-support` branch. The Skill-directory compatibility link was added on 2026-08-13. Not pushed, deployed, or published.

## Why this work was done

The Help Center now has an isolated scaffold, status tracking, source-version checks, guarded promotion, and persistent source and build validation. The owner requested a project Skill so another agent can use that workflow consistently while translating additional locales.

## How it was completed

The canonical project Skill directory is `.agents/skills/`. `.claude/skills` is a relative symbolic link to `../.agents/skills`, so pi and Claude-compatible harnesses discover the same files without maintaining duplicate copies. Edit files only through the canonical `.agents/skills/` path; do not create separate implementations under `.claude/skills/`.

Added `.agents/skills/phi-help-localization/SKILL.md` using the Agent Skill format supported by pi. Its trigger description covers:

- creating a new locale draft;
- continuing a translation;
- synchronizing a locale after English source changes;
- assisting independent review;
- preparing a locale for explicit promotion.

The Skill requires agents to read `docs/localization-guide.md`, the existing Phi Help writing Skill, the locale status record, and the runtime schema before editing. It directs all draft work to `localization/<locale>/`, uses the repository commands, preserves locale-scoped links and complete page parity, and forbids language-specific branches in generic code.

The Skill also preserves operational and review boundaries. An agent may mark its translation complete after self-checking, but it may not fabricate an independent content approval, privacy/legal approval, search QA result, reviewer identity, evidence, or source revision. Promotion, commit, push, deployment, publication, and production verification remain distinct actions.

Because isolated drafts are deliberately outside the VitePress tree, the Skill distinguishes draft status validation from registered-locale build validation. It does not claim that `pnpm test:i18n` or `pnpm build` has rendered an unpromoted draft. Full link, rendering, SEO, sitemap, and search checks for a new locale occur after authorized promotion, whose source-validation failure path rolls back the publication-tree changes.

## Validation

The Skill is expected to satisfy pi's Agent Skill requirements:

- directory contains `SKILL.md`;
- frontmatter provides a lowercase hyphenated name;
- description states both capability and trigger conditions;
- Markdown follows repository formatting rules;
- commands and lifecycle states match the current localization scripts and schema;
- `.claude/skills` resolves to the canonical `.agents/skills` directory;
- both discovery paths expose `phi-help-writing` and `phi-help-localization` from the same files.

Repository formatting, writing, link-resolution, and skill-structure checks must pass before this work is handed off.

## Open issues

The Skill has not yet been exercised by a second agent on a complete real-language pilot. The first new locale owner should use it from scaffold through review preparation and record any ambiguity or missing instruction.

Resolution condition: complete one additional real locale pilot, compare the agent's actions with `docs/localization-guide.md`, and update the Skill where evidence shows the workflow is unclear or incomplete.

Independent native-language review, qualified privacy/legal review, manual runtime QA, authorized promotion, deployment, and production verification remain required for each locale. The Skill does not replace those responsible parties or provide their approvals.
