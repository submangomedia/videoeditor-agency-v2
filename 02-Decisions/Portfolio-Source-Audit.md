# Portfolio Sources — Audit

**Written:** 2026-09-03 by T0. **T2 consumes this file; T2 does not own it.**
**Read:** all four sources in full on 2026-09-03. Every figure below is counted, not
estimated.

---

## 1. The four sources

| # | Source | What it is | Rows |
|---|---|---|---|
| **A** | Sheet `1g8ZCmYo…` tab 1 | **The master catalogue.** Client · project · industry · categories · Drive filename · YouTube link · 2 playlists | **58** |
| A2 | same sheet, "Upload Status" tab | The same list plus a TRUE/FALSE upload flag | **51** |
| A3 | same sheet, 2 report tabs | Filter views — **both return "No matching records found."** Broken | 0 |
| A4 | same sheet, 2 vocabulary tabs | **43 industries** and **54 categories** | 97 |
| **B** | `MangoMedia_Video_Embeds.xlsx` | Title · **video ID** · publish status · **view count** · ready iframe | **49** |
| **C** | Sheet `1VN67h9p…` | **Client master.** 58 clients incl. archive-only and LOCKED records | **58** |
| **D** | Sheet `12gpdPOX…` | Ready iframes with industry + category | **38** |

**This is good material.** It is the best-organised research in the whole project —
real clients, real tagging, real links. The problems below are reconciliation
problems, not quality problems.

---

## 2. ✅ RESOLVED — "Unpublished" means unlisted, and that is fine

Source B's Status column:

| Status | Count |
|---|---|
| **Unpublished** | **48** |
| Published (Oct 13, 2025) | 1 |

**Masud confirmed 2026-09-03: unlisted, not private — anyone with the link can
watch.** Unlisted videos embed normally and their thumbnails are publicly
reachable. **Q-P1 is closed. This is not a blocker.**

One consequence worth stating: an unlisted video **cannot be found by searching
YouTube**. The channel will send no traffic to the site, and the site is the only
place these will be seen. That is a reasonable choice for a client-work showcase —
but it means the portfolio page is doing all the work.

**Total views across all 49: 57.** Highest is 28; **34 videos have zero views.**
Entirely expected for an unlisted channel — but it means **no view count anywhere on
the site can be presented as social proof.**

---

## 2b. ⚠️ 53 of 58 videos are vertical — this decides the portfolio layout

Counted from source A's YouTube links:

| Link type | Count | Shape |
|---|---|---|
| `youtube.com/shorts/…` | **53** | **9:16 vertical** |
| `youtu.be/…` | **5** | 16:9 landscape |

The five landscape ones: Jay Macallister *Best Software*, *FavoriteTech*, *SoraC2PA*,
and both Wes The Creative *Story Arc* videos.

**This is the single biggest design consequence in the data, and no research document
mentions it.**

- Every ready-made iframe in sources B and D is `width="560" height="315"` — **16:9.
  Wrong shape for 53 of 58 videos.** A vertical video in a 16:9 frame renders as a
  thin strip with black bars either side. Another reason not to paste those codes.
- The portfolio grid must be **vertical-first**: a 9:16 card, with landscape items
  either given a wider cell or grouped separately.
- The same applies to the eight items on the homepage.

⚠️ **Thumbnails need checking before bulk download.** `img.youtube.com/vi/<ID>/
maxresdefault.jpg` returns a **16:9** image for a Short — YouTube pads or crops the
vertical frame to fit. Downloading 53 of those gives a grid of letterboxed stills of
vertical videos, which looks worse than no thumbnail at all.

**The robust source is Masud's own masters.** Source A carries the original `.mp4`
filename for every row, and those files are on Drive. Extracting a frame from the
master gives a true 9:16 still at whatever quality is wanted. T2 should test one
YouTube thumbnail first, and fall back to frame extraction if it comes back padded —
which it probably will. → **Q-P8**

---

## 3. ⚠️ No two sources agree on how many videos exist

