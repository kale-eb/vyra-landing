---
title: How to connect Claude Desktop to Vyra
description: Add Vyra's MCP server to Claude Desktop so Claude can read your footage, plan an edit, and drive the timeline from a normal chat.
updated: 2026-10-29
category: tutorial
video: TODO
reels:
  - DZumPohtfW8
---

**Add the Vyra server to Claude Desktop, authorize it, open a project, and Claude can list assets, propose a cut, build the timeline, and capture frames to check its own work.**

## Before you start

- A Vyra account on an MCP plan (MCP Starter or MCP Pro).
- Claude Desktop installed, or claude.ai open in a browser. Free plans allow one custom connector. On Team or Enterprise, an Owner adds Vyra in Organization settings > Connectors first, then you click Connect on it in Customize > Connectors.
- At least one Vyra project with footage uploaded.
- The Vyra MCP server URL is `https://api.usevyra.com/mcp`. Details at /docs/mcp.

## Steps

1. **Open Connectors.** In Claude Desktop or on claude.ai, go to Customize > Connectors.
2. **Add the Vyra server.** Click "+ Add", then "Add custom connector". Name it `Vyra`, enter `https://api.usevyra.com/mcp`, and click Continue.
3. **Authorize.** Review the detected sign-in and click Continue. Under Authentication, choose "Sign in now" and click Add. Sign in to Vyra in your browser and approve.
4. **Pick a project.** Ask the agent to list your projects or create a new one. No browser tab needs to stay open. The agent edits on Vyra's servers, and you can open the project in the web or iPhone app any time.
5. **Start a chat and name the project**, or ask Claude to list them. If Vyra isn't on, click + in the chat input, then Connectors, and toggle Vyra on.
6. **Ask for a plan before an edit.** A footage summary and a structure with timestamps. Approve or correct it.
7. **Edit in steps.** Rough cut, captions, music. One message each.
8. **Verify with frames.** Ask Claude to capture frames at a few timestamps.

## The prompt to use

```
You're connected to my Vyra project "studio vlog sept". List the assets and summarize what is in the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing anything.
```

## Check the result

- Claude's first reply names real clips from your project.
- After the edit, ask it to read the timeline back and compare to what it claimed.
- Capture frames at 0:03, 0:15, and 0:40 and check caption placement.

## FAQ

**Do I need to know Vyra's tool names?**
No. Describe the outcome. Claude picks the tools.

**Can I switch between Claude Desktop and the Vyra app?**
Yes. Same project.

## Related

- /docs/mcp
- /claude
- /prompts/using-claude-or-chatgpt-with-vyra
- /tutorials/connect-claude-code
