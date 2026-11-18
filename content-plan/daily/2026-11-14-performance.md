# November 14 follow-up performance fixes

Sulan asked to proceed with concrete fixes for the remaining audit issues. This follow-up starts from current origin/main 33962ab9de0722107b54456b19e3cdc95096fca4 after PR #53. Isolated branch codex/homepage-performance-2026-11-14 preserves unrelated work. The earlier November 14 ledger and PR #53 record the native FAQ change and first audit refresh.

## Changes

The existing PostHog initializer waited for browser idle time, but three static SDK imports still put its code in the first script set. Replaced them with a shared deferred loader. Idle startup and early App Store/FAQ events share one initialization promise; custom events wait for the SDK and retain their names/properties. Disabled-key and server execution do not download the SDK. A failed download cannot break navigation or FAQ interaction; a later event can retry. The existing project key/host environment variables and initialization options remain. Vercel Analytics and Meta tracking remain unchanged. No new SDK, project, service or events were added.

Shared LazyVideo already deferred downloads but continued playing after leaving the viewport. A viewport/tab visibility controller now pauses offscreen or background-tab demos, resumes visible demos and guards late canplay events from restarting hidden videos. The existing near-viewport download observer and posters remain. Its cleanup disconnects observers/listeners and pauses video. CreatorCaseStudy has its own visibility management and is unchanged.

## Validation

Production build, TypeScript, relevant ESLint and whitespace checks pass. Tests in scripts/test-marketing-analytics.mjs exercise concurrent early events, unchanged options and payloads, singleton loading, missing configuration, server execution and failed-load recovery. Tests in scripts/test-video-visibility.mjs exercise viewport entry/exit, browser-tab changes, canplay guards, cleanup and the old-browser fallback. These are controlled lifecycle tests, not a browser/device test or proof of production event ingestion. Existing rendered homepage regression checks pass for native FAQs, matching schema, metadata, script scheduling and inner-page breadcrumbs.

| Local build artifact | Before | After |
| --- | ---: | ---: |
| Initial script bytes | 991,186 | 812,679 |
| Initial script gzip estimate | 304,931 | 247,611 |
| Homepage HTML/RSC bytes | 243,703 | 242,600 |

The initial JavaScript decreases by 178,507 uncompressed bytes, approximately 57,320 gzip bytes or 18.8% of the prior initial script estimate. This is deferred work, not removal of analytics. Initial script references contain no PostHog SDK marker. Build-artifact sizes are not field INP, Lighthouse or actual transfer measurements. No claim is made that 301 ms has crossed below 200 ms. No UI browser work was performed because a separate Chrome window and macOS desktop could not both be established.

## Searchable coverage

A targeted sitemap dry run accepted twelve important current URLs. Added those twelve to the Searchable page catalog, increasing catalog coverage from ten pages to twenty-two. The API still initially marks only the homepage tracked, so catalog addition is not represented as recurring monitoring or completed audits. Targeted audits will be requested and their actual result recorded in the PR release record. No old page or prompt was deleted. No paid credits or subscription upgrade was purchased.

Pages added are /pricing, /ai-video-editor-app, /mcp, /chatgpt, /claude, /answers/can-chatgpt-edit-videos, /answers/can-claude-edit-videos, /how-to/add-captions-to-videos-on-iphone, /answers/can-vyra-edit-in-background-on-iphone, /features/reference-style-matching, /features/beat-sync and /best/mcp-servers-for-video-editing. Existing sitemap URLs were verified by Searchable's targeted refresh.

## Remaining audit interpretation

The homepage has no parent breadcrumb hierarchy. No fake crumb was added. Current scripts are async or Next's nomodule legacy compatibility script, with essential CSS retained. No repetitive image tooltips or filler text were added for code-ratio scoring. Current title/canonical/FAQ metadata remain correct. The next targeted scan may discover real metadata or content issues on other pages; report those findings with their actual URLs instead of treating the old dashboard summary as evidence of two open short-title issues.

## Release record

This is the pre-merge ledger. The ready PR's final body will record the exact source commit, passing checks, merge, production verification, IndexNow and actual Searchable audit outcomes. Preserve the distinction between completed local fixes, deployed changes and observed performance. Recheck custom-event coverage on real subsequent traffic; do not send artificial customer events to claim verification.

## Sources

Read the current PostHog codebase-integration guidance and the connector's SDK documentation search before changing loading behavior. Existing initialization options are intentionally preserved rather than adopting new SDK defaults during a performance fix. Read the installed React performance guidance on deferring third-party libraries. Tests use the actual implementation with controlled SDK and video stand-ins. No private customer/backend information is published.
