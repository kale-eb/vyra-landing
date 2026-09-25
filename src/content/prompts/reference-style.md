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

**Attaching a reference isn't an instruction. Say what to copy from it. Pacing, captions, music, color, text placement, or all of them.**

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
Use the attached reference as the style guide. Match the pace of cuts (roughly one every 1-2 seconds in the intro, slower in the middle), the caption font weight and placement, the way music drops out when the speaker makes a point, and the warm color grade. Do not match its length or its content. My video should be 45 seconds and about my studio setup.
```

If your prompt and the reference disagree, say which wins. One user wasn't sure whether her style prompt "overrode" the reference. This line settles it:
```
Where my instructions and the reference disagree, follow my instructions.
```

## Fixes

- Not sure it looked at the reference. "Describe the reference's pacing, captions, and music in three lines before you edit."
- Copied the wrong thing. "Match only the captions. Leave the cut rhythm as it is."
- Reference footage ended up in my video. "Remove any clips from the reference. My footage only."

## FAQ

**Does it use the reference automatically?**
It can see it, but it won't apply it unless you say what to take from it.

**Can I reference one moment instead of the whole video?**
Yes. Scrub the reference to that frame, click "Add to chat," and say what you like about it.

## Related

- /prompts/captions
- /prompts/troubleshooting
- /features/reference-style-matching
- /tutorials/match-a-reference-video

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.
