---
title: How to get a first rough cut in Vyra
description: Turn indexed footage into a first draft by giving the agent a target length, platform, what to keep, and what to cut, then tighten it one correction at a time.
updated: 2026-09-24
category: tutorial
video: TODO
---

**A rough cut prompt states the target (length, platform, purpose), what to keep, and what to cut. Leave captions and music for the second pass. The agent builds the timeline; you correct it one sentence at a time.**

## Before you start

- Footage is uploaded and shows as ready. See the upload tutorial if not.
- You know the delivery target: platform, aspect ratio, and length.
- You have one or two lines you definitely want in the video, quoted exactly.

## Steps

1. **State the target.** Open the agent chat and give the format, length, and platform in the first sentence.
2. **Say what must survive.** Quote the exact line or describe the exact moment for the opening and the ending.
3. **Say what to cut.** Pauses over a threshold, filler words, retakes, looking at notes. Thresholds beat adjectives.
4. **Say what not to add.** "Straight cuts only, no zooms or transitions" keeps the first draft clean.
5. **Watch it once.** Use the preview. Note the single biggest problem.
6. **Correct one thing.** "Cut 10 more seconds from the middle" or "swap the intro clip for the one outside." Then watch again.
7. **Ask for the cut list.** When it looks right, ask for every cut with timestamps so you can verify the agent did what it said.

## The prompt to use

```
Make a 60-second vertical rough cut for Reels from this footage. Open on the line "nobody tells you this about commissions", then the three main points in order, and end on the shot where I hold up the finished piece. Prefer takes where I do not restart a sentence. Cut pauses over half a second, filler words, and any moment I look at my notes. Straight cuts only. No captions or music yet.
```

## Check the result

- Scrub the timeline. Every item should be footage you recognize, in the order you asked for.
- Total length is within 10 percent of the target. If not, say which section to shorten.
- Ask "List every cut you made with start and end timestamps" and spot-check three of them.

## FAQ

**The agent restructured my points. How do I stop that?**
Add "keep it in the order I filmed it" or "keep it in this order: A, B, C" to the prompt.

**It says it removed retakes but one is still there.**
Quote the line: "At 0:34 the sentence starts twice. Keep only the second attempt." Pointing beats re-asking.

## Related

- /prompts/rough-cut
- /prompts/how-to-prompt-vyra
- /tutorials/add-captions
- /how-to/cut-a-talking-head
