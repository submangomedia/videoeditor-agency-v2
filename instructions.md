# Video Editor Agency — Project Instructions

**Location:** `I:\My Drive\MANGO MEDIA - DEV\Projects\Video Editor\`
**Domain:** videoeditor.agency
**Owner:** Masudur Rahman (Masud), CEO/Co-Founder, Mango Media Digital — Uttara, Dhaka
**Opened:** 2026-09-03
**Sibling project:** `..\Mango Website Rebuild\` — mangomedia.digital, went live 2026-09-03

---

## 1. What this project is

A **rebuild of videoeditor.agency**, from a messy WordPress/Elementor site to plain
static HTML and CSS on GitHub + Cloudflare Pages.

Unlike `Mango Website Rebuild`, this project holds **research and build in one
folder**. That is deliberate. The Mango project split them into sibling folders
that did not reference each other, and its own `instructions.md` §8 names that as a
problem it created for itself. Do not repeat it here.

**This project owns, end to end:**

- importing and reconciling the existing research (§4)
- deciding the page list, the copy and the design
- writing the HTML and CSS in `site\`
- the GitHub repo and the Cloudflare Pages project

**This project does NOT touch:** mangomedia.digital, or anything in the
`Mango Website Rebuild` or `Mango Media Web Platform` folders. Read from them
freely. Never write to them.

---

## 2. Who it's for

**Primary reader: Masud.** Not a coder. Wants direct, evidence-based answers.
**Criticise weak plans — do not just agree.** He would rather be told a plan is bad
than be agreed with. Structured, immediately usable output beats long explanation.

**The buyer the site is for is NOT the buyer mangomedia.digital sells to.** Mango
sells full-service digital marketing to Bangladeshi businesses. videoeditor.agency
sells video editing to content creators, coaches, business owners, and marketers
and agencies — largely international, largely inbound, largely price-sensitive and
speed-sensitive. Copy written in Mango's voice will miss.

---

## 3. Rulings already made — do not reopen

| # | Ruling | Date | By |
|---|---|---|---|
| 1 | **Plain HTML + CSS. No framework.** Static, GitHub, Cloudflare Pages. Zero JS by default | 2026-09-03 | Masud |
| 2 | **Launch scope is a lean core, ~8–10 pages.** Not the ~40+ the WordPress site has | 2026-09-03 | Masud |
| 3 | **Reuse Mango's design system** — same tokens, same Roboto Slab 600 / Roboto pairing, same single radius, same navy-primary / orange-accent rule | 2026-09-03 | Masud |
| 4 | **The live WordPress site is left alone.** No emergency patch. The rebuild replaces it | 2026-09-03 | Masud |

### On ruling 4 — recorded once, then dropped

Masud was given the option to strip the fake pricing block from WordPress this week
and declined; the rebuild will replace it. **That decision is his and it is
recorded, not re-argued.** The one condition worth writing down: the exposure it
accepts (a live `$6.99/month` price for web hosting on a video editing site, and
six Lorem ipsum FAQ answers — see `00-Our-Baseline\`) scales with how long the
rebuild takes. It is a small risk over six weeks and a real one over six months.

**No thread is to raise ruling 4 again.** If the rebuild slips past
[[TARGET LAUNCH DATE — Masud]], that is a schedule conversation, not a re-litigation.

### On ruling 3 — what "reuse the design system" does and does not mean

**Reused, verbatim:** the radius token, the type pairing and scale, the space
scale, the layout container, the accessibility rules, the CSS file's whole
structure.

**NOT reused without a ruling:** the two brand hexes. `--navy: #0D3C87` and
`--orange: #FF4F01` were *measured from Mango's logo files*. videoeditor.agency has
its own logo (`logo.svg`, live on the current site). Those hexes are carried into
`site\assets\css\site.css` as a working default so pages render, and are marked in
the file as unmeasured for this brand. **DESIGN thread owns measuring the real VEA
logo hexes and either confirming or replacing them.** Do not treat the copied
values as a ruling — ruling 3 was about the *system*, not about VEA inheriting
Mango's exact colours by default.

