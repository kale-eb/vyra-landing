---
title: "How to add timed video review notes with Claude"
description: "To add timed review notes with Claude and Vyra, inspect the project, identify each issue at its timeline time and add clear markers before requesting edits."
updated: '2026-11-15'
category: how-to
level: beginner
reading_time: 4
facts:
  - "Workflow: Claude with Vyra MCP"
  - "Input: Your existing project"
  - "Web access: Three-day trial, then a paid plan"
reels:
  - DZumPohtfW8
---

**To add timed review notes with Claude and Vyra, inspect the project, identify each issue at its timeline time and add clear markers before requesting edits.**

“The captions are wrong somewhere near the middle” is difficult to act on. A note attached to the moment where the name appears gives you a specific revision to check. Start with notes so a review does not quietly become an unapproved rewrite.

The MCP docs list timeline inspection, timestamped screenshots and marker management. See the [official MCP documentation](https://www.usevyra.com/docs/mcp).

## Work through the edit

1. Connect Claude to the intended Vyra project.
2. Ask it to inspect the current timeline without changing media.
3. Describe each issue with its timeline time and proposed action.
4. Add markers with short review labels and check their placement.
5. Approve the notes you want acted on before requesting the corresponding edits.

## Make the important choices

| Situation | What to check |
| --- | --- |
| A cut needs review | Mark the join in timeline time |
| A source moment is different from its timeline position | Keep the two time references separate |
| A note is uncertain | Label it for review rather than applying a speculative fix |

## A brief to try

```
Review the current timeline and add markers for unclear captions or awkward joins. Name each issue and the proposed change. Do not move clips or rewrite text until I approve the notes.
```

## Check the result

Open a sample of markers in the editable project and check that each points to the right moment. If the timeline changes later, review the note locations again. A useful note explains what someone should inspect rather than simply saying “fix this.”

Connect through the [MCP setup guide](/mcp). Web has a three-day trial, then requires a paid plan. Your AI client and Vyra are separate services. [Caleb’s headless MCP release](https://www.usevyra.com/blog/vyra-mcp-v2) explains working without an open browser.

The related reel is an existing creator example, not a screen recording or a test of this exact workflow.

## FAQ

**Are source timestamps and timeline timestamps interchangeable?**
No. A trimmed or moved clip can appear at a different time in the edit. Identify which time a note uses.

**Does adding a marker approve the edit?**
Treat a marker as a review note. State separately which changes you want applied.

**Must the browser stay open?**
Caleb’s headless MCP release says the server can work without an open browser. Review the project in the app when ready.

## Sources

The [official MCP docs](https://www.usevyra.com/docs/mcp) support the inspection and editing operations named above. [Caleb’s headless MCP post](https://www.usevyra.com/blog/vyra-mcp-v2) documents project access without an open browser. Checked November 15, 2026. The example brief and review method are practical suggestions for your own material, not reported product-test results.

## Related

- /how-to/review-ai-video-edit-with-claude
- /how-to/make-shot-list-from-footage-with-claude
- /mcp
