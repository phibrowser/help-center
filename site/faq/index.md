---
description: "Find quick answers about Phi Browser layouts, Spaces, bookmarks, Split View, AI features, Phi Sentinel, Phi Link, pricing, privacy, and Time Machine Backups."
---

# Frequently Asked Questions

Quick answers to common questions about Phi Browser, grouped by topic. For the bigger picture and the "why" behind how Phi is built, read the [Guide](/what-is-phi-browser/). New to Phi Browser? See [Getting Started](/get-started/).

## Layouts & Navigation

::: details What are the three layout modes?
Phi has three modes that trade screen space for familiarity. **Performance** gives the most room to the page and uses the vertical sidebar for tabs and bookmarks. **Balanced** keeps the sidebar but adds a URL bar above the content. **Comfortable** looks closest to a traditional browser, with tabs on top and a visible URL bar. You pick one during onboarding and can change it anytime.
:::

::: details Which layout should I start with?
If you are switching from Chrome or Safari, start with **Comfortable** for the easiest transition. If you want a modern sidebar browser with a visible address bar, try **Balanced**. If you want maximum page space, use **Performance**. See [Switching to Phi](/switching-to-phi/) for the fuller migration guide.
:::

::: details Why a vertical sidebar?
Most modern screens are wide, not tall. Vertical space is what you run out of first when reading, writing, or researching, so a vertical sidebar makes better use of the shape of modern displays and leaves more room for the actual page.
:::

## Spaces & Profiles

::: details What is the difference between a Space and a Profile?
A **Space** is a workspace in the sidebar with its own name, icon, color, and bookmarks. A **Profile** is the isolation layer underneath it: each Profile has its own cookies, history, logins, and extensions. Spaces organize how things look and feel; Profiles decide what is kept separate. For the full picture, see [Spaces & Profiles](/spaces/) in the Guide.
:::

::: details Can one Profile have several Spaces?
Yes. Each Space belongs to exactly one Profile, but a Profile can back several Spaces. Spaces that share a Profile share the same logins and pinned tabs. To keep two Spaces fully separated — including cookies and signed-in accounts — give them different Profiles.
:::

::: details How do I create a Space?
Create a Space from the Spaces strip in the sidebar. Give it a name and choose which Profile it belongs to, or create a **New Profile** there if the Space should be fully separate.
:::

::: details What happens when I switch Spaces?
The sidebar's tabs, bookmarks, and theme change to match the Space, and Phi brings up the Space's window (opening one if needed). Pinned tabs stay the same across Spaces that share a Profile, because they belong to the Profile's session.
:::

::: details Does each Space have its own bookmarks and theme?
Yes. Every Space has an independent set of bookmarks and can use its own color theme or **Follow Global**. You can also rename a Space and change its icon from its menu.
:::

::: details What are URL Rules?
URL Rules open matching sites in a Space you assign, no matter where you click or type the link. You can match by domain suffix, exact domain, "domain contains," or a host plus path prefix. Set a rule to **Ask every time** to get an **Open in which Space?** prompt instead of routing silently. When several rules match, the most specific one wins.
:::

::: details What happens if I delete a Space?
Deleting a Space also removes the bookmarks and URL Rules that belong to it. This cannot be undone. Pinned tabs belong to the Profile rather than the Space, so they stay, and the Profile with its cookies, history, and logins is not deleted by removing a Space.
:::

::: details How is this different from Arc and Dia?
Phi keeps **Spaces** as the visible workspace layer and **Profiles** as the isolation layer underneath. That is close to Arc's two-layer model, while Dia uses Profiles more directly as workspaces in separate windows. For the full comparison, see [Switching to Phi](/switching-to-phi/).
:::

## Bookmarks & tabs

::: details Why do bookmarks feel different in Phi?
Phi treats bookmarks as part of your active browsing workspace, not a hidden archive you open twice a year. Saved pages stay visible and accessible in the sidebar rather than buried in a menu.
:::

::: details How do bookmarks work in Comfortable Mode?
Comfortable Mode behaves much like Chrome. Show the bookmark bar with **View → Always Show Bookmark Bar**. There is also a **Bookmarks** menu in the menu bar, available in every layout mode.
:::

::: details How do bookmarks work in Balanced and Performance Mode?
There is no traditional bookmark bar in these modes. Instead, drag a tab into the sidebar to bookmark it. The sidebar becomes the main place you organize pages.
:::

