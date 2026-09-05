# `/about/` — build-ready copy

**Owner:** T8 · **Written:** 2026-09-05
**Source:** `01-Research-Import\videoeditor_agency_website_copy.md` PAGE 2, resolved
against `02-Decisions\RULINGS.md`.
**Status: NOT SHIPPABLE.** Three blockers below. This file is the copy, not the page.

⚠️ **No HTML has been written.** T3 has not run — `site.css` still carries Mango's
unmeasured hexes and `_template\page-template.html` is the T0 scaffold with every nav
item an unlinked `<span>`. Building `/about/` before T3 means rebuilding it after.

---

## What blocks this page

| # | Blocker | Ruling |
|---|---|---|
| 1 | **Founding year.** The source copy opens *"Since [Year]…"* | **R12 OPEN.** See the workaround below — it may not block after all |
| 2 | **Showreel.** The source puts a showreel embed directly under the hero | **R07 OPEN.** No portfolio item exists anywhere. No URL, no file |
| 3 | **T3.** Colours, nav, footer | **R19 OPEN** |

**Blocker 1 has a way out and it is worth taking.** The sentence works without the year:

> *Source:* "**Since [Year], videoeditor.agency** has been the editing backbone for…"
> *Proposed:* "**videoeditor.agency is** the editing backbone for…"

That is a real edit to Masud's copy, so it is proposed, not applied — but it removes a
`[[bracket]]` from the first sentence on the page and loses nothing a reader would miss.
**If Masud gives a founding year, revert to the source wording.** Both versions are below.

---

## Copy

### Hero

