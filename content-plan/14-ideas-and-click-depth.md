# Video ideas family and click depth

Written 2026-10-28. Keyword data is from OpenSEO (DataForSEO, US, monthly). Click depth is from a crawl of the live site the same day.

## Why /ideas instead of more /prompts

Creators don't search for editing prompts. They search for ideas.

| Search | US searches/mo | KD |
| --- | --- | --- |
| video editing prompts | 10 | 45 |
| motion graphics prompts | 10 | n/a |
| caption prompt, instagram reel prompts, tiktok video prompts | ~10 each | n/a |
| hook ideas | 3,600 | 11 |
| youtube video ideas | 3,600 | 0 |
| skit ideas | 1,900 | 0 |
| tiktok ideas / tiktok video ideas / tiktok content ideas | 880 / 590 / 260 | 0 to 10 |
| transition ideas | 590 | 0 |
| faceless youtube channel ideas | 590 | 7 |
| vlog ideas | 480 | 0 |
| youtube shorts ideas | 480 | 0 |
| music video ideas | 390 | 0 |
| reel ideas / reels ideas / instagram reel ideas | 320 / 320 / 210 | 0 |
| intro ideas for youtube | 210 | 11 |
| b-roll ideas | 140 | 0 |
| artist content ideas | 140 | 0 |

Niche versions ("fitness reel ideas", "food reel ideas", "small business reel ideas", "travel vlog ideas") are 10 to 30 a month each. They're groups inside the main pages and don't get pages of their own.

Search Console agrees. The written /prompts pages got about 1,100 impressions and 31 clicks in 3 months, with "motion graphics prompts" and "caption prompt" the only prompt queries above 15 impressions.

## The family

13 pages at /ideas/{slug}, one per search in the table, together about 13,000 US searches a month. Each idea on a page has
- why it works, in one or two sentences
- a line to say or put on screen
- a link to its /formats page
- a Vyra prompt that edits it

So the prompt library rides along on pages people search for. Format pages link back automatically through `childLinks` in `src/lib/pseo/links.ts` ("Video ideas in this format"). Ideas pages get ItemList structured data from their "### N. Title" headings.

Gate, same as 11 and 12. A page needs real search demand (100+ a month) and ideas that differ from its siblings. Real examples come only from `reels.json`, with real view counts.

## Not doing

- AI generation prompts ("sora prompts" 1,300, "ai video prompts" 720, "ai video prompt generator" 480). Vyra doesn't generate video (confirmed by Sulan, 2026-10-28), so these searches aren't ours.
- More "{format} {task} prompt" pages. Wait for the week 4 index check on the 174 from PR #24.

## Click depth

From Furkan's workshop (Granola, 2026-10-27). Pages 4 or more clicks from the homepage read as unimportant to Google. Surface important pages in the footer and main nav, the way ElevenLabs uses a large footer, and keep the links in the HTML on page load (no JavaScript that expands them after a click).

Live crawl, 2026-10-28, from the homepage, of all 500 sitemap URLs.

| Depth | Pages |
| --- | --- |
| 0 | 1 (home) |
| 1 | 26 (footer: hubs, product pages, pricing, docs) |
| 2 | 335 (everything a hub lists) |
| 3 | 137 (136 generated prompt step pages, /cursor) |
| Not reached | 1 (/blog/use-your-ai-subscription, hidden from /blog, 11.5k impressions) |

Nothing is 4 deep. Fixed in this branch.
- Footer has a "Video ideas" column. /ideas is 1 click from home and the top 8 ideas pages are 1 click too.
- /cursor and /blog/use-your-ai-subscription are in the footer's Product column.
- Legal links moved under Account to make room.
- A broken glossary link (/glossary/timelapse, a 308) now points at /glossary#timelapse.

Still at depth 3. The 136 generated prompt step pages. That's fine by Furkan's rule. If the week 4 check shows they're indexed but get no impressions, list them on the /prompts hub to bring them to depth 2.

## Other notes from the workshop

- **"Free" keywords.** Furkan says to avoid targeting "free", since it brings the wrong users. PR #26 adds /free-ai-video-editor. Sulan to decide whether to keep it.
- **Star ratings.** ElevenLabs gets review stars in Google from AggregateRating structured data. We removed a placeholder rating in PR #23. Only add it back with real reviews (the App Store shows 5.0 from 4 ratings, which is thin).
- **Resubmit the sitemap** in Search Console after each content push.
