---
description: "Select multiple tabs and bookmarks in Phi Browser, then close, organize, move, or clone them together across Spaces."
---

# Managing Tabs & Bookmarks

Phi lets you select several items and handle them as one batch. You can right-click the selection for batch actions or drag it to reorganize regular tabs, Split Views, bookmarks, and bookmark folders without moving each item separately.

## Select multiple items

Use either modifier to build a selection:

- **Command-click (⌘-click)** a tab or bookmark to add or remove that item from the selection. The active tab is included automatically, so Command-clicking another tab selects both.
- **Shift-click** another item to select the continuous range between it and your starting point.

In the sidebar, a range can include visible tabs, bookmarks, bookmark folders, and expanded group or folder contents. Items hidden inside a collapsed group or folder are not included. A Split View is treated as one visible item, so its two panes stay together.

In Comfortable layout, the same Command-click and Shift-click gestures work for tabs in the horizontal tab strip. Bookmark multi-selection is available from the sidebar in Balanced and Performance layouts.

## Work with the selection

Right-click any highlighted item to open the batch menu. Phi adapts the available actions to what you selected, so some actions appear only for tabs, bookmarks, or a compatible mix.

| Action                              | What it does                                                                      |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| **Duplicate Tabs**                  | Opens copies of the selected pages in the current Space.                          |
| **Copy Links**                      | Copies the selected page URLs as a list.                                          |
| **Open as Split**                   | Places exactly two compatible selected items side by side.                        |
| **Add to Bookmark / Add to Folder** | Saves selected tabs, or organizes selected bookmarks in the chosen location.      |
| **Add Tabs to New Group**           | Creates a Tab Group from compatible selected items.                               |
| **Move Tabs to Group**              | Moves compatible selected items into an existing Tab Group.                       |
| **Move to Space**                   | Transfers the selection to another Space and removes it from the current Space.   |
| **Clone to Space**                  | Creates a copy in another Space while leaving the original selection where it is. |
| **Close Tabs / Close Other Tabs**   | Closes the selected regular tabs, or every regular tab outside the selection.     |
| **Delete Bookmarks/Folders/Items**  | Permanently removes the selected saved items after confirmation.                  |

## Drag multiple items to organize them

After making a selection, drag any highlighted item to move the whole selection. The drag preview shows how many visible items are moving. If you start dragging an item that is not selected, Phi clears the batch and moves only that item.

Where you drop the selection determines what happens:

- **Within the tab list:** reorder selected tabs together, or drop them into a Tab Group.
- **Within the bookmark area:** reorder selected bookmarks and folders, or drop them onto a folder to move them inside it.
- **From tabs to bookmarks:** drop selected tabs in the bookmark area or onto a bookmark folder to save them there.
- **From bookmarks to tabs:** drop selected bookmark pages in the tab list or a Tab Group to open and organize them as tabs.
- **With a mixed selection:** tabs and bookmarks can move together when the destination supports every selected item.

Split Views stay together during a drag. A selection containing a bookmark folder remains in the bookmark area; Phi rejects tab-list and Tab Group destinations that cannot preserve the folder instead of splitting the selection.

## Move or clone items to another Space

Use **Move to Space** when the selected items should leave the current Space. Use **Clone to Space** when you want the same tabs or bookmarks in both Spaces.

Both actions can handle a compatible mix of regular tabs, Split Views, bookmarks, and bookmark folders. Phi keeps Split panes together and preserves bookmark organization when transferring the selection. Choose the destination from the action's submenu.

The current Space and Incognito Spaces are not offered as destinations. Space transfer actions are also unavailable while you are browsing in Incognito.

## Leave multi-selection

Press **Escape**, or click an item normally to switch to it and leave multi-selection. In the sidebar, clicking an empty area also clears the selection. Completing most batch actions clears it automatically.

For more about where items live, see [Spaces & Profiles](/spaces/). To learn how bookmarks open in place and how pinned tabs behave, see [Bookmarks & Pinned Tabs](/bookmarks/).
