---
name: phi-help-writing
description: How to write for the Phi help centre and other Phinomenon user-facing docs. Voice, the em-dash ban, product terminology, accuracy rules, and a checker script. Use when writing or editing any page in the help-center repo, release notes, in-product copy, or anything a Phi user will read.
---

# Writing for Phi

This is how we write for people who use Phi. It exists because in August 2026 we swept the whole help centre and pulled out **289 em-dashes**, one roughly every 65 words, along with a pile of claims that were not quite true. Nearly all of it came from writing quickly rather than writing badly. These rules are what that sweep taught us, so the next person does not have to learn it from a diff.

Read `references/patterns.md` for the before-and-after examples. Run `scripts/check.py` before you commit.

---

## 1. The voice

We are browser people. We build a tool, we are glad you are using it, and we are not going to waste your time.

**Write like a capable colleague explaining something at a desk.** Not a marketing page, not a legal notice, not a chatbot being friendly at you.

Four things that make the voice:

**Be direct.** Say the thing, then explain it. "Bookmarks are per Space" beats "It is worth noting that bookmarks are scoped on a per-Space basis."

**Be honest about limits.** If a feature does not do something, say so in the same breath as what it does. A reader who finds the limitation themselves trusts you less than one you told. This is the single highest-value habit in the whole guide.

**Respect the reader's time and intelligence.** No "simply", no "just", no "easy". If it were easy they would not be reading. Those words only tell someone who is stuck that they are stupid.

**Sound like a person.** Contractions are fine. A short sentence is fine. Dry humour is fine if it is actually funny and never at the reader's expense.

**Do not** write in the voice of the product ("Phi loves helping you!"). Phi is software. We are the ones talking.

---

## 2. No em-dashes. None.

**This is the rule people break most, so it is the rule stated hardest.** No `—`, no `–`. Not in pages, not in frontmatter, not in code comments, not in commit messages, not in Linear tickets, not in Slack.

It is a house style call and it is not negotiable, but there is a reason worth knowing: **an em-dash is usually a sentence that was never finished.** It is the punctuation of thinking out loud. Removing it forces you to decide what the second half of the sentence actually is, and the writing gets better every time.

Four replacements cover almost everything:

| The em-dash was doing                    | Use instead                                                      |
| ---------------------------------------- | ---------------------------------------------------------------- |
| Apposition, renaming the thing just said | **Comma.** `Spaces, separate workspaces, each with its own tabs` |
| Introducing a list or an explanation     | **Colon.** `Two kinds: built-in, and your own`                   |
| A second, related thought                | **Full stop.** Two sentences.                                    |
| A genuine aside                          | **Brackets**, or cut it. Usually cut it.                         |

A pair of em-dashes wrapping a clause is nearly always a comma pair, or a clause that belongs in its own sentence.

**Never solve it by deleting the words.** The point is to write the sentence properly, not to make the checker pass.

---

## 3. Product terminology

Getting a name wrong makes a reader doubt everything else on the page. These are the ones we actually get wrong.

### Two different things are called "skill"

| Thing                                               | Write it as                                                     | Never                                                 |
| --------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------- |
| Instructions you teach the assistant inside Phi     | **Browser Skills** (capital B, capital S)                       | "Skills" alone in a context where both could be meant |
| The package that lets an outside AI agent drive Phi | **the phi-browser skill** (lowercase, hyphenated, **singular**) | "the phi-browser Skill", "phi-browser skills"         |

If a page mentions one and a reader might think of the other, add a callout pointing at the other page. Both `/skills/` and `/phi-browser-skill/` carry one.

### Accounts

**Sign in. Sign out. Create an account.** Never "log in", "login" as a verb, "logout", "register", "sign up for an account".

One exception, and it is a real one: **"a login" as a noun** means a saved credential record, which is what password managers call them. `logins from your vault` is correct. The rule is about the action, not the noun.

### The rest

