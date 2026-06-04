---
name: restructure-fluentforms-docs
description: 'Perform STRUCTURAL operations on Fluent Forms docs while protecting reference integrity: rename a doc (change its slug/URL), move a doc to another category, delete a doc, merge two docs, or reorder the sidebar. Always rewrites inbound links, moves the image folder, and updates sidebar.json. USE FOR: rename this doc, change the slug, change the URL of, move X to another category, delete this doc, remove this page, merge these two docs, reorder the sidebar, change the order of pages. DO NOT USE FOR: content/wording edits (use edit-fluentforms-doc), creating a brand-new page (use write-fluentforms-doc), or read-only audits (use audit-fluentforms-docs).'
license: MIT
compatibility: 'VitePress repo using docs/<category>/<slug>.md layout with a hand-maintained .vitepress/sidebar.json and URL flattening via rewrites. Requires git, Node + npm to run docs:build.'
metadata:
  project: fluentforms-user-docs
  canonical-rules: CLAUDE.md
---

# Restructure Fluent Forms Docs

Structural changes are high-risk because **a slug is a public URL**: renaming, moving, or
deleting a doc breaks every inbound `/docs/<slug>` link, can orphan an image folder, and
desyncs the sidebar. This skill makes those changes safely. Canonical conventions live in
`CLAUDE.md`.

---

## Agent Behavior Rules

1. **DO** confirm the operation and exact old/new identifiers before any change.
2. **DO** find every inbound link before renaming/moving: `grep -rl '/docs/<old-slug>' docs`.
3. **DO** rewrite every inbound `/docs/<old-slug>` reference to the new slug.
4. **DO** move the doc's image folder with it and fix the in-doc image refs when the slug
   or category changes.
5. **DO** update `.vitepress/sidebar.json` — `link`, `text`, and group as needed — keeping
   valid JSON and groups `collapsed: true`.
6. **DO** use `git mv` for renames/moves so history is preserved.
7. **DO** end on a green `npm run docs:build`.
8. **DO NOT** rename or move without rewriting every inbound reference.
9. **DO NOT** leave an orphaned image folder under the old path.
10. **DO NOT** delete a doc without removing its sidebar entry AND reporting any inbound
    links that will now be dead.
11. **DO NOT** change page wording here (that's edit-fluentforms-doc).

---

## Phase 1: Setup (Interactive)

### 1.1 Operation
> **Which operation?** rename | move-category | delete | reorder | merge

Record as `OPERATION`.

### 1.2 Identifiers (by operation)
- **rename:** `OLD_SLUG`, `NEW_SLUG` (verify new is unique: `find docs -name '<new>.md'`)
- **move-category:** `SLUG`, `OLD_CATEGORY`, `NEW_CATEGORY`, target sidebar group
- **delete:** `SLUG` (+ category)
- **merge:** `FROM_SLUG`, `INTO_SLUG` (content of FROM is folded into INTO, then FROM deleted)
- **reorder:** sidebar group + the new item order

Resolve current path(s) with `find docs -name '<slug>.md'`. Record all.

### 1.3 Inbound link survey
Run `grep -rln '/docs/<slug>' docs` for each affected slug and show the user the count +
file list, so the blast radius is visible before confirming.

### 1.4 Confirm

| Parameter        | Value |
| ---------------- | ----- |
| Operation        | ...   |
| Old → new slug   | ...   |
| Old → new category | ... |
| Inbound links    | N files (listed) |
| Sidebar change   | ...   |

Wait for confirmation.

---

## Phase 2: Context

1. Read `CLAUDE.md`.
2. Read `.vitepress/sidebar.json` and locate the affected entry/entries.
3. Confirm the image folder path(s): `docs/public/images/<category>/<slug>/`.

---

## Phase 3: Procedure (by operation)

```
RENAME (slug change, same category):
  1. git mv docs/<cat>/<OLD_SLUG>.md docs/<cat>/<NEW_SLUG>.md
  2. git mv docs/public/images/<cat>/<OLD_SLUG> docs/public/images/<cat>/<NEW_SLUG>   (if exists)
  3. In the moved file, rewrite image refs /images/<cat>/<OLD_SLUG>/ -> /<NEW_SLUG>/
  4. grep -rl '/docs/<OLD_SLUG>' docs  -> rewrite each to /docs/<NEW_SLUG>
  5. sidebar.json: set entry "link" to /docs/<NEW_SLUG> (and "text" if title changed)
  6. BUILD

MOVE-CATEGORY (slug same, folder changes):
  1. git mv docs/<OLD_CAT>/<SLUG>.md docs/<NEW_CAT>/<SLUG>.md
  2. git mv docs/public/images/<OLD_CAT>/<SLUG> docs/public/images/<NEW_CAT>/<SLUG>  (if exists)
  3. In the moved file, rewrite image refs /images/<OLD_CAT>/<SLUG>/ -> /<NEW_CAT>/<SLUG>/
  4. sidebar.json: move the {text,link} entry into the new group (link is unchanged — URLs
     don't include category, so inbound /docs/<SLUG> links keep working)
  5. BUILD

DELETE:
  1. grep -rln '/docs/<SLUG>' docs  -> report inbound links that will break; fix or flag
  2. git rm docs/<cat>/<SLUG>.md
  3. rm -rf docs/public/images/<cat>/<SLUG>
  4. sidebar.json: remove the entry
  5. BUILD

MERGE (FROM into INTO):
  1. Fold FROM's content into docs/<cat>/<INTO_SLUG>.md (preserve conventions)
  2. Move any still-needed images into INTO's image folder; fix refs
  3. grep -rl '/docs/<FROM_SLUG>' docs -> rewrite to /docs/<INTO_SLUG>
  4. Delete FROM (file + image folder + sidebar entry)
  5. BUILD

REORDER:
  1. Reorder items within the group in sidebar.json (valid JSON, collapsed:true preserved)
  2. BUILD
```

---

## Phase 4: Verify & Report

Report:
- Operation performed; old → new path(s)
- Inbound links rewritten: count + file list
- Image folder moved/removed
- Sidebar diff (link/text/group/order)
- Dead links remaining (for delete): listed, or "none"
- Build: pass / fail

---

## Quick Reference

### Survey & locate
```
File by slug:    find docs -name '<slug>.md'
Inbound links:   grep -rln '/docs/<slug>' docs
Image folder:    docs/public/images/<category>/<slug>/
Sidebar entry:   grep -n '/docs/<slug>' .vitepress/sidebar.json
```

### Rules of thumb
```
URL = /docs/<slug>            -> category is NOT in the URL
move-category                 -> link UNCHANGED (only folder + image path move)
rename (slug change)          -> link CHANGES + all inbound links must be rewritten
```

### Key Principles
1. **Slug = public URL** — renaming breaks links unless you rewrite them all.
2. **Survey blast radius first** (`grep -rln`) and show it before acting.
3. **Image folder travels with the doc**; never orphan it.
4. **Sidebar stays in sync** — link/text/group/order all reconciled.
5. **Use `git mv`; finish on a green build.**
