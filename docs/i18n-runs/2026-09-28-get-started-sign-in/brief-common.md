# Brief: get-started sign-in sync (run 2026-09-28-get-started-sign-in)

## What happened in English

Commit `6effe67` (PR #22) edits one page, `site/get-started/index.md`, and
adds no new pages, routes, or resource labels. See `english-delta.diff` in
this directory for the exact hunks. In short:

- The frontmatter `description` gains "sign in to your Phi account" between
  "complete first run" and "import from another browser".
- In "First run", a new bullet **Sign in, or explore without an account**
  is inserted before the "AI is on by default" bullet: signing in with a
  Phi account turns on AI features and Browser Memory; the user may choose
  **Explore Phi without signing in** and sign in later, linking to the new
  section `[Signing in later](#signing-in-later)`.
- The "AI is on by default" bullet is reworded: AI is enabled out of the box
  "once you are signed in".
- A new H2 section **Signing in later** follows the first-run list: guests
  browse normally but AI features and Browser Memory stay off until they
  sign in, from any of three places (**Settings → Guest**, **Settings →
  Phi AI** with the prompt "Sign in to use AI features", or any AI feature
  itself, which shows "Sign in to use Phi AI" with a sign-in button). When
  the user signs in, pinned tabs and bookmarks come with them.

## Per-locale tasks

1. Apply the English delta to `site/<locale>/get-started/index.md`, editing
   only what the diff touches and matching the page's established voice,
   bullet lead-in style (bold lead + the page's existing separator), quote
   characters, and emphasis. Do not re-translate untouched text.
2. Translate the new heading and append the explicit anchor
   `{#signing-in-later}` to it. The new in-page link in the sign-in bullet
   must point at `(#signing-in-later)`.
3. Render the existing settings-path style exactly as the page already
   does for **Settings → Phi AI** (same words, arrow, spacing); build
   **Settings → Guest** by analogy with the shipped Guest pane title.
4. Quote shipped UI strings verbatim from `refs-get-started-sign-in.json`:
   Explore Phi without signing in; Sign in to use AI features; Sign in to
   use Phi AI; Browser Memory; Guest; Sign in; pinned tabs; bookmarks.
5. Do not touch `localization/<locale>/status.json`, English pages, locale
   resources, or any other page; the run owner updates those.

## Binding vocabulary

- `refs-get-started-sign-in.json`: shipped product strings from the
  published phi-i18n catalog, BINDING; flag defects instead of diverging.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`
  and `references/locale-rules.md`: registers, typography, house bans (no
  em/en dashes, no 您, no Sie/usted, no trailing periods on labels).
- The locale's own existing page is the style authority for voice.
