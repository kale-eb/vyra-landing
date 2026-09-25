---
title: 'Reframe prompts: 16:9 to 9:16 without losing the subject'
description: "A reframe prompt names the target aspect ratio, what to keep in frame in each kind of shot, how to handle screen recordings, and whether to crop or pad."
updated: '2026-09-24'
category: prompts
---

**Say the target ratio and what has to stay in frame for each kind of shot. Vyra reframes with masks, so tell it what to follow.**

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
Convert this 16:9 YouTube video into a 9:16 version for Shorts. On talking head shots, crop to keep my face in the upper third with my shoulders inside the frame, and follow me if I lean. On two-person shots, crop to whoever is speaking and switch on each speaker change, no split screen. On screen recording sections, crop to the region I am pointing at or the cursor, zoomed so the text is readable, and keep my webcam as a small circle in the bottom right. On b-roll, center crop unless there is an obvious subject, then follow it. Do not letterbox or add blurred bars anywhere. Move the captions to the middle of the frame, 20% larger. Keep every cut and all timing identical to the original.
```

## What each part does

One rule per shot type covers the four cases where a single rule breaks. "Follow me if I lean" turns the crop into a tracked mask. "No split screen" decides the two-person case. "Do not letterbox" rules out the lazy fallback. "Keep every cut identical" stops it re-editing.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| My head is cut off | "Raise the crop. Headroom equal to half my face height." |
| Screen text unreadable | "Zoom the screen recording in 2x on the cursor area." |
| Crop jumps between shots | "Smooth the crop movement over 0.5 seconds." |
| Blurred bars appeared | "Remove the blurred bars and crop instead." |

## FAQ

**Is there a crop tool?**
Cropping is a mask. A rectangle mask is a crop, a tracked mask follows a subject. Say what to track.

**Can I do 1:1 and 4:5 too?**
Yes. Name the ratio. See /prompts/export-for-platform for exporting several at once.

## Related

- /prompts/screen-recording-reframe
- /prompts/export-for-platform
- /how-to/repurpose-long-form-to-shorts
- /formats/app-walkthrough

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
