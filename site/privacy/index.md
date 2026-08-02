---
description: "Learn where Phi Browser stores your data, what it does not collect, how Memory and cloud AI processing work, and how to control or delete AI data."
---

# Privacy & Your Data

Phi is built around a local-first architecture. The idea is simple: Phi can know you well without your personal context becoming a cloud-owned asset.

## Where your data lives

What Phi remembers about you, your [Memory](/memory/), is stored locally on your device. It is built there as you browse and is meant to stay with you, under your control.

## What Phi does not collect

Phi will never collect:

- your memory data,
- your AI interactions,
- your browsing context.

Phi does not sell your browsing-derived data, and it does not use your memory, browsing context, or AI interactions to train models.

A nuance worth knowing: large language models from providers such as Anthropic, OpenAI, Google, or SpaceXAI may be used to process tasks. When you use **Phi Cloud**, the content a request needs in order to be answered is sent to the provider of the model you picked, because that is the only way a model can answer it. It passes through us without being stored, it arrives under our account rather than yours, and it is never used for training. With **Private AI** it does not leave your Mac at all. Your personal memory stays local either way, and is never treated as a cloud-owned asset.

## What Phi does send

Local-first does not mean silent, and you should read this here rather than discover it in a network log.

- **A small anonymous count, always on.** Phi counts how many installations set it as the default browser, use Spaces, use Profiles, and that a crash happened. Counts only, with nothing attached that points back to you.
- **Detailed statistics and crash reports, only if you switch them on.** The setting is **Help improve Phi's features and performance** in Settings. Turn it on and Phi sends detailed usage statistics and crash reports, carrying your account identifier. Turn it off and neither is sent; only the anonymous counts above continue.

Crash reports go to Sentry and are kept for 90 days. A crash report can include a memory snapshot of the process that failed, which may incidentally contain fragments of page content or text you had typed. That is one of the reasons the switch is off until you turn it on.

There is no setting that turns off the anonymous baseline. If you want a browser that sends nothing at all, build the open-source client from source.

The [Privacy Policy](https://phibrowser.com/privacy/) is the full and authoritative version of all of this.

You can also narrow what leaves your Mac at all. With **Private AI**, run through [Phi Sentinel](/sentinel/), some of those tasks run entirely on your own machine, so they need no cloud model in the first place.

## Staying in control

Memory is not a black box. You can **view, manage, and delete** what Phi remembers, directly inside Phi.

### Deleting your account and data

You do this yourself, in the app: **Settings → Additional Browser Settings → your name, under You and Phi → Delete account and data**. It removes the account and the data stored with it, on your Mac and on our servers, and it cannot be undone. You do not need to email anyone to be forgotten.

If you have already uninstalled Phi, install it again and sign in to the same account to reach that button. Uninstalling clears what was on your Mac, but it does not close the account. If you never signed in, there is no account and nothing on our side to delete.

### Turning AI off

If you want a plain browser, you can disable all AI features in **Settings → Phi AI**. Turning AI off closes your AI conversations and disconnects any External Data Connectors.

Your Memory is not deleted by this switch, and it stays on your device. If you want to erase what Phi remembers as well, use the clear option on the Memory page; that deletion is permanent and cannot be undone.

## Browsing privately

For sessions that should leave nothing behind on your Mac either, open an [Incognito Space](/incognito/) from the **File** menu. Its history, cookies, and site data live only in memory, AI features sit out entirely, and closing it destroys the session.

## Open source

Phi's macOS client is open source under Apache-2.0, so its behaviour can be inspected rather than taken purely on trust. To be exact about what that covers: the open part is the client we write, and it embeds a Chromium engine that ships as a prebuilt framework. Chromium is itself an open-source project, but reading our client is not the same as having read every line that runs on your Mac.
