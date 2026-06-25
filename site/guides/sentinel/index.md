# Phi Sentinel

Phi Sentinel is a small companion app that lives in the macOS **menu bar**, separate from the browser. Keeping it apart is deliberate: the browser stays light while a quiet background layer keeps working even when no window is open. It does two main jobs — it keeps your automation running, and it hosts **Private AI**.

## Keeping automation running

Some of what Phi does is meant to outlive the moment you asked for it. [Scheduled tasks](/guides/automation/#scheduled-tasks) need to keep running on their own schedule even after you close the browser, and that is what Phi Sentinel is for. It executes those tasks, keeps your AI task history, and lets automation continue in the background — so a price check every few hours or a page you are watching keeps going whether or not the browser is open.

## Private AI

Normally Phi's AI tasks are handled by **Phi Cloud**. **Private AI** is the option to run some of them **on your Mac instead** — or through a model provider you choose — so that work never leaves your machine.

It is **opt-in and off by default**. When you turn it on, you get a few things in return:

- **Privacy** — for the tasks that run locally, the data stays on your Mac and is not sent to a cloud model.
- **Offline** — those tasks keep working without an internet connection.
- **No per-request cost** — running on your own hardware has no usage charge.

### It works task by task

Private AI is not all-or-nothing. It applies per task, and Phi is honest about which ones it can take over. With the model it sets up for you, **Memory** and **Data search** run on your Mac by default, while **Chat** and **Web tasks** stay on **Phi Cloud** — those need a stronger model than the lightweight one shipped for background work, and they only move on-device if you install a larger one. The Private AI screen shows this as coverage — how many of your AI tasks are running privately versus still going to Phi Cloud — so you always know where each kind of work is happening.

### Bring your own provider

On-device models are not the only option. You can also point a task at a model provider you run yourself — for example **Ollama**, **LM Studio**, or any OpenAI-compatible endpoint — and Phi will route that task there instead of to Phi Cloud.

### What you need

Private AI works best on an **Apple Silicon** Mac with at least **16 GB of RAM**. When you enable it, setup checks your hardware and free disk space and downloads what it needs before turning the local models on.

### Turning it on

Open Phi Sentinel from the menu bar, find **Private AI** in its settings, and switch it on. From there it walks you through setup and shows you which tasks have moved on-device once it is ready.

## Staying in control

Private AI deepens Phi's local-first approach: it lets the AI itself — not just your memory — run on your own machine. For where your data lives and what Phi does and does not collect, see [Privacy & your data](/guides/privacy/).

## What's next

- [Automation & Phi Link](/guides/automation/) — on-demand actions, scheduled tasks, and using Phi from Telegram.
- [Privacy & your data](/guides/privacy/) — where your data lives and how to stay in control.
- [FAQ](/faq/#phi-sentinel) — quick answers about Phi Sentinel.
