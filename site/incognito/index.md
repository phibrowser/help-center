---
description: "Learn how Incognito Spaces bring private browsing into Phi Browser's sidebar, how URL Rules and extensions work with private sessions, and what happens when the Space closes."
---

# Incognito Spaces

An **Incognito Space** brings private browsing into the sidebar. It appears in the Spaces strip and works like any other Space while it lasts — its own window, its own tabs — but nothing about it is written to disk. The session lives only in memory, and closing the Space destroys it.

## Opening an Incognito Space

Choose **File → New Incognito Space**. The Space joins the sidebar strip with a ninja (🥷) icon and the name **Incognito**. Open several at once and they are numbered instead — **Incognito 1**, **Incognito 2**, and so on — each keeping its number until it closes. There is no built-in keyboard shortcut for creating one.

Two things about the session underneath are worth knowing:

- **All Incognito Spaces share one private session.** They are separate entries in the sidebar, but a single in-memory profile — always built on your default Profile, no matter where you opened it from — backs them all. Sign in to a site in one Incognito Space and you are signed in to it in the others too. To keep two sessions truly separate, use Spaces on different [Profiles](/spaces/) instead.
- **Incognito windows are a separate session.** The classic **File → New Incognito Window** still exists; its session and the Incognito Spaces' shared session never mix.

## How it looks

An Incognito Space always uses Phi's dedicated dark Incognito theme — per-Space themes do not apply. You can change its icon like any other Space's, though the choice lasts only as long as the Space itself. And because there is nothing persistent to configure, Incognito Spaces do not appear in the Spaces section of Settings.

## What stays out of a private session

- **History, cookies, and site data** live only in memory and die with the session.
- **Bookmarks are unavailable.** An Incognito Space shows no bookmarks and does not let you create any.
- **Pinned tabs are not shown.** Pinned tabs belong to a Profile's session, and an Incognito Space has no Profile behind it.
- **AI features sit out.** The assistant chat is unavailable, and the sidebar's Memory button is hidden.
- **Extensions sit out unless invited.** Only extensions you have allowed to run in incognito are active in a private session — see [below](#extensions-in-an-incognito-space).
- **Importing browser data is blocked.** Phi refuses with _"Browser data can't be imported into Incognito. Switch to a regular Space or window, then try again."_
- **Time Machine leaves it alone.** [Time Machine Backups](/time-machine/) exclude Incognito Spaces entirely, so restoring a snapshot never resurfaces one.

One thing does survive on purpose: files you download are saved to your Mac as usual. Delete them yourself if you do not want to keep them.

## Sending sites to Incognito with URL Rules

[URL Rules](/spaces/#url-rules-send-sites-to-the-right-space-automatically) can route matching sites into private browsing automatically. In the rules editor, the Space picker offers one generic **Incognito** target alongside your regular Spaces — never a specific Incognito Space, because those exist only while they are open. When a rule fires, Phi routes the page into the Incognito Space you are already in or the first live one, and opens a new Incognito Space on demand when none is open.

Routing into Incognito is a one-way valve. A rule can send a navigation into a private session, but nothing is ever routed back out: while you browse in an Incognito Space or an incognito window, URL Rules do not apply, so a link there cannot be pulled out into a regular Space.

You can also send a single link there by hand — right-click it in a regular window and pick an Incognito Space from the **Open Link In Space** submenu, which lists live Incognito Spaces alongside your regular ones.

## Extensions in an Incognito Space

Because an Incognito Space's private session is built on your **default Profile** — the one Phi starts with — the only extensions that can run in it are the default Profile's extensions, and each needs your explicit permission, the same rule as in any Chromium-based browser. To let one run in Incognito:

1. In a window on the default Profile, choose **Manage Extensions** from the Extensions menu, or type `phi://extensions` in the address bar.
2. Open the extension's **Details**.
3. Turn on **Allow in Incognito**.

The toggle is per-extension and covers Incognito Spaces and incognito windows alike. An extension installed on another Profile never appears in an Incognito Space — to use it there, install it on the default Profile first. And keep in mind that an allowed extension can observe the sites you visit privately, so grant this only to extensions you trust. New extensions cannot be installed from inside a private session.

## Closing an Incognito Space

Choose **Close Incognito Space** from the **Spaces** menu, or simply close the Space's last tab — either way, Phi asks **"This will also close this Incognito Space, are you sure?"** first, and closing the Space also removes it from the strip. Check **Do not ask again** to skip the confirmation from then on.

The shared private session survives as long as any Incognito Space is still open. When the last Incognito Space window closes — or Phi quits — the in-memory session is destroyed along with everything in it. There is no cleanup step afterwards, because none of it was ever on disk.

## How this connects to the rest of Phi

Incognito Spaces build on the workspace model described in [Spaces & Profiles](/spaces/) — think of them as Spaces whose isolation layer is a throwaway. For what Phi does and does not keep about your regular browsing, see [Privacy & Your Data](/privacy/), and for why a rollback never brings a private session back, see [Time Machine Backups](/time-machine/).
