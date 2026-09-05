# Video Editor Agency — Thread Plan

**Status: PROPOSAL.** Masud approves or amends before T1 opens.
**Written:** 2026-09-03

Every chat is a **thread**. This file says which thread you are, what you own, and
what you must not touch. Read it after `instructions.md`, before doing anything.

---

## 1. The rules that make many threads safe

Your instinct — a separate chat per section — is right. Long threads lose the plot
and burn context on work already done. Four rules stop many threads becoming chaos.

### Rule 1 — One thread, one set of files. No overlap, ever.

The **Owns** column below is exclusive. If a thread needs a change to a file it does
not own, it writes the request into `WORKLOG.md` and stops. It does not edit.

### Rule 2 — Only T3 and T9 may touch `_template\page-template.html`.

That file holds the nav and footer for every page. `tools\sync-shared.mjs` copies it
into all ten pages. If a page thread edits it, it silently rewrites the nav on nine
pages it does not own. **Page threads never open it.**

### Rule 3 — One thread runs at a time.

Not a preference. Two live threads editing the same Drive folder is how the Mango
project ended up with duplicate `(1)` files that cost real time to untangle. Finish a
thread, write the WORKLOG entry, push, then open the next.

### Rule 4 — Every thread ends the same way.

```
1. node tools\sync-shared.mjs          (from inside site\)
2. node tools\sync-shared.mjs --check  (must print "No drift")
3. Run the QA checklist — instructions.md §5
4. Write the WORKLOG.md entry
5. Give Masud the push summary: what changed, which files, what is next
```

**Claude cannot push.** You commit and push in GitHub Desktop; Cloudflare rebuilds in
about a minute. Nothing in Drive is live until you do.

---

## 2. On "each chat can deploy"

**Yes — with one correction.** Each thread ships its own page, because Rules 1–4
above make that safe. You do not need a separate deploy thread.

**The correction:** a thread does not deploy. It produces files and hands you a push
summary. **You** deploy. That distinction matters, because the failure mode is a
thread saying "shipped" when nothing left your hard drive. That confusion has already
happened twice on the Mango project.

There is one exception: **T10 is a real gate.** Nothing points `videoeditor.agency`
at the new site until T10 has run. Until then every push lands on a `*.pages.dev`
staging URL and the WordPress site stays up, untouched.

---

## 3. On the quality thread

**QA is not a thread at the end. It is Rule 4, run at the end of every thread.**

A QA pass that happens once, after ten pages are built, finds ten pages' worth of
problems at the point where they are most expensive to fix. The Mango project's QA
checklist exists precisely because that lesson was learned there.

T10 is not a QA thread. It is a **launch** thread — redirect verification, DNS,
lifting `noindex`, and the cutover. The quality work has already happened nine times
by then.

---

## 4. The threads

**T0 was this conversation.** Project instructions, folder structure, site map, and
the reading of nine research documents. Output already written. Do not repeat it.

