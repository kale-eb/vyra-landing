---
title: "Screen recording reframe prompts: 16:9 to 9:16 without losing the point"
description: "A screen recording reframe prompt tells Vyra what region of the screen matters at each moment, where the face inset goes, and when to crop tight."
updated: '2026-09-24'
category: prompts
---

**Say which part of the screen matters at each moment, where your face goes, and when to show the whole screen. A 16:9 screen dropped into 9:16 is unreadable. The reframe is a series of crops that follow what you're talking about.**

Minimal:
```
Turn this 16:9 screen recording into 9:16. Crop to the part of the screen I'm pointing at, and keep my face in a corner.
```

Standard:
```
Make a 9:16 version of this 2-minute screen recording. Default crop is the chat panel on the left half of the screen. When I say "look at the timeline," crop to the timeline at the bottom for as long as I am describing it, then return. Put my webcam clip as a circle inset, bottom right, about a quarter of the frame width. Phrase captions above the inset.
```

Full:
```
Reframe this 2-minute 16:9 screen recording to 9:16. Screen recording fills the top two thirds, my webcam clip fills the bottom third, full width, no circle. Crops on the screen recording follow what I say. Default to the chat panel (left 45% of the screen). "Look at the timeline" or "down here" crops to the timeline strip. "Top right" crops to the export button area. "The whole thing" shows the full screen letterboxed. Hold each crop at least 3 seconds and move between crops with a 0.4-second ease, no hard jumps. Captions in the gap between the recording and my face, 3 to 5 words, white. When the cursor clicks, add a small circle at the cursor for 1 second. No other graphics. List every crop change with a timestamp.
```

## What each part does

The default crop solves most of the video. Trigger phrases mapped to screen regions are the reframe logic. "Hold 3 seconds, 0.4-second ease" makes crops feel like camera moves instead of glitches. Two thirds screen, one third face keeps both readable.

## Fixes

- Crop misses what matters. "At 0:48 widen the crop to include the full bottom strip."
- Crops jump too fast. "Minimum hold 4 seconds, ease over half a second."
- Face too big. "Face section is the bottom quarter."
- Text unreadable. "Crop tighter on the chat panel so text is at least 24px tall on a phone."

## FAQ

**Circle inset or full-width strip?**
Strip if you talk a lot and your face matters. Circle if the screen is the point.

**Can I just letterbox?**
You can, and it's unreadable on a phone. Crop to what matters.

## Related

- /formats/app-walkthrough
- /prompts/reframe-to-vertical
- /prompts/tutorial-captions-and-callouts
- /how-to/repurpose-long-form-to-shorts

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
