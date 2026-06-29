---
description: "Learn how Phi Browser handles on-demand actions, Shadow Tasks, scheduled tasks, approvals, Phi Sentinel background work, and Phi Link notifications."
---

# Automation & Phi Link

"Agentic" means Phi's AI can do more than answer questions — it can take action inside the browser, perform tasks for you, and in some cases keep doing so over time. There are three ways it works: act **now** (on-demand actions), run **in the background** (Shadow Tasks), and run **on a schedule** (scheduled tasks).

## On-demand actions

On-demand actions are tasks the assistant performs when you ask. Instead of describing the steps for you to follow, Phi carries the work out itself — navigating pages, interacting with websites, and completing multi-step jobs — in the current tab or a new one, while you watch it work.

For anything consequential, it does not just go ahead. It pauses and asks you to **confirm** before acting, with a simple Confirm or Deny prompt flagged by how risky the step is, so you stay in the loop on the actions that matter.

## Background tasks

Sometimes you do not want to sit and watch. The agent can run a task **detached in the background** — a **Shadow Task** — so it keeps working without tying up your conversation or your attention.

A background task:

- **waits for your approval** before it starts,
- runs on its own, so you can keep browsing or close the conversation,
- reports its progress, results, and any files it produces on the **Shadow Tasks** page — results do not come back into the chat on their own,
- **notifies you when it finishes**, which is especially handy with [Phi Link](#phi-link) on your phone,
- can be **cancelled** while running, or **rerun** once it is done.

## Scheduled tasks

Scheduled tasks are recurring automations that run on a schedule you define. For example, Phi can monitor a product price every few hours, watch a page for changes, or repeat another browser-based task automatically. They are really background tasks that repeat — kept running by [Phi Sentinel](/sentinel/) even when the browser is closed. This is where Phi behaves less like a browser with AI features and more like a persistent system that keeps working when you are not watching it.

## Staying in control

The agent is built to act with your knowledge, not behind your back. It asks you to confirm before consequential actions, background tasks need your approval before they run, and you can stop a running task at any time. For where your data lives and how the AI is handled, see [Privacy & Your Data](/privacy/).

## Phi Sentinel

Scheduled tasks need to keep running even when the browser is closed. **Phi Sentinel** is the background app in the macOS menu bar that makes that possible — and it also hosts Private AI, the option to run some AI on your own Mac. See [Phi Sentinel](/sentinel/) for the full picture.

## Phi Link

**Phi Link** connects Phi to Telegram so you can use your assistant from your phone and get updates when you are away from your Mac. With it you can:

- chat with your assistant from your phone,
- get notified when tasks succeed or fail,
- continue workflows away from the browser.

You can set it up two ways:

- **Official Phi Link bot** — the easiest path: scan a QR code, finish setup in one click, and you are done.
- **Your own Telegram bot** — for more control, create a bot via Telegram's BotFather, generate a token, and paste it into Phi's settings. This lets you customize the bot's name and avatar.

The same assistant identity carries over, so the experience stays consistent between desktop and phone.
