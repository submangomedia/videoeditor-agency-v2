# Portfolio Catalogue — v1

**Owner of this file: T2.** No other thread writes to it.
**Written:** 2026-09-03
**Supersedes for portfolio data:** the counts and the orientation split in
`02-Decisions\Portfolio-Source-Audit.md` §2b and §3. That file stays as the audit of
the sources; this file is the reconciled result. Where the two disagree, both are
named in §2.

**What was actually opened, and when.** Source A (`1g8ZCmYo…` "Video Portfolio 5"),
source C (`1VN67h9p…` "MMD Video Archive Index — Client Registry") and source D
(`12gpdPOX…` "Master Video Embed Links Database") were opened in full on 2026-09-03,
all tabs. The `Website` doc (`1YKtLJWk…`) was opened in full the same day for the
28-industry / 14-format vocabulary. **Source B — `MangoMedia_Video_Embeds.xlsx` — was
NOT opened.** It is not attached to this thread and no file of that name exists in
Drive. Everything below attributed to B is quoted from the audit, which did read it,
and is marked `[via audit]`. See §8.

Every orientation, every liveness check and every YouTube title in this file was
measured directly against YouTube on 2026-09-03, not inferred from the sheets.

---

## 1. The headline numbers

| | Count |
|---|---|
| Rows in source A (master catalogue) | **58** |
| Of those, videos confirmed **live** on YouTube | **57** |
| Of those, confirmed **dead** — HTTP 404 | **1** (SL 13) |
| Additional real items found only in source B | **4** `[via audit]` |
| **Reconciled total available to the site** | **61** |
| Duplicate uploads of an item already counted | 1 (`n9Y8jozrgNY`) |

### Orientation — measured, not inferred

| Shape | Count | Which |
|---|---|---|
| **Vertical 4:5** (1080×1350) | **27** | all 26 compilation showreels, + Cash Flow (B) |
| **Vertical 9:16** (1080×1920) | **26** | individual client edits |
| **Vertical ~1012×1920** | **3** | three Baby Billion shorts — *not* exactly 9:16 |
| **Landscape 16:9** | **5** | 3 in source A, 2 in source B |
| Dead | 1 | SL 13 |

**56 of the 61 live items are vertical. But they are vertical in two different
shapes**, and the split is almost even. See §2, finding 2 — this is the finding that
most changes what T5 builds.

---

## 2. Six findings that correct the audit or the source data

Each of these was measured. None is inferred from a filename or a URL form.

### Finding 1 — one video is dead

**SL 13 · Jay Macallister · "MatthewShoutout" · `F7AuUoR3ip4`**

Confirmed by two independent methods: YouTube's oEmbed endpoint returns **HTTP 404**,
and all three thumbnail endpoints return the 120×90 grey placeholder rather than an
image. Every one of the other 57 returns HTTP 200 and a real thumbnail.

It is in source A, source A2 and source D. All three carry a video ID that no longer
resolves. **It cannot ship.** Whether the video was deleted, re-uploaded under a new
ID, or the ID was mistyped into the sheet cannot be settled from A, C or D — source B
is the only place a second ID for a Jay Macallister item would appear, and B is not
available to this thread. → `[[MatthewShoutout — was this deleted, or re-uploaded
under a different ID? Source B is the only place that would show it]]`

### Finding 2 — the grid is not one shape. It is two, nearly 50/50

`Portfolio-Source-Audit.md` §2b and `THREAD-PLAN.md` §6 both say the grid should be
**"vertical-first: a 9:16 card."** Measured against YouTube, that is wrong for 27 of
the 61 items.

- **27 items are 4:5** (1080×1350) — every single compilation showreel.
- **26 items are 9:16** (1080×1920) — every individual client edit.
- The correlation is exact and it has a cause: showreels were rendered 4:5, client
  shorts 9:16. It is not noise.

A 9:16 cell crops a 4:5 image top and bottom by 25%. A 4:5 cell letterboxes a 9:16
image. **Neither single shape works.** T5 needs two cell shapes, or one shape plus a
deliberate crop rule. This is T5's decision, not T2's — recorded here because the
data, not a preference, forces it.

**Three Baby Billion shorts measure 1012×1920, not 1080×1920** — a ratio of 0.527
against 9:16's 0.5625. Close, but a grid that assumes exactly 9:16 will show a
1-2 pixel seam on those three. Listed in §5 so nobody has to rediscover it.

### Finding 3 — "53 vertical / 5 landscape" is wrong in both directions

The audit derived that split from the *link form* in source A — `youtube.com/shorts/…`
counted as vertical, `youtu.be/…` as landscape. `youtu.be/` is only a URL shortener.
It says nothing about shape.

Measured, **two of the five the audit called landscape are vertical 9:16**:

| SL | Item | ID | Audit said | Measured |
|---|---|---|---|---|
| 8 | Jay Macallister · Best Software | `ggyM4XlELXo` | landscape | **1080×1920 vertical** |
| 17 | Jay Macallister · SoraC2PA | `2Ehpl9IE5HE` | landscape | **1080×1920 vertical** |

Only **three** items in source A are genuinely landscape: SL 9 (FavoriteTech),
SL 50 and SL 51 (both Wes The Creative). Two more of source B's four orphans are
landscape, giving five in total across the reconciled list.

**Sources named:** `Portfolio-Source-Audit.md` §2b · direct measurement of
`i.ytimg.com/vi/<ID>/oardefault.jpg`, 2026-09-03.

### Finding 4 — Q-P8 is answered, and no master file has to be touched

`img.youtube.com/vi/<ID>/maxresdefault.jpg` returns **1280×720 for every ID tested,
including every Short.** The audit predicted this and it is correct: maxresdefault is
padded 16:9 and is the wrong image for 56 of 61 items.