| Source | Count |
|---|---|
| A — master catalogue | **58** |
| A2 — upload status tab | **51** |
| B — xlsx embeds | **49** |
| D — iframe sheet | **38** |

**A2 is missing 7 rows** — SL 52–58, all Baby Billion.
**D stops at TheRavio** and never reaches Served Agency, Wes The Creative or Baby
Billion — 20 rows short.

**B contains at least four videos that appear in no other source:**

- Clothera Sourcing Limited — `_t9BaaYB-iA` ← **the one published video**
- Purrly cat food — `dFIW4mG4lzI`
- Cash Flow-Real Estate-Showreel-Course — `UAKO3AR2lzM`
- red onion shampoo short — `pUDVBhFLvAU`

**T2's first job is one reconciled list.** Not four.

---

## 4. ⚠️ Two conflicts inside source B

**"LVRGAl" appears twice with two different video IDs:**

| Title | ID |
|---|---|
| Podcast-Editing-Jay Macallister-LVRGAl | `n9Y8jozrgNY` |
| Podcast-Editing-Jay Macallister-LVRGAl | `LmlOMKBNoew` |

Sources A and D both use `LmlOMKBNoew`. `n9Y8jozrgNY` appears nowhere else. Likely a
superseded re-upload — **but do not assume. Open both.**

**"Fear Of Ai" also appears twice**, with different IDs.

All 49 IDs are individually unique, so these are genuine duplicate *titles*, not a
copy-paste error.

---

## 5. ⚠️ Three incompatible industry vocabularies

This is the biggest structural problem, and it is bigger than
`SITE-MAP-v1.md` §3 recorded.

| Vocabulary | Size | Slugs? | Example terms |
|---|---|---|---|
| **`Website` doc** (the one SITE-MAP-v1 recommends) | **28 industries + 14 formats** | ✅ yes | Corporate & Enterprise · SaaS & Technology · Healthcare & Medical |
| **Source A4** (this portfolio data) | **43 industries + 54 categories** | ❌ none | Podcast Networks · Machineries · Islamic · Garments Buying House |
| **Source C** (client master) | **~15 industries** | ❌ none | Creator Economy · Manufacturing & Industrial · Nonprofit & Social Impact |

**Every one of the 58 videos is tagged in the A4 vocabulary.** The site map plans to
browse by the `Website` vocabulary. **Nothing maps between them today.**

**Recommendation for T2:** keep A4 as the *internal* tagging vocabulary — it is what
the data already uses, and re-tagging 58 videos by hand invites errors. Build a
**mapping table** from the 43 to the 28 instead. Where a term has no home
("Machineries", "Islamic", "Garments Buying House"), that is evidence the 28-item
list needs a row added — not evidence the video should be dropped.

⚠️ **Do not re-tag the source sheet to match the website.** The sheet is the
operational record of real work. The website is a view of it.

---

## 6. ⚠️ Two industry tags are wrong on their face

Cross-checking A against C:

| Video | A says | C says the client is | Verdict |
|---|---|---|---|
| Root IO — Cyber Security Product | **E-commerce** | SaaS & Technology / **Cybersecurity** | A is wrong |
| CID Foundation — Boat Retreat | **Automotive/Vehicle, Machineries** | **Nonprofit & Social Impact** / Foundation | A is wrong |

Two errors found by spot-check on 58 rows means **T2 must cross-check all 58 against
source C**, not assume the rest are clean.

---

## 7. ⚠️ No permission column exists anywhere

**19 named clients** across the four sources. **Not one permission flag.**

Jay Macallister · BPD · Caliber8 Tools & DIY · CID Foundation · Planner CEO Society ·
KUPKE · Ever Forever Radio · Yogii Show · Sugar Cookies · Jay D · Root IO · TheRavio ·
Jason Schmitt · Served Agency · Wes The Creative · Baby Billion · Clothera Sourcing
Limited · Level180 · plus the LOCKED records in C.

