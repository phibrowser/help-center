---
description: "Keep your Spaces, bookmarks, pinned tabs, URL Rules, supported settings, and browsing history the same on every Mac you sign in to, encrypted before upload with keys only your Macs hold."
---

# Sync

Sync keeps Phi's own data the same on every Mac where you are signed in to the same Phi account. Save a bookmark or rename a Space on one Mac and the change arrives on the others. It is off until you set it up on each Mac, and it is built so that we cannot read what it carries: everything is encrypted on your Mac before it is uploaded, with keys that only your Macs hold.

Everything described here lives in **Settings → Sync**.

## What syncs {#what-syncs}

| What                           | Details                                                                                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spaces**                     | Name, icon, color, theme, and which Profile each Space belongs to.                                                                                                                                                                                |
| **Profiles**                   | Profile names, and which Spaces belong to each Profile.                                                                                                                                                                                           |
| **Bookmarks and folders**      | Every Space's bookmarks, with their folders and order.                                                                                                                                                                                            |
| **Pinned tabs**                | Pinned tabs, in whichever scope you chose in **Settings → Spaces**.                                                                                                                                                                               |
| **URL Rules**                  | The rules that route matching sites into a Space, Incognito, or Kiosk.                                                                                                                                                                            |
| **Supported settings**         | Layout mode, appearance, theme and selection tint, the bookmark bar and full URL settings, **New tab behavior** (what ⌘T opens), the Incognito close warning, automatic picture-in-picture, the pinned tab scope, and which Space is the default. |
| **Browsing data, per Profile** | Browsing history, the browser's own preferences such as the default search engine, and extensions with their synced settings.                                                                                                                     |

::: warning Deleting is synced too
Delete a Space or a Profile on one Mac and it is deleted from every Mac that syncs with it, bookmarks included. Phi says so in the confirmation dialog, so read it before you confirm.
:::

Some things stay where they are on purpose:

- **Passwords, cookies, and autofill.** They never enter sync. Phi has no password manager of its own, and a vault you connect through the [Agent Password Manager](/agent-passwords/) belongs to its provider and syncs on that provider's terms.
- **Open tabs.** Ordinary open tabs are not recreated on another Mac. Pinned tabs are.
- **Phi Chat and Memory.** Your conversations with the assistant stay on the Mac where you had them, and so does [Memory](/memory/).
- **Incognito Spaces**, and the Spaces agents work in. Nothing from them is synced. A URL Rule that sends a site to Incognito is still a rule, so it syncs like any other.
- **Keyboard shortcuts.** What you set in **Settings → Shortcuts** stays on the Mac where you set it.
- **Settings tied to one Mac**, including the AI and agent settings.

## Before you start

