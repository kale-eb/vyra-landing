---
slug: /for/claude-users
title: Vyra for Claude users: edit real footage by describing the edit
summary: Vyra connects to Claude through MCP so the Claude subscription you already pay for can see your footage, cut it, caption it, and build motion graphics from the same chat you use for everything else, with no new AI subscription and no new interface.
updated: 2026-09-23
---

# Vyra for Claude users

**If you already pay for Claude, you already have a video editor's brain. Vyra gives it eyes and hands: connect through MCP, upload footage, and edit by talking to Claude the way you already do.**

## What you make

- Talking heads and updates: [/formats/talking-head](/formats/talking-head)
- Tutorials and screen walkthroughs: [/formats/app-walkthrough](/formats/app-walkthrough)
- Vlogs and recaps: [/formats/vlog](/formats/vlog)
- Explainers with motion graphics: [/formats/explainer](/formats/explainer)
- Highlight montages: [/formats/montage](/formats/montage)

## Your three most-used prompts

Plan before cutting:
```
You are connected to my Vyra project "studio vlog sept". List the assets and summarize what is in the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing.
```

Execute the plan:
```
Build the rough cut exactly as planned. No captions or music yet. When done, read the timeline back to me with start and end times for every item.
```

Find and overlay:
```
Find every moment where I mention the brush set. At each one, cut to the close-up brush footage for 2-3 seconds, then back to me. Capture frames at each cut so I can check.
```

## A typical workflow

1. Connect Claude Desktop or Claude Code to Vyra through MCP (a few minutes, once).
2. Upload footage in Vyra. It transcribes every word and analyzes every scene so Claude can search it.
3. In Claude, ask for a summary and a plan. Approve or edit the plan in text.
4. Have Claude execute step by step: cut, then captions, then music. Ask for frame captures to verify.
5. Open the Vyra timeline for any hand tweaks, then export.

## What Vyra does that matters for you

- No new interface. The prompt style you use for writing and code works for video.
- Claude can inspect the footage: transcripts, scene descriptions, and captured frames, not just filenames.
- Claude can do the rest of the job in the same chat: write the script, draft the caption, then cut the video.
- Bring-your-own-AI pricing: you pay Vyra for the editor and video understanding, not for a second model.

## What it does not do

- It does not replace your Vyra plan. You need both: Claude for the reasoning, Vyra for the tools.
- It does not generate footage. Claude edits what you uploaded.

## Example

Example creator: TODO

## FAQ

**Which Claude clients work?**
Claude Desktop and Claude Code are the most tested. Any MCP-compatible Claude surface works.

**Can I mix Claude and the in-app agent?**
Yes. Same project, same timeline. Start in one, refine in the other.

**Does Claude see the reference video automatically?**
It has access. Tell it what to copy: pacing, captions, music, or all three.

## Related

- [/formats/talking-head](/formats/talking-head)
- [/formats/explainer](/formats/explainer)
- [/how-to/make-motion-graphics](/how-to/make-motion-graphics)
- [/prompts/using-claude-or-chatgpt-with-vyra](/prompts/using-claude-or-chatgpt-with-vyra)
