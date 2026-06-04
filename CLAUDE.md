# CLAUDE.md — FluentForms User Documentation

End-user documentation site for the **Fluent Forms** WordPress plugin by WPManageNinja.
Built with **VitePress 1.6+**, **Vue 3.5**, Node.js **ESM** (`"type": "module"`).

## Commands

| Command | Action |
| --- | --- |
| `npm run docs:dev` | Local dev server |
| `npm run docs:build` | Production build → `.vitepress/dist/` |
| `npm run docs:preview` | Preview the production build |

Run `npm run docs:build` after any structural change (new doc, rename, link edit, sidebar change) to catch broken links and parser errors.

## Repository layout

```
/
├── index.md                  ← home page (layout: home)
├── package.json              ← ESM, devDeps: vitepress, vue
├── .vitepress/
│   ├── config.mjs            ← site config: title, rewrites, nav, sidebar source
│   ├── sidebar.json          ← SINGLE source of truth for sidebar nav
│   └── theme/
│       ├── index.js
│       └── custom.css        ← brand color #2C6CFF + .youtube-embed responsive class
└── docs/
    ├── public/images/<category>/<doc-slug>/<file>.ext   ← static assets
    └── <category>/<doc-slug>.md                          ← every doc lives in a category folder
```

### Category folders — 2-level (16 sections, mirroring the sidebar)

The disk tree mirrors the category plan: **`docs/<section>/<sub-group>/<slug>.md`** for
sectioned areas, or **`docs/<section>/<slug>.md`** for flat sections (no deeper nesting than
this — depth is 2 or 3). The 16 sections:

`getting-started` (flat) · `creating-forms`/{form-builder-basics, conversational-forms, specialized-form-types} · `form-fields`/{general-fields, advanced-fields, container-fields, post-taxonomy-fields} · `configuring-forms`/{form-settings, conditional-logic, calculations} · `design-styling` (flat) · `notifications-confirmations`/{email-notifications, confirmations} · `publishing-embedding` (flat) · `payments`/{getting-started-with-payments, payment-fields, payment-gateways, payment-reports} · `managing-submissions`/{entries, reports} · `integrations`/{email-marketing, crm, automation, team-chat, other-apps} · `security-spam` (flat) · `modules` (flat) · `advanced-developer`/{shortcodes, custom-fields-meta, logs-tracking, localization} · `import-export-migration` (flat) · `account-license` (flat) · `help-support` (flat)

(`docs/public/` is assets, not a category.)

## URL rewrite rule — the most important convention

On disk: `docs/<section>/[<sub-group>/]<doc-slug>.md` → In browser: `/docs/<doc-slug>`
(section + sub-group stripped).

Defined in `config.mjs` (two patterns cover 3-level and 2-level paths):
```js
rewrites: {
  'docs/:section/:sub/:doc.md': 'docs/:doc.md',
  'docs/:section/:doc.md': 'docs/:doc.md',
}
```

**Consequence — all internal links use the SHORT form:**
- ✅ `[Link Text](/docs/doc-slug)`
- ❌ `[Link Text](/docs/section/doc-slug)` or `[Link Text](/docs/section/sub/doc-slug)`

Doc slugs are globally unique, so the flat URL never collides. (Never nest deeper than
section/sub-group on disk, or neither rewrite pattern will match.)

## Sidebar — mandatory step when adding/renaming docs

The sidebar is 100% driven by `.vitepress/sidebar.json`. VitePress does **not** auto-discover docs. Every new or renamed `.md` file **must** be reflected in `sidebar.json`.