- **A Phi account, signed in on each Mac.** Without one the pane only offers **Sign in to sync across devices**. If you chose to explore without an account, see [Signing in later](/get-started/#signing-in-later).
- **The official Phi build.** Sync runs through Phinomenon's sync service, and a copy of Phi you build yourself from the open-source code cannot use it.

## Set up your first Mac {#set-up-your-first-mac}

1. Open **Settings → Sync** and click **Set up sync on this device**. The window explains what is about to happen; click **Continue**.
2. **Save your recovery code.** Phi creates a recovery code and shows it once: 27 characters in groups of five. Click **Copy** and put it somewhere safe, such as a password manager, then click **I've saved it**.
3. **Confirm your recovery code.** Phi asks you to type the code you saved. Dashes, spaces, and letter case do not matter. If you did not save it, click **Back**: Phi shows the same code again so you can save it now. Sync stays off until the code checks out, so you cannot find out later that it was never saved. If you close the window here, Phi asks again the next time you open setup or restart, but **Back** is gone by then, because the code is not kept once the window closes.
4. **Phi sets up sync on its own.** On a first Mac the account has nothing to match yet, so there are no matching pages to fill in. Phi adds this Mac's Profiles and Spaces to the account and shows **Setting up sync…** while it does. If Phi could not read everything in the account, it shows the matching pages from [Add another Mac](#add-another-mac) instead.
5. When setup is done, the pane shows **Initial sync in progress** while this Mac uploads, then **Up to date**.

::: warning The recovery code is shown once
The code is made on your Mac and never sent to us, so we cannot show it again, send a replacement, or reset it. To add another Mac you need either the code or a Mac that is already set up. Lose both and nobody can unlock the encrypted copy in your account, us included. If the code is already lost, see [Forgot your recovery code?](#forgot-your-recovery-code)
:::

## Add another Mac {#add-another-mac}

1. Sign in to the same Phi account, open **Settings → Sync**, click **Set up sync on this device**, then **Continue**.
2. On **Add this device to your account**, choose how this Mac joins:
   - **Request approval from another device.** Phi shows a short code and waits. On a Mac that is already set up, open **Settings → Sync**: the request appears under **Devices** with the same code and when it expires. Check that the two codes match, then click **Approve**, or **Deny** if you were not expecting it. The code identifies the new Mac and is not a secret, so reading it out over the phone is fine. A denied or expired request offers **Try another way**.
   - **Enter a recovery code.** Type the code you saved on your first Mac.
3. **Choose how this Mac syncs.** When your account already holds data and this Mac has data of its own, Phi asks **How should this Mac sync?** and shows what each side holds:
   - **Merge this Mac with your account**, marked **Recommended**. You match Profiles and Spaces one by one in the next steps, and bookmarks, pinned tabs, and URL Rules from both sides are kept.
   - **Use your account's data**. This Mac's Spaces, bookmarks, pinned tabs, URL Rules, and synced settings are replaced with your account's, and Profiles your account does not have are deleted from this Mac. Only this Mac changes, and it cannot be undone. See [Use your account's data](#use-your-accounts-data) before you choose it.

   A Mac with nothing beyond its Default Profile and default Space, and no bookmarks, pinned tabs, or URL Rules, does not see this step. There is no option that copies this Mac's data over your account.

4. **Match your profiles.** Phi pairs the Profiles on this Mac with the Profiles in your account and asks about the ones it could not match. This Mac's Default Profile is always matched to your account's default Profile: its row shows that account Profile, with no picker. For each other Profile here, choose **Assign to** an account Profile or **Register as new**. Profiles in your account with no counterpart here are listed under **Unclaimed account profiles**, where **Create on this Mac** adds them. If a choice would break the Default rule, Phi says **This Mac's default profile can only be matched with the account's default profile. Review the matches and try again.**
5. **Match your Spaces.** For each Space on this Mac, pick the account Space it is, or **Add as new**. **Add all as new** settles every undecided Space at once, and Spaces whose names match exactly are picked for you. Spaces in your account that are not on this Mac appear under **Spaces to add from your account** and are created when you finish. Nothing on this Mac is deleted. Click **Finish**.
6. **Review what changes**, which appears only if something on this Mac would be overwritten. When you matched a Space here to one in your account, the account's name, icon, color, and theme replace this Mac's, and the Space may move to the Profile it has in your account. Tabs, bookmarks, pinned tabs, and URL Rules on this Mac are not touched. To keep this Mac's values, go **Back** and add that Space as new instead. Click **Apply** to start sync. If nothing would be overwritten, sync starts as soon as you click **Finish**.

Phi shows only the pages where it has something to ask. When there is nothing to ask, for example on a Mac with only default data, it finishes on its own and shows **Setting up sync…**, and your account's Profiles and Spaces appear on this Mac.

Loading the account can take up to two minutes while Phi counts your Spaces, and it needs a connection: there is no cached copy to fall back on. With **Merge this Mac with your account**, bookmarks, pinned tabs, and URL Rules from both Macs are kept once sync starts, so nothing from either side is lost.

### Use your account's data {#use-your-accounts-data}

Choose this when you do not want to keep what Phi has on this Mac, for example a Mac you only used for testing. Phi deletes this Mac's Phi data first, then downloads your account's.

- **Removed from this Mac:** Spaces other than the default Space, and their open tabs close; bookmarks, pinned tabs, URL Rules, and synced settings; and every Profile your account does not have, together with its history, extensions, and site data.
- **Kept:** this Mac's Default Profile, and Profiles whose name matches one in your account, keep their history, extensions, and site data. Your account and your other Macs are not affected.

After you click **Continue**, Phi asks **Replace what's on this Mac?** and lists what is removed and what is downloaded. Click **Replace this Mac's data** to go ahead. Phi shows **Replacing this Mac's data…** and the window stays open until it is done. Your account's data then arrives with the first sync, and the pane shows **Initial sync in progress**, which can take a few minutes for a large account. If the replace stops with an error, see [Couldn't finish replacing this Mac's data](#replace-did-not-finish).

::: warning Replacing cannot be undone
Phi does not keep a copy of what it deletes. If you want one, choose **Finish later** first, export with **Help → Manage User Data → Export User Data…** (see [Importing & Exporting](/import-export/) and [Sync or export](#sync-or-export)), then come back to setup. To keep a local Profile, choose **Merge this Mac with your account** instead.
:::

### If setup cannot load your account {#setup-cannot-load-account}

Setup reads your account before it shows any choices. When that fails, the window says why and offers **Retry**:

- **Couldn't load your account's Spaces in time.** The account is large or the connection is slow. Check your connection and retry.
- **Sync isn't available right now, so your account's Spaces couldn't be loaded.** Phi cannot reach sync at the moment. Check that you are online and still signed in, then retry.
- **Couldn't load your account's profiles.** or **Couldn't load your account's Spaces.** Check your connection and retry.
- An account Profile marked **Can't be read right now**: Phi keeps retrying in the background, and the rest of setup still works.
- **Your account's default profile can't be read on this Mac, so this Mac's data can't be replaced right now.** **Use your account's data** cannot run until it can. Choose **Merge this Mac with your account**, or **Finish later** and try again.

### Finish later {#finish-later}

**Finish later** appears on the sync method step and the matching pages. Choose it, or close the window, and this Mac keeps browsing locally: nothing syncs, the pane reads **Not paired**, and Phi does not reopen setup on its own. Come back to **Settings → Sync** and click **Continue setup** when you are ready. Phi reloads your account at that point, so unfinished choices are not kept, including the sync method: the next setup starts with **Merge this Mac with your account** selected.

A replace that has started is the exception. Once Phi has begun replacing this Mac's data, leaving does not cancel it. If it stopped, for example with an error or because Phi quit, and you closed the window, the next time you open setup it goes straight to **Replace what's on this Mac?**, with no **Back**, and **Replace this Mac's data** continues from where it stopped. **Remove this device from sync…** is still offered there; it leaves this Mac out of sync with whatever the replace had not removed yet.

## Forgot your recovery code? {#forgot-your-recovery-code}

Nobody can show your recovery code again or make a new one for the same sync data, us included. What you can still do depends on your situation. The **Forgot your recovery code?** link on the **Enter your recovery code** page opens this section.

### You are still setting up your first Mac

If you are on **Confirm your recovery code** and have not closed the setup window, click **Back**. Phi shows the same code again. Save it, click **I've saved it**, and type it to confirm.

Phi 2.14 and earlier have no **Back** button. If you closed the window or restarted Phi, the code is gone too: Phi keeps asking for it but cannot show it. In either case, update Phi if you need to, then start over with [Reset sync](#reset-sync) as described below.

### Another Mac is still set up for sync

You do not need the code. On the new Mac, choose **Request approval from another device** and approve the request on the Mac that is set up; see [Add another Mac](#add-another-mac). Sync keeps working on the Macs you have.

The code still cannot be shown again or replaced. Keep at least one Mac set up for sync: as long as one is, you can add Macs without the code.

### This is your only Mac, or you want to start over

Use [Reset sync](#reset-sync) on that Mac. It removes the Mac from sync and deletes all sync data stored for your account. Your local browsing data stays on the Mac, and any other Mac that still had sync set up for the account shows [Set up sync again](#set-up-sync-again) afterwards. Then set up sync on this Mac from scratch, as in [Set up your first Mac](#set-up-your-first-mac). Phi creates a new recovery code; save it before you click **I've saved it**.

**Reset sync** is only offered on the last Mac set up for the account. If you want to start over while other Macs are still set up, remove each of the others from sync first.

### No Mac you still have is set up for sync

If the code is gone and no Mac you still have is set up for sync, the encrypted copy in your account cannot be unlocked, by you or by us. A Mac that is not set up for sync yet cannot reset the account's sync either, so there is no way to start over from it. This includes a Mac that was lost or erased while it was set up: it still counts as set up, and it cannot be removed from another Mac.

## Check sync status {#check-sync-status}

The top of the Sync pane shows where things stand:

- **Up to date**, **Syncing…**, or **Initial sync in progress** while the first sync runs.
- **Offline**, with a note that changes will sync when connected. Phi keeps working from local data and sends your changes once the Mac is back online.
- **Sync paused.** A Profile on this Mac is not set up for sync yet, usually one you created after setting up. The pane names the Profiles it waits for and why. Phi registers them on its own and keeps retrying, and **Retry** tries at once. See [Sync paused](#sync-paused).
- **Needs attention.** Something failed. The line **Some content needs attention. Check the details and your connection.** appears under it, and **Last problem** names the most recent problem and when it happened. See [What each problem means](#needs-attention).

Under the status, **Last successful sync on this Mac** shows when this Mac last finished a sync. **Waiting for profiles to load** means Phi has not read this Mac's list of Profiles yet. It keeps trying on its own, and after five minutes the status turns to **Needs attention**.

If you changed the pinned tab scope, on this Mac or on another one, a line can read **Pinned tab scope change not applied yet**, with the number of attempts and a reason: **A browser migration is running**, **Local browser data is unavailable**, or **Couldn't save pinned tabs on this Mac**. This Mac has not moved its pinned tabs to the new scope yet. Phi keeps retrying on its own and the rest of sync carries on. If the line does not go away, restart Phi, and send feedback with **Feedback** in the menu at the top right of the window if it still does not.

### What each problem means {#needs-attention}

**Last problem** shows one of these. It stays until the next sync that finishes completely clears it.

| Last problem                             | What it means                                                                                               | What you do                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Sign-in expired**                      | The sync service no longer accepts this Mac's sign-in.                                                      | Sign in to your Phi account again.                                                          |
| **No connection**                        | This Mac could not reach the sync service.                                                                  | Nothing. It clears on the next successful sync once you are online.                         |
| **Server error**                         | The sync service returned an error.                                                                         | Nothing. It clears on the next successful sync.                                             |
| **Server rejected changes**              | The sync service refused some of this Mac's changes, for example after repeated conflicts with another Mac. | Click **Sync Now**. If it comes back, restart Phi, and send feedback if it persists.        |
| **Couldn't read data on this Mac**       | Phi could not read some of its own data on this Mac.                                                        | Click **Sync Now**. If it comes back, restart Phi, and send feedback if it persists.        |
| **Couldn't save sync state on this Mac** | Phi could not save its record of what has synced.                                                           | Click **Sync Now**. If it comes back, restart Phi, and send feedback if it persists.        |
| **Some synced data couldn't be read**    | Something in your account could not be read on this Mac.                                                    | Click **Sync Now**. If it comes back, restart Phi, and send feedback if it persists.        |
| **Waiting for a profile to be paired**   | Some synced items wait until a Profile on this Mac is paired with your account.                             | Wait for Phi to set up the Profile, or click **Retry** when the pane shows **Sync paused**. |
| **Sync needs to be reset**               | The sync data in your account was reset and this Mac's setup no longer matches it.                          | Click **Set up sync again**. See [Set up sync again](#set-up-sync-again).                   |

Items that are held, described under [Details](#sync-details), can also keep the status at **Needs attention** without a problem name. See [Pinned tabs are held](#held-pinned-tabs).

### Details {#sync-details}

**Details** lists your Profiles, each with its status for its browsing data, then a row per kind of Phi data: **Settings**, **Spaces**, **Bookmarks**, **Pinned tabs**, and **URL rules**. Each kind's row describes its most recent sync that had changes, and how long ago that was:

| Count               | What it counts                                                                                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Received**        | Changes this Mac got from your account.                                                                                                                                                                                    |
| **Sent**            | Changes this Mac uploaded.                                                                                                                                                                                                 |
| **Waiting to send** | Changes on this Mac that are not uploaded yet. A later sync sends them.                                                                                                                                                    |
| **Held**            | Items this Mac received but cannot apply yet. Phi keeps them until it can, for example a pinned tab whose Profile or Space is not paired on this Mac. Pinned tabs that belong to another pinned tab scope are not counted. |

**Waiting to send** and **Held** appear only when they are not zero. A kind with nothing recent shows **No recent changes**.

### Sync Now {#sync-now}

**Sync Now** asks this Mac to sync everything straight away. You rarely need it: Phi is told when another Mac changes something and checks on its own as well, at most once a minute. **Sync Now** skips that wait. While a sync waits or runs, the button shows progress, and its tooltip says what it is waiting for, such as **Waiting for all profiles to be available**.

When a sync you started does not finish, a line under the status says so until you click again:

- The problem's name, from the table above, when one was recorded during that sync.
- **Sync did not finish**, when the sync stopped without a specific problem. Try again later. If it keeps happening on one Mac, see [Pinned tabs are held](#held-pinned-tabs).
- **Couldn't start sync. Try again later.**, when this Mac could not start a sync at all.

A sync that finishes adds no line, and **Last successful sync on this Mac** moves to the new time.

## Devices

The **Devices** section lists every Mac set up on your account, with **This Mac** marked, and any Mac waiting to join with its code, **Approve**, **Deny**, and when the request expires. Approving needs this Mac to be signed in with its own setup finished.

Each Mac can only remove itself, from its own Sync pane. There is no way yet to remove a Mac you no longer have: a lost Mac stays on the account and keeps receiving changes for as long as it is signed in. Signing it out, if you can still reach it, stops that.

## Remove a Mac from sync {#remove-a-mac-from-sync}

In **Settings → Sync**, under **Removal**, click **Remove…** on the **Remove this Mac from sync** row and confirm with **Remove This Device**. If setup is not finished on this Mac, the setup window offers **Remove this device from sync…** at the bottom instead.

- This Mac stops syncing, the sync service revokes it, and its sync setup, keys, and Profile and Space matching are cleared from this Mac.
- Everything you were browsing stays: Spaces, bookmarks, history, and pinned tabs are kept in full, and you stay signed in to your account.
- Your other Macs are not affected and keep syncing with each other.
- To bring this Mac back, start setup again and join by approval or recovery code.

When this Mac is the only Mac set up for sync on the account, the row is **Reset sync** instead, because removing the last Mac also deletes the account's sync data. See [Reset sync](#reset-sync).

::: warning Removal does not re-key your account
Removing a Mac stops it from receiving anything new, but it does not change your account's encryption keys and cannot pull back what that Mac had already synced. Whatever was on it stays on it.
:::

### Reset sync {#reset-sync}

When this Mac is the only Mac set up for sync on your account, the **Removal** section shows **Reset sync** with a **Reset…** button. Resetting removes this Mac from sync and deletes all sync data stored for this account, so you can start over, for example after losing your recovery code.

1. In **Settings → Sync**, under **Removal**, click **Reset…**.
2. Phi asks **Delete all sync data for this account?** Click **Delete All Sync Data** to confirm. This cannot be undone.

- Every device is removed from sync, and everything stored on the sync server for this account is deleted.
- Your local browsing data stays on this Mac: Spaces, bookmarks, history, and pinned tabs are kept, and you stay signed in to your account.
- Any other Mac that still had sync set up for this account shows [Set up sync again](#set-up-sync-again).
- To use sync again, set it up from scratch. Phi creates a new recovery code.

If you remove this Mac from the setup window and it turns out to be the last one, Phi says so: **This is the last device set up for sync. You can remove it and delete all sync data stored for this account, or set up sync on another device first.** It then offers **Remove this device and delete all sync data…**, which asks for the same confirmation.

If another Mac joined the account in the meantime, nothing is deleted. Phi says **Another device has joined this account since, so nothing was deleted. You can remove this Mac from sync instead.** and the row changes back to **Remove this Mac from sync**.

## Set up sync again {#set-up-sync-again}

If the pane says **The account's sync data has changed. Syncing Phi data is paused.**, the sync data in your account was reset and this Mac's setup no longer matches it. Phi's data stops syncing until you act; retrying or restarting does not clear it. Click **Set up sync again** and confirm. Phi clears this Mac's sync setup and matching information, keeps your local browsing data and what is in your account, and walks you through setup again, including joining by approval or recovery code.

You also see this on a Mac after **Reset sync** was used on the account's last Mac, because the sync data that Mac was set up with has been deleted.

## Troubleshooting {#troubleshooting}

### A second Mac did not get my keyboard shortcuts or open tabs {#missing-shortcuts-and-open-tabs}

That is expected. Keyboard shortcuts from **Settings → Shortcuts** never sync, and neither do ordinary open tabs: only pinned tabs do. AI and agent settings also stay on each Mac. Set them on each Mac where you want them. See [What syncs](#what-syncs).

### One Mac says Sync did not finish and holds pinned tabs {#held-pinned-tabs}

One Mac shows **Sync did not finish**, and its **Pinned tabs** row in **Details** shows **Held** with a number, while the other Mac says **Up to date**. **Held** means this Mac received pinned tabs it cannot place, because the Profile or Space they belong to is not paired here.

The usual cause is that the two Macs' Default Profiles were not matched to each other during setup. Macs paired on Phi 2.12 could end up this way. Since Phi 2.13, setup always matches the Default Profile to your account's default Profile.

To fix it today, on the Mac that holds the pinned tabs, [remove the Mac from sync](#remove-a-mac-from-sync), then set it up again as in [Add another Mac](#add-another-mac). Choose **Merge this Mac with your account** if Phi asks how this Mac should sync. Bookmarks, history, and everything else stay on the Mac while you do this, and its Default Profile is matched to your account's default Profile.

### Sync paused, or Waiting for a profile to be paired {#sync-paused}

A Profile you create after setting up sync is not paired yet. Phi registers it with your account on its own, and sync for that Profile starts once it is done. **Retry** in the Sync pane tries at once. If the pause never clears, check your connection and that you are still signed in, then click **Retry** again.

### Sync says Needs attention {#sync-needs-attention}

**Last problem** names what went wrong. [What each problem means](#needs-attention) lists every problem and what to do about it.

### Couldn't finish replacing this Mac's data {#replace-did-not-finish}

If setup stops with **Couldn't finish replacing this Mac's data.** after you chose **Use your account's data**, click **Retry**. Retry picks up where it stopped, and nothing else changes until it is done. Keep Phi open while it runs; for a large account it can take a few minutes. If you close the window, the next setup continues the same replace, as described under [Finish later](#finish-later).

### A Space's name, icon, color, or theme changed after matching {#account-values-replaced}

That is expected. When you match a Space on this Mac to one in your account, the account's name, icon, color, and theme win, and **Review what changes** shows this before you click **Apply**. To keep this Mac's version, go **Back** at that point and choose **Add as new** for that Space: it then syncs as a separate Space. Once the match is applied, this Mac's old values are not kept, so restyle the Space by hand if you want them back; the change syncs to your other Macs too.

## Signing out

Signing out of your Phi account stops sync on that Mac, and nothing from your other Macs arrives until you sign in again. Sign back in to the same account and sync picks up where it left off and catches up on what it missed; the Sync pane tells you if there is anything left to finish. Switching to a different account never mixes the two: each account has its own synced data and its own matching.

## How your data is protected

- **Encrypted before it leaves your Mac.** Your Macs create the keys, and only the encrypted copy is uploaded. The sync service stores it and hands it to your other Macs; it cannot decrypt it.
- **Signing in is not enough to read it.** A new Mac gets the key only through approval from a Mac that already holds it, or through your recovery code. That is also why a lost code cannot be recovered: the **Forgot your recovery code?** link in setup explains your options, and none of them brings the code back.
- **It is still data we hold for you.** The encrypted copy lives on Phinomenon's sync service, so sync is one of the things Phi sends. [Privacy & Your Data](/privacy/) lists the others, and the [Privacy Policy](https://phibrowser.com/privacy/) and [Terms](https://phibrowser.com/terms/) are the authoritative word on all of it.

## Sync or export {#sync-or-export}

Sync is for Macs you keep using side by side. For a one-off move to a new Mac, or a copy you keep yourself, **Manage User Data → Export User Data…** in the **Help** menu is the better tool; see [Importing & Exporting](/import-export/).

## What's next

- [Spaces & Profiles](/spaces/), what a Space and a Profile are, and why setup matches them.
- [Bookmarks & Pinned Tabs](/bookmarks/), the pinned tab scope that sync follows.
- [Privacy & Your Data](/privacy/), everything else Phi sends and keeps.
- [Importing & Exporting](/import-export/), moving data once instead of continuously.
