# Brief: Nebula stories (run 2026-11-05-nebula-stories)

## What happened in English

The English Memory page gains a `### Stories {#stories}` section at the end of
`## Nebula`: what a story is, where its card sits, that a language model
writes them, and six bullets for what the card lets you do. The FAQ gains one
`::: details` question ("What are the stories in Nebula?") placed right before
"Does Phi send my memory to its servers?", and that answer gains one sentence
naming the story report as the one exception. See `english-delta.diff` for the
exact hunks.

Background for meaning (do not add any of it to the page): a story is a short
letter Phi writes from the person's Memory about one thing in their recent
browsing. The card sits at the bottom-right of the Nebula map. Rating sends an
anonymous count only. The report is optional and is sent only when the reader
writes a note or ticks a box. Phi Chat opens with the story attached and sends
nothing until the reader types. Sharing makes an image on the device.

## Per-locale tasks

1. Apply the Memory hunk semantically to `site/<locale>/memory/index.md`: add
   the H3 with the explicit id `{#stories}` after the last paragraph of the
   Nebula section (the paragraph about where to open Memory), before the next
   H2. Translate the English section in full, keeping its two paragraphs and
   the six bullets in the same order with the same bold lead-ins. Do not touch
   other text on the page.
2. Apply the FAQ hunks to `site/<locale>/faq/index.md`: the new `::: details`
   question right before the locale's "Does Phi send my memory to its
   servers?" entry, and the added last sentence of that entry. Keep the
   `::: details` format. Do not re-translate other entries.
3. Internal link: the FAQ entry links to `/<locale>/memory/#stories`.
4. Bold UI labels exactly as the app shows them in the locale (BINDING):
   **For the Phi team (optional)**, **Include this story**, **Include the
   memories it was written from**, **Ask Phi Chat about this story** (the
   bullet's bold lead-in is this label as a sentence), and **Share this
   story**. Use the app's noun for "story" in prose too, so the page says what
   the card says.
5. Product names stay English: Phi, Phi Chat, Nebula, Phinomenon, X, Discord.
   Memory, Profile and the rest follow `product-glossary.md`.
6. Keep every disclosure: a language model writes the stories, so the
   memories a story draws on go to the model; only the rating and reasons are
   counted and nothing from the story is sent; the report sends the note, the
   story or the memories to Phinomenon with some account and system
   information; and the FAQ's one exception sentence.
7. House rules: no em or en dashes anywhere, no 您 in Chinese, no Sie or
   usted, the locale's existing register, quote characters and spacing as the
   page already uses them (`locale-rules.md`). CJK bold spans that break the
   Markdown parser use `<strong>` only where needed.
8. Update `localization/<locale>/status.json`: `pages["memory/index.md"]` and
   `pages["faq/index.md"]` set to `translation: complete`,
   `contentReview: todo`; `sourceRevision` set to the English commit; append
   `; Nebula stories sync by AI run 2026-11-05-nebula-stories (docs/i18n-runs/2026-11-05-nebula-stories)`
   to `owners.translation` like the earlier runs. Change nothing else.
9. Do not touch English pages, other pages, locale resources, or any other
   locale. Do not run git, `pnpm build` or `pnpm format`; you may run
   `pnpm exec prettier --write` on your own two pages and status file.

## Binding vocabulary

- The app's own UI strings in the locale, BINDING; flag defects instead of
  diverging.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`,
  `references/site-glossary-addendum.md` and `references/locale-rules.md`.
- `.agents/skills/phi-help-writing/SKILL.md`: voice and accuracy rules.
- New words with no UI string (trackpad swipe, arrow keys, thumbs up or down):
  use the wording Apple uses in that locale for macOS, and say which you used.

## Report back

Under 150 words: coined renderings, UI-string defects noticed, whether the
page has one new H3 with `{#stories}` and six bullets, the FAQ link, zero
dashes, anything you could not verify. Do not paste the page.