**But `oardefault.jpg` returns the original aspect ratio**, 1080px wide, and it is
available for every vertical item in the set. Measured: 1080×1350 for the 4:5 items,
1080×1920 for the 9:16 items, 1012×1920 for the three Baby Billion shorts. For the
five genuinely landscape items oardefault is absent (it returns the 120×90 stub) and
maxresdefault is then the correct shape.

**So the fallback plan in the audit — extract frames from the Drive masters — is not
needed.** Those masters are 50 MB to 280 MB each; pulling 56 of them would have been
the single most expensive step in this thread. The rule is now two lines:

```
vertical items  → oardefault.jpg   (true shape, 1080px wide)
landscape items → maxresdefault.jpg (true shape, 1280×720)
```

`ThumbSource` in §5 records which applies per row. Nothing is hotlinked — §6 covers
delivery.

### Finding 5 — six clients are mis-tagged, not two

The audit found two by spot-check and said that meant checking all. It did. Source A
was cross-checked against source C for all 19 clients that have videos. **Four more
errors, on top of the two already known.**

| Client | Source A says | Source C says | Verdict | Videos affected |
|---|---|---|---|---|
| **CID Foundation** | Automotive/Vehicle, Machineries | Nonprofit & Social Impact / Foundation | **A wrong** — known | 1 |
| **Root IO** | E-commerce | SaaS & Technology / Cybersecurity | **A wrong** — known | 1 |
| **Planner CEO Society** | Event Planners, Creative Agency | Personal Brand & Coaching / Coaching-Course | **A wrong.** It is a coaching business *for* the wedding industry, not an event-planning company. The video is titled "Wedding Industry CEO" and categorised "Online Course" | 1 |
| **KUPKE** | Healthcare, **Doctors and Medical**, Online Courses | Health & Wellness / **Therapy** | **A wrong, and it is a claim risk.** Hypnotherapy filed under "Doctors and Medical" implies clinical medicine on a public page | 1 |
| **TheRavio** | **Doctors and Medical**, Fitness & Wellness | Health & Wellness / Physio-Posture | **A over-claims.** Posture and physio content is not doctor content. Same claim risk as KUPKE | 1 |
| **Wes The Creative** | Education, YouTube Creators, **Restaurant & Food** | Creator Economy / YouTube Education | **A wrong.** "Restaurant & Food" is unsupported by C and by both video titles ("Story Arc"). It sits directly below ten Served Agency rows that legitimately carry that tag — a copy-paste artefact | 2 |
| **Caliber8 Tools & DIY** | Education, Machineries, Online Courses | **Manufacturing & Industrial** / Tools & DIY | **A incomplete**, and the correct term does not exist in the 28-list. See §4 | 1 |
| **BPD** | Education, Online Courses, **Healthcare** | Education / E-Learning | **Unresolved.** C does not support "Healthcare". → `[[BPD — what does this client do? C files them as E-Learning; A also tags them Healthcare]]` | 1 |

**Two of these six are not tidying. They are claim risk.** KUPKE and TheRavio ship as
"Doctors and Medical" today. A hypnotherapy course and a posture-correction creator
presented under a medical label is exactly the class of claim `instructions.md` §5
says must be defensible if a client quotes it back.

The corrections are applied in the `Industry(mapped)` column in §5. **Source A itself
is untouched** — it is the operational record, per the audit's §5 ruling.

### Finding 6 — the YouTube titles name the clients, and that defeats the unnamed card

Every video's real title was read from YouTube. They look like this:

- `Podcast-Editing-Jay Macallister-Best Software-VideoEditor.agency`
- `Agency Video Editing-Served Agency-Foodie influencer-videoeditor.agency`
- `KIDS SHORT-Editing-Baby Billion-mystery_letter-VideoEditor.agency`
- `Business Education-Showreel-Jason Schmitt-Course-Tutorial-Videoeditor.agency`
- `Clothera Sourcing Limited`

**The rule is that all 61 items ship unnamed until Masud rules client by client. The
card can honour that. The player cannot.** The `<details>` pattern in
`THREAD-PLAN.md` §6 loads a real YouTube player when a visitor opens it, and that
player displays the video's own title — which names the client. A card reading
"Podcast intro series · legal · US" that opens to reveal "Jay Macallister" has not
protected anything.

This is not a reason to abandon the pattern. It is a reason to know that **the
permission gate lives on YouTube as well as in this file.** Three ways out, and the
choice is Masud's, not T2's:

1. Rename the videos on YouTube to drop client names before launch. Costs an
   afternoon and nothing else; the titles are keyword-stuffed rather than useful as
   they stand.
2. Get permission for the clients whose names would show, which is the same
   client-by-client ruling R07 already needs.
3. Link out rather than embed (option A in `THREAD-PLAN.md` §6) — which sends the
   visitor to YouTube, where the title is displayed anyway. **This one does not
   actually solve it.**

→ `[[Rename the YouTube videos to drop client names, or rule per client? The embedded
player shows the title regardless of what the card says]]`

---

## 3. The reconciliation — how 58 / 51 / 49 / 38 became 61

### What each source turned out to be

| Source | Rows | What it actually is |
|---|---|---|
| **A** tab 1 | **58** | The master. Nothing else contains a row A does not have, except B's orphans |
| **A2** "Upload Status" | 51 | **A rows 1–51 exactly.** Missing SL 52–58, all Baby Billion. Adds one column: TRUE for SL 1–11, FALSE for SL 12–51. Contributes no rows |
| **A3** two report tabs | 0 | Both return "No matching records found." Broken, as the audit said. Contributes nothing |
| **A4** vocabulary tabs | 43 + **55** | 43 industries — matches the audit. **55 categories, not 54** — the audit's count is one low. "Tutorial" and "Tutorial Video" are both present and are near-duplicates |
| **B** xlsx | 49 `[via audit]` | Not opened by this thread. Per the audit: 4 rows appear nowhere else, plus a second ID for LVRGAl and a second for "Fear Of Ai" |
| **D** iframe sheet | **38** | **A rows 1–38 exactly**, same client, same project, same video ID, in the same order. Stops at TheRavio. **Contributes no unique row and no unique ID.** It can be set aside entirely |

