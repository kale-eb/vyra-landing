---
title: "Podcast clip prompts: find the 45 seconds worth posting"
description: "A podcast clip prompt tells Vyra what makes a moment worth posting (a claim, a disagreement, a story with a payoff), the clip length, and which speaker to favor on camera."
updated: '2026-09-24'
category: prompts
---

**A podcast clip prompt tells Vyra what makes a moment worth posting, the clip length, and which speaker to favor on camera. Because the whole episode is transcribed, the agent can search for claims, questions, and laughs; you decide what counts.**

An hour of two people talking has maybe five clips in it. The prompt's job is to describe those five so the agent can find them instead of guessing.

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
Search the transcript for moments that work as standalone 30 to 60 second clips. Priorities in order: a clear claim stated in one sentence, a story that starts and pays off within a minute, a disagreement between us. Give me 8 candidates with start and end timestamps, the opening line, and why it works. Then cut the top 3 as 9:16 clips: start each clip on the first word of the claim, not on the question that prompted it. Whoever is speaking should be on screen; switch to the listener only for a reaction longer than a second. Remove filler words and pauses over half a second inside each clip. No captions yet.
```

## What each part does

The three priorities give the agent a ranking rule instead of "interesting." "Standalone" and "needs context" are the tests for whether a clip survives without the episode. "Start on the first word of the claim" is the most common fix for podcast clips that open slow. The camera rule ("whoever is speaking, switch only for a reaction over a second") is what makes a two-camera cut feel deliberate. Asking for candidates before cuts means you pick, and the agent cuts only what you approve.

## Fixes

- Clips open on the question: "Start every clip on the answer. Cut the question."
- Wrong speaker on screen: "Show the person talking. Only cut to the listener when they laugh or react for more than a second."
- Clip needs context: "Prepend the one sentence of setup from 14:20 so the claim makes sense on its own."
- Too many similar clips: "Pick candidates from different parts of the episode. No two from the same 10-minute window."
- Ends flat: "End each clip on the payoff line, then hold half a second of the listener's reaction."

## FAQ

**How does Vyra know which moments are strong?**
It reads the transcript for the patterns you name: claims, stories, disagreements, questions. Naming them is the prompt. "Find the good parts" gives it nothing to search for.

**Should I ask for candidates or straight cuts?**
Candidates first on a long episode. Reviewing 8 timestamps takes two minutes; reviewing 8 cut clips takes twenty. Then cut the ones you pick.

**Can it handle two camera angles?**
Yes. Say the rule: speaker on screen, listener only for reactions. Without the rule, the agent may hold one wide shot for the whole clip.

## Related

- /prompts/podcast-clip-captions
- /formats/podcast-clip
- /how-to/repurpose-long-form-to-shorts
- /for/podcasters

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
