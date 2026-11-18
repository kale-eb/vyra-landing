---
title: "How to make a shot list from existing footage with Claude"
description: "To make a shot list from existing footage with Claude, ask Vyra to inventory the project assets, describe useful actions and separate filmed coverage from missing shots."
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

**To make a shot list from existing footage with Claude, ask Vyra to inventory the project assets, describe useful actions and separate filmed coverage from missing shots. Review the list before building a timeline.**

This list is for what you already filmed. It helps you see whether a tutorial has the setup, the action and the result before asking for a finished edit. A written shot suggestion should never be mistaken for footage that exists.

The MCP docs support asset browsing, visual and transcript search. Caleb confirms access to projects and the library. See the [official MCP guide](https://www.usevyra.com/docs/mcp) and [Caleb’s headless-server post](https://www.usevyra.com/blog/vyra-mcp-v2).

## Work through the edit

1. Connect Claude to the Vyra project containing the shoot.
2. Ask for the available assets and useful time ranges.
3. Group the filmed material around the steps your video needs to explain.
4. Mark missing coverage separately and verify uncertain descriptions against the clips.
5. Choose the shots to use before asking for the rough cut.

## Make the important choices

| What you find | Editing choice |
| --- | --- |
| A filmed step has several angles | List the alternatives without counting them as separate steps |
| An essential action is missing | Mark it as a filming task |
| A clip description is uncertain | Inspect the source before assigning it a role |

## A brief to try

```
Inventory the footage in this project for a painting tutorial. List each useful shot with its source and time range. Separate what is actually filmed from suggestions for missing coverage. Do not edit yet or invent filenames.
```

Compare the list with the real assets. Check that a clip described as a finished result actually shows the result clearly and that timestamps fall inside the source. Keep suggested reshoots in a separate section so they cannot silently enter the edit plan as existing material.

## Review and export

Connect through the [Vyra MCP guide](/mcp). Web has a three-day trial, then requires a paid plan. Your AI client and Vyra are separate services. Check the current [web plans](/pricing) before starting a longer workflow.

The related reel is an existing creator example. It is not a recording of this exact workflow or a verified test of the suggested brief.

## FAQ

**Is this a script for generating new footage?**
No. It organizes footage you already have and identifies what you may need to film.

**Can the agent inspect my library?**
Caleb describes library access, and the MCP docs list project-asset browsing and search.

**Should I build the timeline immediately?**
Review the coverage first. A short missing shot may matter more than starting the edit early.

## Sources

The [Vyra MCP docs](https://www.usevyra.com/docs/mcp) support the inspection and editing operations described here. [Caleb’s MCP v2 post](https://www.usevyra.com/blog/vyra-mcp-v2) supports the headless project workflow. Checked November 14, 2026. The example brief is a suggested workflow, not a measured test result.

## Related

- /how-to/find-b-roll-in-your-footage-with-claude
- /how-to/review-ai-video-edit-with-claude
- /mcp