### Nothing was dropped

**No row was dropped from any source.** The four counts differ because A2, B and D are
subsets or near-subsets of A, not because anyone disagrees about what exists.

- 58 (A) is the base.
- 51 (A2) = A minus the seven Baby Billion rows.
- 38 (D) = A rows 1–38.
- 49 (B) = an overlapping set that adds 4 items A does not have.

**A strong independent check on the 58:** source C carries a `Videos (auto)` count per
client. For the 19 clients that have videos those counts are 14, 1, 1, 1, 1, 1, 1, 1,
1, 7, 5, 1, 1, 1, 1, 1, 10, 2, 7 — **they sum to exactly 58**, and each client's count
matches the number of rows that client has in A (Jay Macallister 14, Ever Forever
Radio 7, Yogii Show 5, Served Agency 10, Baby Billion 7, Wes The Creative 2). Two
independently maintained sheets agreeing to the row is the best evidence in this data
that 58 is the real figure.

### Rows that exist in only one source — every one named

**Only in source A** (absent from A2 and D — A2 stops at 51, D stops at 38):

SL 39 Jason Schmitt · SL 40–49 Served Agency ×10 · SL 50–51 Wes The Creative ×2 ·
SL 52–58 Baby Billion ×7. **Twenty rows.** All twenty were verified live on YouTube
individually — they are real work, not stragglers.

**Only in source B** `[via audit]` — four items, all four verified live on the Video
Editor Agency channel by this thread:

| Title as YouTube reports it | ID | Measured shape |
|---|---|---|
| Clothera Sourcing Limited | `_t9BaaYB-iA` | landscape 16:9 |
| Purrly cat food | `dFIW4mG4lzI` | landscape 16:9 |
| Cash Flow-Real Estate-Showreel-Course-Videoeditor.agency | `UAKO3AR2lzM` | vertical 4:5 |
| red onion shampoo short | `pUDVBhFLvAU` | vertical 9:16 |

**Q-P6 is answered: they are real.** All four resolve, all four are on the agency's own
channel. They are missing from the master sheet, not fictional. None of the four
appears in source C's client list, so their client identity is unknown → §5 carries a
bracket for each.

**Only in source B, as a second ID for an item already in A** `[via audit]`:

`n9Y8jozrgNY` — LVRGAl. **Q-P5, answered.** Both IDs are live and both return the
*identical* title: `Podcast-Editing-Jay Macallister-LVRGAl-VideoEditor.agency`. It is
a duplicate upload. A and D both use `LmlOMKBNoew`; this catalogue follows them and
lists `n9Y8jozrgNY` as a duplicate to be deleted from YouTube, not as a portfolio item.
→ `[[LVRGAl is uploaded twice. Delete n9Y8jozrgNY from YouTube? LmlOMKBNoew is the one
the master sheet uses]]`

**The audit also reports a second ID for "Fear Of Ai"** and does not give the value.
Source A carries `Bo5R1CDI7ok`, which is live. The second cannot be checked without
the xlsx. → §8.

---

## 4. The vocabulary map — A's 43 industries onto the `Website` doc's 28

The `Website` doc was opened in full. **A caution before the table:** that document
contains **two different 28-row lists, both headed "Industry."** The first mixes
industries with formats (rows include "Explainer Videos", "Sales Videos (VSL)",
"Faceless/Cash Cow", "AI-Generated Video") and has no slugs. The second — headed
`MASTER CATEGORY REFERENCE`, six colour-coded groups — is the clean one and is the
only list in the whole research set with CSS classes and URL slugs. **This file maps
onto the second list.** A thread that opens the doc and reads the first table will map
onto the wrong vocabulary. → recorded for T5.

### 4a. Industry map — 43 → 28

| Source A term | → `Website` industry | Slug |
|---|---|---|
| Automotive/Vehicle | Automotive & Vehicles | `automotive-vehicles-video` |
| Beauty/Aesthetic/Skincare | Beauty & Skincare | `beauty-skincare-video` |
| Cosmetics | Beauty & Skincare | `beauty-skincare-video` |
| Corporate | Corporate & Enterprise | `corporate-video` |
| Creative Agency | Advertising & Ad Agency | `ad-agency-video` |
| Doctors and Medical | Healthcare & Medical | `healthcare-video` |
| E-commerce | E-Commerce & Product | `ecommerce-video` |
| Education | Education & Coaching | `education-coaching-video` |
| Educational Institutions | Education & Coaching | `education-coaching-video` |
| Event Planners | Wedding & Events | `wedding-events-video` |
| Fashion & Lifestyle | Fashion & Lifestyle | `fashion-lifestyle-video` |
| Fashion Accessories | Fashion & Lifestyle | `fashion-lifestyle-video` |
| Finance & Investment | Finance & Investment | `finance-video` |
| Fitness & Wellness | Fitness & Wellness | `fitness-wellness-video` |
| **Garments Buying House** | ✖ **no home** | → §4c |
| **Garments Manufacturers** | ✖ **no home** | → §4c |
| Gaming | Gaming & Entertainment | `gaming-entertainment-video` |
| Healthcare | Healthcare & Medical | `healthcare-video` |
| Hospitality | Hospitality & Hotel | `hospitality-hotel-video` |
| Influencers/UGC | Business & Personal Branding | `personal-branding-video` |
| Instagram Reels Creators | Business & Personal Branding | `personal-branding-video` |
| **Islamic** | Spiritual & Motivational | `spiritual-motivational-video` |
| Kids Educational | Education & Coaching | `education-coaching-video` |
| Legal and Lawyer | Legal & Law Firm | `law-firm-video` |
| **Manufacturing** | ✖ **no home** | → §4c |
| Marketing Agency | Advertising & Ad Agency | `ad-agency-video` |
| Music/Entertainment | Gaming & Entertainment | `gaming-entertainment-video` |
| Online Courses | Education & Coaching | `education-coaching-video` |
| Personal Brand/Coach | Business & Personal Branding | `personal-branding-video` |
| Podcast Networks | Podcast Channel | `podcast-video` |
| Political/Public Figure | Government & Political | `government-political-video` |
| Real Estate | Real Estate | `real-estate-video` |
| Restaurant & Food | Food & Restaurant | `food-restaurant-video` |
| SaaS/Technology | SaaS & Technology | `saas-technology-video` |
| Social Impact/NGOs | Non-Profit & Social Cause | `nonprofit-video` |
| Spa | Beauty & Skincare | `beauty-skincare-video` |
| Startup | Corporate & Enterprise | `corporate-video` |
| TikTok Creators | Business & Personal Branding | `personal-branding-video` |
| Travel & Tourism | Travel & Tourism | `travel-tourism-video` |
| Trending Content Creators | Business & Personal Branding | `personal-branding-video` |
| Vloggers/Lifestyle | Fashion & Lifestyle | `fashion-lifestyle-video` |
| YouTube Creators | YouTube Channel | `youtube-video-editing` |
| **Machineries** | ✖ **no home** | → §4c |

