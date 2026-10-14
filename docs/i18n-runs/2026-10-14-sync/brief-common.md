# Brief: Sync documentation (run 2026-10-14-sync)

## What happened in English

A new page `site/sync/index.md` documents cross-device Sync (the
**Settings → Sync** pane): what syncs and what does not, first-Mac setup
with the one-time recovery code, adding another Mac by approval or recovery
code, Profile and Space matching, Finish later, the status card, the
Devices list, removing a Mac, Set up sync again, signing out, encryption,
and sync versus export. The route `sync` is registered in `guide.ts`
(Browser Workspace group, after Importing & Exporting) and every locale
resource already carries `theme.pages.sync`, set to the shipped Sync pane
title for that locale. Four existing pages gained small cross-links; see
`english-delta.diff` in this directory for the exact hunks:

- `site/what-is-phi-browser/index.md`: one new list item for Sync after the
  Bookmarks & Pinned Tabs item.
- `site/spaces/index.md`: one new sentence at the end of the last paragraph.
- `site/privacy/index.md`: one new bullet in "What Phi does send", after the
  "Detailed statistics and crash reports" bullet.
- `site/faq/index.md`: the frontmatter description gains "sync", and a new
  `## Sync` section with three `::: details` questions is inserted before
  `## AI features`.

## Per-locale tasks

1. Translate `site/sync/index.md` in full into `site/<locale>/sync/index.md`.
   The H1 must equal the locale's `theme.pages.sync` label in
   `site/.vitepress/i18n/locales/<locale>.json` (the shipped pane title).
   Keep the frontmatter with a translated `description`, the single H1, the
   exact heading hierarchy, the table, the three `::: warning` callouts
   (translate their titles), and the numbered and bulleted lists.
2. Keep the three explicit heading anchors verbatim:
   `{#add-another-mac}`, `{#remove-a-mac-from-sync}`,
   `{#set-up-sync-again}`. The in-page links must point at them. The link
   to Getting Started keeps its anchor: `/<locale>/get-started/#signing-in-later`.
3. Prefix every internal Help link with the locale (`/<locale>/spaces/`,
   `/<locale>/privacy/`, and so on). External links (phibrowser.com) stay as
   they are.
4. Apply the English delta to the four edited pages, editing only what the
   diff touches and matching each page's established voice, list style,
   quote characters, and emphasis. Do not re-translate untouched text. In the
   FAQ, the new section goes in the same position (before the AI features
   section) and uses the page's existing `::: details` pattern.
5. Quote shipped UI strings verbatim from `refs-sync.json`. A `null` value
   there means the catalogue has no shipped translation yet (most status
   strings): coin a rendering consistent with the glossary and the shipped
   strings around it, and list every coinage in your report.
6. The English page deliberately paraphrases the Offline status instead of
   quoting it, because the shipped string contains an em dash. Do the same.
7. Settings paths (**Settings → Sync**, **Settings → Spaces**, the **Help**
   menu, **Manage User Data → Export User Data…**) use exactly the rendering
   the locale's existing pages already use; check `site/<locale>/spaces/index.md`,
   `site/<locale>/import-export/index.md`, and `site/<locale>/get-started/index.md`.
8. Do not touch `localization/<locale>/status.json`, English pages, locale
   resources, `guide.ts`, or any other page; the run owner updates those.

## Binding vocabulary

- `refs-sync.json`: shipped product strings, BINDING where present; flag
  defects instead of diverging.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`
  and `references/locale-rules.md`: registers, typography, house bans (no
  em/en dashes anywhere, no 您, no Sie/usted, no trailing periods on labels).
- `.agents/skills/phi-help-writing/SKILL.md`: accuracy rules. Keep every
  limitation and warning; never turn a hedge into a promise.
- The locale's own existing pages are the style authority for voice.

## Report back

Under 200 words: coined renderings (string and your rendering), shipped-string
defects noticed, anything you could not verify. Do not paste the page.
