---
title: How to match a reference video's style in Vyra
description: Attach a reference video, ask the agent to describe its pacing, captions, and music, then tell it exactly which of those properties to apply to your footage.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Attaching a reference isn't an instruction. Attach it, ask the agent to describe it in a few lines, fix the description if needed, then say exactly what to copy. Your footage stays your footage.**

## Before you start

- Have the reference as a file. A link to a post isn't enough.
- Your own footage is uploaded.
- Decide what you actually want from it. Usually two or three things, not everything.

## Steps

1. **Attach the reference** in the Reference tab, not the footage library, so it never lands on your timeline.
2. **Ask for a read.** Cut rhythm, caption style, music, color, in a few lines.
3. **Correct the read.** If it says one cut per second and you see two, say so.
4. **Name what to copy.** "Match the cut rhythm and caption style. Not the length or content."
5. **Say who wins.** "Where my instructions and the reference disagree, follow mine."
6. **Run it.** Then compare a frame from each side by side.
7. **Adjust one thing.** "Captions are right, cuts are too fast. Slow the middle."

## The prompt to use

```
Look at the attached reference video. First, describe its cut rhythm, caption style and placement, how the music behaves under speech, and its color grade in four lines. Then apply the cut rhythm and caption style to my footage. Do not match its length or content. My video should be 45 seconds about my studio setup. Where my instructions and the reference disagree, follow mine.
```

## Check the result

- A frame from your cut and a frame from the reference should read as the same family of caption.
- Count cuts in 10 seconds of each. They should be close.
- No reference footage on your timeline.

## FAQ

**Did it actually look at the reference?**
If it describes it accurately, yes. If the description is generic, ask again with "describe it specifically, with timestamps."

**My prompt and the reference conflicted. Which wins?**
Whichever you say.

## Related

- /prompts/reference-style
- /features/reference-style-matching
- /prompts/troubleshooting
- /glossary/reference-video