---

## 4. The existing research — six Google Docs, not in this folder

Found in Drive on 2026-09-03. **None of them is in this project folder yet.**
Importing them is Thread 1's entire job (§6).

| Doc | Size | Owner |
|---|---|---|
| `Video Editor Agency Website plan` | 190 KB | videoeditoragency.hello@gmail.com |
| `VEA all page content plan` | 3.5 MB | videoeditoragency.hello@gmail.com |
| `videoeditor_agency_website_copy` | 36 KB | **three separate copies exist** |
| `VideoEditorAgency_Website_Content` | 25 KB | sub.mangomedia@gmail.com |
| `CTA` | 20 KB | videoeditoragency.hello@gmail.com |
| `video editor promo` | 14 KB | videoeditoragency.hello@gmail.com |

**Two problems visible before anything is read:**

1. **`videoeditor_agency_website_copy` exists in three places**, all 35,897 bytes,
   two owned by `sub.mangomedia@gmail.com` and one by
   `videoeditoragency.hello@gmail.com`. Identical byte counts suggest identical
   content, but that must be *verified by diff*, not assumed. The Mango project
   lost real time to exactly this — see its §5 rows 16 and the `(1)` files box.
2. **`VEA all page content plan` is 3.5 MB.** For a Google Doc that is enormous —
   almost certainly embedded images. It may be the real master, or it may be a
   dumping ground. Do not assume which.

**Two of the six are owned by a different Google account.** If access to
`videoeditoragency.hello@gmail.com` is ever lost, four of the six documents go with
it. Import them into this folder as `.md` and stop depending on Drive sharing.

---

## 5. Design and technical rules — binding

These are inherited from `..\Mango Website Rebuild\instructions.md` §3 and
`DECISION-Framework.md` v2, and they apply here unchanged.

### Zero JS by default

**Banned:** JS carousels and sliders · preloader gates · scroll-triggered reveals ·
animated count-up counters without a static fallback · custom JS cursors · JS "Load
More" · popup-modal and exit-intent CTAs · JS tab filters · autoplay video ·
off-canvas JS mobile nav · JS FAQ accordions · multi-level flyout mega-menus.

**Use instead:** one static hero, or at most CSS `scroll-snap` · native
`<details>`/`<summary>` · native `<video>` with a poster and no autoplay · static
wrapped grids · real paginated URLs · plain `tel:` / `wa.me` / `mailto:` links ·
native `<form method="post">` · link out to Google Maps rather than embedding it.

**Stats rule:** any number callout must render the real number in static HTML. The
current site fails this in the most visible way possible — its homepage counters
render **`0 +` clients** and **`0 K` videos edited** to anything that does not run
JavaScript. That includes some crawlers and every accessibility tool. See
`00-Our-Baseline\`.

### Content integrity — the rules the current site breaks

1. **No placeholder that a client could quote back at you.** No Lorem ipsum. No
   demo pricing. No `#` CTA. No stock-plugin marketing copy left in place.
2. **No round number the page cannot back up.** "100+ Clients" and "10,000+ Videos
   Edited" both appear on the current homepage and neither is evidenced anywhere on
   it. Either show the work that proves them, or state a number that is provable.
3. **Never invent a figure, a client name, an outcome or a testimonial.** If you
   need a number Masud has not given, write `[[bracket]]` stating exactly what is
   needed. **A bracket is always better than an estimate.**
4. **Never quote or closely paraphrase competitor copy.** Structure and intent only.
5. **If you have not actually fetched and read a page, say so.** Do not infer from
   memory.
6. **Where two project documents disagree, name the contradiction and both
   sources.** Do not silently pick one.

### Page rules — check before any page is built

- Exactly one real `<h1>`
- Every nav link resolves to a live page — no exceptions. An unlinked, muted `<span>`
  is correct for a section that does not exist yet; a link to a 404 is not
