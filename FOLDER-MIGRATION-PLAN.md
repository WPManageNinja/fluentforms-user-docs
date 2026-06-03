# Folder & Image Migration Plan (disk reorg to match the locked category plan)

**Status:** proposal for review. Nothing on disk has changed yet. Pairs with the locked
`CATEGORY-REORG-PLAN.md` (the navigation side); this file is the **disk side** — moving the
`.md` files and their `public/images` folders so the on-disk structure mirrors the new
categories.

## Why nothing breaks (the safety proof)

Moving a doc from `docs/<oldcat>/<slug>.md` to `docs/<newcat>/<slug>.md` is safe because:

| Concern | Effect of a folder move | Why |
|---|---|---|
| **Public URL** | none | `rewrites: docs/:category/:doc.md → docs/:doc.md` strips the category; the URL is `/docs/<slug>` regardless of folder |
| **Cross-links** | none | every internal link is the short `/docs/<slug>` form — no category in the path |
| **Sidebar links** | none | sidebar uses `/docs/<slug>` too (and is rewritten separately by the category plan) |
| **Slugs/uniqueness** | none | filenames (slugs) don't change; they're globally unique |
| **Images** | **must move + refs updated** | image refs DO include the category: `/images/<category>/<slug>/<file>` |

**Verified:** all **1,771** image refs across **207** docs are self-referential
(`/images/<own-category>/<own-slug>/…`); **0** cross-doc refs, **0** external image URLs. So
moving each doc's image folder with it and rewriting that one category segment is sufficient.

**Hard rule to keep it safe:** disk folders stay **single-level** (`docs/<category>/<slug>.md`).
Do NOT nest two levels on disk (e.g. `docs/payments/gateways/…`) — that would not match the
rewrite pattern. The sidebar provides the 2-level grouping; the disk stays flat-per-category.

## Folder granularity

**Chosen: sub-group level** (~34 folders) — mirrors the sidebar sub-groups and matches the
repo's current convention (e.g. `email-marketing`, `crm` already separate). Tiny singleton
sub-groups are consolidated on disk (e.g. Payment Reports → `payments`).
*Alternative (say the word): section level = 16 folders, coarser but simpler.*

## Target folders (34) — each `docs/<folder>/` + mirrored `docs/public/images/<folder>/`

Doc membership = exactly the sub-groups in `CATEGORY-REORG-PLAN.md`. `←` lists the current
folder(s) each one is drawn from.

| New folder | Docs | Drawn from (current folders) |
|---|---|---|
| `getting-started` | 5 | getting-started *(unchanged)* |
| `form-builder-basics` | 4 | form-editor (subset) |
| `conversational-forms` | 2 | form-editor (subset) |
| `specialized-form-types` | 7 | post-fields (create post form), advance-fields (multi-step), features (user-reg, user-update, surveys, personality-quiz, inline-opt-in) |
| `general-fields` | 18 | general-fields *(unchanged set)* |
| `advanced-fields` | 20 | advance-fields **(renamed)** minus multi-step, recaptcha-field, hcaptcha |
| `container-fields` | 4 | container-fields + features (resizeable-container) |
| `post-taxonomy-fields` | 7 | post-fields (5 fields) + taxonomy-fields (2) |
| `form-settings` | 7 | form-settings-form-building (4) + features (form-restrictions, form-scheduling, keyboard-nav) |
| `conditional-logic` | 6 | features (conditional-logic, dynamic-default, url-params, dynamic-input-steps, unique-validation) + miscellaneous (scroll-offset) |
| `calculations` | 2 | features (numeric-calculation, calc-on-repeat) |
| `design-styling` | 5 | form-style-template (4) + miscellaneous (css-ready-classes) |
| `email-notifications` | 6 | form-notification (5) + features (double-opt-in) |
| `confirmations` | 3 | form-notification (submission-confirmation) + features (conditional-confirmation) + shortcode (shortcodes-in-confirmation) |
| `publishing-embedding` | 5 | publishing-form-form-building |
| `payments` | 3 | payment (create-payment-form, payment-settings) + reports (payment-reports) |
| `payment-fields` | 7 | payment-fields *(unchanged set)* |
| `payment-gateways` | 8 | payment-integration **(renamed)** |
| `entries` | 11 | form-entries (4) + manage-entries (4) + features (edit-history, admin-approval) + miscellaneous (ninja-tables-frontend) |
| `reports` | 2 | reports (reports-dashboard, submission-reports) |
| `email-marketing` | 20 | email-marketing *(unchanged set)* |
| `crm` | 10 | crm *(unchanged set)* |
| `automation` | 3 | automation *(unchanged set)* |
| `team-chat` | 3 | notification (slack, discord, telegram) **(renamed)** |
| `other-apps` | 10 | others (9) + miscellaneous (clearout) |
| `security-spam` | 7 | security (5) + advance-fields (recaptcha-field, hcaptcha) |
| `modules` | 5 | features (pdf, quiz, inventory, global-inventory, post-selection) |
| `shortcodes` | 5 | shortcode (5) — minus shortcodes-in-confirmation |
| `custom-fields-meta` | 4 | features (metabox, mapping-meta, acf, jetengine) |
| `logs-tracking` | 5 | miscellaneous (api-logs, activity-logs, ga4-tracking, global-search, phone-geo) |
| `localization` | 2 | features (wpml) + miscellaneous (translate-datepicker) |
| `import-export-migration` | 3 | import-export (3) |
| `account-license` | 3 | account-management (managers) + miscellaneous (transfer-license, cross-domain-fluentcrm) |
| `help-support` | 3 | help-and-support **(renamed)** |

