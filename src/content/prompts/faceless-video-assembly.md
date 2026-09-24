---
title: "Faceless video assembly prompts: narration, b-roll, captions, no face"
description: "A faceless video prompt gives Vyra the narration as the spine, a rule for which footage covers which sentence, a caption style, and a shot-length floor so the video never sits on one image too long."
updated: '2026-09-24'
category: prompts
---

**A faceless video prompt gives Vyra the narration as the spine, a rule for which footage covers which sentence, a caption style, and a shot-length floor. With no face on screen, the footage has to change often enough to hold attention and match what is being said closely enough to make sense.**

Minimal:
```
Use the voiceover as the base and cover it with the b-roll clips. Change shots every 3 to 4 seconds. Add captions.
```

Standard:
```
Build a 60-second 9:16 faceless video. The uploaded voiceover is the spine; do not cut it. Cover it with the b-roll in this project: when the narration mentions the desk, show desk footage; the city, city footage; the sketchbook, sketchbook footage. Change shots every 3 to 4 seconds and never hold one clip longer than 5. Phrase captions, white, centered. Music under the voice at 20%.
```

Full:
```
Assemble a 60-second vertical faceless video. Spine: the uploaded voiceover, untouched, with 0.5 seconds of silence trimmed from the start. Coverage rules: match footage to the sentence being spoken using the clip descriptions; when no clip matches, use the sketchbook close-ups as the default. Shot length 3 to 4 seconds, hard maximum 5, minimum 2. Prefer clips with motion over static. Never show the same clip twice. Captions: phrase captions, Inter Bold, white, centered vertically in the lower half, max 4 words. On the line "this is the part nobody shows you," switch to word-by-word captions, larger, then back. Music: the uploaded track at 20% under the voice, up to 50% during the 3-second pause at 0:35. End on a black frame with the text "part 2 tomorrow" for 2 seconds. Give me a shot list with timestamps.
```

## What each part does

"Spine, untouched" protects the narration from being cut for pacing. The matching rule with a named default is what keeps coverage relevant; the default clip stops the agent from inventing a match. Shot length floor and ceiling is the attention rule for faceless content. "Never the same clip twice" prevents padding. The one word-by-word moment is the emphasis. The music swell in the pause is a small authored beat that makes the video feel edited rather than assembled.

## Fixes

- Shots too long: "Hard maximum 4 seconds per shot. Re-cut anything longer."
- Footage does not match: "At 0:22, the narration says 'the city' but the shot is the desk. Replace with a city clip."
- Repeated clips: "List every clip used more than once and replace the repeats."
- Captions too dense: "Max 3 words per caption."
- Voice was trimmed: "Restore the voiceover to its full length. Only trim leading silence."

## FAQ

**Does Vyra need my b-roll or can it find stock?**
It edits what you upload. Bring your own b-roll or licensed stock into the project first.

**How do I keep it from feeling like a slideshow?**
Motion clips, a 5-second ceiling, and one or two authored moments (a caption change, a music swell). Static clips held long are what make it feel like slides.

**Can it write the narration?**
No, and it should not. Record the voiceover, upload it, and let the agent assemble around it.

## Related

- /formats/faceless-video
- /prompts/b-roll
- /prompts/captions
- /how-to/shoot-b-roll

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
