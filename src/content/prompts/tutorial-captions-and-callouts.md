---
title: "Tutorial caption and callout prompts: label the steps on screen"
description: "A tutorial caption prompt sets the caption style, adds a numbered step label each time you start a new step, and puts callouts (arrows, circles, labels) on the thing you are pointing at."
updated: '2026-09-24'
category: prompts
---

**A tutorial caption prompt sets the caption style, adds a numbered step label each time you start a new step, and puts callouts on the thing you are pointing at. Tutorials are re-watched and paused, so on-screen structure matters more than in any other format.**

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
This is a 3-minute 16:9 screen tutorial with my face in the corner. Captions: phrase captions, white, bottom center, clear of the face inset. Steps: there are five; each starts when I say "step one" through "step five." On each of those lines, show a label top left, "Step N of 5: <short title>", using these titles: Upload, Index, Prompt, Review, Export. Keep the label until the next step starts. Callouts: when I say "this button" or "click here," draw a circle around the cursor position for 2 seconds; when I say "up here" or "top right," put an arrow pointing to the top right of the screen recording. At 1:40 when I say "this is the important part," pause the recording for 1 second and enlarge the caption. Do not add any callouts I did not describe. Give me a list of every step label and callout with timestamps.
```

## What each part does

Naming the trigger phrases ("step one," "click here," "up here") gives the agent something concrete to find in the transcript. The step titles list makes the labels useful rather than just numbered. "Keep the label until the next step" turns labels into a persistent progress bar. "Circle around the cursor position" uses the screen recording's content, which the agent can see. The one pause-and-enlarge moment is an authored emphasis; everything else stays quiet. The timestamped list is how you check five steps without rewatching three minutes.

## Fixes

- Labels in the wrong place: "Move step labels to top left, 24px from the edges."
- Callouts on the wrong thing: "The circle at 0:52 should be on the Export button, not the menu."
- Captions cover the face inset: "Keep captions at least 40px clear of the face inset."
- Too many callouts: "Remove every callout except the ones on the words 'click here'."
- Label disappears too soon: "Hold each step label until the next step label appears."

## FAQ

**Should tutorial captions be word-by-word?**
No. Phrases. Tutorials are read, not felt. Word-by-word is for hooks and emphasis.

**How do I get a progress indicator?**
Step labels that persist until the next step are the simplest one. "Step 2 of 5" tells the viewer how much is left.

**Can the callouts follow the cursor?**
Ask for it: "track the cursor with the circle for 2 seconds." The agent can use a tracked mask. Static circles are more predictable if the cursor jumps.

## Related

- /formats/tutorial
- /prompts/screen-recording-reframe
- /how-to/choose-captions
- /how-to/make-motion-graphics

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
