# Gap round 2 (2026-09-24): what Searchable still showed missing, and what closed it

## Signals used

- Per-prompt visibility on 2026-09-24: 13 of 50 prompts have any mention. Every unbranded win is Perplexity-only and traces to Buffer's roundup. Nothing has changed on ChatGPT or AI Overviews yet because nothing is deployed.
- Sentiment write-up (ChatGPT): positives are the conversational interface and the feature set. Negatives: "lacks customer reviews and testimonials" and "pricing details for premium plans are not prominently displayed".
- All 1,949 cited URLs, sorted by how many answers used them. After Buffer and the PCMag list, the most-cited pages are competitor feature and tool pages, not articles:

| Cited page | Answers using it |
| --- | --- |
| descript.com/video-editing (Edit video by typing) | 12 |
| opus.pro/ai-video-editor | 12 |
| canva.com/features/beat-sync | 11 |
| synthesia.io/tools/ai-motion-graphics | 11 |
| descript.com/captions | 8 |
| canva.com/video-editor/ai | 8 |
| veed.io/tools/add-subtitles, veed.io/tools/auto-subtitle-generator | 7 each |
| capcut.com/explore/beat-sync | 7 |
| canva.com/features/add-subtitles-to-video | 6 |
| echowave.io/tools/beat-sync | 6 |
| opus.pro/agent/workflows/ai-motion-graphics-generator | 6 |
| runway.com/product/ai-video-editor | 6 |

- Vyra's own help docs (via the Vyra MCP) for first-party facts: Deepgram transcription, 720p proxies, browser-side export, export presets and resolutions, MP4 or WebM, caption render modes and manual styling options, templates and styles, code-based motion graphics with presets, Pexels and Freesound stock, reference video analysis, layouts, effects categories, beat sync via BPM and onsets, multicam sync via transcript.

## Gaps and what closed them

| Gap | Evidence | Closed by |
| --- | --- | --- |
| No task-named tool pages | Top cited competitor URLs are /tools/ and /features/ pages named after the job | /tools/ section, 18 pages (add subtitles, auto caption generator, beat sync, motion graphics generator, edit by typing, remove silence, cut to music, reframe to vertical, podcast clip maker, highlight reel, Shorts, TikTok, Reels, trimmer, add music, lower third, title card, PiP) |
| No reviews or testimonials | Sentiment negative on every engine | /reviews page reading src/content/reviews.json with Review and AggregateRating schema; seeded with Buffer's public quote; candidate user quotes listed in reviews-candidates.md pending permission |
| Pricing not prominent | Sentiment negative | /pricing page (built earlier), pricing in llms.txt, footer link, pricing table on all five product pages |
| "Templates & Effects Library" listed as a gap on two topics | Searchable topic analysis | /templates section (Short Talking Head, Long Podcast, Vlog) plus template and style facts on tool pages |
| Pages not structured like listings | Sulan's request to match lans | Facts box (definition list) at the top of every page, driven by `facts:` frontmatter or derived from format fields; tool, template, and new /for pages carry explicit Best for / Input / Output / Time / Works with / Price rows |
| No machine-readable site map for agents | AEO practice | /llms.txt generated from content: one line per page with title and description |
| Thin audience coverage | Phase 2 list | 10 more /for pages: musicians, coaches, real estate, UGC creators, streamers, fitness, photographers, wedding videographers, developers, artists |
| Semantic richness | Searchable AEO score component | Glossary doubled to 80 terms with In Vyra lines |
| Founder TODOs answerable from docs | Help docs | Export formats, resolutions, caption modes, indexing behavior resolved; accuracy number, low-light, translation, card-at-signup still yours |

## Still open (needs you)

- Accept the 25 relevant suggested prompts in Searchable and add prompts for the new sections ("add subtitles to a video automatically", "best beat sync video editor", "AI motion graphics generator", "Vyra templates"). The MCP connection is read-only for prompts.
- Reviews: message the users listed in reviews-candidates.md for permission. Each approved quote is one JSON entry.
- Remove the AggregateRating in layout.tsx once /reviews carries real ratings.
- Confirm the template and style list in the app matches the three template pages and two styles named in the docs.
- Videos for /tools and /tutorials pages; each one feeds the video sitemap automatically once `video:` is set.
