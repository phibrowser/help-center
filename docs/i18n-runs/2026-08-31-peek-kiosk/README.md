# i18n run 2026-08-31-peek-kiosk

Re-applies the reverted Peek View (#13) and Kiosk (#14) English content on
top of the multilingual structure (#16) and syncs all eight locales.

## What this run changed

- Restored `site/peek/index.md`, `site/kiosk/index.md`, and the English
  edits to bookmarks, faq, incognito, spaces, switching-to-phi, and
  tips-and-shortcuts (see `english-delta.diff`).
- Registered `peek` and `kiosk` routes in `site/.vitepress/i18n/guide.ts`
  (Browser Workspace group, after `bookmarks`) and added
  `theme.pages.peek` / `theme.pages.kiosk` to all nine locale resources.
- Translated the two new pages into all eight locales and applied the
  English delta to the six edited pages per locale (one parallel
  translator agent per locale; briefs in `brief-common.md`, binding
  vocabulary in `refs-peek-kiosk.json`).
- The Spaces page's URL Rules heading changed in English, so every
  locale's explicit anchor moved to
  `{#url-rules-route-matching-sites-automatically}` along with the
  incognito page links.
- `localization/<locale>/status.json`: added the two new pages and reset
  the six edited pages to `translation: complete` /
  `contentReview: todo` (the delta is machine translation; the previous
  page-level approvals no longer cover the whole page).

## Evidence sources

Shipped product strings for the new Peek/Kiosk UI surfaces were pulled
from the internal string manifests (macos + chromium components) for all
eight locales; the relevant renderings are recorded in
`refs-peek-kiosk.json`. Raw manifest dumps stay out of this public repo.

## Owner review list

Shipped-string defects to file with the product side:

- ja: the chromium manifest ships spaced menu strings (リンクを Peek ビューで開く,
  Kiosk で開く) while the macOS manifest ships the same surfaces unspaced
  (リンクをPeekビューで開く, 外部リンクをKioskで開く). Users see two spellings of one
  menu item; the Help pages follow the unspaced macOS/tree convention.
- zh-Hans: macOS key `open_in_5235f4` renders the Kiosk toolbar's
  "Open in" as 打开位置 ("open location"). The Help page uses
  在 [空间] 中打开, matching the chromium open-link-in-space pattern.
- de: "Kiosk öffnen, wenn Links mit gedrücktem ⌘⌥ angeklickt werden" is a
  stiff passive; candidate for a product polish pass.
- es: "…con ⌘⌥ presionadas" has odd agreement (implicit "teclas" never
  appears); candidate fix "…con ⌘⌥ presionado".
- fr: shipped "Toujours demander" back-translates as "Always ask", not
  "Ask every time"; machine-seeded, worth a native review.
- nl/de/zh-Hant: the catalog carries both "Open as Split" and
  "Open as Split View" variants (nl casing differs, zh-Hant renders both
  identically); ratify one.
- es: catalog has "Cerrar Peek" but the Peek strip's Close control is
  quoted bare ("Cerrar") per the English page; confirm the real strip
  label.

Newly coined renderings to ratify:

- zh-Hans: 关闭 Peek vs 关闭 Peek 功能 to split the "Close a Peek" /
  "Turn Peek off" heading collision.
- ja/zh-Hant: "Open in [Space]" control ([スペース]で開く / 開啟於〔空間〕)
  inferred from shipped patterns; no shipped string exists yet.
- ko: particles on bare "Peek" follow the vowel-final reading 피크
  (Peek는/Peek가); realign if the product ever ships a consonant-reading
  particle.
- nl: "lichtgewicht venster" (lightweight window) is a coinage.
- de: standalone "Peek" treated as masculine (ein Peek), by market
  analogy with "der (Sneak) Peek".

Pre-existing tree issues surfaced (outside this run's scope):

- fr: bookmarks, spaces, tips-and-shortcuts, and tab-management use plain
  spaces where the rest of the tree uses NBSP before high punctuation and
  inside « »; cleanup pass wanted.
- ko: 고정된 탭 (glossary) vs 고정 탭 (bookmarks page); 파비콘 vs
  사이트 아이콘 (FAQ); reconciliation needs owner sign-off.
- zh-Hant: spaced vs tight bold markers differ between pages; delta edits
  matched each page's local style.
- fr: faq/tips previously said "Demander à chaque fois"; the delta
  rewrites now carry the shipped binding "Toujours demander" everywhere.

## How to re-run

Copy this directory's brief and refs, regenerate `english-delta.diff`
from the English commits being synced, and fan out one translator agent
per locale as described in the phi-translate-validate skill.
