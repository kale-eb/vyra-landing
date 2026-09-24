---
title: "AI captions: word-by-word or phrases, one video or fifty"
description: Vyra generates captions from its own transcript as word-by-word pops or 3-5 word phrases, styled by description, and can run the same style across many videos.
updated: 2026-09-24
category: feature
---

**Vyra adds captions by reading its own word-level transcript and placing text where you tell it to. Word-by-word for TikTok pacing, 3-5 word phrases for readability, emphasis on specific words, off during b-roll. You describe the style once and it applies. With an MCP agent you can run the same style across fifty videos in one task.**

Captions are the most requested edit and the most tedious one to style by hand. Because Vyra already has every word timestamped, captioning is a description, not a chore.

## How it works

1. Upload a clip. Vyra transcribes it with timestamps for every word.
2. Describe the caption treatment: grouping, font weight, color, position, animation, emphasis words.
3. Vyra generates caption items on the timeline, editable like any text.
4. Correct a word by quoting it: "at 0:12 it should say 'gesso'".
5. Reuse the style on the next video, or batch it across a folder from Claude, ChatGPT, or Cursor.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Word-by-word captions, TikTok style" | One word at a time, timed to speech |
| "3-5 word phrases, white, lower third" | Phrase groups placed below the face |
| "Make 'eighty percent' bigger and yellow" | Word-level emphasis styling |
| "Copy the caption style from the reference: blocky, all caps, drop shadow" | Reads the reference and matches it |
| "Turn captions off during the b-roll at the end" | Time-ranged captions |
| "Keep captions off my face" | Repositions to clear the subject |

## Prompts to paste

```
Add captions for all speech in this 45-second Reel. Group into 3-5 word phrases, bold white text with a thin black outline, centered in the lower third. No pop or bounce animation.
```

```
Caption this word by word, each word appearing as it is spoken, bold sans-serif, white, slightly above center so it clears the TikTok UI. Make "never again" and "eighty percent" larger and yellow. No captions during the last 5 seconds of b-roll.
```

```
For every project in this folder, add 3-5 word captions in white with a black outline in the lower third, then export a 9:16 version at 1080x1920. Tell me when each one is done.
```

## Compared to the usual way

| | Traditional editor | Auto-caption button | Vyra |
| --- | --- | --- | --- |
| Getting text on screen | Type or import SRT | One click, one style | Describe any style |
| Word-level emphasis | Manual per word | Rarely | Name the words |
| Matching a reference | Eyeball it | No | Attach it and say so |
| Fifty videos | Fifty sessions | Fifty clicks | One task from your agent |

## Limits

- Accuracy depends on audio. Wind, music under speech, and crosstalk raise error rates. Quote the fix and it is corrected.
- Captions use the fonts in Vyra's catalog. Default caption face is Inter Bold.
- Translation is not a caption feature today.

## FAQ

**Can I edit a caption after it is generated?**
Yes. Captions are normal text items on the timeline. Click and type, or tell the agent which word to fix.

**Word-by-word or phrases, which is better?**
Word-by-word for fast, energetic short-form. Phrases for anything where the viewer needs to read comfortably. Say which one you want.

**Can it match another creator's caption style?**
Attach a reference video and say "copy the caption style: blocky, all caps, glow, drop shadow." Name the properties you see.

**How do I caption a batch?**
Connect Claude, ChatGPT, or Cursor over MCP and give one instruction that loops over projects.

## Related

- /prompts/captions
- /how-to/choose-captions
- /features/footage-understanding
- /mcp
