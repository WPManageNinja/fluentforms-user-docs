---
name: write-fluentforms-doc
description: 'Create a NEW Fluent Forms end-user documentation page in this VitePress site, correctly placed in a category folder and wired into the hand-curated sidebar. Optionally converts pasted HTML or raw markdown source into a clean doc. USE FOR: add a doc, write a new doc page, create a doc for X, document this feature, write a guide for, new documentation page, turn this content into a doc, import this article. DO NOT USE FOR: editing an existing page (use edit-fluentforms-doc), renaming/moving/deleting a page or reordering the sidebar (use restructure-fluentforms-docs), site-wide quality checks (use audit-fluentforms-docs), or non-docs markdown like README.md / CLAUDE.md.'
license: MIT
compatibility: 'VitePress repo using docs/<category>/<slug>.md layout with a hand-maintained .vitepress/sidebar.json and URL flattening via rewrites. Requires Node + npm to run docs:build.'
metadata:
  project: fluentforms-user-docs
  canonical-rules: CLAUDE.md
---

# Write a Fluent Forms Doc

Create one new documentation page end-to-end: place it in the right category folder, write
it in the house style, set up its image folder, wire it into `sidebar.json`, and verify with
a clean build. Canonical conventions live in `CLAUDE.md` — this skill is the *procedure*.

---

## Agent Behavior Rules

1. **DO** complete Phase 1 setup and confirm the summary table before writing anything.
2. **DO** place the file at `docs/<category>/<slug>.md` inside an existing category folder.
3. **DO** make line 1 a bare `# H1` (no frontmatter) that matches the sidebar `text`.
4. **DO** use the SHORT cross-link form `/<slug>` everywhere (no `docs/` prefix).
5. **DO** add the page to `.vitepress/sidebar.json` (mandatory — VitePress does NOT
   auto-discover) keeping the group `collapsed: true`.
