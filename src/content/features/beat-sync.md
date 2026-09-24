---
title: "Beat sync: cut any footage to any track automatically"
description: Vyra detects the beats in a track you upload and lands cuts on them, with control over which beats, which clips, and how the energy rises and falls.
updated: 2026-09-24
category: feature
---

**Vyra beat-syncs your footage to a track you upload. It detects the beats, you say which beats to cut on and which clips to use, and it lands every cut on the grid. One clip per beat in the chorus, every two beats in the verse, hold the final shot. It works for montages, travel recaps, product reels, and any edit where the music drives the rhythm.**

Beat sync in most tools means a preset that chops your clips evenly. Vyra's version is a conversation: you control density, order, and which moments get the downbeats.

## How it works

1. Upload your clips and the track. Clips get scene analysis so the agent knows what each one shows.
2. Vyra detects the beat grid of the track.
3. Describe the sync: which sections cut faster, what opens, what closes, which clips to favor.
4. Vyra places clips on the beats and trims each to fit.
5. Adjust in one line: "slower in the verse", "start on the first drop", "end on the last hit".

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Cut to the beat, one clip per beat in the chorus" | Dense cuts on the chorus grid |
| "Every two beats in the verse" | Sparser cuts on the verse |
| "Start on the first downbeat, end on the last hit" | Aligns the in and out points |
| "Favor movement and faces over static shots" | Selects clips by scene analysis |
| "Fast, slow, fast" | Shapes velocity across the edit |
| "Hold the final shot for one second after the last hit" | Adds the tail |

## Prompts to paste

```
Cut this montage to the beat of the attached track. One clip per beat in the chorus, one clip every two beats in the verses. Start on the first downbeat. End on the last hit, then hold the final shot for 1 second.
```

```
Build a 30-second highlight reel from all the clips in this project, beat-synced to the attached song. Pick the 8-10 most visually interesting moments, favor movement and faces, and order them fast to slow to fast.
```

```
This is a travel recap for Reels, 9:16, 25 seconds. Open on the wide skyline shot on the first downbeat, then cut every beat through the drop, then slow to every two beats for the walking shots. No captions, no transitions, straight cuts.
```

## Compared to the usual way

| | Traditional editor | Beat-sync preset | Vyra |
| --- | --- | --- | --- |
| Finding the beats | Listen and mark | Automatic | Automatic |
| Choosing the clips | Manual | Random or in order | By description, using scene analysis |
| Density control | Manual | Fixed | "Faster here, slower there" |
| Re-cutting to a new track | Start over | Re-run preset | One line |

## Limits

- Tracks with weak or irregular beats (ambient, rubato piano) give a looser grid. Say "cut on the phrase changes instead".
- Vyra does not supply music. Upload a track you have the rights to use.
- Very short clips may not cover a dense chorus. The agent will tell you when it runs out of footage.

## FAQ

**Does it work across genres?**
Yes for anything with a clear pulse: pop, hip hop, house, rock, lo-fi. For ambient or classical, cut on phrase changes rather than beats and say so.

**Can I keep the original audio under the music?**
Yes. Ask for the music at a percentage and ambient sound underneath, or ducked under speech.

**Can I choose the exact clips?**
Yes. Name them, or describe them ("the pour", "the wide shot of the bridge") and the agent finds them.

**Can I fix one cut without redoing the edit?**
Yes. "Swap the clip on the third beat for the one where I spin" changes only that placement.

## Related

- /how-to/choose-music
- /prompts/beat-sync
- /formats/beat-synced-edit
- /features/footage-understanding
