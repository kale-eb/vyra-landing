---
title: "Tutorial caption and callout prompts: label the steps on screen"
description: "A tutorial caption prompt sets the caption style, adds a numbered step label each time you start a new step, and puts callouts (arrows, circles, labels) on the thing you are pointing at."
updated: '2026-09-24'
category: prompts
---

**Set the caption style, add a step label each time a new step starts, and put a circle or arrow on the thing you're pointing at. Tutorials get paused and rewatched, so on-screen structure matters more here than anywhere.**

Minimal:
```
Add captions and a step number on screen each time I move to a new step.
```

Standard:
```
Caption this 3-minute tutorial in 3 to 5 word phrases, white, lower third. Each time I say "step one," "step two," and so on, put a small label in the top left that says "Step 1 of 5" and keep it there until the next step. When I say "click here" or "this button," add a circle around the thing on screen for 2 seconds.
```

Full:
```
This is a 3-minute 16:9 screen tutorial with my face in the corner. Phrase captions, white, bottom center, clear of the face inset. There are five steps and each starts when I say "step one" through "step five." On each of those lines, show a label top left, "Step N of 5" plus a short title, using these titles. Upload, Index, Prompt, Review, Export. Keep the label until the next step starts. When I say "this button" or "click here," draw a circle around the cursor position for 2 seconds. When I say "up here" or "top right," put an arrow pointing to the top right of the screen recording. At 1:40 when I say "this is the important part," pause the recording for 1 second and enlarge the caption. Do not add any callouts I did not describe. Give me a list of every step label and callout with timestamps.
```

## What each part does

The trigger phrases ("step one," "click here") are what it searches the transcript for. The title list makes the labels useful. "Keep the label until the next step" turns them into a progress bar. The one pause-and-enlarge moment is the only emphasis. The list at the end lets you check five steps without watching three minutes.

## Fixes

- Labels in the wrong place. "Top left, 24px from the edges."
- Callout on the wrong thing. "The circle at 0:52 should be on the Export button."
- Captions cover the face inset. "Keep captions 40px clear of the inset."
- Too many callouts. "Only on the words 'click here'."

## FAQ

**Word-by-word captions for tutorials?**
No. Phrases. Tutorials are read, not felt.

**Can callouts follow the cursor?**
Ask for it. "Track the cursor with the circle for 2 seconds." Static circles are safer if the cursor jumps around.

## Related

- /formats/tutorial
- /prompts/screen-recording-reframe
- /how-to/choose-captions
- /how-to/make-motion-graphics

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
