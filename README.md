# 🚀 Sigma Static RSS Reader 

![Status](https://img.shields.io/badge/build-vite%207.x-9b5de5?style=for-the-badge) ![Deploy](https://img.shields.io/badge/deploy-github%20pages-00bbf9?style=for-the-badge) ![Mood](https://img.shields.io/badge/vibes-maximum-ffd60a?style=for-the-badge)

> This repo is big draco energy. Plug in, mash build, ship feeds. No cap. My homie swears the front end is unhackable, fr fr.

## 💽 What’s the Drop?
- Static React RSS flex built on Vite + TS. Fetches 🔥 headlines via `rss-parser`.
- Ships to GitHub Pages on cron + push, so your news drip never sleeps.
- `public/feeds.json` stays refreshed with `scripts/fetch-rss.js`; YouTube vids get auto-thumbs like it’s 4K magic.

## 🧠 Stack Flex
| Layer | Sauce |
| --- | --- |
| Frontend | React 19 + React Router 7 |
| Styling | Tailwind-ready CSS with room for drip |
| Build Tool | Vite 7 + TS incremental build |
| Fetch Ops | Node parser script, timeout-hardened |

## ⚙️ Boot Sequence (Terminal Sauce)
```bash
npm install          # pull the drip
npm run dev          # regen feeds + ignite Vite @ localhost:5173
npm run build        # feeds + tsc -b + production vibes in dist/
npm run preview      # flex the static output
npm run lint         # keep ESLint happy, stay valid
npm run fetch-feeds  # manual RSS reload, no server
```

## 🗂️ Folder Lore
- `src/main.tsx` — bootstraps the sigma tree; `src/App.tsx` routes the hype.
- `src/components/` — UI atoms & flex cards; keep ‘em lean.
- `src/pages/` — real estate for routed screens.
- `src/hooks/` — stash data logic and effects; zero spaghetti.
- `public/` — static payload + `feeds.json` that CI drops.

## ✅ Glow-Up Checklist
- Push clean lint, pass build, commit like a pro (`Add feed pagination`, not `stuff lol`).
- If you remix UI, drop screenshots in the PR for the squad.
- Manual QA? Mention the flows you ran, especially YouTube thumbnail sauce.
- Need tests? Spin Vitest + RTL specs under `src/__tests__/`.

## 🌐 Deploy Aura
- GitHub Actions triggers on `main` push + cron (every 4h). Fail the build, block the drip.
- Keep the fetch script sturdy; timeouts already guard the squad, but watch logs for sus feeds.

## 🎯 TL;DR
Clone the repo, spin `npm run dev`, bask in the RSS sigma wave. Merge responsibly, stay legendary.

```
         _______
       _/       \_
      / |  HIP   |\
     /  |  VIBE  | \
    /   | THUMBS |  \
   /    |  UP!   |   \
  /      \_______/    \
 /         | |         \
/__________| |__________\
|__________   __________|
           | |
           | |
           | |
           | |
          /   \
         /_____\   👍
```