**Total:** 5+4+2+7+18+20+4+7+7+6+2+5+6+3+5+3+7+8+11+2+20+10+3+3+10+7+5+5+4+5+2+3+3 = **215** ✓

**Old folders removed after migration (emptied):** form-editor, advance-fields, post-fields,
taxonomy-fields, form-settings-form-building, form-style-template, form-notification,
notification, publishing-form-form-building, payment-integration, payment, manage-entries,
form-entries, security, others, miscellaneous, features-and-functionalities,
account-management, import-export, help-and-support.
*(getting-started, general-fields, container-fields, payment-fields, email-marketing, crm,
automation, reports, shortcodes keep their names; some gain/lose members.)*

## Migration procedure (per doc)

For every doc, using its `(oldcat, slug, newcat)`:

```
1. MOVE DOC     git mv docs/<oldcat>/<slug>.md docs/<newcat>/<slug>.md
2. MOVE IMAGES  if docs/public/images/<oldcat>/<slug>/ exists:
                git mv docs/public/images/<oldcat>/<slug> docs/public/images/<newcat>/<slug>
                (create docs/public/images/<newcat>/ first if missing)
3. FIX REFS     in the moved .md, replace_all:
                /images/<oldcat>/<slug>/  ->  /images/<newcat>/<slug>/
                (one Edit per file; slug constant, so it catches every ref in that file.
                 Docs whose folder name is unchanged need no ref edit.)
4. CLEANUP      after all docs move, remove now-empty docs/<oldcat>/ and
                docs/public/images/<oldcat>/ directories.
```

Content edits use the native Edit tool (`replace_all`), never sed/scripts. File/folder moves
use `git mv` (preserves history).

## Also update

- **`.vitepress/sidebar.json`** — rewritten per the locked `CATEGORY-REORG-PLAN.md` (nested +
  short labels). Independent of folders (links are `/docs/<slug>`), but done in the same pass.
- **`CLAUDE.md`** — replace the "29 category folders" list with the new 34; keep the image-path
  convention (`docs/public/images/<category>/<slug>/`) which still holds.
- **`index.md` / `config.mjs`** — homepage cards + nav (from the category plan).

## Link & reference integrity (every link type, handled accurately)

Full inventory of references in the repo (measured, not assumed) and exactly what happens to
each during the migration:

