# Spaces & Profiles

Spaces and Profiles let you keep separate worlds in one browser — work and personal, a side project, a client, a research topic — without juggling windows or logging in and out. They are two layers that do different jobs, and Phi keeps them simple by letting one sit on top of the other.

## The two layers

- A **Space** is a workspace in the sidebar. It has its own name, icon, and color, and its own bookmarks. Switching Spaces re-dresses the sidebar around the task you are in.
- A **Profile** is the isolation layer underneath. Each Profile has its own cookies, history, logins, and extensions — so two Profiles can be signed in to the same site with different accounts at the same time.

The relationship is one-way: **each Space belongs to one Profile, and a Profile can back several Spaces.** Spaces that share a Profile share the same logins and pinned tabs; Spaces on different Profiles are fully separated.

A simple way to hold it: **Spaces organize how things look and feel; Profiles decide what is kept separate underneath.**

## What lives in a Space

- **A name, an icon, and a color.** Pick from a set of SF Symbol icons (house, briefcase, book, and so on) so each Space is recognizable at a glance in the sidebar.
- **Its own bookmarks.** Each Space has an independent set of bookmarks, so a work Space's saved pages do not clutter a personal one.
- **Its own theme (optional).** A Space can use its own color theme or follow your global theme. Switching into the Space applies its theme so the window matches the context you are in.
- **Pinned tabs** are shared across Spaces that use the same Profile, since they belong to the Profile's logged-in session rather than to one Space.

## Creating, switching, and managing Spaces

- **Create** a Space from the Spaces strip in the sidebar. You give it a name and choose which Profile it belongs to — or create a **New Profile** right there if this Space should be fully separate.
- **Switch** between Spaces from the sidebar with a single click. The sidebar's tabs, bookmarks, and theme change to match, and Phi reopens the Space's window if it is not already open.
- **Rename** or **Change Icon** / **Change Theme** from the Space's menu. Choose **Follow Global** to drop a per-Space theme override.
- **Delete** a Space from the same menu. Deleting a Space also removes the pinned tabs and bookmarks that belong to it, and cannot be undone.

## URL Rules: send sites to the right Space automatically

Spaces are most useful when the right pages land in the right place without you thinking about it. **URL Rules** do that: a rule matches a site and opens it in the Space you assign, no matter where you click or type the link.

Open **URL Rules** from the sidebar to manage every Space's rules in one place. Each rule matches by:

- **Domain suffix** — `figma.com` and all its subdomains.
- **Domain** — one exact host, like `www.example.com`.
- **Domain contains** — any host containing a word, like `git`.
- **URL** — a host plus a path prefix, like `example.com/team`.

Set a rule to **Ask every time** instead of routing silently. When a matching link opens, Phi shows an **Open in which Space?** chooser so you can pick — your current Space is marked, and you can keep the page where you are. When several rules could match, the most specific one wins (a longer path beats a shorter one; an exact host beats a wildcard).

## Coming from Arc or Dia

If you used **Arc**, this model will feel familiar: Arc also separates Spaces (tab groups with their own look) from Profiles (the cookies-and-logins isolation layer that can be scoped to one or more Spaces), so the mental model transfers directly. Phi's **URL Rules** are inspired by Arc's Air Traffic Control — Arc's own feature for routing links into Spaces — rather than a copy of it.

If you came from **Dia**, the difference is bigger. Dia dropped Spaces and uses Profiles as its workspace concept, with each Profile opening in a separate window. Phi keeps Spaces as a layer above Profiles, so you switch contexts with one click inside a single window instead of managing a window per context — while still getting full Profile-level separation when you want it.

## How this connects to the rest of Phi

Spaces build on the sidebar workspace described in [Layouts & navigation](/help/layouts/), and per-Space colors use the same palette as [Themes & appearance](/help/themes/). Because Profiles isolate cookies and history, what the assistant can see is scoped to the Profile you are browsing in — see [Privacy & your data](/help/privacy/) for how your data is handled.
