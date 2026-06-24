# Automation & Phi Link

"Agentic" means Phi's AI can do more than answer questions — it can take action inside the browser, perform tasks for you, and in some cases keep doing so over time. There are two modes: on-demand actions and scheduled tasks.

## On-demand actions

On-demand actions are tasks the assistant performs when you ask. Instead of describing the steps for you to follow, Phi can navigate pages, interact with websites, and carry out browser-based tasks itself.

## Scheduled tasks

Scheduled tasks are recurring automations that run on a schedule you define. For example, Phi can monitor a product price every few hours, watch a page for changes, or repeat another browser-based task automatically. This is where Phi behaves less like a browser with AI features and more like a persistent system that keeps working when you are not watching it.

## Phi Sentinel

Scheduled tasks need to keep running even when the browser is closed. **Phi Sentinel** is the background AI orchestrator that makes that possible. It runs as a separate process from the browser and lives in the macOS menu bar, where it:

- executes scheduled tasks,
- maintains your AI task history,
- lets automation continue when the browser is closed.

Keeping it separate is deliberate: the browser stays lightweight, while the automation layer stays persistent and available in the background.

## Phi Link

**Phi Link** connects Phi to Telegram so you can use your assistant from your phone and get updates when you are away from your Mac. With it you can:

- chat with your assistant from your phone,
- get notified when tasks succeed or fail,
- continue workflows away from the browser.

You can set it up two ways:

- **Official Phi Link bot** — the easiest path: scan a QR code, finish setup in one click, and you are done.
- **Your own Telegram bot** — for more control, create a bot via Telegram's BotFather, generate a token, and paste it into Phi's settings. This lets you customize the bot's name and avatar.

The same assistant identity carries over, so the experience stays consistent between desktop and phone.
