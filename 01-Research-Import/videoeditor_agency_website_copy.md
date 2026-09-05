# videoeditor_agency_website_copy — IMPORTED SOURCE

**Imported:** 2026-09-05, by T8, with Masud's explicit authorisation to cross Rule 1.
**This folder is normally T1's.** See `WORKLOG.md` 2026-09-05 (T8) for why the exception
was made: T1 never performed the import, and T8 cannot write About or Contact without it.

---

## Provenance — verified, not assumed

| | |
|---|---|
| **Source** | Google Doc `videoeditor_agency_website_copy` |
| **Canonical fileId** | `1bIBHxFxX3etBRfQUKedSuoKrKs8RaxeqG-Gxf00RhBI` |
| **Owner** | `sub.mangomedia@gmail.com` — My Drive root |
| **Created** | 2026-05-17 · **Modified** 2026-05-17 |
| **Doc's own byline** | *"Prepared by Mango Media Digital · May 2026 · Uttara, Dhaka, Bangladesh"* |
| **Fetched** | 2026-09-05, via the Drive connector. **Not truncated** — ends on the complete final FAQ answer |

### The three-copies problem is CLOSED

`instructions.md` §4 problem 1 required this to be *"verified by diff, not assumed."*
It was. All three copies were fetched in full, written to separate files, and compared
with `diff` and `md5sum`.

| Pair | Result |
|---|---|
| `1bIBHx…` (root, sub.mangomedia) **vs** `1hKAvq…` (subfolder, sub.mangomedia) | **Byte-identical.** Same MD5 |
| Either of those **vs** `1GOq6s…` (shared, videoeditoragency.hello) | **Three whitespace-only lines. No textual difference at all** |

`diff -w -B` between the shared copy and the other two returns nothing. Despite its later
modified date of 2026-07-14, the `videoeditoragency.hello@gmail.com` copy contains **no
content edits** — two blank lines removed near the title, one added in the pricing
section. Consistent with a save-without-edit.

Prices, the email address, every statistic, and PAGE 2 (About) and PAGE 13 (Contact) are
**identical across all three**. No copy is newer in substance than any other.

**Consequence:** the two non-canonical copies can be ignored. Nothing is lost by working
from this file alone, and the `videoeditoragency.hello@gmail.com` access risk flagged in
`instructions.md` §4 no longer threatens this document — it is now in the project folder.

---

## ⚠️ READ THIS BEFORE USING ANY LINE BELOW

**The body of this file is the source document, reproduced faithfully.** Only Google Docs
export escaping was cleaned (`\[Year\]` → `[Year]`, `\*\*` → `**`, `Q\&A` → `Q&A`). **No
word was changed, added, or removed.** Nothing below this line is annotation.

**Much of it is dead.** It was written in May 2026, before every ruling in
`02-Decisions\RULINGS.md`. A thread that copies from it without checking the register will
ship things Masud has already killed.

### Killed by a ruling — do not use

| In this document | Killed by |
|---|---|
| **Stats: `500k+ minutes`, `1,200+ projects`, `300+ happy clients`, `5+ years`** (Homepage §3, About, CTA banner) | **R05** — the site uses **100+ clients** and **10,000+ videos edited**. Every figure in this document is dead |
| **Monthly Retainer tiers · Per Bundle packs · every `$XXX`** (Homepage §8) | **R04** — the site publishes per-unit rates. There are no tiers |
| **Revision caps: Starter "3 revisions", Starter Pack "2 revisions"** (Homepage §8) | **R17** — genuinely unlimited. Every cap is deleted |
| **`Blog` in the footer link list** (Homepage §14) | **R10** — blog dropped, out of the nav, 301 to `/` |
| **Turnaround claims: "24–72 hours" (Homepage §7), "3–5 business days" / "24-hour" (FAQ Q2)** | **R18** — asked twice, declined twice. **No speed claim ships on any page** |
| **`[Populate with 6–8 real client testimonials]` and the seven `[Add 1–2 real testimonials]` blocks** | **R08 CONDITIONAL** — no consented testimonial exists yet. The section is deleted, not filled |
| **"Populate with real client logos or platform logos: YouTube, Meta, Shopify, TikTok, Spotify, LinkedIn"** (Homepage §2) | **R06 OPEN** — and `SITE-MAP-v1.md` §5 Q2 is explicit that platform logos under "Trusted by" do not ship |

### Still unanswered — leave as a bracket

| In this document | Open ruling |
|---|---|
| **`Since [Year]`** (About) | **R12** — founding year. Blank in every research document |
| **`4.9 on Google — Based on real client reviews`** (Homepage §7) | **R09** — no Google Business profile identified. If none exists the widget is deleted, not adjusted |
| **`[Your WhatsApp Number]` / `WhatsApp: [number]`** (Homepage §12, §14, Contact) | **R14 is RULED — `+880 1336433711`.** ⚠️ Still undialled. RULINGS R14 asks for one verification call before launch |
| **`hello@videoeditor.agency`** (Homepage §12, §14, Contact — 3 occurrences) | **R15 OPEN.** Consistent across the research but **never verified as a live mailbox** |
| **The contact form, and the Budget Range dropdown** (Homepage §12, Contact) | **R13 OPEN** — no form backend exists. Until one does, the page ships `tel:` / `wa.me` / `mailto:` only |

### Breaks a binding rule in `instructions.md` §5

These are instructions to a developer, written for a JavaScript site. **They are banned here.**

