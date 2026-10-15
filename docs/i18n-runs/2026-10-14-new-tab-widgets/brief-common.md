# Brief: new-tab Widgets sync (run 2026-10-14-new-tab-widgets)

## What happened in English

Commit `eb3f991` on branch `docs/widget-updates` edits two pages and adds no
new pages, routes, or resource labels. See `english-delta.diff` in this
directory for the exact hunks. In short:

- `site/new-tab/index.md`:
  - "Your new tab": the third bullet no longer says the top-right menu holds
    recent conversations. It is now **The ⋮ menu**, which opens **Widgets**
    and the Skills library and holds **Restore hidden prompts**.
  - "Widgets": the old subsections "Built-in widgets" and "Adding and
    arranging widgets" are replaced by five subsections: "Opening the
    Widgets panel", "Suggested widgets", "Adding and arranging widgets",
    "A suggested widget on an empty new tab", and "Making your own widget".
    "Widgets that know you" is reworded and gains a sentence about which
    steps send content to an AI model.
  - The four-group built-in widget list is gone; the page now gives a short
    list of examples. Hacker News and Reddit are no longer named.
  - "Move & Resize" is gone. The pinned-widget menu is **Refresh**, **Edit**,
    **Delete**, **Delete ALL**.
- `site/skills/index.md`, one sentence (line 26): the menu is "the same ⋮
  menu that opens **Widgets**", no longer "the same menu that holds your
  recent conversations and widgets".

The English page deliberately avoids hard numbers (no "three seconds", no
"up to five") and quality promises. Do not add any back.

## Per-locale tasks

1. In `site/<locale>/new-tab/index.md`:
   - Leave the frontmatter, H1, intro paragraph, the first two bullets of
     "Your new tab", the paragraph after those bullets, and "What's next"
     untouched.
   - Replace the third bullet of "Your new tab".
   - Re-translate everything from the "Widgets" H2 down to (not including)
     the "What's next" H2 so it matches the new English section for
     section, paragraph for paragraph, bullet for bullet. Reuse the old
     page's wording wherever the English meaning is unchanged (for example
     the opening paragraph under "Widgets", the "Your layout is saved"
     idea, and the local-first memory sentence).
   - The H2/H3 structure must match English exactly: same count, same order.
     Do not add explicit `{#...}` anchors; nothing links to these headings.
2. In `site/<locale>/skills/index.md`, edit only the sentence that matches
   English line 26. Change nothing else on that page.
3. Match each page's established voice, bullet lead-in style (bold lead plus
   the page's existing separator), quote characters, and emphasis. Internal
   links keep the locale prefix (`/<locale>/privacy/`).

## Binding vocabulary

- `refs-new-tab-widgets.json`: shipped new-tab UI strings from phi-ai
  `staging`. Every bold UI label in the English page (**Widgets**,
  **Custom**, **Restore hidden prompts**, **Create your own widgets here**,
  **Dismiss**, **Add widget**, **Install**, **Refresh**, **Add to page**,
  **Edit**, **Delete**, **Delete ALL**, **Suggested**, **Keep**,
  **Removing**, **Undo**, **Stop suggesting**) is quoted verbatim from it.
  Read its `notes`: Skills follows the glossary, not the shipped es/ja/ko
  value, and Refresh has two different values in ja and zh-Hant.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`
  and `references/locale-rules.md`: registers, typography, house bans (no
  em or en dashes, no 您, no Sie, no usted, no trailing periods on labels).
- The locale's own existing page is the style authority for voice and for
  words the refs do not cover (widget, panel, Memory, Pomodoro, and so on).
- `⋮` and `✕` are literal glyphs; keep them.

## Report

When done, report: the two files edited; any term you coined that has no
ref or existing page rendering (with evidence from the Chrome xtb corpus or
Apple support pages, URL plus quoted phrase); any place where a ref reads
wrong in context. Do not touch `localization/<locale>/status.json`, English
pages, locale resources, or any other page; the run owner updates those.
