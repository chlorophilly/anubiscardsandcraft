# Notes for every Claude session working on this repo

This repo is the Anubis Cards and Craft website (anubiscardsandcraft.com, GitHub Pages, custom domain via CNAME). More than one Claude chat works on it, so this file is how they stay in sync. Read it first, and add a line to the change log at the bottom whenever you change something another session should know about.

**This repo is public, and this file is served at anubiscardsandcraft.com/CLAUDE.md.** Write nothing here that should not be public: no player personal data, no internal disputes, no money figures, no keys.

## Who works on what

| Session | Owns |
|---|---|
| Website session (Claude Code) | The whole site: home page, `th/`, `ja/`, `events.js`, `motion.*`, design, new pages. |
| Hyperia campaign session ("Mochi", Claude) | Data and wording on `hyperiacity-prerelease-party/` only, mainly `pods.js`. Writes a brief for anything bigger. |

If a task touches the other session's area, leave it and note it in the change log (or ask Philly), so two chats never edit the same file at once.

## Site basics

- Static HTML, no build step. Home is `index.html`, with `th/` and `ja/` folders; language also via `?lang=en|th`.
- Events data lives in `events.js`; motion in `motion.css` and `motion.js`; images under `img/`.
- Writing rules for all visible copy: no dashes of any kind (spell out "10:00 to 10:45"), spell Prerelease as one word, Thai first with English beside it.

## Hyperia City Prerelease Party pod finder

- Page: `hyperiacity-prerelease-party/index.html` (live at anubiscardsandcraft.com/hyperiacity-prerelease-party/). Event: Sun 25 Oct 2026, Siam@Siam Design Hotel.
- Data: `hyperiacity-prerelease-party/pods.js` = `window.HYPERIA_PODS = { updated, morning: [[no, name]...], afternoon: [...] }`.
- **The list is final.** Registration closed on 21 Oct 2026. Change it only when Philly asks.
- Rules for `pods.js`:
  - Only the Ravensburger Play display name and the player number. Never real names, emails, phone numbers or payment info. Never commit a registration sheet export.
  - Numbers never change once given (M001 onward for morning, A001 onward for afternoon, by registration time).
  - A name left out of `pods.js` was left out on purpose. Never add a name from the registration sheet that is not already in `pods.js` without Philly's say.
- Page copy: no player counts or "seats left" wording, and never say which store runs which pod.
- Search must keep working for: `Oh'c` and `ohc` → M005, `m064`, `pipe` → M034, `สบ` → A016, `dingdingdong` → M010.
- Page look follows the Hyperia City kit (sky blue, marigold, navy, cream; Big Shoulders Display, Kanit, Montserrat), not the shop's black and gold.

## Change log (newest first)

- 2026-10-21 Mochi: pod list marked final, pod note now says registration is closed and points to Pack Rush and the Core Constructed side event. Added this file.
- 2026-10-21 Mochi: afternoon players A060 to A064 added.
- 2026-10-21 Website session: Hyperia pod finder page built, linked from Big events on the home page.
