---
title: "Day in the life cut prompts: time stamps, transitions between blocks, one throughline"
description: "A day in the life prompt gives Vyra the blocks of the day in order, a time label for each, the throughline sentence that ties them, and a pacing rule per block, so the video feels like a day and not a list."
updated: '2026-09-24'
category: prompts
---

**A day in the life prompt gives Vyra the blocks of the day in order, a time label for each, the one sentence that ties them together, and a pacing rule per block. The difference between a day in the life and a vlog is the throughline: the day is about something.**

Minimal:
```
Cut this into a 60-second day in the life, morning to night, with time stamps on screen.
```

Standard:
```
Build a 60-second 9:16 day in the life from today's clips. Blocks in order: morning at the apartment, commute, office, evening walk, night. Put a small time label top left at the start of each block: 7:40am, 9:10am, 10:00am, 6:30pm, 11:15pm. Keep the talking clip where I say "day four" at the start and "we made it" at the end. Everything else is b-roll, 2 to 4 seconds per shot. Music under everything, ducked when I talk.
```

Full:
```
Make a 75-second vertical day in the life. Throughline: it's day four of a sprint and we're tired but good. Open on the line "day four" over the apartment clip, then the time label 7:40am. Blocks: apartment (8 seconds, slow, two shots), commute (10 seconds, the train arriving and the platform, faster cuts), office (20 seconds, three moments: the whiteboard, the sheet mask, the kitchen thumbs-up; keep the sheet mask clip's original audio because the laugh is the point), evening walk (15 seconds, the bridge and the skyline, slow, hold the skyline pan 4 seconds), night (12 seconds, the Waymo ride, end on "we made it"). Time labels top left at each block start, small, white, no box. Pacing: slow at the start and end, fast in the middle. Music: uploaded track, in on the commute, out under the last line. Phrase captions on talking clips only. No transitions between blocks, just a cut.
```

## What each part does

The throughline sentence is what the agent uses to choose between two similar clips. Per-block durations and pacing words ("slow, two shots" vs "faster cuts") give the day a rhythm that mirrors the day. Naming the three office moments picks the story of that block instead of leaving it to variety. "Keep the original audio because the laugh is the point" is the kind of instruction only you can give. Time labels turn a montage into a day. "Music in on the commute, out under the last line" frames the middle and leaves the two talking lines clean.

## Fixes

- Feels like a list: "Slow the apartment and night blocks to 3 shots each, held 3 seconds. Speed up the commute."
- Wrong time labels: "Use the clip timestamps for the labels. Round to 5 minutes."
- Missed the moment: "Include the sheet mask clip in the office block with its original audio."
- Music never stops: "Cut the music under 'we made it' so the last line is clean."
- Too long: "Target 60 seconds. Cut the commute block to 6 seconds."

## FAQ

**Day in the life or vlog?**
A vlog is talking with b-roll. A day in the life is b-roll with a little talking and a time structure. If you talk to camera more than three times, it is a vlog.

**Where do time labels come from?**
The clips' recording times. Ask Vyra to use them and round to the nearest 5 minutes.

**How many blocks?**
Four to six. Fewer feels thin; more feels like a schedule.

## Related

- /formats/day-in-the-life-story
- /prompts/vlog-rough-cut
- /how-to/vlog
- /how-to/pace-a-short-form-video

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
