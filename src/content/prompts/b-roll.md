---
title: 'B-roll prompts: cover what you are talking about'
description: >-
  A b-roll prompt says what to cover, when, and how long the overlay should stay
  before returning to the speaker.
updated: '2026-09-24'
category: prompts
---

**Say what to show, which line triggers it, and how long it stays. Vyra already knows what's in every clip, so name the thing, not the filename.**

## Minimal

```
Add b-roll over the parts where I describe the tools.
```

## Standard

```
While I'm talking about the brush set, cut to the close-up footage of the brushes for 2-3 seconds, then come back to me. Do the same for the palette and the easel when I mention them.
```

## Full

```
This is a 90-second talking head about my studio setup. Cover three moments with b-roll from the project footage. When I say "these three brushes", show the brush close-up for 3 seconds. When I say "the palette I mixed last night", show the palette shot for 2 seconds. When I say "the easel from my grandmother", show the wide easel shot for 4 seconds. Keep my audio running underneath every overlay. Cut back to me on the last word of each phrase, not before. Full-frame overlays, no picture-in-picture, no zoom on the b-roll. Do not add b-roll anywhere else.
```

One user wanted a chat UI on screen while he talked about a prompt. This worked:

```
When I talk about writing the prompt, show the screen recording of the chat UI as a picture-in-picture in the top right, about a third of the frame, for as long as I'm on that topic.
```

## What each part does

"Three moments" caps the count. The quoted lines are triggers the agent finds in the transcript. "For 3 seconds" is the hold. "Keep my audio running" stops it from cutting your voice with the picture. "Do not add b-roll anywhere else" keeps it in scope.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Overlay too short to read | "Hold each b-roll shot at least 3 seconds." |
| It cut into my sentence | "Keep my voice continuous under every overlay." |
| Wrong clip | "Use the shot where the brushes are on the white table, not the one in the jar." |
| Too much b-roll | "Remove all b-roll except the three I named." |

## FAQ

**Does it know which clip is the brushes?**
Yes. Every clip gets a scene description on upload. If two clips match, name a detail that separates them.

**Can b-roll hide a jump cut?**
Yes. "Cover the cut at 0:34 with 2 seconds of the palette shot."

## Related

- /prompts/product-demo-b-roll
- /how-to/shoot-b-roll
- /how-to/cut-a-talking-head
- /features/footage-understanding

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
