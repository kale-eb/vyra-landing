---
title: "Vlog music and pacing prompts"
description: "A vlog music prompt names the track, how loud it sits under your voice, where it should swell, and whether the b-roll cuts should land on its beats."
updated: '2026-09-24'
category: prompts
---

**A vlog music prompt names the track, how loud it sits under your voice, where it should swell, and whether the b-roll cuts should land on the beat. Vyra can duck music under speech and cut b-roll to a track; it needs you to say when each behavior applies.**

Vlogs alternate between talking (music down) and b-roll (music up). Most bad vlog music comes from one volume for the whole video. These prompts split the two.

Minimal:
```
Add the track I uploaded under the whole vlog. Quiet when I talk, louder on the b-roll.
```

Standard:
```
Put the uploaded track under the whole 2-minute vlog. Duck it to about 20% whenever I am speaking and bring it to about 70% on b-roll sections. Fade it out over the last 2 seconds. Do not change any of the cuts.
```

Full:
```
Use the uploaded track as the only music. Start it on the first b-roll shot, not on my opening line. Duck to 20% under every talking clip, back up to 70% on b-roll. Re-cut the b-roll sections so shot changes land on the beat, but leave the talking clips exactly where they are. Let the chorus hit on the Waymo ride and hold that section at full volume. Keep original ambience audible under the music on the walk home so you can hear the street. Fade out over the last 2 seconds and end on my wave.
```

## What each part does

"Only music" prevents a second bed being added. "Start on the first b-roll shot" keeps the hook clean. Two volume levels with the rule for each is what makes ducking predictable. "Re-cut the b-roll sections but leave the talking clips" scopes the beat sync so it does not chop your narration. Naming where the chorus should land is the one creative call the agent cannot infer. "Keep ambience audible" protects the sense of place that makes a vlog feel real.

## Fixes

- Music fights the voice: "Duck to 10% under speech and start the duck half a second before I begin talking."
- Beat sync made it frantic: "Cut on every second beat on the b-roll, not every beat."
- Chorus lands in the wrong place: "Shift the track so the chorus starts at 1:05 where the Waymo pulls up."
- Music too loud at the start: "Fade in over 2 seconds instead of starting at full."
- It cut a talking clip: "Restore the talking clips to their previous timing. Beat sync applies to b-roll only."

## FAQ

**What kind of track works for a daily vlog?**
Something with a steady tempo and a clear chorus. The tempo gives the b-roll a rhythm; the chorus gives the video a peak. Say where the peak should go.

**Should the music start on my first line?**
Usually not. Let the first talking clip stand on its own so the hook reads, then bring the music in on the first b-roll.

**Can Vyra pick the music?**
Upload the track you want. Music choice is taste, and licensing is yours to manage. Vyra handles placement, ducking, and beat sync.

## Related

- /prompts/vlog-rough-cut
- /prompts/add-music
- /how-to/choose-music
- /features/beat-sync

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
