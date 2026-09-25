---
title: 'Prompting Vyra from Claude, ChatGPT, or Cursor (MCP)'
description: >-
  When you drive Vyra through MCP, your assistant plans the edit and calls
  Vyra's tools. The prompt style is the same as in-app, plus you can ask the
  assistant to inspect footage, propose a plan,...
updated: '2026-09-24'
category: prompts
level: intermediate
reading_time: 5 min
---

**Over MCP your assistant runs the editor. Same five-part prompt as in the app, plus you can ask it to look first and show you a plan before it cuts anything.**

## What's different from the in-app chat

| In-app | Over MCP |
| --- | --- |
| Project is already open | You name the project, or ask for the list |
| Built for editing turns | Can also write scripts and captions in the same chat |
| Edits right away | You can ask for a plan first |
| One model | Whatever your subscription gives you |

## A good first message

```
You're connected to my Vyra project "studio vlog sept". Start by listing the assets and summarizing what's in the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing.
```

This makes it read the footage, gives you a plan to correct in text, and avoids a bad first cut.

## Then go in steps

```
OK. Build the rough cut exactly as planned. No captions or music yet.
```
```
Now add 3-5 word captions, white, bold, lower third.
```
```
Add the track I uploaded, duck it under my voice.
```
```
Capture frames at 0:03, 0:15, and 0:40 so I can check the text placement.
```

Frame captures are how you scrub the timeline from a chat. Use them before you trust a summary.

## Other prompts people ask for

Reference:
```
Look at the reference video attached to the project. Tell me its cut rhythm, caption style, and music behavior in three lines. Then apply those three things to my footage.
```

Batch (one user had 50 videos to caption):
```
For each project in this folder, add phrase captions in the same style and export a 9:16 version. Tell me when each one is done.
```

Search:
```
Find every moment where I say "underpainting" or show the canvas from above. List them with timestamps and a one-line description.
```

## When it says it did something and didn't

Ask "Read the timeline back to me, every item with start and end times." If that doesn't match what it claimed, say so and tell it what to do now.

## FAQ

**Which client works best?**
Any MCP client. Claude Desktop and Claude Code are the most tested. ChatGPT and Cursor work too.

**Can I mix in-app and MCP?**
Yes. Same project either way.

## Related

- /docs/mcp
- /prompts/how-to-prompt-vyra
- /tutorials/connect-claude-desktop
- /for/claude-users