6. **DO** end on a green `npm run docs:build`.
7. **DO NOT** create a `.md` file directly under `docs/`.
8. **DO NOT** put `docs/` or the category in any link path (`/docs/<slug>`, `/docs/<category>/<slug>` are wrong).
9. **DO NOT** use relative links (`./slug`, `../slug`).
10. **DO NOT** leave support boilerplate ("contact our support team", "reach out … for
    assistance"); link `[How to Get Support](/how-to-get-support)` instead.
11. **DO NOT** invent a new category folder or a new sidebar group without asking the user.
12. **DO NOT** write `** term **` (inner-whitespace bold) — use `**term**`.
13. **DO** keep the section overview in sync: if the new doc lands in one of the 8 sections
    that has an `<section>-overview.md` hub page (see CLAUDE.md → "Section overview pages"),
    add its `/<slug>` link to the matching `## sub-group` bullet list in that overview.

---

## Phase 1: Setup (Interactive)

Ask the user directly for each item. Do not assume or skip.

### 1.1 Title
> **What is the page title?** (becomes the `# H1` and the sidebar label)

Record as `TITLE`.

### 1.2 Category folder
> **Which category does it belong in?**

List the 29 existing folders under `docs/` (run `ls docs`). The user picks one. If none
fits, STOP and ask whether to add a new category folder — do not invent one silently.
Record as `CATEGORY`.

### 1.3 Slug (with uniqueness check)
Derive `SLUG` = kebab-case of `TITLE`. Verify it is globally unique:
`find docs -name '<slug>.md'` must return nothing. If it collides, ask the user for a
distinct slug. Record as `SLUG`. The file will be `docs/<CATEGORY>/<SLUG>.md`.

### 1.4 Sidebar group + position
**The folder name is NOT the sidebar group name** (e.g. folder `form-style-template` →
group "Form Style & Templates"). Read `.vitepress/sidebar.json`, show the existing group
names, and ask:
> **Which sidebar group should this appear in, and after which item?**

Record as `SIDEBAR_GROUP` and `SIDEBAR_POSITION`. If the right group does not exist, ask
before creating one.

### 1.5 Pro flag
> **Is this a Pro-only feature?** (if yes, mark it "(Pro)")

Record as `IS_PRO`.

### 1.6 Images
> **Are there images?** If yes, where are the source files?

Record as `HAS_IMAGES` + source paths.

### 1.7 Source content (optional)
> **Do you have existing content (pasted HTML / markdown) to convert, or should I draft
> from your description?**

Record as `SOURCE_CONTENT`.

### 1.8 Confirm
Summarize and wait for confirmation before proceeding:

| Parameter        | Value |
| ---------------- | ----- |
| Title            | ...   |
| Category folder  | ...   |
| File path        | docs/<category>/<slug>.md |
| Sidebar group    | ...   |
| Position         | ...   |
| Pro-only         | ...   |
| Images           | ...   |
| Source content   | ...   |

---

## Phase 2: Context

1. Read `CLAUDE.md` (canonical conventions).
2. Read 1–2 existing docs in the same `CATEGORY` to match tone, heading depth, and image style.
3. Read the target group in `.vitepress/sidebar.json`.

---

## Phase 3: Procedure

```
1. SCAFFOLD - Copy templates/doc-template.md to docs/<CATEGORY>/<SLUG>.md.
              Replace the H1 with TITLE; delete the scaffold-notes comment.

2. BODY     - Write the page per CLAUDE.md style:
              - H1 (line 1) -> 1-3 sentence intro (bold feature name on first use)
              - ## sections, ### sub-topics
              - bullets for steps; numbered lists only for strict sequences
              - cross-links as /<slug> ONLY (no docs/ prefix)
              - mark Pro features "(Pro)" if IS_PRO
              - NO support boilerplate
              If SOURCE_CONTENT: convert it (strip wrapper HTML, fix bold whitespace,
              rewrite any fluentforms.com/docs/<x> links to /<x>).

3. IMAGES   - If HAS_IMAGES: mkdir -p docs/public/images/<CATEGORY>/<SLUG>/,
              copy/convert source files in, and reference each as
              ![alt](/images/<CATEGORY>/<SLUG>/<file>.ext).

4. SIDEBAR  - Insert into .vitepress/sidebar.json under SIDEBAR_GROUP at SIDEBAR_POSITION:
              { "text": "<TITLE>", "link": "/<SLUG>" }
              Keep the group "collapsed": true. Keep valid JSON.

5. BUILD    - Run: npm run docs:build
              Fix any dead-link / parse warnings, then rebuild until clean.
```

---

## Phase 4: Verify & Report

Report:
- File created: `docs/<CATEGORY>/<SLUG>.md`
- Public URL: `/<SLUG>`
- Sidebar entry added under **<SIDEBAR_GROUP>**
- Image folder: `docs/public/images/<CATEGORY>/<SLUG>/` (N files) or "none"
- Build: pass / fail (+ any warnings fixed)

---

## Quick Reference

### Paths & formats
```
File:        docs/<category>/<slug>.md
URL:         /<slug>                           (docs/ + category stripped by rewrites)
Cross-link:  [Text](/<slug>)                   (NEVER /docs/<slug> or /docs/<category>/<slug>)
Image file:  docs/public/images/<category>/<slug>/<name>.ext
Image ref:   ![Alt](/images/<category>/<slug>/<name>.ext)
Sidebar:     { "text": "<Title>", "link": "/<slug>" }   in group with "collapsed": true
Bold:        **term**                          (no inner spaces)
Build:       npm run docs:build
```

### Locate / check
```
Slug unique?   find docs -name '<slug>.md'     (must be empty)
Group names:   read .vitepress/sidebar.json
```

### Key Principles
1. **Category folder always** — never a bare file under `docs/`.
2. **Sidebar is mandatory** — a doc not in `sidebar.json` is invisible.
3. **Short links only** — the category never appears in a URL or link.
4. **Folder ≠ sidebar group** — read the JSON and confirm placement.
5. **Green build or it's not done.**
