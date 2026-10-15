---
description: "Learn how Phi Browser handles on-demand actions, background and scheduled tasks, watching a page, task reports in your conversations, approvals, Phi Sentinel, and Phi Link."
---

# Automation & Phi Link

"Agentic" means Phi's AI can do more than answer questions. It can take action inside the browser, perform tasks for you, and in some cases keep doing so over time. There are three ways it works: act **now** (on-demand actions), run **in the background** (background tasks), and run **on a schedule** (scheduled tasks).

## On-demand actions

On-demand actions are tasks the assistant performs when you ask. Instead of describing the steps for you to follow, Phi carries the work out itself, navigating pages, interacting with websites, and completing multi-step jobs, in the current tab or a new one, while you watch it work.

For anything consequential, it does not just go ahead. It pauses and asks you to **confirm** before acting, with a simple Confirm or Deny prompt flagged by how risky the step is, so you stay in the loop on the actions that matter.

## Background tasks

Sometimes you do not want to sit and watch. The agent can turn a request into a **task** that runs in the background, so it keeps working without tying up your conversation or your attention.

A task:

- starts only when you **explicitly ask** for it,
- runs on its own, so you can keep browsing or close the conversation,
- pauses and asks you to **confirm** if it runs into a risky step,
- **reports back into the conversation** you asked in, see [below](#tasks-report-back-to-their-conversation),
- keeps writing in the language of that conversation. Ask the assistant if you want it in another language.

## Scheduled tasks

Scheduled tasks are recurring automations that run on a schedule you define. For example, Phi can monitor a product price every few hours, watch a page for changes, or repeat another browser-based task automatically. They are really background tasks that repeat, kept running by [Phi Sentinel](/sentinel/) even when the browser window is closed. This is where Phi behaves less like a browser with AI features and more like a persistent system that keeps working when you are not watching it.

### Watching a page

The quickest way to set one up is to right-click anywhere on a web page (not on selected text or a link) and choose **Have [your assistant] watch this page**. The sidebar opens with a new conversation, and the assistant reads the page and asks you a few questions, one at a time: why you are watching it, what counts as worth telling you, how often to check, and, if you like, how to report and when to stop.

It then sets up a scheduled task that reports **only changes**. The first check reports the page as it is now, as a starting point, and later checks speak up only when something has changed. To change, pause, or delete the watch later, ask in the same conversation.

## Tasks report back to their conversation

A task created in a conversation posts each completed or failed run back into that conversation, as a reply from the assistant. The conversation is marked unread and moves to the top of your list, and [Phi Chat](/phi-chat/#tasks-and-unread-conversations) gathers all of these conversations in its **Tasks** view.

Above each report is a strip with the task's name, the run number, and whether it **Completed** or **Failed**. Its **…** menu has:

- **Run now**, to run the task again straight away,
- **Stop reporting here**, so the task keeps running but no longer posts into this conversation. It changes to **Resume reporting here** once you have used it.

### Managing a task

When a conversation has tasks, a clock button with a count appears in its top bar. It opens a panel that shows, for each task:

- its state, such as **Running**, **Active** (its schedule is still going), **Paused**, **Stopped** (its stop condition was met), **Finished**, or **Manual** (it has no schedule),
- its schedule, when it runs next, and when it stops, if it has a stop condition,
- a **Report in this conversation** switch,
- **What to report**: **Every run**, or **Only changes**, which stays quiet when nothing new turned up. Failures are reported either way.

The task's **…** menu has **Run now**, and **Pause schedule** or **Resume schedule**.

The panel does not edit or delete tasks. To change what a task does, or to delete it, ask the assistant in the task's conversation, or use the **Tasks** page in Phi Sentinel.

### When Phi was not running

Tasks can only run while Phi is running. If your Mac was off or asleep, or Phi was quit, a run can be missed or cut off. When Phi starts again:

- a task that runs every two hours or more often moves on to its next run, and that run mentions what went unchecked,
- for other tasks, Phi asks in the task's conversation whether to run it once now. The report reads **Did not run** or **Cut off**, with **Run now** and **Ignore** buttons underneath, and you can also answer in your own words.

The question is withdrawn when the task's next scheduled run comes round, or after a day if it has no schedule.

### Notifications

When a report arrives in a conversation you do not have open, Phi can also show a notification card with the task's name and the start of the report. The card is Phi's own, not a macOS notification. It does this only when the report looks worth interrupting you for, so a check that found nothing new stays quiet. **View details** opens the conversation in [Phi Chat](/phi-chat/).

## Staying in control

The agent is built to act with your knowledge, not behind your back. It asks you to confirm before consequential actions, tasks start only when you ask for them and pause for confirmation on risky steps, and you can pause a task's schedule, stop it reporting, or ask the assistant to change or delete it at any time. For where your data lives and how the AI is handled, see [Privacy & Your Data](/privacy/).

What the agent does under your instruction is done as you, from your browser, with your accounts. Some sites do not welcome automation. Reddit is the well-known example, where accounts detected as automated get restricted or banned. If a task works through a site like that, that risk sits with you.

## Phi Sentinel

Scheduled tasks need to keep running even when the browser window is closed. **Phi Sentinel** is the background app in the macOS menu bar that makes that possible, and it also hosts Private AI, the option to run some AI on your own Mac. See [Phi Sentinel](/sentinel/) for the full picture.

## Phi Link

**Phi Link** connects Phi to Telegram so you can use your assistant from your phone and get updates when you are away from your Mac. With it you can:

- chat with your assistant from your phone,
- get the results of completed task runs,
- continue workflows away from the browser.

You can set it up two ways:

- **Official Phi Link bot**, the easiest path: scan a QR code, finish setup in one click, and you are done.
- **Your own Telegram bot**, for more control, create a bot via Telegram's BotFather, generate a token, and paste it into Phi's settings. This lets you customize the bot's name and avatar.

The same assistant identity carries over, so the experience stays consistent between desktop and phone.
