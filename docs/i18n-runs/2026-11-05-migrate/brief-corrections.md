# Coordinator corrections (run 2026-11-05-migrate, round 2)

Rulings after reading all eight reports. Apply them to your locale's
`migrate`, `import-export`, and `switching-to-phi` pages only.

1. **English changed.** Zen's own English UI calls its workspaces Spaces
   (`zen-panel-ui-workspaces-text = Spaces`, `Create Space` in
   zen-browser/l10n-packs `en-US/browser/browser/zen-workspaces.ftl`), so the
   English page no longer says "workspace". Re-read lines 47 to 49 and 67 of
   `site/migrate/index.md` and update your table rows and the bullet.
2. **Zen Spaces and Arc Spaces use your locale's Phi word for Space.** Phi
   itself names an untitled Zen Space with that word
   (`app.browserMigration.zen.untitledSpaceName` in `refs-migrate.json`).
   Remove any "workspace" rendering.
3. **Zen containers use Phi's shipped noun** from
   `app.browserMigration.zen.container.numbered`: de Umgebung, es Contenedor,
   fr Conteneur, ja コンテナー, ko 컨테이너, nl Container, zh-Hans 容器,
   zh-Hant 容器. That is the name a migrated Profile gets in Phi's own UI.
4. **Zen Essentials:** where Zen ships a localized label, use it once with
   the English in parentheses, then the localized label: es esenciales
   (`Añadir a esenciales`), ko 에센셜 (`에센셜에 추가`), zh-Hans 常驻标签页
   (`添加到常驻标签页`). Everyone else keeps Essentials (Zen ships it in
   English in de, fr, ja, nl, zh-TW).
5. **Arc Favorites stay "Favorites" in English everywhere.** Arc's UI is
   English only, and in fr "Favoris" is Phi's word for bookmarks. Where the
   existing `switching-to-phi` text renders Arc's Favorites with a local word
   (de Favoriten, es Favoritos, ko 즐겨찾기, nl favorieten), change that
   occurrence to Favorites so the page uses one name.
6. **Chrome Web Store** uses the name your locale already uses on
   `site/<locale>/agent-passwords/index.md` line 31.
7. **Quoted labels on `import-export` must match the shipped strings exactly,
   including lines the diff did not touch** (that page's labels were
   re-checked in this run). Audit every bold UI label on the page against
   `refs-migrate.json` and fix mismatches: spacing before an ellipsis, `...`
   versus `…`, and wording.
8. Do not change anything else. Rerun prettier, the dash grep, and the link
   check on your files, then reply in under 80 words: what changed and
   anything you could not apply.
