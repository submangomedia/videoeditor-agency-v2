# Video Editor Agency — Site Map v1

**Status: PROPOSAL. Not ruled.** Masud approves, amends or rejects before any page is built.
**Written:** 2026-09-03
**Built from:** eight Google Docs actually read on 2026-09-03, plus a live fetch of
videoeditor.agency the same day. Sources listed in §7.

---

## 1. The answer in one table

**10 pages at launch. Six top-level nav items. One new URL folder (`/for/`).**

| # | Page | URL | Nav | Where the copy comes from |
|---|---|---|---|---|
| 1 | Home | `/` | logo | `website_copy` Homepage — 12 sections, written |
| 2 | Services | `/services/` | ✓ | `website_copy` Page 3 — 11 services, written |
| 3 | For Content Creators | `/for/content-creators/` | ▾ | live slug + `website_copy` YouTubers page |
| 4 | For Coaches & Trainers | `/for/coaches/` | ▾ | live slug + **the best-written page in the whole set** |
| 5 | For Business Owners | `/for/business-owners/` | ▾ | live slug + `website_copy` Businesses page |
| 6 | For Marketers & Agencies | `/for/marketers-and-agencies/` | ▾ | live slug + `website_copy` Agencies page |
| 7 | Portfolio | `/portfolio/` | ✓ | `website_copy` Page 12 + the taxonomy in §3 |
| 8 | Pricing | `/pricing/` | ✓ | **BLOCKED — see §5** |
| 9 | About | `/about/` | ✓ | `website_copy` Page 2 — written |
| 10 | Contact | `/contact/` | ✓ | `website_copy` Page 13 — written |

Plus three **utility pages**, not in the nav and not counted in the ten:

| Page | URL | Why |
|---|---|---|
| Privacy Policy | `/privacy/` | Linked from the footer in every research doc. Required if the site takes form submissions from the UK or EU |
| Terms & Conditions | `/terms/` | Same — linked everywhere, written nowhere |
| 404 | `/404.html` | Cloudflare Pages serves this automatically. ~40 old URLs are about to 301; anything missed lands here |

---

## 2. Navigation

```
[logo → /]

  Services          → /services/
  For          ▾    → (no page of its own — a CSS dropdown only)
      ├── Content Creators        → /for/content-creators/
      ├── Coaches & Trainers      → /for/coaches/
      ├── Business Owners         → /for/business-owners/
      └── Marketers & Agencies    → /for/marketers-and-agencies/
  Portfolio         → /portfolio/
  Pricing           → /pricing/
  About             → /about/
  Contact           → /contact/          (button treatment)
```

**Six top-level items**, matching the rule inherited from the Mango project.

### Three changes from what is live today, and why

| Change | Reason |
|---|---|
| **Services and About are added to the nav** | Neither is in the live nav. An agency selling to the US and UK from Dhaka with no About page and no Services page in its menu is asking a stranger to wire money to an anonymous website. Every research doc assumes both pages exist; the live nav just never got them |
| **Portfolio stops being a mega-menu** | It currently opens a two-column panel of ~10 taxonomy links plus two "View All" links. That is a multi-level flyout, which is banned under the zero-JS rules, and it buries the actual portfolio. The categories move onto the Portfolio page itself as filters — see §3 |
| **Blog is dropped from the nav** | `/blog/` is live. Nothing in eight research documents plans a single article. A nav item pointing at an empty or stale blog costs more credibility than it earns. → open question Q6 |

### One thing kept exactly as-is

**The four audience slugs.** `/coaches/`, `/content-creators/`, `/business-owners/`,
`/marketers-and-agencies/` are the live URLs today.

⚠️ **The table in §1 moves them to `/for/…` and that is a real decision, not a
tidy-up.** Moving them costs four 301 redirects and whatever authority those URLs
have accumulated. Keeping them flat costs nothing and breaks nothing.

**Recommendation: keep the flat slugs** (`/coaches/` not `/for/coaches/`) unless
Q1 in §5 shows they have no traffic to lose. The `/for/` folder is tidier; tidy is
not worth a redirect on the only four URLs on the site that might rank.

---

## 3. The taxonomy — the biggest structural decision

Three research documents propose three **incompatible** category systems. This is
the single largest contradiction in the set, so all three are recorded rather than
silently merged.

