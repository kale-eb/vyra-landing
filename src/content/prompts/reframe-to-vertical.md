---
title: 'Reframe prompts: 16:9 to 9:16 without losing the subject'
description: >-
  A reframe prompt names the target aspect ratio, what to keep in frame in
  each kind of shot, how to handle screen recordings, and whether to crop or
  pad. Vyra reframes with masks, so say what to track.
updated: '2026-09-24'
category: prompts
---

**A reframe prompt names the target aspect ratio, what must stay in frame for each kind of shot, how to handle screen recordings, and whether to crop or pad. Vyra reframes with masks, so tell it what to track and it follows.**

## Minimal

```
Make a vertical version of this.
```

## Standard

```
This is 16:9. Make a 9:16 version that keeps me centered in frame the whole time. When the screen recording is showing, crop to the part of the screen I'm pointing at instead of the whole thing.
```

## Full

```
Convert this 16:9 YouTube video into a 9:16 version for Shorts. Talking head shots: crop to keep my face in the upper third with my shoulders inside the frame, and follow me if I lean. Two-person shots: crop to whoever is speaking and switch on each speaker change, no split screen. Screen recording sections: crop to the region I am pointing at or the cursor, zoomed so the text is readable, and keep my webcam as a small circle in the bottom right. B-roll: center crop unless there is an obvious subject, then follow it. Do not letterbox or add blurred bars anywhere. Move the captions to the middle of the frame, 20% larger. Keep every cut and all timing identical to the original.
```

## What each part does

- "Convert into 9:16 for Shorts" sets the target and the platform.
- Rules per shot type (talking head, two-person, screen recording, b-roll) cover the four cases where a single rule would fail.
- "Face in the upper third with shoulders inside" defines the crop in composition terms.
- "Follow me if I lean" turns the mask into a tracked mask.
- "Switch on each speaker change, no split screen" decides the two-person case.
- "Crop to the region I am pointing at" and "text is readable" handle the screen recording without guessing.
- "Do not letterbox or add blurred bars" rules out the lazy fallback.
- "Captions middle of the frame, 20% larger" adapts text to the tall frame.
- "Keep every cut identical" stops the agent re-editing.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| My head is cut off | "Raise the crop so there is headroom equal to half my face height." |
| Screen text unreadable | "Zoom the screen recording in 2x on the cursor area." |
| Crop jumps between shots | "Smooth the crop movement over 0.5 seconds when it changes." |
| Blurred bars appeared | "Remove the blurred bars and crop instead." |
| Wrong person in frame | "In the interview, keep the crop on whoever is talking." |
| Captions off screen | "Move all captions to the center of the frame." |

## FAQ

**Does Vyra have a crop tool?**
Cropping and reframing are done with masks. A rectangle mask is a crop; a tracked mask follows a subject. Say what to track and the agent sets it up.

**Will it keep the subject in frame automatically?**
It tracks the subject you name. "Keep me centered" or "follow the product" is enough for most footage. Fast, erratic movement may need a wider crop.

**Can I do 1:1 and 4:5 too?**
Yes. Name the ratio and the rules are the same. See /prompts/export-for-platform for exporting several ratios at once.

## Related

- /prompts/screen-recording-reframe
- /prompts/export-for-platform
- /how-to/repurpose-long-form-to-shorts
- /formats/app-walkthrough

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