::: details Why are tabs and bookmarks in the same sidebar?
They are two ends of the same thing — the pages you care about. Tabs are what you are using now; bookmarks are what you have saved. Keeping them together reflects how you constantly move between those states.
:::

::: details What is the difference between pinned tabs and bookmarks?
Pinned tabs sit at the top of the sidebar for pages you live in, like favorite tools or dashboards. Bookmarks sit below them and store pages you want to keep for later without keeping them active.
:::

::: details What happens when I click a bookmark?
It opens in place — the bookmark's sidebar entry becomes its live tab, instead of spawning a throwaway tab. If the bookmark is already open, clicking it just activates that tab rather than making a second copy. Close the page and the bookmark stays in the sidebar, ready to reopen.
:::

::: details Are bookmarks and pinned tabs per Space?
Bookmarks are per Space — each Space keeps its own set. Pinned tabs belong to your Profile, so they appear across every Space that shares that Profile. See [Spaces & Profiles](#spaces-profiles).
:::

::: details How do I pin or unpin a tab?
Right-click a tab and choose **Pin**, or drag it into the pinned grid at the top of the sidebar. **Unpin** returns it to the tab list. You can reorder pinned tabs by dragging, and use **Pin Split** to keep a two-pane setup as one pinned item.
:::

::: details Is this similar to Arc or Dia?
Yes. Phi uses the same broad living-sidebar idea — saved pages stay visible and pinned pages sit at the top — while keeping its own bookmark tree and behavior. See [Switching to Phi](/switching-to-phi/) for the migration comparison and [Bookmarks & Pinned Tabs](/bookmarks/) for the feature details.
:::

## Split View & Tab Groups

::: details How should I think about Tabs, Split View, and Tab Groups?
Tabs are your current pages. Split View places two pages side by side. Tab Groups collect related pages together by project or topic.
:::

::: details What is Split View?
Split View lets you place two pages next to each other inside the same Phi window — useful for reading and writing at once, comparing two pages, or keeping documentation next to a web app.
:::

::: details How do I create a Split View?
Right-click a tab, bookmark, or pinned tab and choose **Open as Split**, or drag a tab onto the current page.
:::

::: details What are Tab Groups?
Tab Groups let you collect related tabs into one named group — handy for a project, trip, research topic, or shopping session.
:::

::: details How do Split View and Tab Groups work together?
They are designed to work together: you can use Split View inside a group and move split tabs into or out of a group, keeping related work organized instead of floating as loose tabs.
:::

::: details Can the assistant understand a Split View or a whole Tab Group?
Yes. When you chat from a Split View, Phi can use context from both pages; from a Tab Group, it can use context from the whole group — so you can ask across related pages without explaining your setup.
:::

::: details Are Tab Groups the same as bookmarks?
No. Tab Groups organize pages you are actively working with; bookmarks store pages for later use.
:::

## AI features

::: details Is AI on by default?
Yes. Phi ships with AI features enabled by default, because they are a core part of the product. You can turn them off if you prefer a plain browser.
:::

::: details Can I turn all AI features off?
Yes, in **Settings → Phi AI**. Turning AI off closes your AI conversations and disconnects any External Data Connectors. Your Memory stays on your device; to erase it as well, use the clear option on the Memory page — that deletion is permanent.
:::

::: details What are the main AI components?
Four parts, each with a distinct job: **Memory**, the **Assistant**, **Agentic** capabilities, and **Skills**.
:::

::: details What is Phi Memory?
Phi Memory is the system that builds context from your browsing behavior over time, automatically and without manual setup.
:::

::: details Do I need to save memories manually?
No. Memory is automatic — Phi observes relevant browsing behavior and builds context for you in the background.
:::

::: details Where is Phi Memory stored?
Locally on your device. Local-first storage is a core design principle.
:::

::: details Can I see or manage what Phi remembers?
Yes. You can view, manage, and delete your memory data directly inside Phi.
:::

::: details Does Phi send my memory to its servers?
No. Memory data stays local. Language models may process tasks, but your personal memory is not sent off to be stored or used for training.
:::

::: details Does Phi use my data to train AI models?
No. Phi does not use your memory data, browsing context, or AI interactions to train models.
:::

::: details What is the assistant?
The companion you interact with directly inside the browser. You give it a name during onboarding — it generates a matching avatar for itself — and call it by that name from then on, so it has its own identity rather than feeling like a generic chatbot.
:::

::: details How do I talk to the assistant?
Click the **Chat** button — at the bottom of the sidebar in Performance mode, or in the top-right of the page header in Balanced and Comfortable — or select text on a page, right-click, and choose **Ask [your assistant] about…** to ask about it in context.
:::

::: details What can the assistant do?
It can answer questions, summarize content, explain pages, and help with tasks, drawing on context from the current tab, your Phi Memory, and your connected external data.
:::

::: details What does "agentic" mean?
It means the AI can do more than answer questions — it can take action inside the browser and perform tasks for you, from one-off actions to recurring automations.
:::

::: details What are on-demand actions?
Tasks the assistant performs when you ask, such as navigating pages or interacting with websites on your behalf.
:::

::: details What are scheduled tasks?
Recurring automations that run on a schedule you define — for example, monitoring a product price or watching a page for changes.
:::

## Phi Sentinel

::: details What is Phi Sentinel?
Phi Sentinel is the background AI orchestrator for Phi Browser. It executes scheduled tasks and keeps your AI task history, running from the macOS menu bar.
:::

::: details Why is Phi Sentinel separate from the browser?
So scheduled tasks and persistent AI workflows can keep running even when the browser window is closed.
:::

::: details Why was it designed this way?
Keeping the browser lightweight while maintaining a persistent automation layer makes the whole system more practical.
:::

## Phi Link

::: details What is Phi Link?
Phi Link connects Phi Browser to Telegram so you can use your assistant from your phone and receive task updates when you are away from your Mac.
:::

::: details How do I set up Phi Link?
Two ways: use the official Phi Link bot (the easiest path — scan a QR code and finish in one click), or create your own Telegram bot through BotFather and paste its token into Phi's settings.
:::

::: details What can Phi Link do?
Chat with your assistant, get notified when tasks succeed or fail, and continue workflows away from the browser.
:::

::: details Does Phi Link use the same assistant identity?
Yes. The same assistant identity carries over for a consistent experience across desktop and phone, with optional customization if you use your own bot.
:::

## Pricing & availability

::: details Is Phi free?
Yes, for now. Phi Browser is currently free to use, and AI usage is included.
:::

::: details Will Phi stay free forever?
Probably not in exactly the same form. Pricing may be introduced for advanced features in the future.
:::

## Privacy & data

::: details What is Phi's privacy model?
Phi Browser is built around a local-first architecture: what Phi remembers stays on your device and is not used for training.
:::

::: details What does Phi definitely not collect?
Phi never collects your memory data, your AI interactions, or your browsing context, and it does not use them for training.
:::

::: details Are my memories stored locally?
Yes. Your memory data lives on your device, and you can view, manage, and delete it.
:::

::: details Does Phi sell or train on my browsing history?
No. Phi does not use your browsing-derived memory or AI interactions to train models, and it does not sell your browsing-derived data.
:::

## Time Machine Backups

::: details What is Phi's Time Machine?
It is a **version rollback** safety net. Before certain major updates, Phi automatically saves a snapshot of the current version and your data, so you can return to it if a new release does not work for you. For the full picture, see [Time Machine Backups](/time-machine/) in the Guide.
:::

::: details Is this Apple's Time Machine?
No. It does not back up your Mac and is unrelated to the macOS feature of the same name. It only rolls Phi back to a previous version.
:::

::: details Does it back up my browsing all the time?
No. It is not a continuous or scheduled backup. A snapshot is created automatically and only occasionally — right before an update that carries more risk than usual — and only once per such update. If you want a backup you control, use **Export User Data** instead.
:::

::: details What does a snapshot include?
The Phi data that belongs to the previous version — bookmarks, Spaces, pinned tabs, settings, Memory, and browsing state — plus a record of which app version to restore. The app itself is downloaded during the restore, so a rollback returns a consistent setup.
:::

::: details Where are snapshots stored?
Locally on your Mac. They are not uploaded to the cloud, not tied to your account, and cannot be moved to another Mac.
:::

::: details How do I roll back?
Open the **Help** menu, choose **Time Machine Backups**, and pick a snapshot (listed by version, build, and date, like _Phi 1.6 (590) on 2026.6.11_). Confirm **Restore**; Phi downloads the previous version, replaces the current app and matching data, and relaunches. You need an internet connection while restoring. If there are no snapshots, the menu shows **No Backups Available**.
:::

::: details How is this different from exporting my data?
Time Machine handles update rollbacks automatically. To create and keep your own backup — for moving to a new Mac or keeping a personal copy — use **Manage User Data** in the **Help** menu (**Export User Data…** and **Import User Data…**).
:::
