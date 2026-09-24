---
title: How to match a reference video's style in Vyra
description: Attach a reference video, ask the agent to describe its pacing, captions, and music, then tell it exactly which of those properties to apply to your footage.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Attaching a reference is not an instruction. Attach it, ask the agent to describe what it sees in three lines, correct that description if needed, then say exactly which properties to copy: cut rhythm, caption style, text placement, music behavior, color. Your footage stays your footage.**

## Before you start

- Have the reference as a file you can upload. A link to a post is not enough.
- Your own footage is uploaded and indexed.
- Decide what you actually want from the reference. Usually it is two or three things, not everything.

## Steps

1. **Attach the reference.** Use the reference area, not the footage library, so it never lands on your timeline.
2. **Ask for a read.** Have the agent describe the reference's cut rhythm, caption style, music behavior, and color in a few lines.
3. **Correct the read.** If it says "one cut per second" and you see two, say so. The description is the plan.
4. **Name what to copy.** "Match the cut rhythm and caption style. Do not match the length or the content."
5. **Set precedence.** "Where my instructions and the reference disagree, follow my instructions."
6. **Run the edit.** Then compare a frame from the reference and a frame from your cut side by side.
7. **Adjust one property at a time.** "The captions are right, the cuts are too fast. Slow the middle section."

## The prompt to use

```
Look at the attached reference video. First, describe its cut rhythm, caption style and placement, how the music behaves under speech, and its color grade in four lines. Then apply the cut rhythm and caption style to my footage. Do not match its length or content: my video should be 45 seconds about my studio setup. Where my instructions and the reference disagree, follow mine.
```

## Check the result

- Capture a frame from your cut at a caption moment and compare it to a frame from the reference. Font weight, size, and position should read as the same family.
- Count cuts in a 10-second stretch of each. They should be within one or two of each other.
- Confirm no reference footage appears on your timeline.

## FAQ

**Did the agent actually look at the reference?**
If it can describe it accurately, yes. If the description is generic, ask again with "describe the reference specifically, with timestamps."

**My style prompt and the reference conflicted. Which wins?**
Whichever you say wins. State it explicitly in the prompt.

## Related

- /prompts/reference-style
- /features/reference-style-matching
- /prompts/troubleshooting
- /glossary/reference-video
