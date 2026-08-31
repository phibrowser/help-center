# Brief: Peek View and Kiosk locale sync (run 2026-08-31-peek-kiosk)

## What happened in English

The Peek View (#13) and Kiosk (#14) commits were re-applied to the Help
site after the multilingual restructure. That adds two new English pages
(`site/peek/index.md`, `site/kiosk/index.md`), edits six existing English
pages (see `english-delta.diff` in this directory), and adds two sidebar
labels (`theme.pages.peek` = "Peek View", `theme.pages.kiosk` = "Kiosk").

## Per-locale tasks

1. Translate the two new pages in full to `site/<locale>/peek/index.md`
   and `site/<locale>/kiosk/index.md`, mirroring heading structure,
   tables, frontmatter description, and link targets (prefixed
   `/<locale>/`).
2. Apply the English delta to the six existing locale pages, editing only
   what the diff touches and matching each page's established voice.
3. Add `theme.pages.peek` and `theme.pages.kiosk` to the locale's
   resource file after the `bookmarks` key.
4. Update the Spaces page's explicit URL Rules anchor to
   `{#url-rules-route-matching-sites-automatically}` and the incognito
   page's link to match (the English heading changed).

## Binding vocabulary

- `refs-peek-kiosk.json` in this directory: shipped product strings for
  every UI label these pages quote. BINDING; flag defects instead of
  diverging silently.
- `.claude/skills/phi-translate-validate/references/product-glossary.md`
  and `references/locale-rules.md`: feature terms, registers, typography,
  house bans (no em/en dashes, no 您, no Sie/usted, no trailing periods on
  labels).
- The locale's own existing pages are the style authority for voice,
  spacing, quote characters, and frontmatter shape.

## Verification doctrine

Contested renderings not covered by refs are settled by market evidence
(Chrome corpus, Apple support pages, real product docs) and cited in the
agent's report. Newly coined terms and premise problems are flagged for
the human owner, never silently guessed.
