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

**Nine out of ten disappointing results trace back to one of the problems below. Find the symptom, paste the fix.**

Every line here comes from a real user call. The quotes are paraphrased lightly.

## "It didn't cut the repetition even though I asked"

Fix:
```
List every cut you made with timestamps. Then remove these specific repeated lines: [quote them].
```
Why: "remove repetition" is a judgment call. Quoting the lines removes the judgment.

## "I asked it to copy the title style and it didn't"

Fix:
```
Copy the title style from the reference exactly: blocky all-caps, glow, hard drop shadow. Show me a frame at 0:02 when done.
```
Why: name the three visible properties, then ask for a frame so you can check without re-watching.

## "I don't know if it looked at the reference"

Fix:
```
Describe the reference video's pacing, captions, and music in three lines before you edit.
```
Why: if it can describe it, it looked. If the description is wrong, correct it before anything gets cut.

## "My prompt overrode the reference (or the reference overrode my prompt)"

Fix:
```
Where my instructions and the reference disagree, follow my instructions.
```

## "I'm spending more time going back and forth than editing myself"

Fix: one change per message, and make it measurable.
```
Cut 10 more seconds from the middle. Nothing else.
```
Why: bundled corrections ("fix captions, change music, and re-cut the middle") multiply the chance one of them lands wrong.

## "It said it did it, but it didn't"

Fix:
```
Read the timeline back to me with start and end times for every item.
```
Then compare to what it claimed.

## "The first result wasn't worth the wait"

Fix: front-load. Before the first edit:
```
Summarize what's in my footage, then propose a structure with timestamps. Wait for my OK.
```
A user put it well: the first result has to feel "worth it" after upload and processing. A plan you approve is the cheapest way to get there.

## "I used ChatGPT to write a perfect prompt and it still wasn't right"

Fix: shorter. Generic "professional, cinematic, engaging" prompts give the agent nothing about your footage. Replace with five plain sentences: target, keep, cut, text, sound.

## "It added zooms, transitions, and effects I didn't want"

Fix:
```
Remove all zooms, transitions, and effects. Straight cuts only. Do not add anything I did not ask for.
```

## "I asked for something specific and it worked great"

The prompt that worked (podcast overlay): "When this guy is talking about a prompt, show a UI of ChatGPT and the prompt being written." Notice it names the trigger (when he talks about X), the content (a UI of ChatGPT), and the action (the prompt being written). Copy that shape.

## Related

- /prompts/how-to-prompt-vyra
- /prompts/reference-style
- /prompts/talking-head-cleanup
