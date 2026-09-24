---
title: "Product demo b-roll prompts: show the thing while you talk about it"
description: "A product demo b-roll prompt maps spoken mentions to specific shots, sets how long each insert stays, and says whether the insert is full screen or a corner."
updated: '2026-09-24'
category: prompts
---

**A product demo b-roll prompt maps what you say to what should be on screen, sets how long each insert stays, and says whether it is full screen or a corner. Vyra knows what you said and when, and it has scene descriptions of every clip, so "when I mention the brushes, show the brushes" is a real instruction.**

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
Cover this 60-second product demo with b-roll. Rules: when I say "the flat brush," show the flat brush close-up full screen for 3 seconds; "the round brush," the round brush clip; "the fan," the fan clip. When I say "here's how it loads," show the loading footage as a full-screen insert for as long as I am describing it, then cut back. Any other time I mention the set generally, keep me on screen. Inserts must start within half a second of the word. My voice stays continuous and at the same level under every insert. Leave the last 10 seconds uncovered so the viewer sees my face for the close. No zooms on the inserts, no transitions.
```

## What each part does

The word-to-shot map is the prompt; each pair is unambiguous. "Full screen for 3 seconds" and "as long as I am describing it" are the two duration rules a demo needs: a fixed hold for a quick mention, a matched hold for a walkthrough. "Within half a second of the word" is the sync tolerance. "Keep me on screen" for general mentions prevents the agent from covering everything. "Last 10 seconds uncovered" protects the close.

## Fixes

- Insert lands late: "Move every insert to start within half a second of the word that names it."
- Too much coverage: "Only insert on named features. General mentions stay on me."
- Insert too short to read: "Hold each product close-up at least 3 seconds."
- Wrong clip chosen: "For 'the round brush' use the clip on the white table, not the one in my hand."
- Voice dips under inserts: "Keep my voice level constant under every insert."

## FAQ

**Full screen or picture-in-picture for product inserts?**
Full screen for the product; the viewer needs to see it. Picture-in-picture only when your reaction matters more than the detail.

**How does Vyra find the right clip?**
From the scene descriptions it generated on upload. Describe the clip the way you would to a person: "the round brush on the white table."

**Should inserts have their own audio?**
Usually not. Keep your voice continuous. If a clip has a satisfying sound (a click, a pour), say "keep the original audio of the loading clip at 50%."

## Related

- /prompts/b-roll
- /formats/product-demo
- /how-to/shoot-b-roll
- /features/footage-understanding

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
