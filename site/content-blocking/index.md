---
description: "Choose what Phi blocks, manage filter lists for each Profile, and make an exception for a site that does not work as expected."
---

# Content blocking

Phi is built on Chromium and uses Brave's open-source content-filtering engine. You can choose to block ads, trackers, and cookie banners, with separate controls for each.

## What Phi can block

| Setting                  | What it does                                                                |
| ------------------------ | --------------------------------------------------------------------------- |
| **Block ads**            | Blocks matching ads and advertising requests.                               |
| **Block trackers**       | Blocks matching tracking scripts, beacons, and analytics requests.          |
| **Block cookie banners** | Hides matching cookie notices. It does not choose a consent option for you. |

The three switches are off until you turn them on. They belong to a [Profile](/spaces/), so different Profiles can use different settings and filter lists.

Content blocking uses rules from filter lists. A list can cover general ads or trackers, cookie notices, regional sites, or custom rules you add. Phi cannot block every ad or tracker, and some sites may behave differently when a rule matches.

## Turn it on

1. Open **Settings → Profiles**.
2. Select a Profile and find **Content blocking**.
3. Turn on the categories you want.
4. If Phi asks you to choose filter lists, select the lists to use and click **Done** to download any selected lists that are not on your Mac yet.

You can open the rule chooser next to a category whenever you want to change its lists. Downloads start only when you choose a download action. **Update Downloaded** fetches the latest version of lists already on your Mac.

In the chooser, choose **Add Filter…** to add a list by URL or paste rules directly. A custom list applies to all three categories in that Profile.

Downloaded filter lists can be shared between Profiles. Each Profile has its own list selections, custom lists, and site exceptions.

## Allow content on one site

Open the address bar menu and select **Content blocking on this site** to turn blocking off or on for the current site in the active Profile. This changes only that Profile's exception for the site. It does not turn off the categories on other sites.

This menu item is not available in Incognito windows.

## When a site does not work

Some sites need a resource that a filter list blocks. Use **Content blocking on this site** in the address bar menu to make an exception, then reload the page. You can also turn off one category or change its filter lists in **Settings → Profiles**.

Filter lists cannot identify every ad, tracker, or cookie notice. Cookie banner blocking hides matching page elements; it does not accept cookies or dismiss a consent choice on your behalf.

## What's next

- [Privacy & Your Data](/privacy/), what Phi stores and sends.
- [Spaces & Profiles](/spaces/), how browser data and settings are separated.
- [Incognito Spaces](/incognito/), what changes during a private session.
