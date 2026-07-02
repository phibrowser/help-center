---
description: "Learn how Phi Browser's Time Machine rollback snapshots work, when they are created, how restore differs from Apple Time Machine, and when to export user data."
---

# Time Machine Backups

Time Machine is Phi's safety net for updates. Before certain major updates, Phi automatically saves a snapshot of the current version and your data, so if a new release does not work the way you expected, you can roll back to the version you were on. It is there for the rare update that changes a lot at once.

## What it is — and what it is not

Phi's Time Machine is a **version rollback** feature, not a general-purpose backup tool. A couple of things it is easy to confuse it with:

- It is **not** Apple's Time Machine. It does not back up your Mac, and it has nothing to do with the system feature of the same name.
- It is **not** a continuous, scheduled backup of your browsing. Phi does not snapshot every day or let you pick an arbitrary point in time. A snapshot is created automatically, occasionally, right before an update that carries more risk than usual.

If what you want is a backup you control — to move to a new Mac, or keep a copy before experimenting — use **Export User Data** instead (see [Exporting your own data](#exporting-your-own-data) below).

## When a snapshot is created

You do not start a Time Machine snapshot yourself. Phi creates one automatically, just before launching into a qualifying update, and only once per such update. Most updates do not trigger one at all. When a snapshot does exist, it captures the Phi data that belongs to the previous version — your bookmarks, Spaces, pinned tabs, settings, Memory, and browsing state — together with a record of which app version it pairs with, so that a rollback restores a consistent setup rather than a mismatched mix. The app itself is not stored in the snapshot; it is downloaded during the restore.

Snapshots are stored **locally on your Mac**. They are not uploaded to the cloud, not tied to your account, and cannot be moved to another Mac.

## Rolling back to a previous version

1. Open the **Help** menu and find **Time Machine Backups**.
2. Each available snapshot is listed by version, build, and date — for example, _Phi 1.6 (590) on 2026.6.11_. If there are none, the menu shows **No Backups Available**.
3. Choose the snapshot you want. Phi asks to confirm: **"Restore Time Machine Backup?"** — noting that _Phi will quit and restore it, and the current app and selected user data will be replaced._
4. Choose **Restore**. Phi downloads the previous version, replaces the current app and the matching data, and relaunches into the restored version.

Because the rollback fetches the previous version, you need an internet connection while restoring. The restore is designed to either finish or recover safely if interrupted, so a quit or crash mid-restore will not leave Phi in a broken state.

## Exporting your own data

Time Machine handles update rollbacks. For a backup you create and keep on your own terms, use the **Help** menu's **Manage User Data**:

- **Export User Data…** saves your Phi data as a single file you can store anywhere.
- **Import User Data…** replaces your current Phi data from a file you exported earlier, then relaunches.

This is the right tool for moving to a new Mac or keeping a personal copy — the part Time Machine intentionally does not cover.

## How this connects to the rest of Phi

A Time Machine snapshot includes the data behind [Spaces & Profiles](/spaces/) and [Memory](/memory/), so rolling back returns those to how they were at the snapshot. Everything stays on your Mac, in line with Phi's local-first approach described in [Privacy & Your Data](/privacy/).
