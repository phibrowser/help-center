# Brief: last-Space rule and auto Peek toggle locale sync (run 2026-09-02-last-space-auto-peek)

## What happened in English

Commit `e8cd0d8` (PR #19) edits five English pages and adds no new pages,
routes, or resource labels. See `english-delta.diff` in this directory for
the exact hunks. In short:

- `spaces/index.md`: the Delete bullet now also names the menu-bar path
  (**Spaces → Delete Space…**), and a new bullet says there is no fixed
  default Space: any Space can be deleted, but Phi keeps at least one
  regular Space, so Delete is not offered while a single Space remains.
  Incognito Spaces do not count; they are closed, not deleted.
- `faq/index.md`: one sentence added to "What happens if I delete a
  Space?", a new question "Is there a default Space that cannot be
  deleted?", and a new question under Bookmarks & tabs, "Can I stop links
  in pinned tabs and bookmarks from opening in a Peek?".
- `peek/index.md`: the first "Open a Peek" bullet gains a sentence linking
  to the settings section; the "Turn Peek off" section is renamed "Peek
  settings" and now describes two switches (**Enable Peek View** and
  **Automatically peek from pinned tabs and bookmarks**) plus how the
  second follows the first.
- `bookmarks/index.md`: one sentence pointing at the new switch.
- `switching-to-phi/index.md`: the closing sentence of the Peek paragraph
  now says "the settings that turn it off, or keep it for Shift-click
  only".

## Per-locale tasks

1. Apply the English delta to the five locale pages under
   `site/<locale>/`, editing only what the diff touches and matching each
   page's established voice, spacing, quote characters, and emphasis
   style. Do not re-translate untouched text.
2. Translate the renamed heading ("Peek settings") and append the explicit
   anchor `{#peek-settings}` to it. The new in-page link in the first
   "Open a Peek" bullet must point at `(#peek-settings)`. Locale
   cross-page links keep the `/<locale>/` prefix.
3. Keep the FAQ `::: details` container shape and insert the two new
   questions at the same positions as in English.
4. Do not touch `localization/<locale>/status.json`, English pages, locale
   resources, or `guide.ts`; the run owner updates those.

## Binding vocabulary

- `refs-last-space-auto-peek.json` in this directory: shipped product
  strings for every UI label these pages quote, pulled from
  `phibrowser-mac` `Localizable.xcstrings` at `082a9373`. BINDING; flag
  defects instead of diverging silently.
- The auto-peek toggle title and description exist only in English in the
  product catalog today. Render them in the locale by analogy with the
  shipped **Enable Peek View** string and the locale's own settings
  register, and FLAG the rendering as newly coined so the product side can
  ship (or correct) it.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`
  and `references/locale-rules.md`: feature terms, registers, typography,
  house bans (no em/en dashes, no 您, no Sie/usted, no trailing periods on
  labels).
- The locale's own existing pages are the style authority for voice.

## Verification doctrine

Contested renderings not covered by refs are settled by market evidence
(Chrome xtb corpus, Apple support pages, real product docs) and cited in
the agent's report. Newly coined terms and premise problems are flagged
for the human owner, never silently guessed.
