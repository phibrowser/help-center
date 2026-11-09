---
description: "How Migrate from Another Browser recreates your Arc or Zen Profiles and Spaces in Phi Browser, what each browser brings across, what to expect from permission prompts, and how it differs from Import."
---

# Migrating from Arc or Zen

**Migrate from Another Browser…** rebuilds the shape of your Arc or Zen setup in Phi. It creates a Phi Profile for each source profile and a Phi Space for each source Space, then fills each Space with its bookmarks and each Profile with its pinned tabs and browsing data. When it finishes, your old sidebar is recreated in Phi.

Migration only ever creates. It never changes, merges into, or deletes a Profile or Space you already have in Phi.

## Migrate or Import

Phi has two commands for bringing data across, side by side in the **Phi** menu (the bold app menu next to the Apple menu):

|                        | **Import from Another Browser…**                 | **Migrate from Another Browser…**                      |
| ---------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| What it does           | Adds data to the Space you are in                | Creates new Profiles and Spaces that mirror the source |
| Browsers               | Chrome, Safari, Arc, Dia, or a file              | Arc and Zen                                            |
| Where the data lands   | Your current Space and its Profile               | The new Profiles and Spaces it creates                 |
| You choose             | Which data types to bring in                     | Which Spaces to recreate                               |
| Your existing Phi data | Bookmarks and history join what is already there | Left untouched                                         |

Choose **Import** when you already have a Phi setup you like and want to add bookmarks or history to it. Choose **Migrate** when you are moving from Arc or Zen and want your Spaces back as they were, without rebuilding them by hand. Import is covered in [Importing & Exporting](/import-export/).

## Before you start

- **Have the browser installed on this Mac.** Migrate reads Arc's or Zen's data from where that browser keeps it. If neither is installed, **Migrate from Another Browser…** is greyed out.
- **Sign in to Phi, or continue as a guest.** Migrated Profiles and Spaces belong to your Phi account, so the wizard asks you to finish first run before it starts.
- **Quit Zen first.** Phi reads copies of Zen's files, and anything Zen has not saved to disk yet would be missed. The wizard reminds you while Zen is running.
- **Expect Keychain prompts for Arc.** Arc encrypts its cookies, so macOS asks whether Phi may use Arc's encryption key. Choose **Always Allow**. Otherwise macOS asks again for every Profile. If you deny it, that Profile's cookies stay behind while everything else comes across, and the report does not flag the missing cookies.
- **Do not run Import at the same time.** While a migration is running, **Import from Another Browser…** is greyed out, and the other way round.

## Running a migration

1. Open the **Phi** menu and choose **Migrate from Another Browser…**. The **Migrate to Phi** window opens.
2. Pick **Arc** or **Zen** and click **Continue**. Only the browsers installed on this Mac are listed.
3. Review the preview under **Review what will be created**. It lists each source profile with its Spaces, and a summary such as _Will create 2 Profiles and 5 Spaces._ Untick the Spaces you do not want. A Profile is created only when at least one of its Spaces is ticked.
4. Click **Start Migration**. Phi creates the Profiles and Spaces one at a time and shows its progress. This can take a few minutes. You can keep browsing in the meantime; the new Spaces are not opened over the one you are using.
5. Read the report under **Migration finished**. Click **Go to** followed by a Space's name to switch to the first new Space, or **Done** to close the window.

## What comes across

The layout is the same for both browsers. Each source profile becomes a Phi Profile, and each source Space becomes a Phi Space bound to that Profile, keeping its name and, where Phi has a match, its color and icon.

| Source item                                                                          | In Phi                                                                                |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Arc profile, or Zen container (Zen Spaces with no container share one Profile)       | A new Profile                                                                         |
| Arc or Zen Space                                                                     | A new Space in that Profile                                                           |
| Arc's pinned sidebar items, or the pinned tabs in each Zen Space, with their folders | That Space's bookmarks                                                                |
| Arc Favorites, or Zen Essentials                                                     | Pinned tabs, placed by your [pinned tab scope](/bookmarks/#choose-a-pinned-tab-scope) |

The browsing data underneath each Profile depends on the browser:

| Data           | Arc                        | Zen |
| -------------- | -------------------------- | --- |
| Recent history | Yes                        | Yes |
| Cookies        | Yes, after Keychain access | No  |
| Extensions     | Chrome Web Store ones      | No  |

A few limits worth knowing:

- **Open tabs do not move.** Only pinned items and Favorites or Essentials come across. Tabs you had open but not pinned stay in the source browser.
- **History is recent, not complete.** The migration keeps the most recent history entries rather than every visit you ever made.
- **Extensions install in the background.** For Arc, the report shows how many Chrome Web Store extensions started installing. Extensions from anywhere else do not move, and Zen's Firefox extensions cannot run in Phi.
- **Passwords and payment cards are not migrated.**
- **Zen's private-window Spaces are skipped.**
- **Pinned tabs need a Space.** Phi creates a Profile only when it has at least one Space to create. A source profile with no Spaces, such as a Zen container that no Zen Space uses, is skipped, and the report says how many of its pinned tabs were left behind.

Your source browser is not modified. Arc and Zen keep everything they had, so you can migrate, compare, and keep using either browser.

## Reading the report

The report lists every Profile and Space with what happened to it: how many bookmarks each Space received, how many pinned tabs were added, and whether the history, cookies, and extensions came across. If something failed, the summary says how many things need your attention, and the affected row explains what went wrong, for example **Space not created** or **Bookmarks couldn't be saved**. Everything else from the run is kept, so one failure does not undo the rest.

## Migrating again

Phi remembers that you migrated from a browser into your account. If you start another migration from the same browser, it warns you first: migrating again creates a second set of Profiles and Spaces and does not update the first. Choose **Migrate Again** only if that is what you want. To start over without two copies side by side, delete what the first run created before migrating again: first its Spaces, then its Profiles. Deleting a Space leaves its Profile, and that Profile's cookies, history, and extensions, in place. See [Deleting a Profile](/spaces/#deleting-a-profile).

There is no ongoing sync with Arc or Zen. A migration is a one-time copy of what the source had at that moment.

## What to read next

- [Importing & Exporting](/import-export/), adding bookmarks and history to the Space you are in.
- [Switching to Phi](/switching-to-phi/), how Spaces, Profiles, and pinned tabs differ from Arc and Zen.
- [Spaces & Profiles](/spaces/), managing the Profiles and Spaces a migration creates.
- [Bookmarks & Pinned Tabs](/bookmarks/), how bookmarks and pinned tabs behave once they are in Phi.
