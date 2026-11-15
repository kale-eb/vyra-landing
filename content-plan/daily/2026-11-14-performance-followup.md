# November 14 performance follow-up and matched audit

## Scope and baseline

Sulan asked to fix the actual remaining issues, especially performance, and rerun the audit. This release starts from current origin/main 25aa6177d009ce3b874d95218a5d55a95fe9d0c1, after the twenty-guide PR #56. All changes are isolated on codex/performance-followup-2026-11-14. Unrelated testimonial work and open PRs #30–33 remain untouched.

Searchable project bce544f5-576d-469b-809c-54688f7c8028 has 42 catalog pages and thirteen audited pages. The matched before snapshot has 72 open issue records: six critical, two high, 42 medium and 22 low. Thirty-nine are three performance/code-ratio checks repeated across those thirteen pages. The re-audit will use the same thirteen IDs, not expand coverage and call the resulting count a regression. Its dry run accepts all thirteen, with quota 25 of 200 before this audit. No paid allowance or new service was purchased.

## Fixes

MobileFaq imported the Markdown renderer, which pulled react-markdown, remark-gfm and their parsing work across the client boundary. DirectoryPage now renders each answer on the server and passes its React node into the small client accordion. Existing question/source-page properties, one-open tracking, native details controls, visible wording, rich-text links and matching FAQ schema remain. Server-rendered answers add a little HTML/RSC while removing the browser parser. The shared directory route's initial script set shrinks even on routes without the mobile FAQ.

The hero previously copied scroll progress into React state up to 200 steps, reconciling the headline, controls and populated editor mockup as the page scrolled. The playhead now consumes a MotionValue directly. A full-width wrapper translates by the same 4–78% range, so the update changes a transform rather than the left layout property. Reduced-motion mode keeps the original static 4% position. Content and client switching stay present from the first render.

The creator carousel previously advanced every four seconds even below the viewport or in a hidden browser tab. Its interval now exists only while the section intersects the viewport, the document is visible and reduced motion is off. Hover pause and manual navigation remain. Cleanup disconnects observers, removes listeners and prevents late callbacks from restarting an unmounted carousel.

The Favente embed remains site-wide with its original destination, container and design data attributes. Next Script lazyOnload schedules it after page load during browser idle time instead of starting its 63,700-byte uncompressed script while the page hydrates. Vercel Analytics, PostHog and Meta integration behavior/configuration remain. This is a scheduling change; it does not claim the creator widget or analytics were removed.

Four editor-mockup thumbnail sources previously requested original JPEGs despite their small display areas. Next Image now supplies responsive sizes, lazy loading and optimized formats. A local production-server check of representative desktop candidates, one 640px and three 256px WebP requests, returned HTTP 200 and totals 51,030 bytes versus 159,935 original JPEG bytes, 68.1% less for those candidate requests. Actual browser widths, density, format and cache determine transfer. No claim is made that every visit saves precisely that amount.

## Build evidence

The table counts unique script URLs emitted by the production HTML and compresses their local files with gzip. It excludes third-party and later deferred downloads and is not a Lighthouse, actual network or field-INP measurement.

| Route | Initial script gzip before | Initial script gzip after | HTML before | HTML after |
| --- | ---: | ---: | ---: | ---: |
| / | 247,611 | 249,580 | 242,718 | 254,493 |
| /how-to/add-captions-to-videos-on-iphone | 218,898 | 177,376 | 130,326 | 131,258 |
| /answers/why-is-my-video-upload-stuck | 218,898 | 177,376 | 98,490 | 99,021 |
| /mcp | 218,898 | 177,376 | 172,007 | 171,607 |

The checked directory pages lose 140,423 raw script bytes and 41,522 gzip bytes, about 19% of their prior initial gzip estimate. Homepage first-party gzip grows 1,969 bytes, mainly from scheduling the external script through Next Script; that cost is reported alongside the deferred vendor work and optimized images. Homepage HTML grows about 12 KB because responsive image markup includes source candidates. Essential CSS remains 92,596 raw bytes. It is not deferred blindly because the initial layout depends on it. Existing modern scripts are async/defer and fonts are self-hosted. A generic render-blocking flag does not identify a safe stylesheet to remove.

## Actual field baseline

Read PostHog's current querying and web-vitals guidance. The governed catalog in web/app project 348602 is empty; these are exploratory diagnostics. Verified $web_vitals properties and actual host/bot values. For completed November 7–13 UTC on www.usevyra.com and pathname /, excluding detected bots and applying the configured test-account filter, the typed web-vitals runner reports p75 INP 184 ms and p75 LCP 1,975 ms. A matching INP-present query returns 1,977 events. Event counts are samples, not unique visitors; repeated reporting and the device mix still matter. The filter's internal identity coverage was not independently audited.

These values predate this release and are not claimed as its benefit. Searchable's repeated 301 ms figure across thirteen different pages has no exposed field/synthetic methodology here. It cannot be equated to that PostHog cohort or used to claim a causal fix. Broader field results contain a few slow routes but require per-route sample counts before strong conclusions. The public PageSpeed Insights API returned HTTP 429, so no Lighthouse score or independent lab trace was obtained. No quota or credential bypass was attempted.

## Validation

Production build and TypeScript pass. Relevant ESLint passes without warnings after responsive-image conversion. Existing homepage and metadata regression checks, all twenty new-guide route/schema checks, analytics initialization tests and video lifecycle tests pass. New carousel lifecycle tests cover offscreen/visible transitions, hidden tabs, live reduced-motion changes, duplicate prevention, cleanup, late callbacks and the old-browser fallback. A build-artifact regression check budgets the shared directory bundles below 190 KB gzip, preserves the caption guide's eight visible accordions and support link, checks the initial playhead transform, and ensures the creator widget is not a parser-started script while retaining its configuration.

No browser visual or real-device interaction test was performed because separate Chrome-window and macOS-desktop isolation could not both be established. HTTP/build/lifecycle checks do not replace that test. No private conversation, customer identity or backend implementation detail was added to public content.

## Audit interpretation and release record

No fake homepage breadcrumb, duplicate Product/Article types, invented review, security badge, image tooltip or filler was added to clear generic recommendations. The current content uses SoftwareApplication and author/HowTo/FAQ markup where appropriate. Remaining editorial suggestions and performance measurements must be interpreted by URL and evidence. This release does not declare all 72 warnings fixed.

After the ready PR's exact-head checks pass, merge through the normal protected workflow, verify Vercel production and representative live HTML/image/schema/CTA output, then rerun the matched thirteen-page Searchable audit. The PR's final release record will hold its source/merge SHAs, production outcome, audit job ID, completed timestamps, before/after counts and retained warnings. This pre-merge ledger alone is not evidence that the audit or deployment finished. Observe post-release field data after enough completed traffic rather than claiming an instant INP decrease.

## Sources

[Motion values](https://motion.dev/docs/react-motion-value) explains direct style updates without React re-renders. [Next Script](https://nextjs.org/docs/app/api-reference/components/script#lazyonload) documents idle loading. [Next font guidance](https://nextjs.org/docs/app/getting-started/fonts) documents self-hosting. Read installed Vercel React performance guidance and the actual vendor embed source to verify deferred script execution can still locate the existing container. Checked November 14, 2026. These sources support implementation choices, not measured ranking or speed improvements.
