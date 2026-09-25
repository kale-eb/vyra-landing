---
title: 'Beat sync prompts: cut to the music'
description: >-
  A beat sync prompt names the track, sets how many beats each clip gets in
  each section, says where to start and end, and rules out effects. The agent
  detects the beats; you set the rhythm.
updated: '2026-09-24'
category: prompts
---

**Name the track, say how many beats each clip gets in each section, where to start and end, and what not to add. Vyra finds the beats. You set the rhythm.**

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
Make a 30-second vertical montage for Reels from the studio footage, cut to "golden.mp3". Start on the first downbeat of the track, not on silence. In the verses, one clip every two beats, use the slower shots (mixing paint, wide studio, hands on canvas). In the chorus at 0:14, one clip per beat, use the fast shots (brush strokes, spinning the canvas, walking in). On the drop at 0:21, cut to the finished painting and hold it for 4 beats. End on the last hit of the track and hold the final frame for 1 second. Straight cuts only, no flashes, no zoom punches, no speed ramps. Do not repeat any clip.
```

## What each part does

"First downbeat" kills the dead air at the top. Two cut rates give the verses and chorus different speeds. Naming which shots go where matches energy to tempo. "On the drop" ties one visual to one musical moment. "Hold it for 4 beats" gives the payoff room. The ban list at the end saves a round of fixes.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Cuts feel late | "Shift every cut 2 frames earlier." |
| Too fast to follow | "Verses at one clip every four beats." |
| Same clip twice | "Never reuse a clip. Hold shots longer if you run out." |
| Effects added anyway | "Remove all transitions and zooms. Hard cuts only." |

## FAQ

**Does it work on every genre?**
Anything with a clear pulse. Ambient tracks with no hits give it little to lock to, so name timestamps instead. See /answers/does-beat-sync-work-for-every-genre.

**Can I sync only part of the video?**
Yes. "Beat sync from 0:10 to 0:25 and leave the talking parts alone."

## Related

- /prompts/montage-beat-sync
- /prompts/add-music
- /features/beat-sync
- /formats/beat-synced-edit

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
