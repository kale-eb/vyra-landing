# Directory content plan: from blog to product directory

## The shape

Stop thinking "blog posts". Think "listings". Every page answers one question, is 500 to 1,100 words, has the same named fields in the same order, and links sideways to its siblings. lans.app does this for coworking spaces (287 listings, 248 location hubs, one programmatic guide layer). We do it for video formats, editing skills, prompts, comparisons, and audiences.

The listing template (applies to every section, fields vary by section):

1. Breadcrumb
2. H1 (the question or the entity name)
3. One-sentence quotable answer in bold
4. "At a glance" table (structured fields)
5. Three to six short H2 sections (each under 150 words)
6. "Prompt it in Vyra" block (2-3 copy-paste prompts; this is our differentiator, nobody else has it)
7. FAQ (3-5 Q&As, also in FAQPage schema)
8. Related (3-4 sibling links)
9. One CTA

## Sections and target counts

| Section | URL pattern | Phase 1 | Phase 2 | Eventual |
| --- | --- | --- | --- | --- |
| Product and features (added after Searchable review) | /ai-video-editor, /mcp, /claude, /chatgpt, /cursor, /features/{feature} | 11 | 15 | 20 |
| Best (ranked lists, added after Searchable review) | /best/{query} | 16 | 30 | 50 |
| Answers (Q&A, added after Searchable review) | /answers/{question} | 11 | 40 | 120 |
| Compare | /compare/vyra-vs-{tool} | 13 | 25 | 40 |
| Alternatives | /alternatives/{tool}-alternative | 8 | 20 | 40 |
| For (audience) | /for/{audience} | 10 | 25 | 50 |
| Formats | /formats/{format} | 26 | 50 | 120 |
| How-to (craft) | /how-to/{skill} | 14 | 40 | 100 |
| Prompts | /prompts/{task} | 12 | 40 | 150 |
| Prompts x format | /prompts/{format}/{task} | 0 | 50 | 300 |
| Tutorials (in-app) | /tutorials/{task} | 8 | 25 | 60 |
| Trends | /trends/{trend} | 0 | 20 | rolling |
| Glossary | /glossary/{term} | 30 | 80 | 150 |
| Total | | ~120 | ~375 | ~1,000 |

Phase 1 is roughly six weeks of writing at 20 pages/week. Phase 2 unlocks the programmatic crossings (prompts x format, format x platform) once the base entities exist.

## Section 0a: product and feature pages (see 09-searchable-review.md)

Query-mirroring landing pages. The raw AI answers for "edit videos by describing what I want" cite eleven competitor product pages whose titles say exactly that; we have none. Titles are the user's words, not ours.

- /ai-video-editor: "AI video editor that edits your real footage by chat"
- /features/footage-understanding, /features/ai-captions, /features/beat-sync, /features/motion-graphics, /features/reference-style-matching, /features/rough-cut
- /mcp, /claude, /chatgpt, /cursor: product pages (not docs) titled "Edit videos with Claude" etc. Daydream wins the Claude prompt with a page at /claude.

600-900 words, SoftwareApplication schema, FAQ, three prompts, one demo video.

## Section 0b: /best/{query} ranked lists

One honest ranked list per tracked "best/top" prompt, Vyra included but not always first. Searchable's top content type and the shape every competitor gets cited for. ItemList schema, year in title, "how we ranked" section, quarterly refresh. Phase 1 list of 16 is in 09-searchable-review.md.

## Section 0c: /answers/{question}

Question-titled Q&A pages for informational prompts nobody owns ("why does vlog editing take so many hours", 20k volume, zero brand cited). 400-700 words, the number in the first sentence, FAQPage schema. Phase 1 list of 11 is in 09-searchable-review.md.

## Section 1: /compare/vyra-vs-{tool}

Head-to-head. Fields: verdict sentence, side-by-side table (real footage vs generative, chat editing, MCP, captions, beat sync, motion graphics, style match, export cap, price), "choose Vyra if", "choose X if", 4 FAQs. Migrate the three existing blog posts here.

Phase 1 (ranked by Searchable visibility of the rival): capcut, descript, veed, opus-clip, adobe-firefly (Quick Cut; rank 2 rival, added after review), adobe-premiere, davinci-resolve, canva, runway, kapwing, filmora, invideo, clipchamp.

