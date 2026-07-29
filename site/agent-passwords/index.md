---
description: "Let agents sign in with logins from your Bitwarden vault — approval prompts for every request, autofill that keeps secrets hidden, session timeouts, and revocable grants."
---

# Agent Password Manager

Sooner or later, an agent working in Phi runs into a login wall. Pasting a password into a chat is exactly the wrong answer — so Phi has a better one. The **Agent Password Manager** connects agents to your password manager (currently **Bitwarden**) so they can sign in to sites using logins from your vault — and it is designed so that, most of the time, **the agent never sees the password at all**.

It is off by default, every individual request asks you first, and you can revoke any standing approval at any time.

## Why Bitwarden?

Handing an AI agent a path to your passwords is an act of trust, so the vault behind it should not be a black box. Bitwarden is **open source** — its clients and server can be audited by anyone — and it **supports self-hosting**, so you can keep your vault on a server you run rather than anyone else's cloud. That gives you full control of where your credentials live, end to end: your vault on your infrastructure, unlocked on your Mac, released only when you approve. Phi's helper builds on Bitwarden's official SDK, and self-hosted servers are supported when you sign in.

## How secrets stay out of reach

Your vault is not opened inside the browser. Phi ships a **separate helper process** that talks to Bitwarden on the app's behalf — logins for Phi and agent requests are held by that helper, and **passwords never touch the browser process**. The unlocked vault key lives only in the helper's memory and is dropped the moment the vault locks. The helper accepts connections only from Phi itself, and Phi verifies the helper's code signature before trusting it with anything.

On top of that, the default way agents use a login — autofill — keeps the secret away from the agent entirely: Phi fills the page field itself, and the agent only learns that the fill happened.

## Turning it on

The Agent Password Manager lives in the **Developer** tab of Settings, which appears once **Developer mode** is on:

1. Open **Settings → General** and turn on **Developer mode**.
2. In the **Developer** tab, find **Agent Password Manager** and switch on **Bitwarden password manager**.
3. **Log In…** to your Bitwarden account (US, EU, and self-hosted servers are supported, including accounts with two-step login), then unlock the vault with your master password.

When you enable it, Phi may also offer to install the **Bitwarden browser extension** from the Chrome Web Store. That extension is a separate convenience for _you_ — it autofills your logins while you browse normally. Agent requests do not use or need it; you can decline with **Not Now** and agent access still works.

## Every request asks you first

Whenever an agent asks for a credential, Phi shows an approval prompt that names **which agent** is asking and **which site or item** it wants, along with the agent's stated reason. Nothing is released until you answer, and an ignored prompt **denies itself after 60 seconds**.

The prompt gives you real choices, not just OK:

- **Approve** or **Deny** the request.
- Pick how long the approval lasts: **Only once**, **For 10 min**, or **Always**.
- Optionally **apply the approval to all agents** instead of just the one asking (not available for one-time approvals).

If the vault is locked when a request comes in, Phi asks for your **master password** to unlock it first — the password goes straight to the helper and is never stored by the browser.

## Three levels of exposure

Not all requests are equal, and the prompt is honest about the difference. Each request is one of three kinds, color-coded by how far the secret travels:

| Kind                 | What actually happens                                                                                                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 **Autofill only** | Phi fills the saved login into the page itself. The agent triggers the fill but **never receives the username or password**.                                                                                                             |
| 🟠 **Command use**   | The value is released to the agent so a command it runs can use it (for example a database password injected into a CLI's environment). The agent's tooling scrubs it from output, but Phi cannot stop the agent from keeping the value. |
| 🔴 **Full access**   | The saved item — a password, note, card, identity, or key — is shared with the agent directly, which may record it in its context.                                                                                                       |

A remembered approval only covers the kind it was granted for — an autofill-only approval never lets an agent read the password outright.

Autofill comes with an extra safety net: fills are **origin-bound**. If the page an agent is on does not belong to the site the login was saved for, Phi refuses the fill — which is precisely how a misleading page would try to steal a password. Filled passwords also stay masked on the page, even if a "show password" toggle is clicked.

## What agents never get

Some lines are not crossable, no matter what is approved:

- **Two-factor codes are never released.** Handing an agent a live 2FA code would collapse both factors behind one prompt, so that step is always yours — the agent hands control back and you enter the code yourself.
- **Ambiguity releases nothing.** If several vault items match a request, Phi refuses and asks the agent to narrow it down rather than guessing an account on your behalf.
- **Everything is logged, value-free.** Each request is recorded in an audit log — which agent, which site, what kind of access — never the secrets themselves.

The vault serves more than logins — secure notes, cards, identities, and SSH keys can be requested too — but only logins can ever be autofilled into a page; everything else goes through the same explicit approval prompts above.

## Reviewing and revoking approvals

**Agent Credential Approvals…**, in the same settings section, lists every standing approval: which agent, which site, what kind of access, and how long it lasts. Timed approvals expire on their own; **Always** approvals persist until you revoke them — individually or with **Revoke All**.

The sheet also holds an **Allow access to all passwords** switch — a deliberate master grant that lets any agent use any saved login without asking. It is styled in warning red for a reason, and Phi asks you to confirm before turning it on. Leave it off unless you fully understand the trade.

## Vault session timeout

You control how long the vault stays unlocked. In the Agent Password Manager section, pick a **session timeout** — **1 hour**, **4 hours**, **On system lock**, **On browser restart** (the default), or **Never** — and what happens when it fires: **Lock** (requires your master password to resume) or **Log out** (signs the account out entirely).

## Turning it off

The switches genuinely shut things down, not just hide them:

- Turning **Bitwarden password manager** off locks the vault and drops timed approvals. Your account stays signed in on disk for a later re-enable, but every agent request is refused while it is off — even ones covered by an **Always** approval.
- Turning **Developer mode** off is a kill switch: it disables agent access and the Agent Password Manager together. Turning it back on re-enables nothing automatically — each feature must be switched on again by hand.

## What's next

- [The phi-browser Skill](/phi-browser-skill/) — how coding agents drive Phi in their own agent Spaces.
- [Automation & Phi Link](/automation/) — on-demand actions, background tasks, and staying in control.
- [Privacy & Your Data](/privacy/) — where your data lives and how the AI is handled.
