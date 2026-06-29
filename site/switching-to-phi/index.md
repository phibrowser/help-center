---
description: "A migration guide for moving to Phi Browser from Chrome, Safari, Arc, or Dia, including layout choices, bookmarks, Spaces, Profiles, and AI features."
---

# Switching to Phi

If you are moving to Phi from Chrome, Safari, Arc, or Dia, this guide explains the mental model changes first. The detailed feature guides still cover each area in depth; this page gives you the migration map.

## Coming from Chrome or Safari

Start with **Comfortable Mode**. It keeps the most familiar shape: tabs on top, a visible URL bar, and a layout close to a traditional browser. The sidebar is still there, but you do not have to adopt the full sidebar workflow on day one.

Once the basics feel natural, try **Balanced Mode** if you want a modern sidebar browser while keeping the address bar visible. Move to **Performance Mode** when you want maximum page space and are comfortable with the sidebar as your main navigation surface.

The fastest way to learn Phi is to use it as a browser first: browse normally, open tabs, pin a few pages, bookmark a couple of things, and ask the assistant about a page you are already reading. Phi makes more sense through use than through explanation.

Good next reads:

- [Layouts & Navigation](/layouts/) for the three layout modes and sidebar basics.
- [Bookmarks & Pinned Tabs](/bookmarks/) for how saved pages work in Phi.
- [Privacy & Your Data](/privacy/) if you want to understand the local-first model before enabling AI features.

## Coming from Arc

Phi should feel familiar if Arc's sidebar model worked for you, but the details are different.

Arc and Phi both separate the workspace layer from the isolation layer. In Phi, a **Space** is the visible workspace in the sidebar, while a **Profile** is the cookies, history, logins, and extensions underneath. A Profile can back several Spaces, so you can have multiple workspaces that share the same signed-in session.

Phi's **URL Rules** are inspired by Arc's Air Traffic Control: matching sites can open in the Space you assign, or ask you where to open them. The exact implementation is Phi's own, but the goal is the same — put links in the right context automatically.

The biggest bookmark difference is that Phi keeps a full bookmark tree with folders. Arc dropped traditional bookmarks in favor of pinned tabs and Favorites; Phi keeps both ideas. Bookmarks stay organized in the sidebar and open in place as live tabs. Pinned tabs sit at the top for pages you live in, and they are scoped to the Profile, so they follow you across Spaces that share that Profile.

Phi does not have Arc's Peek equivalent. Opening a link from a pinned tab navigates normally inside the tab.

Good next reads:

- [Spaces & Profiles](/spaces/) for Spaces, Profiles, and URL Rules.
- [Bookmarks & Pinned Tabs](/bookmarks/) for living bookmarks and Profile-scoped pinned tabs.
- [Themes & Appearance](/themes/) for per-Space colors and global themes.

## Coming from Dia

Dia and Phi both move away from the old tab-strip-only browser model, but their workspace models differ.

Dia uses Profiles as the workspace concept, with each Profile opening in a separate window. Phi keeps **Spaces** as a layer above **Profiles**. That means you can switch contexts with one click inside a single window, while still using separate Profiles when you need separate cookies, logins, history, or extensions.

Dia keeps bookmarks but surfaces them mainly through its command bar. Phi keeps bookmarks visible and organized in the sidebar, alongside tabs and pinned tabs. A bookmark in Phi opens in place as a live tab rather than spawning another throwaway tab.

Pinned tabs in Phi follow the same "apps at the top" pattern that modern sidebar browsers popularized. They are persistent anchors for pages you live in, and they follow the Profile across Spaces that share it.

Good next reads:

- [Layouts & Navigation](/layouts/) for the sidebar and layout modes.
- [Spaces & Profiles](/spaces/) for why Phi separates visible workspaces from account isolation.
- [Bookmarks & Pinned Tabs](/bookmarks/) for the sidebar's living page model.

## What to read next

If you are new to Phi, read these in order:

1. [Getting Started](/get-started/) — install Phi and finish first run.
2. [Layouts & Navigation](/layouts/) — choose the right layout mode and learn the sidebar.
3. [Spaces & Profiles](/spaces/) — understand workspaces, isolation, and URL routing.
4. [Bookmarks & Pinned Tabs](/bookmarks/) — learn how saved pages become part of your workspace.
5. [Meet your assistant](/ai/) — understand the built-in AI once the browser basics feel natural.
