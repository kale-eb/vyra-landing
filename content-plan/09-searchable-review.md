# Searchable review of the plan (2026-09-24)

I ran the plan against three things in Searchable: its own guidance docs (AEO score criteria, citation-gap recipe, content-type guidance, prompt strategy), the raw AI answers for the prompts we lose, and the exact competitor URLs those answers cite. Verdict first, then evidence, then the changes.

## Verdict

The plan is aimed at the right target. The directory sections match the content types Searchable says get cited (comparison, alternatives, how-to, ranked list, topic guide) and the page template hits every AEO score component. It has three structural gaps that the raw answer data exposes, and one off-site lever the plan underweights. All four are fixable inside the same architecture. Changes are listed at the bottom and applied to 02 and 06.

## What Searchable's docs say a page needs (and how the template scores)

Searchable's AEO score is weighted: structured data 25%, answer format 25%, citation worthiness 20%, semantic richness 20%, AI accessibility 10%.

| Component | What they look for | Our template | Status |
| --- | --- | --- | --- |
| Structured data | Organization, Article, FAQ, HowTo, Product schema | Per-page JSON-LD in 01-sitemap-architecture | Covered |
| Answer format | Direct answer first, question headings, FAQ, summary box, definition lists | Bold quotable sentence, H2 questions, FAQ, glossary | Covered |
| Citation worthiness | Author bios with credentials, cited sources, update dates, get cited by authoritative sites | "By the Vyra team" line only | Gap: no author entity, no outbound citations |
| Semantic richness | Entity-rich language, define terms, glossary, cover related subtopics, topic clusters | Glossary + cross-linking rules | Covered |
| AI accessibility | Clean HTML, fast, no ad clutter | Static Next.js pages | Covered once INP is fixed |

Two template additions: a real author (Sulan, with a bio page and Person schema, linked from every page) and 2-3 outbound citations on how-to pages (platform docs, a study, a creator example). Searchable calls out "expert author bios" and "proper sourcing" explicitly.

Searchable's prompt doc also says: "Reusing your SEO keywords as prompts is not a good AEO strategy," and "Create content specifically targeting zero-mention prompts." That is the plan. The prompt pyramid they recommend (branded, category, problem, adjacent) maps to our sections: compare and alternatives (category), answers and how-to (problem), glossary and formats (adjacent).

## What the raw answers reveal

I pulled the full AI responses and source URLs for four lost prompts. This is what wins each one.

### "I want to edit videos by just describing what I want" (17k volume, 0% for us)

ChatGPT cites eleven product landing pages whose titles mirror the query: "AI Video Editor: Edit Footage with a Prompt" (Luma), "Edit Video by Describing It" (Soku), "Edit Video by Just Asking" (Pluged), "Edit videos with natural language" (PromptCut), "Free AI Video Editor: Edit Video by Chat" (ChatCut), "Claude is now your video editor" (Vidova). Perplexity cites descript.com/video-editing ("Edit Video by Typing") and kapwing.com/ai/text-based-video-editor.

We have no page whose title says what Vyra does in the words the user uses. The homepage title is "Vyra - AI Video Editor". Gap: query-mirroring product pages.

### "Which video editors work with Claude and ChatGPT" (branded intent, we got 1 of 6 responses)

Cited: rendley.com/products/mcp, opus.pro/mcp, kapwing.com/help/about-the-kapwing-mcp, daydreamvideo.com/claude ("Edit videos with Claude"), daydreamvideo.com/blog/can-you-edit-videos-with-claude-or-chatgpt, tryselects.com/mcp, descript.com/webinar/Edit-video-in-Claude-or-ChatGPT, vidpal.ai/blog/claude-vs-chatgpt-for-video-editing-2026. Our /docs/mcp got 6 citations across 300 responses.

