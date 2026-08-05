---
description: "Let AI coding agents like Claude Code drive Phi Browser in their own agent Spaces — install the phi-browser skill, watch agents work live, and take control at any time."
---

# The phi-browser Skill

The **phi-browser** skill connects Phi to AI coding agents that live outside the browser — **Claude Code, Codex, Cursor, OpenClaw, Pi, and Hermes**. Install it into your agent, and the agent can drive Phi directly: open pages, fill forms, take screenshots, extract data, test web apps — anything that needs a real browser.

This is a different thing from [Phi's own Skills](/skills/), the workflows you teach the assistant inside the browser. The phi-browser skill goes the other direction: it is something Phi gives to _your coding agent_, so that agent can use Phi as its browser.

What makes it unusual is _where_ the agent works. It does not take over your window or run a separate stripped-down browser. It works in its own **agent Space** — a hidden browser window with your real login state — while you keep browsing. You can watch it live, take control at any moment, and hand control back when you are done.

## Agent Spaces

Phi is built around [Spaces](/spaces/) — separate workspaces, each bound to a profile with its own logins. When a coding agent starts a task, Phi gives it a dedicated **agent Space**: a real browser window, spawned hidden, that appears in your Space switcher as a small robot (🤖) pip with a status badge. Multiple agents get numbered pips (R1, R2, …) so you can tell them apart.

Click the pip to watch the agent work in real time. Phi renders the agent's actions natively — the cursor glides to its target, clicks ripple, typed fields pulse — so you can follow exactly what it is doing. While you are watching, the page ignores your own clicks and keystrokes so you cannot disturb the agent by accident; the only way in is the explicit **Take control** button.

Two menu items round this out: **View → Agent Transcript** opens a console showing the agent's narration, actions, and conversation — you can also type commands back to the agent from there — and **View → Agent Autoview** automatically follows whichever agent is currently operating.

Agent Spaces are tidy by default: an ephemeral Space closes itself shortly after the task goes quiet, so finished tasks do not pile up in your switcher. An agent only creates a lasting workspace when you explicitly ask for one.

## You can always take the wheel

Only one side controls an agent Space at a time, and you always win. The overlay pill at the top of an agent Space names the driving agent and offers the controls for whoever holds the wheel:

- While the agent drives: **Take control** — the agent stops instantly, and any further action it attempts is refused until you hand back.
- While you drive: **Hand back** returns control to the agent, which picks up where it left off; **Finish** ends the task.

The handoff also works in the other direction. When the agent hits a step that belongs to you — a login, a captcha, a two-factor code, a consequential choice — it hands control back and Phi shows a prompt: **"The agent needs you"**, with a button to jump straight into the agent Space. Do the human step, click **Hand back**, and the agent resumes.

## Your logins, reused deliberately

An agent Space is bound to one of your existing profiles, so the agent browses with the sites you are already signed into — that is the point: it can pick up where you are instead of starting from a blank browser.

You decide how far that goes. **Profiles agents can use**, in the Developer tab, restricts which profiles agents may work in; if you disallow them all, Phi creates a dedicated "Agent" profile so agents can still work without touching your main logins. And when a task needs to _sign in_ to something, the agent does not ask you to paste a password — it goes through the [Agent Password Manager](/agent-passwords/), where every request needs your approval.

## Setting it up

Everything lives behind **Developer mode**, and is off by default. Three steps:

1. **Turn on Developer mode** in **Settings → General**. This reveals the Developer tab, which holds agent access, permissions, and the password manager.
2. **Install the skill** from **Settings → Developer → Install the phi-browser skill**. The **Add skill to…** button lists each supported agent — or **All agents** — and links the skill bundled inside Phi into that agent's skills folder, so it stays current with every Phi update. It needs Node 22 or newer; restart a newly configured agent afterwards (in Pi, `/reload` is enough).
3. **Allow agents to connect** with **Settings → Developer → Agent control → "Allow agents to control Phi (CDP)"**. It applies immediately — no relaunch.

The first time a given agent actually connects, Phi identifies the connecting process — including its code signature — and asks you: **Allow Once**, **Always Allow**, or **Deny**. Nothing reaches the browser until you approve. Agents you have approved appear under **Allowed agents** in the same tab, marked "Always" or "This session"; **Remove** one and it will ask again next time.

## How access is contained

The connection is designed to be unreachable by anything you have not approved:

- Phi listens on a **private socket only this Mac's processes can reach** — not a network port. Nothing on your network, and no other user on the Mac, can connect to it.
- Every connection is **consented per agent**, verified by the connecting process's identity.
- Turning **"Allow agents to control Phi (CDP)"** off stops new connections and severs live ones instantly.
- By default agents can only work inside **their own agent Spaces**. Touching your real browsing data — your Spaces, bookmarks, pinned tabs, URL rules, window layout — is a separate permission, **"Allow agents to operate your Spaces"**, which is also off by default.
- Turning **Developer mode** off is the kill switch: it disables agent access and the [Agent Password Manager](/agent-passwords/) together, and nothing re-enables automatically when you turn it back on.

## What's next

- [The Phi CLI](/phi-cli/), the same automation as a `phi` command in your terminal, for scripts and quick one-off drives.
- [Agent Password Manager](/agent-passwords/) — how agents sign in with your vault, without seeing your passwords.
- [Spaces & Profiles](/spaces/) — the workspaces and login identities agent Spaces are built on.
- [Automation & Phi Link](/automation/) — what Phi's own assistant can do on your behalf.