**H1** *(the page's only `<h1>`)*

> About videoeditor.agency

**Breadcrumb**

> Home / About

### Showreel — ⚠️ HOLD

Source label: *"Watch What We Do"*

⚠️ **Do not ship an empty player, a poster with no video, or a `#` link.** Under
`instructions.md` §5 rule 1 that is a placeholder a client could quote back. **If no
showreel URL exists when this page is built, the section is deleted, not filled** —
`THREAD-PLAN.md` §4 (T4): *publishing a placeholder is the same risk class as a fake
testimonial.*

`[[R07 — SHOWREEL: a real video URL, or delete this section]]`

**When it does exist:** native `<video>` with a poster and no autoplay, or the
`<details>` pattern from `THREAD-PLAN.md` §6. Not a bare YouTube iframe.

### Intro

**Pre-label**

> About Us

**H2**

> We Turn Raw Footage Into Content That Actually Performs

**Body — paragraph 1** *(pick one; the second is the proposal above)*

> **A — source, needs R12:** Since `[[R12 — FOUNDING YEAR]]`, videoeditor.agency has
> been the editing backbone for YouTubers, businesses, coaches, and agencies across the
> globe. We're not a freelancer marketplace or a gig platform — we're a dedicated
> editing team that operates like an in-house department, at a fraction of the cost.

> **B — recommended, unblocks the page:** videoeditor.agency is the editing backbone for
> YouTubers, businesses, coaches, and agencies across the globe. We're not a freelancer
> marketplace or a gig platform — we're a dedicated editing team that operates like an
> in-house department, at a fraction of the cost.

**Body — paragraph 2** *(source, unchanged)*

> Every client gets a dedicated editor and a project manager. Your editor learns your
> style. Your manager keeps things on track. You focus on creating — we handle the rest.

`SITE-MAP-v1.md` §4.9 calls the in-house-department line *"the strongest single sentence
in the research."* It survives intact in both versions.

### Where we are — ⚠️ NEW COPY, not from the source

**R16 requires this and the source document has nothing for it.** The source copy never
mentions location; R16 rules that the site *"states that it operates from Dhaka,
Bangladesh."* So this paragraph is written, not imported. Masud approves the wording.

> We work from Dhaka, Bangladesh, with clients across the US, UK, Canada and Australia.
> Everything runs remotely — briefs, drafts, revisions and delivery.

**Why it reads this way, and what it deliberately avoids:** R16's own reasoning was that
stating Dhaka is *"a real differentiator on price."* The line above states the fact and
lets the price page make the argument. It does not say "affordable", "low-cost", or
"offshore" — `instructions.md` §2 warns that VEA's buyer is not Mango's, and leading with
cheapness prices the work down before the portfolio has spoken.

**Working hours belong on `/contact/`, not here.** GMT+6 already implies the timezone;
saying it twice on two pages is noise.

### Stats — R05, static text only

> **100+** Clients served
> **10,000+** Videos edited

**Three binding constraints, all from R05:**

1. **These two figures only.** `500k+ minutes`, `1,200+ projects`, `300+ clients` and
   `5+ years` all appear in the source and are **dead**. `5+ years` is also an R12 claim
   with nothing behind it.
2. **Render the real number in static HTML.** No count-up. `instructions.md` §5 bans a
   JS counter without a static fallback, and the live site is the cautionary tale — it
   prints `0 +` and `0 K` to anything that does not run JavaScript.
3. **Do not carry the typo.** The live homepage reads **"100+ Client Servered"** *(sic)*.
   It ships as **Clients served**.

⚠️ **On the record, once, and not re-argued:** `instructions.md` §5 rule 2 requires that
a round number be backed up or replaced with a provable one. **R05 sets that rule aside**
— Masud ruled to use exactly these two figures. Sources: `instructions.md` §5 rule 2
versus R05. His ruling is later and governs. Nothing on this page claims the numbers are
audited; they are stated once, plainly, and the portfolio does the persuading.

### Values — source, unchanged

**H2**

> What We Stand For

**Creative Excellence**
> We don't just cut — we craft. Every edit is shaped by narrative thinking, pacing
> instinct, and visual judgment that elevates your content.

**Speed Without Compromise**
> Fast delivery doesn't mean rushed work. We've built systems and a dedicated team
> structure that allows us to deliver both.

⚠️ **This one survives R18 only because it names no number.** R18 — asked twice,
declined twice — means **no turnaround figure ships on any page.** "Fast delivery" is a
posture; "24–72 hours" is a commitment. If a figure is ever added here it needs Masud.

**Dedicated Accountability**
> One editor. One manager. One point of contact. Total clarity on every project, every
> time.

**Client-First Revision Policy**
> Unlimited revisions, no arguments, no extra fees. Your satisfaction is the only
> benchmark that matters.

Consistent with **R17 — genuinely unlimited.** Every revision cap in the research is
dead. T1's objection to the unbounded commitment is recorded under R17 and is not
reopened here.

### CTA strip — source, unchanged

> Ready to work with a team that treats your content like their own?
>
> **Contact Us** → `/contact/`

---

## Deliberately not on this page

| Cut | Why |
|---|---|
| **Team photos, named staff, bios** | Nothing in the research supports them, and the live site carries **"Anne Doe"** as real staff (`SITE-MAP-v1.md` §6). Nobody is named without Masud supplying a real name |
| **"4.9 on Google"** | **R09 OPEN.** No Google Business profile identified. If none exists the widget is deleted, not adjusted |
| **Testimonials** | **R08 CONDITIONAL.** Two usable quotes exist on mangomedia.digital and neither has consent to appear on videoeditor.agency |
| **Client logos** | **R06 OPEN.** Platform logos under "Trusted by" do not ship — `SITE-MAP-v1.md` §5 Q2 |
| **Years in business** | **R12 OPEN.** The domain dates to 2024-05-22; "5+ years" and "6+ years" both appear in the research and neither is supported |
| **Any US address** | **Killed by R16.** The New York / Delaware pair in the research does not appear anywhere on this site |

---

## Before this page ships

- [ ] T3 has run — hexes measured, template final, `sync-shared.mjs --check` prints "No drift"
- [ ] R12 answered, **or** paragraph 1 version B approved
- [ ] R07 gives a showreel URL, **or** the showreel section is deleted
- [ ] Exactly one `<h1>`; every other heading `<h2>` or below
- [ ] Both stats render as static text — view the page with JavaScript disabled and confirm
- [ ] "Clients served" — not "Client Servered"
- [ ] The Dhaka paragraph has Masud's approval as written
- [ ] Every nav link resolves to a live page; anything unbuilt is a muted `<span>`, never a link to a 404
- [ ] `_redirects` carries a 301 from the old `/about-us/` style URL, if one existed — **T9 owns this, T8 requests it**
