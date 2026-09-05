# videoeditor.agency — Current Homepage Audit

**Fetched:** 2026-09-03
**Method:** live fetch of `https://videoeditor.agency/`. Everything below is what the
page actually returned. Nothing is recalled or inferred.
**Platform:** WordPress + **Elementor 4.2.1**

---

## 1. What is live right now

### ⚠️ A. The pricing block is another product's demo content

The homepage sells three tiers:

| Tier | Price | What it lists |
|---|---|---|
| Basic | **$6.99/month** | 15 Email Account · 100 GB Space · 1 Domain Name · 300 GB Bandwidth · 00 Mysql Databases · Enhanced Security |
| Professional | **$12.99/month** | identical |
| Business | **$15.99/month** | identical |

**That is web hosting, not video editing.** It is the demo content that ships with
the Premium Addons PRO plugin, and the plugin's own marketing paragraph is live above
it — a block of copy about elevating your Elementor capabilities, on a video editing
agency's homepage.

Two lines beneath it make it worse:

- "Discounted Prices Above are Rounded Down to Look Nice."
- "14 Days Money Back Warranty, No Question Asked." → linked to
  **`premiumaddons.com`**, a third party's refund policy.

**Risk class:** a client can quote `$6.99/month` back at you. It is a published
price. And in the `VEA all page content plan` research doc, that same $6.99–$15.99
set appears again — this time attached to **real editing features** (2 Video Requests
per month, 48-Hour Turnaround, Dedicated Account Manager). One copy-paste from that
doc and the fake price becomes a real offer.

**Masud ruled 2026-09-03: leave it, the rebuild replaces it.** Recorded, not
re-argued. See `instructions.md` §3.

### ⚠️ B. Six Lorem ipsum FAQ answers

The FAQ section is live with six questions and six identical Latin placeholder
answers. The questions are not even the agency's:

> Which plan is right for me? · How many job listings can we post? · How long does
> it take to post a job listing? · Will you help us set everything up? · Is there
> customer support? · What is the cancellation policy?

"How many job listings can we post?" is **job-board** demo content. So the homepage
carries leftovers from at least two unrelated products.

### ⚠️ C. The counters render zero

```
Clients          0 +
Videos edited    0 K
```

The real figures are injected by a JavaScript count-up animation. To anything that
does not execute JS — some crawlers, every screen reader, any blocked-script
session — the page states the agency has **zero clients and zero videos**.

This is the exact pattern the zero-JS stats rule exists to prevent: *any number
callout must render the real number in static HTML.*

It also contradicts the checklist a few hundred pixels below, which claims
**100+ clients** and **10,000+ videos edited**.

### D. Dead call-to-action buttons

Every primary CTA on the page points at `#`:

- "Get Started" — the hero button
- "Let's Get Started" — the why-us section
- "See Full Gallery" — the portfolio section
- "Contact Now" ×3 — one per pricing tier

**Six dead CTAs on the page whose job is to generate enquiries.**

### E. Portfolio cards render their own URL slugs as visible text

Each of the ~32 portfolio cards prints its raw slug above its label:

```
/hope-you-get-it/
Promotional & Brand Videos

/ad-campaign-videos/
Ad Campaign Videos
```

**`/hope-you-get-it/` is a live URL** carrying the "Promotional & Brand Videos"
category — someone's placeholder slug that was never renamed.

### F. Other findings

| | |
|---|---|
| Typo | "✅ 100+ Client **Servered**" |
| Out of season | A **25% Black Friday discount** graphic, live in September |
| Nav | "For" points at `#services`. No section with that id appears in the rendered page |
| Nav | "Pricing" points at `/#pricing` — a homepage anchor, not a page |
| Contrast | Hero claims trust and volume; counters say zero |

---

## 2. Structure as it stands

**Navigation:** Home · For ▾ (4 audience pages) · Portfolio ▾ (two taxonomy columns
+ two "View All" links) · Pricing · Blog · Contact

**Missing from the nav entirely: Services and About.**

**Homepage sections, in order:**

1. Hero — "Professional Video Editing Service" + animated GIF + dead CTA
2. Client image + "Trusted by many!"
3. Counters — rendering `0 +` and `0 K`
4. "We Edit Every Type of Video You Need" — ~32 portfolio cards
5. Six-item checklist — 100+ clients, 10,000+ videos
6. "Why Creators & Brands Trust Us" + dead CTA
7. Black Friday graphic
8. Pricing — the hosting demo block
9. FAQ — six Lorem ipsum answers

**Scale:** ~32 standalone video-type pages, plus `/business-cat/` (by industry) and
`/video-type/` (by format) taxonomy trees, plus 4 audience pages, plus a blog.
**~40+ URLs.**

---

## 3. Verdict — what the rebuild must do differently

1. **Every number renders in static HTML.** No count-up without a static value in
   the markup. The current page's `0 +` is the single most damaging thing on it.
2. **No placeholder ships.** Not a price, not a Lorem paragraph, not a `#` link.
   The rule in `instructions.md` §5 exists because of this page.
3. **Every CTA resolves.** Six dead buttons on a lead-generation homepage is the
   whole funnel broken.
4. **Slugs are not content.** A card shows its title. `/hope-you-get-it/` should
   never have been reachable, let alone printed on screen.
5. **Services and About go in the nav.** An agency selling to the US and UK from
   Dhaka, with neither in its menu, is asking a stranger to trust an anonymous site.
6. **~40 URLs collapse to 10.** But only after Q1 — does any of them rank? —
   is answered. Retiring pages that rank is destroying an asset; retiring thin pages
   that rank for nothing costs nothing, and nobody has checked which this is.
7. **Claims get evidenced or dropped.** "100+ clients" beside twelve logos was the
   Mango site's failure. Do not repeat it here with "10,000+ Videos Edited".

---

## 4. What this audit does not cover

Only the homepage was fetched. **Not audited:** the 4 audience pages, `/portfolio/`,
`/contact/`, `/blog/`, the ~32 video-type pages, or either taxonomy tree.

Page speed, Core Web Vitals, mobile rendering, `noindex` status and the current
sitemap were **not measured**. If a before/after comparison is wanted after launch,
those numbers must be recorded **now**, while the old site is still up. Once it is
gone they cannot be recovered.
