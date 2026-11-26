---
description: "Understand Phi Sentinel, Phi's background service manager on your Mac, which runs the services behind the assistant, keeps their data, and lets scheduled tasks run after the browser closes."
---

# Phi Sentinel

Phi Sentinel manages Phi's background services on your Mac. Much of what the assistant does happens outside the browser window: running scheduled tasks, building your Memory, searching the data you have connected, and sending AI requests where they need to go. A set of services running in the background does that work, and Phi Sentinel keeps them running properly.

It is installed with Phi Browser, and day to day you do not need to do anything with it. In Phi Chat's settings, these services are simply called **Background services**.

## What it does {#what-it-does}

### Running background services {#running-background-services}

Inside Phi Sentinel is a process called the **Runner**, whose only job is managing the background services. It handles:

- **Starting and watching over them.** It starts each service when it is needed, checks regularly that it is healthy, and restarts it when something goes wrong.
- **Updates.** It downloads and installs new versions of the services in the background. It checks each update's signature first, and goes back to the previous version if a new one does not run properly.
- **Passing on your settings.** It hands the choices you make in settings, such as the task sources in [Private AI](/private-ai/), to the services that need them.

The Runner only keeps the services running. It does not handle your content: your conversations, pages, and data are processed by the services themselves and never pass through the Runner.

The services it manages include:

- **The assistant service**, which keeps your conversations and tasks, and runs scheduled and background tasks.
- **The Memory service**, which builds your Memory from your browsing.
- **The data indexing service**, which indexes the data you connect so Data search can find it.
- **The AI Gateway**, which sends each AI request to the source you chose for it. That is Phi Cloud by default, and with Private AI turned on it can be a local model or a provider of your own.
- **AI Guardrail**, which checks text for sensitive information on this Mac. See below.
- **Local models**, installed and run only after you set up Private AI.

### Keeping secrets out of Memory {#ai-guardrail}

**AI Guardrail** is a detection service that runs on your Mac. Before the Memory service saves something new, it asks AI Guardrail to check it. If it finds a secret such as a password, an API key, a private key, a recovery phrase, or a recovery code, the whole item is left out of your Memory.

- The check happens entirely on this Mac. What it checks is not sent anywhere.
- It only keeps secrets out and never rewrites anything. Ordinary personal details such as names and phone numbers are saved as usual, and you can review and delete them in [Memory](/memory/).

### Keeping your data {#keeping-your-data}

The services keep their data on your Mac, in local databases: your conversations, your tasks and their runs, your Memory, and the index of your connected data.

In Phi Chat, under **Settings → Backup and updates**, you can:

- **Export data**, saving a copy of your settings and data to move to another Mac. Provider API keys are not included.
- **Local snapshot**, saving a copy on this Mac that you can go back to. Snapshots never leave this Mac.

### Keeping tasks running after the browser closes {#keeping-tasks-running}

[Scheduled tasks](/automation/#scheduled-tasks) need to run on their own schedule whether or not a browser window is open. Because Phi Sentinel runs separately from the browser, a price check every few hours or a page you are watching keeps going after you close the browser window.

## Checking on the background services {#checking-status}

Open the settings in Phi Chat:

- **General** shows whether the background services are running properly and which version you have, with **Restart background services**.
- **Services** shows the state of each service. When it says **Everything is working**, there is nothing to do.
- **Logs** is for when something is wrong and you want to report it. Click **Save** next to **Diagnostic logs**, and Phi saves a ZIP file to your Downloads folder that you can send to Phi support.

In the browser, under **Settings → Phi & AI → Phi Sentinel**, you can choose whether to **Launch Phi Sentinel when you sign in to your Mac**, and whether to **Summon Phi Chat with Shift Shift Shift** (see [Phi Chat](/phi-chat/#opening-phi-chat)).

## What's next

- [Private AI](/private-ai/), running AI tasks on your Mac or with your own AI provider.
- [Automation & Phi Link](/automation/), on-demand actions, scheduled tasks, and using Phi from Telegram.
- [Privacy & Your Data](/privacy/), where your data lives and how to stay in control.
- [FAQ](/faq/#phi-sentinel), quick answers about Phi Sentinel.