| Source | Structure | Count | Has slugs? |
|---|---|---|---|
| **`Website`** (modified 2026-09-03 — the newest doc in the set) | Two clean axes: 28 industries in 6 colour-coded groups, **and** 14 video formats | 28 + 14 = **42** | ✅ **Yes — the only doc in the set with slugs** |
| **Live site** | Two axes: `/business-cat/…` and `/video-type/…`, plus ~32 standalone video-type pages | ~40+ | ✅ live URLs |
| **`video editor agency category`** (Aug 2025) | One flat axis, 5 groups mixing audience, industry and technique | 32 endorsed, 51 in a rejected superset | ❌ none |

### The recommendation

**Adopt the `Website` doc's two-axis system as the vocabulary. Ship it as filters on
`/portfolio/`. Build zero category pages at launch.**

```
/portfolio/
  ├── Filter by industry  — 28 labels, 6 groups
  └── Filter by format    — 14 labels
```

**Why this and not 42 pages:**

- It costs **no new URLs**, so it fits inside the 10-page ruling without argument.
- All 42 labels become usable immediately — the same browsing experience, one page.
- Every label is promotable to a real page later, **one at a time, each justified by
  keyword data.** 42 thin pages built at once is the exact disease the current site
  already has.
- The `Website` doc is the only source with slugs, and it was modified today. It is
  the most current thinking available. Its slugs (`corporate-video`,
  `youtube-video-editing`, `short-form-reels`…) are ready to use the day a page is
  justified.

**How the filters work with zero JS:** they do not. A JS tab filter is banned. Two
honest options, and the Design thread picks:

1. **Grouped sections with anchor links.** One long page, six industry groups as
   `<section>`s, the filter row is anchor links. No JS, works everywhere, and every
   filter gets a shareable URL (`/portfolio/#healthcare`).
2. **The CSS `:target` or checkbox pattern.** Genuine show/hide with no JavaScript.
   More fragile, less accessible, and it does not degrade. Not recommended.

**Option 1.** It is the only one that is honestly zero-JS and shareable.

### What this deletes

~32 standalone video-type pages and two taxonomy trees stop existing as URLs. Every
one gets a 301 into `/portfolio/` or the relevant `/services/` anchor.

**This is only safe if Q1 in §5 is answered first.** If three of those 32 pages
carry the site's organic traffic, redirecting them blind is destroying an asset
nobody measured.

---

## 4. Page-by-page content

Sections in order. ⚠️ marks a block that cannot be built until an open question in §5
is answered.

### 1. Home — `/`

1. Hero — H1 "We Edit Videos That Grow Your Brand", sub-headline, two CTAs
2. ⚠️ Trust strip — client logos **(Q2)**
3. ⚠️ Stats — four counters **(Q3 — every number contradicts every other)**
4. Services — 6 cards + a secondary line of 4 more → `/services/`
5. Process — 5 steps, Submit Brief → Assign Editor → First Draft → Revisions → Final Delivery
6. ⚠️ Portfolio — max 8 items **(Q4 — no real work is catalogued anywhere)**
7. Why Choose Us — 6 blocks. ⚠️ the "4.9 on Google" widget **(Q5)**
8. ⚠️ Pricing summary — 3 tiers → `/pricing/` **(Q7)**
9. ⚠️ Testimonials — 6–8 **(Q8 — not one real testimonial exists in any document)**
10. FAQ — 8 written Q&As, as native `<details>`
11. CTA banner
12. Footer

**Static count:** 12 sections, 8 of them buildable today, 4 blocked on Masud.

### 2. Services — `/services/`

Hero → intro → 11 service blocks → CTA.

Long-Form · Short-Form Reels & TikToks · YouTube · Podcast · Motion Graphics &
Animation · Marketing Video · Ads Video · Event Video · Promotional Video · Video
Recording · Thumbnail Design

⚠️ **Two contradictions to resolve before this page is written:**
- The homepage shows **6** service cards; this page lists **11**; the footer lists
  **7**. Three different service counts in one document.
- **Video Recording is production, not editing**, and the copy scopes it to "Dhaka
  and select locations." On a site selling remote editing to the US and UK, a
  Dhaka-only service either reveals the location or confuses the offer. → Q9

### 3–6. The four "For" pages

All four share one template, taken from the **Coaches page**, which is the strongest
writing in the entire research set — it is the only page with no lorem ipsum and a
named mechanism ("the Conversion Cut system").