| Reference type | Count | Action |
|---|---|---|
| Internal cross-links / interlinks `/docs/<slug>` | 284 | **No change** — slug-based; the category is never in the path. Verify each still resolves. |
| Category-in-path links `/docs/<cat>/<slug>` | 0 | None (already clean). Guard: must stay 0. |
| Hash / anchor links (`…#heading`) | 0 | None. (H1s/headings are unchanged, so any future anchors stay valid.) |
| **Image refs** `/images/<cat>/<slug>/<file>` | **1,771** | **Updated** — the `<cat>` segment is rewritten to the new folder, in lockstep with the `git mv` of the image folder (migration step 3). Slug + filename unchanged. |
| Other `/public` asset refs in docs (brand-images, etc.) | 0 | None. |
| `fluentforms.com` links (0 of them to `/docs/`) | 19 | None — external marketing links. |
| Other external links (http/https) | 167 | None — external. |
| Raw HTML `<a href>` / `<img src>` in docs | 0 / 0 | None — all images use markdown `![]()`, so the 1,771 count is complete. |
| YouTube iframe embeds | 63 | None — external `youtube.com/embed` URLs. |
| Reference-style links / relative links | 0 / 0 | None. |
| Sidebar links (`sidebar.json`) | 215 | Slug values unchanged; the file is rewritten only for grouping + short labels (category plan). |
| Homepage (`index.md`) + nav (`config.mjs`) links | — | Repointed by the category plan to new target slugs; each target must exist. Brand/favicon `/brand-images/…` paths unchanged. |

**Net effect:** the migration rewrites exactly one link class — image refs (1,771). Every other
link is slug-based or external and remains correct by construction. We do not touch the 284
interlinks (rewriting them would be unnecessary risk); we **verify** them instead.

**Why interlinks are safe:** a slug is globally unique and the URL is `/docs/<slug>` regardless
of folder. No doc is renamed, merged, or deleted in this migration, so no interlink target
disappears. *(If we later merge the two Gist docs, that's a separate `restructure` operation
that rewrites inbound `/docs/<old-slug>` links — out of scope here.)*

**Safety nets:**
- `npm run docs:build` runs VitePress's **dead-link checker** — it fails on any broken internal
  markdown link, catching a mistyped/missed `/docs/<slug>` immediately.
- Images are not validated by the build, so they get an **explicit file-existence check**
  (below).

## Risks & how each is avoided

- **Broken image after move** → step 2+3 are atomic per doc; final check greps for any ref to a
  removed old-category folder (expect 0) and verifies every ref resolves to a real file.
- **Accidental 2-level disk nesting** → folders are single-level only; verified by
  `find docs -mindepth 3 -name '*.md' -not -path 'docs/public/*'` = empty.
- **Lost/duplicated doc** → before/after slug set diff must be empty (still 215, each once).
- **Stale links** → none expected (URLs unchanged); confirmed by clean `docs:build`.

## Verification (run after migration)

1. `find docs -name '*.md' -not -path 'docs/public/*' | wc -l` = **215**; slug set identical to
   pre-migration (diff = empty).
2. No 2-level md: `find docs -mindepth 3 -name '*.md' -not -path 'docs/public/*'` = empty.
3. Image integrity (script): every `/images/...` ref resolves to an existing file under
   `docs/public/images/`; **0** missing.
4. No orphan refs: grep docs for any old-folder name in `/images/<oldname>/` = **0**.
5. No orphan image folders: every `docs/public/images/<folder>/<slug>/` has a matching
   `docs/<folder>/<slug>.md` (flag extras).
6. **Interlink integrity:** every `/docs/<slug>` cross-link (284) resolves to an existing doc;
   `/docs/<cat>/<slug>` (category-in-path) = **0**; relative links = **0**. (Build's dead-link
   checker enforces resolution; the others are grep guards.)
7. **Entry-point links:** every homepage card (`index.md`) and nav (`config.mjs`) target slug
   exists; `/brand-images/…` favicon/logo paths still resolve.
8. **Sidebar coverage:** `sidebar.json` link count == doc count (215); every link resolves.
9. `npm run docs:build` exits 0, no dead-link warnings (validates all internal `/docs/` links).
10. `audit-fluentforms-docs` full run (C1–C8) passes — covers placement, link form, image
    integrity, sidebar coverage, bold rule, and build.
11. Dev spot-check: open a moved doc in `docs:dev`, confirm its screenshots load and an
    in-page cross-link navigates correctly.

*(Review file at repo root; delete after approval. Recommend doing this together with the
sidebar reorg so disk + nav land in one consistent change.)*
