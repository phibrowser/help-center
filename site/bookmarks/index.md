---
description: "Understand Phi Browser's living bookmarks, sidebar organization, pinned tabs, configurable scope, and when to use each."
---

# Bookmarks & Pinned Tabs

In Phi the sidebar is your workspace, and bookmarks and pinned tabs are the two ways you keep the pages that matter. This chapter goes deeper than [Layouts & Navigation](/layouts/) on how they behave, starting with the thing that surprises many people moving from traditional browsers: in Phi, a bookmark opens in place as a tab.

## Bookmarks that open in place

In a traditional browser a bookmark is a dead link: clicking it always spawns a fresh tab, and you end up with duplicates of the same page. Phi treats a bookmark as a living entry instead. Click one and it opens in place, so that same sidebar entry becomes its live tab. Close the page and the bookmark stays exactly where it was, ready to open again. If the bookmark is already open, clicking it just activates that tab rather than making a second copy.

This is the idea Arc and Dia popularized: the sidebar holds living things, not a separate archive you visit twice a year. Phi follows that model, while keeping a real bookmark tree, folders included, so you still get the organisation a bookmark archive gives you.

## Making and organizing bookmarks

- **Create a bookmark** by dragging a tab into the sidebar, or right-click a tab and choose **Add to Bookmark** (it reads **Add to Bookmark Bar** in Comfortable Mode). Use **Add to Folder** to drop it straight into a folder.
- **Organize with folders.** Bookmarks nest into folders, and you can make a sub-folder with **New Nested Folder…**.
- **Save a Split as one bookmark.** From a Split View, **Add Split to Bookmark** keeps both pages as a single entry that reopens the pair together.
- **Manage a bookmark** from its right-click menu: **Copy Link**, **Rename…**, **Edit…**, **Open in New Tab**, **Open as Split**, and **Delete**.

Bookmarks are scoped to the Space you are in. Each [Space](/spaces/) keeps its own set, so a work Space's saved pages do not clutter a personal one.

## Pinned tabs

Pinned tabs sit at the top of the sidebar in a grid, for the handful of pages you live in: your mail, a dashboard, a project tool. They are persistent: a pinned tab stays in the grid even after you close its page, and clicking it opens the page back up.

- **Pin a tab** by right-clicking it and choosing **Pin**, or by dragging it into the pinned grid. **Unpin** from the same menu returns it to the tab list.
- **Reorder** pinned tabs by dragging them around the grid.
- **Pin a Split.** **Pin Split** keeps a two-pane setup as a single pinned item that reopens both sides; **Unpin Split** undoes it.

## Choose a pinned tab scope

Open **Settings → Spaces**, then use **Pinned tab scope** to choose how widely your pinned tabs are shared. **Profile** is the default.

| Scope       | Where pinned tabs appear                                       |
| ----------- | -------------------------------------------------------------- |
| **Space**   | Each Space has its own pinned tabs.                            |
| **Profile** | Spaces using the same Profile share pinned tabs.               |
| **App**     | Pinned tabs are shared across all regular Profiles and Spaces. |

Incognito Spaces never show or allow pinned tabs, regardless of the scope you choose.

Changing scope also moves your existing pinned tabs into the new arrangement. When you move to a narrower scope, Phi copies the current pinned tabs into each existing destination, and those copies can then be changed independently. When you move to a broader scope, Phi merges the existing sets. Unchanged copies are combined, while different versions are kept. Phi shows a confirmation before making either change.

Bookmarks are always scoped to one Space. The pinned tab setting does not affect them. See [Spaces & Profiles](/spaces/) for how those layers fit together.

## Returning to the original page

Following links in a pinned tab or bookmark may take it away from its original URL. To go back, double-click the pinned tab or click the favicon of a bookmark that is open as a tab.

Links that lead to a different site do not move the tab at all: Phi previews them in a floating [Peek View](/peek/) panel, so the bookmark or pinned tab keeps the page it is bound to.

To keep the current page, hold **Command (⌘)** while you double-click the pinned tab or click the bookmark's favicon. The current page moves to the tab list as a separate tab, and the pinned tab or bookmark returns to its original URL.

## Which should I use?

A simple split of responsibilities:

- **Pinned tabs** are pages you live in, always at the top, one click away, and shared at the Space, Profile, or App scope you choose.
- **Bookmarks** are pages you want to keep, organised in folders, scoped to one Space, and opened in place when you need them.

If you are switching from Arc or Dia, see [Switching to Phi](/switching-to-phi/) for how Phi's living sidebar, bookmarks, and pinned tabs compare. To bring bookmarks in from another browser or a file, or to save a Space's bookmarks back out to HTML, see [Importing & Exporting](/import-export/).
