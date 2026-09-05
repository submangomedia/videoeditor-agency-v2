# Deployment Runbook — videoeditor.agency

**Owner: T10.** Rewritten 2026-09-05 from a full sweep of `site\`.
**This file lives at the project root, NOT inside `site\`.** Anything inside `site\`
is published. The Mango project kept its runbook in `site\README.md` and it was
readable by anyone at `mangomedia.digital/README.md`.

> ⛔ **CUTOVER IS BLOCKED.** Nine items in §6 must clear first. Two of them —
> the missing portfolio images and the unrun `sync-shared.mjs` — would each,
> alone, make launch day worse than not launching. §6 is the gate. Read it
> before anything below it.

---

## 1. What is actually there — verified, not assumed

Every row below traces to `RULINGS.md` §6.1 (read off Cloudflare and GitHub on
2026-09-03) or to `RULINGS.md` R03 (RDAP + the Cloudflare zone, 2026-09-05).

| | |
|---|---|
| Source of truth | `I:\My Drive\MANGO MEDIA - DEV\Projects\Video Editor\` |
| **New repo** | **`github.com/submangomedia/videoeditor-agency-v2`** · branch `main` · **PUBLIC** |
| **New Pages project** | **`videoeditor-agency-v2`** · preset **None** · build command **empty** · **build output `site`** · auto-deploy **on** |
| **Staging URL** | **`videoeditor-agency-v2.pages.dev`** — no custom domain attached |
| **Old repo** | `submangomedia/videoeditor-agency` — a static scrape of the old WordPress site |
| **Old Pages project** | **`mangomedia-videoeditor`** — **this is what serves videoeditor.agency today** |
| Registrar | **Namecheap** · registered 2024-05-22 · **expires 2027-05-22** · transfer lock on |
| DNS | **Cloudflare**, zone `videoeditor.agency` in Masud's own account · 26 records |
| `www` | `CNAME → mangomedia-videoeditor.pages.dev`, proxied — **repointed at cutover** |
| Mail | `MX → mx1/mx2/mx3-hosting.jellyfish.systems` — **nothing to do with Pages** |

### ⚠️ Three things the old version of this file got wrong

1. **"MUST BE PRIVATE" is void.** **R01 ruled the repo PUBLIC** — Masud,
   2026-09-03, verbatim: *"Public, all of it — I understand"*, chosen against an
   option that spelled out the consequence. `videoeditor-agency-v2` **is public
   and that is correct.**
   ⚠️ **`instructions.md` §7 and `COWORK-PROJECT-INSTRUCTIONS.md` both still say
   the repo must be private.** Three documents against one ruling. Sources:
   `RULINGS.md` R01 versus `instructions.md` §7 versus the Cowork field.
   **The ruling governs. T10 has corrected this file only — it does not own the
   other two, and a thread that reads them today gets a wrong answer.**
2. **"The build output directory is the only thing keeping the research
   private" is void for the same reason.** It controls what is *served*. Under
   R01 **nothing keeps the repo private** — `01-Research-Import\`,
   `02-Decisions\`, this file and `WORKLOG.md` are all world-readable once
   pushed. That field still matters, but only to stop the research being served
   at `videoeditor.agency/02-Decisions/…`. It is a tidiness control now, not a
   privacy one.
3. **There is no WordPress.** `RULINGS.md` §2 C6: the live site is a Cloudflare
   Pages deployment of a *static export*. "Roll back to WordPress" is not a
   plan that exists. §8 says what rollback actually is.

---

## 2. The two settings that still matter

**Build output directory = `site`.** If it is ever blank or `/`, the whole
research folder is served at `videoeditor.agency/…`. Verify it after any change
to the Pages project, not only at setup.

**Build command = empty. Preset = None.** There is no build step. `sync-shared.mjs`
and `build-portfolio.mjs` are local scripts Masud runs by hand; Cloudflare never
runs them and the site works if they vanish.

---

## 3. Every deploy, from now until launch

```
1.  cd into site\
2.  node tools\sync-shared.mjs
3.  node tools\sync-shared.mjs --check      ← must print "No drift"
4.  Run the QA checklist — instructions.md §5
5.  GitHub Desktop → review the diff → commit → push
6.  Cloudflare rebuilds in about a minute
7.  Open videoeditor-agency-v2.pages.dev and look at what changed
```

**Claude cannot do step 5**, and **has never been able to do steps 2 and 3
either** — the bash sandbox has no route into `I:\My Drive\`. Every thread from
T3 onward has recorded this. **Masud runs 2, 3 and 5.**

**Editing files in Drive changes nothing live.** Nothing ships until step 5.

⚠️ **`--check` does not cover the `<head>`.** `sync-shared.mjs` synchronises
`SHARED:HEADER` and `SHARED:FOOTER` only. It will print "No drift" on a site
where a page still carries `noindex`. §7's lift is a manual checklist for
exactly that reason.

---

## 3a. Running the four commands — written for someone who does not use a terminal

**Everything in this section happens on your own PC. Nothing here touches the
live site, GitHub or Cloudflare.** You can stop after any step and nothing is
broken.

### Step 1 — open PowerShell

Press the **Windows key**, type `powershell`, press **Enter**. A dark blue
window opens with a blinking cursor.

**You paste with right-click, not Ctrl+V.** Copy a line from this file, click
into the blue window, right-click once. The text appears. Then press **Enter**
to run it.

### Step 2 — check Node is installed

Paste this and press Enter:

```
node --version
```

| What you see | What it means |
|---|---|
| `v20.11.0` or any `v18`/`v20`/`v22` number | ✅ Good. Go to step 3 |
| `'node' is not recognized...` | Node is not installed. Get the **LTS** installer from **https://nodejs.org**, run it, accept the defaults, then **close PowerShell and open it again** and retry |

⚠️ **Closing and reopening PowerShell after installing Node is not optional.**
The window only learns about new programs when it starts.

### Step 3 — go to the site folder

Paste this **exactly**, quotes included — the path has spaces in it and it
breaks without them:

```
cd "I:\My Drive\MANGO MEDIA - DEV\Projects\Video Editor\site"
```

**Success looks like:** the prompt on the left changes to end in
`...\Video Editor\site>`.

If you get `Cannot find path`, Google Drive is not mounted as `I:` right now.
Open the Drive app, wait for it to finish syncing, and try again.

### Step 4 — the four commands, one at a time, in this order

**Run them one at a time. Read the output of each before running the next.**
The order matters: the first one creates files the last one checks.

---

**Command 1 of 4 — copy the 57 portfolio images into `site\`**

```
node tools\build-portfolio.mjs --assets
```

**Success looks like:**
```
ASSETS 57 still(s) copied into assets/img/portfolio/.
       5 file(s) in 04-Assets are not used by the page —
       the four source-B items held back, and nothing else. Expected.
