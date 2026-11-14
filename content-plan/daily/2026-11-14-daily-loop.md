# November 14 scheduled SEO and GEO loop

## Starting state and decision

Run date is November 14, 2026, America/Los_Angeles. Source windows are UTC unless stated otherwise. Read the maintained playbook and latest metadata ledger from fetched origin/main 4c896e014e38e83da61e8a357c222113edcc6683 before making changes. The historical November 8 mobile audit is absent from main; its local untracked copy was read as earlier context. It is not treated as fresh evidence.

The November 9 twenty-page mobile cohort and November 13 twenty-page experiment are already published. PRs #30–33 remain open and were left alone. In particular, the bulk-caption and Claude Code automation topics in #33 are not recreated. All edits belong to the isolated codex/daily-editing-guides-2026-11-14 worktree. Unrelated testimonial/design changes in the main checkout are untouched.

Publish twenty distinct experiments, sixteen native iPhone jobs and four Claude/MCP planning or review jobs. This meets Sulan's increased discovery-surface target without requiring existing query volume for every page. Recent public iPhone release notes give stronger evidence for useful operational guides than another broad best-editor page. The batch tests captions, revision/recovery, timeline cleanup, reusable adjustments, source readiness, text annotations and pre-export review. It does not claim the new pages already have demand or results.

## Fresh Google evidence

Searchable list_projects confirmed project bce544f5-576d-469b-809c-54688f7c8028. Completed November 5–11 versus October 29–November 4 GSC totals show clicks 2,531 to 2,811, up 11.1%; impressions 19,607 to 20,181, up 2.9%; CTR 12.91% to 13.93%; average position 7.2 to 6.6. This is a different rolling window from the November 13 report and not a repeated measurement of its exact period. Global top queries are mostly branded. This does not establish unbranded growth or causal SEO impact.

The 28-day October 15–November 11 overview reports 17,207 clicks, up 1,893 or 12.4% versus September 17–October 14, and 75,940 impressions, up 56%. Position is 5.7, worse by 1.8 versus that earlier window. Launch exposure and changing query mix remain confounders. A rising short window and worse long-window average position can coexist.

Selected pages present in both returned top-25 exports follow. These are examples, not the full portfolio. A missing row is not assumed to have zero traffic.

| Page | Prior clicks | Latest clicks | Prior impressions | Latest impressions |
| --- | ---: | ---: | ---: | ---: |
| / | 2332 | 2582 | 8542 | 9270 |
| /ai-video-editor | 23 | 38 | 1553 | 2015 |
| /prompts/motion-graphics | 6 | 9 | 83 | 112 |
| /ideas/faceless-youtube-channel-ideas | 5 | 6 | 391 | 539 |
| /ideas/skit-ideas | 3 | 5 | 240 | 306 |
| /tools/title-card-maker | 10 | 9 | 283 | 286 |
| /compare/vyra-vs-capcut | 8 | 7 | 977 | 831 |
| /best/mcp-servers-for-video-editing | 10 | 6 | 326 | 391 |

The iPhone landing earns nine clicks on 353 impressions in the latest window. It is not in the prior top-25 response, so no exact increase is claimed. CapCut's position stays near 1.1; a one-click weekly difference is not a new collapse. The MCP list has more impressions but fewer clicks and position moves roughly 6.0 to 7.1. Retain its URL and investigate page-by-query evidence before blaming competing content. The exposed connector's global top queries cannot identify a specific page's lost queries.

## Fresh PostHog evidence

Read the current PostHog querying guidance, verified schemas and property values, and checked the governed web metric catalog, which is empty. These diagnostics are exploratory, not canonical acquisition metrics. Web/app project is 348602, native is 607779.

Google-referred non-homepage website pageview events are 302 on October 31–November 6 and 250 on November 7–13, down 17.2%. Filters are $pageview, $host www.usevyra.com, $pathname other than /, $referring_domain www.google.com, $virt_is_bot false and the project's configured test-account filter. Internal identity coverage was not independently audited. Both periods in this comparison use the same filters. These are event counts, not unique visitors, and the window differs from lagged GSC. Their decline is recorded alongside the GSC increase rather than hidden or equated to it.

On completed November 13, the website has thirteen app_store_clicked events and zero faq_opened events under the host, detected-bot and configured test-account filters. Event schemas include source_page and question/placement where applicable. This is engagement coverage, not thirteen installs. Zero recorded FAQ opens does not prove nobody read the visible answers. There is no new FAQ-caused acquisition result.

Verified native production customer action taxonomy and queried November 7–13 with environment production, traffic_class customer and configured test-account exclusion. Returned operation counts are 934 Undo, 26 caption-style changes and 37 adjustment additions. These are repeated manual operations, not unique people, failures, successful edits or question counts. They support choosing relevant app workflows, but do not prove search demand. No customer identifiers or operational implementation details are included in the public pages.

