---
description: "Use Phi Chat, your assistant in its own window, to open conversations from the sidebar, browse conversations from every Profile, organise them into categories, and follow your tasks."
---

# Phi Chat

Phi Chat is your assistant in a window of its own, with its own Dock icon, separate from your browser windows. It is the same assistant and the same conversations you have in the sidebar, laid out for longer work: a full-size chat on the right and a list of your conversations on the left.

The sidebar is still where you ask about the page in front of you. Phi Chat is where you go to find an older conversation, see everything in one place, and keep track of what your tasks have reported.

## Opening Phi Chat

There are a few ways in:

- **From the sidebar.** Click **Open in Phi Chat** in the sidebar's top bar to carry the current conversation over. See [Moving a conversation over](#moving-a-conversation-over).
- **From the menu bar.** Click the [Phi Sentinel](/sentinel/) icon and choose **Open Phi Chat**. Choosing it again while Phi Chat is in front hides the window. A small red dot on that item means the assistant has posted something you have not read yet.
- **With a shortcut.** The shortcut is off by default. Turn on **Summon Phi Chat with Shift Shift Shift** under **Settings → Phi & AI → Phi Sentinel**, then press Shift three times from any app. It works like the menu bar item, so the same keys hide the window again. The shortcut runs through Phi Sentinel, which needs macOS Accessibility permission to notice the key presses and asks for it when you turn the shortcut on.
- **From a task notification.** When a task reports something worth your attention, Phi can show a notification card of its own, separate from macOS notifications. Its **View details** button opens that conversation in Phi Chat. See [Automation & Phi Link](/automation/#notifications).
- **From the Dock or Finder.** Once you have opened Phi Chat, it also appears as an app in the **Phi Apps** folder, inside the Applications folder in your home folder, so you can keep it in the Dock.

Phi Chat does not need a browser window to be open. If Phi is not running, opening Phi Chat starts it in the background without opening a browser window.

## Moving a conversation over

In the sidebar, **Open in Phi Chat** becomes available once a conversation has been saved and the assistant is not in the middle of a reply. Clicking it opens that conversation in Phi Chat, collapses the sidebar, and leaves the sidebar ready for a new conversation.

Two things to know before you click:

- **Unsent text stays behind.** If you have typed something or added attachments in the sidebar without sending, Phi asks before discarding them. They are not carried over to Phi Chat.
- **An open Phi Chat window is reused.** If Phi Chat is already open, it switches to this conversation rather than opening a second window. Anything you had not sent in that window, and a reply it was still writing, is lost.

To go the other way, click **Open in sidebar** in Phi Chat's top bar. Phi reopens the web page the conversation was last used with, in its original Space and Profile, and continues the conversation in that page's sidebar. The conversation stays open in Phi Chat as well. The button is unavailable when the conversation has never been used with a web page, or when its original Space or Profile no longer exists, and hovering over it tells you which.

## Conversations from every Profile

Conversations belong to the [Profile](/spaces/) they were started in. The sidebar keeps them apart: in a given Profile it shows that Profile's conversations, plus any conversations that do not belong to a Profile at all, and nothing from your other Profiles.

Phi Chat is the one place that shows all of them. Open the menu above the conversation list to choose what you see:

- **All**, every conversation.
- **Tasks**, conversations in which the assistant created a task. See [Tasks and unread conversations](#tasks-and-unread-conversations).
- **By Profile**, either **Without a Profile** or one of your Profiles, shown as **Profile "Work"** so it is not confused with a category of the same name.
- **Categories**, the categories you have created, plus **Uncategorized**.

Choosing a Profile here only filters the list. It never moves a conversation to another Profile, and opening a conversation in Phi Chat does not change which Profile it belongs to. A conversation without a Profile can be given one with **Move to a Profile** in its menu, but there is no way to take it back out again.

If you delete a Profile, its conversations are kept. They lose their categories and appear under **Uncategorized** in Phi Chat. If AI features are off at the time, that happens once they are back on.

## Finding and organising conversations

The list shows your most recently active conversations first, 50 at a time. Click **Load more** at the bottom for older ones.

- **Search** with the magnifying glass at the top of the list, or press Command (⌘) + K. Search matches conversation titles, not the messages inside them.
- **Start a new conversation** with **New Chat**. It joins the list once you send its first message.
- **Rename, file, or delete** a conversation from the **…** menu on its row. **Delete** cannot be undone.
- **Go back to a page** with **Back to the latest page** in the same menu, which works like [the sidebar version](/ai/#going-back-to-a-page).

### Categories

Categories are your own labels for conversations, shared across all your Profiles. A conversation can be in several at once.

- Create one with the **+** button in the menu above the list, or with **New category** at the bottom of any **Categories** submenu, which also files the conversation you are on.
- Tick or untick categories from **Categories** in a conversation's **…** menu, or in the chat's own top-bar menu. Changes apply as you click.
- Rename or delete a category by selecting it in the menu and opening its own menu. Deleting a category does not delete its conversations. Any conversation left with no category moves to **Uncategorized**.

**Uncategorized** is built in. It collects every conversation that has no category, and it cannot be renamed or deleted.

### Working with several at once

To act on several conversations together, choose **Select** from a conversation's **…** menu, or Command (⌘)-click a row. Shift-click selects a range. A bar replaces the list header, where you can **Select all**, change **Categories** for the whole selection, **Delete** them, or click **Done** (or press Escape) to finish.

**Select all** selects the conversations currently loaded in the list. Conversations still behind **Load more** are not included, so the count you see is exactly what will be affected.

## Tasks and unread conversations

When you ask the assistant to do something in the background or on a schedule, the task reports back into the conversation you asked in. Phi Chat helps you keep up with those reports:

- **A blue dot and a bold title** mean a task has reported into that conversation since you last opened it.
- **A clock icon** after the title means the conversation has tasks that are still live.
- **The Tasks view** gathers every conversation in which the assistant created a task. Conversations from before tasks were linked to their conversations do not appear there.

What a report looks like, and how to manage the task behind it, is covered in [Automation & Phi Link](/automation/#tasks-report-back-to-their-conversation).

## Things to know

- **Phi Chat is part of Phi Browser.** Quitting Phi Chat, with Command (⌘) + Q or from its menu, closes only Phi Chat, and your browser windows stay open. Quitting Phi from a browser window closes Phi Chat as well.
- **Links open in your browser.** A link you click in Phi Chat opens in a browser window, in the Profile you used last, following your [URL Rules](/spaces/#url-rules-route-matching-sites-automatically).
- **Turning AI off closes it.** With AI features turned off in **Settings → Phi & AI**, Phi Chat closes, its app is removed from the **Phi Apps** folder, and it cannot be opened. Your conversations are not deleted, and you can open Phi Chat again once AI features are back on.
- **Your questions still go to a model.** Phi Chat is the same assistant as the sidebar, so what you ask is handled the same way. See [Where your questions go](/ai/#where-your-questions-go).

## What's next

- [Meet your assistant](/ai/), talking to it in the sidebar and bringing tabs into a conversation.
- [Automation & Phi Link](/automation/), tasks that run in the background and report back.
- [Spaces & Profiles](/spaces/), how Profiles keep things separate.
