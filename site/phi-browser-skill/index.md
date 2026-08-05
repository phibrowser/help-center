---
description: "Let AI coding agents like Claude Code drive Phi Browser in their own agent Spaces. Install the phi-browser skill, watch agents work live, and take control at any time."
---

# The phi-browser skill

The **phi-browser skill** connects Phi to AI coding agents that live outside the browser: **Claude Code, Codex, Cursor, OpenClaw, Pi, and Hermes**. Install it into your agent and the agent can drive Phi directly, opening pages, filling forms, taking screenshots, extracting data, testing web apps, anything that needs a real browser.

::: tip Not the same as Browser Skills
This is one skill, singular, and it belongs to your coding agent. **[Browser Skills](/skills/)** are the opposite direction: instructions you teach Phi's own assistant, inside the browser. The phi-browser skill is something Phi hands to _your agent_ so the agent can use Phi as its browser.
:::

What makes it unusual is _where_ the agent works. It does not take over your window, and it does not run a separate stripped-down browser. It works in its own **agent Space**, a hidden browser window with your real login state, while you carry on browsing. You can watch it live, take control at any moment, and hand control back when you are done.

## Agent Spaces

Phi is built around [Spaces](/spaces/), separate workspaces each bound to a profile with its own logins. When a coding agent starts a task, Phi gives it a dedicated **agent Space**: a real browser window, spawned hidden, that appears in your Space switcher as a small robot (🤖) pip with a status badge. Multiple agents get numbered pips (R1, R2, and so on) so you can tell them apart.

Click the pip to watch the agent work in real time. Phi renders the agent's actions natively, so the cursor glides to its target, clicks ripple, and typed fields pulse, and you can follow exactly what it is doing. While you watch, the page ignores your own clicks and keystrokes so you cannot disturb the agent by accident. The only way in is the explicit **Take control** button.

Two menu items round this out. **View → Agent Transcript** opens a console showing the agent's narration, actions, and conversation, and you can type commands back to the agent from there. **View → Agent Autoview** automatically follows whichever agent is currently operating.

Agent Spaces are tidy by default. An ephemeral Space closes itself shortly after the task goes quiet, so finished tasks do not pile up in your switcher. An agent only creates a lasting workspace when you explicitly ask for one.

## You can always take the wheel

Only one side controls an agent Space at a time, and you always win. The overlay pill at the top of an agent Space names the driving agent and offers the controls for whoever holds the wheel:

- While the agent drives, **Take control** stops it instantly, and any further action it attempts is refused until you hand back.
- While you drive, **Hand back** returns control to the agent, which picks up where it left off, and **Finish** ends the task.

The handoff works in the other direction too. When the agent hits a step that belongs to you, such as a sign-in, a captcha, a two-factor code, or a consequential choice, it hands control back and Phi shows a prompt, **"The agent needs you"**, with a button to jump straight into the agent Space. Do the human step, click **Hand back**, and the agent resumes.

## Your logins, reused deliberately

An agent Space is bound to one of your existing profiles, so the agent browses with the sites you are already signed into. That is the point: it can pick up where you are instead of starting from a blank browser.

You decide how far that goes. **Profiles agents can use**, in the Developer tab, restricts which profiles agents may work in. If you disallow them all, Phi creates a dedicated "Agent" profile so agents can still work without touching your main logins. And when a task needs to sign in to something, the agent does not ask you to paste a password. It goes through the [Agent Password Manager](/agent-passwords/), where every request needs your approval.

## What the agent does is yours

This is the part worth reading twice, because it is easy to miss when you are watching something work by itself.

An agent driving Phi is acting **as you**, from your browser, with your sessions. What it does under your instruction is yours, on our services and on everyone else's, and the terms of the sites it visits apply to you exactly as they would if you had clicked everything by hand.

**Some sites do not want agents, and they will act on it.** A lot of sites treat automated access as a threat to their business, because their content is their business, and they detect it aggressively. Reddit is the well-known example: accounts identified as automated get restricted or banned, and that call is theirs to make, not ours. Point an agent at a site that does not welcome it and you can lose your account there, your history, and anything you kept in it. That risk is yours, and it is not something we can appeal or undo on your behalf.

**Consequential actions are yours to authorise.** An agent can buy things, send messages, submit forms, and change settings on services you are signed in to. Review what it is about to do before you let it. Where Phi asks you to confirm, that confirmation is doing real work.

Our [Terms of Use](https://phibrowser.com/terms/) set this out in full.

## Setting it up

Everything lives behind **Developer mode**, and it is off by default. Three steps:

1. **Turn on Developer mode** in **Settings → General**. This reveals the Developer tab, which holds agent access, permissions, and the password manager.
2. **Install the skill** from **Settings → Developer → Install the phi-browser skill**. The **Add skill to…** button lists each supported agent, or **All agents**, and links the skill bundled inside Phi into that agent's skills folder so it stays current with every Phi update. It needs Node 22 or newer, and you should restart a newly configured agent afterwards. In Pi, `/reload` is enough.
3. **Allow agents to connect** with **Settings → Developer → Agent control → "Allow agents to control Phi (CDP)"**. It applies immediately, with no relaunch.

The first time a given agent actually connects, Phi identifies the connecting process, including its code signature, and asks you: **Allow Once**, **Always Allow**, or **Deny**. Nothing reaches the browser until you approve. Agents you have approved appear under **Allowed agents** in the same tab, marked "Always" or "This session". Remove one and it will ask again next time.

## How access is contained

The connection is designed to be unreachable by anything you have not approved:

- Phi listens on a **private socket only this Mac's processes can reach**, not a network port. Nothing on your network, and no other user on the Mac, can connect to it.
- Every connection is **consented per agent**, verified by the connecting process's identity.
- Turning **"Allow agents to control Phi (CDP)"** off stops new connections and severs live ones instantly.
- By default agents can only work inside **their own agent Spaces**. Touching your real browsing data, meaning your Spaces, bookmarks, pinned tabs, URL rules, and window layout, is a separate permission, **"Allow agents to operate your Spaces"**, which is also off by default.
- Turning **Developer mode** off is the kill switch. It disables agent access and the [Agent Password Manager](/agent-passwords/) together, and nothing re-enables automatically when you turn it back on.

## What's next

- [The Phi CLI](/phi-cli/), the same automation as a `phi` command in your terminal, for scripts and quick one-off drives.
- [Agent Password Manager](/agent-passwords/), how agents sign in with your vault without seeing your passwords.
- [Browser Skills](/skills/), the other kind of skill, taught to Phi's own assistant.
- [Spaces & Profiles](/spaces/), the workspaces and login identities agent Spaces are built on.
- [Automation & Phi Link](/automation/), what Phi's own assistant can do on your behalf.
