---
title: 'Beat sync prompts: cut to the music'
description: >-
  A beat sync prompt names the track, sets how many beats each clip gets in
  each section, says where to start and end, and rules out effects. The agent
  detects the beats; you set the rhythm.
updated: '2026-09-24'
category: prompts
---

**A beat sync prompt names the track, sets how many beats each clip gets in each section of the song, says where to start and where to end, and rules out the effects you do not want. Vyra detects the beats. You decide the rhythm.**

## Minimal

```
Cut this montage to the beat of the attached track.
```

## Standard

```
Cut this montage to the beat of the attached track. One clip per beat in the chorus, one clip every two beats in the verses. Start on the first downbeat. End on the last hit, then hold the final shot for 1 second.
```

## Full

```
Make a 30-second vertical montage for Reels from the studio footage, cut to "golden.mp3". Start the video on the first downbeat of the track, not on silence. Verses: one clip every two beats, use the slower shots (mixing paint, wide studio, hands on canvas). Chorus at 0:14: one clip per beat, use the fast shots (brush strokes, spinning the canvas, walking in). On the drop at 0:21, cut to the finished painting and hold it for 4 beats. End on the last hit of the track and hold the final frame for 1 second. Straight cuts only, no flashes, no zoom punches, no speed ramps. Do not repeat any clip.
```

## What each part does

- "Start the video on the first downbeat" removes dead air at the top.
- "One clip every two beats" and "one clip per beat" set two cut rates the agent applies per section.
- Naming which shots go in verses and which in the chorus matches energy to tempo instead of leaving it random.
- "On the drop at 0:21" pins one musical moment to one visual payoff.
- "Hold it for 4 beats" gives the payoff room instead of cutting it on the next beat.
- "End on the last hit" defines the out point in musical terms.
- "No flashes, no zoom punches, no speed ramps" stops the three most common decorations.
- "Do not repeat any clip" prevents padding.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Cuts feel late or early | "Shift every cut 2 frames earlier so it lands on the transient." |
| Too fast to follow | "Verses: one clip every four beats instead of two." |
| Same clip used twice | "Never reuse a clip. If you run out, hold shots longer." |
| Drop has no payoff | "On the drop at 0:21, cut to the finished piece and hold it for 4 beats." |
| Starts on silence | "Trim the intro so the first frame is the first downbeat." |
| Effects added anyway | "Remove all transitions and zooms. Hard cuts only." |

## FAQ

**Does beat sync work on every genre?**
It works on anything with a detectable pulse. Very ambient tracks with no transients give the agent little to lock to, so name timestamps for cuts instead of beats. See /answers/does-beat-sync-work-for-every-genre.

**Can I sync only part of the video?**
Yes. "Beat sync the middle section from 0:10 to 0:25 and leave the talking parts alone."

**What if the track is longer than my footage?**
Say the target length. The agent trims the track to fit and ends on a hit near that length.

## Related

- /prompts/montage-beat-sync
- /prompts/add-music
- /features/beat-sync
- /formats/beat-synced-edit

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
