# Vyra's daily SEO and GEO playbook

Drafted November 9, 2026. This is the working standard for the daily run. Read it before researching, writing or releasing content. Improve it when new evidence changes the way we work.

## What we are trying to earn

People should find Vyra when they describe an editing job, even when they have never heard the name. A person with clips in Photos should be able to find a useful answer, understand that Vyra has a native iPhone app, and finish the job.

The page needs to help the person who lands on it. Being easy for an agent to extract should come from clear writing and concrete answers.

## Authority and boundaries

Sulan authorized the daily 8 a.m. Pacific research, content and release loop, including commits, pushes, ready PRs, passing-check merges and deployment through the existing Vercel flow. This replaces the earlier requirement for a fresh review before each merge. It does not authorize unrelated changes, force pushes, bypassing checks, new paid services, outreach or publishing private conversations.

Use a task-owned branch from current remote main. Preserve unrelated work and inspect open PRs before recreating anything. Existing unpublished material is a candidate, not automatically approved factual evidence.

Browser work must use both a separate Chrome window and a separate macOS desktop from Sulan's current workspace. If the tools cannot reliably establish both, use connectors and local tools. Record the missing source rather than touching her browser.

## The daily research habit

1. Read yesterday's ledger, unresolved questions, current product facts, the voice guide and changes merged since the last run.
2. Check Searchable for the same prompt cohorts and engines. Read actual answers and sources behind important changes. Save the prompt, locale, engine, date and cited URL. Separate branded, generic mobile, generic editing and MCP questions.
3. Review completed-day and rolling 7-day website data. Add a 28-day view when a week is too noisy. Verify host, timezone, person counts, bots, test users and attribution. Do not sum daily unique users into weekly uniques.
4. Review mobile and web product events for jobs people actually attempt. Distinguish a tool invocation from a satisfied user. Check whether telemetry changed before treating a change as demand.
5. Look for recurring questions in authorized internal chats. Aggregate themes and preserve the sample window. Never put a private prompt, customer identifier or unapproved quote into public copy.
6. Compare growing and declining pages. Use query impressions, positions and CTR when available to separate lower demand from weaker ranking or a weak snippet. A missing referrer does not prove a direct visit.
7. Recheck the product capability behind each candidate against current official sources or the app. Caleb's written posts are the starting point for workflow behavior. User corrections take precedence over stale posts.

If Searchable or chat text is unavailable, say exactly which observations are missing. An error, empty export or zero sessions is not evidence of zero demand. Do useful work with the sources that are available and carry the limitation into the daily report.

## Decide what deserves a page

Every candidate gets a brief with its reader, job, evidence, existing overlapping URL, verified capability, original contribution, intended next action and uncertainty.

Prefer a new page when the person needs a different answer or workflow. Prefer an update when the question belongs naturally inside an existing page. Related language does not always mean a different intent.

Publish the 20–30 daily pages requested when the useful briefs and verification support them. Larger families need genuine differences in inputs, workflow or output. Never manufacture search volume, customer demand or a test result to fill the quota. A supported shortfall is better than pages that compete with each other and teach the same thing.

Do not change every weak page at once. Keep stable comparison pages where practical and log the release date. Review changes after 7, 14 and 28 days; indexing and citations can take longer than a day.

## Write like Sulan

Read `content-plan/voice.md` and a current piece of Sulan's writing before the first draft. Carry over her observations and plain verbs, not every typo or chat abbreviation.

Her voice notices the actual problem. Editing at 3 a.m. after class. The clip where the painting finally looks finished. A caption sitting over the thing someone was trying to show. Those details matter more than an adjective about AI.

Use short paragraphs that explain one thing. Write directly to someone trying to get a video posted. Let the story or instructions determine sentence length. Read the draft aloud and cut any sentence that sounds like a launch announcement.

No em dashes, colons in prose, rhetorical questions, dramatic fragments, hype, slogans or "not X, but Y" constructions. Use first-person experience only when it is documented. Never invent a personal story, performance number, review, screenshot or result.

An example of the intended tone

> You filmed the whole process, but the finished painting only gets half a second at the end. Hold that shot longer. Cut the part where nothing changes, and give people time to see what you made.

## Make the answer easy to read and retrieve