- **"CLIENT LOGO SLIDER"** (Homepage §2) — JS slider, banned
- **"Counter Value / Counter Label"** table (Homepage §3) — animated counters with no static
  fallback are banned outright. This is the exact failure live on the site today, which
  renders `0 +` and `0 K`
- **"FILTER TABS"** (Homepage §6, Portfolio) — JS tab filters, banned. `SITE-MAP-v1.md` §3
  replaces them with anchor-linked sections
- **"click opens YouTube/Vimeo lightbox"** (Homepage §6, Portfolio) — JS lightbox, banned.
  `THREAD-PLAN.md` §6 pattern B (`<details>`) replaces it
- **"Use lazy loading with a Load More button — no pagination"** (Portfolio) — JS Load More,
  banned. Real paginated URLs or one long page instead
- **"Play icon overlay on hover"** (Homepage §6, Portfolio) — hover-only affordance, fails
  on touch and for keyboard users

### Scope mismatches a build thread will hit

1. **This document has SEVEN "For Clients" pages.** Businesses, Professionals, YouTubers,
   Coaches, Marketing Agencies, Ecommerce Brands, SaaS. `SITE-MAP-v1.md` §1 ships **four**.
   Professionals, Ecommerce and SaaS have finished copy here and **no page to go on**.
   Recorded, not resolved — that is T7's and Masud's call, not T8's.
2. **PAGE 11 is a full Industries page** with 30 written industry blurbs. It is **not in
   the 10-page scope** and has no owner in `THREAD-PLAN.md` §4. Under `SITE-MAP-v1.md` §3
   the taxonomy becomes filters on `/portfolio/`, which means this copy currently has
   nowhere to live.
3. **The service count contradiction (R23) is visible inside this one document.** Homepage
   §4 shows **6** cards + 4 in a secondary line. PAGE 3 lists **11**. The footer lists
   **7**. Three counts, one file. R23 is OPEN and T6 is blocked on it.
4. **The homepage section numbering skips 13.** It runs §1–§12, then jumps to
   **§14 — FOOTER**. There is no §13. `SITE-MAP-v1.md` §4.1 lists 12 homepage sections and
   omits §12 CONTACT entirely, numbering the footer as 12. **Sources disagree:**
   `SITE-MAP-v1.md` §4.1 versus PAGE 1 of this document. Named, not silently fixed.

### What is clean and usable

The **About page body copy** (PAGE 2), the **four values**, the **five process steps**, the
**eight FAQ answers** apart from Q2's turnaround claim, the **Contact page intro and its
three-question FAQ**, and the **per-segment pain points and deliverables** on the seven
audience pages. That last one matters: `THREAD-PLAN.md` §5 warns T7 against pasting one
page four times, and this document is the evidence that it does not have to.

**No competitor copy is present in this document.** The becreatives.co contamination
`SITE-MAP-v1.md` §6 warns about is in `VE CONTENT`, not here. The foreign template copy —
web hosting, job board, construction, landscaping, "Anne Doe" — is in `VEA all page content
plan` and on the live site, **not here**. This document is clean of both. It was checked.

---
---

# SOURCE DOCUMENT BEGINS

**videoeditor.agency**

Website Copy Document

Prepared by Mango Media Digital

May 2026 | Uttara, Dhaka, Bangladesh

CONTAINS: Homepage | About | Services | For Clients (7 pages) | Industries | Portfolio | Contact

---

# PAGE 1: HOMEPAGE

## SECTION 1 — HERO

**— PRE-HEADLINE LABEL**

Professional Video Editing Agency

**— H1 — MAIN HEADLINE**

**We Edit Videos That Grow Your Brand**

**— SUB-HEADLINE**

Dedicated editors. Fast delivery. Unlimited revisions. Built for creators, businesses, and agencies who need content that converts.

**— PRIMARY CTA BUTTON**

Get Started

**— SECONDARY CTA BUTTON**

Watch Showreel

**— FLOATING BADGE (HERO VISUAL)**

500k+ Minutes Edited

**— EDITOR INTRO CARD (BOTTOM-LEFT OF HERO VISUAL)**

Your Dedicated Editor | videoeditor.agency Team

**— BELOW HERO — SHOWREEL EMBED LABEL**

Our Editing Showreel 2025

**CTA: Watch now**

## SECTION 2 — CLIENT LOGO SLIDER

**— SLIDER LABEL TEXT**

Trusted by creators and brands worldwide

**— NOTE FOR DEVELOPER**

Populate with real client logos or platform logos: YouTube, Meta, Shopify, TikTok, Spotify, LinkedIn, etc.

## SECTION 3 — STATS / NUMBERS

**— SECTION SUB-LABEL**

Our Impact in Numbers

| Counter Value | Counter Label |
| :-: | :-: |
| 500k+ | Minutes of Video Edited |
| 1,200+ | Projects Completed |
| 300+ | Happy Clients |
| 5+ | Years of Experience |

**— NOTE**

Adjust all numbers to match your real figures before publishing. These are trust signals — do not inflate.

## SECTION 4 — SERVICES

**— SECTION PRE-LABEL**

Our Services

**— H2 — SECTION HEADING**

## **Expert Editing for Every Format**

**— SECTION SUBTEXT**

From long-form documentaries to 60-second viral reels — we handle the edit so you can focus on creating.

**01 — Long-Form Video Editing**

Perfect for documentaries, brand films, and in-depth YouTube content. We cut, color, and craft your footage into a compelling narrative.

