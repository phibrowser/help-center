# Bookmarks & pinned tabs

In Phi the sidebar is your workspace, and bookmarks and pinned tabs are the two ways you keep the pages that matter. This chapter goes deeper than [Layouts & navigation](/guides/layouts/) on how they behave — starting with the one thing that surprises people coming from Chrome: in Phi, a bookmark opens in place as a tab.

## Bookmarks that open in place

In a traditional browser a bookmark is a dead link: clicking it always spawns a fresh tab, and you end up with duplicates of the same page. Phi treats a bookmark as a living entry instead. Click one and it opens in place — that same sidebar entry becomes its live tab. Close the page and the bookmark stays exactly where it was, ready to open again. If the bookmark is already open, clicking it just activates that tab rather than making a second copy.

This is the idea Arc and Dia popularized: the sidebar holds living things, not a separate archive you visit twice a year. Phi follows that model, while keeping a real bookmark tree — with folders — so you still get the organization a bookmark archive gives you.

## Making and organizing bookmarks

- **Create a bookmark** by dragging a tab into the sidebar, or right-click a tab and choose **Add to Bookmark** (it reads **Add to Bookmark Bar** in Comfortable Mode). Use **Add to Folder** to drop it straight into a folder.
- **Organize with folders.** Bookmarks nest into folders, and you can make a sub-folder with **New Nested Folder**.
- **Save a Split as one bookmark.** From a Split View, **Add Split to Bookmark** keeps both pages as a single entry that reopens the pair together.
- **Manage a bookmark** from its right-click menu: **Rename**, **Edit**, **Open in New Tab**, **Open as Split**, **Copy Link**, and **Delete**.

Bookmarks are scoped to the Space you are in — each [Space](/guides/spaces/) keeps its own set, so a work Space's saved pages do not clutter a personal one.

## Pinned tabs

Pinned tabs sit at the top of the sidebar in a grid, for the handful of pages you live in — your mail, a dashboard, a project tool. They are persistent: a pinned tab stays in the grid even after you close its page, and clicking it opens the page back up. Pinned tabs are inspired by Arc and Dia, where the same "apps at the top" pattern keeps your anchors one click away.

- **Pin a tab** by right-clicking it and choosing **Pin**, or by dragging it into the pinned grid. **Unpin** from the same menu returns it to the tab list.
- **Reorder** pinned tabs by dragging them around the grid.
- **Pin a Split.** **Pin Split** keeps a two-pane setup as a single pinned item that reopens both sides; **Unpin Split** undoes it.

Pinned tabs belong to your **Profile**, not to a single Space, so they appear across every Space that shares that Profile. Bookmarks, by contrast, are per Space — see [Spaces & Profiles](/guides/spaces/) for how those layers fit together.

## Which should I use?

A simple split of responsibilities:

- **Pinned tabs** are pages you live in — always at the top, one click away, and shared across the Spaces on your Profile.
- **Bookmarks** are pages you want to keep — organized in folders, scoped to one Space, and opened in place when you need them.

## Coming from Arc or Dia

The living-sidebar behavior and pinned tabs are inspired by Arc and Dia rather than copied from them, and a few differences are worth knowing:

- **Arc** dropped traditional bookmarks entirely in favor of pinned tabs and Favorites, and previews links you open from a pinned tab in a separate Peek window. Phi keeps a full bookmark tree with folders, and opening a link navigates normally inside the tab — there is no Peek equivalent.
- **Dia** keeps bookmarks but surfaces them mainly through its command bar; Phi keeps them visible and organized in the sidebar.
- Phi's pinned tabs are scoped to the **Profile**, so they follow you across that Profile's Spaces — closer in spirit to Arc's cross-Space Favorites than to Arc's per-Space pinned tabs.
