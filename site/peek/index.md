---
description: "Preview a link in a floating panel over the page you are reading in Phi Browser, then close it, open it as a tab, or open it as a Split View."
---

# Peek View

A Peek is a floating panel that shows a page on top of the one you are reading. Follow a link, read what is there, close it, and you are back where you started with no extra tab to clean up.

Peek works in **Balanced** and **Performance** Mode. Comfortable Mode opens every link as a normal tab instead. Peek is also off in Incognito Spaces.

## Open a Peek

There are three ways to get one:

- **Follow a link out of a bookmark or pinned tab.** When a link in a bookmark or pinned tab leads to a different site, Phi previews it in a Peek instead of taking that tab away from its page. Links that stay on the same site keep navigating in place.
- **Shift-click a link.** This works in any regular tab, not only bookmarks and pinned tabs.
- **Right-click a link and choose "Open Link in Peek View."** Same result as Shift-click, from the page's context menu.

"A different site" means a different domain. Subdomains of the same site, such as moving from one Google property to another, count as the same site and open in place as usual. Links that are not web pages, such as `mailto:` addresses, never open in a Peek.

Shift-click and the right-click item are not offered from inside a Split View pane or from inside a Peek itself. In those places a link opens the way it normally would.

## Inside the panel

The page fills the panel edge to edge. Three controls sit in the strip to its right:

| Control                | What it does                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Close**              | Closes the preview and its page.                                                                                            |
| **Open as Tab**        | Turns the preview into a regular tab. The page is not reloaded, so scroll position and anything you typed stay as they are. |
| **Open as Split View** | Places the preview beside the tab it came from, as a two-pane Split View.                                                   |

## Close a Peek

Any of these puts the preview away:

- Press **Escape** or **⌘W**.
- Click the page around the panel.
- Go **Back** or **Forward**, or type an address in the address bar. Both read as "leave the preview," so the Peek closes and the underlying tab stays where it was.
- Click the minus button on the sidebar row or pinned tab the Peek came from.
- Close the tab the Peek came from. Its Peek goes with it.

## One Peek per tab

Every tab can carry its own Peek, and only the Peek belonging to the tab you are looking at is on screen. Switch to another tab and the panel goes away; switch back and it returns with the page as you left it. Opening a second Peek from the same tab replaces the first.

While a tab carries a Peek, the peeked page's favicon appears at the end of that tab's sidebar row, or as a small badge on the corner of a pinned tab. Hover it and it turns into a minus button that closes the Peek.

Peeks survive a restart. When Phi restores your session, a Peek comes back attached to the tab it belonged to.

## Turn Peek off

Open **Settings**, go to the **Navigation** tab, and use **Enable Peek View** under **Peek**. It is on by default.

With Peek off, links go back to their plain behavior: a cross-site link in a bookmark or pinned tab opens as a new tab, Shift-click opens a new window, and the right-click item disappears. Any Peek that is open at the time becomes a regular tab rather than vanishing. Switching to Comfortable Mode does the same thing.

To learn how bookmarks and pinned tabs stay bound to their page in the first place, see [Bookmarks & Pinned Tabs](/bookmarks/). For side-by-side pages and the rest of the sidebar workflow, see [Layouts & Navigation](/layouts/).