- Every image has real alt text
- One radius token, one primary accent
- No fabricated testimonial, no placeholder `mailto:` or `tel:`
- Any price shown is real, or is unmistakably labelled a placeholder
- A redirect exists in `site\_redirects` for any URL this page replaces

---

## 6. Launch scope — ruled, and what it costs

**Ruling 2: a lean core of ~8–10 pages.**

**The authoritative list is `02-Decisions\SITE-MAP-v1.md` §1.** Summarised here:

| # | Page | URL | Owned by |
|---|---|---|---|
| 1 | Home | `/` | T4 |
| 2 | Services | `/services/` | T6 |
| 3 | For Content Creators | `/content-creators/` | T7 |
| 4 | For Coaches & Trainers | `/coaches/` | T7 |
| 5 | For Business Owners | `/business-owners/` | T7 |
| 6 | For Marketers & Agencies | `/marketers-and-agencies/` | T7 |
| 7 | Portfolio | `/portfolio/` | T5 |
| 8 | Pricing | `/pricing/` | T6 — **blocked on Q7** |
| 9 | About | `/about/` | T8 |
| 10 | Contact | `/contact/` | T8 |

Plus three utility pages not in the nav and not counted in the ten: `/privacy/`,
`/terms/`, `/404.html` — all T8.

**Services and About are new to the nav.** Neither appears in the live menu today.
See `SITE-MAP-v1.md` §2 for why that matters more than it sounds.

**The four audience URLs are the current live slugs and they stay flat** — not
`/for/…`. Keeping them means no redirect on the only four URLs on the site that
might carry authority. They were read from the homepage nav on 2026-09-03 and not
opened individually; verify each against the live site before building.

**Thread numbers refer to `THREAD-PLAN.md` §4.** That file, not this one, is the
authority on which thread owns which file.

### What this ruling deletes, and the honest cost

The current site has **~32 video-type pages** (`/youtube-videos/`,
`/shorts-reels-tiktoks/`, `/explainer-videos/`, `/whiteboard-animation/` and so on)
plus **two taxonomy trees** (`/business-cat/…` by industry, `/video-type/…` by
format). Ruling 2 does not build any of them at launch. Each becomes a section on
the homepage or a filter on the Portfolio page, and every one of the ~32 URLs gets
a 301 in `site\_redirects`.

**State the cost plainly, because it is real:** those 32 pages are the site's
entire long-tail SEO surface. Someone searching "whiteboard animation editor" has
32 doors into the current site and will have far fewer after launch.

**Three things make that acceptable, and one makes it urgent:**

- Acceptable, 1: nobody has checked whether any of the 32 ranks for anything. There
  is no keyword research in this project. Deleting pages that rank is a real loss;
  deleting thin pages that rank for nothing costs nothing.