1. Hero — segment-specific headline and sub-headline
2. The problem — 4 pain points, written in that segment's language
3. The solution — H2 + two paragraphs
4. What we deliver — 6 bullets
5. ⚠️ Proof — 1–2 testimonials from that segment **(Q8)**
6. ⚠️ Recommended plan **(Q7)**
7. CTA — segment-specific

**Copy exists for all four.** `website_copy` has finished pages for Businesses,
YouTubers, Coaches and Marketing Agencies, which map onto the four live slugs.

⚠️ **These four pages are 80% structurally identical.** That is a duplicate-content
risk. It is survivable only if the pain points and the deliverables are genuinely
different per segment — which in `website_copy` they are. **Do not let a build thread
paste one page four times and swap the noun.**

### 7. Portfolio — `/portfolio/`

Hero → filter rows (§3) → grid → CTA.

⚠️ **Blocked on Q4.** Not one real portfolio item — no title, no client, no link, no
thumbnail — exists in any of the eight documents. Every example is generic
("YouTube Channel Edit — Fitness Brand"). This page is a container with nothing to
put in it.

### 8. Pricing — `/pricing/`

Hero → the model → tiers → what is included → FAQ → CTA.

⚠️ **The most blocked page on the site.** See §5 Q7. Three incompatible price sets
exist across the research and one of them is live on the site right now.

**The only prices anywhere that look real** — they appear in the client brief *and*
independently in the copy doc:

| Service | Rate |
|---|---|
| Long-form editing | **$15 per minute of final output** |
| Short-form reel | **$25 per video** |
| Motion graphics | **$15 per minute of animation** |
| Thumbnail design | `$XX` — never filled |

Every retainer and bundle price in every document is a literal `$XXX`.

### 9. About — `/about/`

Hero → showreel → who we are (2 paragraphs) → ⚠️ stats **(Q3)** → four values → CTA.

The positioning line is the strongest single sentence in the research and should
survive to the live page: a dedicated team that **operates like an in-house
department at a fraction of the cost** — explicitly not a freelancer marketplace.

⚠️ `Since [Year]` is unfilled in every document. → Q10

### 10. Contact — `/contact/`

Hero → intro → contact details → ⚠️ form → 3-question FAQ.

⚠️ **There is no form backend.** Same unsolved problem as the Mango site. Until one
exists, this page ships with `tel:`, `wa.me` and `mailto:` only — which is what
mangomedia.digital does today. → Q11

---

## 5. Open questions — what Masud must answer

Nothing in the ⚠️ list above can be built until these are answered. Ordered by how
much each unblocks.

| # | Question | Blocks |
|---|---|---|
| **Q1** | **Does any of the ~40 pages being deleted rank for anything?** One Search Console export settles it. Needed **before** the redirects go live, not after | §3 entirely, and the `/for/` decision in §2 |
| **Q2** | **Which client logos may be shown?** ⚠️ The research proposes putting **YouTube, Meta, Shopify, TikTok, Spotify and LinkedIn** logos under a heading reading *"Trusted by creators and brands worldwide."* Those are platforms, not clients. One doc puts **Adidas and Nike** in a row headed "TRUSTED BY INDUSTRY LEADERS." **Neither ships.** What are the real logos? | Home §2, all four For pages |
| **Q3** | **The real numbers.** The research contains, for the same company: 100+ / 200+ / 300+ clients · 3,000+ / 10,000+ videos · 1,200+ / 1,218 projects · 500k+ minutes · 5+ / 6+ years · 4.7 / 4.9 rating. The live site's own counters render **`0 +`** and **`0 K`**. What is provable? | Home §3, About |
| **Q4** | **Real portfolio items** — titles, clients, links, and permission to publish each | `/portfolio/`, Home §6 |
| **Q5** | **Is there a Google Business profile with reviews?** "4.9 on Google" appears with no profile referenced anywhere. If there is no profile, the widget is deleted, not adjusted | Home §7 |
| **Q6** | **The blog — migrate, drop, or park?** `/blog/` is live. Zero articles are planned in eight documents | Nav, redirect map |
| **Q7** | **Pricing.** ⚠️ Three sets exist: `$99/$199/$299` · `$6.99/$12.99/$15.99` · `$XXX`. **The $6.99–$15.99 set is a web-hosting template's prices and is LIVE on videoeditor.agency right now**, attached in one research doc to real editing features. Nobody sells unlimited video editing at $12.99/month. What are the real tiers? | `/pricing/`, Home §8, all four For pages |
| **Q8** | **Real testimonials with names and permission.** ⚠️ Not one exists. The research contains fabricated placeholders ("John A., YouTuber (Tech)"), three *identical* testimonials attributed to one unnamed source, and — in one doc — **a team member used as a client testimonial** | Home §9, all four For pages |
| **Q9** | **Is Video Recording in the offer?** It is production, not editing, and is scoped to Dhaka only | `/services/` |
| **Q10** | **Founding year.** `Since [Year]` unfilled everywhere. "5+ years" implies ~2021, "6+ years" implies ~2020 | About |
| **Q11** | **Form backend** — Cloudflare Worker, Formspree, or no form at launch | `/contact/` |
| **Q12** | **Which phone number?** The research shows **+8801336433711**. Mango's number is **+8801336433710**. **One digit apart.** One of them is a typo and I cannot tell which | Footer on all 10 pages |
| **Q13** | **Does the site say it is in Bangladesh?** The copy never mentions it, but sets hours in GMT+6 and puts a Dhaka map on Contact. One research doc pairs **New York and Delaware addresses** with that Dhaka map. Decide deliberately; do not let it happen by accident | About, Contact, whole voice |
| **Q14** | **Unlimited revisions — true or not?** "No revision caps. No extra fees. Ever." appears five times, and the pricing table directly beneath it caps Starter at **3 revisions** and Starter Pack at **2**. As written the page contradicts itself in the same screen | Pricing, Home §8, For pages |
| **Q15** | **Turnaround.** 24–72 hours vs 24–48 hours vs 48 hours vs 3–5 business days. Four different promises | Home §7, Pricing |