| # | Thread | Owns (exclusive) | Blocked by | Ships a page? |
|---|---|---|---|---|
| **T1** | **Rulings** | `02-Decisions\RULINGS.md` | Nothing — **start here** | No |
| **T2** | **Portfolio data** | `02-Decisions\Portfolio-Catalogue.md`, `04-Assets\portfolio\` | T1 (Q4 permission) | No |
| **T3** | **Design system** | `site\assets\css\*`, `site\_template\page-template.html` | Q9 (logo hexes) | No |
| **T4** | **Homepage** | `site\index.html` | T2, T3 | ✅ `/` |
| **T5** | **Portfolio page** | `site\portfolio\index.html`, `site\tools\build-portfolio.mjs` | T2, T3 | ✅ `/portfolio/` |
| **T6** | **Services + Pricing** | `site\services\index.html`, `site\pricing\index.html` | T3, Q7 | ✅ two pages |
| **T7** | **The four "For" pages** | `site\coaches\`, `site\content-creators\`, `site\business-owners\`, `site\marketers-and-agencies\` | T3, Q8 | ✅ four pages |
| **T8** | **About, Contact, utility** | `site\about\`, `site\contact\`, `site\privacy\`, `site\terms\`, `site\404.html` | T3, Q11–Q13 | ✅ five pages |
| **T9** | **SEO and redirects** | `site\_redirects`, `site\robots.txt`, `site\sitemap.xml`, `<head>` of every page | Q1, all pages built | No new pages |
| **T10** | **Launch** | `DEPLOYMENT-RUNBOOK.md` | Everything | Cutover |

### Why this order, and where it differs from yours

Your order was: chat map → overview → homepage → portfolio → sections → quality.

**Three changes:**

1. **Portfolio data moves ahead of the homepage.** The homepage embeds eight
   portfolio items. Building the homepage first means building it around placeholders
   and coming back — which is how the current site ended up with a card whose visible
   title is `/hope-you-get-it/`. T2 is also the longest thread; starting it early
   means it is not the thing holding up launch.
2. **A design thread is inserted before any page.** You ruled "reuse Mango's design
   system," and the CSS already exists — so T3 is small. But VEA's logo hexes have
   never been measured, and every page inherits whatever T3 decides. Getting that
   wrong once costs ten files.
3. **"Website overview and content" is dropped as a thread.** It is done —
   `02-Decisions\SITE-MAP-v1.md`. What is actually missing is not an overview but
   **your answers**, which is T1.

---

## 5. Thread briefs

### T1 — Rulings · *start here* · no dependencies

Work through the 15 open questions in `SITE-MAP-v1.md` §5 and the 15 in
`instructions.md` §8. Record each as a ruling with the date and your actual words.

**Output:** `02-Decisions\RULINGS.md`

**The rule that matters most in this thread:** if a decision is written down in your
name, it must be traceable to something you actually said. The Mango project recorded
"Astro" as your ruling when you had never said the word, and it took a month to
catch. **An inference must be labelled an inference.**

**Do not let this thread try to answer the questions for you.** Its job is to ask,
record, and press on the ones you skip.

---

### T2 — Portfolio data · the long pole

This is a data thread, not a writing thread. It builds the catalogue every later
thread draws from.

**Inputs you provide at the start:**

- the Google Drive folder of client videos
- the Google Sheets with the project data
- the YouTube channel URL

**Output:** `02-Decisions\Portfolio-Catalogue.md` and downloaded thumbnails in
`04-Assets\portfolio\`

**The Sheet becomes the source of truth.** See §6 — it needs specific columns, and
getting them right at the start saves re-doing the whole catalogue.

**Two hard rules:**

- **No client name is published without written permission.** A logo, a name, a
  figure — each needs a yes. Where you have the video but not the permission, the
  item ships unnamed: "YouTube channel edit · fitness · US". That is still proof.
- **Every claim about a video must trace to the video.** If the Sheet says a video
  got 2M views, T2 checks. It does not copy.

---

### T3 — Design system · small, but everything inherits it

1. Measure the real hexes from VEA's logo file. Do **not** assume Mango's
   `#0D3C87` / `#FF4F01` carry over — they were measured from Mango's logo.
2. Copy `site.css` from the Mango repo, swap the brand tokens, keep the structure,
   the radius token, the type pairing and the accessibility rules.
3. Build `_template\page-template.html` with the final nav from `SITE-MAP-v1.md` §2.
4. Build one page from it end to end as a proof — Contact is the simplest.

**The contrast rule is not a style preference.** Mango's orange fails WCAG AA for
text at 3.30:1. Whatever VEA's accent turns out to be, measure it, and if it fails,
it is permitted on fills, large headings, icons and borders — never on body text or
small button labels.

---

### T4 — Homepage

Twelve sections, eight of which have finished copy in `videoeditor_agency_website_copy`.

⚠️ **The four blocked sections are blocked, not "fill with something reasonable."**
Trust logos, stats, portfolio and testimonials each ship with real content or do not
ship. A section that is not ready is deleted from the page, not filled with a
placeholder. **Publishing a placeholder is the same risk class as a fake testimonial.**

---

### T5 — Portfolio page

Builds `/portfolio/` from the T2 catalogue, plus `tools\build-portfolio.mjs`. See §6.

---

### T6 — Services + Pricing

Services has finished copy. **Resolve the 6-vs-11-vs-7 service count first.**

Pricing is blocked on Q7 and stays blocked. ⚠️ **If Q7 is unanswered when T6 runs,
`/pricing/` does not ship** — the page is dropped from the nav and `/pricing/`
redirects to `/contact/`. It does not ship with `$XXX`, and it does not ship with
the $6.99 tier that is live today.

---

### T7 — The four "For" pages

⚠️ **The trap in this thread:** all four share one structure. Do not paste one page
four times and change the noun. `videoeditor_agency_website_copy` has genuinely
different pain points and deliverables per segment — use them. Four near-identical
pages is a duplicate-content problem and, worse, obviously lazy to a reader who
opens two of them.

The **Coaches** page in `VEA all page content plan` is the strongest writing in the
research. Build it first and let the other three follow its shape.

---

### T8 — About, Contact, utility

About and Contact have finished copy. Privacy and Terms have none anywhere.

⚠️ **Privacy is not optional if the site takes form submissions from the UK or EU,
and it is not optional if the Portfolio page loads anything from YouTube** — a
YouTube iframe sets tracking cookies before a visitor consents to anything. §6
explains why the recommended pattern avoids this.

---

### T9 — SEO and redirects

- A 301 for every retired URL — ~40 of them
- `robots.txt`, `sitemap.xml`
- One `<title>` and one `<meta name="description">` per page, hand-written
- Lift `noindex` **page by page, never sitewide**

