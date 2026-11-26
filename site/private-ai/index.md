---
description: "Understand Private AI: what Phi Cloud is, how it relates to your own AI providers, and how to run AI tasks on your Mac or with a service you choose, such as Ollama or LM Studio."
---

# Private AI

Phi's AI features run on **Phi Cloud** by default. **Private AI** lets you decide, task by task, who handles each kind of AI work: Phi Cloud, a model downloaded to this Mac, or an AI provider you connect yourself, such as Ollama, LM Studio, OpenAI, or OpenRouter.

Private AI is off by default. If you never turn it on, every AI feature works as usual and uses Phi Cloud.

## The assistant, Phi Cloud, and AI providers {#assistant-phi-cloud-and-providers}

These three are easy to mix up, so it helps to separate them first:

- **The assistant** is the one you named. It is Phi's agent: it works out what you are asking for and decides what to do, whether that is reading a page, running a Browser Skill, acting in the browser, or creating a task. It is the same assistant whichever model it uses, and your conversations, Memory, and tasks do not change with the model.
- **A model** is the "brain" the assistant borrows to think. At each step, the assistant sends what it needs to a model, and the model answers.
- **An AI source** decides where that model runs. There are three kinds:
  - **Phi Cloud**, the AI service built into Phi. It is not an agent and not one particular model. It is a set of cloud models that Phi connects to and manages for you. It uses your Phi sign-in, needs no API key, and does not ask you to pick a model.
  - **Local models**, models downloaded to this Mac that run on this Mac.
  - **Your providers**, AI services you connect yourself, with your own address, account, or API key.

So Phi Cloud sits in the same place as Ollama or OpenAI: it is one answer to "where does the assistant's model run?" The difference is that Phi Cloud is built in and works out of the box, while the others are yours to set up.

### How the sources compare {#comparing-sources}