- Give the direct answer in the opening paragraph. Name Vyra and the relevant platform when they are part of the answer.
- Use one clear H1 and descriptive H2s. Put one task or decision in each section.
- Put important facts in ordinary server-rendered text. Do not hide the useful answer inside an image, video or interactive widget.
- Use numbered steps for a sequence and tables only when they make a choice easier.
- Keep a paragraph understandable outside its surrounding page. Name the feature instead of relying on "this" or "it" throughout an answer.
- Put the limitation next to the claim it qualifies. State the relevant free-export restrictions beside the download or export explanation.
- Use examples that show what to do next, including what to ask when the first draft is wrong.
- Link naturally to the parent page, complementary tasks and the appropriate app destination. Keep one primary URL per intent.
- Reuse real media only where it illustrates the topic. Do not call a desktop edit an iPhone screen recording.
- Keep metadata and JSON-LD consistent with the visible text. Schema describes the page; it does not prove that the claim is true.

## FAQs are a writing and measurement habit

Choose questions from real support patterns, observed search questions or a concrete unresolved decision in the workflow. Label hypotheses in the research ledger. Give each answer enough context to stand alone, including platform and restrictions where relevant.

Do not add the same long generic FAQ to every page. Move a question to a dedicated page only when it needs a distinct explanation. Keep visible answers and FAQ structured data aligned.

Page clicks cannot identify which FAQ earned a search visit. Record the exact question wording, date, source query, changed answer and page. Compare matching query impressions/clicks over time when GSC is accessible. Link a question to a relevant section when helpful and track supported interactions without pretending that scrolling, expansion or copying proves the answer caused a visit.

Google's historical FAQ rich-result eligibility is restricted, and HowTo rich results were discontinued. Do not promise either appearance for Vyra. Useful FAQ text can still answer questions regardless of rich-result eligibility.

## Product truth

Verify these again when product information changes.

- Vyra edits footage people supply. It does not generate video footage. Other generated media capabilities must be described separately.
- The confirmed native mobile product is the iPhone app. Google Play review materials do not establish a public Android launch.
- At the time of this draft, new mobile accounts receive 100 free credits and free exports are 720p with a watermark. Paid mobile plans are Plus and Pro through the App Store.
- Web has a 3-day trial and no ongoing free tier. Do not use web plan prices to describe an iPhone subscription.
- The MCP is headless. Do not bring back the old foreground-tab or Connect MCP requirements. Local agents can still require the user's computer for local orchestration and uploads.
- Verify precise mobile controls before naming buttons. If only the chat workflow is confirmed, explain that workflow instead of inventing a menu path.
- Use real quotes only. Keep the established first-name treatment for testimonials. Do not add unsolicited self-ranking or relationship disclosures contrary to Sulan's prior decisions.

## What current search documentation changes about our habits

[Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) says ordinary SEO foundations apply and no special AI schema is required. Prioritize helpful text, crawl access, internal discovery and consistency between markup and content. Treat clear answer blocks as an editorial practice, not a guaranteed ranking formula.

[Google's scaled-content policy](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content) focuses on large amounts of low-value content created to manipulate results. A larger batch must earn its size through different, useful answers. Automation is a production method, not evidence of quality.

[Google's FAQ and HowTo announcement](https://developers.google.com/search/blog/2023/08/howto-faq-changes) explains the restricted FAQ appearance and discontinued HowTo rich results. Preserve accurate schema where appropriate without selling a rich-result benefit.

[Bing's AI visibility documentation](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/) distinguishes grounding-query context and citation share. If accessible, inspect query-to-page evidence alongside Searchable and referrals. A grounding query is not the original user's exact prompt, and a citation is not a click.

Revisit authoritative guidance weekly and whenever a claim matters to a release. Read original documentation before a marketing summary. Label correlational studies as correlations, and controlled findings by their actual scope. Do not repeat fixed "GEO lift" percentages as a promise for Vyra.

## Release and verification

Review copy for intent overlap, unsupported claims, usefulness and voice. Run the voice lint and read the actual text; a clean lint cannot judge whether a paragraph sounds human.

Run the production build, relevant lint/type checks and rendered-output checks. Verify every new route, canonical, sitemap entry, related link and FAQ/HowTo extraction. Check mobile CTA destination and tracking. Use a representative visual check only within the user's browser constraints. Report when no visual test was possible.

Review the full diff. Commit only task-owned files, push, create a ready PR and inspect current checks. Merge when required checks pass, then verify the production deployment and all newly published routes. Use the existing IndexNow flow and distinguish accepted submission from indexing. Fix ordinary failures rather than bypassing them.

## End each run with a ledger

Record the date and timezone, sources queried and unavailable, comparison windows, observations versus hypotheses, candidate decisions, changed FAQs, URLs created and updated, checks, PR and merge SHA, deployment evidence, IndexNow outcome and next review dates.

The user-facing brief should say what mattered, why we chose the work and what actually shipped. Include holds and meaningful uncertainties. Avoid a list of every tool call.
