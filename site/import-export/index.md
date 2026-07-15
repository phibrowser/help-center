---
description: "How to import bookmarks and history into Phi Browser from another browser or a file (Bookmarks HTML, Safari History JSON, Safari Export Archive ZIP), what each file type imports, and how to export your bookmarks to an HTML file."
---

# Importing & Exporting

Phi can bring in bookmarks and browsing history from other browsers, either directly from an installed browser or from a file you already have. It can also export a Space's bookmarks back out to a standard HTML file. This page covers both directions, and spells out exactly what each kind of file brings in.

If you are new to Phi and just want the migration overview, start with [Switching to Phi](/switching-to-phi/) and come back here for the details.

## Two ways to import

There are two entry points, and both open the same **Browser data** import screen:

- **During first run.** The onboarding flow offers to import while you are setting Phi up.
- **Anytime later.** Open the **Phi** menu (the bold app menu next to the Apple menu) and choose **Import from Another Browser…**.

The import screen gives you four sources: **From Chrome**, **From Safari**, **From Arc**, and **From a file**. Chrome, Safari, and Arc read the installed browser's data directly and let you pick which data types to bring over. The sections below go into **From a file** in more detail.

Imports land in the [Space](/spaces/) you run the import from. Bookmarks join that Space's bookmark tree, and history joins your browsing history. Importing is not available in [Incognito](/incognito/); switch to a regular Space or window first.

::: tip Quit Safari before importing from it
If you use **From Safari**, quit Safari first. Safari keeps some recent activity in memory and only writes it fully to disk when it closes, so importing while it is still running can miss your latest bookmarks and history. This does not apply to **From a file**, which reads a snapshot you already exported.
:::

## Importing from a file

Choose **From a file**, click **Choose File…**, and pick the file. Phi accepts three kinds of file and decides what to do based on the file itself. There are no data-type checkboxes for this option; it imports whatever the file contains. While it works you will see **Importing data from file…**.

### What each file type imports

| File                      | Extension       | What comes in                      |
| ------------------------- | --------------- | ---------------------------------- |
| **Bookmarks HTML**        | `.html`, `.htm` | Bookmarks only                     |
| **Safari History JSON**   | `.json`         | Browsing history only              |
| **Safari Export Archive** | `.zip`          | Bookmarks **and** history together |

**Bookmarks HTML** is the standard "Netscape bookmark" format that every major browser can export, including Chrome, Safari, Firefox, Edge, and Phi itself. Importing one adds its bookmarks to the current Space under an **Imported** folder, so they stay together and are easy to find or remove later.

**Safari History JSON** and **Safari Export Archive** both come from Safari's **File → Export → Export Browsing Data…** feature. Safari produces a `.zip` archive; if you have already unzipped it, you can also pick the `History.json` file inside it directly.

- A **Safari Export Archive** (`.zip`) is the simplest choice: pick it and Phi imports both your bookmarks and your history in one step.
- A standalone **Safari History JSON** imports just the history.

### What is and isn't imported

- **Only bookmarks and history.** Passwords, payment cards, and other items Safari can also export are never imported through this path. Bringing in sensitive data like that without asking would be the wrong thing to do, so Phi skips those files even when a Safari archive contains them.
- **One bad file never blocks the rest.** Inside a `.zip`, Phi reads every bookmark and history file it can and skips the ones it can't, such as an unrelated file or a damaged entry.
- **Multi-part history comes in whole.** Safari sometimes splits a large history export into several files (`History.json`, `History-0001.json`, and so on), and Phi imports all of them.
- **Re-importing won't pile up duplicates.** Imported history is merged into your existing history the same way any browser import is, so importing the same file twice does not multiply your visits.
- **Large or damaged files are handled safely.** Phi caps how much it reads from a single file or archive, so an unusually large or malformed file can't hang the browser. Phi skips it instead.
- **An import with nothing to bring in still finishes cleanly.** If a file contains nothing Phi can use, the import finishes without error instead of getting stuck.

## Exporting your bookmarks

Phi can export the **current Space's** bookmarks to an HTML file. Open the **Bookmarks** menu and choose **Export Bookmarks…**, then pick where to save it. Phi suggests a filename like `Phi-Bookmarks-<Space>-<date>.html`.

- The file is the same standard **Netscape bookmark** format described above, so it imports cleanly into Chrome, Safari, Firefox, Edge, or back into Phi through **From a file**.
- Export covers the Space you are currently in. Because bookmarks are [per-Space](/bookmarks/), switch Spaces and export again to save another Space's set.
- **Export Bookmarks…** is greyed out when the current Space has no bookmarks, and it is unavailable in Incognito Spaces (which never hold a bookmark tree).
- A [Split](/layouts/) bookmark, which pairs two pages in one entry, is written out as two ordinary entries so the standard format can represent it.

### The round trip

Export a Space's bookmarks to HTML, then use **From a file** to bring them back in, whether into another Space, another Profile, or Phi on a different Mac. That is usually the quickest way to copy a set of bookmarks between Profiles or between two Macs.

## Exporting everything (not just bookmarks)

**Export Bookmarks…** only exports bookmarks. To back up all of your Phi data (Spaces, Profiles, history, and more) as a single file, use the **Help** menu's **Manage User Data → Export User Data…** instead. That is the tool for moving to a new Mac or keeping a full personal copy; see [Time Machine Backups](/time-machine/#exporting-your-own-data) for how it fits with Phi's automatic rollback snapshots.

## What to read next

- [Bookmarks & Pinned Tabs](/bookmarks/): how bookmarks behave once they are in Phi.
- [Spaces & Profiles](/spaces/): why imports land in a Space, and how Profiles separate your data.
- [Switching to Phi](/switching-to-phi/): the full migration map from Chrome, Safari, Arc, and Dia.
- [Time Machine Backups](/time-machine/): automatic rollback snapshots and full user-data export.
