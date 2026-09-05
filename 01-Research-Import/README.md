# 01-Research-Import

The eight Google Docs of existing research, converted to `.md` and committed here.

**Status 2026-09-05: one of eight imported.** `videoeditor_agency_website_copy.md` —
the most useful document in the set — is in. The other seven are not.

⚠️ **This folder is T1's under `instructions.md` §4.** The 2026-09-05 import was done by
**T8**, with Masud's explicit authorisation to cross `THREAD-PLAN.md` Rule 1, because T1
never performed the import and T8 could not write `/about/` or `/contact/` without it.
The exception covers this one document and this README. It is recorded in `WORKLOG.md`.

**Filename deviation, recorded:** the table below planned `Website-Copy.md`. The file was
imported as **`videoeditor_agency_website_copy.md`** — the source document's own title —
so a reader can match file to Drive doc without a lookup. Deliberate, not an oversight.

## Why this folder exists

Four of the eight source documents are owned by **`videoeditoragency.hello@gmail.com`**
or **`masud.creatives@gmail.com`**, not by Masud's main account. If access to either
lapses, half the research disappears — and it is the half containing the taxonomy
with slugs and the most complete page plan.

Importing them here ends that dependency.

## The documents

| File to create | Source doc | Size | Value |
|---|---|---|---|
| `Taxonomy.md` | `Website` | 16 KB | **28 industries + 14 formats, with slugs.** The only source with slugs, and modified 2026-09-03 |
| ✅ **`videoeditor_agency_website_copy.md`** — **IMPORTED 2026-09-05** | `videoeditor_agency_website_copy` | 36 KB | **13 pages of finished prose.** The most useful document in the set |
| `All-Page-Content-Plan.md` | `VEA all page content plan` | 3.5 MB | The nav structure, and the Coaches page. Otherwise a contaminated scrapbook |
| `Category-Brainstorm.md` | `video editor agency category` | 3.3 MB | Category names and descriptions. Superseded by `Website` |
| `Early-Nav-Draft.md` | `video editor agenc` | 336 KB | An early nav draft. Superseded |
| `Social-Content.md` | `VE CONTENT` | 2.2 MB | ~90% social-media planning. Almost nothing for the website |
| `Promo.md` | `video editor promo` | 14 KB | **Not yet read** |

## ⚠️ Two things the importer must handle

**1. Three of the four large docs came back truncated** at roughly 1% of file size.
Most of the missing weight is embedded screenshots, but some is text — the pricing
section of `video editor agency category` was specifically not retrieved. **Import
them in chunks, tab by tab, not in one read.**

**2. ✅ RESOLVED 2026-09-05 — `videoeditor_agency_website_copy` exists in three separate
copies** — two owned by `sub.mangomedia@gmail.com`, one by
`videoeditoragency.hello@gmail.com`, all 35,897 bytes. Identical byte counts *suggest*
identical content. **Verify by diff before assuming.** The Mango project lost real time
to exactly this.

> **The diff was run.** All three were fetched in full, written to separate files, and
> compared with `diff` and `md5sum` — not by eye.
>
> | Pair | Result |
> |---|---|
> | `1bIBHx…` (root) vs `1hKAvq…` (subfolder) | **Byte-identical**, same MD5 |
> | Either vs `1GOq6s…` (shared, `videoeditoragency.hello`) | **Three whitespace-only lines. Zero textual difference** |
>
> `diff -w -B` between the shared copy and the other two returns nothing. Despite its
> later modified date of **2026-07-14**, the shared copy carries **no content edits** —
> consistent with a save-without-edit. Prices, email, every statistic, and the About and
> Contact pages are identical in all three. **None is truncated.**
>
> **Canonical: `1bIBHxFxX3etBRfQUKedSuoKrKs8RaxeqG-Gxf00RhBI`.** The other two can be
> ignored, and the `videoeditoragency.hello@gmail.com` access risk no longer threatens
> this document.

## ⚠️ One document could not be read

`1MGid_0IXdwW-N4Yt32jD1IrIz7OPnj99agGn31e4fgs` returned **"Requested entity was not
found."** Masud sent it twice, so it matters to him. Either deleted, or not shared
with `sub.mangomedia@gmail.com`. **Nothing in this project accounts for its
contents.**

## Rule for this folder

These are **source documents**. Import them faithfully, including the parts that are
wrong. Do not clean them up, do not resolve their contradictions here — that is what
`02-Decisions\` is for. A source document that has been quietly corrected is no
longer evidence of anything.
