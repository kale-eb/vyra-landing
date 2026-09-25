---
title: "Faceless video assembly prompts: narration, b-roll, captions, no face"
description: "A faceless video prompt gives Vyra the narration as the spine, a rule for which footage covers which sentence, a caption style, and a shot-length floor."
updated: '2026-09-24'
category: prompts
---

**The narration is the spine. Give it a rule for which footage covers which sentence, a caption style, and a shot-length limit. With no face on screen, the footage has to keep moving and has to match what's being said.**

Minimal:
```
Use the voiceover as the base and cover it with the b-roll clips. Change shots every 3 to 4 seconds. Add captions.
```

Standard:
```
Build a 60-second 9:16 faceless video. The uploaded voiceover is the spine, do not cut it. Cover it with the b-roll in this project. When the narration mentions the desk, show desk footage. The city, city footage. The sketchbook, sketchbook footage. Change shots every 3 to 4 seconds and never hold one clip longer than 5. Phrase captions, white, centered. Music under the voice at 20%.
```

Full:
```
Assemble a 60-second vertical faceless video. The uploaded voiceover is the spine, untouched, with 0.5 seconds of silence trimmed from the start. Match footage to the sentence being spoken using the clip descriptions. When no clip matches, use the sketchbook close-ups as the default. Shot length 3 to 4 seconds, hard maximum 5, minimum 2. Prefer clips with motion over static. Never show the same clip twice. Phrase captions, Inter Bold, white, centered in the lower half, max 4 words. On the line "this is the part nobody shows you," switch to word-by-word captions, larger, then back. The uploaded track at 20% under the voice, up to 50% during the 3-second pause at 0:35. End on a black frame with the text "part 2 tomorrow" for 2 seconds. Give me a shot list with timestamps.
```

## What each part does

"Spine, untouched" protects the narration. The matching rule with a named default keeps coverage relevant and stops it inventing a match. Shot length floor and ceiling is the attention rule for faceless content. One word-by-word moment is the emphasis. The music swell in the pause makes it feel edited, not assembled.

## Fixes

- Shots too long. "Hard maximum 4 seconds per shot."
- Footage doesn't match. "At 0:22 the narration says 'the city' but the shot is the desk. Replace it."
- Repeated clips. "List every clip used more than once and replace the repeats."
- Voice got trimmed. "Restore the voiceover to full length."

## FAQ

**Can it find stock for me?**
It edits what you upload. Bring your own b-roll or licensed stock into the project first.

**Can it write the narration?**
No. Record it, upload it, and let it assemble around it.

## Related

- /formats/faceless-video
- /prompts/b-roll
- /prompts/captions
- /how-to/shoot-b-roll

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