**02 — Short-Form Reels & TikToks**

Stop-the-scroll edits with dynamic pacing, trending sounds, and captions. Optimized for Instagram, TikTok, and YouTube Shorts.

**03 — YouTube Video Editing**

Channel-consistent editing that keeps subscribers watching. Custom intros, lower thirds, b-roll integration, and end screens included.

**04 — Motion Graphics & Animation**

Text animations, logo reveals, explainer sequences, and kinetic typography. We add the visual layer that makes your content unforgettable.

**05 — Podcast Video Editing**

Multi-cam podcast editing with speaker switching, branded lower thirds, chapter markers, and short-form clips extracted for social.

**06 — Ads & Marketing Videos**

High-converting ad edits for Meta, Google, and YouTube. Punchy hooks, clear CTAs, and A/B-ready cuts delivered fast.

**— SECONDARY SERVICES LINE (BELOW CARDS)**

\+ Thumbnail Design | Event Video | Promotional Video | Video Recording

**CTA: Explore All Services**

## SECTION 5 — PROCESS

**— SECTION PRE-LABEL**

How It Works

**— H2 — SECTION HEADING**

## **From Raw Footage to Final Cut — In 5 Simple Steps**

**Step 01 — Submit Brief**

Share your raw footage, reference videos, style guide, and deadline. The more detail you give, the better the first draft.

**Step 02 — Assign Editor**

We match you with a dedicated editor who specializes in your content type — YouTube, reels, ads, or long-form.

**Step 03 — First Draft**

Your editor delivers the first cut within the agreed timeline. You'll receive a preview link for review.

**Step 04 — Revisions**

Request changes and we'll refine until it's exactly right. Unlimited revisions — no extra charge, no arguments.

**Step 05 — Final Delivery**

Download your finished video in broadcast-ready format. Ready to upload, publish, or broadcast.

## SECTION 6 — PORTFOLIO

**— SECTION PRE-LABEL**

Our Portfolio

**— H2 — SECTION HEADING**

## **Work That Speaks for Itself**

**— SUBTEXT**

Browse our recent projects across long-form, reels, YouTube, motion graphics, and more.

**— FILTER TABS**

All | Long-Form | Short-Form / Reels | YouTube | Motion Graphics | Ads

**— PORTFOLIO CARD STRUCTURE (PER ITEM)**

  - Thumbnail image (16:9 for long-form, 9:16 for reels)
  - Title: e.g. "YouTube Channel Edit — Fitness Brand"
  - Category badge: e.g. "Long-Form"
  - Play icon overlay on hover — click opens YouTube/Vimeo lightbox

**— NOTE FOR DEVELOPER**

Show maximum 8 items on homepage. Load More button leads to full Portfolio page.

**CTA: View Full Portfolio**

## SECTION 7 — WHY CHOOSE US

**— SECTION PRE-LABEL**

Why Choose Us

**— H2 — SECTION HEADING**

## **More Than an Editor — A Creative Partner You Can Rely On**

**Faster Turnaround**

Most edits delivered within 24–72 hours. Tight deadlines? We've got you.

**Dedicated Editor**

One consistent editor who learns your brand voice, style, and audience — so every video feels like yours.

**Dedicated Project Manager**

A single point of contact who keeps every project on track. No chasing. No confusion.

**Fast Communication**

We respond within 2 business hours. Because slow agencies cost you opportunities.

**Unlimited Revisions**

We're done when you're 100% satisfied. No revision caps. No extra fees. Ever.

**Affordable Monthly Retainer**

Predictable pricing that scales with your content needs. No surprise invoices.

**— RATING WIDGET TEXT**

4.9 on Google — Based on real client reviews

## SECTION 8 — PRICING

**— SECTION PRE-LABEL**

Pricing Plans

**— H2 — SECTION HEADING**

## **Transparent Pricing for Every Stage of Growth**

**— SUBTEXT**

Choose the plan that fits your workflow — monthly retainer, per bundle, or flat rate. All plans include a dedicated editor and unlimited revisions.

### **TAB 1 — Monthly Retainer**

| Plan | Included |
| :-: | :-: |
| Starter — $XXX/month | 4 long-form videos (up to 10 min) \| Dedicated editor \| 3 revisions per video \| 5-day delivery \| Project manager |
| Growth — $XXX/month (RECOMMENDED) | 8 videos (long-form or mixed) \| Dedicated editor \| Unlimited revisions \| 3-day delivery \| Priority support |
| Pro — $XXX/month | 15+ videos/month (mixed formats) \| Senior dedicated editor \| Unlimited revisions \| 24-hour turnaround \| Project manager \| White-label available |

### **TAB 2 — Per Bundle**

| Package | Included |
| :-: | :-: |
| Starter Pack — $XXX | 3 videos (up to 10 min each) \| 2 revisions per video \| 5-day delivery |
| Standard Pack — $XXX | 6 videos (mixed formats) \| Unlimited revisions \| 3-day delivery |
| Premium Pack — $XXX | 10 videos (mixed formats) \| Unlimited revisions \| 48-hour priority delivery \| Dedicated project manager |

### **TAB 3 — Flat Rate**

| Service | Rate |
| :-: | :-: |
| Long-Form Video Editing | $15 per minute of final output |
| Short-Form Reel | $25 per video |
| Motion Graphics | $15 per minute of animation |
| Thumbnail Design | $XX per thumbnail |

