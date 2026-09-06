# Expansion v1 — six new pages, and a second nav axis

**Written by T7, 2026-09-06, from Masud's three answers of the same date.**
**Owner: T7 for the copy and the page files. T3 for the nav. T1 for the rulings.**
This file exists because the site went from ten pages to seventeen and from one
audience axis to two, and nothing in `SITE-MAP-v1.md`, `THREAD-PLAN.md` or
`instructions.md` anticipates any of it.

**Read with:** `instructions.md` §3 ruling 2 and §6 · `SITE-MAP-v1.md` §2 and §3 ·
`RULINGS.md` R21, R22, R23 · `THREAD-PLAN.md` §1 Rule 2 and §4.

---

## 1. What Masud decided, 2026-09-06

| # | Question | His answer |
|---|---|---|
| 1 | For, or Industries? | **"Two axes — 'For' and 'Industries'"** |
| 2 | Now or post-launch? | **"Build them now, before launch"** |
| 3 | The medical/aesthetic overlap with Mango | **"Medical + doctor, Dermatologist + Aesthetics (because we have more clients in this sector)"** |

**Answer 3 is his own wording, not one of the options offered.** It resolves to **two
pages, not one and not four**: `Medical & Doctors`, and `Dermatology & Aesthetics`. The
reason he gave — *"we have more clients in this sector"* — is the strongest argument for
the second page and is recorded verbatim because §5 depends on it.

**T7 recommended against all three and was overruled on all three.** The recommendations
were: one axis, post-launch, one combined medical page. **He was shown each cost in the
option text and took it.** Recorded once. No thread re-argues any of it.

---

## 2. ⚠️ Three collisions. Named, not silently applied.

### C-E1 — Answer 2 overrides Ruling 2, and Ruling 2 is the reason this project exists

| Source | Says |
|---|---|
| `instructions.md` §3 ruling 2 | *"**Launch scope is a lean core, ~8–10 pages.** Not the ~40+ the WordPress site has"* — Masud, 2026-09-03 |
| `instructions.md` §6 | *"pages come back **one at a time, each justified by keyword data**, not 32 at once by default"* |
| `SITE-MAP-v1.md` §3 | *"42 thin pages built at once is the exact disease the current site already has"* |
| **Masud, 2026-09-06** | **"Build them now, before launch"** |

**Launch scope is now seventeen pages.** The later ruling governs. But the earlier one was
not a preference — it was the diagnosis the whole rebuild was based on, and it is now set
aside rather than satisfied.

⚠️ **`instructions.md` §3 is not T7's file and has not been edited. Its ruling 2 now reads
as current and is not.** → **T1 records this; whoever owns `instructions.md` corrects §3
and §6.** Until then any thread reading §3 will believe launch is ten pages.

### C-E2 — A second nav axis makes seven top-level items. The rule says six.

`SITE-MAP-v1.md` §2: *"**Six top-level items**, matching the rule inherited from the Mango
project."* `site.css` §5 and `page-template.html` both hard-code the same six.

Adding **Industries** as a peer of **For** makes **seven**. There is no way to have two
audience axes in the nav and keep six, short of merging something.

**Not resolved here.** T7 does not own the nav — `THREAD-PLAN.md` §1 Rule 2 gives
`_template/page-template.html` to T3 and T9 only. → **T3 decides and builds. §3 below is
the spec T7 is handing over, not a change T7 made.**

### C-E3 — Answer 3 widens VEA's buyer definition, and R21 is still open

`instructions.md` §2: VEA sells to *"content creators, coaches, business owners, and
marketers and agencies — **largely international**."* Dermatology and aesthetic clinics are
**Mango Media Digital's** vertical, and Masud's own reason is that the client
relationships are there.

**R21** — *"Who owns Content Creators as an audience — Mango or VEA?"* — is **OPEN**, and
`Mango Website Rebuild` open item #7 asks the same thing and is also unanswered.
`instructions.md` §8 #12: *"One answer must serve both projects."*

**This is the same question, on a second vertical, and it is now larger.** Content Creators
was one contested audience. Adding Dermatology & Aesthetics means VEA is selling into the
sector Mango's case studies actually come from.

→ **T1: R21 needs restating to cover verticals, not just Content Creators.**

---

## 3. The information architecture — spec for T3

```
[logo → /]

  Services          → /services/
  For          ▾    (no page of its own — CSS dropdown)
      ├── Content Creators      → /content-creators/     ✅ built
      ├── Coaches & Trainers    → /coaches/              ✅ built
      ├── Business Owners       → /business-owners/      ✅ built
      ├── Marketers & Agencies  → /marketers-and-agencies/ ✅ built
      ├── Podcasters            → /podcasters/           ⬜ new
      └── Course Creators       → /course-creators/      ⬜ new
  Industries   ▾    (no page of its own — CSS dropdown)
      ├── Real Estate               → /real-estate/      ⬜ new
      ├── Medical & Doctors         → /medical/          ⬜ new
      ├── Dermatology & Aesthetics  → /aesthetics/       ⬜ new
      └── Legal & Lawyers           → /legal/            ⬜ new
  Portfolio         → /portfolio/
  Pricing           → /pricing/
  About             → /about/
  Contact           → /contact/
```

**Seventeen pages.** Both dropdowns are single-level, CSS `:hover` / `:focus-within` on
desktop and native `<details>` on mobile. A multi-level flyout stays banned.

### Where the ten URLs Masud sent actually land

