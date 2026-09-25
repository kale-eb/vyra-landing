---
title: "Product demo b-roll prompts: show the thing while you talk about it"
description: "A product demo b-roll prompt maps spoken mentions to specific shots, sets how long each insert stays, and says whether the insert is full screen or a corner."
updated: '2026-09-24'
category: prompts
---

**Map what you say to what shows on screen, say how long each insert stays, and whether it's full screen or a corner. "When I mention the brushes, show the brushes" is a real instruction here.**

Minimal:
```
When I mention a feature, cut to the footage of that feature for a few seconds, then back to me.
```

Standard:
```
This is a 60-second product demo of the brush set. Every time I name a brush (the flat, the round, the fan), cut to the close-up footage of that brush for 2 to 3 seconds, then come back to me. Keep my voice continuous under the inserts. Do not insert anything while I am making the main point at the end.
```

Full:
```
Cover this 60-second product demo with b-roll. When I say "the flat brush," show the flat brush close-up full screen for 3 seconds. "The round brush," the round brush clip. "The fan," the fan clip. When I say "here's how it loads," show the loading footage as a full-screen insert for as long as I am describing it, then cut back. Any other time I mention the set generally, keep me on screen. Inserts must start within half a second of the word. My voice stays continuous and at the same level under every insert. Leave the last 10 seconds uncovered so the viewer sees my face for the close. No zooms on the inserts, no transitions.
```

## What each part does

The word-to-shot map is the prompt. "3 seconds" and "as long as I'm describing it" are the two hold rules a demo needs. "Within half a second" is the sync tolerance. "Keep me on screen" for general mentions stops it covering everything. "Last 10 seconds uncovered" protects the close.

## Fixes

- Insert lands late. "Start every insert within half a second of the word."
- Too much coverage. "Only insert on named features."
- Too short to read. "Hold each close-up at least 3 seconds."
- Wrong clip. "For the round brush use the clip on the white table, not the one in my hand."

## FAQ

**Full screen or corner?**
Full screen. The viewer needs to see the product. Corner only if your reaction matters more than the detail.

**Should inserts keep their own audio?**
Usually no. If a clip has a good sound, a click or a pour, say "keep the original audio of the loading clip at 50%."

## Related

- /prompts/b-roll
- /formats/product-demo
- /how-to/shoot-b-roll
- /features/footage-understanding

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