**— CUSTOM PLAN CTA (BELOW ALL TABS)**

Running a team or agency and need a custom volume deal? Let's talk.

**CTA: Book a Call**

## SECTION 9 — TESTIMONIALS

**— SECTION PRE-LABEL**

Client Testimonials

**— H2 — SECTION HEADING**

## **Success Stories from Our Clients**

**— SUBTEXT**

Real words from real clients — creators, brands, and agencies who trust us with their content.

**— TESTIMONIAL CARD STRUCTURE**

  - Star rating (5 stars)
  - Quote text (2–3 sentences)
  - Client photo (circular)
  - Client name (bold)
  - Role + platform/niche tag (e.g. "YouTube Creator | Fitness")

**— NOTE**

[Populate with 6–8 real client testimonials. Include name, photo, role, and industry tag for maximum credibility.]

## SECTION 10 — FAQ

**— SECTION PRE-LABEL**

FAQ

**— H2 — SECTION HEADING**

## **Answers to Your Most Common Questions**

**Q1: What video editing services do you offer?**

We offer a full range of post-production services including long-form video editing, short-form reels, YouTube editing, podcast editing, motion graphics, ads and marketing videos, event videos, promotional videos, and thumbnail design. Whether you need a 2-minute reel or a 60-minute documentary, we've got you covered.

**Q2: How fast do you deliver edited videos?**

Delivery time depends on your plan. On our Growth and Pro retainer plans, standard videos are delivered within 3–5 business days. Rush 24-hour delivery is available on Pro. For flat-rate projects, we agree on a deadline upfront.

**Q3: What does "unlimited revisions" really mean?**

It means exactly what it says. There is no cap on the number of revision rounds. We keep revising until you're completely satisfied with the final output — with zero extra charges.

**Q4: What format do I need to submit my raw footage?**

We accept all major formats — MP4, MOV, MXF, R3D, and more. You can share via Google Drive, Dropbox, WeTransfer, or Frame.io. We'll provide a shared project folder after onboarding.

**Q5: Can I keep the same editor across all my projects?**

Yes. Every client is assigned a dedicated editor who stays with you throughout your subscription or project. Your editor learns your brand style so quality improves with every video.

**Q6: Which pricing model is right for me?**

If you publish content consistently (4+ videos/month), the Monthly Retainer is most cost-effective. If you have an upcoming campaign or batch of videos, Per Bundle works best. For one-off projects with no fixed timeline, Flat Rate is the simplest option.

**Q7: Do you work with international clients?**

Absolutely. Our team works with clients across the US, UK, Canada, Australia, and beyond. All communication, file sharing, and project management is handled remotely with zero disruption.

**Q8: What software do your editors use?**

Our editors work with Adobe Premiere Pro, After Effects, DaVinci Resolve, and CapCut Pro — depending on the project type and your preferences.

## SECTION 11 — CTA BANNER

**— H2 — BANNER HEADLINE**

## **Ready to Stop Wasting Hours on Editing?**

**— BANNER SUBTEXT**

Join 300+ creators and businesses who trust videoeditor.agency with their content.

**CTA: Get Started Today**

## SECTION 12 — CONTACT

**— SECTION PRE-LABEL**

Get in Touch

**— H2 — SECTION HEADING**

## **Let's Talk About Your Next Video Project**

**— SUBTEXT**

Send us a message, WhatsApp us directly, or book a free 15-minute discovery call. We typically respond within 2 hours.

**— CONTACT INFO BLOCK**

**Email:** hello@videoeditor.agency

**WhatsApp:** [Your WhatsApp Number]

**Working Hours:** Monday–Saturday, 9:00 AM – 7:00 PM (GMT+6)

**Response Time:** Within 2 business hours

**— CONTACT FORM FIELDS**

  - Full Name
  - Email Address
  - Service Needed (dropdown)
  - Message
  - Submit Button: "Send Message"

## SECTION 14 — FOOTER

*(There is no SECTION 13 in the source document. The numbering jumps from 12 to 14.)*

**— BRAND TAGLINE (COL 1)**

Professional video editing for creators, brands, and agencies worldwide.

**— SOCIAL ICONS (COL 1)**

YouTube | Facebook | Instagram | LinkedIn

**— FOOTER LINKS — PAGES (COL 2)**

Home | About | Services | Portfolio | Pricing | Blog | Contact

**— FOOTER LINKS — SERVICES (COL 3)**

Long-Form Editing | Short-Form Reels | YouTube Editing | Podcast Editing | Motion Graphics | Ads Video | Thumbnail Design

**— CONTACT INFO (COL 4)**

hello@videoeditor.agency | WhatsApp: [number] | Mon–Sat, 9:00 AM – 7:00 PM

**— COPYRIGHT BAR**

videoeditor.agency © 2026. All Rights Reserved. | Terms & Conditions | Privacy Policy

---

# PAGE 2: ABOUT US

**— PAGE HERO BANNER**

**Title:** About videoeditor.agency

**Breadcrumb:** Home / About

**— SHOWREEL EMBED LABEL**

Watch What We Do

## ABOUT INTRO SECTION

**— SECTION PRE-LABEL**

About Us

**— H2 — SECTION HEADING**

## **We Turn Raw Footage Into Content That Actually Performs**

**— BODY COPY**

Since [Year], videoeditor.agency has been the editing backbone for YouTubers, businesses, coaches, and agencies across the globe. We're not a freelancer marketplace or a gig platform — we're a dedicated editing team that operates like an in-house department, at a fraction of the cost.

