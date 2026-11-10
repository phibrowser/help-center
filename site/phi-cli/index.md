---
description: "Drive Phi Browser from your terminal with the phi command: open pages, click, fill forms, and take screenshots in agent Spaces that reuse the sites you are already signed into."
---

# The Phi CLI

The **Phi CLI** puts Phi's browser automation on your command line as a single command, **`phi`**. Anything that can run a terminal command can drive your browser with it: you, a shell script, a CI job, or a coding agent.

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

Unlike automation tools that launch a blank, throwaway browser, the CLI drives **your** Phi. It is a command-line front end to the same engine as the [phi-browser skill](/phi-browser-skill/), so everything that page describes applies here too: by default, work happens in a hidden **agent Space** with the sites you are already signed into, it shows up as a robot pip in your Space switcher, you can watch it live, and you can take control at any moment.

## Installing

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

Both install the `phi` command, plus `phibrowser` as an alias for it. It needs macOS, Node 22 or newer, and Phi Browser 2.4.0 or newer, because the CLI is a client, not a browser. If Phi Browser is missing or too old, the CLI offers to install or update it for you, from the same signed release feed the app updates itself from; `phi install browser` does the same without a prompt. A few newer commands need a newer Phi and say so when they meet an older one: shadow windows, `phi article`, and `phi challenge --wait` arrive in 2.7.0, and `--window-id` in 2.9.0.

There is nothing else to set up. Phi Browser does not have to be running, since the CLI starts it when needed. The first time the CLI connects, Phi shows its usual approval prompt (**Allow Once**, **Always Allow**, or **Deny**), and approving the CLI turns on agent control as part of the approval. On older Phi builds, agent access is instead switched on by hand in **Settings**; the CLI tells you when it meets one.

## The element map

After any navigation the CLI prints the page header plus one line per interactive element, in exactly the syntax the action commands accept:

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

The `@N` references stay valid for as long as the element exists, so you can read the map, decide, and act in separate commands. After an action the CLI prints only what changed on the page; if the action navigated, it prints the new page's full map instead. For scripting, `--json` emits raw JSON and `--quiet` suppresses the summaries.

Run `phi help` for the full command list (navigation, snapshots, screenshots and PDFs, cookies and storage, waiting, tab groups, downloads, and more) and `phi help <command>` for per-command flags.

## Sessions

A session names one task and its agent Space. The default session is called `cli`; give each separate goal its own with `-s`:

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

Like every agent Space, a session's Space is ephemeral by default, so it closes itself a while after the task goes quiet. Add `--persistent` when you want it kept as a lasting workspace instead.

## Where commands run

By default everything happens in the session's hidden agent Space. Three things change that:

