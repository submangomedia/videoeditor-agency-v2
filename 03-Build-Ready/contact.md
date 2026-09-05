# `/contact/` — build-ready copy

**Owner:** T8 · **Written:** 2026-09-05
**Source:** `01-Research-Import\videoeditor_agency_website_copy.md` PAGE 13, resolved
against `02-Decisions\RULINGS.md`.
**Status: NOT SHIPPABLE.** Two blockers, and one number that has to be dialled.

⚠️ **Ownership contradiction, named not resolved.** `THREAD-PLAN.md` §5 (T3) says
*"Build one page from it end to end as a proof — **Contact is the simplest**."*
`THREAD-PLAN.md` §4 gives `site\contact\` to **T8**. Two sections of one document,
opposite instructions. **Sources: THREAD-PLAN §4 (T8 row) vs THREAD-PLAN §5 (T3 brief).**
Whoever owns THREAD-PLAN decides. This file is the copy either way.

---

## This page carries more weight than it looks

**R26b took `videoeditor.agency` dark.** Until cutover there is no website. When it comes
back, and until R13 is answered, the contact details on this page are the **only inbound
route that exists** — no form, no chat, nothing else. `RULINGS.md` §5 flags this as the
urgent one.

**And the phone number has never been dialled.** R14 ruled `+880 1336433711` — VEA's own
line, one digit from Mango's `…710`. The ruling itself records that it was chosen from
the same research set that also contains Lorem ipsum, a job board's FAQ and a landscaping
company's copy. **A wrong number here is wrong in the footer of all ten pages at once.**

---

## What blocks this page

| # | Blocker | Ruling |
|---|---|---|
| 1 | **No form backend.** Cloudflare Worker, Formspree, or no form | **R13 OPEN** |
| 2 | **The email address.** `hello@videoeditor.agency` is consistent across the research and **has never been verified as a live mailbox** | **R15 OPEN** |
| 3 | **T3** — colours, nav, and the shared footer this page's details also feed | **R19 OPEN** |
| — | **Phone: `+880 1336433711`** | **R14 RULED.** ⚠️ Undialled |

**R13 does not have to block launch.** `SITE-MAP-v1.md` §4.10 already states the fallback,
and it is what mangomedia.digital does today: **ship with `tel:`, `wa.me` and `mailto:`
only.** That is a working page, honestly built. A form that posts nowhere is worse than no
form. The copy below assumes no form and notes what changes if R13 lands.

---

## Copy

### Hero

**H1** *(the page's only `<h1>`)*

> Contact Us

**Sub-headline** *(source, unchanged)*

> Have a project in mind? We're ready to talk.

### Intro

**H2**

> Let's Start With a Conversation

**Body** *(source, unchanged)*

> Whether you're ready to place your first order or just want to understand how our
> process works — reach out. We typically respond within 2 business hours on business
> days.

⚠️ **The source contradicts itself on this promise, in the same document.** PAGE 13's
info block says **"Response Time *Guarantee*: Within 2 business hours"**; this paragraph
and the homepage both say **"we *typically* respond within 2 hours."** Typical and
guaranteed are different commitments, and one of them is enforceable.
**Sources: `videoeditor_agency_website_copy` PAGE 13 intro vs PAGE 13 info block vs
PAGE 1 §12.** **Recommendation: keep "typically", drop "Guarantee" everywhere.** It is
the honest version of the same sentence and it is the one that appears twice.

*(Distinct from R18. R18 closed the question of **delivery** turnaround — no speed claim
on any page. This is **reply** time, a different promise, and it is not covered by R18.)*

### Contact details

> **WhatsApp** +880 1336433711 → `https://wa.me/8801336433711`
> **Phone** +880 1336433711 → `tel:+8801336433711`
> **Email** `[[R15 — confirm hello@videoeditor.agency is a live mailbox]]` → `mailto:`
> **Hours** Monday–Saturday, 9:00 AM – 7:00 PM (GMT+6)
> **Where we are** Dhaka, Bangladesh

**On the hours line:** GMT+6 stays. Under **R16** the site states Dhaka plainly, so the
timezone now agrees with the copy instead of quietly contradicting it — which is exactly
what `SITE-MAP-v1.md` §5 Q13 warned about.

**On the address:** under **R28** VEA is a trading name of Mango Media Digital, so the
registered address is Mango's Uttara office.
`[[R28 — FULL REGISTERED ADDRESS: street, area, Dhaka, postcode. Needed for /privacy/
and /terms/ as well as here]]`

⚠️ **The map links out, it does not embed.** `instructions.md` §5: *"link out to Google
Maps rather than embedding it."* An embedded map is a third-party iframe that sets
cookies before consent — the same problem as a YouTube iframe. A plain `<a>` to a Maps
URL costs nothing and avoids it.

