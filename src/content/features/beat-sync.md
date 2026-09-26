---
title: "Beat sync: cut any footage to any track automatically"
description: Vyra finds the beats in a track you upload and lands cuts on them. You say which beats, which clips, and where it speeds up or slows down.
updated: 2026-09-24
category: feature
example: https://www.instagram.com/reel/DZCKNJiupPa/
reels:
  - DZCKNJiupPa
  - DNjX9oFO9xl
---

**Upload your clips and a track. Vyra finds the beats, you say how dense the cuts should be and which clips go where, and it lands every cut on the grid. One clip per beat in the chorus, every two beats in the verse, hold the last shot. Good for montages, travel recaps, product reels, anything where the music sets the rhythm.**

Most beat sync features just chop your clips evenly. In Vyra you can say "faster here, slower there" and pick which moments get the downbeats.

## How it works

1. Upload your clips and the track. Each clip gets a scene description so the agent knows what it shows.
2. Vyra detects the beat grid.
3. Describe the sync. Which sections cut faster, what opens, what closes, which clips to use.
4. Vyra places the clips on the beats and trims them to fit.
5. Adjust in one line. "Slower in the verse." "End on the last hit."

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "One clip per beat in the chorus" | Dense cuts on the chorus |
| "Every two beats in the verse" | Sparser cuts on the verse |
| "Start on the first downbeat, end on the last hit" | Lines up the in and out points |
| "Favor movement and faces over static shots" | Picks clips by scene description |
| "Fast, slow, fast" | Shapes the energy across the edit |
| "Hold the last shot for a second after the final hit" | Adds the tail |

## Prompts to paste

```
Cut this montage to the beat of the attached track. One clip per beat in the chorus, one clip every two beats in the verses. Start on the first downbeat. End on the last hit, then hold the final shot for 1 second.
```

```
Build a 30-second highlight reel from all the clips in this project, synced to the attached song. Pick the 8-10 most interesting moments, favor movement and faces, and order them fast to slow to fast.
```

```
Travel recap for Reels, 9:16, 25 seconds. Open on the wide skyline shot on the first downbeat, cut every beat through the drop, then slow to every two beats for the walking shots. No captions, straight cuts.
```

## Compared to the usual way

| | Traditional editor | Beat-sync preset | Vyra |
| --- | --- | --- | --- |
| Finding the beats | Listen and mark | Automatic | Automatic |
| Choosing the clips | Manual | Random or in order | By description |
| Density | Manual | Fixed | "Faster here, slower there" |
| New track | Start over | Re-run | One line |

## Limits

- Tracks without a clear pulse (ambient, loose piano) give a looser grid. Say "cut on the phrase changes instead."
- Vyra doesn't supply music. Upload a track you have the rights to.
- Short clips might not cover a dense chorus. The agent will tell you when it runs out.

## FAQ

**Does it work for every genre?**
Anything with a clear pulse. For ambient or classical, ask it to cut on phrase changes.

**Can I keep the original audio under the music?**
Yes. Ask for the music at a percentage, or ducked under speech.

**Can I fix one cut without redoing everything?**
Yes. "Swap the clip on the third beat for the one where I spin."

## Related

- /how-to/choose-music
- /prompts/beat-sync
- /formats/beat-synced-edit
- /features/footage-understanding
