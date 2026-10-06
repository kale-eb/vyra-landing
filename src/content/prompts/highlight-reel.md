---
title: Highlight reel prompts
description: "A highlight reel prompt sets the length, how many moments to pick, the selection rule, the energy curve, and the track. You tell the agent what counts."
updated: '2026-09-24'
category: prompts
reels:
  - DS9JDZ-DE0l
---

**Say how long, how many moments, what counts as a highlight, and how the energy should move. Vyra has already watched every clip. You tell it what to pick.**

## Minimal

```
Build a 30-second highlight reel from everything in this project.
```

## Standard

```
Build a 30-second highlight reel from all the clips in this project. Pick the 8-10 most visually interesting moments, favor movement and faces over static shots, and order them fast to slow to fast. Beat-sync to the attached track.
```

## Full

```
Build a 30-second vertical highlight reel for Reels from the whole trip footage. Pick 10 moments. At least 3 must show a face reacting, at least 3 must have camera or subject movement, no more than 2 from the same location, nothing shorter than 1 second or longer than 4. Open on the shot of the plane window, close on the group jumping into the pool. Fast cuts for the first 8 seconds, slow down through the middle, fast again for the last 6 seconds. Cut to "summer.mp3" and land the pool shot on the drop. Keep original audio off, music only. No text, no captions, no transitions.
```

## What each part does

"Pick 10" caps it. The rules about faces, movement, and locations are checks the agent can actually run. Min and max clip lengths stop flicker cuts and dead holds. "Open on" and "close on" pin the two shots that matter. "Land the pool shot on the drop" ties the peak to the music.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Too many similar shots | "No more than one clip per location." |
| No peak | "Put the pool jump on the drop at 0:22 and hold it 3 seconds." |
| Clips flash by | "Nothing shorter than 1.5 seconds." |
| Missed my favorite moment | "Include the shot where we run down the hill at sunset, around 14:20 in the long clip." |

## FAQ

**How does it decide what's interesting?**
From the scene analysis. Movement, faces, variety. Your rules override that, so give rules if you have opinions.

**What length works?**
15 to 30 seconds for Reels and TikTok. 60 for a Short if there's enough variety.

## Related

- /prompts/travel-recap-highlight-reel
- /prompts/montage-beat-sync
- /prompts/rough-cut
- /formats/travel-recap

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