|                               | Phi Cloud                                                           | Local models                                       | Your local providers (Ollama, LM Studio)              | Your cloud providers (OpenAI, OpenRouter, Codex, and others) |
| ----------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| What you need                 | Nothing beyond signing in to Phi                                    | One setup step, which downloads them               | Ollama or LM Studio installed and running             | An account or API key with that service                      |
| Where your content goes       | Through Phi, to the model provider Phi uses                         | Nowhere. It stays on this Mac                      | The address you set, usually this Mac or your network | Straight from your Mac to that service                       |
| Whose account it arrives as   | Phi's. The model provider is not told who you are                   | Not applicable                                     | Not applicable                                        | Yours, through your own account or key                       |
| Cost                          | Included with Phi, within your [usage allowance](/ai/#usage-limits) | Free, using this Mac's memory and processing power | Free, using the computer it runs on                   | That service's own pricing                                   |
| Counts toward Phi's allowance | Yes                                                                 | No                                                 | No                                                    | No                                                           |
| Works offline                 | No                                                                  | Yes                                                | Yes, when it runs on this Mac                         | No                                                           |
| Quality                       | Consistent, suited to every task                                    | Depends on model size, usually below cloud models  | Depends on the model you choose                       | Depends on the model you choose                              |

For how Phi Cloud handles your content, see [Privacy & Your Data](/privacy/). When you use a cloud provider of your own, that provider's privacy policy is the one that applies.

## When Phi uses your provider {#when-phi-uses-your-provider}

Adding a provider on its own changes nothing. Phi uses it only when both of these are true:

1. Under **Private AI → AI tasks**, you have chosen one of that provider's models as the source for a task.
2. The **Private AI** switch is on.

Any task you have not changed keeps using Phi Cloud. Turning Private AI off sends every task back to Phi Cloud straight away, but your choices are kept, so turning it on again restores them without another setup.

## Choosing a source for each task {#choosing-a-source-for-each-task}

Private AI is not all-or-nothing. You set it task by task, and the top of the page shows how many tasks are not on Phi Cloud, as **Running privately: 2 of 4 AI tasks**, for example.

| AI task         | What it covers                                        | Sources you can choose                                  |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| **Chat**        | Replies in the sidebar and in Phi Chat                | Phi Cloud, local models, your providers, Codex          |
| **Memory**      | Background work such as browsing Memory and summaries | Phi Cloud, local models, your providers, Codex          |
| **Web tasks**   | The assistant acting in the browser, and automation   | Phi Cloud, local models, your providers, Codex          |
| **Data search** | Searching the data you have connected                 | Only Phi Cloud, or the local search model Phi downloads |

A few more rows sit alongside them:

- **Vision fallback.** When the model you chose for a task cannot read images, images go to the model set here instead. It starts as **Not configured**.
- **AI tab organization** is handled by Apple Intelligence on macOS and cannot be changed. It does not appear on Macs without Apple Intelligence.
- **Image generation** always uses Phi Cloud.

When you switch a task to a different source, Phi tests that model first. If the test fails, the task goes back to its previous source and you are told why.

Once Chat uses a source other than Phi Cloud, the chat shows **You're using Private AI**, because answers may differ in quality from online models.

## Turning on Private AI {#turning-on-private-ai}

There are two ways in to the Private AI settings:

- In [Phi Chat](/phi-chat/), click the settings (gear) button in the top bar and choose **Private AI**.
- In the browser, go to **Settings → Phi & AI → Phi Sentinel → Private AI**, which opens the same page in Phi Chat.

The first time you turn the switch on, Phi checks whether this Mac can run local models:

- **If it can**, the setup window lists the download size, roughly how much memory the models use while running, and which tasks will move to this Mac. Click **Start setup** and Phi installs the local runtime, downloads the models, starts them, and verifies them. You can **Minimize** the window and let setup carry on in the background. Until it finishes, every AI feature keeps using Phi Cloud.
- **If it cannot**, the window says why. You can still click **Use your own AI service** to connect your own providers without local models.

### Requirements {#requirements}

| Item      | Requirement                                                     |
| --------- | --------------------------------------------------------------- |
| Chip      | Apple Silicon. Intel Macs cannot run local models               |
| Memory    | At least 16 GB                                                  |
| Free disk | At least 10 GB, and at least 2 GB more than the download itself |

None of this applies if you only connect your own providers, such as Ollama on another computer on your network, or OpenAI.

### What setup installs {#what-setup-installs}

Setup currently downloads two models, which use about 7 GB of memory together while running:

- **Gemma 4 E4B (4-bit)**, for **Memory**.
- **BGE-M3**, for **Data search**.

**Chat** and **Web tasks** stay on Phi Cloud. Those two need a model that reliably handles long context and tool calls, and Phi moves them to this Mac automatically only when a local model of 20 billion parameters or more is available. The Gemma model that setup downloads has about 4 billion: good for background work, not for carrying a conversation. You can still switch Chat to it by hand under **AI tasks**, as long as it passes the test. When setup finishes, it tells you exactly which tasks now run on this Mac.

After setup, the index that Memory uses to find related items is still built on Phi Cloud. If you want that done on this Mac too, choose the local model for **Data search** by hand once, and both move to this Mac.

## Connecting Ollama or LM Studio {#connecting-ollama-or-lm-studio}

Ollama and LM Studio are free apps for running open models on your own computer. Both are built into Phi as providers, at `http://127.0.0.1:11434` for Ollama and `http://127.0.0.1:1234/v1` for LM Studio by default.

1. Install and open Ollama or LM Studio, and download a model (see [Recommended models](#recommended-models)).
   - Ollama: run `ollama pull <model>` in Terminal, for example `ollama pull gpt-oss:20b`.
   - LM Studio: search for a model in the app, download it, and start the local server on the **Developer** page.
2. In Phi Chat, open **Settings → AI providers** and choose **Ollama** or **LM Studio**.
3. Turn on **Use this provider**. If the service runs on another computer on your network, change **Base URL** to that computer's address.
4. Click **Load** to fetch its models. Under **Model access**, choose **Allow all models**, or **Selected models only** and tick the ones you want.
5. Pick a model, click **Test**, and once it reports a successful connection, click **Save changes**.
6. Go back to **Private AI** and, under **AI tasks**, choose that model for the task you want to move, such as **Chat**.
7. Turn on the **Private AI** switch.

For any other service with an OpenAI-compatible API, use **Add Custom Provider** and enter a name, the base URL, and an API key if the service needs one.

Worth knowing:

- The base URL can be `http` or `https`, and the API key is optional, since local services usually do not need one. A key sent to an `http` address travels unencrypted, so use `https` for anything that is not on your own Mac or network.
- Ollama or LM Studio has to stay open. If the computer sleeps or the app quits, the affected tasks follow your [fallback setting](#when-a-local-source-is-unavailable).
- Web tasks and long conversations carry a lot of text. If replies come back incomplete, or the assistant fails to finish an action, raise the context length, to 32K for example: in Ollama's settings with **Context length**, or in LM Studio with **Context Length** when you load the model. A longer context uses more memory.
- For other computers on your network to reach Ollama, Ollama on that computer has to listen on its network address (`OLLAMA_HOST=0.0.0.0`).

## Recommended models {#recommended-models}

Open models move quickly, so treat the names below as examples. A newer model of the same size works just as well. Two things matter most: the model has to be big enough, and it has to fit in memory. A model uses roughly its download size in memory while running, plus a few GB, and macOS and your other apps need room too.

| Your Mac's memory | Suggestion                                                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16 GB             | Use setup so Memory and Data search run on this Mac, and keep Chat and Web tasks on Phi Cloud. This much memory cannot hold a model suited to Chat  |
| 32 GB             | You can run a 20-billion-parameter class model for Chat, for example **gpt-oss-20b** (Ollama: `gpt-oss:20b`) or **Qwen3 30B** (Ollama: `qwen3:30b`) |
| 64 GB             | You can pick a steadier 30-billion-parameter class model, for example **Qwen3 32B** (Ollama: `qwen3:32b`), with room for a longer context           |
| 128 GB or more    | You can run a 100-billion-parameter class model, for example **gpt-oss-120b** (Ollama: `gpt-oss:120b`), which comes closer to cloud models          |

By task:

- **Chat and Web tasks:** choose a model with 20 billion parameters or more that supports tool calling (function calling). Web tasks lean on tool calls the hardest, and small models often fail at them.
- **Vision fallback:** choose a model that can read images, for example Gemma 3 12B (Ollama: `gemma3:12b`) or Qwen2.5-VL 7B (Ollama: `qwen2.5vl:7b`).
- **Memory:** the Gemma model from setup is enough, and there is usually no reason to change it.
- **Data search:** only the local search model Phi downloads, or Phi Cloud.

However large, a local model usually falls short of the frontier models behind Phi Cloud. If answer quality matters more to you than keeping content on your Mac, leaving Chat and Web tasks on Phi Cloud is a sensible choice.

## When a local source is unavailable {#when-a-local-source-is-unavailable}

When a local model, Ollama, or LM Studio stops responding, Phi follows the setting **When a local or self-hosted source is unavailable**:

- **Automatically fall back to Phi Cloud (default)**. The affected tasks use Phi Cloud for the time being, so AI features keep working. It also means that, during that time, their content goes to the cloud.
- **Pause affected AI features (never send data to the cloud)**. The affected features pause until the local source responds again.

If the reason you turned on Private AI is to keep content on this Mac, choose the second option.

This setting covers local and self-hosted sources only. When a cloud provider such as OpenAI, OpenRouter, or Codex fails, Phi does not switch to Phi Cloud.

When something goes wrong, the Private AI page shows **Needs attention**, with a **Restart local service** button.

## Using Codex {#using-codex}

If you have a ChatGPT subscription and have signed in to Codex on this Mac, you can use that subscription as an AI provider. Go to **Settings → AI providers → Codex** and click **Connect**. Phi uses the sign-in Codex already keeps, without copying your credentials.

- Install Codex and run `codex login` in Terminal first. Phi cannot read a Codex sign-in stored in the Keychain.
- Codex can serve Chat, Memory, Web tasks, and Vision fallback, but not Data search.
- What Codex does counts toward your ChatGPT subscription's limits. If you run out, or the sign-in stops working, Phi does not switch to another source.

## Turning off and resetting {#turning-off-and-resetting}

- **Turn off Private AI** with its switch. Every task goes back to Phi Cloud at once, and the downloaded models and your choices are kept.
- **Remove a provider** with **Remove provider** on its page. Tasks that used it go back to Phi Cloud.
- **Reset** with **Reset AI settings** under **Advanced settings**. It moves every task back to Phi Cloud, clears your providers and their API keys, and deletes the local models.

## What's next

- [Meet your assistant](/ai/), what the assistant can do for you.
- [Phi Sentinel](/sentinel/), the background service that runs Private AI.
- [Privacy & Your Data](/privacy/), where your data lives and what Phi sends.