WROTE portfolio/index.html — 57 items in 14 industries
NOTE  PLAYERS is off. Stills only — R07 is open and the YouTube
      titles name the clients. See the header block.
```

The exact numbers on the "not used" line may differ by one or two. **The line
that matters is `ASSETS 57`.** The two `NOTE` lines are expected and are not
errors.

⚠️ **If you see `FAIL ... missing:`** — some image files are not in
`04-Assets\portfolio\`. Send me the list; do not continue.

⚠️ **If it hangs for a minute** — that is Google Drive downloading the images,
which happens if they are set to "online only". Let it finish.

---

**Command 2 of 4 — repair the navigation on twelve pages**

```
node tools\sync-shared.mjs
```

**Success looks like:**
```
14 page(s) checked against _template/page-template.html.
12 page(s) updated.
```

The number updated may be anything from 1 to 14. **This is the command that
fixes the dead navigation.**

---

**Command 3 of 4 — confirm the navigation is now identical everywhere**

```
node tools\sync-shared.mjs --check
```

**Success looks like exactly this:**
```
14 page(s) checked against _template/page-template.html.
No drift. Every page carries the canonical nav and footer.
```

⚠️ **If it says `DRIFT` or `X page(s) have drifted`** — run command 2 again,
then this one again. If it still says drift, stop and send me the output.

---

**Command 4 of 4 — confirm the portfolio grid is settled**

```
node tools\build-portfolio.mjs --check
```

**Success looks like:**
```
No change. 57 item(s) already rendered.
```

⚠️ **If it says `DRIFT portfolio/index.html`** — run
`node tools\build-portfolio.mjs` (no flags), then this one again.

---

### Step 5 — you are done in the terminal

Nothing has been published. The changes are files on your hard drive.

**Next is GitHub Desktop, and only you can do it:**

1. Open **GitHub Desktop**.
2. You should see a long list of changed files, including about **57 new
   `.jpg` files** under `site/assets/img/portfolio/`.
   ✅ **The images will be listed** — `site\.gitignore` has no image rule.
   I checked. If they are missing, stop and tell me.
3. **Read the diff on `site\index.html` before committing.** Fourteen files
   changed at once and no thread has ever seen this script's output.
4. Summary: `T5+T10 — portfolio assets, shared nav sync, launch runbook`
5. **Commit**, then **Push origin**.
6. Wait about a minute, then open **https://videoeditor-agency-v2.pages.dev**
   and click through the navigation on three different pages.

⚠️ **This still does not touch `videoeditor.agency`.** No custom domain is
attached to the new project. The switch is §7 step 4, and it is deliberate.

### Which folder do I run this in?

**The Google Drive one — `I:\My Drive\...\Video Editor\site`.** That is where
every file lives and where the scripts resolve their own paths from.

⚠️ `RULINGS.md` §6.3 recommends that the **git clone** live *outside* Drive,
because git inside a syncing folder can corrupt. **That is still unruled
(Q-GIT, §9).** Until it is ruled, the safe order is: run the scripts in Drive as
above, then copy the folder's contents into whatever folder GitHub Desktop is
pointed at. **If GitHub Desktop is already pointed straight at the Drive folder,
these commands and step 5 are the whole job and there is nothing to copy.**

---

## 4. What is in `site\` today — swept 2026-09-05

**Fourteen HTML files. Twelve are live pages; `404.html` is the error page;
`_template\page-template.html` is not served.**

| Check | Result |
|---|---|
| Exactly one real `<h1>` per page | ✅ **14/14.** Extra `<h1>` matches were inside comments |
| Zero JS — no `<script>`, `<iframe>`, `onclick`, `javascript:` | ✅ **zero occurrences anywhere in `site\`** |
| No `href="#"` | ✅ zero |
| Every internal link resolves to a file in `site\` | ✅ **93 links, all resolve.** Targets: `/`, `/services/`, `/pricing/`, `/about/`, `/contact/`, `/portfolio/`, `/privacy/`, `/terms/` and the four audience slugs |
| `<meta name="robots" content="noindex, nofollow">` | ✅ **13/13 pages + the template.** Nothing is exposed early |
| `<link rel="canonical">` | ✅ 12 live pages, correct and absolute. **404.html correctly has none** |
| One font family | ✅ **Inter only, 14/14.** The Roboto bug T6 and T7 reported is fixed everywhere |
| `<img>` with alt text | ✅ **65 images, 65 `alt=`, none empty.** All 65 are on `/portfolio/` |
| R05 numbers render statically | ✅ `100+` and `10,000+` are plain text in `<span class="stat__value">`. The old site's `0 +` / `0 K` failure is not reproduced |
| Static numbers elsewhere | ✅ zero digits in rendered copy on the four audience pages |

**That is a genuinely clean build on every rule that can be checked without
running node.** What blocks launch is in §6, and none of it is sloppiness — it
is facts nobody has supplied and one script nobody has been able to run.

---

## 5. Redirect verification — `site\_redirects`

**61 rows. Every one now resolves.** ✅

| Section | Rows | Target | Target exists? |
|---|---|---|---|
| 1 · standalone video-type slugs | 32 | `/portfolio/` | ✅ `site\portfolio\index.html` |
| 2 · `/business-cat/…` + wildcard | 14 | `/portfolio/` | ✅ |
| 3 · `/video-type/…` + wildcard | 11 | `/portfolio/` | ✅ |
| 4 · blog: 2 posts + `/blog/` + wildcard | 4 | `/` | ✅ `site\index.html` |
| 5 · `/README.md` | 1 | `/` | ✅ |
| 6 · `/pricing/ → /contact/` | — | — | correctly **commented out**; `/pricing/` exists |

**The T9b blocker is cleared.** `_redirects` §1, `sitemap.xml` and `robots.txt`
all carry a warning that 60 of the 61 rows point at a `/portfolio/` that does
not exist. **T5 has since shipped it.** Those four warnings are now stale text
in three files T10 does not own. → **T9.**

⚠️ **But the page they point at ships with 57 broken images.** See §6 item 1.
A 301 to a page of grey boxes is not much better than a 301 to a 404.

**Order is correct** — every explicit row sits above its wildcard, and
Cloudflare takes the first match.

**No redirect exists for `/coaches/`, `/content-creators/`, `/business-owners/`,
`/marketers-and-agencies/`.** That is right, not an omission: R22 keeps the flat
slugs, so those four URLs do not move.

---

## 6. ⛔ THE LAUNCH GATE — nine items, none of them optional

Ordered by what breaks worst on day one.

### 1. ⛔ The 57 portfolio images are not in `site\`

`site\assets\` contains **one file: `css\site.css`.** There is no
`site\assets\img\portfolio\`. `/portfolio/` references **57 distinct images**
(65 `<img>` tags, 8 repeated) at `/assets/img/portfolio/<id>.jpg` and **not one
of them is inside the published folder.**

All 57 exist, in `04-Assets\portfolio\` — which is **outside `site\`, so
Cloudflare does not serve it.** Every referenced filename was checked against
that folder; all 57 are present, and 5 of the 62 downloaded are unused.

**Effect:** the portfolio page — *"the whole point of the site"*
(`THREAD-PLAN.md` §6) — renders 57 broken images, and **60 of the 61 redirects
land on it.**

**Fix — one command, and T5 wrote it:**
```
node tools\build-portfolio.mjs --assets      (from inside site\, FIRST, once)
```

⚠️ **Corrected.** T10's first draft of this item proposed a manual file copy.
**T5's WORKLOG entry, which landed while T10 was writing, records that `--assets`
already does exactly this.** T5's decision 6 reaches the same finding
independently — the stills are outside `site\` and are never served — and notes
the same ownership gap: `site\assets\img\portfolio\` is in **no thread's Owns
column** (`THREAD-PLAN.md` §4 gives T3 `site\assets\css\*`, not `img\*`), so T5
followed the path `site.css` §9 already names. **Two threads found this
separately and agree.**

**Masud runs it.** Claude cannot: the bash sandbox has no route into Drive and
the file tools cannot copy binaries.

⚠️ **Then confirm the jpgs are actually staged in GitHub Desktop before
pushing.** `site\.gitignore` has not been checked for image rules, and a
`*.jpg` line there would silently undo the whole fix.

### 2. ⛔ `sync-shared.mjs` has never been run — the site is unnavigable

**Measured, not inferred.** Count of `nav__pending` (an unlinked muted `<span>`):

| File | `nav__pending` | Meaning |
|---|---|---|
| `_template\page-template.html` | **2** | T9's promoted nav — 4 real links |
| `portfolio\index.html` | **2** | T5 built from the current template |
| **every other page — 12 files** | **6** | **the entire nav is dead text** |

**On the homepage, `/about/`, `/contact/`, `/services/`, `/pricing/`, both legal
pages, `404.html` and all four audience pages, a visitor cannot reach any other
page from the header.** Only the wordmark works, and it goes to `/`.

The footer link list T9 added is in the template and **in one page.** Thirteen
pages do not have it. So on those thirteen there is no header route and no
footer route either.

`instructions.md` §5 is technically satisfied — a `<span>` is not a link to a
404 — but the rule exists so that a visitor can move around the site, and they
cannot.

**Fix:** `node tools\sync-shared.mjs` from inside `site\`, then `--check` until
it prints **"No drift"**. **This is one command and it repairs twelve pages.**
It is the single highest-value action left in the project.

⚠️ **Read the diff before committing.** Fourteen files change at once, and no
thread has ever seen this script's output.

### 3. ⛔ 65 visible `[[brackets]]` across 15 files

`<span class="todo">` renders on the page. Counted 2026-09-05:

| File | Brackets | | File | Brackets |
|---|---|---|---|---|
| `services\` | 10 | | `about\` | 2 |
| `pricing\` | 8 | | `404.html` | 2 |
| `terms\` | 8 | | `_template\` | 2 |
| `contact\` | 6 | | `coaches\` | 3 |
| `privacy\` | 6 | | `content-creators\` | 3 |
| `marketers-and-agencies\` | 4 | | `business-owners\` | 3 |
| `portfolio\` | 4 | | `index.html` | 3 |

**Two of them are on every single page**, in the shared footer:
`[[R14 — phone… NOT YET DIALLED]]` and `[[R15 — which email address does VEA
publish?]]`.

⛔ **The R15 bracket is stale and should not exist.** **R15 was RULED
2026-09-05: `videoeditoragency.hello@gmail.com`.** `/contact/` publishes it
correctly today. The footer still asks the question. **That is a one-line fix in
`_template\page-template.html` plus a resync** — and it removes a bracket from
fourteen pages at once. → **T3 or T9.** T10 does not open that file.

`instructions.md` §5 rule 1: *"No placeholder that a client could quote back at
you."* **A page with a visible bracket does not ship.**

### 4. ⛔ The phone number has still never been dialled — R14

`+880 1336433711` is ruled and rendered **nowhere**. Phone and WhatsApp are
brackets on `/contact/` and in the footer of all fourteen pages.

**R13 ruled no form at launch.** So the site's inbound routes are meant to be
phone, WhatsApp and one email. **Today exactly one of the three works.**

`RULINGS.md` §2 C5 says how this is settled: *"by dialling it, not by reasoning
about it."* Mango's number is **one digit away** at `…710`, and `…711` came from
the same document set that contains Lorem ipsum and a landscaping company's
copy. **Ten seconds. It is the cheapest unblock on the site.**

Once dialled, both `/contact/` blocks and the two footer spans have their
replacement markup written out beside them in comments. Copy-paste, then resync.

### 5. ⛔ `/terms/` cannot be published as it stands

Four brackets on it are not missing facts — they are **the clauses that decide a
dispute**, and none has ever been written down anywhere in this project:

- **Payment terms** — deposit or on delivery, how many days, which currency
- **Cancellation and refunds** — mid-project, deposit, work already done
- **Limitation of liability** — ⚠️ **a lawyer drafts this one**
- **Governing law and jurisdiction** — Bangladesh is the obvious answer and is
  still a commercial decision, not a formality

Plus `[[R30 — full registered address]]` and `[[DATE THIS IS APPROVED]]`.

`/privacy/` is in the same state: registered address, a real **retention**
answer for client footage, and the approval date. It must also name the
`fonts.googleapis.com` request — Masud ruled Google Fonts stays, so that
disclosure is not optional.

**Both are unreviewed drafts. A lawyer reads them before cutover.** They are
already in `sitemap.xml`.

### 6. ⛔⛔ `/pricing/` RENDERS FOUR FAKE `$25` FIGURES — AND THEY ARE PUSHED

**This item was wrong in the 2026-09-05 version of this runbook and is corrected
here rather than quietly rewritten.** It previously read *"$20/min, $30, $30 are
real and rendered; Motion Graphics has no rate."* **That is not what the file
contains.** Re-read 2026-09-06:

```
line 482  <td class="rate-table__amount">$25</td>
line 487  <td class="rate-table__amount">$25</td>
line 492  <td class="rate-table__amount">$25</td>
line 497  <td class="rate-table__amount">$25</td>
```

**Plain text. No `.todo` bracket. One flat $25 against four different units** —
per minute of long-form, per reel, per minute of motion graphics, and per
thumbnail. A buyer cannot tell it is a placeholder, because nothing on the page
says so.

**Masud's real figures are in that file's own comments** (lines 275–281, 463–464)
— *"Short video is $30. Long video is $20 per minute. Thumbnail is $30 per
thumbnail."* — beside T6's own note to itself: *"REPLACE THE FOUR PLACEHOLDER $25
FIGURES WITH REAL RATES."* **It shipped anyway.**

**`instructions.md` §5 rule 1: *"No placeholder that a client could quote back at
you. No demo pricing."*** The live site's fake `$6.99` block is the reason this
rebuild exists. **This is the same failure, in the same place, on the new site.**

⚠️ **T4 reports it is committed and pushed** — commit `8109344`, *"Placeholder
flat rate…"*, 2026-09-05 — to a **public** repo under R01, and live on
`videoeditor-agency-v2.pages.dev/pricing/`.
**T10 cannot verify this.** The sandbox has no route to GitHub. **Masud
verifies in ten seconds:**
**https://videoeditor-agency-v2.pages.dev/pricing/** — if the table shows `$25`
four times, it is public.

**Contained, not safe:** `robots.txt` is closed, every page carries `noindex`,
and no custom domain is attached. It is not findable by search. **It is readable
by anyone with the link, and the repo is public.**

**Not blocked on anything.** Masud gave the numbers on 2026-09-05. It is a
four-cell edit — and the fourth cell, Motion Graphics, is the one rate he has
never given, so it becomes a `[[bracket]]`, not a number.

| Row | Renders now | Should render |
|---|---|---|
| Long-Form Video Editing | `$25` | **$20** per minute of final output |
| Short-Form Reels & TikToks | `$25` | **$30** per video |
| Motion Graphics & Animation | `$25` | ⛔ **`[[NOT GIVEN]]`** — never ruled |
| Thumbnail Design | `$25` | **$30** per thumbnail |

⚠️ **The file is `site\pricing\index.html`, which THREAD-PLAN.md §4 gives to T6
exclusively.** T10 has not edited it. **Either reopen T6, or authorise a
cross-Rule-1 edit explicitly** — the same authorisation T8 was given to import
the copy doc.

Also still open on that page: the subtext line, the third inclusion, a second
FAQ, and **the seven unpriced services of eleven** (R28).

⚠️ **And a business question T6 raised in its own comments:** at $30 per
short-form edit and $30 per thumbnail, **a full reel and a single still cost the
same.** They sit two rows apart in one small table. A buyer will notice.

### 7. `sitemap.xml` is missing `/portfolio/`

It lists eleven URLs and says `/portfolio/` is absent because the page does not
exist. **It exists.** Twelve live pages, eleven listed. → **T9's file.**

### 8. The template's nav still calls `/portfolio/` a dead page

`_template\page-template.html` line 190: *"Still text because `/portfolio/`
genuinely does not exist."* It does. That span should be a link, and the "For"
dropdown still needs T3. → **T3 or T9**, before the resync in item 2, so both
land in one pass.

### 9. `[[R30 — full registered address]]` and `[[WHITE-LABEL]]`

The address blocks `/privacy/` §1 and `/terms/` §1 — a data controller and a
contracting party have to be identifiable, and "Dhaka, Bangladesh" is enough on
`/contact/` but not there. `[[WHITE-LABEL]]` is a visible bracket on
`/marketers-and-agencies/`.

---

### Not a blocker, but decide it before the switch, not after — R07

**The portfolio ships as 57 stills nobody can play.** T5 built the
`<details>`-wrapped player `THREAD-PLAN.md` §6 specifies and left it **off**,
correctly: every video's YouTube title carries the client's name
(`Podcast-Editing-Jay Macallister-…`), the embedded player displays that title,
and **R07 is open**. Linking out instead changes nothing — YouTube shows the
same title.

**T10 does not call this a launch blocker.** The page is honest, complete, and
far better than what is live today. **But it is the difference between a
portfolio and a contact sheet**, on the page `THREAD-PLAN.md` §6 calls *"the
whole point of the site"* and the page 60 of 61 redirects land on.

**Two ways out, both Masud's, either one then `PLAYERS = true` and re-run:**
rename the YouTube titles to drop client names, or rule R07's nineteen names one
at a time.

### Recorded, not blocking

- **`.section` is overridden in 5 page-scoped `<style>` blocks** — `index.html`
  and the four audience pages — adding `margin-block` on top of `site.css`'s
  `padding-block`. The footer carries `class="site-footer section"`, so those
  five pages get spacing the other nine do not. **A visual inconsistency, not a
  break.** `/services/` and `/pricing/` have already been cleaned. → **T3.**
- **R29 — no white logo exists.** It does not block launch, because **no page
  renders a logo image**; the header is a type wordmark. It blocks the day
  somebody wants the mark on the page, and it blocks `og:image`.
- **No Open Graph tags anywhere.** A link shared to WhatsApp or LinkedIn will
  show no card. Not a rule in `instructions.md` §5; worth one pass after launch.
- **Q-BASE is closed, not open.** The old runbook asked for traffic and enquiry
  baselines before cutover. **R02 declined the Search Console export** and R26b
  takes the old site dark. There is no baseline to capture and there never will
  be. Recorded as an accepted cost rather than left as a question nobody can
  answer.

---

## 7. Cutover — the sequence

**Do not start until every item in §6 is clear.** Steps 1–3 are reversible.
Step 4 is the switch. Step 5 is one-way.

### Step 0 — take the old site dark (R26b, ruled 2026-09-03, still not done)

Cloudflare → Workers & Pages → **`mangomedia-videoeditor`** → **Custom domains**
→ remove `videoeditor.agency` and `www.videoeditor.agency`.

⚠️ **This is not only a ruling — it is a hard precondition of step 4.**
Cloudflare will not attach the same custom domain to two Pages projects. The
domain has to leave the old project before it can join the new one.

**It is reversible:** adding the domains back restores the old site, and that is
the rollback in §8. **Do not delete the project.**

⚠️ **Do not touch the DNS records.** The zone carries live `MX` records — the
domain's email. Nothing here goes near them.

**R26b was ruled 2026-09-03 as *"Now — take it down today."* Three separate
threads reported the site still live on 2026-09-05.** Between now and cutover the
live homepage continues to show a `$6.99/month` web-hosting price, six Lorem
ipsum FAQ answers, `0 +` clients and the typo "100+ Client Servered".

### Step 1 — final QA, on staging, with fresh eyes

**Run all four, in this order.** The first is what fixes §6 item 1 and it must
come before the others.

```
cd site\
node tools\build-portfolio.mjs --assets   ← copies the 57 stills in. FIRST, once
node tools\sync-shared.mjs
node tools\sync-shared.mjs --check        ← must print "No drift"
node tools\build-portfolio.mjs --check    ← must print "No change"
```
Then commit, push, and open **`videoeditor-agency-v2.pages.dev`** and walk it:

- Click every nav item on **three different pages**. Item 2 in §6 is exactly the
  class of fault a spot-check on one page misses.
- Open `/portfolio/` and confirm **57 images actually render**.
- Search the rendered pages for `[[` — **zero results** is the pass condition.
- Ring the number on `/contact/` from a phone that is not yours.
- Send a test email to the published address and confirm it arrives.
- Load one page on a phone.

### Step 2 — lift `noindex`, page by page

**Twelve files. `404.html` is not on this list and never will be** — an indexed
error page competes in search with the pages it exists to apologise for.

Delete `<meta name="robots" content="noindex, nofollow">` from each, one at a
time, ticking as you go:

```
[ ] site\index.html                        line 61
[ ] site\services\index.html               line 42
[ ] site\pricing\index.html                line 46
[ ] site\portfolio\index.html              line 33
[ ] site\coaches\index.html                line 35
[ ] site\content-creators\index.html       line 27
[ ] site\business-owners\index.html        line 30
[ ] site\marketers-and-agencies\index.html line 29
[ ] site\about\index.html                  line 39
[ ] site\contact\index.html                line 36
[ ] site\privacy\index.html                line 37
[ ] site\terms\index.html                  line 31

[ ] site\404.html — LEAVE IT. Confirm it is still there.
[ ] site\_template\page-template.html — leave it, so new pages start closed
```

⚠️ **`--check` will not verify this.** `sync-shared.mjs` touches the SHARED
blocks only; it never reads the `<head>`. It will print "No drift" whether this
list is done or not. **Re-grep `site\` for `name="robots"` afterwards: the only
survivors should be `404.html` and the template.**

Line numbers are from 2026-09-05 and shift if a page is edited. Grep, do not
trust them.

### Step 3 — open `robots.txt`

**Only after step 2.** A crawler blocked by `robots.txt` cannot read the
`noindex` tag, so opening this first would do nothing and closing it later would
lock in whatever had been indexed.

Replace the whole file's active block with:

```
User-agent: *
Allow: /

Sitemap: https://videoeditor.agency/sitemap.xml
```

Then confirm `sitemap.xml` lists **twelve** URLs — `/portfolio/` included, per
§6 item 7 — and that `/404.html` is absent.

Commit and push steps 1–3 together or separately; both are fine. **The domain
is still not switched.**

### Step 4 — the switch

Cloudflare → Workers & Pages → **`videoeditor-agency-v2`** → Custom domains →
add **`videoeditor.agency`** and **`www.videoeditor.agency`**.

Cloudflare rewrites the `www` CNAME (currently proxied at
`mangomedia-videoeditor.pages.dev`) to the new project itself. Certificates
issue in a few minutes; a brief certificate error immediately after adding the
domain is normal and is not a reason to roll back.

**Within 15 minutes, check by hand:**

```
[ ] https://videoeditor.agency/            loads the new homepage
[ ] https://www.videoeditor.agency/        loads, or redirects to the apex
[ ] https://videoeditor.agency/portfolio/  loads, images render
[ ] https://videoeditor.agency/youtube-videos/     301s to /portfolio/
[ ] https://videoeditor.agency/business-cat/       301s to /portfolio/
[ ] https://videoeditor.agency/video-type/         301s to /portfolio/
[ ] https://videoeditor.agency/blog/               301s to /
[ ] https://videoeditor.agency/this-is-our-title/  301s to /
[ ] https://videoeditor.agency/coaches/    loads — must NOT redirect (R22)
[ ] https://videoeditor.agency/nonsense/   shows the 404 page
[ ] https://videoeditor.agency/robots.txt  says Allow: /
[ ] https://videoeditor.agency/sitemap.xml parses, 12 URLs
[ ] https://videoeditor.agency/02-Decisions/RULINGS.md  → 404
```

⚠️ **That last one is the important one.** If it returns the file, the build
output directory is wrong and the whole research folder is being served.
**Fix it before anything else.**

Also send yourself an email at the domain — confirming step 0 did not disturb
the `MX` records.

### Step 5 — watch, then delete

**24 hours:** re-run the checklist above once more. Add the property in Google
Search Console, submit the sitemap, and check Coverage for crawl errors.

**[[HOW LONG BEFORE THE OLD ARTEFACTS ARE DELETED? — Masud.]]** T10 will not
put a number in his name. **The rollback in §8 works only while
`mangomedia-videoeditor` and `submangomedia/videoeditor-agency` still exist.**
T10's recommendation, labelled an **inference**: **30 days.** They cost nothing
to keep and they are the only way back.

Then, and only then: delete the Pages project `mangomedia-videoeditor`, delete
the repo `submangomedia/videoeditor-agency`, and optionally rename
`videoeditor-agency-v2` to `videoeditor-agency`.

⚠️ **Renaming the repo changes nothing about the Pages project's name** and is
cosmetic. If you rename, re-verify the Pages build afterwards.

---

## 8. Rollback — written before the switch, not after

### What rollback actually is

**Not "restore WordPress."** There is no WordPress (`RULINGS.md` §2 C6). The old
site is a Cloudflare Pages deployment of a static scrape.

**Rollback is: move the two custom domains back to `mangomedia-videoeditor`.**

```
1. Cloudflare → Workers & Pages → videoeditor-agency-v2 → Custom domains
   → remove videoeditor.agency and www.videoeditor.agency
2. Cloudflare → Workers & Pages → mangomedia-videoeditor → Custom domains
   → add videoeditor.agency and www.videoeditor.agency
3. Wait for certificates. Verify https://videoeditor.agency/ loads the old site.
```

**Two or three minutes of clicking. No DNS edit. No deploy. No git.**

### The one thing that makes it impossible

**Deleting `mangomedia-videoeditor` or its repo.** That is why deletion is step
5 in §7, after the watch period, and why it is called out here as well as there.
If someone deletes them to tidy up, there is no rollback — the old site's HTML
exists nowhere else.

### What rollback restores, stated honestly

**The old site, with all of its faults.** The `$6.99/month` web-hosting price,
six Lorem ipsum FAQ answers, `0 +` clients, `0 K` videos, "100+ Client
Servered", the recruitment-template placeholder logos and a paragraph of an
Elementor plugin's own marketing copy.

**So rollback is a worse site, not a safe one.** It is the right move for a
hard failure — the domain not resolving, certificates not issuing, every page
500ing. **It is the wrong move for a bracket somebody spots on `/pricing/`**,
which is fixed by editing one file and pushing, in about the same elapsed time.

⚠️ **And if step 0 has already run, the old site is dark anyway.** Between step
0 and step 4 the domain resolves to nothing. Rolling back during that window
restores a page nobody wants; rolling forward is almost always the better move.

### Decide before the switch, not during

| Symptom | Action |
|---|---|
| Domain does not resolve, or certificates will not issue after 30 minutes | **Roll back.** §8 |
| Every page 500s or serves blank | **Roll back.** |
| `videoeditor.agency/02-Decisions/…` returns a file | **Do not roll back.** Fix the build output directory. Roll back only if it cannot be fixed within the hour |
| One page is broken, a bracket is visible, an image is missing | **Roll forward.** Edit, commit, push. Faster than a rollback and it ends better |
| A redirect misfires | **Roll forward.** `_redirects` is one file |
| Search Console shows crawl errors on day 2 | **Neither.** Read them first — most are the old URLs being re-crawled and correctly 301ing |

---

## 9. Open items on deployment

| | Item | State |
|---|---|---|
| Q-DNS | Registrar and DNS | ✅ **Closed.** Namecheap · Cloudflare zone in Masud's account · R03 |
| Q-REPO | Repo name and visibility | ✅ **Closed.** `submangomedia/videoeditor-agency-v2`, **public** per R01 |
| Q-FORM | Form backend | ✅ **Closed.** R13 — no form at launch |
| Q-BASE | Pre-cutover traffic baseline | ✅ **Closed as unobtainable.** R02 declined the export; R26b takes the site dark. Recorded as an accepted cost |
| **Q-KEEP** | **How long do the old repo and Pages project stay before deletion?** | ⛔ **OPEN.** §7 step 5. Blocks nothing until after launch, then blocks the tidy-up. T10 suggests 30 days — **an inference, not a ruling** |
| **Q-GIT** | **The repo is being cloned from a Google Drive folder.** `RULINGS.md` §6.3 warns that git inside a syncing Drive folder is a known source of corruption, and recommends cloning **outside** Drive | ⛔ **OPEN and unruled.** It is a workflow decision and it is Masud's |
| **Q-LAUNCH** | **Target launch date** — R20 | ⛔ **OPEN.** `instructions.md` §3's note on ruling 4 depends on it |

---

## 10. Documents that contradict this one

Named rather than silently overridden, per `instructions.md` §5 rule 6. **T10
owns this file only and has edited nothing else.**

| Says | Where | Contradicted by |
|---|---|---|
| The GitHub repo **must be private** | `instructions.md` §7 · `COWORK-PROJECT-INSTRUCTIONS.md` | **R01 — RULED PUBLIC**, 2026-09-03 |
| The output directory is *"the only thing keeping the research private"* | `instructions.md` §7 | R01. **Nothing keeps it private** |
| *"The live WordPress site is left alone"* · *"the WordPress site stays up"* | `instructions.md` §3 ruling 4 · `THREAD-PLAN.md` §2 | **`RULINGS.md` §2 C6 — there is no WordPress** |
| `/portfolio/` does not exist; 60 of 61 redirects misfire | `site\_redirects` §1 · `sitemap.xml` · `robots.txt` · `WORKLOG.md` T9b | **T5 shipped it.** Stale in three files T10 does not own → **T9** |
| `/contact/` publishes `hello@videoeditor.agency` | `WORKLOG.md` T7, finding 1 | **Stale.** It publishes the ruled Gmail address. Verified today |
| T9 lifts `noindex` page by page · T10 does `noindex` off | `THREAD-PLAN.md` §4 vs §5 | Unresolved. **T10 has taken it** — §7 step 2 — because it is a cutover action. `robots.txt` calls this an inference and asks whoever owns `THREAD-PLAN.md` to settle it in writing |
| The nav comment: *"NONE OF THE TEN PAGES EXISTS YET"* | 12 of 14 pages | Twelve exist. Fixed in the template, **not yet synced** → §6 item 2 |
