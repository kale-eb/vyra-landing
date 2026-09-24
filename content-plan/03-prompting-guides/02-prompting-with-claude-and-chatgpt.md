---
slug: /prompts/using-claude-or-chatgpt-with-vyra
title: Prompting Vyra from Claude, ChatGPT, or Cursor (MCP)
summary: When you drive Vyra through MCP, your assistant plans the edit and calls Vyra's tools. The prompt style is the same as in-app, plus you can ask the assistant to inspect footage, propose a plan, and confirm before it cuts.
level: intermediate
reading_time: 5 min
---

# Prompting Vyra through Claude, ChatGPT, or Cursor

**Through MCP, your assistant becomes the editor's operator. Ask it to look at the footage first, propose a cut plan, then execute step by step. The same five-part prompt applies, but you gain the ability to say "show me the plan before you touch the timeline".**

## What is different from the in-app agent

| In-app agent | External assistant via MCP |
| --- | --- |
| Already has the project open | You tell it which project, or it lists them |
| Optimised for editing turns | Can also research, write scripts, and draft captions in the same chat |
| Applies changes directly | You can ask for a plan first |
| One model | Whatever model your subscription gives you |

## A good first message

```
You're connected to my Vyra project "studio vlog sept". Start by listing the assets and summarizing what's in the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing.
```

This does three things: forces the assistant to read the footage (it can see transcripts and scene analysis), gets a plan you can correct in text, and prevents a bad first cut.

## Then execute in steps

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

Asking for frame captures is the MCP equivalent of scrubbing the timeline. Use it before you trust a text summary of what changed.

## Prompts for the tasks people ask about most

Reference matching:
```
Look at the reference video attached to the project. Tell me its cut rhythm, caption style, and music behavior in three lines. Then apply those three things to my footage.
```

Batch work (a user asked about captioning 50 videos):
```
For each project in this folder, add phrase captions in the same style and export a 9:16 version. Tell me when each one is done.
```

Search inside footage:
```
Find every moment where I say "underpainting" or show the canvas from above. List them with timestamps and a one-line description.
```

## Common failure and the fix

The assistant says it did something and it did not. Ask: "Read the timeline back to me: every item with start and end times." If the timeline does not match its claim, say: "That is not what the timeline shows. Do X now." External models sometimes narrate an intent as if it were done; reading the timeline back exposes it.

## FAQ

**Which client works best?**
Any MCP-compatible client. Claude Desktop and Claude Code are the most tested. ChatGPT and Cursor also work.

**Can I mix in-app and MCP?**
Yes. The project is the same. Edit in one, refine in the other.

**Do I need to know the tool names?**
No. Describe the outcome. The assistant picks the tools.

## Related

- /docs/mcp
- /prompts/how-to-prompt-vyra
- /tutorials/connect-claude-desktop
- /for/claude-users
