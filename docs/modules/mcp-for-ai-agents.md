---
description: "Fluent Forms ships a built-in MCP server that connects your forms and entries to AI clients like Claude, Cursor, and Codex through the Model Context Protocol."
---

# MCP for AI Agents

Fluent Forms ships with a built-in **MCP (Model Context Protocol)** server that connects your forms to AI clients like **Claude Code, Claude Desktop, Cursor, and Codex**. Once it's set up, your AI assistant can look up a form, read entries, check submission trends, or update a notification as part of an ordinary conversation. No third-party proxy, no extra service to host, and no API keys to manage outside WordPress.

Think of MCP as a bridge between your AI client and Fluent Forms. Instead of you opening the admin and clicking around, the AI calls the same actions you would, but through a secure, authenticated endpoint. You stay in control: every request runs as the WordPress user whose **application password** you generate, with exactly that user's Fluent Forms access and form scope, so an agent can never reach a form its user cannot. Tools that change data run a preview-then-confirm step before they write, and you can revoke access at any time.

> [!Note]
> Fluent Forms ships the AI agent tools, but they only become available once the companion **FluentToolkit** plugin is installed and active. [Step 2](#step-2-install-fluenttoolkit) covers the install.

## Open the MCP settings

From your WordPress admin, go to **Fluent Forms → Global Settings → MCP for AI Agents**. Everything you need lives on this one page: the on/off toggle, the list of available tools, the endpoint URL, and the connection snippet for your preferred AI client.

## Step 1: Enable the MCP server

Switch on the **Enable MCP Server** toggle at the top of the page. When enabled, Fluent Forms exposes its abilities through the adapter so AI agents can read and write your form data with your authorization.

![MCP for AI Agents settings page with an arrow pointing at the Enable MCP Server toggle](/images/modules/mcp-for-ai-agents/enable-mcp-server-toggle.png)

If you ever want to pause access for every connected AI client at once, just flip this toggle off. The endpoint stops responding to MCP requests immediately, no other changes needed.

## Step 2: Install FluentToolkit

Fluent Forms exposes its MCP tools through a small companion plugin called **FluentToolkit**. Until it's installed and active, the page shows a notice under the tools list with an **Install FluentToolkit** button.

![MCP settings page showing the available tools grid and an arrow pointing at the Install FluentToolkit button](/images/modules/mcp-for-ai-agents/available-tools-install-fluenthub.png)

Click **Install FluentToolkit**. WordPress installs and activates the plugin in the background, then the page refreshes into the connected state and the endpoint fields become available.

> [!Note]
> Prefer to install it yourself? Download FluentToolkit directly from [https://static.wpmanageninja.com/fluent-toolkit.zip](https://static.wpmanageninja.com/fluent-toolkit.zip), then upload the ZIP via **Plugins → Add New → Upload Plugin** and activate it. Come back to this page afterwards and the endpoint fields appear.

## Step 3: Confirm the tools and endpoint

Once the toggle is on, the page shows the details you'll want to keep handy:

| Field | What it shows |
| --- | --- |
| **Tools available** | The number of MCP tools exposed, shown next to the toggle (for example, `20 tools available`). |
| **Available tools** | The full grid of tool names, each tagged **Read** or **Write** so you can see at a glance what an agent can change. |
| **Endpoint URL** | The address your AI client connects to, usually `https://your-site.com/wp-json/fluentform/mcp`. Click **Copy** to grab it in one click. |

If the tool count shows `0`, the toggle in Step 1 likely isn't on yet, or FluentToolkit isn't active.

## Step 4: Generate a WordPress application password

AI clients sign in using a **WordPress application password**. This is a feature built directly into WordPress 5.6 and later, so you don't need any extra plugin to use it. Each application gets its own password, which means you can revoke a single AI client without affecting your main login or any of your other tools.

The MCP settings page links straight to the right screen: click **Create application password** just under the **Endpoint URL** field.

To create one:

1. In WordPress admin, go to **Users → Profile** and scroll down to the **Application Passwords** section.
2. Enter a name that identifies the connection (for example, `mcp`, `Claude Code`, or `Cursor`). This name shows up in the table afterward so you can tell connections apart.
3. Click **Add Application Password**.

![WordPress profile page showing the New Application Password Name field filled in with an arrow pointing at the Add Application Password button](/images/modules/mcp-for-ai-agents/wp-application-password-create.png)

WordPress generates a one-time password formatted like `xxxx xxxx xxxx xxxx xxxx xxxx`. Click **Copy** and save it somewhere safe. **This password is shown only once and cannot be retrieved later.**

![WordPress profile page showing the newly generated application password with the Copy button](/images/modules/mcp-for-ai-agents/wp-application-password-generated.png)

## Step 5: Connect your AI client

Back on **MCP for AI Agents**, scroll to the connection fields. Fluent Forms encodes your credentials and pre-fills a ready-to-paste snippet for the AI client you pick.

1. In the **WordPress username** field, type the username you generated the password for.
2. Paste the **Application password** (with or without spaces, both work) into the password field.
3. Pick the tab matching your AI client: **Claude Code**, **Claude Desktop**, **Cursor**, **Codex**, or **Other / curl**.
4. Click **Copy snippet**.

![MCP settings page with the username and application password filled in and an arrow pointing at the Copy snippet button](/images/modules/mcp-for-ai-agents/connect-client-copy-snippet.png)

The Basic auth header is base64-encoded for you right in the browser, so there's no manual encoding to do and your password never leaves the page.

> [!Warning]
> The generated snippet already contains your encoded credentials. Treat it like a password: never paste it into a public repository, a shared chat, or a screenshot.

### Before you start: Node.js and npx

Some clients need **Node.js** (which includes `npx`) on your computer:

| Client | Needs Node.js/npx? |
| --- | --- |
| **Claude Code** | Yes — the client itself installs through npm. |
| **Claude Desktop** | Yes — it reaches your site through a small `npx` helper. |
| **Codex** | Yes, if your snippet starts with `npx`. |
| **Cursor** | No — it connects to the URL directly. |

To check whether you already have it, open Terminal (macOS) or Command Prompt (Windows) and run:

```
node -v
```

If you see a version number like `v20.11.0`, you're set. If you get "command not found", download the **LTS** installer from [nodejs.org](https://nodejs.org), run it, then close and reopen your terminal.

> [!Tip]
> Not comfortable in a terminal? Ask your AI agent to check and install it for you.

### Connecting Claude Code

Here's the full Claude Code flow as a worked example. The same idea applies to the other clients, only the snippet format and where you paste it change.

**1. Copy the snippet.** With your username and application password filled in, select the **Claude Code** tab and click **Copy snippet**. It looks like this:

```
claude mcp add \
  --transport http \
  fluentform https://your-site.com/wp-json/fluentform/mcp \
  --header "Authorization: Basic <encoded-credentials>"
```

**2. Run it in your terminal.** Paste the snippet into the terminal where Claude Code is installed and press Enter.

**3. Check the confirmation.** Claude Code confirms that the `fluentform` MCP server was added to your local config, pointed at your endpoint with the Basic auth header:

![Claude Code terminal confirming the fluentform MCP server was added to the local config](/images/modules/mcp-for-ai-agents/claude-code-terminal-confirm.png)

You can verify the connection anytime by running `claude mcp list` or `claude mcp get fluentform`.

### Connecting Claude Desktop

Claude Desktop reads its MCP servers from a configuration file, and it will open that file for you.

1. Go to **Settings → Developer → Edit Config**. Claude Desktop creates the file if it doesn't exist yet and shows you where it lives — on macOS it's `~/Library/Application Support/Claude/claude_desktop_config.json`, and on Windows it's `%APPDATA%\Claude\claude_desktop_config.json`.
2. Open the file in a plain text editor. TextEdit on macOS or Notepad on Windows both work fine.
3. Paste the snippet from the **Claude Desktop** tab in Fluent Forms, keeping the surrounding JSON valid if you already have other servers listed.
4. Save the file and **fully quit Claude Desktop**, then open it again. Closing the window isn't enough: quit it from the menu bar (macOS) or the system tray (Windows).

### Connecting Cursor

1. In Cursor, open the command palette and search for **Cursor Settings**, then go to **Tools & MCPs** in the left sidebar.
2. Under **Installed MCP Servers**, click **New MCP Server**. Cursor opens an editor for the `mcp.json` config file.
3. Paste the snippet from the **Cursor** tab in Fluent Forms.
4. Save `mcp.json` and reload Cursor. Open **Tools & MCPs** again and you'll see the Fluent Forms server listed with all its available tools underneath.

## Step 6: Verify it's working

Open your AI client and ask it something only Fluent Forms would know. For example:

> _"List all my Fluent Forms and how many entries each one has."_

The agent calls your endpoint, fetches the data, and replies with your actual forms and entry counts. If you see real data in the reply, your connection is live and authenticated. From here, you can ask the AI to perform any of the actions in the next section.

## What your AI agent can actually do

Once connected, your AI client gets access to **20 Fluent Forms tools**. You don't call these by name. The AI picks the right tool based on what you ask in plain language. Here's an overview of what's available, grouped by area.

### Forms

Tools for browsing and building your forms.

- **Get Forms Context** (Read) — Pulls a summary of your forms so the agent understands what exists before it acts.
- **List Forms** (Read) — Browses all your forms with their status and entry counts.
- **Get Form** (Read) — Inspects one form's fields, settings, and configuration.
- **Create Form** (Write) — Builds a new form from your description, the same way [Create a Form](/create-a-form) works in the builder.

**Example prompts:**

- _"List all my published forms and how many entries each one has."_
- _"Create a simple contact form with name, email, and message fields."_

### Entries and submissions

Tools for reading and managing the entries your forms collect. These mirror what you'd do on the [Managing Entries](/managing-entries) screen.

- **List Submissions** (Read) — Browses entries for a form, with filters like status or date range.
- **Get Submission** (Read) — Looks up one entry's full submitted data.
- **Update Submission Status** (Write) — Changes an entry's status, such as marking it read, unread, or favorite.
- **Add Submission Note** (Write) — Attaches an internal note to an entry.
- **Delete Submission** (Write) — Removes an entry.
- **Bulk Update Submissions** (Write) — Applies a status change to many entries at once.

**Example prompts:**

- _"Show me the last 10 entries from my Contact Form."_
- _"Mark every unread entry on the Job Application form as read."_

### Reports and stats

Tools for the numbers behind your forms, matching the [Reports Dashboard](/reports-dashboard-overview).

- **Get Form Stats** (Read) — Returns entry counts, views, and conversion rate for a form.
- **Get Submissions Trend** (Read) — Shows how submissions changed over a period of time.
- **Get Payment Summary** (Read) — Summarizes payments collected through a form, the same data you see in [Payment Reports](/payment-reports).
- **Get Submissions Report** (Read) — Builds a broader breakdown across entries, similar to [Submission Reports](/submission-reports).

**Example prompts:**

- _"What's the submission trend for my Newsletter form over the last 30 days?"_
- _"How much did the Donation form collect this month?"_

### Styling, fields, and integrations

Tools for changing how a form looks and what it contains.

- **List Integrations** (Read) — Lists the integrations connected to a form.
- **Get Form Styling** (Read) — Reads a form's current style settings.
- **Update Form Styling** (Write) — Updates a form's styles, the same settings the [Official Form Styler](/official-form-styler) exposes.
- **Update Form Fields** (Write) — Adds, edits, or reorders the fields on a form.

**Example prompts:**

- _"Which integrations are connected to my Contact Form?"_
- _"Add a phone number field to my Registration form, right after the email field."_

### Email notifications

Tools for the emails a form sends after submission.

- **List Email Notifications** (Read) — Lists the notifications configured on a form.
- **Create or Update Email Notification** (Write) — Creates a new notification or updates an existing one, the same as [Admin & User Email Notifications](/setup-adminuser-email-notifications).

**Example prompts:**

- _"What email notifications are set up on my Contact Form?"_
- _"Add an admin notification on the Feedback form that emails me on every submission."_

## Security and revoking access

Application passwords are scoped to a single connection, so revoking one only disconnects that AI client. Your main WordPress login and any other connected apps stay untouched.

- **Revoke an MCP connection**: go to **Users → Profile → Application Passwords**, find the row by name, and click **Revoke**.
- **Disable MCP entirely**: turn off the **Enable MCP Server** toggle on the settings page. The endpoint stops responding to MCP requests immediately.
- **Rotate credentials**: revoke the old password, generate a fresh one, then re-copy the snippet from the settings page and paste it back into your AI client.
- **Writes stay under review**: every tool tagged **Write** runs a preview-then-confirm step, so an agent can't change a form or an entry without your confirmation.

> [!Tip]
> Give each AI client its own application password (one for Cursor, one for Claude Desktop, and so on). That way you can revoke a single client without breaking the others.

## Troubleshooting

- **Tools available shows 0.** Make sure the **Enable MCP Server** toggle is on and FluentToolkit is active. The count refreshes the moment the adapter reconnects.
- **The Install FluentToolkit notice is still showing after installing.** Hard-refresh the settings page. If it persists, go to **Plugins** and confirm **FluentToolkit** is both installed and **Active**.
- **"Unauthorized" error in the AI client.** The username or application password is wrong. Generate a new password, copy it immediately, paste it back into the settings page, then re-copy the snippet into your client.
- **Fluent Forms tools not appearing in the AI client.** Restart the client fully after running the connect command or saving the config file. Closing the window usually isn't enough — quit Claude Desktop from the menu bar or system tray and reopen it.
- **Claude Desktop or Codex shows a "server failed to start" error.** Node.js is probably missing. Run `node -v` in your terminal; if you get "command not found", install the LTS release from [nodejs.org](https://nodejs.org) and restart the client.
- **Claude Desktop loses all its MCP servers after an edit.** The `claude_desktop_config.json` file has a JSON syntax error, usually a missing or extra comma. Paste the file into your AI agent and ask it to fix the syntax.
- **Connection works locally but not in production.** Confirm the **Endpoint URL** uses the same scheme (`http` or `https`) and domain your AI client is configured with. WordPress application passwords also require a reachable REST API at `/wp-json/`.

If something still isn't working, see [How to Get Support](/get-support).