Note from the Searchable review: Descript, Opus Clip, Kapwing, and DaVinci Resolve 21.1 all ship MCP servers now. "Bring your own AI" is not unique. The differentiator to state is that Vyra's agent gets the editing tools and sees the footage, versus passthrough prompting.

Phase 2: final-cut-pro, riverside, submagic, vizard, chatcut, gling, autocut, wisecut, reap, freebeat, synthesia, pictory, fliki, inshot, vn, imovie, premiere-rush, captions-app, edits-app, jitter, after-effects.

Also 2-way pages we are not in, where AI engines currently cite Fastlane and Descript: /compare/capcut-vs-descript, /compare/opus-clip-vs-vizard, /compare/descript-vs-riverside. Include a "where Vyra fits" box.

## Section 2: /alternatives/{tool}-alternative

Ranked list of 5-7 alternatives with Vyra first, honest reasons someone leaves the tool, table of alternatives, FAQs. Searchable shows "alternatives" and "ranked-list" content types are what ChatGPT and Perplexity cite most.

Phase 1: capcut, descript, veed, opus-clip, invideo, premiere-pro, canva-video, submagic.

## Section 3: /for/{audience}

Who it's for, what they make, the three prompts they use most, a sample workflow, a real creator example, FAQs. Every tracked prompt of the form "best editor for X" maps here.

Phase 1: youtube-creators, vloggers, travel-vloggers, tiktok-creators, podcasters, small-youtube-channels, marketers, founders, claude-users (from the AI-subscription post), chatgpt-users.

