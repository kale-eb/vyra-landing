# @sulansart reels on the site

The catalog lives in `src/content/reels.json` (72 reels pulled from the profile on 2026-09-26, with views, dates, and a short title). Pages pick reels with a `reels:` list in frontmatter, and `ReelStrip` embeds them with Instagram's player. Each reel also becomes a `VideoObject` in the page schema and a `player_loc` entry in the video sitemap.

175 pages carry reels. Newsletter issues attach the same way with `newsletter:` and render as cards with the cover and Sulan's own excerpt (`excerpt` in `src/content/newsletter/meta.json`).

Most used reels

| Reel | Views | Used for |
| --- | --- | --- |
| Da_tDQwtc-M | 8.7M | UGC hook and demo, compare pages, product |
| DZwM74ytJxF | 2.9M | Vlog, rough cut, alternatives pages |
| DajEylHSiz8 | 2.1M | Describe the edit, beginners, ChatGPT |
| DL3dH-7sK9U | 641K | Two-clip reveal, hooks, Reels growth |
| DZh-0ccu_cv | 464K | Commission reveal, before and after |
| DK9TNsLsdzM | 395K | Throwback hook |
| DXh77nmuY9l | 262K | Studio tour, b-roll |
| DXh8TpouYGm | 131K | Color wheel trend, motion graphics |
| DY4pVwtu3KD | 21K | Color wheel tutorial made in Vyra, step by step |

To add a reel to a page, add its id under `reels:` in the page frontmatter. To add a new reel, append it to `reels.json` first.