| Write                                              | Not                               |
| -------------------------------------------------- | --------------------------------- |
| Phi, or Phi Browser                                | "the Phi browser", "PHI"          |
| Phinomenon Inc. on first mention, Phinomenon after | "the company", "we at Phinomenon" |
| Phi Cloud                                          | "our cloud", "the cloud AI"       |
| Private AI                                         | "local AI", "offline mode"        |
| Phi Sentinel, then Sentinel                        | "the Sentinel app"                |
| Memory (capital M, the feature)                    | "memories", "the memory system"   |
| Spaces, Profiles (capital, the features)           | "spaces", "workspaces"            |
| macOS                                              | "MacOS", "Mac OS", "OSX"          |
| Apple Silicon                                      | "M-series", "ARM Macs"            |

**Menu paths** use arrows and bold: **Settings → Developer → Agent control**.

---

## 4. Accuracy rules

These are the ones that cost us. Style errors are embarrassing; these are the ones that get quoted back at us by a reviewer or a regulator.

### Do not describe what has not shipped

Write what the product does **today**. A reader who follows your instructions and finds no such button stops trusting the whole site.

Describing a _planned_ capability is fine when it is explicitly conditional and clearly future: "Sharing Skills is something we expect to add. When it arrives, ...". What is not fine is present tense for something that does not exist yet.

### Do not overclaim privacy

"Local-first" does not mean nothing leaves the Mac. If a feature sends anything anywhere, say so **on the same page**, not only in the privacy policy. A reader comparing the two documents is exactly the reader who will write about the difference.

Specifically: if a page describes AI answering questions, it must be clear that the question goes to a model provider.

### The Privacy Policy and Terms are the source of truth

If a help page and the policy disagree, the policy is right and the page is a bug. When you change a page that touches data handling, permissions, accounts, payment, or agent behaviour, **open the policy and check**. It is at phibrowser.com/privacy and phibrowser.com/terms.

### Name third parties and their role

When another company provides something, say who they are and what that means for the reader: whose terms apply, whose privacy policy governs, where the data sits. "Bitwarden is the provider of the vault service, and your relationship for it is with Bitwarden" is worth more than a paragraph of reassurance.

### Automation carries risk, and we say so

Any page describing agents, automation, or Skills that act on the user's behalf must carry the warning: what it does under your instruction is yours, some sites detect and ban automation (Reddit being the well-known example), and that risk sits with the user. This is in the Terms; it belongs wherever we describe the capability.

---

## 5. Structure

**Frontmatter** every page:

```yaml
---
description: "One sentence, what the reader will be able to do. Used in search and previews."
---
```

**One H1**, matching the nav label. Sentence case.

**Headings are labels, not questions**, unless the page genuinely answers a literal user question. "Why Bitwarden" not "Why Bitwarden?". The FAQ is the exception, because its headings _are_ questions.

**Link lists** use a comma, never a dash gloss:

```markdown
- [Memory](/memory/), how the assistant learns from your browsing.
```

**Bullets that define a term** use a comma or a full stop:

```markdown
- **Built-in Skills**, a set Phi provides and maintains.
- **Privacy.** For tasks that run locally, the data stays on your Mac.
```

**Callouts** for the things people get wrong, not for emphasis:

```markdown
::: tip Not the same as Browser Skills
...
:::
```

**Tables** when there are three or more parallel facts. Prose when there are two.

**End with "What's next"**, two to four links, each with a comma gloss.

---

## 6. House spelling

British-leaning, matching the Privacy Policy and Terms: **colour, behaviour, organised, personalised, authorise, recognise**. Keep US spelling only inside quoted UI strings, because the UI says what it says.

Other conventions: **Oxford comma yes**. Numbers under ten in words, except versions, sizes, and counts of UI elements. `**bold**` for UI labels the reader must find, `_italic_` sparingly, `` `code` `` for literal input, paths, and settings keys.

---

## 7. Before you commit

```sh
python3 scripts/check.py site/**/*.md
```

It fails on em-dashes, banned terminology, "simply" and "just", missing frontmatter description, and the dash-gloss list pattern. It is not a style critic, it only catches the mechanical things, so it passing does not mean the page is good.

Then read it once more and ask three questions:

1. **Is every sentence true today?** Not aspirational, not nearly true.
2. **Have I said what it does not do?** If the page is only good news, it is incomplete.
3. **Would I say this out loud to someone at a desk?** If not, rewrite it.

---

## Where this came from

The August 2026 sweep of `phibrowser/help-center`, PR #9. If you want to see the rules applied at scale, that diff is 21 files of before and after.