Phase 2: content-creators (generic catch-all), musicians, artists (Sulan's lane), coaches-and-courses, real-estate-agents, ecommerce-brands, agencies, ugc-creators, streamers, educators, fitness-creators, faceless-channels, cursor-users, developers (MCP pipeline), photographers, wedding-videographers.

## Section 4: /formats/{format}

The core of the directory. Each format is a "product": definition, at-a-glance table (best for, hook style, pacing, caption style, music, shot list, mistakes), beat-by-beat structure with timestamps, how to shoot, how to edit, prompt it in Vyra, variations, FAQ. Drafts for 26 are in 04-video-formats/.

Categories and the full eventual list:

Talking head: talking-head, talking-head-b-roll, green-screen-commentary, podcast-clip, reaction-video, listicle-talking-head, interview-clip, q-and-a, hot-take, myth-busting, walk-and-talk, car-talk, desk-setup-talk, phone-selfie-rant

Storytelling: storytelling-video, story-time, day-in-the-life-story, before-after-transformation, lessons-learned, origin-story, failure-story, journey-recap, year-in-review, letter-to-past-self

UGC and product: ugc-hook-and-demo, product-demo, unboxing, testimonial, app-walkthrough, founder-build-in-public, get-ready-with-me-product, haul, comparison-review, first-impressions, tutorial-with-product, problem-solution-ad, ugc-testimonial-ad, screen-recording-demo

Relatable and comedy: relatable-video, pov-video, skit, expectation-vs-reality, things-i-wish-i-knew, unpopular-opinion, green-screen-meme, duet-reply, trend-remix

Montage and cinematic: montage, cinematic-b-roll, beat-synced-edit, travel-recap, aesthetic-vlog-montage, product-cinematic, food-cinematic, workspace-cinematic, night-city-montage, hype-reel, sports-highlight, event-recap, wedding-highlight

Vlog: vlog, silent-vlog, weekly-vlog, travel-vlog, study-vlog, studio-vlog (artists), workday-vlog, moving-vlog, cook-with-me, clean-with-me, pack-with-me

Educational: tutorial, explainer, faceless-video, whiteboard-explainer, screen-tutorial, listicle-explainer, book-summary, news-breakdown, deep-dive, mini-documentary, case-study-video

Art and process (Sulan's audience): speed-paint, process-video, studio-tour, commission-reveal, art-timelapse, sketchbook-flip-through, art-supplies-review, before-after-artwork

## Section 5: /how-to/{skill}

Craft guides. Drafts for 14 are in 05-craft-guides/. Full eventual list grouped:

Hooks and retention: write-a-hook, first-three-seconds, pattern-interrupts, edit-for-retention, end-a-video, open-loops

Pacing and structure: pace-a-short-form-video, structure-a-storytelling-video, structure-a-tutorial, plan-a-vlog, script-a-talking-head, script-a-ugc-ad, outline-a-youtube-video

Captions and text: choose-captions, style-captions, place-text-in-9-16, emphasis-words, lower-thirds, title-cards

Cutting: cut-a-talking-head, jump-cuts, punch-ins, j-and-l-cuts, cut-to-music, hide-a-cut-with-b-roll, remove-filler-words, tighten-pauses

Camera and framing: frame-yourself, shoot-b-roll, light-a-talking-head, record-clean-audio, shoot-on-phone, hold-a-phone-steady, shoot-for-9-16, eye-contact-with-camera, background-depth

Vlogging: vlog, talk-to-camera-in-public, coverage-checklist, vlog-audio, edit-a-vlog-down

Motion and graphics: make-motion-graphics, kinetic-typography, callouts-and-arrows, accumulate-and-release, animated-lower-thirds, logo-overlays

Music and sound: choose-music, beat-sync, duck-music-under-speech, sound-effects-sparingly, license-music

Color and look: color-grade-for-social, match-shots, cinematic-look, avoid-mixed-lighting

Repurposing: repurpose-long-form-to-shorts, reframe-16-9-to-9-16, clip-a-podcast, batch-caption-videos

Growth (the "how to grow a following" cluster): grow-on-tiktok, grow-on-instagram-reels, grow-on-youtube-shorts, post-consistently, find-your-niche, read-analytics, hook-rate-vs-retention, repost-strategy, cross-post-without-watermark, build-a-series, batch-film-a-week

## Section 6: /prompts/{task}

The prompt library users asked for in calls (Melanie: "maybe you guys should have a prompts library on your website"; another creator: "if you're just getting started, this is a prompt you can try"). Each page: what the task is, 3-6 tested prompts from weak to strong, what each word in the strong prompt does, what to add if the result is off, FAQs. Drafts in 03-prompting-guides/.

Phase 1 tasks: rough-cut, captions, reference-style, b-roll, talking-head-cleanup, beat-sync, motion-graphics, reframe-to-vertical, highlight-reel, remove-filler, add-music, export-for-platform

Phase 2 crossings /prompts/{format}/{task}: e.g. /prompts/vlog/rough-cut, /prompts/podcast-clip/captions, /prompts/ugc-hook-and-demo/b-roll. Generate from a matrix of formats x tasks, but only publish crossings where the prompt genuinely differs. Thin crossings stay out of the sitemap.

## Section 7: /tutorials/{task}

Step-by-step in the Vyra UI with screenshots and a short video (feeds the video sitemap). Phase 1: upload-and-index-footage, first-rough-cut, add-captions, match-a-reference-video, connect-claude-desktop, connect-claude-code, connect-chatgpt, connect-cursor, export-for-tiktok, fine-tune-in-timeline.

## Section 8: /trends/{trend}

Rolling. "How to edit the X trend": what the trend is, the reference structure, sound, cut map, prompt to recreate it in Vyra with your footage. Short shelf life, so date-stamped titles and a "last updated" field. Publish 2-4 per week when trends are hot; prune from sitemap after 90 days if traffic is dead.

## Section 9: /glossary/{term}

One paragraph definition, one example, one "in Vyra" line. Cheap, high citation rate for "what is X" prompts. Phase 1: hook, retention, b-roll, a-roll, jump-cut, j-cut, l-cut, punch-in, beat-sync, lower-third, kinetic-typography, motion-graphics, color-grade, lut, aspect-ratio, safe-zone, 9-16, ducking, room-tone, talking-head, ugc, pov, cta, pattern-interrupt, open-loop, cold-open, montage, timelapse, hyperlapse, mcp, model-context-protocol, ai-video-editor, conversational-editing, reference-video, style-matching, scene-detection, transcription, word-level-captions

## Internal linking rules

- Every /formats page links to 2 /how-to, 2 /prompts, 1 /for.
- Every /how-to links to 2 /formats, 1 /prompts, 1 /glossary.
- Every /prompts links to 1 /formats, 1 /how-to, 1 /tutorials.
- Every /compare and /alternatives links to 2 /for and the /prompts/rough-cut page.
- Hubs list everything. Footer gets a "Directory" column with the hub links.

## What NOT to publish

- Pages that only differ by a platform name with identical content (e.g. /formats/talking-head-tiktok vs -reels). Make one page with a platform table.
- Prompt crossings that are the same prompt with one word swapped.
- Competitor pricing pages we cannot keep accurate. Fastlane does this; it rots fast. Skip unless we automate checks.
- Anything without a "Prompt it in Vyra" block. That block is the reason an AI would cite us over CapCut for the same how-to.
