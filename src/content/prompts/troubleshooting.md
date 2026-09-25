---
title: 'Why your AI edit came out wrong, and the sentence that fixes it'
description: >-
  Most bad AI edits come from a missing target, a bundled request, or an
  unstated reference. Each has a one-line fix you add to your next message.
updated: '2026-09-24'
category: prompts
level: beginner
reading_time: 4 min
---

**Most bad results come from one of the problems below. Find yours, paste the fix.**

These all come from real user calls, lightly paraphrased.

## "It didn't cut the repetition even though I asked"

```
List every cut you made with timestamps. Then remove these specific repeated lines: [quote them].
```
"Remove repetition" is a judgment call. Quoting the lines removes the judgment.

## "I asked it to copy the title style and it didn't"

```
Copy the title style from the reference exactly. Blocky all-caps, glow, hard drop shadow. Show me a frame at 0:02 when done.
```
Name the three things you can see, then ask for a frame so you can check.

## "I don't know if it looked at the reference"

```
Describe the reference video's pacing, captions, and music in three lines before you edit.
```
If it can describe it, it looked. If the description is wrong, fix that first.

## "My prompt overrode the reference, or the other way around"

```
Where my instructions and the reference disagree, follow my instructions.
```

## "I'm spending more time going back and forth than editing myself"

One change per message, with a number.
```
Cut 10 more seconds from the middle. Nothing else.
```
Bundled fixes ("fix captions, change music, re-cut the middle") mean one of them lands wrong.

## "It said it did it, but it didn't"

```
Read the timeline back to me with start and end times for every item.
```
Then compare.

## "The first result wasn't worth the wait"

Ask for a plan before the first edit.
```
Summarize what's in my footage, then propose a structure with timestamps. Wait for my OK.
```

## "I used ChatGPT to write a perfect prompt and it still wasn't right"

Shorter. "Professional, cinematic, engaging" tells it nothing about your footage. Five plain sentences do. Target, keep, cut, text, sound.

## "It added zooms and transitions I didn't want"

```
Remove all zooms, transitions, and effects. Straight cuts only. Do not add anything I did not ask for.
```

## One that worked

"When this guy is talking about a prompt, show a UI of ChatGPT and the prompt being written." It names the trigger, the thing to show, and what it should be doing. Copy that shape.

## Related

- /prompts/how-to-prompt-vyra
- /prompts/reference-style
- /prompts/talking-head-cleanup
