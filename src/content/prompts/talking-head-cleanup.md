---
title: 'Talking head cleanup prompts: pauses, fillers, retakes'
description: >-
  A cleanup prompt removes filler, pauses, and retakes while keeping the
  delivery natural.
updated: '2026-09-24'
category: prompts
---

**A cleanup prompt removes filler, pauses, and retakes while keeping the delivery natural.**

Standard:
```
Clean up this talking head. Remove ums, uhs, long pauses, and any sentence I restart. Keep the best version of each sentence. Keep small natural pauses so it does not feel robotic.
```

Full:
```
Tighten this to a crisp talking head. Cut every pause over 0.4 seconds, every filler word, and every retake (keep the last attempt of each line unless an earlier one is clearly better). Where a cut is jarring, punch in 10% on the second clip instead of a jump cut. Do not touch the section from 1:20 to 1:35, that pause is intentional.
```

Verify: "List every cut you made with timestamps." Users have reported the agent claiming a cleanup it did not fully do. The list makes it checkable in 10 seconds.

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