- **Your real windows.** `phi -U "Work" goto …` (and the same for `click`, `fill`, `snapshot`, and the rest) drives the visible window of one of your own Spaces instead of a hidden one. Your clicks and the CLI's interleave in the same window, so it acts in small steps and re-reads the page between them. If that Space is open in more than one window, the one in front answers, and `--window-id` picks a specific one (`phi space-list` shows the ids).
- **Browser management.** Commands such as `space-list`, `bookmark-add`, `rules`, `pins`, and `downloads` operate your real browser data app-wide, mirroring what the phi-browser skill can do.
- **A window you cannot see.** `--shadow` runs a session in an invisible window, for background work you asked to keep out of your way. [Shadow windows](#shadow-windows) covers what you give up.

All three depend on **Settings → Developer → "Allow agents to operate your Spaces"**, which is on by default, exactly as for coding agents. Turn it off and the CLI is confined to its own agent Spaces.

### Shadow windows

A shadow window is a real browser window on a real profile, with your sign-ins, that you cannot see. It sits off-screen and does not appear in your Space switcher, Mission Control, or the **Window** menu. Page commands work exactly as they do in an agent Space, and the **Profiles agents can use** setting limits them in the same way.

```bash
phi -s prices --shadow open https://example.com/pricing
phi -s prices --shadow snapshot --text
phi -s prices --shadow close        # always close it when you are done
```

What you give up is every way of staying involved: no robot pip, no live view, no Agent Transcript, no **Take control**, and no handoff. So use it only for background work you asked to keep out of your way, and stay with an agent Space for anything that might need you, such as a sign-in, a captcha, a payment, or a consequential choice. If a human step turns up partway through, nobody can be asked: close the window and do that part in an agent Space.

It still acts as you, and you will not see it happen, so the warning in [You stay in charge](#you-stay-in-charge) matters more here, not less.

- **Repeat `--shadow` on every command.** Without it, the same session name binds a visible agent Space.
- **Close it yourself.** Nothing in Phi's interface shows a shadow window, so `phi sessions` is how you find the ones you opened and `phi close` is how you end one. `phi close-all` ends them all, along with your agent Spaces. Windows another agent opened are not listed. One left open closes itself on the same timer as an ephemeral Space, and keeps using your Mac's memory until then.
- **`--incognito` starts it signed out of everything.** Added to `--shadow`, it gives the window a fresh off-the-record session: no cookies or sign-ins come in from your profile, nothing is kept, and the session is destroyed with the window. Repeat this flag too, because a session name stays the kind it was created as and asking for the other kind fails.
- **Some commands refuse.** `handoff`, `takeover`, `watch`, `status`, `messages`, and `screenshot --window` fail with an explanation, because each one needs you or a window you can see. `--persistent` and `-U` do not combine with `--shadow`.

## Reading articles

When you want the article on a page and not the page around it, `phi article` runs it through Phi's Reader View, the same extraction you get from **⌘⌥R**, so the navigation, comments, and related-post rails are already gone.

```bash
phi article                 # how it was extracted, then the article's HTML
phi article --meta          # only the verdict: title, method, and coverage
phi article-save post.html  # one standalone file, with images inlined
```

A page that is not an article, such as a search result, usually fails with `no_article_detected` or `below_coverage_floor`. That is an honest answer, so use `phi snapshot --text` rather than retrying. Reader View does not read PDFs, and `phi snapshot --text` sees no text in one either, so fetch the file and read it outside the browser. Both commands need an agent Space or a shadow window, so they do not work with `-U`. To keep the whole original page, use `phi archive`.

## Signing in

The CLI never asks you to paste a password into a terminal. Signing in goes through the [Agent Password Manager](/agent-passwords/): `phi cred-fill` has Phi fill a sign-in field directly from your vault, so the secret travels from the app to the page without passing through the CLI, and every request pops Phi's approve-or-deny prompt naming who is asking and for what. Fills are bound to the site the login belongs to, two-factor codes are never released to automation, and any secret a command handled is scrubbed from its output.

## You stay in charge

The CLI inherits the skill's co-working rules. Click the robot pip in your Space switcher to watch a session live, and **Take control** at any time. While you hold the wheel, the CLI's mutating commands are refused until you hand back. When a step belongs to you (a sign-in, a captcha, a two-factor code) the flow is `phi handoff "Sign in, then hand back"`: Phi prompts you, you do the human step, and work resumes when you hand control back.

Cloudflare checks work the same way. The CLI never solves one, and our [Terms of Use](https://phibrowser.com/terms/) rule out bypassing anti-bot measures anyway. `phi challenge` tells you whether one is in the way, and `phi challenge --wait` gives a managed check a limited chance to finish by itself: at most two short rechecks per encounter, with no click, reload, or navigation. If the check is still there, use `phi handoff` and do not retry. A hard block is not a check anyone can pass, so handing off will not help.

None of this reaches a [shadow window](#shadow-windows), which is why it is only for work that will not need you.

One thing to know before you point automation at an account you care about: some sites do not want agents, and they act on it. Reddit is the well-known example, and accounts identified as automated get restricted or banned. What the CLI does under your instruction is yours, and that risk sits with you; it is not something we can appeal or undo on your behalf.

## Installing the skill from the terminal

The CLI can also set up the [phi-browser skill](/phi-browser-skill/) itself:

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

This is the same thing the **Add skill to…** menu under **Settings → Developer → Install the phi-browser skill** does, without leaving the terminal: it links the skill bundled inside Phi into each agent's skills folder, so it stays current with every Phi update.

It knows 14 names: `claude`, `codex`, `cursor`, `hermes`, `openclaw`, `pi`, `grok`, `grokbot`, `antigravity`, `copilot`, `opencode`, `qwen`, `codebuddy`, and `agents`. The last is the shared `~/.agents/skills` folder that Deep Code, Kimi Code, Cline, and DeepSeek Harness read. Name none and only the agents already on your Mac get the link, so it leaves no folders behind for tools you do not use.

All of them can drive Phi, but only the first six send their conversation to Agent Transcript. Under the others, it shows the browser steps and not the agent's side.

::: tip Not the same as Browser Skills
[Browser Skills](/skills/) are the workflows you teach the assistant inside Phi. What `phi install skill` installs is the phi-browser skill, the package that lets an outside coding agent drive Phi.
:::

## What's next

- [The phi-browser skill](/phi-browser-skill/), agent Spaces, watching agents live, and how access is contained. It all applies to the CLI.
- [Agent Password Manager](/agent-passwords/), how automation signs in with your vault without seeing your passwords.
- [Spaces & Profiles](/spaces/), the workspaces and sign-in identities that agent Spaces are built on.
