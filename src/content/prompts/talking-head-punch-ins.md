---
title: "Talking head punch-in prompts: hide the cuts, keep the energy"
description: "A punch-in prompt tells Vyra how much to zoom, where the cuts are allowed to land, and when to use a jump cut instead, so a single-camera talking head feels like two angles."
updated: '2026-09-24'
category: prompts
---

**A punch-in prompt tells Vyra how much to zoom, where cuts are allowed to land, and when a jump cut is fine instead. A punch-in is a crop of the same shot, 10 to 25 percent tighter, used to hide an edit or add emphasis. Overdo it and the video twitches; underdo it and every cut is a jump.**

Minimal:
```
Alternate between the full frame and a slight zoom-in at the cuts so the jump cuts feel intentional.
```

Standard:
```
This is a single-camera talking head. Wherever you made a cut, alternate between the full frame and a 15% punch-in so consecutive clips are never the same framing. Only change framing on a cut, never mid-sentence. Keep my eyes in the upper third in both framings.
```

Full:
```
Treat this as a two-angle talking head using one camera. Angle A is the full frame, angle B is a 20% punch-in centered on my face with my eyes in the upper third. Switch angles only at cuts and only at sentence boundaries. Use angle B for the sentences that state a point ("the reason this works is...") and angle A for setup and examples. Never punch in twice in a row. Leave the jump cut visible when the cut lands mid-pause and both sides are the same framing; a visible jump is fine there, a zoom is not. Do not add any other zooms, shakes, or transitions.
```

## What each part does

Two named angles turn a vague "add zooms" into a rule the agent can apply consistently. "Only at cuts, only at sentence boundaries" stops mid-word framing changes, which are the most common punch-in mistake. Tying angle B to "sentences that state a point" makes emphasis follow meaning instead of a timer. "Never twice in a row" caps the density. "Leave the jump cut visible when..." gives the agent permission to not decorate, which it needs.

## Fixes

- Too twitchy: "Halve the number of framing changes. Only switch every second cut."
- Zoom too tight: "Reduce the punch-in to 10%."
- Framing changes mid-sentence: "Move every framing change to the nearest sentence boundary."
- Eyes drift down in the punch-in: "Re-center the punch-in so my eyes stay in the upper third."
- It added a zoom on every cut: "Remove all punch-ins except the ones on sentences that make a claim. List which cuts still have one."

## FAQ

**What is the difference between a punch-in and a jump cut?**
A jump cut is two clips of the same framing back to back; you see the jump. A punch-in changes the crop across the cut so the jump reads as a camera switch. Both are fine; the prompt decides which goes where.

**How much can I zoom before it looks soft?**
On 4K source, 25 percent is safe for a 1080p export. On 1080p source, stay under 15 percent.

**Can I do this with two real cameras instead?**
Yes, and the same prompt shape works: name the angles, say which sentences get which, and switch only at cuts.

## Related

- /prompts/talking-head-cleanup
- /how-to/cut-a-talking-head
- /formats/talking-head
- /how-to/edit-for-retention

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
