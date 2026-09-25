---
title: "Podcast clip prompts: find the 45 seconds worth posting"
description: "A podcast clip prompt tells Vyra what makes a moment worth posting (a claim, a disagreement, a story with a payoff), the clip length, and which speaker to favor on camera."
updated: '2026-09-24'
category: prompts
---

**Say what makes a moment worth posting, how long the clip is, and who should be on camera. The whole episode is transcribed, so it can search for claims and stories. You say what counts.**

An hour of two people talking has maybe five clips in it. Describe those five so it can find them.

Minimal:
```
Find the 3 strongest 45-second moments in this episode and cut each one as a vertical clip.
```

Standard:
```
List the 8 most clip-worthy moments in this 62-minute episode with timestamps and a one-line reason each. I want moments where one of us makes a specific claim, tells a short story with an ending, or where we disagree. Skip the intro, the ad read, and any section that needs context from earlier to make sense.
```

Full:
```
Search the transcript for moments that work as standalone 30 to 60 second clips. Priorities in order. A clear claim stated in one sentence, a story that starts and pays off within a minute, a disagreement between us. Give me 8 candidates with start and end timestamps, the opening line, and why it works. Then cut the top 3 as 9:16 clips. Start each clip on the first word of the claim, not on the question that prompted it. Whoever is speaking should be on screen. Switch to the listener only for a reaction longer than a second. Remove filler words and pauses over half a second inside each clip. No captions yet.
```

## What each part does

The three priorities give it a ranking rule. "Standalone" is the test for whether a clip survives without the episode. "Start on the first word of the claim" fixes the slow open most podcast clips have. The camera rule makes a two-camera cut feel on purpose. Asking for candidates first means you pick, then it cuts.

## Fixes

- Opens on the question. "Start every clip on the answer."
- Wrong speaker on screen. "Show the person talking. Cut to the listener only when they react for more than a second."
- Needs context. "Prepend the one sentence of setup from 14:20."
- Too many similar clips. "No two from the same 10-minute window."

## FAQ

**Candidates first or straight cuts?**
Candidates on a long episode. Reading 8 timestamps takes two minutes. Watching 8 cut clips takes twenty.

**Can it handle two camera angles?**
Yes. Say the rule. Speaker on screen, listener only for reactions.

## Related

- /prompts/podcast-clip-captions
- /formats/podcast-clip
- /how-to/repurpose-long-form-to-shorts
- /for/podcasters

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