⚠️ **Blocked on Q1.** Writing ~40 redirects without knowing which of those URLs
carries traffic is guessing with the site's only SEO asset.

---

### T10 — Launch

Full QA sweep, redirect verification, DNS cutover, `noindex` off, and the rollback
plan written down **before** the switch, not after.

---

## 6. The portfolio pipeline — and the problem you are about to hit

You said the videos are on Drive and YouTube, with data in Sheets. That is the right
raw material. There is one conflict to settle before T2 starts.

### ⚠️ A YouTube embed breaks the zero-JS ruling

A standard YouTube `<iframe>` loads roughly a megabyte of JavaScript and sets
tracking cookies **before the visitor has consented to anything**. Eight of them on
a portfolio page makes the page slow; thirty makes it unusable. It also drags a
privacy-policy obligation onto the site.

This is not a small technical detail. **The portfolio is the whole point of the
site**, and the obvious way to build it is the one way the platform ruling forbids.

**Three options. The recommendation is B.**

| | Pattern | Cost |
|---|---|---|
| **A** | Thumbnail image inside `<a href="https://youtu.be/ID">` | Fastest, zero JS, zero cookies. Visitor leaves for YouTube |
| **B** ✅ | Thumbnail inside a native `<details>`. The iframe sits in the closed panel and **does not load until clicked** | Zero JS — `<details>` is a real HTML element. Nothing loads until the visitor asks. Plays on-site |
| **C** | Iframes on the page | Banned. Slow, cookie-setting, and it is the pattern the ruling exists to prevent |

**B gives you on-site playback with none of the cost**, because a closed `<details>`
never loads its contents. It is the one place where the zero-JS constraint produces
a genuinely better page than the normal approach.

**The videos are UNLISTED** — Masud confirmed 2026-09-03. They embed normally. The
`<details>` pattern is still right: it is about page weight and cookies, not privacy.

### ⚠️ 53 of 58 videos are vertical

Counted from the real links: **53 Shorts (9:16), 5 landscape (16:9).** No research
document mentions this, and it decides the layout.

- **The grid is vertical-first.** A 9:16 card, with the five landscape items given a
  wider cell or their own row.
- **Every ready-made iframe in Masud's sheets is `560×315` — 16:9.** Wrong shape for
  53 of 58. A second reason not to paste them.

**Thumbnails: test before bulk-downloading.** `img.youtube.com/vi/<ID>/
maxresdefault.jpg` returns a 16:9 image for a Short, padded or cropped. Fifty-three
letterboxed stills look worse than no thumbnails. **The robust source is Masud's own
masters** — the catalogue carries the original `.mp4` filename for every row, and
extracting a frame gives a true 9:16 still. See `02-Decisions\Portfolio-Source-Audit.md`
§2b.

**Whichever method: download into `04-Assets\portfolio\`. Never hotlink.**
`img.youtube.com` is a third-party request on every page load and it breaks if a
video's visibility ever changes.

### The Sheet becomes the thing you maintain

This also answers a question the Mango project never solved: **how does a non-coder
update a static site?** For the one page that changes most, the answer is: you edit
the Sheet.

`tools\build-portfolio.mjs` reads a CSV export of the Sheet and writes the portfolio
grid into `portfolio\index.html`. Same pattern as `sync-shared.mjs` — a local script
that edits a real file in place. **Not a build step.** Cloudflare never runs it, the
build command stays empty, and if the script vanished the page would still work.

**Columns the Sheet needs.** Getting these right before T2 saves rebuilding the
catalogue:

| Column | Notes |
|---|---|
| `Title` | What the card says |
| `Client` | Real name |
| `NamePublic` | **`YES` / `NO`.** NO means the card ships unnamed. This column is the permission gate |
| `YouTubeID` | The 11-character ID, not the full URL |
| `DriveLink` | For anything not on YouTube |
| `Industry` | One of the 28 from the `Website` doc |
| `Format` | One of the 14 from the `Website` doc |
| `Featured` | `YES` puts it among the 8 on the homepage |
| `Order` | Sort within its group |

⚠️ **`NamePublic` defaults to `NO`.** A blank cell means unnamed. Permission is
something you add, never something that is assumed.

---

## 7. What T2 needs from you

Send these at the start of T2, not before — this thread does not need them:

1. The Drive folder link for client videos
2. The Google Sheets link
3. The YouTube channel URL
4. For each client you want **named**: confirmation you have permission

---

## 8. Opening prompt for a new thread

Paste this, with the thread number filled in:

```
Read, in this order:
  instructions.md
  02-Decisions\SITE-MAP-v1.md
  02-Decisions\RULINGS.md
  THREAD-PLAN.md  (find your thread — you are T_)
  WORKLOG.md      (the top two entries only)

Then tell me what you understand your job to be, which files you own,
and what is blocking you — before you write anything.
```

That last line matters. A thread that starts writing before it has said what it
thinks it is doing is a thread that writes the wrong file.
