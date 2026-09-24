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
- The Vyra MCP server URL: `https://api.usevyra.com/mcp`. Full details at /docs/mcp.

## Steps

1. **Open the Claude Desktop config file.** On macOS it is `~/Library/Application Support/Claude/claude_desktop_config.json`; on Windows it is `%APPDATA%\Claude\claude_desktop_config.json`.
2. **Add the Vyra server and restart Claude Desktop.**

   ```json
   {
     "mcpServers": {
       "vyra": {
         "url": "https://api.usevyra.com/mcp"
       }
     }
   }
   ```

3. **Authorize.** The first time a session needs Vyra, Claude Desktop opens an OAuth authorization URL in your browser. Sign in to Vyra and approve. Claude Desktop now lists Vyra's tools.
4. **Open a project in the browser.** Go to `https://app.usevyra.com`, sign in with the same account you authorized, and open a project. The tab auto-binds as the editor's dispatch target and a green indicator appears top-right. Keep at least one Vyra tab open.
5. **Start a new chat and name the project.** Tell Claude which Vyra project to work in, or ask it to list your projects.
6. **Ask for a plan before an edit.** Have Claude summarize the footage and propose a structure with timestamps. Approve or correct it.
7. **Execute in steps.** Rough cut, then captions, then music, one message each.
8. **Verify with frames.** Ask Claude to capture frames at specific timestamps so you see the result without leaving the chat.

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
