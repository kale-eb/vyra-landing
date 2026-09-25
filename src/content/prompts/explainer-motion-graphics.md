---
title: "Explainer motion graphics prompts: animate the list, the number, the diagram"
description: "An explainer motion graphics prompt names each graphic moment (a list, a number, a diagram), the words that trigger it, how it builds, and when it clears, so the graphics follow what you say."
updated: '2026-09-24'
category: prompts
---

**Name each graphic, the words that trigger it, how it builds, and when it clears. "Add motion graphics" gets you decoration. "When I list the three costs, stack them on the left as I say each one" gets you an explainer.**

Minimal:
```
When I list the three reasons, show them on screen one at a time as I say them.
```

Standard:
```
This is a 90-second explainer. When I say "there are three reasons," animate a list on the left third of the frame. Each reason appears as I say it, bold white on a dark bar, stacked. Keep all three on screen until I say "so that's why," then clear them together. When I say "forty percent," show "40%" large in the center for 3 seconds with the ordinary caption off. No other graphics.
```

Full:
```
Add motion graphics to this 90-second 9:16 explainer at exactly these moments. 1) 0:08, "there are three reasons." A stacked list, left third of frame, one item per reason as I name it, Montserrat Black, white on a dark rounded bar. Items are Time, Cost, Quality. Hold all three until 0:41 "so that's why," then clear together. 2) 0:52, "forty percent." The figure "40%" centered, large, Montserrat Black, count up from 0 over 0.6 seconds, hold 3 seconds, ordinary captions off during it. 3) 1:05, "it goes from here to here." A simple two-node diagram, "Raw footage" left, "Finished video" right, an arrow between them that draws as I say "to here." Hold until 1:15. Everything else is ordinary phrase captions only. No transitions, no particles, no background animation. List every graphic with in and out timestamps.
```

## What each part does

Numbered moments with a trigger phrase, a build rule, and a clear rule are the whole instruction. "Left third" and "centered" keep the graphics off your face. Naming the font keeps them matching the captions. "Captions off during it" avoids a caption under a giant number.

## Fixes

- Fights the face. "Move the list to the right third and shrink it 20%."
- Wrong timing. "The second item appears on the word 'cost', not before."
- Clears too early. "Hold the list until 0:41."
- Too much motion. "Remove the slide-in. Items appear instantly."

## FAQ

**Can it use my brand colors?**
Yes. Name them. "Dark bar #171917, text #F7F6F2, accent #F4DD45."

**How many graphics per minute?**
Two or three. More than that and nothing stands out.

## Related

- /formats/explainer
- /prompts/motion-graphics
- /how-to/make-motion-graphics
- /features/motion-graphics

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