Three facts that change the plan: Descript, Opus Clip, Kapwing, and DaVinci Resolve 21.1 now all have MCP servers, so "bring your own AI" is no longer a unique claim and the compare drafts had it wrong (fixed). Daydream wins with a page literally at /claude. And the winning content is a product page plus a question-titled article, not a /for/ audience page.

### "Best AI video editor for YouTube creators in 2026" (our one unbranded win, 33%)

Perplexity mentioned Vyra twice and both times the source was buffer.com/resources/ai-video-tools. I checked the live article: Buffer updated it on 2026-07-22 and ranks Vyra first, calling it "the most consistent performer" with a "built that way, not retro-fitted" quote. Searchable's cached copy is from March and predates the update, so Searchable does not yet know Vyra is on that page.

That single third-party article is the entire source of our unbranded visibility. Every other citing source for this prompt is a competitor's own ranked list (chatcut.io/blog/best-ai-video-editor-2026, loopdesk.ai/blog/best-ai-video-editor-for-youtube, nemovideo.com/blog/best-ai-video-editor-youtube-2026, pexo.ai, vync.ai, wideframe). Searchable's citation-gap recipe says this directly: "The gap is almost always 'these sources do not mention us', not 'our page is not good enough'. This is outreach and PR work."

### "Why does my vlog editing take so many hours" (20k volume, nobody cited)

Cited: invideo.io/faq/why-does-editing-social-media-videos-take-so-long, gling.ai/blog/how-long-does-it-really-take-to-edit-a-youtube-video, vidpal.ai/blog/how-long-does-it-take-to-edit-a-video-2026, plus Reddit and YouTube. Nobody owns it. The winning shape is a question-titled FAQ page with a number in it ("5.5 to 9.5 hours for a 10-minute talking head").

Gap: a question-and-answer section for informational prompts.

### What CapCut and Descript actually get cited for

CapCut's 132 cited URLs are not blog posts. They are /explore/beat-sync, /tools/add-subtitles-to-video, /features/automatic-video-subtitles, /help/how-to-use-auto-cut, and programmatic ranked lists like /resource/top-6-autocut-agents-for-travel-vloggers and /resource/top-5-autocut-agents-with-auto-captions. Descript's 51 are /video-editing, /captions, /tools/video-caption-generator, /tools/youtube-video-editor, /clips, and /blog/article/best-ai-video-editor.

Both run the same four layers: feature pages, task-named tool pages, help articles, and ranked lists. Our plan had how-to, compare, alternatives, for, formats, prompts. It was missing feature pages and ranked lists, which are the two layers that get cited most.

## Coverage map: the 41 unbranded tracked prompts