**One correction to the audit.** `Portfolio-Source-Audit.md` §5 names three terms with
no home: Machineries, Islamic, Garments Buying House. **"Islamic" does have a home** —
`Spiritual & Motivational` (`spiritual-motivational-video`), group 3 of the 28. Only
the manufacturing family is genuinely homeless.

**Four of the 28 are used by nothing in A's vocabulary:** Banking & Financial Services,
Mental Health & Therapy, Architecture & Interior Design, Sports & Athletics. Three are
simply unused. **The fourth, Mental Health & Therapy, is where KUPKE belongs** — the
mapping found the correct home for a client A had mis-tagged.

### 4b. Format map — A's 55 categories → the `Website` doc's 14

Only the terms A actually uses on the 58 rows are listed. The full 55 collapse the
same way.

| Source A term | → `Website` format | Slug |
|---|---|---|
| Podcast · Interview · Podcast / Interview | Podcast & Interview | `podcast-interview-video` |
| Talking Head | Talking Head Video | `talking-head-video` |
| Tutorial Video · How-To Video · Screen Recording · Tutorial | Tutorial & How-To | `tutorial-howto-video` |
| Explainer Video · Educational Video | Explainer Video | `explainer-video` |
| Online Course · Educational Series · Lecture / Webinar Edit · Webinar · E-learning Video | Online Course & E-Learning | `online-course-video` |
| Shorts · Reels · TikTok Style | Short-Form (Reels & Shorts) | `short-form-reels` |
| UGC Style | UGC Style Video | `ugc-video` |
| Case Study Video · Testimonial Video · Social Proof Video | Testimonial & Social Proof | `testimonial-video` |
| **Showreel · Portfolio Video** | ✖ **no home** | → §4c |

### 4c. What the 28-list and the 14-list are missing

Per the audit's ruling: a term with no home is evidence the target list needs a row,
not evidence the video is dropped.

| # | Missing row | Belongs in | Why it is needed |
|---|---|---|---|
| **29** | **Manufacturing & Industrial** | the 28 industries, group 6 | Four A terms map to it — Machineries, Manufacturing, Garments Manufacturers, Garments Buying House — and source C independently uses the exact phrase "Manufacturing & Industrial" for Caliber8. Two vocabularies already agree on a row the third does not have. Suggested slug: `manufacturing-industrial-video` |
| **15** | **Showreel / Compilation** | the 14 formats | **27 of the 61 items — 44% — are compilation showreels**, and there is no format that describes one. Mapping them to "Explainer" or "Tutorial" describes the content of the clips but not the thing the visitor is about to watch. Suggested slug: `showreel-compilation` |

**A third gap, weaker, recorded not recommended:** there is no "Kids & Family" row, so
Baby Billion's seven kids' shorts map to `Education & Coaching`. That is defensible
and no row is proposed. Noted so it is a decision rather than an oversight.

**Neither list is T2's to edit.** Both belong to the `Website` doc and to T5/T3. This
section is the request, per `THREAD-PLAN.md` rule 1. → also logged in `WORKLOG.md`.

---

## 5. The catalogue

**Columns.** `NamePublic` is the permission gate and is `NO` on every row —
see §7. `Orientation` is measured. `ThumbSource` is the endpoint that returns the
correct shape for that row. `Featured` and `Order` are marked **INFERENCE** — they are
T2's proposal, not a ruling; see §5c. `SourceRows` records which sources carry the row:
`A` = master, `A2` = upload-status tab, `D` = iframe sheet, `B` = xlsx `[via audit]`.

`Title` is the project name from source A **with the client name removed**, because a
card that ships unnamed cannot carry the client name in its own title. The client is
recorded in the `Client` column, which is internal to this file.

### 5a. The 58 rows of source A