`THREAD-PLAN.md` §6 rules that `NamePublic` defaults to **NO**. On this data that
means **58 of 58 items ship unnamed** until Masud says otherwise, client by client.

An unnamed card is still proof: *"Podcast intro series · legal · US"* shows the work.
**A named card without permission is a problem you cannot take back.**

---

## 8. ⚠️ Source C must never be published, and parts of it must never be quoted

Source C is an **internal operations record**, not portfolio material. It contains:

- **LOCKED client notes** — including named doctors at a named clinic, and a
  direction that Masud manages that relationship directly
- **Client status** — "Dormant", "One-Off". A client reading that they are filed as
  Dormant is a conversation nobody wants
- **NEEDS REVIEW entries** using Bangla honorifics — "Jabed vai", "Noman Vai" — and
  frank notes about whether a name is even a client
- **Local drive paths and file sizes** — `D:\Clients Video archive`, 32 files, 5.3 GB

T2 reads C **only** to correct industry tags and confirm client identity. **Nothing
from C's Notes, Client Status or Stage columns reaches any page.**

---

## 9. ⚠️ Overlap with Mango Media's own client list

Several names in source C also appear in mangomedia.digital's shipped
`site\assets\img\logos\` and `testimonials\` folders:

**Century 21 · Root · CID Foundation · Stock Health · Gray Jays · Quantum Pioneers ·
Ucinema · Baby Billion**

Mango's live site already shows some of these as logos and testimonials.

**So: does that client belong to Mango, to Video Editor Agency, or to both?** The
same question `Mango Website Rebuild` open item #7 asks about the Content Creators
audience, and it is still unanswered there. **One answer has to serve both sites** —
the alternative is the same client's logo on two different agencies' homepages,
which reads as one company pretending to be two. → **Q-P4**

---

## 10. What is genuinely ready to use

Setting the problems aside, this is real and immediately usable:

- **49 YouTube video IDs**, confirmed unique — everything the `<details>` pattern in
  `THREAD-PLAN.md` §6 needs
- **58 videos tagged by industry and category** — enough to populate every group on
  the portfolio page
- **19 named clients across ~12 industries** — genuine range: legal, medical,
  education, real estate, food, fitness, cyber-security, kids' content
- **Four multi-video clients** that could carry a real case study: Jay Macallister
  (14), Served Agency (10), Ever Forever Radio (7), Baby Billion (7)

**The iframe codes in B and D are not needed.** They are standard 560×315 embeds with
`autoplay` in the allow-list. The build uses the video ID and constructs its own
markup inside a `<details>`; a pasted iframe would reintroduce exactly the pattern
the platform ruling forbids.

---

## 11. New open questions — for T1 or T2

| # | Question | Blocks |
|---|---|---|
| ~~Q-P1~~ | ~~Private or unlisted?~~ **CLOSED 2026-09-03 — unlisted. Embeds work. Do not re-raise** | — |
| **Q-P8** | **Do YouTube thumbnails come back padded to 16:9 for the 53 Shorts?** Test one. If yes, extract frames from the Drive masters instead — source A has every filename | Every card's image |
| **Q-P2** | Which of the four counts is right — 58, 51, 49 or 38? | The catalogue |
| **Q-P3** | Which clients may be **named**? Default is none | Every card, and the homepage logo strip |
| **Q-P4** | Century 21, Root, CID Foundation, Stock Health, Gray Jays, Quantum Pioneers, Ucinema, Baby Billion — **Mango's clients, VEA's, or shared?** | Both sites' portfolios |
| **Q-P5** | LVRGAl and Fear Of Ai each have two IDs. Which is live? | Two cards |
| **Q-P6** | Clothera Sourcing Limited, Purrly cat food, Cash Flow-Real Estate, red onion shampoo appear only in the xlsx. Real portfolio items? | 4 cards |
| **Q-P7** | Level180 is in the client master with a note about a different folder structure and "high video volume" — but has **zero** videos in the catalogue. Missing, or deliberately excluded? | Coverage |