- Acceptable, 2: a page whose visible content is its own URL slug (see
  `00-Our-Baseline\`) is not competing for anything today.
- Acceptable, 3: pages come back. The lean core ships, then video-type pages return
  **one at a time, each justified by keyword data**, not 32 at once by default.
- **Urgent:** the ranking check must happen **before** the redirects go live, not
  after. Once traffic is gone it is hard to tell what was lost. → open item #2 in §8.

---

## 7. Folder structure

```
Video Editor\
├── instructions.md                  ← this file. Read first, always
├── DECISION-Framework.md            ← the platform ruling
├── THREAD-PLAN.md                   ← which chat you are, what file you output
├── WORKLOG.md                       ← the ONLY handoff between desktop and laptop
├── DEPLOYMENT-RUNBOOK.md            ← GitHub + Cloudflare. Deliberately OUTSIDE site\
├── COWORK-PROJECT-INSTRUCTIONS.md   ← paste this into the Cowork project settings
│
├── 00-Our-Baseline\                 ← audits of the CURRENT WordPress site
├── 01-Research-Import\              ← the six Google Docs, converted to .md
├── 02-Decisions\                    ← rulings, one file per decision
├── 03-Build-Ready\                  ← final approved copy, one file per page
├── 04-Assets\                       ← logos and images BEFORE they enter site\
│
└── site\                            ← THE REPO'S PUBLISHED FOLDER
    ├── .gitignore
    ├── README.md                    ← a stub. Anything here is PUBLIC
    ├── robots.txt
    ├── _redirects
    ├── sitemap.xml
    ├── _template\page-template.html ← source of truth for nav and footer
    ├── tools\sync-shared.mjs        ← pushes nav/footer into every page
    └── assets\css\site.css
```

### The one setting that keeps this folder private

Cloudflare Pages' **build output directory is `site`**. That single field is the
only thing stopping `01-Research-Import\` and `02-Decisions\` from being served at
`videoeditor.agency/…`. It is the same arrangement that protects the Mango archive.

**Two consequences nobody should learn the hard way:**

1. **Anything inside `site\` is public.** No internal notes, no runbooks, no client
   names awaiting permission. That is why `DEPLOYMENT-RUNBOOK.md` sits at the root
   and `site\README.md` is a stub — the Mango project published its own runbook by
   accident and had to move it.
2. **The GitHub repository must be PRIVATE.** Cloudflare's output directory
   controls what is *served*; it does nothing about what is *in the repo*. Every
   research file, every unapproved price and every client name in this folder gets
   committed. A public repo exposes all of it. → open item #1 in §8.

---

## 8. Open items needing Masud's input

Ordered by what unblocks the most.

| # | Item | Blocks |
|---|---|---|
| 1 | **Is the GitHub repo private?** Confirm before the first push. See §7 | Everything. Do not push until answered |
| 2 | **Does any of the ~32 video-type pages rank for anything?** One Search Console export settles it. Needed *before* the redirects go live | The redirect map, §6 |
| 3 | **Where is the domain actually registered and where is DNS?** Bought at Namecheap; "maybe transferred to Cloudflare" is unverified | Cutover, DNS, the Pages project |
| 4 | **Real pricing tiers.** What replaces the demo block? Three tiers, per-video, or "request a quote"? | The Pricing page. Nothing on it can be written without this |
| 5 | **Are "100+ clients" and "10,000+ videos edited" defensible?** Both are live today, neither is evidenced. What is the provable number? | Homepage trust strip |
| 6 | **Named clients with permission to show the work and the name** | Portfolio, homepage social proof |
| 7 | **Contact details for VEA.** Same `+880 1336433710` as Mango, or its own? Which email — `videoeditoragency.hello@gmail.com`? | Contact page, footer on every page |
| 8 | **Does VEA claim Bangladesh, or stay location-neutral?** It sells largely to international buyers; Mango leads with Dhaka | About, Contact, whole site voice |
| 9 | **VEA logo colour values** — the real hexes, measured from the logo file, not from Mango's | `site.css`, DESIGN thread |
| 10 | **Target launch date** | The §3 note on ruling 4 |
| 11 | **The blog** — migrate, drop, or park? `/blog/` is live and out of the §6 scope list | Redirect map |
| 12 | **Who owns Content Creators as an audience — Mango or VEA?** `Mango Website Rebuild` open item #7 asks the same question and it is still unanswered there. **One answer must serve both projects** | The audience pages in both sites |

---

## 9. House rules

- **One thread, one output file.** Never write a file another live thread owns.
  `THREAD-PLAN.md` says which is which.
- **Update `WORKLOG.md` at the end of every session.** Newest at top, with
  Done / Decisions / Open / Blocked. Cowork memory does not sync between the
  desktop and the laptop — that file is the only handoff.
- **Claude cannot push to GitHub.** Masud commits and pushes himself. Every finished
  piece of work ends with a push summary and what is next.
- **Editing files in Drive changes nothing live.** Nothing ships until Masud pushes
  and Cloudflare rebuilds.
- After editing `_template\page-template.html`, run `node tools\sync-shared.mjs`
  from inside `site\`, then `--check` before every push.
- Do not use PowerShell `Get-Content`/`Set-Content` to rewrite project files — it
  corrupts UTF-8 punctuation. Use Python, then copy the result to Drive.