| SL | Title | Client | NamePublic | YouTubeID | Orientation | Industry (mapped) | Format (mapped) | ThumbSource | Featured | Order | SourceRows | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Law podcast intro | Jay Macallister | NO | `HtF06XQq5VQ` | vertical 4:5 | Legal & Law Firm | Podcast & Interview | oar | **YES** | 2 | A, A2, D | Showreel. C: Legal / Legal Tech |
| 2 | Online course showreel | BPD | NO | `vQUZtcqNUVE` | vertical 4:5 | Education & Coaching | Online Course & E-Learning | oar | no | 20 | A, A2, D | A also tags Healthcare; C does not support it → `[[what does BPD do?]]` |
| 3 | Podcast intros compilation | All Podcast | NO | `ro11a9PRaVs` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 21 | A, A2, D | Showreel across multiple podcasts |
| 4 | Tools & DIY tutorial showreel | Caliber8 Tools & DIY | NO | `Cdwn1cidxvE` | vertical 4:5 | *Manufacturing & Industrial* (gap) — interim Education & Coaching | Tutorial & How-To | oar | no | 22 | A, A2, D | A's Project Name cell is blank; title derived from the YouTube title. Needs §4c row 29 |
| 5 | Boat retreat & launch | CID Foundation | NO | `oL5SS-8LgVk` | vertical 4:5 | **Non-Profit & Social Cause** | Explainer Video | oar | no | 23 | A, A2, D | **CORRECTED** from Automotive/Vehicle, Machineries. C: Nonprofit / Foundation |
| 6 | Real estate floor plan | *unknown* | NO | `ulOiBnEzNzw` | vertical 4:5 | Real Estate | Explainer Video | oar | **YES** | 4 | A, A2, D | C files the client as "Floor Plan (UNKNOWN)" → `[[who is this client?]]` |
| 7 | Medical explainer showreel | All Medical | NO | `fKs9q1E9y94` | vertical 4:5 | Healthcare & Medical | Explainer Video | oar | **YES** | 1 | A, A2, D | Compilation across several doctors |
| 8 | Best Software | Jay Macallister | NO | `ggyM4XlELXo` | **vertical 9:16** | Legal & Law Firm | Podcast & Interview | oar | no | 24 | A, A2, D | **Audit called this landscape. It is not** — finding 3 |
| 9 | FavoriteTech | Jay Macallister | NO | `9lTVyaiEWMo` | **landscape 16:9** | Legal & Law Firm | Podcast & Interview | **max** | no | 25 | A, A2, D | Genuinely landscape — no oardefault exists |
| 10 | Fear Of AI | Jay Macallister | NO | `Bo5R1CDI7ok` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 26 | A, A2, D | Audit reports a second ID for this title in B → §8 |
| 11 | Goal budget | Jay Macallister | NO | `ImTQjAo486Q` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 27 | A, A2, D | |
| 12 | LVRGAl | Jay Macallister | NO | `LmlOMKBNoew` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 28 | A, A2, D, B | Duplicate upload `n9Y8jozrgNY` also live — §3 |
| 13 | ~~MatthewShoutout~~ | Jay Macallister | NO | ~~`F7AuUoR3ip4`~~ | — | — | — | — | **NO — DEAD** | — | A, A2, D | **HTTP 404. Cannot ship.** Finding 1 |
| 14 | MPAC announcement | Jay Macallister | NO | `mIrb8pjJSuw` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 29 | A, A2, D | |
| 15 | Productivity myth | Jay Macallister | NO | `K4DOxWjWhw4` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 30 | A, A2, D | |
| 16 | Professional group lessons | Jay Macallister | NO | `zCxBnpHJeWY` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 31 | A, A2, D | |
| 17 | Sora C2PA | Jay Macallister | NO | `2Ehpl9IE5HE` | **vertical 9:16** | Legal & Law Firm | Podcast & Interview | oar | no | 32 | A, A2, D | **Audit called this landscape. It is not** — finding 3 |
| 18 | Value anchors | Jay Macallister | NO | `pueZS7AXTUU` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 33 | A, A2, D | |
| 19 | What I learned working with lawyers | Jay Macallister | NO | `BHgL_J-eMFU` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 34 | A, A2, D | Sheet spells it "WhatlLearned" with a lowercase L |
| 20 | Working with lawyers | Jay Macallister | NO | `mdKx0eGpFbU` | vertical 9:16 | Legal & Law Firm | Podcast & Interview | oar | no | 35 | A, A2, D | |
| 21 | Wedding industry CEO course | Planner CEO Society | NO | `0aap4alrgdk` | vertical 4:5 | **Business & Personal Branding** | Online Course & E-Learning | oar | **YES** | 6 | A, A2, D | **CORRECTED** from Event Planners, Creative Agency. C: Personal Brand & Coaching. Secondary: Wedding & Events |
| 22 | Hypnotherapy course showreel | KUPKE | NO | `h-T_FVLYMiM` | vertical 4:5 | **Mental Health & Therapy** | Online Course & E-Learning | oar | no | 36 | A, A2, D | **CORRECTED** from Doctors and Medical — claim risk, finding 5 |
| 23 | Podcast intro — Elizabeth Husserl | Ever Forever Radio | NO | `GPegR9XaENI` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 37 | A, A2, D | Guest named in title; guest is not the client |
| 24 | Podcast intro — Emily Duncan | Ever Forever Radio | NO | `niSouAnFGR0` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 38 | A, A2, D | |
| 25 | Podcast intro — Jccchewning | Ever Forever Radio | NO | `S-cuYKmDmK4` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 39 | A, A2, D | |
| 26 | Podcast intro — Jim Curtis | Ever Forever Radio | NO | `qQsZkf4QfyA` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 40 | A, A2, D | |
| 27 | Podcast intro — Laju | Ever Forever Radio | NO | `A-51_t-9M1s` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 41 | A, A2, D | |
| 28 | Podcast intro — Radha Agrawal | Ever Forever Radio | NO | `xO5sNykXpTM` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 42 | A, A2, D | |
| 29 | Podcast intro — Renee Fitton | Ever Forever Radio | NO | `J34kZwv0NDw` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 43 | A, A2, D | Filename says 4-5, matching the measurement |
| 30 | Podcast shorts compilation | Yogii Show | NO | `WC8bbLrEzOc` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 44 | A, A2, D | |
| 31 | Podcast intro — gym | Yogii Show | NO | `C1aP9YXVOFs` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 45 | A, A2, D | |
| 32 | Podcast short — Jaymini | Yogii Show | NO | `q2hiA2g84YU` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 46 | A, A2, D | |
| 33 | Podcast intro — lawyer episode | Yogii Show | NO | `1WQeMP875GM` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 47 | A, A2, D | |
| 34 | Podcast short — gym | Yogii Show | NO | `bT98FYI48mM` | vertical 4:5 | Podcast Channel | Podcast & Interview | oar | no | 48 | A, A2, D | |
| 35 | Cookie recipe tutorial | Sugar Cookies | NO | `Ptwyy3kOioc` | vertical 4:5 | Food & Restaurant | Tutorial & How-To | oar | no | 49 | A, A2, D | |
| 36 | Real estate bridge loan | Jay D | NO | `Wdh3BOftG5E` | vertical 4:5 | Finance & Investment | Talking Head Video | oar | no | 50 | A, A2, D | Secondary: Real Estate. C: Finance / Real Estate Finance |
| 37 | Cyber-security product explainer | Root IO | NO | `IZIw8Q-z0ak` | vertical 4:5 | **SaaS & Technology** | Explainer Video | oar | **YES** | 3 | A, A2, D | **CORRECTED** from E-commerce. C: SaaS & Technology / Cybersecurity |
| 38 | Posture & position | TheRavio | NO | `gB5JBkmJ3So` | vertical 4:5 | **Fitness & Wellness** | UGC Style Video | oar | no | 51 | A, A2, D | **CORRECTED** — "Doctors and Medical" dropped, finding 5. A's Drive filename ends `.mp4k`, a typo in the sheet |
| 39 | Business education showreel | Jason Schmitt | NO | `tXYLpEnnuCs` | vertical 4:5 | Finance & Investment | Talking Head Video | oar | no | 52 | **A only** | |
| 40 | Foodie influencer | Served Agency | NO | `LhHqpgKHfvE` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | **YES** | 5 | **A only** | A also tags Restaurant & Food — that is the client's end market, not their industry |
| 41 | Function & event inquiries | Served Agency | NO | `NxFnKPfNimQ` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 53 | **A only** | |
| 42 | Turning influencer posts into customers | Served Agency | NO | `_nt_Vt1rOaM` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 54 | **A only** | |
| 43 | How to use Google Ads | Served Agency | NO | `vgKUxP8Wgtw` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 55 | **A only** | |
| 44 | Making customers return 3× more | Served Agency | NO | `P3lAp0aocO0` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 56 | **A only** | Claim is the client's, inside their own video — it is not a VEA claim |
| 45 | Free restaurant posts | Served Agency | NO | `ymfq-L9iLJw` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 57 | **A only** | |
| 46 | VIP customer lists | Served Agency | NO | `unWprrKQjqs` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 58 | **A only** | |
| 47 | The Google Reviews hack | Served Agency | NO | `1ctUzRbXVw4` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 59 | **A only** | |
| 48 | The Instagram ad strategy | Served Agency | NO | `DDDVW6KUsQo` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 60 | **A only** | |
| 49 | Why 90% of restaurant ads fail | Served Agency | NO | `r7v7nr6C2no` | vertical 9:16 | Advertising & Ad Agency | Short-Form (Reels & Shorts) | oar | no | 61 | **A only** | Client's claim, inside their own video |
| 50 | Story Arc 01 | Wes The Creative | NO | `q8Us_7ZMxqY` | **landscape 16:9** | **YouTube Channel** | Online Course & E-Learning | **max** | **YES** | 7 | **A only** | **CORRECTED** — "Restaurant & Food" dropped, finding 5 |
| 51 | Story Arc 02 | Wes The Creative | NO | `zb6qyP7zU78` | **landscape 16:9** | **YouTube Channel** | Online Course & E-Learning | **max** | no | 62 | **A only** | Same correction |
| 52 | Kids short 02 | Baby Billion | NO | `GIbOpOMjF5w` | vertical **1012×1920** | Education & Coaching | Short-Form (Reels & Shorts) | oar | **YES** | 8 | **A only** | Not exactly 9:16 — finding 2 |
| 53 | Kids short 03 | Baby Billion | NO | `-HrZ7PmPtrg` | vertical **1012×1920** | Education & Coaching | Short-Form (Reels & Shorts) | oar | no | 63 | **A only** | Not exactly 9:16. ID begins with a hyphen — must be quoted in any CSV or filename |
| 54 | Mystery letter | Baby Billion | NO | `WmIXSZc9Omo` | vertical 9:16 | Education & Coaching | Short-Form (Reels & Shorts) | oar | no | 64 | **A only** | |
| 55 | Never procrastinate | Baby Billion | NO | `wK8n9X4QLS8` | vertical 9:16 | Education & Coaching | Short-Form (Reels & Shorts) | oar | no | 65 | **A only** | |
| 56 | Germs experiment | Baby Billion | NO | `FGHLvZ8gv3g` | vertical 9:16 | Education & Coaching | Short-Form (Reels & Shorts) | oar | no | 66 | **A only** | |
| 57 | Prince keeps forgetting | Baby Billion | NO | `k5Uv7edbZJI` | vertical **1012×1920** | Education & Coaching | Short-Form (Reels & Shorts) | oar | no | 67 | **A only** | Not exactly 9:16 |
| 58 | Medicine skip | Baby Billion | NO | `6lePn7BX8J4` | vertical 9:16 | Education & Coaching | Short-Form (Reels & Shorts) | oar | no | 68 | **A only** | |

