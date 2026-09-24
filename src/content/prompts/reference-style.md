---
title: >-
  Reference style prompts: copy pacing, captions, and music from a video you
  like
description: >-
  A reference prompt names which properties to copy from the attached video:
  pacing, captions, music energy, color, text placement. Attaching a reference
  is not enough on its own.
updated: '2026-09-24'
category: prompts
---

**A reference prompt names which properties to copy from the attached video: pacing, captions, music energy, color, text placement. Attaching a reference is not enough on its own.**

Minimal:
```
Match the reference video.
```

Standard:
```
Look at the attached reference. Copy its cut rhythm, caption style, and where the text sits on screen. Use only my footage.
```

Full:
```
Use the attached reference as the style guide. Match: the pace of cuts (roughly one every 1-2 seconds in the intro, slower in the middle), the caption font weight and placement, the way music drops out when the speaker makes a point, and the warm color grade. Do not match: its length or its content. My video should be 45 seconds and about my studio setup.
```

When two instructions conflict (a user asked whether their editing-style prompt "overrode" the reference): say which wins. "Where my instructions and the reference disagree, follow my instructions."

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