Current private prompt text was not re-established in this pass. Earlier same-day bounded trace retrieval yielded no usable question corpus. Do not report these editorial FAQs as questions extracted from private conversations or treat operation labels as customer prompts. Anonymous operation summaries are the internal evidence used here. Native and web outcomes are not joined into a conversion funnel.

## AI answers, fanout and fixed cohorts

Refetched all five separately tracked US iPhone prompts without changing tracking. Each returns twelve answers across four dates and three engines. The newest returned samples are November 14 UTC, or November 13 Pacific evening, so they are not a new post-publication evaluation of today's batch.

| Fixed mobile prompt | Mentions / returned answers |
| --- | ---: |
| Best AI video editing apps for iPhone | 0 / 12 |
| Camera-roll editing from a text prompt | 3 / 12 |
| Captions on iPhone | 0 / 12 |
| Reference Reel style matching | 5 / 12 |
| Editing while the iPhone app is backgrounded | 0 / 12 |

These are response-level brand mentions, not recommendation share, rank or traffic. Keep this cohort separate from the original baseline. No prompt was added, renamed, paused or deleted. The weak captions/general-app/background results remain unresolved. More pages are a bounded discovery experiment, not an immediate fix to those scores.

Fresh seven-day unbranded fanout returns 71 prompts and 631 model retrieval sub-queries. Visible themes still include comparisons, Claude/ChatGPT capabilities and editing time. The captions prompt has two distinct sub-queries, three raw occurrences, mainly asking for Apple/iMovie/Clips official caption guidance. This supports keeping the existing primary caption guide and its accessibility-versus-exported-caption explanation. That guide already covers Live Captions, Photos imports and built-in chat, so those answers were not republished as new URLs. New caption pages handle genuinely different problems such as names, track-wide style, overlapping speakers and music interference. Generated-video suggestions remain outside scope. Fanout and suggestions are hypotheses, not human search-volume measurements.

## Sources and claim verification

Checked the current App Store listing/version history, Caleb's mobile and headless-MCP posts, the public MCP docs, and Apple's optimized-storage guidance. Native release 0.1.8 supports History via the clock and export-size choices; 0.1.7 supports shared caption styles and adjustment layers; 0.1.5 supports Ripple and deleting empty gaps; 0.1.4 supports Elements. The MCP docs support asset/timeline inspection, visual/transcript search, frame capture and editing. Caleb's writing is the source of truth for no-browser operation and multi-project/library access.

Each page has claim-level links and a Sources explanation checked November 14. User-confirmed mobile facts remain 100 initial free credits and free 720p watermarked exports, with App Store Plus/Pro distinct from the web three-day trial. No Android, generated video footage, automatic speaker identity, automatic sticker tracking, karaoke mode, tested success rate or unverified exact button path was added. Example briefs are suggestions for supplied footage, not executed product tests. Real creator reels are related examples, not proof that these particular workflows were tested on an iPhone.

A possible all-photo slideshow brief was held because exact native still-photo import behavior was not independently verified in the primary sources. A documented Elements workflow took its place. Dedicated iPhone walkthrough recordings remain a useful future proof project. This hold did not reduce today's twenty useful URLs.

## Page index and overlap review

The companion 2026-11-14-daily-loop-pages.json records every URL, reader, job, demand hypothesis, overlap decision, source, media ID and word count. Twenty pages each contain five concrete steps, a distinct choice table and original example brief, review guidance, three visible FAQ answers and primary sources. Sixteen use mobile CTA/FAQ rendering; four use the existing MCP/web presentation. Sixty new FAQ answers are added. Existing question/CTA tracking is preserved; the MCP article FAQs do not imply mobile accordion events.

All twenty are linked from /how-to and the relevant /ai-video-editor-app or /mcp parent. Five established guides gain six contextual inbound links. The closest overlap pairs were reviewed explicitly. Undo recovers saved project state while post-export revision distinguishes editable projects from delivered files. Gap removal handles empty timeline space while the prior pause guide handles silence inside a clip. B-roll retrieval selects a specific insert while shot inventory checks overall coverage. Track styling differs from spelling/speaker review. Each pair cross-links where useful. Monitor actual query overlap after launch and consolidate if the evidence supports it.