### 5b. The four items found only in source B

All four verified live on the Video Editor Agency channel on 2026-09-03. None appears
in source C, so no client identity can be confirmed for any of them.

| # | Title | Client | NamePublic | YouTubeID | Orientation | Industry (mapped) | Format (mapped) | ThumbSource | Featured | Order | SourceRows | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B1 | Clothera Sourcing Limited | *unknown* | NO | `_t9BaaYB-iA` | landscape 16:9 | *Manufacturing & Industrial* (gap) — provisional | `[[format?]]` | max | no | 69 | **B only** | The one published video `[via audit]`. Sourcing/garments → needs §4c row 29. → `[[is Clothera a VEA client, and what is this video?]]` |
| B2 | Purrly cat food | *unknown* | NO | `dFIW4mG4lzI` | landscape 16:9 | E-Commerce & Product *(provisional)* | `[[format?]]` | max | no | 70 | **B only** | → `[[is Purrly a VEA client?]]` |
| B3 | Real estate cash-flow course showreel | *unknown* | NO | `UAKO3AR2lzM` | vertical 4:5 | Real Estate *(provisional)* | Online Course & E-Learning | oar | no | 71 | **B only** | Title says Showreel + Course. → `[[whose course is this?]]` |
| B4 | Red onion shampoo | *unknown* | NO | `pUDVBhFLvAU` | vertical 9:16 | Beauty & Skincare *(provisional)* | `[[format?]]` | oar | no | 72 | **B only** | → `[[is this client work or a spec piece?]]` |

