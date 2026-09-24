---
title: How to connect Claude Desktop to Vyra
description: Add Vyra's MCP server to Claude Desktop so Claude can read your footage, plan an edit, and drive the timeline from a normal chat.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Vyra exposes its editor over MCP (Model Context Protocol). Add the Vyra server to Claude Desktop, authorize it, open a project, and Claude becomes the operator: it can list assets, propose a cut plan, build the timeline, and capture frames to check its own work.**

## Before you start

- A Vyra account on an MCP plan (MCP Starter or MCP Pro).
- Claude Desktop installed and signed in to a plan that supports connectors.
- At least one Vyra project with footage uploaded and indexed.
- Your Vyra MCP server URL, found in your Vyra account settings. Full details at /docs/mcp.

## Steps

1. **Open Claude Desktop's connector settings.** Go to Settings, then the connectors or integrations section.
2. **Add a custom connector.** Choose to add a new MCP server and paste the Vyra MCP server URL from your account.
3. **Authorize.** A browser window opens for Vyra sign-in. Approve access. Claude Desktop now lists Vyra's tools.
4. **Start a new chat and name the project.** Tell Claude which Vyra project to work in, or ask it to list your projects.
5. **Ask for a plan before an edit.** Have Claude summarize the footage and propose a structure with timestamps. Approve or correct it.
6. **Execute in steps.** Rough cut, then captions, then music, one message each.
7. **Verify with frames.** Ask Claude to capture frames at specific timestamps so you see the result without leaving the chat.

## The prompt to use

```
You're connected to my Vyra project "studio vlog sept". List the assets and summarize what is in the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing anything.
```

## Check the result

- Claude's first reply names real clips from your project, not generic placeholders.
- After the edit, ask Claude to read the timeline back with start and end times and compare it to what it claimed.
- Capture frames at 0:03, 0:15, and 0:40 and check caption placement.

## FAQ

**Do I need to know Vyra's tool names?**
No. Describe the outcome. Claude picks the tools.

**Can I switch between Claude Desktop and the Vyra app?**
Yes. Same project. Edit in one, refine in the other.

## Related

- /docs/mcp
- /claude
- /prompts/using-claude-or-chatgpt-with-vyra
- /tutorials/connect-claude-code
