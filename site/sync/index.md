---
description: "Keep your Spaces, bookmarks, pinned tabs, URL Rules, supported settings, and browsing history the same on every Mac you sign in to, encrypted before upload with keys only your Macs hold."
---

# Sync

Sync keeps Phi's own data the same on every Mac where you are signed in to the same Phi account. Save a bookmark or rename a Space on one Mac and the change arrives on the others. It is off until you set it up on each Mac, and it is built so that we cannot read what it carries: everything is encrypted on your Mac before it is uploaded, with keys that only your Macs hold.

Everything described here lives in **Settings → Sync**.

## What syncs

| What                           | Details                                                                                                                                                                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spaces**                     | Name, icon, colour, theme, and which Profile each Space belongs to.                                                                                                                                                               |
| **Profiles**                   | Profile names, and which Spaces belong to each Profile.                                                                                                                                                                           |
| **Bookmarks and folders**      | Every Space's bookmarks, with their folders and order.                                                                                                                                                                            |
| **Pinned tabs**                | Pinned tabs, in whichever scope you chose in **Settings → Spaces**.                                                                                                                                                               |
| **URL Rules**                  | The rules that route matching sites into a Space, Incognito, or Kiosk.                                                                                                                                                            |
| **Supported settings**         | Layout mode, appearance, theme and selection tint, the bookmark bar and full URL settings, the new-tab shortcut, the Incognito close warning, automatic picture-in-picture, the pinned tab scope, and which Space is the default. |
| **Browsing data, per Profile** | Browsing history, the browser's own preferences such as the default search engine, and extensions with their synced settings.                                                                                                     |

::: warning Deleting is synced too
Delete a Space or a Profile on one Mac and it is deleted from every Mac that syncs with it, bookmarks included. Phi says so in the confirmation dialog, so read it before you confirm.
:::

Some things stay where they are on purpose:

- **Passwords, cookies, and autofill.** They never enter sync. Phi has no password manager of its own, and a vault you connect through the [Agent Password Manager](/agent-passwords/) belongs to its provider and syncs on that provider's terms.
- **Open tabs.** Ordinary open tabs are not recreated on another Mac. Pinned tabs are.
- **Phi Chat and Memory.** Your conversations with the assistant stay on the Mac where you had them, and so does [Memory](/memory/).
- **Incognito Spaces**, and the Spaces agents work in. Nothing from them is synced. A URL Rule that sends a site to Incognito is still a rule, so it syncs like any other.
- **Settings tied to one Mac**, including the AI and agent settings.

## Before you start

