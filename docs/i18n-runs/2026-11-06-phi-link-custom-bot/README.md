# Phi Link custom bot source synchronization

AI translation run, 2026-11-06. Glossary: phi-translate-validate v2,
2026-10-15, plus the repository site addendum. All eight locales were
translated or audited in separate locale tasks. These are updates to existing
registered locales, not new locale registration or deployment.

## Source and scope

The authoritative source is the uncommitted English change to
`site/automation/index.md` and `site/faq/index.md` on top of root-content commit
`1892b4d839f4a9e27f989b7eed05bed4b762d5b1`. `slice.json` preserves its exact
translation input. Phi Link remains the feature name. Only the official bot
has retired; users configure their own bot and must not share it or its token.
No QR flow, Connect in Telegram button, or sender-authorization claim is added.

`refs.json` contains the native macOS catalog evidence. Locale briefs and
`seeds-<locale>.json` preserve translation provenance. The cross-locale table
records all three changed passages for coordinator self-review. No new product
terms were coined. Localized custom-bot and Linked labels follow the shipped
catalog; Bot Token remains English per the source brief, although localized
field labels exist. French Réglages follows the shipped menu label rather than
the generic glossary Paramètres. These label differences are recorded, not
new glossary rulings.

## Application and review state

The automation setup passage and two FAQ answers were synchronized to all
registered site locales and to existing matching draft pages. Simplified Chinese
has no automation/FAQ draft files in this checkout; its registered site pages
were updated without inventing an incomplete new draft tree. Unrelated page
content, navigation, brands, routes, and anchors were preserved.

Affected page states are translation complete, independent content review todo.
Those states were already recorded, so the status files require no textual
change. No approval or reviewer identity was invented. Existing sourceRevision
values are retained: the new English source is uncommitted and the old baseline
commit is unavailable in this checkout. Do not replace the baseline merely to
silence a check. Once the English change is committed, reconcile the complete
source baseline through the normal localization workflow.

## Validation

Used pnpm 11.28.11 through npx with the unchanged lockfile, avoiding a global
package-manager change. The first source check caught CJK emphasis rendering;
the two affected spans now use targeted strong HTML.

The writing checker was run across all 32 changed content pages. Its only
failures are 16 French `utilise` occurrences matched by the English banned-word
rule for `utilise`. This is a language false positive, including pre-existing
text; correct French was retained. English-only writing validation passes.

Build, locale status, seed validation, and formatting results are recorded in
`validation.json`. Machine and coordinator checks are self-review, not an
independent native-language review. At the translation handoff, no commit, push, or deployment had been performed.
The subsequent user request authorizes committing this work, pushing a new
branch, and opening a PR against main with jiadong-phi as reviewer. Deployment
and merging remain separate actions.
