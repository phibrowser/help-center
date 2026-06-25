# Time Machine backups

## What is Phi's Time Machine?

It is a **version rollback** safety net. Before certain major updates, Phi automatically saves a snapshot of the current version and your data, so you can return to it if a new release does not work for you. For the full picture, see [Time Machine backups](/help/time-machine/) in the Help guides.

## Is this Apple's Time Machine?

No. It does not back up your Mac and is unrelated to the macOS feature of the same name. It only rolls Phi back to a previous version.

## Does it back up my browsing all the time?

No. It is not a continuous or scheduled backup. A snapshot is created automatically and only occasionally — right before an update that carries more risk than usual — and only once per such update. If you want a backup you control, use **Export User Data** instead.

## What does a snapshot include?

The previous app version plus the Phi data that belongs to it — bookmarks, Spaces, pinned tabs, settings, Memory, and browsing state — so a rollback restores a consistent setup.

## Where are snapshots stored?

Locally on your Mac. They are not uploaded to the cloud, not tied to your account, and cannot be moved to another Mac.

## How do I roll back?

Open the **Help** menu, choose **Time Machine Backups**, and pick a snapshot (listed by version, build, and date, like _Phi 1.6 (590) on 2026.6.11_). Confirm **Restore**; Phi downloads the previous version, replaces the current app and matching data, and relaunches. You need an internet connection while restoring. If there are no snapshots, the menu shows **No Backups Available**.

## How is this different from exporting my data?

Time Machine handles update rollbacks automatically. To create and keep your own backup — for moving to a new Mac or keeping a personal copy — use **Manage User Data** in the **Help** menu (**Export User Data…** and **Import User Data…**).
