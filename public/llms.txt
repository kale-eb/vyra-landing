# Vyra

> AI-controllable video editor via the Model Context Protocol (MCP). Your AI client opens projects, reads timelines, edits clips, applies effects, exports renders — using the same tools a human editor would.

Vyra runs in the user's browser; the AI client (Claude Code, Claude Desktop, Codex, or any MCP-compatible client) drives it remotely over MCP. The user must keep at least one Vyra tab open in their browser for editing tools to work — tabs auto-bind on focus.

## MCP Server

- URL: `https://api.usevyra.com/mcp`
- Transport: Streamable HTTP (POST + optional GET SSE notification stream)
- Auth: OAuth 2.1 with PKCE — the client opens an authorization URL in the user's browser; the user signs into Vyra and approves the connection.

## Setting up an MCP client

The exact command differs by client. Here are the common ones:

### Claude Code (CLI)

```
claude mcp add vyra https://api.usevyra.com/mcp
```

Then run any `claude` command — it will open the OAuth authorization URL in the user's browser.

### Claude Desktop

Edit the Claude Desktop config file:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add:

```json
{
  "mcpServers": {
    "vyra": {
      "url": "https://api.usevyra.com/mcp"
    }
  }
}
```

Restart Claude Desktop. It will prompt for OAuth authorization the first time it starts a session that needs Vyra.

### OpenAI Codex (and other Codex-compatible clients)

Edit the Codex MCP config:

```toml
[mcp_servers.vyra]
url = "https://api.usevyra.com/mcp"
```

Restart Codex; the OAuth flow opens on first use.

### Generic MCP client

Any client that implements the Streamable HTTP transport and OAuth 2.1 + PKCE can connect:

- Server URL: `https://api.usevyra.com/mcp`
- The OAuth metadata is at `https://api.usevyra.com/.well-known/oauth-authorization-server`
- After auth, POST JSON-RPC requests to the server URL. GET the same URL for a server-pushed notification SSE stream (optional).

## After setup

Once the client is authorized:

1. Open `https://app.usevyra.com` in the user's browser and sign in with the same account they authorized.
2. Open any project. The tab auto-binds as the editor's dispatch target — no button click required. A green indicator in the top-right confirms.
3. Ask the AI to do anything an editor would — "trim the dead air", "add captions in TikTok style", "color grade like a moody film", "export this in 1080p". The AI uses Vyra's MCP tools to make the changes; the user sees them in real time.

## Available tools (summary)

- View / search project assets, view timeline, view individual item details
- Add media, text, shapes, layouts, motion graphics, captions
- Edit visual / timing properties, move / split / clone / delete items
- Color grading, effects (WebGL + CSS), masking, transitions, keyframes
- Export the project to MP4 / WebM; poll export status
- Browse / apply templates, styles, presets
- Reference videos for stylistic inspiration

The full tool catalog is exposed via the standard MCP `tools/list` method. Each tool has a description and JSON-schema input.

## Help

If you get stuck: `searchHelpDocs(query)` searches the user-facing help library inside the MCP server.
