---
name: audit-fluentforms-docs
description: 'Run a read-only quality gate across the whole Fluent Forms docs site: verify file placement, link form, sidebar coverage, image integrity, convention compliance, and a clean production build. Produces a scored pass/fail checklist with offending paths, then offers fixes. USE FOR: audit the docs, check for broken links, verify doc conventions, run the quality gate, is everything consistent, lint the docs, pre-commit doc check, find docs missing from the sidebar, find orphaned images. DO NOT USE FOR: writing a new page (use write-fluentforms-doc), editing content (use edit-fluentforms-doc), or renaming/moving/deleting (use restructure-fluentforms-docs).'
license: MIT
compatibility: 'VitePress repo using docs/<category>/<slug>.md layout with a hand-maintained .vitepress/sidebar.json and URL flattening via rewrites. Requires Node + npm to run docs:build.'
metadata:
  project: fluentforms-user-docs
  canonical-rules: CLAUDE.md
---

# Audit Fluent Forms Docs

A read-only health check for the documentation site. Run it before committing or deploying.
It reports problems first; it fixes only with explicit user approval. Canonical conventions
live in `CLAUDE.md`.

---

## Agent Behavior Rules

1. **DO** run all checks read-only and present the full scored report before changing anything.
2. **DO** show offending file paths for every failed check (not just a count).
3. **DO** ask for confirmation before applying any fix; route real fixes through the
   appropriate skill (edit / restructure / write).
4. **DO** finish with `npm run docs:build` and report its result.
5. **DO NOT** edit content silently.
6. **DO NOT** mark a check "pass" without the command output that proves it.

---

## Phase 1: Setup (Interactive)

### 1.1 Scope
> **Audit the whole site, or a specific category folder?**

Record as `SCOPE` (default: whole `docs/`).

### 1.2 Fix mode
> **Report only, or report and then offer to fix?**

Record as `FIX_MODE`. (Default: report only.)

---

## Phase 2: Context

1. Read `CLAUDE.md` (the rules being enforced).
2. Note counts: docs = `find docs -name '*.md' -not -path 'docs/public/*' | wc -l`;
   sidebar links = `grep -c '"link"' .vitepress/sidebar.json`.

---

## Phase 3: Checks

Run each; record PASS/FAIL + offending paths.

```
C1 PLACEMENT  - No .md directly under docs/ (excluding docs/public):
                find docs -maxdepth 1 -name '*.md'            -> expect empty

C2 LINK FORM  - No docs/-prefixed links (URLs are root-relative /<slug>):
                grep -rEn '\]\(/docs/' docs                   -> expect empty
              - No relative links:
                grep -rEn '\]\(\.\.?/' docs                   -> expect empty

C3 EXTERNAL   - No residual external doc links:
                grep -rn 'fluentforms.com/docs/' docs         -> expect empty

C4 BOILER     - No support boilerplate:
                grep -rin 'contact our support team' docs      -> expect empty
                grep -rin 'reach out to our support team' docs -> expect empty

C5 SIDEBAR    - Count match: docs count == sidebar "link" count.
              - Every sidebar link resolves: for each "/<slug>",
                find docs -name '<slug>.md' must exist.
              - Coverage: every doc slug appears as a sidebar link (none missing).

C6 IMAGES     - Every ![](/images/<cat>/<slug>/<file>) ref resolves to a real file
                under docs/public/images/.
              - Flag image folders under docs/public/images/ that no doc references.

C7 BOLD       - No inner-whitespace bold (broken open and broken close).
                Run BOTH; union of matches should be empty:
                  open : grep -rEn '(^|[[:space:]([{])\*\* ' docs
                  close: grep -rEn ' \*\*([[:space:]]|$)' docs
                (These ignore legit bold whose content starts with punctuation,
                 e.g. **?ref=1** or **.zip**.)

C8 BUILD      - npm run docs:build exits 0 with no dead-link warnings.
```

For C5 (coverage) and C6 (orphans), derive the slug sets with `find`/`grep` and diff them;
list any doc missing from the sidebar and any unreferenced image folder.

---

## Phase 4: Report (& optional fix)

Print a scored checklist:

| Check | Result | Offending paths |
| ----- | ------ | --------------- |
| C1 Placement | ✅ / ❌ | ... |
| C2 Link form | ✅ / ❌ | ... |
| C3 External links | ✅ / ❌ | ... |
| C4 Boilerplate | ✅ / ❌ | ... |
| C5 Sidebar coverage | ✅ / ❌ | ... |
| C6 Image integrity | ✅ / ❌ | ... |
| C7 Bold rule | ✅ / ❌ | ... |
| C8 Build | ✅ / ❌ | ... |

Then summarize total pass/fail. If `FIX_MODE` allows and the user confirms, fix each issue
via the right skill (content → edit-fluentforms-doc; structure → restructure-fluentforms-docs;
missing page → write-fluentforms-doc) and re-run the failed checks.

---

## Quick Reference

### One-shot survey
```
Docs count:     find docs -name '*.md' -not -path 'docs/public/*' | wc -l
Sidebar links:  grep -c '"link"' .vitepress/sidebar.json
Dup slugs:      find docs -name '*.md' -not -path 'docs/public/*' -exec basename {} \; | sort | uniq -d
Build:          npm run docs:build
```

### Key Principles
1. **Read-only first** — report before you touch anything.
2. **Paths, not just counts** — every failure names its files.
3. **Counts must match** — docs == sidebar links, and both directions covered.
4. **Build is the final gate** — it's the only real link checker.
5. **Fixes go through the proper skill**, never ad-hoc.
