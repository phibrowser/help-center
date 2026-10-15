# Brief: Phi Chat and the 2.13 assistant updates (run 2026-10-15-phi-chat)

## What happened in English

English commit `9ccf028` on branch `docs/phi-chat-and-assistant-updates`
documents Phi Chat, the assistant in its own window (new page
`site/phi-chat/index.md`), and brings ten existing pages in line with
release 2.13. The route `phi-chat` is registered in `guide.ts` (assistant
group, after Meet your assistant) and every locale resource already carries
`theme.pages.phiChat` = `Phi Chat`. Phi Chat is a product name and stays in
English in every locale. See `english-delta.diff` in this directory for the
exact hunks on the existing pages:

- `site/ai/index.md`: description, one overview bullet, one "ways to reach
  it" bullet, a new paragraph about the new-conversation screen, four new
  `###` subsections under "Talking to it" (Stopping a reply, Earlier
  conversations, Going back to a page, Usage limits), a new paragraph about
  tab cards and unloaded tabs in Chat with Tabs, the settings path change,
  and one new "What's next" item.
- `site/automation/index.md`: description, intro, the Background tasks list
  is rewritten ("Shadow Task" is no longer a user-facing name), a new `###
Watching a page` under Scheduled tasks, a new `## Tasks report back to
their conversation` section with three `###` subsections (Managing a task,
  When Phi was not running, Notifications), a rewritten Staying in control
  paragraph plus a new automation risk paragraph (Reddit), and one changed
  Phi Link bullet.
- `site/faq/index.md`: the settings path, one sentence added to "How do I
  talk to the assistant?", four new `::: details` questions inserted right
  after it, and one changed Phi Link answer.
- `site/get-started/index.md`, `site/privacy/index.md`,
  `site/tips-and-shortcuts/index.md`: the settings path **Settings → Phi
  AI** becomes **Settings → Phi & AI**; tips-and-shortcuts also gains one
  table row and one paragraph.
- `site/index.md` (home page features): "run Shadow Tasks in the
  background" becomes "run tasks in the background".
- `site/sentinel/index.md`: one sentence added to the intro.
- `site/skills/index.md`: "recent conversations and" removed from one
  sentence, and one new paragraph in "Using Skills in chat".
- `site/what-is-phi-browser/index.md`: one bullet extended, one new "What's
  next" item.

## Per-locale tasks

1. Translate `site/phi-chat/index.md` in full into
   `site/<locale>/phi-chat/index.md`. The H1 is `Phi Chat`. Keep the
   frontmatter with a translated `description`, the single H1, the exact
   heading hierarchy, and every list. Pin these four heading anchors
   verbatim, because other pages link to them:
   `{#opening-phi-chat}`, `{#moving-a-conversation-over}`,
   `{#conversations-from-every-profile}`, `{#tasks-and-unread-conversations}`.
2. Apply the English delta to the ten existing locale pages listed above,
   editing only what the diff touches and matching each page's established
   voice, list style, quote characters, and emphasis. Do not re-translate
   untouched text. In the FAQ, the four new questions go right after the
   "How do I talk to the assistant?" block, in the page's existing
   `::: details` pattern.
3. Every new cross-page link points at an anchor that must exist in your
   locale. Add these explicit ids to the target headings in your locale if
   they are not there yet (the heading text stays translated):
   - `ai`: `{#where-your-questions-go}` on the existing "Where your
     questions go" H2; `{#going-back-to-a-page}` and `{#usage-limits}` on
     the new subsections.
   - `automation`: `{#tasks-report-back-to-their-conversation}` on the new
     H2, `{#notifications}` on its new subsection.
   - `skills`: `{#using-skills-in-chat}` on the existing "Using Skills in
     chat" H2.
   - `sentinel`: `{#private-ai}` on the existing Private AI H2.
     `/<locale>/spaces/#url-rules-route-matching-sites-automatically` already
     resolves in every locale.
4. Prefix every internal Help link with the locale (`/<locale>/phi-chat/`,
   `/<locale>/ai/#usage-limits`, and so on).
5. Quote shipped UI strings verbatim from `refs-phi-chat.json`, your
   locale's column. Where the English page bolds a label, find its row there
   (the key tells you the surface: `chatTasks.*` is the task strip and task
   panel, `conversation.*` is the conversation list and its menus,
   `topBar.*` the chat top bar, `settings.*` the browser Settings window,
   `menuBar.*` the Phi Sentinel menu). Specific rulings:
   - **Settings → Phi & AI**: use the shipped `settings.navigation.aiTitle`
     for the pane, in every edited page, with the arrow and the
     **Settings** word your locale's pages already use. The quoted message
     "Sign in to use Phi AI" in get-started is a different shipped string
     and keeps its current wording.
   - `{{agentName}}` in the two context-menu strings is shown the way your
     locale's pages already write **Ask [your assistant] about…** (look in
     your locale's `ai` and `faq` pages) and stays in square brackets.
   - **Profile "Work"**: use the shipped `conversation.profileCategoryName`
     pattern with its quote marks, and translate the example name "Work".
   - Two different **Tasks**: the Phi Chat view is
     `conversation.tasksCategory`; the Phi Sentinel page is
     `scheduledTasks.titleTasks`. Use each in its place.
   - **Open Phi Chat** (Phi Sentinel menu) has no shipped zh-Hans or
     zh-Hant string. Coin it from the platform verb your locale uses for
     "Open" elsewhere on the pages, and report the coinage.
   - **Phi Apps** (the folder in the Applications folder) stays in English
     in every locale; the browser writes that name as the folder's display
     name in every language.
   - **Summon Phi Chat with Shift Shift Shift** has a shipped rendering;
     the prose around it and the tips table row may name the key the way
     your locale's tips-and-shortcuts page already names Shift (⇧).
6. Terminology that is not a quoted label follows
   `.agents/skills/phi-translate-validate/references/product-glossary.md`,
   `site-glossary-addendum.md`, and the words your locale's existing pages
   already use (conversation, task, scheduled task, Profile, Space, Split
   View, Tab Group, Chat with Tabs, Private AI, Phi Sentinel). Replace any
   remaining rendering of "Shadow Task" in the pages the delta touches with
   the locale's plain word for a background task, following the English.
7. Keyboard shortcuts follow the notation of your locale's
   tips-and-shortcuts page (Command (⌘) + K and so on).
8. Do not touch `localization/<locale>/status.json`, English pages, locale
   resources, `guide.ts`, or any other locale; the run owner updates those.
   No git commands.

## Binding rules

- `.agents/skills/phi-translate-validate/references/locale-rules.md`:
  register, typography, house bans. No em dash or en dash anywhere, no 您,
  no Sie, no usted, no 습니다 or 십시오, no trailing period on labels.
- `.agents/skills/phi-help-writing/SKILL.md`: accuracy. Keep every
  limitation, hedge, and warning exactly as strong as the English: "can",
  "usually", "best effort" stay hedged; "cannot be undone" stays absolute;
  the Reddit automation risk paragraph and "Your questions still go to a
  model" stay complete.
- The locale's own existing pages are the style authority for voice.

## Report back

Under 200 words: coined renderings (English, your rendering, and what it
was derived from), shipped-string defects noticed, anything you could not
verify or had to decide. Do not paste the pages.