Every client gets a dedicated editor and a project manager. Your editor learns your style. Your manager keeps things on track. You focus on creating — we handle the rest.

**— STATS (SAME AS HOMEPAGE)**

500k+ Minutes Edited | 1,200+ Projects Completed | 300+ Happy Clients | 5+ Years Experience

## OUR VALUES

**— H2**

## **What We Stand For**

**Creative Excellence**

We don't just cut — we craft. Every edit is shaped by narrative thinking, pacing instinct, and visual judgment that elevates your content.

**Speed Without Compromise**

Fast delivery doesn't mean rushed work. We've built systems and a dedicated team structure that allows us to deliver both.

**Dedicated Accountability**

One editor. One manager. One point of contact. Total clarity on every project, every time.

**Client-First Revision Policy**

Unlimited revisions, no arguments, no extra fees. Your satisfaction is the only benchmark that matters.

## CTA STRIP

**— HEADLINE**

Ready to work with a team that treats your content like their own?

**CTA: Contact Us**

---

# PAGE 3: SERVICES PAGE

**— PAGE HERO BANNER**

**Title:** Our Services

**Breadcrumb:** Home / Services

## SERVICES INTRO

**— SECTION PRE-LABEL**

What We Do

**— H2 — SECTION HEADING**

## **Full-Service Video Editing for Every Format and Platform**

**— SUBTEXT**

From a 60-second reel to a 2-hour documentary — we edit with purpose, consistency, and speed.

**01 — Long-Form Video Editing**

For documentaries, brand films, corporate videos, and deep-dive YouTube content. We handle cutting, color grading, audio sync, transitions, b-roll, and storytelling structure. Delivered in broadcast-ready resolution.

**02 — Short-Form Reels & TikToks**

Thumb-stopping short edits for Instagram Reels, TikTok, and YouTube Shorts. We apply dynamic pacing, trending audio, on-screen text, and platform-specific formatting. Built to go viral and drive followers.

**03 — YouTube Video Editing**

Channel-consistent editing that retains subscribers and grows watch time. Includes custom intros/outros, lower thirds, b-roll integration, chapter markers, and end screen placement. We keep your channel looking professional every week.

**04 — Podcast Video Editing**

Multi-cam podcast editing with speaker switching, branded lower thirds, chapter markers, auto-captions, and short-form clip extraction for social distribution. Your podcast becomes a multi-platform content engine.

**05 — Motion Graphics & Animation**

Custom text animations, logo reveals, kinetic typography, explainer sequences, and visual overlays. We add the motion design layer that separates amateur content from professional-grade media.

**06 — Marketing Video Editing**

Scroll-stopping marketing edits for social campaigns, product launches, and brand awareness. We structure your footage around a clear message and a call to action that drives real results.

**07 — Ads Video Editing**

High-converting ad edits for Meta (Facebook/Instagram), Google Display, and YouTube pre-roll. Includes multiple cut variations for A/B testing. Hook-first structure, tight pacing, and a clear CTA — every time.

**08 — Event Video Editing**

Highlights, full-length event recaps, and multi-cam live event edits. We turn raw event footage into polished content that captures energy and extends the life of your event beyond the day itself.

**09 — Promotional Video Editing**

Product promos, service launches, seasonal campaigns, and announcement videos. Fast-paced, visually engaging, and built to generate action from your audience.

**10 — Video Recording (Production)**

Need footage? We offer in-person and remote-assisted video recording for clients in Dhaka and select locations. Professional equipment, proper framing, and editorial direction included.

**11 — Thumbnail Design**

Click-through-optimized thumbnails for YouTube and other platforms. Bold typography, clear focal point, A/B-ready variations. A great thumbnail starts the edit before the video even plays.

## SERVICES PAGE CTA

Not sure which service fits your project? Let's talk.

**CTA: Contact Us**

---

# PAGE 4: FOR CLIENTS — FOR BUSINESSES

**— PAGE HERO BANNER**

**Title:** Video Editing for Businesses

**Sub-headline:** Consistent, professional video content — without the overhead of an in-house editing team.

## MAIN SECTION

**— H2**

## **Your Business Runs on Content. We Keep It Running.**

**— BODY — PARAGRAPH 1**

In today's digital landscape, video is the most powerful tool your business has. But producing consistent, high-quality video content in-house is expensive, time-consuming, and operationally complex. videoeditor.agency gives you a dedicated editing team — without the hiring, management, or salary overhead.

**— BODY — PARAGRAPH 2**

Whether you need weekly social media videos, a brand film, or a full product launch campaign, we deliver professional edits on time, on brand, and on budget.

## PAIN POINTS WE SOLVE

  - Inconsistent editing quality across different freelancers
  - Missed content schedules due to slow turnaround
  - Expensive in-house video editor salaries and overhead
  - No dedicated point of contact to manage revisions and feedback

## WHAT WE DELIVER

  - Corporate explainer and brand videos
  - Marketing and promotional video campaigns
  - Social media content (reels, shorts, LinkedIn videos)
  - Internal training and onboarding videos
  - Product launch videos
  - Event highlights and corporate recaps

**— RECOMMENDED PRICING PLAN**

Monthly Retainer (for consistent content output) or Per Bundle (for campaign-based production)

## TESTIMONIAL PLACEHOLDER

[Add 1–2 real testimonials from this client type here]

**CTA: Start Editing for Your Business**

