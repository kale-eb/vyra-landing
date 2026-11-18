---
title: "How to find B-roll in your footage with Claude"
description: "To find B-roll in your own footage with Claude, connect Vyra and describe the action or object the shot needs to show."
updated: '2026-11-14'
category: how-to
level: beginner
reading_time: 4
facts:
  - "Workflow: Claude with Vyra MCP"
  - "Input: Footage you supply"
  - "Web access: Three-day trial, then a paid plan"
reels:
  - DZumPohtfW8
---

**To find B-roll in your own footage with Claude, connect Vyra and describe the action or object the shot needs to show. Review candidate timestamps before inserting a clip.**

You may have filmed the right detail and forgotten which recording contains it. Start from the sentence the B-roll should explain. A request for any nice shot gives the editor much less to work with than a request for the brush touching the canvas.

The MCP docs list visual and transcript search, asset browsing and timeline editing. See the [official MCP guide](https://www.usevyra.com/docs/mcp) and [Caleb’s headless-server post](https://www.usevyra.com/blog/vyra-mcp-v2).

## Work through the edit

1. Identify the Vyra project and the footage available to search.
2. Write the line or action the supporting shot should explain.
3. Ask Claude to search visual descriptions and transcripts where relevant.
4. Review the candidate clips and useful time ranges.
5. Insert the chosen section and check its fit with the narration.

## Make the important choices

| What you find | Editing choice |
| --- | --- |
| The subject appears without being named | Use a visual description in the search |
| You need a specific spoken phrase | Ask for transcript matches |
| No candidate shows the action | Use another explanation or film the missing shot |

## A brief to try

```
Find a shot in my uploaded footage where the brush touches the edge of the canvas. Return candidate clips and time ranges before editing. Use only my footage. If you cannot find it, tell me rather than adding stock or generating video.
```

Check the whole candidate section before choosing it. A matching object in one frame may not show the process the narration describes. Keep the narration accurate to the shot and avoid implying a sequence you never filmed.

## Review and export

Connect through the [Vyra MCP guide](/mcp). Web has a three-day trial, then requires a paid plan. Your AI client and Vyra are separate services. Check the current [web plans](/pricing) before starting a longer workflow.

The related reel is an existing creator example. It is not a recording of this exact workflow or a verified test of the suggested brief.

## FAQ

**Can Claude search what is visible as well as spoken words?**
The Vyra MCP docs list searches by visual content and transcript. Check the returned candidates yourself.

**Will this use stock footage?**
The brief explicitly limits the search to your supplied footage. Verify the selected source before export.

**Can I use this when I never filmed the action?**
Film it or change the explanation. This workflow does not generate missing video footage.

## Sources

The [Vyra MCP docs](https://www.usevyra.com/docs/mcp) support the inspection and editing operations described here. [Caleb’s MCP v2 post](https://www.usevyra.com/blog/vyra-mcp-v2) supports the headless project workflow. Checked November 14, 2026. The example brief is a suggested workflow, not a measured test result.

## Related

- /how-to/make-shot-list-from-footage-with-claude
- /how-to/review-ai-video-edit-with-claude
- /mcp
