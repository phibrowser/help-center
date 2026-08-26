---
description: "Learn how Phi Browser uses Spaces for workspaces and Profiles for isolated cookies, history, logins, extensions, URL Rules, bookmarks, and pinned tabs."
---

# Spaces & Profiles

Spaces and Profiles let you keep separate worlds in one browser, whether that is work and personal, a side project, a client, or a research topic, without juggling windows or signing in and out. They are two layers that do different jobs, and Phi keeps them simple by letting one sit on top of the other.

## The two layers

- A **Space** is a workspace in the sidebar. It has its own name, icon, and color, and its own bookmarks. Switching Spaces re-dresses the sidebar around the task you are in.
- A **Profile** is the isolation layer underneath. Each Profile has its own cookies, history, logins, and extensions, so two Profiles can be signed in to the same site with different accounts at the same time.

The relationship is one-way: **each Space belongs to one Profile, and a Profile can back several Spaces.** Spaces that share a Profile share the same logins. Pinned tab visibility is configurable and can follow Space, Profile, or App scope; it does not change Profile isolation.

A simple way to hold it: **Spaces organize how things look and feel; Profiles decide what is kept separate underneath.**

## What lives in a Space

- **A name, an icon, and a color.** Pick from Phi's built-in icon set or use an emoji, so each Space is recognizable at a glance in the sidebar.
- **Its own bookmarks.** Each Space has an independent set of bookmarks, so a work Space's saved pages do not clutter a personal one.
- **Its own theme (optional).** A Space can use its own color theme or follow your global theme. Switching into the Space applies its theme so the window matches the context you are in.
- **Pinned tabs** follow the scope selected in **Settings → Spaces**. Each Space can have its own, Spaces using the same Profile can share them, or all regular Profiles and Spaces can share one set. See [Bookmarks & Pinned Tabs](/bookmarks/#choose-a-pinned-tab-scope) for details.

## Creating, switching, and managing Spaces

- **Create** a Space from the Spaces strip in the sidebar. You give it a name and choose which Profile it belongs to, or create a **New Profile** right there if this Space should be fully separate.
- **Switch** between Spaces from the sidebar with a single click. The sidebar's tabs, bookmarks, and theme change to match, and Phi reopens the Space's window if it is not already open.
- **Rename** or **Change Icon** / **Change Theme** from the Space's menu. Choose **Follow Global** to drop a per-Space theme override.
- **Delete** a Space from the same menu. Deleting a Space also removes the bookmarks and URL Rules that belong to it, and cannot be undone. If pinned tab scope is **Space**, that Space's pinned tabs are removed too. Profile-scoped and App-scoped pinned tabs are not affected.

## URL Rules: route matching sites automatically

**URL Rules** match a site and open it in a regular Space, Incognito, or Kiosk, no matter where you click or type the link.

Open **URL Rules…** from the **Spaces** menu in the menu bar, or open **Settings → Navigation** and click **Manage URL Rules…**. Each rule matches by:

- **Domain suffix**, `figma.com` and all its subdomains.
- **Domain**, one exact host, like `www.example.com`.
- **Domain contains**, any host containing a word, like `git`.
- **URL**, a host plus a path prefix, like `example.com/team`.

A rule can target a regular Space, **Incognito**, or **Kiosk**. **Incognito** routes matching sites into an [Incognito Space](/incognito/), creating one when needed. **Kiosk** opens each match in a lightweight window outside your Spaces. See [Kiosk](/kiosk/) for how those windows work.

Set a rule to **Ask every time** instead of routing silently. When a matching link opens, Phi shows an **Open in which Space?** chooser so you can pick. Your current Space is marked, and you can keep the page where you are. When several rules could match, the most specific one wins (a longer path beats a shorter one; an exact host beats a wildcard).

## Incognito Spaces: a Space without a trace

For browsing that should leave nothing behind, **File → New Incognito Space** opens a private Space right in the sidebar strip. It has the same workspace feel, but an in-memory session backs it instead of a Profile: no bookmarks, no pinned tabs, no AI, and nothing written to disk. Closing it destroys the session. See [Incognito Spaces](/incognito/) for the full picture.

## How this connects to the rest of Phi

Spaces build on the sidebar workspace described in [Layouts & Navigation](/layouts/), and per-Space colors use the same palette as [Themes & Appearance](/themes/). If you are switching from Arc or Dia, see [Switching to Phi](/switching-to-phi/) for the migration comparison. Because Profiles isolate cookies and history, what the assistant can see is scoped to the Profile you are browsing in. See [Privacy & Your Data](/privacy/) for how your data is handled.
