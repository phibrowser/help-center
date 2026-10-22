# Brief: Mini Player and screenshot help

## Scope

Synchronize `english-delta.diff` into the existing
`site/<locale>/tips-and-shortcuts/index.md` for de, es, fr, ja, ko, nl,
zh-Hans, and zh-Hant, and mirror the completed page under
`localization/<locale>/content/`. Keep unrelated page text unchanged.

- Place Mini Player after Picture-in-Picture and screenshots after Mini
  Player. Update the description and add the two screenshot shortcut rows.
- Preserve Mini Player appearance rules, supported-control qualifications,
  and mode meanings. Off prevents automatic appearance; muted media does
  not automatically show Mini Player. Always compact stays concise.
- Preserve screenshot shortcuts Command-Shift-1/2, scrolling selection,
  release-to-capture and Escape-to-cancel behavior, and the customization
  path. The original PNG goes to the clipboard; export saves the edited
  image. Summarize editing in one sentence and retain PNG/JPG/PDF export.

## Binding vocabulary and style

Use `refs-media-tools.json` for quoted menu/settings labels. Use the
catalog's pixelation/mosaic term for Blur. Apply the repository's
`phi-help-writing` rules and `phi-translate-validate` locale rules, product
glossary, and site glossary addendum (v2, 2026-10-15). Match the existing
page's voice and keep Mini Player terminology consistent throughout.

Translate zh-Hant independently for Taiwan; do not convert zh-Hans.
Preserve shortcut glyphs and digits, settings-path arrows, table structure,
and translated frontmatter. Use ordinary Markdown emphasis except where
`test:i18n` demonstrates a parser-incompatible span.

## Verification and handoff

Check the source delta and final page side by side, verify quoted labels
against the refs, and report terminology conflicts without silently
changing older sections. Run the repository's i18n source, format, build,
and built-output checks. Record meaningful findings and review state in
README.md; keep final translations in the page files. Translation and
self-checks do not constitute independent human approval.