| What he sent | Lands as |
|---|---|
| `youtube-video-editing-service` | **already built** — `/content-creators/` |
| `business-video-editing-services` | **already built** — `/business-owners/` |
| `video-editing-services-for-podcasters` | For → `/podcasters/` |
| `online-course-video-editing-services` | For → `/course-creators/` |
| `real-estate-video-services` | Industries → `/real-estate/` |
| Healthcare · Medical | Industries → `/medical/` |
| Dermatologist · Aesthetic Clinic | Industries → `/aesthetics/` |
| Legal and Lawyers | Industries → `/legal/` |

**Ten items, six new pages.** Two were already built.

---

## 4. ⚠️ A window that closes at launch — the URL naming decision

**Read on 2026-09-06 from `tastyedits.com`, the reference Masud supplied:** their nav
label is the audience and their **URL is the keyword**. The nav reads *"For Content
Creators"*; the URL is `/youtube-video-editing-service/`. Every one of their use-case
pages is built this way.

VEA does the opposite. `/content-creators/` is both label and URL, and it targets no
search term anyone types.

**The keyword-bearing alternative** — `/youtube-video-editing/`,
`/real-estate-video-editing/`, `/podcast-video-editing/` and so on — is measurably
stronger for search and it is **free to adopt right now**, because:

- **R22 ruled flat slugs to avoid redirects on URLs that might carry authority.** That
  reasoning does not extend to these six: they have never existed.
- **The four built pages carry `noindex`, `robots.txt` is `Disallow: /`, and no custom
  domain points at the staging project.** Nothing has ever been indexed. **Renaming them
  today costs zero redirects.** After cutover it costs four.

**T7's recommendation: keep flat, consistent slugs as specced in §3** — one inconsistent
nav section is worse than a weaker keyword — **but this is the last cheap moment to
choose the other way.** *(Labelled: **INFERENCE**, T7, 2026-09-06. Not a ruling. It does
not reopen R22, which governs the four existing URLs; it flags that R22's own reasoning
does not reach the six new ones.)*

---

## 5. ⚠️ The build gate that applies to all six pages

**The research supplies ONE SENTENCE per industry.** Verified 2026-09-06 by reading
`01-Research-Import/videoeditor_agency_website_copy.md` PAGE 11:

| Page | What exists in the research | What has to be written |
|---|---|---|
| Real Estate | 1 sentence (line 1133) | hero, 4 pain points, 2 paragraphs, 6 deliverables, CTA |
| Medical & Doctors | 1 sentence (line 1065) + PAGE 5 "For Professionals" | most of it |
| Dermatology & Aesthetics | 1 sentence (line 1049, "Beauty / Aesthetic / Skincare") | most of it |
| Legal & Lawyers | 1 sentence (line 1109) + PAGE 5 | most of it |
| Podcasters | 1 sentence (line 1125) + service #4 | most of it |
| Course Creators | 1 sentence (line 1117) | most of it — and see the overlap warning below |

**The four existing For pages were transcribed from finished prose. These six are
written.** That is a different kind of work and a different risk, so three rules bind:

1. **Pain points describe the READER, not VEA.** A realtor losing listings to slow video
   is a market observation. It is not a claim about this company and it invents nothing.
2. **Deliverables map only to R23's eleven services.** Nothing is offered that
   `/services/` does not list. Ruled 2026-09-05: eleven.
3. **No claim of sector experience, no client name, no count, no result.** **R07 and R08
   are still open.** Masud's *"we have more clients in this sector"* is the reason the
   `/aesthetics/` page exists — **it is not permission to say so on the page.** Turning it
   into a logo, a number or a testimonial needs the consent R08 requires.

### ⚠️ `/course-creators/` overlaps `/coaches/` more than any other pair on the site

Course editing is **deliverable #1** on `/coaches/`. `videoeditor_agency_website_copy`
PAGE 7 sells coaches on *"online courses not getting launched."* Tasty Edits has a Course
Creators page and **no coaches page** — they chose one, not both.

The two survive as separate pages only if the split is **who they are**, not what they
buy: a coach sells their time and uses video to fill it; a course creator sells the video
itself. If that distinction is not carried hard in the copy, these two collapse and become
the duplicate-content problem `THREAD-PLAN.md` §5 T7 warns about.

### ⚠️ `/aesthetics/` has a compliance dimension the other five do not

Before-and-after imagery is the default format in aesthetics, and Meta's and Google's
advertising policies restrict it for health and beauty. **A page promising before/after
edits is promising work that may not run as an ad.** Mango already handles
platform-compliance variants for clients, so this is a live operational fact rather than a
theoretical one. **The page should sell the edit, not promise the placement.**
*(Labelled: **INFERENCE**, T7, 2026-09-06. Not legal advice; a build constraint.)*

---

## 6. What each thread does next

| Thread | Action |
|---|---|
| **T7** | Six copy files → `03-Build-Ready\`, then six `index.html` under `site\`. Claims the six new folders — **`THREAD-PLAN.md` §4 assigns none of them, and that gap is why this row is written down** |
| **T3** | Resolve C-E2 (seven items vs six), build **both** dropdowns, promote the eleven existing nav links from `<span>` to `<a>` |
| **T1** | Record answers 1–3 as rulings. Restate **R21** to cover verticals. Flag `instructions.md` §3 ruling 2 as superseded |
| **T9** | Eleven new `<title>` / `<meta description>` / canonical sets; add six URLs to `sitemap.xml` |
| **T10** | Launch gate grows by six pages |

---

## 7. What this file does not settle

- **C-E2** — seven nav items against a six-item rule. T3's.
- **The URL window** — §4. Closes at cutover.
- **R21 as a vertical question** — T1's, and it is not answerable inside this project alone.
- **R07 / R08** — six new pages, zero proof available for any of them. Every one ships
  without a logo, a case study, a testimonial or a turnaround claim. **That is what the
  reference site uses to sell these exact pages.**