---

# PAGE 5: FOR CLIENTS — FOR PROFESSIONALS

**— PAGE HERO BANNER**

**Title:** Video Editing for Professionals

**Sub-headline:** Build your personal brand with polished video content — without spending hours in the edit room.

## MAIN SECTION

**— H2**

## **Your Expertise Deserves to Be Seen. We'll Make Sure of It.**

**— BODY — PARAGRAPH 1**

Whether you're a consultant, speaker, doctor, lawyer, financial advisor, or corporate executive, your video presence directly impacts your credibility and authority. But editing takes hours you simply don't have.

**— BODY — PARAGRAPH 2**

We handle your entire post-production workflow — so your content goes out consistently, professionally, and on brand. You stay visible. You stay credible. You stay focused on your work.

## PAIN POINTS WE SOLVE

  - Raw footage sitting unedited for weeks after filming
  - Inconsistent quality when using different freelancers
  - No time to learn editing software or manage revisions
  - Content schedule constantly slipping due to editing bottlenecks

## WHAT WE DELIVER

  - LinkedIn video editing for thought leadership
  - Speaking and workshop highlight reels
  - Interview and Q&A video editing
  - Webinar and online session editing
  - Personal brand sizzle reel creation
  - Short-form content clips from long-form sessions

**— RECOMMENDED PRICING PLAN**

Per Bundle or Flat Rate (depending on volume)

## TESTIMONIAL PLACEHOLDER

[Add 1–2 real testimonials from this client type here]

**CTA: Build Your Brand with Professional Video**

---

# PAGE 6: FOR CLIENTS — FOR YOUTUBERS

**— PAGE HERO BANNER**

**Title:** Video Editing for YouTubers

**Sub-headline:** Grow your channel faster with consistent, professional editing — so you can focus on filming, not cutting.

## MAIN SECTION

**— H2**

## **Less Time Editing. More Time Creating. Faster Channel Growth.**

**— BODY — PARAGRAPH 1**

YouTube success depends on two things: consistency and quality. Most creators hit a wall when they try to do both themselves. Editing a single video can take 8–15 hours — time you could spend filming, strategizing, or simply living your life.

**— BODY — PARAGRAPH 2**

videoeditor.agency is your dedicated YouTube editing partner. One editor who learns your channel aesthetic, your audience, and your style. You film. We edit. Your channel grows.

## PAIN POINTS WE SOLVE

  - Spending 8–15 hours editing every single video
  - Sacrificing upload consistency because editing takes too long
  - Inconsistent channel style when using different editors or freelancers
  - Creative burnout from trying to film, edit, and manage a channel simultaneously

## WHAT WE DELIVER

  - Long-form YouTube video editing (any length)
  - Channel-consistent style: custom intro, outro, lower thirds, b-roll
  - End screen and card placement for maximum engagement
  - YouTube chapter markers for improved retention
  - Short-form clips extracted from long-form content for Shorts
  - Thumbnail design

**— RECOMMENDED PRICING PLAN**

Monthly Retainer — our most popular plan for YouTubers

## TESTIMONIAL PLACEHOLDER

[Add 1–2 real testimonials from this client type here]

**CTA: Scale Your YouTube Channel**

---

# PAGE 7: FOR CLIENTS — FOR COACHES

**— PAGE HERO BANNER**

**Title:** Video Editing for Coaches

**Sub-headline:** Turn your expertise into polished content that attracts clients, builds authority, and sells your programs.

## MAIN SECTION

**— H2**

## **Your Content Should Work as Hard as You Do.**

**— BODY — PARAGRAPH 1**

Coaches who publish consistent, high-quality video content attract more clients, command higher rates, and build lasting authority in their niche. But creating content at scale while running a coaching business is a full-time job in itself.

**— BODY — PARAGRAPH 2**

We handle your entire editing workflow — so your content machine keeps running while you focus on what you do best: coaching people to change their lives.

## PAIN POINTS WE SOLVE

  - Hours lost every week editing when you should be coaching
  - Online courses not getting launched because editing feels overwhelming
  - Social media presence inconsistent due to content production bottlenecks
  - Low-quality video hurting your perceived authority and conversion rates

## WHAT WE DELIVER

  - Online course video editing (chapter-by-chapter, structured and polished)
  - Coaching session highlight reels
  - Short-form social clips extracted from long coaching content
  - Webinar and masterclass editing
  - YouTube content for organic lead generation
  - Podcast video editing for multi-platform distribution

**— RECOMMENDED PRICING PLAN**

Monthly Retainer or Per Bundle

## TESTIMONIAL PLACEHOLDER

[Add 1–2 real testimonials from this client type here]

**CTA: Grow Your Coaching Business with Video**

---

# PAGE 8: FOR CLIENTS — FOR MARKETING AGENCIES

**— PAGE HERO BANNER**

**Title:** Video Editing for Marketing Agencies

**Sub-headline:** Scale your video output without scaling your team. White-label editing for agencies that want to deliver more.

## MAIN SECTION

**— H2**

## **Your Agency's Unfair Advantage in Video Production.**

**— BODY — PARAGRAPH 1**

When your agency takes on video projects, the bottleneck is almost always post-production. Hiring in-house editors is expensive. Managing multiple freelancers is chaotic. Clients expect quality and speed that internal teams struggle to deliver at volume.

**— BODY — PARAGRAPH 2**

videoeditor.agency acts as your silent production partner — delivering professional edits under your brand, on your timeline, at a volume that scales with your client roster. White-label available on Pro plan.