| New URL | Workflow |
| --- | --- |
| [/how-to/undo-video-edits-on-iphone](https://www.usevyra.com/how-to/undo-video-edits-on-iphone) | undo video edits on iPhone |
| [/how-to/remove-gaps-between-clips-on-iphone](https://www.usevyra.com/how-to/remove-gaps-between-clips-on-iphone) | remove gaps between clips on iPhone |
| [/how-to/apply-effect-to-multiple-clips-on-iphone](https://www.usevyra.com/how-to/apply-effect-to-multiple-clips-on-iphone) | apply an effect to several clips on iPhone |
| [/how-to/correct-caption-names-on-iphone](https://www.usevyra.com/how-to/correct-caption-names-on-iphone) | correct names in video captions on iPhone |
| [/how-to/style-all-captions-on-iphone](https://www.usevyra.com/how-to/style-all-captions-on-iphone) | give every caption the same style on iPhone |
| [/how-to/caption-two-speakers-on-iphone](https://www.usevyra.com/how-to/caption-two-speakers-on-iphone) | caption a video with two speakers on iPhone |
| [/how-to/caption-video-with-background-music-on-iphone](https://www.usevyra.com/how-to/caption-video-with-background-music-on-iphone) | caption speech over background music on iPhone |
| [/how-to/prepare-icloud-videos-for-editing-on-iphone](https://www.usevyra.com/how-to/prepare-icloud-videos-for-editing-on-iphone) | prepare iCloud videos for editing on iPhone |
| [/how-to/revise-video-after-export-on-iphone](https://www.usevyra.com/how-to/revise-video-after-export-on-iphone) | change a video after exporting it on iPhone |
| [/how-to/replace-clip-in-video-on-iphone](https://www.usevyra.com/how-to/replace-clip-in-video-on-iphone) | replace one clip in a video on iPhone |
| [/how-to/make-vertical-and-landscape-video-versions-on-iphone](https://www.usevyra.com/how-to/make-vertical-and-landscape-video-versions-on-iphone) | make vertical and landscape video versions on iPhone |
| [/how-to/shorten-video-without-speeding-up-speech-on-iphone](https://www.usevyra.com/how-to/shorten-video-without-speeding-up-speech-on-iphone) | shorten a video without speeding up speech on iPhone |
| [/how-to/add-end-credits-to-video-on-iphone](https://www.usevyra.com/how-to/add-end-credits-to-video-on-iphone) | add end credits to a video on iPhone |
| [/how-to/add-song-lyrics-to-video-on-iphone](https://www.usevyra.com/how-to/add-song-lyrics-to-video-on-iphone) | add song lyrics as text on iPhone |
| [/how-to/change-music-without-changing-video-cuts-on-iphone](https://www.usevyra.com/how-to/change-music-without-changing-video-cuts-on-iphone) | change music while keeping video cuts on iPhone |
| [/how-to/highlight-detail-with-stickers-on-iphone](https://www.usevyra.com/how-to/highlight-detail-with-stickers-on-iphone) | highlight a detail with stickers on iPhone |
| [/how-to/review-ai-video-edit-with-claude](https://www.usevyra.com/how-to/review-ai-video-edit-with-claude) | review an AI video edit with Claude |
| [/how-to/find-b-roll-in-your-footage-with-claude](https://www.usevyra.com/how-to/find-b-roll-in-your-footage-with-claude) | find B-roll in your footage with Claude |
| [/how-to/make-two-video-openings-with-claude](https://www.usevyra.com/how-to/make-two-video-openings-with-claude) | make two video openings with Claude |
| [/how-to/make-shot-list-from-footage-with-claude](https://www.usevyra.com/how-to/make-shot-list-from-footage-with-claude) | make a shot list from existing footage with Claude |

## Validation and publishing record

Production build, TypeScript, relevant ESLint, how-to voice lint and whitespace checks pass. All twenty prerendered routes pass the batch checker for one H1, exact canonical, matching visible FAQ answers and schema, five matching HowTo steps, real media metadata, platform-specific trial/free facts and CTAs, internal destinations, parent/hub links and sitemap entries. Existing homepage-audit and metadata regression checks pass. The initial checker assumed every page had a mobile accordion; that assumption was corrected for the four ordinary MCP article pages, whose visible answers/schema already matched. No user-facing feature was changed to satisfy the checker.

New guides have roughly 487–588 body words. The overlap diagnostic is a review aid, not an originality or ranking guarantee. Full content and link diffs were reviewed. No browser visual or actual iPhone interaction test was performed because separate Chrome-window and macOS-desktop isolation could not both be established. Existing Vercel Analytics and PostHog remain unchanged. No paid tool, trial or outreach was activated.

This is the pre-merge publishing record. The ready PR's final release record will identify the exact source commit, passing required checks, merge SHA, production deployment outcome, live route/schema checks and IndexNow result after they complete. This document alone does not establish that publication has finished.

## Review dates and next run

Treat these twenty pages as a separate November 14 experimental cohort. Review November 21, November 28 and December 12 Pacific with GSC lag allowed. Preserve the November 9 and November 13 cohort dates. Separate impressions, clicks, referrals, FAQ activity, outbound App Store clicks, installs and successful edits. No CTA/install or FAQ/acquisition causality is established.

Next prioritize qualified queries and page-by-query evidence for the MCP list and CapCut comparison. Improve the existing motion-graphics guide if its queries keep growing. For the new operational guides, capture dedicated walkthroughs and check actual reader questions before expanding near-overlapping subtopics. Continue the broader brief backlog without reusing the pending PRs' topics. Do not reuse today's pre-publication AI sample as evidence that this batch changed model answers.
