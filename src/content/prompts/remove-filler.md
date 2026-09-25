---
title: Filler word removal prompts
description: "A filler removal prompt lists the words to cut, the exceptions, the pause threshold, and how to close the gaps. Name the exceptions or a real \"like\" gets cut."
updated: '2026-09-24'
category: prompts
---

**List the words to cut, the ones to keep, and the pause length. If you don't name the exceptions, it will cut a "like" you meant.**

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
Clean the speech in this 4-minute talking head. Remove every "um", "uh", "er", "you know", "sort of", "kind of", and "like" when it is filler. Keep "like" when it means "similar to" or "enjoy" and keep "kind of" when it is the answer to a question. Remove any repeated word where I say the same word twice in a row. Cut pauses longer than 0.4 seconds down to 0.2 seconds. Leave pauses under 0.4 seconds alone. Where a cut would land mid-breath, cut on the breath instead. Do not touch the section from 2:10 to 2:25, the pause there is intentional. When you are done, list every cut with timestamps.
```

## What each part does

The word list is explicit. "Keep like when it means" handles the one word that's often not filler. "0.4 down to 0.2" is a number, not "tighten." "Cut on the breath" keeps it natural. The list at the end lets you check without re-watching.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Sounds robotic | "Leave pauses up to 0.6 seconds." |
| Cut a word I meant | "Restore the 'like' at 1:32." |
| Still hear fillers | "You missed 'uh' at 0:48 and 1:15. Re-check the whole transcript." |
| Cuts click | "Add a 2-frame audio crossfade on every cut." |

## FAQ

**Can it remove retakes too?**
Yes, ask separately. See /prompts/talking-head-cleanup for the combined prompt.

**How do I know it did it?**
Ask for the timestamped list. Users have caught it claiming a cleanup it didn't finish. The list shows it in seconds.

## Related

- /prompts/talking-head-cleanup
- /prompts/rough-cut
- /how-to/cut-a-talking-head
- /prompts/troubleshooting

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
