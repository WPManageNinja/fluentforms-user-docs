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

### Category folders (under `docs/`, 29 total)

`account-management`, `advance-fields`, `automation`, `container-fields`, `crm`, `email-marketing`, `features-and-functionalities`, `form-editor`, `form-entries`, `form-notification`, `form-settings-form-building`, `form-style-template`, `general-fields`, `getting-started`, `help-and-support`, `import-export`, `manage-entries`, `miscellaneous`, `notification`, `others`, `payment`, `payment-fields`, `payment-integration`, `post-fields`, `publishing-form-form-building`, `reports`, `security`, `shortcode`, `taxonomy-fields`

(`docs/public/` is assets, not a category.)

## URL rewrite rule — the most important convention

On disk: `docs/<category>/<doc-slug>.md` → In browser: `/docs/<doc-slug>` (category stripped).

Defined in `config.mjs`:
```js
rewrites: { 'docs/:category/:doc.md': 'docs/:doc.md' }
```

**Consequence — all internal links use the SHORT form:**
- ✅ `[Link Text](/docs/doc-slug)`
- ❌ `[Link Text](/docs/category/doc-slug)`

Doc slugs are globally unique across all categories, so the flat URL never collides.

## Sidebar — mandatory step when adding/renaming docs

The sidebar is 100% driven by `.vitepress/sidebar.json`. VitePress does **not** auto-discover docs. Every new or renamed `.md` file **must** be reflected in `sidebar.json`.

Shape — array of section objects, all groups `collapsed: true`, links in SHORT `/docs/<slug>` form:
```json
{ "text": "Section Name", "collapsed": true,
  "items": [ { "text": "Page Title", "link": "/docs/doc-slug" } ] }
```

## Images

- Storage: `docs/public/images/<category>/<doc-slug>/<filename>.ext`
- Reference: `![Alt text](/images/<category>/<doc-slug>/<filename>.ext)`

`docs/public/` is VitePress `publicDir` (set via `vite.publicDir` in config), so `/images/...` resolves at the site root.

## Markdown writing style

1. First line: `# H1` title matching the sidebar display name.
2. Short intro paragraph (1–3 sentences): what the feature is, who it's for.
3. `##` for major sections, `###` for sub-topics.
4. Bullet lists for steps/feature lists; numbered lists only when strict sequence matters.
5. Bold (`**term**`) important terms on first use. No inner whitespace inside markers (`**term**`, never `** term **` — CommonMark renders the latter literally).
6. Cross-references always: `[Descriptive Text](/docs/doc-slug)`.
7. Never hardcode `https://fluentforms.com/...` for internal doc links.
8. Pro-only features: add "(Pro)" after the name or a note.
9. No fenced code blocks for UI instructions — plain text/bullets only.
10. Short, direct sentences. User-facing docs, not developer prose.
11. No support-boilerplate closers (e.g. "contact our support team", "reach out for assistance"). For help, link `[How to Get Support](/docs/how-to-get-support)`.

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