---

## 6. Two things that must not reach the site

**1. becreatives.co copy.** The `VE CONTENT` doc collects competitor copy from
becreatives.co in a reference table — "Unlimited Video Editing Service", "Dedicated
Video Team at Your Service", "All-Form Video Editing" — with the source URL beside
each row. Nothing in that table distinguishes reference from intended copy. **A
build thread reading it could ship a competitor's headlines verbatim.** Structure and
intent only.

**2. Foreign template copy.** The `VEA all page content plan` doc — and the live site
— carry copy from at least four unrelated products: web hosting ("15 Email Account,
100 GB Space"), a job board ("How many job listings can we post?"), a construction
firm ("Our construction business…"), and a landscaping company ("We at The
Gardeny…"). Plus "Anne Doe" listed as real staff, and the theme vendor's own credit
line. **All of this is live or one copy-paste away from being live.**

---

## 7. Sources — read on 2026-09-03

| Document | Size | Modified | What it is actually good for |
|---|---|---|---|
| `Website` | 16 KB | **2026-09-03** | **The taxonomy.** 28 industries + 14 formats, the only doc with slugs. Newest in the set |
| `videoeditor_agency_website_copy` | 36 KB | 2026-05-17 | **The copy.** 13 pages, finished prose. The single most useful document |
| `VEA all page content plan` | 3.5 MB | 2026-07-14 | The nav structure, and the Coaches page. Otherwise a contaminated scrapbook |
| `video editor agency category` | 3.3 MB | 2025-08-23 | Category names and one-line descriptions. Superseded by `Website` |
| `video editor agenc` | 336 KB | 2025-08-23 | An early nav draft. Superseded |
| `VE CONTENT` | 2.2 MB | 2025-08-10 | ~90% social-media planning. **Almost nothing for the website** |
| `video editor promo` | 14 KB | — | Not yet read |
| **`1MGid_0IXdwW-N4Yt32jD1IrIz7OPnj99agGn31e4fgs`** | — | — | ⚠️ **"Requested entity was not found."** Sent twice in the list. Either deleted, or not shared with `sub.mangomedia@gmail.com`. **Unread — this map does not account for it** |

⚠️ **Four of the eight are owned by `videoeditoragency.hello@gmail.com` or
`masud.creatives@gmail.com`, not by `sub.mangomedia@gmail.com`.** If access to either
account lapses, half the research goes with it. Import all of it into
`01-Research-Import\` as `.md` and stop depending on Drive sharing.

⚠️ **Three of the four large documents came back truncated** — `video editor agency
category` (~15 KB of 3.3 MB), `VE CONTENT` (~20 KB of 2.2 MB), `VEA all page content
plan` (~13 KB of 3.5 MB). Most of the missing weight is embedded screenshots, but
some is text. **The pricing section of `video editor agency category` was
specifically not retrieved.** Re-read those three in chunks before treating this map
as complete.
