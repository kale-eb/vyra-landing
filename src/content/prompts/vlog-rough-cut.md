---
title: "Vlog rough cut prompts"
description: "A vlog rough cut prompt gives Vyra the day's shape (locations in order), the target length, which talking clips must survive, and how much b-roll to keep between them."
updated: '2026-09-24'
category: prompts
---

**A vlog rough cut prompt gives Vyra the shape of the day (locations in order), the target length, which talking clips must survive, and how much b-roll to keep between them. The agent already knows where each clip was shot and what you said in it; your job is to say what the day was about.**

Vlogs are the format where people upload the most footage and give the vaguest instruction. "Make a vlog out of this" from 90 minutes of clips produces a random walk. The prompts below fix that by naming the story.

Minimal:
```
Cut this into a 90-second vlog. Keep it in chronological order, mostly b-roll with a few of my talking clips.
```

Standard:
```
Build a 2-minute vlog from today's footage in the order it was shot: apartment, train, office, dinner, walk home. Keep every clip where I talk to camera but trim each one to the sentence that matters. Between talking clips, use 2 to 4 seconds of b-roll from the same location. No music yet, no captions yet.
```

Full:
```
Make a 2-minute vertical vlog for Reels from today's footage. Chronological, five locations: apartment, train, office, dinner, walk home. Open on the clip where I say "day four" so the viewer knows where we are. Keep each talking clip to its single best sentence, cut the setup where I check the camera. Cover the gap between locations with 2 to 4 seconds of b-roll: the train pulling in, the office kitchen, the Bay Bridge at night. Use the Waymo ride as the mid-video high point and give it 8 seconds. End on me waving goodbye. Keep original ambience, no music, straight cuts, no zooms.
```

## What each part does

The location list stops the agent from reordering the day. "Every clip where I talk to camera" protects the narration. "Single best sentence" is a trim rule the agent can apply consistently. "2 to 4 seconds of b-roll" sets a pacing floor and ceiling. Naming the high point ("Waymo ride, 8 seconds") tells the agent where to slow down. "Original ambience, no music" prevents a generic lo-fi bed showing up uninvited.

## Fixes

- Too much talking, not enough place: "Cut every talking clip to under 5 seconds and double the b-roll between them."
- Locations out of order: "Restore chronological order. Apartment first, walk home last."
- It skipped a moment you loved: quote it. "Include the clip where he is wearing a sheet mask, around 5:47 in the office footage."
- Feels like a slideshow: "Hold each b-roll shot at least 3 seconds and prefer clips with movement."
- Too long: "Target is 2 minutes. Remove the grocery store section entirely."

## FAQ

**Should I tell Vyra what happened that day?**
Yes, in one line. "Day four of the sprint, we ended with a Waymo ride" gives the agent a throughline. It has the transcript and the scene descriptions, but it does not know what mattered to you.

**How do I keep the vlog from being all talking head?**
Give a ratio. "Roughly one third talking, two thirds b-roll" works. Or a cap: "no talking clip longer than 6 seconds."

**Can I ask for music at the same time?**
You can, but the rough cut lands better without it. Get the structure right, then use the vlog music and pacing prompts to add the track and let it reshape the cuts.

## Related

- /prompts/vlog-music-and-pacing
- /formats/vlog
- /how-to/vlog
- /answers/why-does-vlog-editing-take-so-long

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