### Form — ⚠️ HOLD, R13

**Ships only if R13 gives a backend.** Until then this section does not exist on the page
and the contact details above are the whole answer.

If R13 lands, the source fields are: Full Name · Email Address · Service Needed
(dropdown) · Message · Submit.

**Two things the source gets wrong and must not be copied:**

1. **Drop the Budget Range dropdown** (`Under $500 / $500–$1,000 / $1,000–$2,500 /
   $2,500+`). Under **R04** the site publishes per-unit rates — `$15/min` long-form,
   `$25`/reel, `$15/min` motion graphics. A buyer who can already read the rate and does
   the sum does not need to self-sort into a band, and asking makes a transparent price
   page look like a qualifying gate. It also implies retainer tiers that R04 killed.
2. **A form makes `/privacy/` mandatory, not optional.** The moment this page accepts a
   name and an email from a visitor in the UK or EU there is a lawful-basis and
   data-retention question, and the policy has to exist before the first submission —
   not after. See `privacy.md`.

**Zero-JS requirement:** native `<form method="post">`. No JS validation gate, no
JS-rendered success state. The response must be a real page the browser navigates to.

### FAQ — source, unchanged, as native `<details>`

**Q: How quickly will you respond?**
> Within 2 business hours on weekdays. We also respond on Saturdays.

**Q: Do I need to have everything ready before reaching out?**
> Not at all. We can help you plan the project scope, recommend the right service, and
> suggest a pricing model during a free 15-minute discovery call.

**Q: Do you offer a sample edit before committing?**
> Yes — for qualifying clients, we offer a short sample edit so you can evaluate our
> quality and editor fit before committing to a plan.

⚠️ **Native `<details>`/`<summary>`.** A JS accordion is banned outright by
`instructions.md` §5.

⚠️ **"a free 15-minute discovery call" needs somewhere to go.**
`[[BOOKING: a real Calendly/Cal.com link, or reword to "message us and we'll set one
up"]]` — a CTA that names a call and offers no way to book it is a dead end, and a `#`
href breaks §5 rule 1 outright.

⚠️ **"for qualifying clients" is undefined.** It reads as a hedge a prospect cannot
evaluate. Either state the bar or drop the phrase. Masud's call — it is his copy.

---

## Deliberately not on this page

| Cut | Why |
|---|---|
| **Embedded Google Map** | Third-party iframe, cookies before consent, banned by §5. Links out instead |
| **Budget Range dropdown** | See above — contradicts R04's published rates |
| **Any US address** | **Killed by R16** |
| **`+880 1336433710`** | Mango's number. **R14** rules `…711` for VEA |
| **A turnaround promise** | **R18** — no delivery-speed claim on any page |
| **Live chat / WhatsApp widget** | Third-party JS. A plain `wa.me` link does the same job at zero cost |

---

## Before this page ships

- [ ] **Dial `+880 1336433711`.** Ten seconds. It is in the footer of all ten pages
- [ ] **Send a test email to `hello@videoeditor.agency` and confirm it arrives** — R15
- [ ] T3 has run; `sync-shared.mjs --check` prints "No drift"
- [ ] R13 answered — form ships, or the section is deleted
- [ ] `[[R28]]` address supplied, or the address line is cut rather than guessed
- [ ] Booking link supplied, or the discovery-call sentence reworded
- [ ] "Guarantee" removed in favour of "typically", or Masud rules the other way
- [ ] Every `tel:` / `wa.me` / `mailto:` clicked and confirmed working — no placeholders
- [ ] FAQ is `<details>`, not JS
- [ ] Exactly one `<h1>`

---

## Request to the thread that owns the footer

**T8 does not edit `_template\page-template.html`** — Rule 2 restricts it to T3 and T9.
Its footer block currently says *"T8 fills this block, once Q12 is answered."*
**Those two instructions contradict each other.** Sources: `THREAD-PLAN.md` §1 Rule 2 vs
`site\_template\page-template.html` lines 76–89.

**Q12 is now answered — it is R14, RULED.** The footer needs:

> **Phone / WhatsApp** +880 1336433711
> **Email** pending R15
> **Hours** Mon–Sat, 9:00 AM – 7:00 PM (GMT+6)
> **Location** Dhaka, Bangladesh *(R16)*
> **Footer links** Home · About · Services · Portfolio · Pricing · Contact · Privacy · Terms
> — **no Blog** *(R10 dropped it; the source footer still lists it)*

**T3 or T9 makes that edit. T8 is requesting it, per Rule 1, not making it.**
