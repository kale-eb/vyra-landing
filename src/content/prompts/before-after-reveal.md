---
title: "Before and after reveal prompts: hold the before, earn the after"
description: "A before and after prompt tells Vyra which clip is the before, which is the after, how long to hold each, what happens between them, and whether to use a split, a cut, or a wipe."
updated: '2026-09-24'
category: prompts
---

**A before and after prompt tells Vyra which clip is the before, which is the after, how long to hold each, what goes between them, and how to transition. The reveal is the payoff; the prompt's job is to make the agent wait for it.**

Minimal:
```
Open on the blank canvas, show a few seconds of process, then reveal the finished painting.
```

Standard:
```
Make a 20-second 9:16 before and after. Before: the blank canvas clip, hold 3 seconds. Middle: 10 seconds of process clips, sped up 4x, one cut every 2 seconds. After: the finished painting on the wall, hard cut on the beat, hold 5 seconds. Music: the uploaded track, with the reveal landing on the first chorus hit. No captions except "before" and "after" as small text.
```

Full:
```
Build a 25-second vertical before and after reveal of the painting. Before: the blank canvas on the easel, hold 3 seconds, small text "day 1" bottom left. Middle: 12 seconds from the process clips, sped up 4x, cut every 2 seconds on the beat, ordered chronologically so the painting visibly fills in. Do not show the finished piece at any point in the middle. Reveal: hard cut to the finished painting on the studio wall exactly on the first chorus hit of the uploaded track, punch in 10% over 2 seconds, hold 6 seconds total, small text "day 9." Then a final 3-second shot of me standing next to it, no text. Music at full volume through the reveal, ducked to 40% on the last shot. No wipes, no split screen, no zoom other than the one on the reveal.
```

## What each part does

"Do not show the finished piece in the middle" is the rule that keeps the reveal a reveal; agents will otherwise pull the best-looking clip early. "Chronologically so it visibly fills in" makes the middle a story. Landing the cut on the chorus hit is the one sync point that matters. The slow punch-in on the reveal is the only movement in the video, which is why it reads. Day labels give a scale of effort without a caption.

## Fixes

- Reveal too early: "Move the finished painting to 0:15 and fill the gap with process clips."
- Reveal too short: "Hold the after for 7 seconds."
- Middle drags: "Speed up the process section to 6x and cut every 1.5 seconds."
- Reveal off the beat: "Snap the reveal cut to the chorus hit at 0:15.2."
- Finished piece leaked in the middle: "At 0:09 the finished painting is visible. Replace that clip with an earlier process shot."

## FAQ

**Hard cut, wipe, or split screen?**
Hard cut on a beat for the strongest reveal. Split screen only if the before and after are the same framing and the difference is subtle.

**How long should the before be?**
Two to three seconds. Long enough to register, short enough that the viewer does not leave before the middle starts.

**Does this work for non-art content?**
Same structure for a room makeover, a haircut, a website redesign, a fitness result. Before, process, reveal, hold.

## Related

- /formats/before-after-transformation
- /prompts/montage-beat-sync
- /how-to/structure-a-storytelling-video
- /features/beat-sync

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
