# Content strategy: how to ship this

## Principles

1. Directory, not blog. Pages are entities with fields. Blog stays for announcements and opinion.
2. Every page has a "Prompt it in Vyra" block. That block is the only thing CapCut, Descript, and Opus cannot copy, and it is what makes an AI engine cite us for a how-to query instead of them.
3. Ship in clusters, not singles. A /formats page without its /how-to and /prompts siblings has nothing to link to and gets crawled once.
4. First-party proof on every page: a real prompt, a real frame, a real creator. Searchable's homepage audit flagged zero use cases and zero differentiators in the text; the directory fixes that at scale.
5. Year-stamp titles where the fanout data shows engines append "2026" (comparisons, "best X" pages). Do not year-stamp evergreen how-tos.

## Phase 0 (this week): technical

- Organization, WebSite, SoftwareApplication schema in root layout
- Homepage title to 50-60 chars, canonical on homepage
- Pricing: the price-book experiment (per-user pricing, homepage section removed 2026-07-31) means no canonical price page. Update the "$9.99/month" line in the AI-subscription blog post so engines stop quoting it.
- Searchable tracker or Vercel log drain connected
- Segmented sitemap index scaffold with the existing 10 URLs distributed correctly
- Accept the ~25 relevant suggested prompts in Searchable; reject the image-gen and real-estate ones

## Phase 1 (weeks 1-6): the base entities, ~160 pages

Revised after the Searchable review (09-searchable-review.md). Product, feature, best, and answers pages moved to the front because they map to the highest-volume zero-visibility prompts and to the content shapes engines actually cite. The table below is superseded by the "Revised phase 1 order" in 09; kept for the reasoning per section.

| Week | Ship | Why first |
| --- | --- | --- |
| 1 | /prompts hub + 12 task pages (03-prompting-guides) + /prompts/how-to-prompt-vyra | Direct user request from calls; cheapest to write; unique to us |
| 2 | /compare x12 (migrate 3, write 9) + /alternatives x8 | Highest commercial intent; competitors rank on these today |
| 3 | /formats x26 (04-video-formats) + hub | Core directory; each one is a "how do I make X video" answer |
| 4 | /how-to x14 (05-craft-guides) + hub | Craft cluster; hooks, pacing, captions, framing, vlogging |
| 5 | /for x10 + /tutorials x8 (with videos for the video sitemap) | Maps to "best editor for X" prompts; tutorials feed video sitemap |
| 6 | /glossary x30 + internal link pass + Searchable refresh_sitemap + audit hubs | Cheap citation wins; verify crawl |

Writing capacity: the drafts in this folder cover weeks 1, 3, and 4 already. Weeks 2, 5, 6 need writing.

## Phase 2 (weeks 7-14): programmatic crossings, ~250 pages

- /prompts/{format}/{task}: generate from a matrix, publish only crossings where the prompt text materially differs
- /formats expansion to 50 (art/process cluster for Sulan's audience, more UGC variants)
- /how-to expansion to 40 (growth cluster: grow-on-tiktok, read-analytics, build-a-series)
- /for expansion to 25
- /trends launched at 2-4 per week
- Second Searchable audit; target no topic at 0%

## Phase 3 (month 4+): scale to ~1,000

- /prompts crossings to 300
- /formats to 120
- Competitor-vs-competitor pages (/compare/capcut-vs-descript) with a "where Vyra fits" box
- Quarterly prune: any directory page with zero AI citations and zero human sessions after 120 days comes out of the sitemap (stays live, noindex optional)

## Off-site track (added after Searchable review)

The one unbranded prompt Vyra wins is won entirely because Buffer's July 2026 article ranks Vyra first. Searchable's citation-gap recipe says the gap is usually "these sources do not mention us", and that is outreach, not on-site work.

- Ask Searchable to re-crawl buffer.com/resources/ai-video-tools (its cache predates the update).
- Outreach to the ranked lists engines cite for our prompts: chatcut.io, loopdesk.ai, nemovideo.com, pexo.ai, vidpal.ai, wideframe, thecreatorsassistant.com, techradar, pcmag, zapier.
- YouTube is the most cited domain and Vyra has zero cited videos. Publish tutorials with query-mirroring titles; put them in the video sitemap.
- Answer the r/NewTubers and r/VideoEditing "editing takes too long" threads with the /answers page.

## Distribution loop with Sulan's content

Every /formats and /how-to page links to a real example on instagram.com/sulansart. In return, each new Instagram post gets a "how I made this" link to the matching /formats page in the caption or a comment. This is the flywheel: the directory gives the posts depth, the posts give the directory first-party proof and traffic.

Suggested weekly cadence: 1 new format page, 1 new how-to, 2 prompt pages, 1 trend page, plus one Instagram post that demonstrates one of them.

## Editorial standards for the directory

- Opening sentence must be quotable on its own (an AI will lift it verbatim).
- No page under 400 words, none over 1,200. Listing, not essay.
- Numbers where honest: seconds, word counts, percentages. No "engaging" or "professional" without a number behind it.
- Every claim about Vyra must be true today. No roadmap features.
- One CTA per page, at the bottom. The page's job is to be cited, not to sell in the first paragraph.
- Author line: "By the Vyra team" plus, where relevant, "Example by Sulan Zhang (@sulansart)". Visible attribution is one of Searchable's citation criteria.

## Metrics to watch (Searchable)

- Visibility score: 16.7% now. Target 25% by end of Phase 1, 35% by end of Phase 2.
- Topics at 0%: 5 now. Target 0 by end of Phase 2.
- usevyra.com cited pages: 15 now. Target 80 by end of Phase 1.
- Unbranded prompts with any visibility: 1 of 41 now. Target 15 by end of Phase 1.
- AI crawler hits on /sitemaps/*: unmeasurable now. Connect the tracker first.

## Open questions for Sulan

1. Pricing: with per-user price-book pricing, what can the site say publicly? "Free to start" only, or a from-price?
2. Which creators can be named on /for and /formats pages as examples (with links)?
3. Is there a Vyra YouTube channel for tutorial videos, or should tutorial mp4s be self-hosted for the video sitemap?
4. Do the "vyra-vs" blog posts keep their URLs with 301s, or should both live during transition?
