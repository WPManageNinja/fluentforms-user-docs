---
name: edit-fluentforms-doc
description: 'Edit the CONTENT of an EXISTING Fluent Forms documentation page in place (same slug, same file location) while preserving every site convention. Handles wording changes, new/removed sections, updated steps, and swapped or added screenshots. USE FOR: edit the X doc, update the wording on, add a section to, rewrite this page, fix the screenshot in, this doc is out of date, correct an error in the doc, expand the X guide. DO NOT USE FOR: creating a new page (use write-fluentforms-doc), renaming the slug / moving to another category / deleting / reordering the sidebar (use restructure-fluentforms-docs), or site-wide audits (use audit-fluentforms-docs).'
license: MIT
compatibility: 'VitePress repo using docs/<category>/<slug>.md layout with a hand-maintained .vitepress/sidebar.json and URL flattening via rewrites. Requires Node + npm to run docs:build.'
metadata:
  project: fluentforms-user-docs
  canonical-rules: CLAUDE.md
---

# Edit a Fluent Forms Doc

Modify an existing page in place. The slug, file path, and sidebar `link` stay the same.
Canonical conventions live in `CLAUDE.md` — this skill is the *procedure* for safe edits.

---

## Agent Behavior Rules

1. **DO** locate the exact file before editing and confirm it with the user.
2. **DO** preserve all conventions on every edit: short `/docs/<slug>` links, `**term**`
   bold (no inner spaces), no support boilerplate, "(Pro)" markers for Pro features.
3. **DO** keep the H1 as line 1; if the H1 display title changes, update the matching
   sidebar `text` (the `link`/slug stays the same).
4. **DO** put any new/replacement images in the doc's existing image folder
   `docs/public/images/<category>/<slug>/`.
5. **DO** end on a green `npm run docs:build`.
6. **DO NOT** change the slug, rename, or move the file — that is restructure work.
7. **DO NOT** introduce category-in-path links (`/docs/<category>/<slug>`) or relative links.
8. **DO NOT** add closing support boilerplate; link `[How to Get Support](/docs/how-to-get-support)`.
9. **DO NOT** touch unrelated docs.
10. **DO** Before starting editing on the doc map accurately that where and in which category which doc and what section need to update and and by matching the user journey. 

---

## Phase 1: Setup (Interactive)

### 1.1 Target page
> **Which doc?** (title, slug, or URL)

Resolve to a file: `find docs -name '<slug>.md'`. If ambiguous or not found, ask. Record
`TARGET_PATH`, `SLUG`, `CATEGORY`.

### 1.2 The change
> **What should change?** (new wording, add/remove a section, update steps, swap image…)

Record as `CHANGE`.

### 1.3 Images & title
> **Does this change involve images?** and **Does the page title (H1) change?**

Record `TOUCHES_IMAGES` and `TITLE_CHANGES`.

### 1.4 Confirm

| Parameter      | Value |
| -------------- | ----- |
| File           | ...   |
| Change         | ...   |
| Touches images | ...   |
| Title changes  | ...   |

Wait for confirmation.

---

## Phase 2: Context

1. Read `TARGET_PATH` fully.
2. Read `CLAUDE.md` for conventions.
3. If `TITLE_CHANGES`: read `.vitepress/sidebar.json` and find the entry whose `link` is
   `/docs/<SLUG>` (its `text` must be updated to match the new H1).
4. Read 1 neighbor doc in the same `CATEGORY` if matching house style for new content.

---

## Phase 3: Procedure

```
1. EDIT     - Apply CHANGE to TARGET_PATH using Edit.
              Enforce conventions on touched lines: short links, **term** bold,
              "(Pro)" markers, no boilerplate.

2. IMAGES   - If TOUCHES_IMAGES: add/replace files in
              docs/public/images/<CATEGORY>/<SLUG>/ and update the ![alt](/images/...)
              refs. Remove image refs whose files you deleted.

3. SIDEBAR  - If TITLE_CHANGES: update the matching entry's "text" in sidebar.json.
              Do NOT change its "link". Keep valid JSON.

4. BUILD    - npm run docs:build ; fix warnings; rebuild until clean.
```

---

## Phase 4: Verify & Report

Report:
- File edited: `TARGET_PATH`
- Summary of what changed
- Images touched? (added/replaced/removed)
- Sidebar `text` updated? (yes/no — link unchanged)
- Build: pass / fail

---

## Quick Reference

### Locate
```
File by slug:   find docs -name '<slug>.md'
Sidebar entry:  grep -n '/docs/<slug>' .vitepress/sidebar.json
Image folder:   docs/public/images/<category>/<slug>/
```

### Formats (unchanged from site rules)
```
Cross-link:  [Text](/docs/<slug>)            (never category in path, never relative)
Image ref:   ![Alt](/images/<category>/<slug>/<name>.ext)
Bold:        **term**                        (no inner spaces)
```

### Key Principles
1. **In place only** — same slug, same path, same sidebar link.
2. **Conventions survive edits** — don't regress links/bold/boilerplate.
3. **Title change ⇒ sidebar text change** (link stays).
4. **Images live in the doc's own folder.**
5. **Green build or it's not done.**
