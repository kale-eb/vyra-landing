---
title: Highlight reel prompts
description: >-
  A highlight reel prompt sets the length, how many moments to pick, the
  selection rule (movement, faces, reveals), the energy curve, and the track.
  The agent has already watched every clip; you tell it what counts.
updated: '2026-09-24'
category: prompts
---

**A highlight reel prompt sets the length, how many moments to pick, the rule for picking them, the energy curve from start to finish, and the track to cut to. The agent has already watched every clip in the project. You tell it what counts as a highlight.**

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
Build a 30-second vertical highlight reel for Reels from the whole trip footage. Pick 10 moments. Rules: at least 3 must show a face reacting, at least 3 must have camera or subject movement, no more than 2 from the same location, nothing shorter than 1 second or longer than 4. Open on the shot of the plane window, close on the group jumping into the pool. Energy: fast cuts for the first 8 seconds, slow down through the middle, fast again for the last 6 seconds. Cut to "summer.mp3" and land the pool shot on the drop. Keep original audio off, music only. No text, no captions, no transitions.
```

## What each part does

- "Pick 10 moments" fixes the count so the reel does not sprawl.
- The selection rules ("at least 3 faces", "at least 3 with movement", "no more than 2 per location") turn taste into checks the agent can run.
- Min and max clip lengths stop flicker cuts and dead holds.
- "Open on" and "close on" pin the two shots that matter most.
- "Fast, slow, fast" gives an energy curve instead of a flat rate.
- "Land the pool shot on the drop" ties the visual peak to the musical one.
- "Music only" and "no text, no transitions" keep the reel clean.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Too many similar shots | "No more than one clip per location. Swap the duplicates for something different." |
| Nothing feels like a peak | "Put the pool jump on the drop at 0:22 and hold it for 3 seconds." |
| Reel is all wide shots | "At least half the clips must show a face or hands." |
| Clips flash by too fast | "Nothing shorter than 1.5 seconds." |
| Missed my favorite moment | "Include the shot where we run down the hill at sunset, around 14:20 in the long clip." |
| Starts weak | "Open on the plane window shot, then the beach." |

## FAQ

**How does the agent decide what is interesting?**
It uses the scene analysis from upload: movement, faces, composition, and variety. Your rules override its defaults, so give rules when you have opinions.

**Can I make the reel from one long clip instead of many?**
Yes. Say "from the 20-minute clip" and it will pull moments from inside it.

**What length works best?**
Fifteen to thirty seconds for Reels and TikTok. Sixty for a YouTube Short if the footage has enough variety. Longer than that stops being a highlight reel.

## Related

- /prompts/travel-recap-highlight-reel
- /prompts/montage-beat-sync
- /prompts/rough-cut
- /formats/travel-recap

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
