---
title: Filler word removal prompts
description: >-
  A filler removal prompt lists the words to cut, the exceptions, the pause
  threshold, and how to close the gaps. Name the exceptions or the agent will
  cut a "like" you meant.
updated: '2026-09-24'
category: prompts
---

**A filler removal prompt lists the words to cut, the exceptions, the pause threshold, and how to close the gaps so the result still sounds like you. Name the exceptions, or the agent will cut a "like" you meant.**

## Minimal

```
Remove the ums and uhs.
```

## Standard

```
Remove every "um", "uh", "like" used as filler, and "you know". Do not remove "like" when I mean it. Close the gaps so it sounds continuous.
```

## Full

```
Clean the speech in this 4-minute talking head. Remove every "um", "uh", "er", "you know", "sort of", "kind of", and "like" when it is filler. Keep "like" when it means "similar to" or "enjoy" and keep "kind of" when it is the answer to a question. Remove any repeated word where I say the same word twice in a row. Cut pauses longer than 0.4 seconds down to 0.2 seconds; leave pauses under 0.4 seconds alone. Where a cut would land mid-breath, cut on the breath instead. Do not touch the section from 2:10 to 2:25, the pause there is intentional. When you are done, list every cut with timestamps.
```

## What each part does

- The word list is explicit, so nothing is inferred.
- "Keep 'like' when it means" gives the agent a rule for the one word that is often not filler.
- "Repeated word twice in a row" catches stutters without a separate pass.
- "Pauses longer than 0.4 down to 0.2" sets the threshold and the target instead of "tighten".
- "Cut on the breath" keeps the edits natural.
- "Do not touch 2:10 to 2:25" protects a deliberate moment.
- "List every cut with timestamps" gives you a way to verify without re-watching.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Sounds robotic | "Leave pauses up to 0.6 seconds. Only cut the long ones." |
| Cut a word I meant | "Restore the 'like' at 1:32, I meant it." |
| Still hear fillers | "You missed 'uh' at 0:48 and 1:15. Remove those and re-check the whole transcript for 'uh'." |
| Cuts click or pop | "Add a 2-frame audio crossfade on every cut." |
| Jump cuts too visible | "Where a cut is visible, punch in 10% on the second side." |
| Claimed done but not | "Read back every cut with timestamps so I can check." |

## FAQ

**Will it cut words that only sound like fillers?**
It works from the transcript, so "like" and "kind of" are the risk. State the exceptions and it keeps them.

**Can it remove retakes too?**
Yes, but ask separately. "Where I restart a sentence, keep the last attempt" is a retake rule. See /prompts/talking-head-cleanup for the combined cleanup prompt.

**How do I check it actually did it?**
Ask for the timestamped list of cuts. Users have caught the agent reporting a cleanup it did not fully make, and the list exposes that in seconds.

## Related

- /prompts/talking-head-cleanup
- /prompts/rough-cut
- /how-to/cut-a-talking-head
- /prompts/troubleshooting

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
