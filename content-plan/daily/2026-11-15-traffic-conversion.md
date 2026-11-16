# November 15 traffic and signup fixes

Sulan asked why the content was not producing traffic and signups and authorized fixing the supported blockers. This is an existing-page conversion and accuracy release, with no new public URLs. Starting main was 95fbb0e. Work is isolated on codex/traffic-signup-fixes-2026-11-15; unrelated testimonial work is untouched.

## What the data supports

PostHog web/app project 348602. Completed UTC weeks November 8–14 and November 1–7. Ordered person funnels, 24-hour conversion window, detected bots and configured test accounts excluded. Internal-identity coverage has not been independently audited. These are exploratory event queries, not governed metrics.

| Directory-content funnel | November 1–7 | November 8–14 |
| --- | --- | --- |
| People viewing a directory article | 676 | 890 |
| Subsequently reaching app /signup | 45 | 47 |
| Subsequently firing server user_registered | 28 | 34 |
| Reader-to-registration rate | 4.14% | 3.82% |

First step is a www.usevyra.com $pageview whose path matches ^/(how-to|answers|prompts|ideas|compare|best|tools|features|formats|for|tutorials)(/|$). Second step is app.usevyra.com /signup; third is user_registered. Readers rose 31.7% and associated registrations 21.4%; conversion rate fell 0.32 percentage points. This includes old articles and all acquisition sources. It does not establish that recent SEO pages caused the registrations.

For 60 known new mobile-guide paths published across November 9, 13 and 14, the latest-week funnel recorded 38 people and two subsequent app_store_clicked events on those paths. Exposure differs by publication date and the sample is small. These are outgoing store clicks, not installs or successful edits.

All non-home marketing pages recorded 1,547 people, 134 reaching signup and 82 reaching server registration. This is a different population from the directory funnel. Client user_signed_up counts differ from server registration counts and must not be combined.

The separate app-wide signup-to-activation funnel was 2,061 signup visitors, 1,174 registrations and 484 first_edit_completed people. It is not an SEO-content cohort.

Aggregate query evidence is retained locally in /private/tmp/vyra-conversion-funnel-evidence.json. No customer identities or private prompts are published.

## Blockers observed and fixed

- Directory navigation hid the call to action below the small-screen breakpoint. It now remains visible, including with long breadcrumbs at 320 pixels.
- Non-mobile guides had no signup action beside the answer. They now have a tracked web signup link; iPhone pages retain App Store links. Support and API pages retain their task-specific actions.
- Optional Instagram embeds appeared before instructions, adding substantial mobile scrolling. Instructions and visible FAQs now precede those embeds. Media and its structured data are retained.
- The short search description could replace a longer opening answer. The full opening answer now appears at the top without repeating it in the body.
- Sixteen comparison platform rows said Vyra was browser-only. They now identify web and the native iPhone app, with links to the App Store and Caleb's release post. Generated head-to-head pages inherit their source platform corrections.
- The CapCut comparison and alternative pages contained stale no-chat/no-template assertions. The comparison now cites current official EditPilot and CapCut × Codex documentation and distinguishes desktop functionality from the native iPhone workflow.
- Several exact speed claims lacked an accessible underlying test artifact. Removed these measurements from affected copy. The automated-time-savings answer now teaches a repeatable comparison rather than claiming a percentage saved.

This is a focused correction of Vyra platform facts and the reviewed CapCut workflow. Other older competitor feature tables have not received a complete new audit.

## Observed layout change

Isolated headless Chrome, 375 × 812 viewport, temporary profile, analytics and third-party embeds intercepted for measurement. Production baseline compared with the local production build, with fonts loaded.

| Page | Before | After |
| --- | --- | --- |
| iPhone caption guide, first instructions | Y 2817 | Y 1232 |
| Motion graphics prompts, first example | Y 1562 | Y 705 |
| Directory mobile navigation action | Hidden | Visible |

These are reading-distance changes, not a measured INP improvement or a conversion-lift claim. Additional checks at 320 and 1280 pixels with JavaScript disabled confirm that primary links remain usable without hydration and do not overflow.

## Measurement after release

New web_signup_clicked records source_page and placement (navigation, header, footer) in existing PostHog and Vercel Analytics. app_store_clicked retains the same properties and now supports navigation placement. Destinations and campaign parameters are unchanged. An outbound signup click is not a registration. An App Store click is not an install.

Compare completed seven-day windows after release and reassess at fourteen days. Use the same page cohort, platform and acquisition source; examine registration and first-edit outcomes separately. Page-level clicks do not prove FAQ attribution. No new analytics service was added.

## Discovery and authority limits

No verified robots, canonical or noindex block was found in the checked sample. That does not establish that Google has indexed every page. The available Searchable tool does not expose a verified current URL Inspection report or a page-by-query export, so exact Google coverage and cannibalization remain unresolved. Low source citation presence is a separate discovery/authority constraint; template fixes alone do not establish new external recommendations.

Searchable audit issue counts and crawl volume are not registrations. Do not publish decorative schema, invented experts, fake reviews or speed benchmarks to satisfy audit heuristics. Preserve existing stable prompt cohorts.

## Sources checked November 15

- https://apps.apple.com/us/app/vyra-ai-video-editor/id6808889012 supports native iPhone editing, templates and references.
- https://www.usevyra.com/blog/vyra-mobile supports native/reference-sharing workflow.
- https://www.usevyra.com/docs/mcp supports connected-agent editing.
- https://www.capcut.com/tools/edit-pilot supports instruction-driven editing on PC.
- https://www.capcut.com/tools/capcut-x-codex supports its documented desktop connected workflow; availability varies.
- https://developers.google.com/search/docs/appearance/ai-features supports ordinary crawlable, useful content and accurate structured data rather than special AI schema.

## Validation and release record

Production build, TypeScript, scoped ESLint, content voice checks, performance boundaries, existing homepage/metadata checks, the existing 20-guide/60-FAQ checker, new button-event tests and new rendered-page checks pass. The rendered check covers 563 directory entry pages, including canonicals, indexability, opening answers, CTA intent and media ordering. Headless mobile checks cover native, prompts, generated comparison and support paths; no page errors were observed. No new footage, benchmark or customer result is claimed.

Publish through a ready pull request after inspecting passing checks. The PR closing release record will contain the final commit, merge, deployment, representative live checks and existing IndexNow workflow outcome. IndexNow acceptance establishes submission, not indexing. Do not mark this release live until those checks have completed.
