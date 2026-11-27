---
title: "Why does the Vyra API return FOOTAGE_TOO_LONG?"
description: "The Vyra API documents a three-hour total video-footage limit per video request."
updated: '2026-11-26'
category: answers
api: true
reels:
  - DL3dH-7sK9U
---

**The Vyra API documents a three-hour total video-footage limit per video request. FOOTAGE_TOO_LONG means the supplied videos exceed that total. The current docs say this is detected before analysis or editing, with nothing charged.**

A short finished video can still have too much source footage. Choosing a thirty-second result does not reduce the amount of video sent in the footage list. Count the inputs separately from the planned output.

## Check the source footage first

The [official footage guide](/docs/api#footage) states the three-hour total and a maximum of 200 entries. The [error reference](/docs/api#errors) says to send overlong footage in parts under three hours.

1. Read the error code and message for the request that failed.
2. Check the combined duration of its supplied videos.
3. Choose a smaller set that supports the story, or divide the work into coherent jobs under the documented limit.
4. Keep each job’s intended ending and output requirements clear.
5. Recheck the request before sending it again.

A useful planning brief is to make one edit for each recorded session, using only the footage needed to explain that session. Do not split one sentence across unrelated jobs just to fill a duration allowance.

## Keep output length separate

`max_seconds` sets the longest finished video, from 1 to 1800 seconds. It does not increase the source allowance. Check the current limits instead of treating a very short target as permission to send an unlimited archive.

## FAQ

**Does a short target bypass the footage limit?**
No. The three-hour allowance applies to supplied video footage. The maximum finished length is a separate setting.

**Was I charged for this specific refusal?**
The current error reference says FOOTAGE_TOO_LONG is found before analysis or editing and nothing was charged. Read the returned code so you do not generalize that statement to a different failure.

## Sources

Checked November 26, 2026. The [official API guide](https://www.usevyra.com/docs/api#footage) and [error reference](https://www.usevyra.com/docs/api#errors) support the stated behavior. Examples are planning guidance, not submitted API jobs. The related reel is a finished creator edit.

## Related

- /answers/does-vyra-have-a-video-editing-api
- /docs/api
- /answers/does-vyra-api-require-web-subscription