| Prompt (short) | Volume | Covered by the original plan | Needs |
| --- | --- | --- | --- |
| Vlog editing takes so many hours | 19,947 | partial (/how-to/vlog) | /answers/ |
| Best editing software for vloggers | 19,260 | /for/vloggers (not a list) | /best/ |
| Fastest AI editor for quick turnarounds | 19,195 | no | /best/ + product page with the 35-min benchmark |
| Edit raw footage into finished videos fast | 19,064 | no | product page |
| Edit videos by describing what I want | 17,372 | no | product page |
| Generate motion graphics from text prompts | 17,136 | /how-to + /prompts | add /features/motion-graphics |
| Apply a reference video's style | 16,803 | /prompts/reference-style | add /features/reference-style |
| Conversational editing vs traditional | 15,091 | no | /answers/ |
| Best tools for automated beat-syncing | 14,898 | no | /features/beat-sync + /best/ |
| Where can I upload raw footage for AI editing | 14,729 | /tutorials (partial) | product page |
| Editor that understands my footage | 13,151 | no | /features/footage-understanding |
| Add captions to 50 videos quickly | 13,087 | /prompts/captions | /features/ai-captions with batch section |
| Can AI understand what's in raw footage | 12,681 | no | /features/footage-understanding + /answers/ |
| How accurate is AI transcription for captions | 12,247 | no | /answers/ with first-party accuracy numbers |
| Which tools have beat-sync features | 12,179 | no | /features/beat-sync + /best/ |
| AI editors for travel vlogging | 9,993 | /for/travel-vloggers | /best/ |
| Video formats AI editing supports | 9,980 | no | /answers/ (docs) |
| Tools for automatic scene detection | 9,910 | no | /features/footage-understanding + /best/ |
| Editors that integrate with external LLMs | 9,866 | /for/claude-users | /mcp product page + /best/ |
| Editors with best customer support | 9,766 | no | /answers/ (low priority) |
| Small YouTube channels | 9,037 | /for/small-youtube-channels | /best/ |
| Automate TikTok editing workflow | 8,102 | /for/tiktok-creators | /answers/ or workflow page |
| Best AI editor for YouTube creators | 5,399 | /for/youtube-creators | /best/ |
| Top AI editors for content creators | 4,579 | no | /best/ |
| Best editors for music video production | 4,339 | no | /best/ |
| Can AI generate motion graphics from text | 3,862 | /how-to | /answers/ |
| Fastest way to add captions | 2,996 | /how-to + /prompts | /features/ai-captions |
| Best editors for Shorts and Reels | 2,501 | /for/tiktok-creators | /best/ |
| Sync cuts to music beats automatically | 2,322 | /how-to/choose-music | /features/beat-sync |
| Editors for reference-based style matching | 2,199 | /prompts/reference-style | /best/ + /features/ |
| Which editors work with Claude and ChatGPT | 302 | /for/claude-users | /claude, /chatgpt, /mcp + /best/ |
| AI editor that syncs to music | 179 | no | /features/beat-sync |
| Free trials available / try for free | n/a | no | /answers/ (pricing-dependent) |
| Podcast clips, TikTok and Reels editors, caption generators, motion graphics generators, scene detection tools | n/a | /for pages | /best/ |
| Scene detection on poorly lit footage, beat sync across genres | n/a | no | /answers/ |

Count: 12 prompts had no page at all, 14 were mapped to a /for/ page when the engines cite ranked lists, 9 need a feature or product page, 8 need a Q&A page. Zero were fully covered in the shape engines cite.

## Changes to the plan

### 1. Add a feature and product layer (the biggest gap)

Top-level pages whose H1 and title mirror the query:

- /ai-video-editor: "AI video editor that edits your real footage by chat"
- /edit-video-by-describing-it (or make this the H1 of /ai-video-editor)
- /features/footage-understanding: "An editor that understands what is in your footage" (transcript + scene analysis + search)
- /features/ai-captions: word-level, phrase, batch across projects
- /features/beat-sync
- /features/motion-graphics
- /features/reference-style-matching
- /features/rough-cut (long footage to first draft, with the 35-minute benchmark)
- /mcp: "Video editing MCP server for Claude, ChatGPT, and Cursor" (product page, not docs)
- /claude: "Edit videos with Claude" (Daydream's exact winning pattern)
- /chatgpt: "Edit videos with ChatGPT"
- /cursor: "Edit videos from Cursor"

Each is 600-900 words, SoftwareApplication or WebPage schema, FAQ, three prompts, one demo video (feeds the video sitemap). Own child sitemap: /sitemaps/product.xml.

### 2. Add /best/ ranked lists (14 prompts)

Honest ranked lists where Vyra is included, not always first. Searchable lists "Ranked List" as its top content type and every competitor's cited pages are these. Phase 1 set, one per tracked "best/top" prompt:

ai-video-editors-for-youtube-creators, ai-video-editors-for-content-creators, video-editing-software-for-vloggers, ai-video-editors-for-travel-vlogging, video-editors-for-shorts-and-reels, video-editors-for-tiktok-and-reels, video-editing-platforms-for-small-youtube-channels, ai-video-editors-for-podcast-clips, beat-sync-video-editors, ai-caption-generators-for-video, motion-graphics-generators-for-social-video, ai-scene-detection-tools, video-editors-that-work-with-claude-and-chatgpt, fastest-ai-video-editors, ai-video-editors-for-music-videos, video-editors-for-reference-style-matching.

Template: verdict sentence, "how we ranked" (criteria, tested on the same footage), numbered list of 7-10 with one paragraph and a best-for line each, comparison table, FAQ. ItemList schema. Year in the title. Update quarterly (Searchable: "update content regularly").

### 3. Add /answers/ Q&A pages (8+ prompts)

Question-titled pages, 400-700 words, direct answer in the first sentence with a number, FAQPage schema. Phase 1: why-does-vlog-editing-take-so-long, how-long-does-it-take-to-edit-a-video, conversational-editing-vs-traditional-editing, can-ai-understand-raw-footage, how-accurate-is-ai-transcription, what-video-formats-does-ai-editing-support, can-ai-generate-motion-graphics-from-text, does-beat-sync-work-for-every-genre, does-scene-detection-work-in-low-light, how-to-automate-a-tiktok-editing-workflow, can-i-try-an-ai-video-editor-free.

The transcription accuracy page needs a first-party number. Run 20 clips through Vyra, measure word error rate, publish it. That is the kind of original data Searchable says gets cited.

### 4. Off-site track (new, and it is where the one win came from)

- Buffer already ranks Vyra first. Ask Searchable to re-crawl that URL (the cache is stale), and ask Buffer to link to /claude or /mcp rather than the homepage.
- Get into the ranked lists that engines cite for our prompts: chatcut.io, loopdesk.ai, nemovideo.com, pexo.ai, vidpal.ai, wideframe, thecreatorsassistant.com, techradar, pcmag, zapier. Searchable's recipe: "That page is the outreach target."
- YouTube is the single most cited domain (141 citations on 9/24) and Vyra has zero cited videos. Publish tutorial videos with query-mirroring titles ("Edit a video by describing it", "Edit videos with Claude"). Same videos go in the video sitemap.
- Reddit is cited 28 times. r/NewTubers and r/VideoEditing threads on "editing takes too long" are where the vlog prompt gets answered.

### 5. Template fixes

- Add a Person author entity (Sulan) with bio page and Person schema on every page.
- 2-3 outbound citations on /how-to and /answers pages.
- Add /compare/vyra-vs-adobe-firefly (Firefly Quick Cut is rank 2 competitor and adobe.com jumped to 213 citations on 9/24; our plan only had Premiere).
- Correct MCP cells in compare drafts (done): Opus Clip, Kapwing, and DaVinci Resolve have MCP servers; CapCut has a Codex-only integration.

### 6. Prompt catalog

Searchable recommends 20-30% competitor-named prompts and a mix of what, how, why, which. Add: "Vyra vs Daydream", "Vyra vs ChatCut", "Vyra vs Rendley", "best video editing MCP server", "edit video with Claude Code", "how to make a talking head video", "how to write a hook for TikTok", "how to make a vlog" (to measure the format and how-to sections), plus the 25 relevant suggested prompts already listed in the audit.

## Revised phase 1 order

| Week | Ship |
| --- | --- |
| 0 | Schema, title, canonical, tracker, author entity, sitemap index; ask Searchable to re-crawl the Buffer URL |
| 1 | Product and feature layer: /ai-video-editor, /mcp, /claude, /chatgpt, /cursor, 6 feature pages |
| 2 | /best/ x16 and /answers/ x11 |
| 3 | /compare x13 (add Firefly) and /alternatives x8 |
| 4 | /prompts hub + 12 task pages + prompting guides |
| 5 | /formats x29 and /how-to x14 |
| 6 | /for x10, /tutorials x8 with videos, /glossary x40, link pass, refresh_sitemap, audit hubs |

Weeks 1 and 2 moved to the front because they map to the highest-volume zero-visibility prompts and to the content shapes engines actually cite. The formats and how-to sections are still the long-term moat, but they answer adjacent prompts, not the commercial ones we are losing today.
