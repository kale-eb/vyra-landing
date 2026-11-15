# November 15 mobile homepage tap investigation

## Scope

Sulan asked which mobile homepage taps are slow and to fix them. She explicitly authorized an isolated headless browser instead of a visible Chrome window and separate desktop. Work is isolated on codex/mobile-taps-2026-11-15 from origin/main f893141. Unrelated testimonials and other PRs are preserved.

## Field evidence and limits

The prior investigation's completed November 7–13 UTC PostHog window found mobile homepage p75 INP 264 ms across 1,324 INP-bearing events, versus desktop 80 ms across 641. The pooled 184 ms figure hid the mobile problem. Marketing hostname/path and detected-bot filters were applied; internal identity coverage was not independently audited. These are event samples, not unique visitors. Historical records did not identify specific interaction targets, so the named controls below are reproduced laboratory findings, not a claim of historical target attribution.

## Reproduction

A fresh headless Chrome profile emulated Pixel 5 touch/viewport at 10x CPU slowdown against production. It is not an actual iPhone or a field INP measurement. SDK scripts/configuration loaded normally; synthetic analytics ingestion and outbound signup/App Store navigation were blocked. No customer events or signups were deliberately generated.

| Click | Production baseline | Controlled Meta manual-only run |
| --- | ---: | ---: |
| Menu open | 168 ms | 504 ms |
| Menu close | 168 ms | 80 ms |
| Claude selector | 248 ms | 120 ms |
| ChatGPT selector | 240 ms | 72 ms |
| Vyra AI selector | 192 ms | 96 ms |
| Music sound toggle | 248 ms | 120 ms |
| Creator carousel | 184 ms | 112 ms |
| First FAQ | 152 ms | 144 ms |
| Second FAQ | 80 ms | 120 ms |

Values are Event Timing click entries with interaction IDs, one run per condition. No statistical significance or guaranteed per-user speedup is claimed. Startup/network timing varies between runs.

Long Animation Frame attribution showed Meta's automatic document-click processing using about 74–94 ms on the three slow controls, in addition to first-party handlers. The manual-only test changed only the vendor setting before initialization, retaining explicit PageView and Lead calls. The initial menu remained vulnerable to SDK startup: the controlled run overlapped approximately 207 ms of PostHog recorder initialization plus Meta configuration work. This startup issue is not reported as fixed. Session replay, PostHog autocapture, Vercel Analytics and advertising conversion events are retained.

## Changes

Meta Pixel now uses its documented Manual Only mode before init. This removes the additional automatic button/metadata collection; explicit PageView on load/navigation and explicit CTA Lead events remain. This is a deliberate change to automatic collection, not a claim that every tracking behavior is identical.

The editor mockup is memoized. The hero typewriter can update its text without rebuilding the populated timeline/video mockup; selecting a different client still updates its props and preview. MotionValue playhead animation remains supported.

## Checks

Production build, TypeScript, touched-component ESLint, Meta delayed-SDK/navigation/conversion regression, existing marketing analytics, carousel lifecycle, video visibility, homepage schema/metadata and directory audit checks pass. The existing twenty-guide check reports twenty pages, sixty FAQs and no errors. Local headless taps returned no page errors, with click durations below 200 ms; local lacks production PostHog configuration and is therefore only a functional check, not a like-for-like performance comparison.

Raw temporary traces are /private/tmp/vyra-taps-production-slow.json, /private/tmp/vyra-taps-manual-meta.json and /private/tmp/vyra-taps-local-fixed.json. They contain only public homepage labels and script attribution, no internal user data.

## Sources checked November 15

- [Meta Pixel Advanced, Automatic Configuration](https://developers.facebook.com/documentation/meta-pixel/advanced). Documents setting autoConfig false before init, while retaining explicit PageView and custom conversion calls. Current vendor SDK confirms this opts out of AutomaticSetup.
- [PostHog Web Vitals](https://posthog.com/docs/web-analytics/web-vitals). Field metrics must be assessed over real visits; laboratory interaction timings are not interchangeable with rolling field p75.

## Release

Pending ready PR, passing remote checks and production verification. Searchable's unexplained 301 ms and its audit issue count are not treated as corrected by these laboratory results. Reassess mobile field p75 over comparable completed windows after deployment.
