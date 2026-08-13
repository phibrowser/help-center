# Before and after

Every example is real, taken from the August 2026 help-centre sweep. If you are unsure how to fix a sentence, find the shape that matches it here.

---

## The em-dash, by what it was doing

### Apposition: renaming the thing you just said

The em-dash pair is a comma pair. This was the single most common case.

> **Before** — Spaces and Profiles let you keep separate worlds in one browser — work and personal, a side project, a client, a research topic — without juggling windows.
>
> **After** — Spaces and Profiles let you keep separate worlds in one browser, whether that is work and personal, a side project, a client, or a research topic, without juggling windows.

> **Before** — What Phi remembers about you — your Memory — is stored locally on your device.
>
> **After** — What Phi remembers about you, your Memory, is stored locally on your device.

### Introducing a list or an explanation

Colon.

> **Before** — Widgets are small cards you pin to the new tab — a clock, the weather, your most-visited sites.
>
> **After** — Widgets are small cards you pin to the new tab: a clock, the weather, your most-visited sites.

> **Before** — They are two ends of the same thing — the pages you care about.
>
> **After** — They are two ends of the same thing: the pages you care about.

### A second thought

Full stop. This is the one that most often improves the writing, because the second half usually deserves to be a sentence.

> **Before** — Click one and it opens in place — that same sidebar entry becomes its live tab.
>
> **After** — Click one and it opens in place, so that same sidebar entry becomes its live tab.

> **Before** — Memory is automatic — Phi observes relevant browsing behaviour and builds context in the background.
>
> **After** — Memory is automatic. Phi observes relevant browsing behaviour and builds context in the background.

### Because, but written lazily

If the second half explains the first, say "because", "so", or "since".

> **Before** — Chat and Web tasks stay on Phi Cloud — those need a stronger model than the lightweight one shipped for background work.
>
> **After** — Chat and Web tasks stay on Phi Cloud, because those need a stronger model than the lightweight one shipped for background work.

### List glosses

Two patterns made up most of the count. Both take a comma.

> **Before** — `- [Memory](/memory/) — how the assistant learns from your browsing.`
>
> **After** — `- [Memory](/memory/), how the assistant learns from your browsing.`

> **Before** — `- **Built-in Skills** — a set Phi provides and maintains.`
>
> **After** — `- **Built-in Skills**, a set Phi provides and maintains.`

When the gloss is a full sentence, use a full stop instead:

> `- **Privacy.** For the tasks that run locally, the data stays on your Mac.`

### Headings

> **Before** — `## What it is — and what it is not`
>
> **After** — `## What it is, and what it is not`

---

## Accuracy fixes

These changed meaning, not style. They are the reason the sweep was worth doing.

### "On by default" was wrong

> **Before** — Phi comes with an assistant built into the browser and on by default.
>
> **After** — Phi comes with an assistant built into the browser, on once you are signed in.

Signing in is the choice. Saying "on by default" implies it was switched on _for_ the user, which is the opposite of what happens and the opposite of what the Privacy Policy says.

### Local-first, told as only half the story

The page described data staying on the Mac and stopped there, which reads as "nothing ever leaves". A public reviewer used exactly this gap against us.

> **Added** — There is a second half to that, and it is worth knowing before you rely on it: when the assistant answers a question, the content needed to answer goes to the model provider you picked, because that is the only way a model can answer. It passes through us without being stored.

### A feature that did not exist

The Terms described sharing Skills with other users. There is no sharing feature.

> **Before** — If you create and share automation workflows, you grant each recipient a licence to...
>
> **After** — Sharing Skills with other users is something we expect to add. When it arrives, sharing a Skill will grant each recipient a licence to...

Conditional and clearly future is fine. Present tense for something that does not exist is not.

### Naming the third party's role

> **Added** — Bitwarden is the provider of the vault service, and your relationship for it is with Bitwarden, under their terms and their privacy policy. You choose whether your vault sits on bitwarden.com, on bitwarden.eu, or on a server you host yourself, and that choice decides where your vault lives and whose law reaches it.

Vague reassurance is worth less than telling someone exactly who holds their data.

### The missing risk warning

Nothing in the help centre mentioned that automation can get an account banned, while the Terms said it plainly.

> **Added** — Some sites do not want agents, and they will act on it. Reddit is the well-known example: accounts identified as automated get restricted or banned, and that call is theirs to make, not ours. That risk is yours, and it is not something we can appeal or undo on your behalf.

---

## Words to cut

| Cut                                           | Why                                            |
| --------------------------------------------- | ---------------------------------------------- |
| simply, just, easy, quickly                   | Only ever read by someone who is stuck         |
| please note, it is worth noting, keep in mind | Say the thing                                  |
| powerful, seamless, intuitive, robust         | Marketing adjectives that carry no information |
| leverage, utilise                             | Use "use"                                      |
| in order to                                   | "to"                                           |
| a variety of, a number of                     | Say how many, or say "several"                 |
| allows you to, enables you to                 | "lets you", or make the reader the subject     |

> **Before** — Phi allows you to simply leverage a variety of powerful layout modes in order to customise your workspace.
>
> **After** — Phi has three layout modes, so you choose how much space goes to the page and how much to browser controls.
