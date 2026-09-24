---
title: "Reference style matching: make your footage look like a video you love"
description: Attach a reference video and Vyra applies its pacing, caption style, music behavior, and color to your own footage. Name what to copy and what to ignore.
updated: 2026-09-24
category: feature
---

**Vyra can match a reference video. Attach the video you want yours to feel like, say which properties to copy, and the agent applies that video's cut rhythm, caption treatment, music behavior, and color grade to your footage. Your clips, your order, their style. Attaching the reference is not enough on its own; tell it what to take.**

Every creator has a video they wish they had made. Reference matching turns that into an instruction instead of a mood board.

## How it works

1. Attach a reference video to your project. Vyra analyzes it separately from your footage.
2. Ask the agent to describe the reference first: pacing, captions, music, color. Correct anything it got wrong.
3. Say what to match and what not to: "pacing and captions yes, length and content no."
4. Vyra builds the edit from your footage using those properties.
5. If your instructions and the reference disagree, say which wins.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Describe the reference in three lines" | Reports cut rhythm, caption style, music behavior |
| "Match the cut rhythm" | Applies roughly the same cut frequency by section |
| "Copy the caption style: blocky, all caps, drop shadow" | Matches font weight, case, effects, placement |
| "Match how the music drops out on the punchline" | Reproduces the music behavior against your speech |
| "Same warm grade" | Applies a comparable color treatment |
| "Do not match its length or content" | Keeps your duration and story |

## Prompts to paste

```
Look at the attached reference. Copy its cut rhythm, caption style, and where the text sits on screen. Use only my footage, keep my order of points, and target 45 seconds.
```

```
Use the attached reference as the style guide. Match: the pace of cuts (about one per 1-2 seconds in the intro, slower in the middle), the caption font weight and placement, the way music drops out when the speaker makes a point, and the warm color grade. Do not match: its length or content. Where my instructions and the reference disagree, follow my instructions.
```

```
Describe the reference video's pacing, captions, and music in three lines before you edit. Then apply those three things to my studio vlog footage and show me frames at 0:02 and 0:15.
```

## Compared to the usual way

| | Traditional editor | Template AI tool | Vyra |
| --- | --- | --- | --- |
| Copying a style | Watch, note, rebuild by hand | Pick the closest template | Attach and describe |
| Partial matching | Manual | No | "Pacing yes, color no" |
| Applies to your real clips | Yes, hours of work | Often not | Yes, minutes |
| Checking the result | Watch it all | Watch it all | Ask for frames |

## Limits

- The agent matches what it can observe: rhythm, text, music behavior, grade. It does not copy the reference's footage or effects it cannot reproduce.
- Vague references ("make it cinematic") match vaguely. Name the properties.
- If you attach a reference and say nothing, the agent may not apply it. Say what to take.

## FAQ

**Does the agent look at the reference automatically?**
It has access to it. Tell it what to copy, or ask it to describe the reference first so you know it looked.

**My prompt and the reference conflicted. Which wins?**
Whichever you say. Add "where my instructions and the reference disagree, follow my instructions."

**Can I match only the captions?**
Yes. "Copy the caption style only. Keep my pacing and music."

**Can I reuse a reference across projects?**
Attach it to each project, or keep the description it produced and paste it as a prompt.

## Related

- /prompts/reference-style
- /prompts/troubleshooting
- /features/ai-captions
- /formats/talking-head
