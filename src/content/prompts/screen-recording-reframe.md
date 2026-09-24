---
title: "Screen recording reframe prompts: 16:9 to 9:16 without losing the point"
description: "A screen recording reframe prompt tells Vyra what region of the screen matters at each moment, how to place the face inset, and when to crop tight versus show the whole screen."
updated: '2026-09-24'
category: prompts
---

**A screen recording reframe prompt tells Vyra which region of the screen matters at each moment, where to put the face inset, and when to crop tight versus show the whole screen. A 16:9 screen dropped into 9:16 is unreadable. The reframe is a series of crops that follow what you are talking about.**

Minimal:
```
Turn this 16:9 screen recording into 9:16. Crop to the part of the screen I'm pointing at, and keep my face in a corner.
```

Standard:
```
Make a 9:16 version of this 2-minute screen recording. Default crop: the chat panel on the left half of the screen. When I say "look at the timeline," crop to the timeline at the bottom for as long as I am describing it, then return. Put my webcam clip as a circle inset, bottom right, about a quarter of the frame width. Phrase captions above the inset.
```

Full:
```
Reframe this 2-minute 16:9 screen recording to 9:16. Layout: screen recording fills the top two thirds, my webcam clip fills the bottom third, full width, no circle. Crops on the screen recording, driven by what I say: default to the chat panel (left 45% of the screen); "look at the timeline" or "down here" crops to the timeline strip; "top right" crops to the export button area; "the whole thing" shows the full screen letterboxed. Hold each crop at least 3 seconds and move between crops with a 0.4-second ease, no hard jumps. Captions in the gap between the recording and my face, 3 to 5 words, white. When the cursor clicks, add a small circle at the cursor for 1 second. No other graphics. List every crop change with a timestamp.
```

## What each part does

Naming the default crop solves 80 percent of the video; without it, the agent guesses. Trigger phrases mapped to screen regions are the reframe logic, and the agent can find those phrases in the transcript. "Hold at least 3 seconds, 0.4-second ease" makes the crops feel like camera moves instead of glitches. The layout rule (two thirds screen, one third face) is the vertical composition that keeps both readable. The click circle is the only decoration, and it is functional.

## Fixes

- Crop cuts off what matters: "At 0:48 the crop misses the timeline. Widen it to include the full bottom strip."
- Crops jump too fast: "Minimum hold 4 seconds. Ease all moves over half a second."
- Face too big: "Reduce the face section to the bottom quarter."
- Text unreadable: "Crop tighter on the chat panel so the text is at least 24px tall on a phone."
- Wrong default: "Default to the full screen letterboxed. Only crop in when I name a region."

## FAQ

**Circle inset or a full-width face strip?**
Full-width strip if you talk a lot and your expression matters. Circle inset if the screen is the point and you are narrating.

**How does Vyra know where things are on the screen?**
From its scene analysis of the recording plus the regions you describe in words. Describing them as "left half," "bottom strip," "top right" is enough.

**Can I skip reframing and just letterbox?**
You can, and it is unreadable on a phone. Crop to what matters; letterbox only for "the whole thing" moments.

## Related

- /formats/app-walkthrough
- /prompts/reframe-to-vertical
- /prompts/tutorial-captions-and-callouts
- /how-to/repurpose-long-form-to-shorts

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