Shape — **2-level nested** array of journey sections, all groups `collapsed: true`, links in
SHORT `/docs/<slug>` form. A section either lists leaf items directly, or holds sub-groups
(objects with their own `items`). A leaf item's `text` is a **short label** (see style rule 1):
```json
[
  { "text": "Getting Started", "collapsed": true,
    "items": [ { "text": "Install Fluent Forms", "link": "/docs/how-to-install-fluent-forms" } ] },
  { "text": "Form Fields", "collapsed": true, "items": [
    { "text": "General Fields", "collapsed": true,
      "items": [ { "text": "Dropdown", "link": "/docs/dropdown-field-in-fluent-forms" } ] }
  ] }
]
```
When adding a doc, place it in the right **section → sub-group** (16 sections; see the live
`sidebar.json`). Leaf `link` is `/docs/<slug>` regardless of which category folder the file
sits in on disk.

### Section overview (hub) pages

The 8 large sub-grouped sections each have a marketing-led **overview/hub page** that explains
the section's features and interlinks every doc inside it:

- File lives at `docs/<section>/<section>-overview.md` (2-level — directly under the section,
  even though the section has sub-groups). Slug = `<section>-overview`, URL `/docs/<section>-overview`.
- Wired as the **first** leaf under its section in `sidebar.json`, labelled `"Overview"`:
  `{ "text": "Overview", "link": "/docs/<section>-overview" }` (above the sub-group objects).
- Sections with overviews: `creating-forms`, `form-fields`, `configuring-forms`,
  `notifications-confirmations`, `payments`, `managing-submissions`, `integrations`,
  `advanced-developer`. When you add a new doc to one of these sections, also add its link to
  the matching `## sub-group` bullet list in that section's overview page.

## Images

Image folders **mirror the docs tree** (same section/sub-group path as the `.md`):
- Storage: `docs/public/images/<section>/[<sub-group>/]<doc-slug>/<filename>.ext`
- Reference: `![Alt text](/images/<section>/[<sub-group>/]<doc-slug>/<filename>.ext)`

`docs/public/` is VitePress `publicDir` (set via `vite.publicDir` in config), so `/images/...` resolves at the site root.

## Markdown writing style

1. First line: `# H1` — the full, descriptive page title (e.g. `# How to Install Fluent Forms`). The sidebar uses a **short label** (e.g. "Install Fluent Forms") that is intentionally different and lives only in `sidebar.json`; local search still indexes the H1.
2. Short intro paragraph (1–3/4 sentences): what the feature is, who it's for. Mainly a little explian about the documentation and what the user will learn.
3. `##` for major sections, `###` for sub-topics.
4. Bullet lists for steps/feature lists; numbered lists only when strict sequence matters.
5. Bold (`**Settings**`) important terms on first use. No inner whitespace inside markers (`**save**`, never `**Configure** button` — CommonMark renders the latter literally).
6. Cross-references always: `[Descriptive Text](/docs/doc-slug)`.
7. Never hardcode `https://fluentforms.com/...` for internal doc links.
8. Pro-only features: add "(Pro)" after the name or a note.
9. No fenced code blocks for UI instructions — plain text/bullets only.
10. Short, direct sentences. User-facing docs, not developer prose.
11. No support-boilerplate closers (e.g. "contact our support team", "reach out for assistance"). For help, link `[How to Get Support](/docs/how-to-get-support)`.
12. Maintin the writing tone with the existing documentations.
13. Use second person 'you/your', active sentence, and present tense sentence. 

### YouTube embeds

Use the responsive `.youtube-embed` class (defined in `custom.css`), not raw iframes:
```html
<div class="youtube-embed"><iframe src="https://www.youtube.com/embed/<id>" allowfullscreen></iframe></div>
```

## Hard constraints — never do these

- Never create a `.md` directly under `docs/` — it MUST be inside a category subfolder.
- Never put the category in a link path (`/docs/category/slug`).
- Never add/rename a doc without updating `sidebar.json`.
- Never use relative links (`./slug`, `../slug`) — always absolute `/docs/<slug>`.
- Never commit `node_modules/`, `.vitepress/dist/`, or `.vitepress/cache/` (all in `.gitignore`).
- ESM project — never use `require()` or CommonJS in config files.

## Brand

- Color: `#2C6CFF` (set via `--vp-c-brand-*` in `custom.css`).
- Logo/favicon: `docs/public/brand-images/`.
