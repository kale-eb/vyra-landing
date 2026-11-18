# Search Console gaps, October 2026

Source. Search Console export "Performance on Search", web, last 28 days, pulled 2026-10-28 (top 1,000 queries and 255 pages). The scripts and raw CSVs stayed local and aren't in the repo.

## The short version

- 17,169 clicks and 44,252 impressions in the export. Branded queries ("vyra", "vyra ai", "usevyra", misspellings) are 16,615 clicks and 39,177 impressions. That's 97% of clicks.
- Everything non-branded together is about 3,500 impressions and under 50 clicks.
- The Oct 19 and 20 spike (2,190 and 1,925 clicks) is branded. People saw a video and searched the name.
- Google already shows us for a lot of non-branded topics. We're at position 25 to 55, so nobody clicks. Most of the work is moving existing pages up, plus a few new pages for questions we don't answer yet.

## Gaps, ranked by what we can win

| # | Topic | Impressions | Avg position | Our page | Problem | Done in this branch |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | "Is it free", "is vyra free", "vyra ai free", "is it paid" | about 730 | 1 to 5 | None, lands on home or /pricing | Branded question with no page that answers it in one line. Dozens of one-off follow-ups ("is it free?", "pricing?", "no its not free") look like Google AI Mode conversations. | New /answers/is-vyra-free |
| 2 | "vyra apk", "vyra ai video editor for android", "download", "play store", "windows" | about 650 | 1 to 3 | None | 327 clicks with nowhere to land. "vyra mod apk" means people are looking for unofficial APKs. | New /answers/is-vyra-on-android (also warns off APKs) |
| 3 | Video editor cost and rates ("video editor price per hour", "how much does a video editor cost", 98 variants) | about 515 | 31 | /answers/how-much-does-a-professional-video-editor-cost (pos 25) | The page had no numbers. Every competing page leads with a rate table. | Rewritten with BLS staff pay, sourced freelance tiers, and a cost-per-video table |
| 4 | "How long does it take to edit a 1, 2, 3, 5, 10, 30 minute video" | about 120 | 8 to 11 | /answers/how-long-does-it-take-to-edit-a-video (pos 7.5, 887 impressions, 0 clicks) | Page answered in general, not per length. Its lead also contradicted its own table. | Per-length table and an FAQ entry for each length. Lead fixed. |
| 5 | Title card ("title card generator", "maker", "creator", "animated video title maker") | about 460 | 7 to 9 | /tools/title-card-maker (pos 7.9) | Page 1, bottom half. Title didn't say "generator". The facts box showed "(TODO confirm)" live. | Title and description now use "maker and generator". Added ideas by video type and three FAQs. |
| 6 | Filler words ("remove ums from video", "filler word remover", "remove pauses") | about 40 | 28 to 60 | /tools/remove-silence-from-video (pos 24.5) | The page mentions filler words but has nothing built around them | Added a filler word table with exceptions, plus FAQs |
| 7 | "What is a skit video" | 34 | 8 | /formats/skit | No direct definition question | Added a "What is a skit video?" FAQ |
| 8 | "{tool} mcp" ("clipchamp mcp" pos 3.3, "filmora mcp" pos 3.3, "opus clip mcp", "riverside mcp", "capcut mcp chatgpt", "video editing mcp" pos 24) | about 130 | 9 | None for other tools | We already rank top 3 for "clipchamp mcp" without a page. This confirms family 1 in 12-pseo-content-strategy.md. | Not yet. Needs sourced competitor rows. |
| 9 | Alternatives ("descript alternative" pos 52, "opus clip alternative" pos 54, "submagic alternative" pos 44) | about 860 | 32 | /alternatives/* exist | The pages are fine, but the domain is young and these are contested head terms | No on-page fix. See off-site notes. |
| 10 | Alternatives with no page ("openreel alternative" 25, "recast studio alternative(s)" 25, "satvrn alternative" 14, "rave ai video editor" 48, "davinci resolve shot match alternative" 79) | about 190 | 25 to 50 | None | Small, low competition | Not yet. Needs checked facts per tool. |
| 11 | Prompts ("caption prompt" 38, "motion graphics prompts" 50 across variants, "unboxing prompt", "vlog prompt") | about 140 | 8 to 13 | /prompts/captions, /prompts/motion-graphics | Page 1 bottom or page 2. The PR #24 pages should help once they're indexed. | Wait for PR #24 indexing |

## Found on the way: TODO notes were live

"(TODO confirm)" showed on about 40 live pages. It was in the facts box of every /tools page, in "Example creator (TODO)" on 19 /for pages, and in FAQ answers like "Is there a watermark on the free plan? (TODO verify.)". Google and AI engines read that text.

Fixed in this branch.
- `src/lib/content.ts` strips TODO notes when pages render. It drops TODO facts, TODO sentences, and placeholder lines, then drops any heading left empty. The notes stay in the markdown for you to resolve.
- Five "When to use something else" bullets were removed by hand, because stripping their note would have published an unchecked claim (no SRT export, no translation, no auto face tracking). Put them back once confirmed.
- The empty watermark FAQ was removed from /answers/can-i-try-an-ai-video-editor-free.

## Not problems

- **Low CTR at position 1 on /blog/use-your-ai-subscription (11,524 impressions), /compare/vyra-vs-capcut (9,886), /docs/guide (5,724), /features (3,141).** These are sitelinks under the "vyra" result. People click the main link, so the low CTR is expected.
- **"vyara" (2,720 impressions), "veyra" (2,240), "vayra" (311).** Mostly other things with those names ("veyra nrvideo", a Hungarian YouTuber). We show at position 5 to 7 and that's fine. Don't chase them.
- **"editor price near", "editor price workout", "cheap editor job".** Junk or another product called Editor. Ignore.
- **Old /blog/vyra-vs-* URLs** still get impressions. They already 308 to /compare. Google will catch up.

## Next pages to write, in order

1. **/mcp/video-editors**, the directory from 12-pseo-content-strategy.md, with a row per tool and a source link. "clipchamp mcp" and "filmora mcp" already rank top 3 with no page. Then a short answer page per tool people search ("Does Clipchamp have an MCP server?"), and only for tools with a sourced answer.
2. **/answers/davinci-resolve-shot-match-alternative** (79 impressions). Be careful. Shot Match in Resolve matches color between clips. Vyra's reference style matching covers grade plus pacing, captions, and music. The page has to say what each one does and not claim Vyra is a color tool.
3. **/answers/how-much-does-it-cost-to-edit-a-youtube-video**, only if the rewritten cost page doesn't rank for the YouTube queries by week 4. Otherwise it would cannibalize that page.
4. **Alternatives for Recast Studio, OpenReel, and Rave**, each with facts checked on the vendor's site the way the /compare pages were.
5. **/how-to/make-a-title-card**, if the tool page reaches the top 5 and "how to make a title card" (18) and "create title card" keep showing up.

## Off-site, for the alternatives gap

The /alternatives pages rank 35 to 55 because the domain is new, and better copy won't fix that. What moves them is links from the lists engines already cite. Pitch the Buffer article's author and the lists in 06 with /compare and the PR #24 head-to-heads.

## Questions for Sulan before merge

1. Is there really no Android app on Google Play, and none planned soon? /answers/is-vyra-on-android says "not on Google Play yet".
2. Is it the same account and the same projects on iPhone and on the web? Both new answer pages say so.
3. Does the free plan watermark exports or cap resolution? If you say, I'll add it back to both free pages, since it's what people ask.
4. The cost page cites goLance's rate guide for freelance tiers. That's a marketplace's own guide. Swap it if you know a better source.

## How we'll know

- Week 2 and week 4. Check positions for "is vyra free", "vyra apk", "how much does a video editor cost", "how long does it take to edit a 5 minute video", and "title card generator" in Search Console.
- Targets. The cost page from 25 to the top 10. The how-long page from 7.5 to the top 5. The title card page from 7.9 to the top 5.