**Every industry in this sub-table is provisional.** It is read from the video's own
title, which is the only evidence available for these four. Provisional tags must not
become filters on a public page without Masud confirming each.

### 5c. Featured — a proposal, labelled

**This is an INFERENCE, not a ruling.** `RULINGS.md` §0 requires that anything not
traceable to something Masud said is labelled as such. Eight items are marked
`Featured: YES` above, chosen on three criteria: every one is confirmed live; no
industry repeats; and all three shapes appear so the homepage grid is tested by its
own content rather than by a uniform set.

| Order | Item | Industry | Shape |
|---|---|---|---|
| 1 | Medical explainer showreel | Healthcare & Medical | 4:5 |
| 2 | Law podcast intro | Legal & Law Firm | 4:5 |
| 3 | Cyber-security product explainer | SaaS & Technology | 4:5 |
| 4 | Real estate floor plan | Real Estate | 4:5 |
| 5 | Foodie influencer | Advertising & Ad Agency | 9:16 |
| 6 | Wedding industry CEO course | Business & Personal Branding | 4:5 |
| 7 | Story Arc 01 | YouTube Channel | **16:9** |
| 8 | Kids short 02 | Education & Coaching | **1012×1920** |

Masud replaces any of these freely. Nothing downstream depends on the specific eight,
only on there being eight.

---

## 6. Thumbnails — method, and what has to happen on Masud's machine

**Method, per finding 4:** 56 rows use `oardefault.jpg`, 5 rows use `maxresdefault.jpg`,
1 row (SL 13) has no source because the video is gone. Recorded per row in
`ThumbSource` above. **No frame extraction from the Drive masters is required.**

