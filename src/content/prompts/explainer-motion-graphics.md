---
title: "Explainer motion graphics prompts: animate the list, the number, the diagram"
description: "An explainer motion graphics prompt names each graphic moment (a list, a number, a diagram), the words that trigger it, how it builds, and when it clears, so the graphics follow what you say."
updated: '2026-09-24'
category: prompts
---

**An explainer motion graphics prompt names each graphic moment, the words that trigger it, how it builds, and when it clears. Vyra builds motion graphics from a description; the description has to say what appears, in what order, and where it goes. "Add motion graphics" produces decoration. "When I list the three costs, stack them on the left as I say each one" produces an explainer.**

Minimal:
```
When I list the three reasons, show them on screen one at a time as I say them.
```

Standard:
```
This is a 90-second explainer. When I say "there are three reasons," animate a list on the left third of the frame: each reason appears as I say it, bold white on a dark bar, stacked. Keep all three on screen until I say "so that's why," then clear them together. When I say "forty percent," show "40%" large in the center for 3 seconds with the ordinary caption off. No other graphics.
```

Full:
```
Add motion graphics to this 90-second 9:16 explainer at exactly these moments. 1) 0:08, "there are three reasons": a stacked list, left third of frame, one item per reason as I name it, Montserrat Black, white on a dark rounded bar. Items: Time, Cost, Quality. Hold all three until 0:41 "so that's why," then clear together. 2) 0:52, "forty percent": the figure "40%" centered, large, Montserrat Black, count up from 0 over 0.6 seconds, hold 3 seconds, ordinary captions off during it. 3) 1:05, "it goes from here to here": a simple two-node diagram, "Raw footage" left, "Finished video" right, an arrow between them that draws as I say "to here." Hold until 1:15. Everything else: ordinary phrase captions only. No transitions, no particles, no background animation. List every graphic with in and out timestamps.
```

## What each part does

Numbered graphic moments with a trigger phrase, a build rule, and a clear rule are the whole instruction; the agent can find each phrase in the transcript and time the graphic to it. "Left third" and "centered" set the footprint so the graphics do not fight your face. Naming the font keeps the graphics consistent with captions. "Ordinary captions off during it" prevents a caption under a giant number. "No particles, no background animation" saves a round. The in/out list is the verification.

## Fixes

- Graphics fight the face: "Move the list to the right third and shrink it 20%."
- Items appear at the wrong time: "The second item should appear on the word 'cost', not before."
- Everything clears too early: "Hold the list until 0:41. Do not clear on the next sentence."
- Font mismatch: "Use the same font as the captions for all graphics."
- Too much motion: "Remove the slide-in. Items appear instantly."

## FAQ

**Do I need to know After Effects terms?**
No. Say what appears, where, when it builds, and when it clears. "Stacked list, left, one per item, clear at the end" is enough.

**Can the graphics use my brand colors?**
Yes. Name them: "dark bar #171917, text #F7F6F2, accent #F4DD45."

**How many graphic moments per minute?**
Two or three. More than that and nothing stands out. Let ordinary captions carry the rest.

## Related

- /formats/explainer
- /prompts/motion-graphics
- /how-to/make-motion-graphics
- /features/motion-graphics

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