## PAIN POINTS WE SOLVE

  - Video projects creating bottlenecks across the whole agency
  - Inconsistent editor quality across different client projects
  - Expensive in-house editing departments that are hard to scale up or down
  - Difficult to handle editing demand spikes during campaign peaks

## WHAT WE DELIVER

  - Ad creative video editing (Meta, Google, YouTube)
  - Client social media content editing at volume
  - Corporate and brand video editing
  - Campaign video packages across multiple formats
  - Multi-platform format optimization (16:9, 9:16, 1:1)
  - White-label delivery under your agency's brand name

**— RECOMMENDED PRICING PLAN**

Pro Monthly Retainer (white-label available)

## TESTIMONIAL PLACEHOLDER

[Add 1–2 real testimonials from this client type here]

**CTA: Become a Partner Agency**

---

# PAGE 9: FOR CLIENTS — FOR ECOMMERCE BRANDS

**— PAGE HERO BANNER**

**Title:** Video Editing for Ecommerce Brands

**Sub-headline:** Product videos, ads, and UGC content that convert browsers into buyers.

## MAIN SECTION

**— H2**

## **Video Is Your Highest-Converting Sales Tool. Use It Right.**

**— BODY — PARAGRAPH 1**

Ecommerce brands that invest in quality video content see measurably higher conversion rates, lower return rates, and stronger brand loyalty. From product demos to UGC ad creatives, your video content is often the last thing a customer sees before deciding to buy.

**— BODY — PARAGRAPH 2**

We edit your ecommerce video content to drive clicks, reduce drop-offs, and close more sales — consistently and at scale.

## PAIN POINTS WE SOLVE

  - UGC content arriving raw and unusable without professional editing
  - Product videos looking low-budget compared to competitors
  - No consistent editing style across the product catalog
  - Ad creatives not being tested properly due to slow editing turnaround

## WHAT WE DELIVER

  - Product demo and explainer videos
  - UGC ad editing (hook-optimized, CTA-driven)
  - Meta and TikTok ad creatives with multiple cut variations
  - Unboxing and product showcase video editing
  - Promotional and seasonal campaign videos
  - Short-form social content for Instagram, TikTok, and YouTube Shorts

**— RECOMMENDED PRICING PLAN**

Per Bundle (for campaign-based production) or Monthly Retainer (for ongoing content)

## TESTIMONIAL PLACEHOLDER

[Add 1–2 real testimonials from this client type here]

**CTA: Turn Your Products Into Revenue-Generating Videos**

---

# PAGE 10: FOR CLIENTS — FOR SAAS

**— PAGE HERO BANNER**

**Title:** Video Editing for SaaS Companies

**Sub-headline:** Product walkthroughs, demo videos, and content marketing — edited with precision and speed.

## MAIN SECTION

**— H2**

## **Your Software Is Powerful. Your Videos Should Be Too.**

**— BODY — PARAGRAPH 1**

SaaS companies live and die by user education, trust, and onboarding. Video is the most effective medium for all three. A poorly edited product demo loses leads. A weak onboarding video increases churn. Generic content marketing fails to build the authority that converts.

**— BODY — PARAGRAPH 2**

videoeditor.agency delivers the editing quality and consistency your brand demands — at the velocity your growth requires.

## PAIN POINTS WE SOLVE

  - Product demos that are too long, slow, or poorly paced
  - Onboarding video series that don't reduce churn or support tickets
  - YouTube content strategy stalled by editing bottlenecks
  - Marketing videos that don't match the quality standard of the product

## WHAT WE DELIVER

  - SaaS product demo video editing
  - Onboarding and tutorial video series
  - Explainer video editing with motion graphics integration
  - YouTube content editing for inbound marketing
  - Webinar and case study video editing
  - Ad creative editing for user acquisition campaigns

**— RECOMMENDED PRICING PLAN**

Monthly Retainer

## TESTIMONIAL PLACEHOLDER

[Add 1–2 real testimonials from this client type here]

**CTA: Scale Your SaaS Video Content Strategy**

---

# PAGE 11: INDUSTRIES PAGE

**— PAGE HERO BANNER**

**Title:** We Edit for 30+ Industries

**Sub-headline:** Every industry has its own storytelling language. Our editors know yours.

## INDUSTRIES INTRO

**— H2**

## **Industry-Specific Video Editing Expertise**

**— BODY**

Generic editing doesn't cut it when your audience has specific expectations. Our editors are matched to your industry — they understand the pacing, aesthetics, terminology, and content formats that work in your niche.

**Automotive / Vehicle**

From test drive walkthroughs to showroom campaigns — we edit automotive content that generates leads and builds desire.

**Beauty / Aesthetic / Skincare**

Tutorial edits, before/after reveals, and brand storytelling that converts viewers into customers for beauty and skincare brands.

**Cosmetics**

Glamorous product videos, influencer UGC editing, and campaign content that puts your cosmetics brand at the front of the feed.

**Corporate**

Professional, polished corporate video editing for internal communications, brand films, executive presentations, and company culture content.

**Creative Agency**

We understand what creative agencies expect — and we deliver it without the briefing friction. White-label available.

**Doctors and Medical**

Patient education videos, clinic promotional content, and professional talking-head edits that build trust and credibility.

**E-commerce**

Product demos, unboxing edits, and high-converting ad creatives for ecommerce brands selling across any platform.

**Education**