- **A Phi account, signed in on each Mac.** Without one the pane only offers **Sign in to sync across devices**. If you chose to explore without an account, see [Signing in later](/get-started/#signing-in-later).
- **The official Phi build.** Sync runs through Phinomenon's sync service, and a copy of Phi you build yourself from the open-source code cannot use it.

## Set up your first Mac

1. Open **Settings → Sync** and click **Set up sync on this device**. The window explains what is about to happen; click **Continue**.
2. **Save your recovery code.** Phi creates a recovery code and shows it once: 27 characters in groups of five. Click **Copy** and put it somewhere safe, such as a password manager, then click **I've saved it**.
3. **Confirm your recovery code.** Phi asks you to type the code you saved. Dashes, spaces, and letter case do not matter. Sync stays off until the code checks out, so you cannot find out later that it was never saved. If you close the window here, Phi asks again the next time you open setup or restart.
4. **Match your profiles and Spaces.** On a first Mac there is nothing in the account to match yet, so this step mostly confirms what is added: choose **Register as new** for each Profile and **Add all as new** for the Spaces. See [Add another Mac](#add-another-mac) for what the two steps do once the account has data.
5. Click **Finish**. The pane shows **Initial sync in progress** while this Mac uploads, then **Up to date**.

::: warning The recovery code is shown once
The code is made on your Mac and never sent to us, so we cannot show it again, send a replacement, or reset it. To add another Mac you need either the code or a Mac that is already set up. Lose both and nobody can unlock the encrypted copy in your account, us included.
:::

## Add another Mac {#add-another-mac}

1. Sign in to the same Phi account, open **Settings → Sync**, click **Set up sync on this device**, then **Continue**.
2. On **Add this device to your account**, choose how this Mac joins:
   - **Request approval from another device.** Phi shows a short code and waits. On a Mac that is already set up, open **Settings → Sync**: the request appears under **Devices** with the same code and when it expires. Check that the two codes match, then click **Approve**, or **Deny** if you were not expecting it. The code identifies the new Mac and is not a secret, so reading it out over the phone is fine. A denied or expired request offers **Try another way**.
   - **Enter a recovery code.** Type the code you saved on your first Mac.
3. **Match your profiles.** Phi pairs the Profiles on this Mac with the Profiles in your account and asks about the ones it could not match. For each Profile here, choose **Assign to** an account Profile or **Register as new**. Profiles in your account with no counterpart here are listed under **Unclaimed account profiles**, where **Create on this Mac** adds them.
4. **Match your Spaces.** For each Space on this Mac, pick the account Space it is, or **Add as new**. **Add all as new** settles every undecided Space at once, and Spaces whose names match exactly are picked for you. Spaces in your account that are not on this Mac appear under **Spaces to add from your account** and are created when you finish. Nothing on this Mac is deleted. Click **Finish**.
5. **Review what changes**, which appears only if something on this Mac would be overwritten. When you matched a Space here to one in your account, the account's name, icon, colour, and theme replace this Mac's, and the Space may move to the Profile it has in your account. Tabs, bookmarks, pinned tabs, and URL Rules on this Mac are not touched. To keep this Mac's values, go **Back** and add that Space as new instead. Click **Apply** to start sync. If nothing would be overwritten, sync starts as soon as you click **Finish**.

Loading the account can take up to two minutes while Phi counts your Spaces, and it needs a connection: there is no cached copy to fall back on. Once sync starts, bookmarks, pinned tabs, and URL Rules from both Macs are kept, so nothing from either side is lost.

### Finish later

**Finish later** appears on the matching pages. Choose it, or close the window, and this Mac keeps browsing locally: nothing syncs, the pane reads **Not paired**, and Phi does not reopen setup on its own. Come back to **Settings → Sync** and click **Continue setup** when you are ready. Phi reloads your account at that point, so unfinished choices are not kept.

## Check sync status

The top of the Sync pane shows where things stand:

- **Up to date**, **Syncing…**, or **Initial sync in progress** while the first sync runs.
- **Offline**, with a note that changes will sync when connected. Phi keeps working from local data and sends your changes once the Mac is back online.
- **Sync paused.** A Profile on this Mac is not set up for sync yet, usually one you created after setting up. Phi registers it on its own and keeps retrying; the line underneath says why it is waiting, and **Retry** tries at once.
- **Needs attention.** Something failed, and **Last problem** names it. **Sign-in expired** means sign in again. **No connection** and **Server error** clear by themselves on the next successful sync. **Sync needs to be reset** is covered in [Set up sync again](#set-up-sync-again).

**Details** opens a row per kind of Phi data (Spaces, Bookmarks, Pinned tabs, URL rules, Settings) showing what this Mac recently received, sent, and is still waiting to send, plus a row for each Profile's browsing data. **Sync Now** asks this Mac to sync everything straight away. You rarely need it: Phi is told when another Mac changes something and checks on its own as well, and it will not run two syncs less than a minute apart.

## Devices

The **Devices** section lists every Mac set up on your account, with **This Mac** marked, and any Mac waiting to join with its code, **Approve**, **Deny**, and when the request expires. Approving needs this Mac to be signed in with its own setup finished.

Each Mac can only remove itself, from its own Sync pane. There is no way yet to remove a Mac you no longer have: a lost Mac stays on the account and keeps receiving changes for as long as it is signed in. Signing it out, if you can still reach it, stops that.

## Remove a Mac from sync {#remove-a-mac-from-sync}

In **Settings → Sync**, under **Recovery and removal**, click **Remove this device from sync…** and confirm with **Remove This Device**.

- This Mac stops syncing, the sync service revokes it, and its sync setup, keys, and Profile and Space matching are cleared from this Mac.
- Everything you were browsing stays: Spaces, bookmarks, history, and pinned tabs are kept in full, and you stay signed in to your account.
- Your other Macs are not affected and keep syncing with each other.
- To bring this Mac back, start setup again and join by approval or recovery code.

You cannot remove the last Mac on the account. Set up sync on another Mac first.

::: warning Removal does not re-key your account
Removing a Mac stops it from receiving anything new, but it does not change your account's encryption keys and cannot pull back what that Mac had already synced. Whatever was on it stays on it.
:::

## Set up sync again {#set-up-sync-again}

If the pane says **The account's sync data has changed. Syncing Phi data is paused.**, the sync data in your account was reset and this Mac's setup no longer matches it. Phi's data stops syncing until you act; retrying or restarting does not clear it. Click **Set up sync again** and confirm. Phi clears this Mac's sync setup and matching information, keeps your local browsing data and what is in your account, and walks you through setup again, including joining by approval or recovery code.

## Signing out

Signing out of your Phi account stops sync on that Mac, and nothing from your other Macs arrives until you sign in again. Sign back in to the same account and sync picks up where it left off and catches up on what it missed; the Sync pane tells you if there is anything left to finish. Switching to a different account never mixes the two: each account has its own synced data and its own matching.

## How your data is protected

- **Encrypted before it leaves your Mac.** Your Macs create the keys, and only the encrypted copy is uploaded. The sync service stores it and hands it to your other Macs; it cannot decrypt it.
- **Signing in is not enough to read it.** A new Mac gets the key only through approval from a Mac that already holds it, or through your recovery code. That is why there is no "forgot your recovery code" link anywhere.
- **It is still data we hold for you.** The encrypted copy lives on Phinomenon's sync service, so sync is one of the things Phi sends. [Privacy & Your Data](/privacy/) lists the others, and the [Privacy Policy](https://phibrowser.com/privacy/) and [Terms](https://phibrowser.com/terms/) are the authoritative word on all of it.

## Sync or export

Sync is for Macs you keep using side by side. For a one-off move to a new Mac, or a copy you keep yourself, **Manage User Data → Export User Data…** in the **Help** menu is the better tool; see [Importing & Exporting](/import-export/).

## What's next

- [Spaces & Profiles](/spaces/), what a Space and a Profile are, and why setup matches them.
- [Bookmarks & Pinned Tabs](/bookmarks/), the pinned tab scope that sync follows.
- [Privacy & Your Data](/privacy/), everything else Phi sends and keeps.
- [Importing & Exporting](/import-export/), moving data once instead of continuously.
