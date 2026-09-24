---
title: 'B-roll prompts: cover what you are talking about'
description: >-
  A b-roll prompt says what to cover, when, and how long the overlay should stay
  before returning to the speaker.
updated: '2026-09-24'
category: prompts
---

**A b-roll prompt says what to cover, when to cut to it, how long it stays, and how it returns to the speaker. The agent already knows what is in every clip, so name the subject and the trigger line, not the filename.**

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
This is a 90-second talking head about my studio setup. Cover three moments with b-roll from the project footage: when I say "these three brushes", show the brush close-up for 3 seconds; when I say "the palette I mixed last night", show the palette shot for 2 seconds; when I say "the easel from my grandmother", show the wide easel shot for 4 seconds. Keep my audio running underneath every overlay. Cut back to me on the last word of each phrase, not before. Full-frame overlays, no picture-in-picture, no zoom on the b-roll. Do not add b-roll anywhere else.
```

Overlay-with-screen variant, from a user who wanted a chat UI shown while talking about a prompt:

```
When I talk about writing the prompt, show the screen recording of the chat UI as a picture-in-picture in the top right, about a third of the frame, for as long as I'm on that topic.
```

## What each part does

- "Cover three moments" sets the count so the agent does not sprinkle b-roll everywhere.
- Quoted lines are the triggers. The agent searches the transcript for them.
- "Show the brush close-up for 3 seconds" gives both the subject and the hold time.
- "Keep my audio running underneath" prevents the agent from cutting the speech with the picture.
- "Cut back to me on the last word" defines the exit point.
- "Full-frame, no picture-in-picture, no zoom" removes three decisions the agent would otherwise make.
- "Do not add b-roll anywhere else" caps the scope.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Overlay too short to read | "Hold each b-roll shot for at least 3 seconds." |
| B-roll cuts into my sentence | "Keep my voice continuous under every overlay and cut back to me on the last word." |
| Wrong clip chosen | "Use the shot where the brushes are on the white table, not the one in the jar." |
| Too much b-roll | "Remove all b-roll except the three I named." |
| B-roll looks zoomed or cropped | "Show the b-roll at its original framing, no scale." |
| Jarring cut back to me | "Add a 6-frame crossfade on the return cut only." |

## FAQ

**Does the agent know which clip is the brushes?**
Yes. On upload Vyra analyzes every scene visually, so "the brush close-up" resolves to the right clip. If two clips match, name a detail that separates them.

**Can b-roll hide a jump cut?**
Yes. Say "cover the cut at 0:34 with 2 seconds of the palette shot" and the edit under it disappears.

**How long should b-roll hold?**
Two to four seconds for a single object. Under two seconds reads as a flicker; over five seconds the viewer wonders where you went.

## Related

- /prompts/product-demo-b-roll
- /how-to/shoot-b-roll
- /how-to/cut-a-talking-head
- /features/footage-understanding

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