Online course editing, lecture series, explainer videos, and educational content that retains students and drives enrollment.

**Event**

Highlights, full recaps, and multi-cam event edits that capture the energy and extend the life of your event.

**Fashion & Lifestyle**

High-fashion lookbooks, behind-the-scenes edits, and influencer content with the aesthetic your audience expects.

**Finance & Investment**

Trust-building explainer videos, financial education content, and promotional videos that make complex topics approachable.

**Fitness & Wellness**

Workout videos, transformation stories, coaching content, and supplement brand ads — edited with the energy your audience craves.

**Influencers / UGC**

Polished content for influencers and UGC creators, edited to platform specifications and delivered fast enough to stay relevant.

**Instagram Reels Creators**

Hook-first, fast-paced, and trend-aware Reels editing that maximizes reach and engagement on Instagram.

**Religious**

Sermon editing, religious event highlights, and outreach content delivered with care and cultural sensitivity.

**Kids Educational**

Bright, engaging, and age-appropriate educational video editing that keeps young viewers watching and learning.

**Legal and Lawyer**

Authority-building content, consultation video highlights, and educational content that positions your legal practice as the trusted expert.

**Marketing Agency**

We act as your silent editing department — delivering professional results on your timeline, under your brand.

**Online Courses**

End-to-end course video editing — chapter by chapter, consistent quality, structured for completion rates.

**Personal Brand / Coach**

From YouTube to Instagram, we build the visual identity of your personal brand through consistent, professional editing.

**Podcast**

Multi-cam podcast editing with speaker switching, branded elements, auto-captions, and short-form clip extraction.

**Political**

Campaign video editing, rally highlights, and political communication content that resonates and mobilizes.

**Real Estate**

Property tour editing, agent introduction videos, and market update content that attracts buyers and sellers.

**Restaurant & Food**

Menu highlight videos, chef behind-the-scenes content, and food promotion edits that make viewers hungry.

**SaaS / Technology**

Product demos, onboarding series, and inbound marketing content for SaaS and tech companies.

**Social Impact / NGOs**

Mission-driven storytelling, fundraising appeal videos, and impact report content for nonprofits and social enterprises.

**Startup**

Pitch videos, product launch content, and brand introduction videos for startups making their first impression.

**TikTok Creators**

Fast, trendy, algorithm-aware TikTok editing that drives follows, shares, and viral reach.

**Travel & Tourism**

Destination highlight videos, travel vlog editing, and tourism promotional content that inspires wanderlust.

**Vloggers / Lifestyle**

Daily vlog editing, lifestyle content, and personal storytelling that keeps your subscribers coming back.

**YouTube Creators**

Channel-consistent editing that builds subscribers, retains watch time, and grows your presence on the world's second-largest search engine.

## INDUSTRIES PAGE CTA

Don't see your industry listed? We likely edit for it.

**CTA: Contact Us**

---

# PAGE 12: PORTFOLIO PAGE

**— PAGE HERO BANNER**

**Title:** Our Portfolio

**Sub-headline:** Browse our work across every format, platform, and industry.

## PORTFOLIO GRID

**— FILTER TABS**

All | Long-Form | Short-Form / Reels | YouTube | Motion Graphics | Ads

**— PORTFOLIO ITEM STRUCTURE (PER CARD)**

  - Thumbnail image (16:9 for long-form, 9:16 for reels)
  - Play icon overlay on hover
  - Click opens YouTube/Vimeo lightbox player
  - Title: e.g. "YouTube Channel Edit — Fitness Brand"
  - Category badge: e.g. "Long-Form"
  - Client type tag: e.g. "YouTuber | USA"

**— NOTE FOR DEVELOPER**

Use lazy loading with a "Load More" button — no pagination. No portfolio detail pages required.

## PORTFOLIO PAGE CTA

Liked what you saw? Let's work on your next video.

**CTA: Get Started**

---

# PAGE 13: CONTACT PAGE

**— PAGE HERO BANNER**

**Title:** Contact Us

**Sub-headline:** Have a project in mind? We're ready to talk.

## CONTACT INTRO

**— H2**

## **Let's Start With a Conversation**

**— BODY**

Whether you're ready to place your first order or just want to understand how our process works — reach out. We typically respond within 2 business hours on business days.

## CONTACT INFO BLOCK (Left Column)

**Email:** hello@videoeditor.agency

**WhatsApp:** [Your WhatsApp Number]

**Working Hours:** Monday–Saturday, 9:00 AM – 7:00 PM (GMT+6)

**Response Time Guarantee:** Within 2 business hours

## CONTACT FORM (Right Column)

  - Full Name
  - Email Address
  - Service Needed (Dropdown: Long-Form / Reels / YouTube / Podcast / Motion Graphics / Ads / Other)
  - Budget Range (Dropdown: Under $500 / $500–$1,000 / $1,000–$2,500 / $2,500+)
  - Message
  - Submit Button: "Send Message"

## FAQ STRIP (Below Form)

**Q: How quickly will you respond?**

Within 2 business hours on weekdays. We also respond on Saturdays.

**Q: Do I need to have everything ready before reaching out?**

Not at all. We can help you plan the project scope, recommend the right service, and suggest a pricing model during a free 15-minute discovery call.

**Q: Do you offer a sample edit before committing?**

Yes — for qualifying clients, we offer a short sample edit so you can evaluate our quality and editor fit before committing to a plan.

# SOURCE DOCUMENT ENDS
