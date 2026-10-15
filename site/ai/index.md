---
description: "Learn how Phi Browser's built-in assistant works, including naming your assistant, talking to it, managing conversations, Chat with Tabs, Memory, Browser Skills, and agentic actions."
---

# Meet your assistant

Phi comes with an assistant built into the browser, on once you are signed in. You do not set up a separate AI account or sign in anywhere else, it is simply there. One of the first things you do is give it a name, and it generates a matching avatar for itself, which you can ask it to adjust. From then on you just call it by that name.

That naming is the point. Rather than thinking of it as "an AI", a chatbot, or a model you operate, it is meant to feel like someone who works alongside you in the browser, a presence with its own identity that gets to know you over time. The rest of this guide describes the different sides of that companion:

- **[Memory](/memory/)**, how it gets to know you.
- **Talking to it**, how you reach it and ask for things.
- **[Phi Chat](/phi-chat/)**, the assistant in its own window, with all your conversations.
- **Chat with Tabs**, bringing open pages into the conversation as context.
- **[Browser Skills](/skills/)**, workflows it can carry out for you.
- **Acting on your behalf**, because it can take actions and run tasks, not just answer. See [Automation & Phi Link](/automation/).

Prefer a plain browser with none of this? You can turn it all off. See [Privacy & Your Data](/privacy/#turning-ai-off).

## Memory

Memory is how it gets to know you. As you browse, it quietly builds a picture of what matters to you, automatically, stored locally on your device, and yours to view, manage, and delete. See [Memory](/memory/) for the full picture.

## Talking to it

Because you named it during onboarding, it has its own identity rather than feeling like a generic chatbot, and you talk to it by name.

There are a few ways to reach it:

- Click the **Chat** button. Where it sits depends on your [layout](/layouts/): the bottom of the sidebar in Performance, or the top-right of the page header in Balanced and Comfortable.
- **Right-click selected text** and choose **Ask [your assistant] about…** to ask about it directly, with the selection coming along as context.
- **Open [Phi Chat](/phi-chat/)**, the assistant in a window of its own, from the Phi Sentinel menu bar icon or by pressing Shift three times once you have turned that on.

Asking in context beats copying things into a separate chat window. It can answer questions, summarise content, explain pages, and help with tasks, drawing on the current tab, what it remembers about you, and your connected external data.

A new conversation opens with the assistant's avatar and name above the message box. Click the avatar to see its role card. In the sidebar, a few [Browser Skills](/skills/#using-skills-in-chat) that fit the current page are suggested underneath.

### Stopping a reply

Click the stop button in the message box to end a reply. The assistant stops working straight away and keeps whatever it has written so far. Anything it has already done in the browser, such as opening a page or filling a field, is not undone.

If you stop before any of the reply has appeared, Phi takes the message back instead: it is removed from the conversation, and your text, attached tabs, and files go back into the message box so you can change them and send again. A Skill you had picked comes back as plain text. If Phi cannot confirm that the reply stopped, it says so and you can try again.

### Earlier conversations

In the sidebar, the **…** menu at the top lists your ten most recent conversations under **Recent Conversations**, with **Search conversations** at the bottom for finding others by title. The sidebar only shows conversations from the Profile you are in, plus those that do not belong to a Profile. For every conversation, with search, categories, and tidying up, use [Phi Chat](/phi-chat/).

### Going back to a page

Each conversation remembers the last web page it was used with, including the Space and Profile it was in. To pick up where you were, open the sidebar's **…** menu and choose **Back to the latest page**.

Phi brings that page back in its own tab, reusing the original tab if it is still open in that Space, and moves the conversation into that tab's sidebar. The tab you were on keeps its page, and its sidebar starts a new conversation. A Split View comes back as it was. Tab groups, scroll position, and anything typed into the page do not.

The option disappears when the original Space or Profile has been deleted, or the Space has been moved to another Profile. Phi does not substitute a different one. Moving the Space back brings the option back.

### Usage limits

The assistant has a usage allowance. If you reach it, a banner above the message box says so and, when there is a set time, tells you when you can carry on. Until then you can still type, but not send. Memory, widgets, and tasks that run through [Private AI](/sentinel/#private-ai) are not affected. Phi does not show how much of the allowance is left.

## Chat with Tabs

The assistant can bring the pages you have open into a conversation as context. Attach one or more tabs and ask across them, comparing them, summarising them, or pulling details from several at once, without copying anything into a separate window. Because it understands [Split View and Tab Groups](/layouts/), opening a chat while your current tab is in a group attaches the whole group, and you can attach a Tab Group or Split View as a single unit. That way you can ask about related pages without explaining how they fit together.

Tabs you sent with a message stay in the conversation as small cards. Click one to go back to that tab, or to open its page again in a new tab if the tab has since moved on. If a tab you attach has been unloaded to save memory, Phi loads it in the background to read it, without switching to it. That usually works, but a page that does not load in time may be read only partly, or not at all.

By default, opening the assistant attaches the tab you are currently on, so you can ask about what is in front of you right away. If you would rather start each conversation with nothing attached, turn off **Automatically add current tab as context to new conversation** under **Settings → Phi & AI → AI Sidebar**. You can still attach tabs by hand whenever you want.

## Browser Skills

Browser Skills are reusable workflows. Teach it a multi-step task once and it can repeat it later on demand, turning a recurring job into a single request. Phi ships a set of built-in Skills you can browse and add, and you can create your own. See [Browser Skills](/skills/) for the full picture.

## Where your questions go

Worth knowing, because "built in" can sound like "never leaves your Mac". Memory does stay on your device. Your questions do not: when you ask something, the content needed to answer it goes to the provider of the model you are using, because that is the only way a model can answer. It passes through us without being stored, and it arrives under our account rather than yours, so the provider is not told who you are.

If you want the AI itself to run on your Mac, [Phi Sentinel](/sentinel/) offers Private AI, which keeps some tasks entirely local. [Privacy & Your Data](/privacy/) covers all of this properly.

## What's next

- [Phi Chat](/phi-chat/), the assistant in its own window, with every conversation in one place.
- [Automation & Phi Link](/automation/), letting it take actions and run scheduled tasks, and reaching it from Telegram.
- [Browser Skills](/skills/), reusable workflows you teach it.
- [Privacy & Your Data](/privacy/), where your data lives and how to stay in control.
