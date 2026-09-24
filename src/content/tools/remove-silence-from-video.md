---
title: "Remove silence, pauses, and filler words from a video"
description: "Vyra finds pauses, ums, and repeated takes in the transcript and cuts them at a threshold you set, leaving the delivery natural instead of robotic."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Talking head, tutorial, podcast, and course recordings"
  - "Input: Any video with speech, one speaker or several"
  - "Output: MP4 up to 4K, or WebM up to 1080p"
  - "Time: Minutes for a 10-minute recording once processed (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Removing silence from a video means cutting the dead air, filler words, and false starts so a recording sounds like the version you meant to say. Vyra does it from the transcript, with a pause threshold you choose, and keeps the small breaths that make speech sound human.**

## How it works

1. Upload the recording. Transcription runs automatically with word-level timing.
2. Tell the chat what to remove: pauses over a threshold, filler words, retakes, or all three.
3. The agent cuts those regions on the timeline and closes the gaps.
4. Ask for a timestamped list of cuts and scrub any you doubt.
5. Optionally hide jarring jump cuts with a punch-in or b-roll, then export.

## What you can control

| Setting | Options |
| --- | --- |
| Pause threshold | Any value, for example 0.3, 0.5, or 1 second |
| Filler words | um, uh, like, you know, or your own list |
| Retakes | Keep the last attempt, the first, or the one you name |
| Protected regions | Timestamps the agent must not touch |
| Cut treatment | Jump cut, punch-in on the second clip, or cover with b-roll |
| Range | Whole recording or a section |

## Prompts to paste

```
Clean up this talking head. Remove ums, uhs, pauses longer than half a second, and any sentence I restart. Keep the best version of each sentence. Leave small natural pauses so it does not feel robotic.
```

```
Cut every pause over 0.4 seconds. Where a cut is jarring, punch in 10 percent on the second clip instead of a jump cut. Do not touch 1:20 to 1:35, that pause is intentional.
```

```
Remove "like" only when it is filler, not when I mean it. Then list every cut with timestamps.
```

## When to use something else

- You need the cleanup applied inside Premiere, Final Cut, or Resolve without leaving that timeline. Gling and similar plugins hand off to those apps.
- The recording is mostly music or ambient sound. Silence removal is a speech tool; use manual trimming instead.
- Two people talk over each other constantly. Any transcript-based cut will struggle; separate the tracks first.

## FAQ

**Will it make me sound choppy?**
Not if you set a sensible threshold and ask it to keep natural pauses. Half a second is a common starting point for talking heads.

**How do I check what it removed?**
Ask for the list of cuts with timestamps. It takes ten seconds to verify against the timeline.

**Can it remove one specific repeated line?**
Yes. Quote the line. "Remove the repeated 'so basically' at 2:14" is more reliable than "remove repetition."

**Does this work over MCP?**
Yes. Claude, ChatGPT, or Cursor can run the same cleanup with the same thresholds.

## Related

- /prompts/talking-head-cleanup
- /prompts/remove-filler
- /how-to/cut-a-talking-head
- /tools/edit-video-by-typing
