---
title: "AI captions: word-by-word or phrases, one video or fifty"
description: Vyra captions from its own transcript. Word-by-word or 3-5 word phrases, styled however you describe, and the same style across a batch.
updated: 2026-09-24
category: feature
---

**Vyra already has every word of your video timestamped. So captions are just a description. Word-by-word for TikTok, 3-5 word phrases if you want them readable, bigger on the words that matter, off during b-roll. Over MCP you can run the same style across fifty videos in one go.**

## How it works

1. Upload a clip. Vyra transcribes it with a timestamp on every word.
2. Describe the captions. Grouping, weight, color, position, which words to emphasize.
3. Vyra puts caption items on the timeline. They're editable like any text.
4. Fix a word by quoting it. "At 0:12 it should say 'gesso'."
5. Reuse the style next time, or batch it from Claude, ChatGPT, or Cursor.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Word-by-word captions, TikTok style" | One word at a time, timed to speech |
| "3-5 word phrases, white, lower third" | Phrase groups below the face |
| "Make 'eighty percent' bigger and yellow" | Emphasis on those words |
| "Copy the caption style from the reference, blocky, all caps, drop shadow" | Matches it |
| "Turn captions off during the b-roll at the end" | Time-ranged captions |
| "Keep captions off my face" | Moves them |

## Prompts to paste

```
Add captions for all speech in this 45-second Reel. 3-5 word phrases, bold white text with a thin black outline, centered in the lower third. No animation.
```

```
Caption this word by word, bold, white, slightly above center so it clears the TikTok UI. Make "never again" and "eighty percent" bigger and yellow. No captions during the last 5 seconds of b-roll.
```

```
For every project in this folder, add 3-5 word captions in white with a black outline in the lower third, then export 1080x1920. Tell me when each one is done.
```

## Compared to the usual way

| | Traditional editor | Auto-caption button | Vyra |
| --- | --- | --- | --- |
| Getting text on screen | Type it or import an SRT | One click, one style | Describe any style |
| Emphasis on a word | Manual, per word | Rarely | Name the words |
| Matching a reference | Eyeball it | No | Attach it and say so |
| Fifty videos | Fifty sessions | Fifty clicks | One instruction |

## Limits

- Accuracy depends on the audio. Wind, music under speech, and crosstalk cause mistakes. Quote the fix and it's corrected.
- Captions use the fonts in Vyra's catalog. The default is Inter Bold.
- Translation isn't a caption feature yet.

## FAQ

**Can I edit a caption after?**
Yes. Click and type, or tell the agent which word to fix.

**Word-by-word or phrases?**
Word-by-word for fast short-form. Phrases when people need to actually read it.

**How do I caption a batch?**
Connect Claude, ChatGPT, or Cursor over MCP and give one instruction that loops over projects.

## Related

- /prompts/captions
- /how-to/choose-captions
- /features/footage-understanding
- /mcp