**Files land in `04-Assets\portfolio\`, named `<VideoID>.jpg`.** Never hotlinked —
`img.youtube.com` on every page load is a third-party request that also breaks if a
video's visibility changes.

### Why T2 cannot download them itself

Two hard limits, both verified rather than assumed:

1. The sandbox this thread runs in has **no network route to YouTube.** `pypi.org`
   resolves; `img.youtube.com` and `youtube.com` return nothing. The measurements in
   this file were taken through a browser, which can read images but cannot save them
   to disk.
2. The sandbox has **no filesystem route to the Drive folder.** `I:\My Drive\…` is not
   mounted into it, and the tools that can write to Drive write text, not binary.

So the download runs on Masud's machine. **`04-Assets\portfolio\fetch-thumbnails.mjs`
does it** — one command, no dependencies, no install. It is the same pattern as
`site\tools\sync-shared.mjs`: a local script that writes real files. Cloudflare never
runs it, the build command stays empty, and if it were deleted nothing would break.

### How to run it

```
cd "I:\My Drive\MANGO MEDIA - DEV\Projects\Video Editor\04-Assets\portfolio"
node fetch-thumbnails.mjs
```

It prints one line per file and a summary. Expect **61 files** and one skip (SL 13).
Re-running is safe — it overwrites.

---

## 7. Permission — what the column still does, and what it no longer does

> ⚠️ **Updated 2026-09-05.** This section was written on 2026-09-03, before
> `RULINGS.md` **R01** and **R27** were recorded. Both change what this column
> protects. The rest of the section stands; read this box first.

### 7.0 R01 + R27 — the column no longer protects the file

| Source | Says |
|---|---|
| `THREAD-PLAN.md` §5 (T2) | *"No client name is published without written permission. A logo, a name, a figure — each needs a yes."* |
| `THREAD-PLAN.md` §6 | `NamePublic` defaults to `NO` — *"this column is the permission gate"* |
| `RULINGS.md` **R01**, 2026-09-03 | **RULED: PUBLIC.** *"Public, all of it — I understand"* |
| `RULINGS.md` **R27**, 2026-09-03 | **RULED.** *"Commit everything as-is"* — chosen against an option reading *"Client names and permission status public… it's other people's data, not yours"* |

**Both cannot hold. R01 and R27 are later and are Masud's, so they govern.** Named
here rather than silently applied, per `instructions.md` §5 rule 6.

**What that means in practice — the distinction matters and is easy to lose:**

- **For the repository:** the gate is gone. Committing this file to a public repo
  publishes all 19 client names *and the fact that each is marked `NO`*. T1 recorded
  the specific hazard and it is not cosmetic: where an engagement carries a
  confidentiality term, a public file naming the client alongside their lack of
  consent is discoverable evidence of the breach.
- **For the rendered site:** the gate still holds, unchanged. **R27 settles what gets
  committed. It does not grant permission to print a client's name on a page** —
  that permission belongs to the client, not to VEA, and it is still **R07**, still
  OPEN. Every `NO` below still binds T4 and T5. No card carries a client name.

**T2 does not reopen R01 or R27.** Masud was shown the consequence and took it, twice.
The values in §5a and §5b are unchanged.

**One thing that is not a re-litigation, because R27 did not cover it:** R27 ruled on
this catalogue, which existed when it was asked. It said nothing about the *four
clients in §5b whose identity is unknown* — Clothera, Purrly, the cash-flow course and
the shampoo short. Those are provisional tags read off a video title. Publishing a
guess about who someone's client is, is a different act from publishing a name Masud
knows to be his. → `[[the four §5b items: confirm or delete before this file is
committed]]`

### 7.1 The column itself

**`NamePublic` is `NO` on all 62 rows.** Not one client is named on any public page
until Masud rules client by client, which is `RULINGS.md` **R07**.

**Masud said in this thread: "I am giving you the full permission to do whatever you
wish on my site."** That is recorded, and it is deliberately **not** treated as
permission to name clients. Three reasons, and the third is the one that matters:

1. It is permission over *the site*, which is what VEA controls. Naming a client is a
   claim about *someone else's* business, and VEA cannot grant that on their behalf.
2. `THREAD-PLAN.md` §5 and `Portfolio-Source-Audit.md` §7 both require the ruling to
   be **client by client**. A blanket sentence is not nineteen decisions.
3. **It is the one mistake in this project that cannot be undone.** A wrong colour
   ships and gets fixed. A client's name published without their agreement has already
   been published.

An unnamed card still proves the work. "Podcast intro series · legal · US" is evidence.
It is what §5 is built to produce.

**What is still needed, and it is a short list.** Nineteen names, one yes or no each:

Jay Macallister · BPD · All Podcast · Caliber8 Tools & DIY · CID Foundation ·
All Medical · Planner CEO Society · KUPKE · Ever Forever Radio · Yogii Show ·
Sugar Cookies · Jay D · Root IO · TheRavio · Jason Schmitt · Served Agency ·
Wes The Creative · Baby Billion · *plus the unknown client behind "Floor Plan"*

→ `[[Which of these 19 may be named on the site? Default stays NO for any not answered]]`

**And the one that is easy to miss:** per finding 6, saying NO here is not sufficient
on its own, because the embedded YouTube player displays a title that names the client.
The names come off YouTube, or the permission is obtained, or the player names them
whatever this column says.

### Q-P4 — the eight clients that may belong to Mango

Century 21 · Root · CID Foundation · Stock Health · Gray Jays · Quantum Pioneers ·
Ucinema · Baby Billion appear both in source C and in mangomedia.digital's shipped
logo and testimonial folders. Three of them have videos in this catalogue: **Root IO
(SL 37), CID Foundation (SL 5), Baby Billion (SL 52–58)** — nine items in total.

Nothing in this file resolves it, and nothing should: the same client's logo on two
agencies' homepages reads as one company pretending to be two.
→ `[[Root IO, CID Foundation and Baby Billion — Mango's, VEA's, or shared?]]`

---

## 8. What is still open

| # | Item | Blocks | Severity |
|---|---|---|---|
| **1** | **Source B was never opened by this thread.** `MangoMedia_Video_Embeds.xlsx` is not attached here and is not in Drive under that name. The four orphans and the LVRGAl duplicate come from the audit, and this thread verified all five live — but **the audit says "at least four" orphans. There may be more rows in B that nobody has named.** The 61 is a floor, not a ceiling | The completeness of §5b | **High** |
| **2** | **"Fear Of Ai" has a second video ID** `[via audit]`, value not recorded anywhere. A carries `Bo5R1CDI7ok`, which is live. The other cannot be checked without B | One row | Medium |
| **3** | **SL 13 MatthewShoutout is dead.** Deleted, re-uploaded, or mistyped? B is the only source that could show a second ID | One card | Medium |
| **4** | **R07 — the 19 permissions**, plus the YouTube-title problem in finding 6 | Every card's label, the homepage logo strip | **High** |
| **5** | **Q-P4 — Root IO, CID Foundation, Baby Billion**: Mango's or VEA's? | 9 of the 61 items | **High** |
| **6** | **The 28-list needs a Manufacturing & Industrial row; the 14-list needs a Showreel row.** Neither file is T2's. §4c is the request | Caliber8, Clothera, and the 27 showreels | Medium |
| **7** | **Client identity for the four B orphans** and for "Floor Plan" | 5 rows' industry tags | Medium |
| **8** | **Q-P7 — Level180** is in source C as an active client with "high video volume" and **zero videos** in the catalogue. Confirmed by reading C directly. Deliberately excluded, or simply never catalogued? | Coverage | Low |
| **9** | **Source C has 57 client rows, not the 58 the audit records.** Counted directly. Harmless, but the audit's figure is one high | Nothing | Low |

### Two things that are now closed

- **Q-P8 — thumbnails.** Answered in finding 4. `oardefault` for vertical,
  `maxresdefault` for landscape. No master files needed.
- **Q-P5 — the LVRGAl duplicate.** Answered in §3. Both IDs live, identical titles,
  `LmlOMKBNoew` is the one to keep.
- **Q-P6 — the four B orphans.** Answered in §3. All four are real and on the channel.
- **Q-P2 — which count is right.** Answered in §3. 58 in the master, corroborated to
  the row by source C's own per-client totals; 61 items once B's orphans are added and
  the dead one is removed.

---

## 9. What T5 needs from this file

1. **Two cell shapes, not one.** 27 items at 4:5, 29 at 9:16-or-near. Finding 2.
2. **Three of those 29 are 1012×1920**, not exactly 9:16.
3. **Five landscape items** need a wider cell or their own row.
4. **`Orientation` is measured and is authoritative.** It is not derivable from the
   link form, and source A does not record it.
5. **SL 13 does not exist.** Do not build a card for it.
6. **The `Website` doc has two lists headed "Industry."** Use the one with slugs —
   §4 opening note.
7. **Two vocabulary rows are missing** before every item has an honest home — §4c.
8. **No card carries a client name**, and the player behind the card does — finding 6.
