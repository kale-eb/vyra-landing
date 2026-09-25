---
title: 'Talking head cleanup prompts: pauses, fillers, retakes'
description: >-
  A cleanup prompt removes filler, pauses, and retakes while keeping the
  delivery natural.
updated: '2026-09-24'
category: prompts
---

**Cut the ums, the long pauses, and the restarts. Keep the small pauses so it still sounds like you.**

Standard:
```
Clean up this talking head. Remove ums, uhs, long pauses, and any sentence I restart. Keep the best version of each sentence. Keep small natural pauses so it does not feel robotic.
```

Full:
```
Tighten this to a crisp talking head. Cut every pause over 0.4 seconds, every filler word, and every retake (keep the last attempt of each line unless an earlier one is clearly better). Where a cut is jarring, punch in 10% on the second clip instead of a jump cut. Do not touch the section from 1:20 to 1:35, that pause is intentional.
```

Then check it:
```
List every cut you made with timestamps.
```

Users have caught the agent saying it removed retakes when one was still there. The list takes ten seconds to read and shows you exactly what happened.

## Fixes

- Sounds robotic. "Leave pauses up to 0.6 seconds."
- A retake is still in. "At 0:34 the sentence starts twice. Keep only the second attempt."
- Cuts are jarring. "Punch in 10% on every other cut."

## FAQ

**Will it cut a pause I meant?**
It might. Name the sections to leave alone, with timestamps.

**Can I do fillers and retakes in one prompt?**
Yes, the full prompt above does both. Check the list after.

## Related

- /prompts/remove-filler
- /prompts/talking-head-punch-ins
- /how-to/cut-a-talking-head
- /prompts/troubleshooting

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
