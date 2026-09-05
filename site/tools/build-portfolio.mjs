/*
 * ============================================================================
 * build-portfolio.mjs — write the portfolio grid into portfolio/index.html
 * ============================================================================
 *
 * WHAT THIS IS, AND WHAT IT IS NOT
 *
 * Not a build step. Cloudflare Pages never runs it and the build command stays
 * EMPTY. It edits portfolio/index.html IN PLACE, between two marker comments,
 * exactly as tools/sync-shared.mjs edits the nav and the footer. Before it runs
 * and after it runs, portfolio/index.html is complete, valid, servable HTML.
 * Delete this file tomorrow and the page carries on working — you would edit
 * cards by hand.
 *
 *   node tools/build-portfolio.mjs            rewrite the grid
 *   node tools/build-portfolio.mjs --check    report drift, change nothing,
 *                                             exit 1 if the page is stale
 *   node tools/build-portfolio.mjs --assets   ALSO copy the stills from
 *                                             ../04-Assets/portfolio/ into
 *                                             assets/img/portfolio/
 *
 * Run it from inside site/. Requires Node and nothing else. No npm install, no
 * node_modules, no dependencies. This file is the whole tool.
 *
 * ⚠️ RUN --assets ONCE, on a fresh clone. The stills live in 04-Assets/, which
 *    is OUTSIDE site/ and is therefore never served. Nothing renders until they
 *    are copied in. This is the one step a new machine needs.
 *
 *
 * ⚠️ WHERE THE DATA COMES FROM — A CONTRADICTION, NAMED NOT RESOLVED
 *
 *   THREAD-PLAN.md §6        "tools\build-portfolio.mjs reads a CSV export of
 *                            the Sheet… The Sheet becomes the source of truth."
 *   Portfolio-Catalogue.md   §1 states it SUPERSEDES the sheet for portfolio
 *   §1, §5, finding 5        data. Source A mis-tags six clients, records no
 *                            orientation at all, carries one dead video, and
 *                            omits four items.
 *
 * Both cannot hold. A script that reads today's Sheet would put KUPKE
 * (hypnotherapy) and TheRavio (posture content) back under "Doctors and
 * Medical" — which Portfolio-Catalogue.md finding 5 calls a claim risk, not a
 * tidy-up — onto a public page. So ITEMS below is transcribed from the
 * catalogue, which is the measured, reconciled source.
 *
 * ⚠️ T5's READING, LABELLED AS SUCH, AND REVERSIBLE ON SIGHT:
 *    The Sheet path is worth keeping. It is the only answer this project has
 *    to "how does a non-coder update a static site." THE FIX IS TO CORRECT THE
 *    SHEET FROM THE CATALOGUE, not to abandon the pattern. Once the Sheet
 *    carries the corrected industries and the measured orientations, this file
 *    should read it and the Sheet governs again. Until then, reading it would
 *    reintroduce every error T2 measured out.
 *    → Masud rules. Recorded in WORKLOG.md 2026-09-05.
 *
 *
 * ⚠️ NO CLIENT NAME APPEARS IN THIS FILE, AND THAT IS DELIBERATE
 *
 * Everything under site/ is public TWICE OVER: R01 makes the repository public,
 * and Cloudflare serves this folder at videoeditor.agency. A data file here
 * carrying a Client column would publish nineteen client names ON THE LIVE
 * DOMAIN — which is a different and worse act than committing them to a repo,
 * and R27 ruled on the second, not the first.
 *
 * The Client column stays in 02-Decisions/Portfolio-Catalogue.md, which is
 * outside site/ and is never served. Rows here are keyed by YouTube ID.
 *
 *
 * ⚠️ PLAYERS ARE OFF. R07 IS OPEN. READ THIS BEFORE FLIPPING THE FLAG.
 *
 * THREAD-PLAN.md §6 rules that a portfolio item is a still inside a native
 * <details> with the iframe in the closed panel, so nothing is fetched from
 * YouTube and no cookie is set until a visitor clicks. That pattern is CORRECT
 * and it is built below.
 *
 * It cannot ship yet. Portfolio-Catalogue.md finding 6 read the real YouTube
 * titles: "Podcast-Editing-Jay Macallister-Best Software-…", "KIDS SHORT-
 * Editing-Baby Billion-…". The embedded player displays the video's own title.
 * An unnamed card that opens a player naming the client has protected nothing,
 * and R07 — permission, client by client — is still OPEN. Linking out instead
 * does not help: YouTube shows the same title.
 *
 * PLAYERS turns on when EITHER of these is true, and not before:
 *   · the YouTube titles are renamed to drop client names, or
 *   · R07 is ruled and the named clients have said yes.
 * ============================================================================
 */

import {
  readFileSync, writeFileSync, existsSync,
  mkdirSync, readdirSync, copyFileSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGE = join(SITE, 'portfolio', 'index.html');

/* 04-Assets/ is the staging area instructions.md §7 names. It sits OUTSIDE
   site/, so it is never served. --assets copies the stills in. */
const ASSETS_SRC = join(SITE, '..', '04-Assets', 'portfolio');
const ASSETS_DST = join(SITE, 'assets', 'img', 'portfolio');

const CHECK_ONLY = process.argv.includes('--check');
const DO_ASSETS  = process.argv.includes('--assets');


/* ---------------------------------------------------------------------------
 * FLAGS
 * ------------------------------------------------------------------------- */

/* ⚠️ See the header block. Do not set this true to "see how it looks". */
const PLAYERS = false;

/* The four items that exist only in source B. Portfolio-Catalogue.md §5b: no
   client identity, industry tags read off the video's own title and marked
   "provisional… must not become filters on a public page without Masud
   confirming each", and for two of them the ONLY available title IS a company
   name — "Clothera Sourcing Limited", "Purrly cat food". Publishing those
   titles publishes a company name nobody has permission for.
   Held back, not deleted. Answer Portfolio-Catalogue.md §8 item 7, give the
   four real titles, then add them to ITEMS. */
const INCLUDE_UNCONFIRMED = false;


/* ---------------------------------------------------------------------------
 * THE DATA — transcribed from 02-Decisions/Portfolio-Catalogue.md §5a
 *
 * s     SHAPE, measured by T2 against YouTube on 2026-09-03. NOT derivable
 *       from the link form — finding 3 records two items an earlier audit
 *       called landscape that are in fact 9:16.
 * i     INDUSTRY, already corrected. Six rows in source A were mis-tagged;
 *       finding 5 lists them. Two of the six were claim risk, not tidying.
 * t     TITLE, with the client name removed, per Portfolio-Catalogue.md §5.
 *       Where the catalogue's own title still carried a person or a brand,
 *       it is neutralised here — the four are marked NEUTRALISED below.
 * slug  the Website doc's taxonomy slug. RESERVED FOR T9 and unused at render
 *       time: anchors are built from the label instead (see anchorFor), because
 *       four of the fourteen industries in use have no slug recorded anywhere
 *       and half-using the doc's slugs would imply these anchors are future
 *       URLs. They are not. They are page-local ids.
 *
 * ⚠️ SL 13 — "MatthewShoutout", F7AuUoR3ip4 — IS ABSENT ON PURPOSE. HTTP 404,
 *    confirmed two independent ways. Portfolio-Catalogue.md §9 item 5: do not
 *    build a card for it.
 * ------------------------------------------------------------------------- */

const SHAPES = {
  '4:5':  { w: 1080, h: 1350 },
  '9:16': { w: 1080, h: 1920 },
  '1012': { w: 1012, h: 1920 },  /* three Baby Billion shorts. NOT exactly 9:16 */
  '16:9': { w: 1280, h: 720  },
};

const ITEMS = [
  { id: 'fKs9q1E9y94', t: 'Medical explainer showreel', s: '4:5', i: 'Healthcare & Medical', f: 'Explainer Video', slug: 'healthcare-video', feat: 1, o: 1 },
  { id: 'HtF06XQq5VQ', t: 'Law podcast intro', s: '4:5', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 2, o: 2 },
  { id: 'ggyM4XlELXo', t: 'Best software', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 24 },
  { id: '9lTVyaiEWMo', t: 'Favorite tech', s: '16:9', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 25 },
  { id: 'Bo5R1CDI7ok', t: 'Fear of AI', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 26 },
  { id: 'ImTQjAo486Q', t: 'Goal budget', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 27 },
  /* NEUTRALISED — catalogue title "LVRGAl" may be a brand name. */
  { id: 'LmlOMKBNoew', t: 'Podcast clip', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 28 },
  /* NEUTRALISED — catalogue title "MPAC announcement"; MPAC is an organisation
     this project cannot identify, so the acronym is dropped rather than
     printed as though it were understood. */
  { id: 'mIrb8pjJSuw', t: 'Podcast clip — announcement', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 29 },
  { id: 'K4DOxWjWhw4', t: 'Productivity myth', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 30 },
  { id: 'zCxBnpHJeWY', t: 'Professional group lessons', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 31 },
  { id: '2Ehpl9IE5HE', t: 'Sora and C2PA', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 32 },
  { id: 'pueZS7AXTUU', t: 'Value anchors', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 33 },
  { id: 'BHgL_J-eMFU', t: 'What I learned working with lawyers', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 34 },
  { id: 'mdKx0eGpFbU', t: 'Working with lawyers', s: '9:16', i: 'Legal & Law Firm', f: 'Podcast & Interview', slug: 'law-firm-video', feat: 0, o: 35 },

  /* CORRECTED from "E-commerce" in source A. Finding 5. */
  { id: 'IZIw8Q-z0ak', t: 'Cyber-security product explainer', s: '4:5', i: 'SaaS & Technology', f: 'Explainer Video', slug: 'saas-technology-video', feat: 3, o: 3 },

  { id: 'ulOiBnEzNzw', t: 'Real estate floor plan', s: '4:5', i: 'Real Estate', f: 'Explainer Video', slug: 'real-estate-video', feat: 4, o: 4 },

  { id: 'LhHqpgKHfvE', t: 'Foodie influencer', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 5, o: 5 },
  { id: 'NxFnKPfNimQ', t: 'Function & event inquiries', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 53 },
  { id: '_nt_Vt1rOaM', t: 'Turning influencer posts into customers', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 54 },
  { id: 'vgKUxP8Wgtw', t: 'How to use Google Ads', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 55 },
  /* The "3x" and the "90%" below are claims made by the CLIENT, inside the
     client's own video, and the card reports the video's subject. They are not
     VEA's claims about VEA. Portfolio-Catalogue.md SL 44 and SL 49 say so. */
  { id: 'P3lAp0aocO0', t: 'Making customers return 3x more', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 56 },
  { id: 'ymfq-L9iLJw', t: 'Free restaurant posts', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 57 },
  { id: 'unWprrKQjqs', t: 'VIP customer lists', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 58 },
  { id: '1ctUzRbXVw4', t: 'The Google Reviews hack', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 59 },
  { id: 'DDDVW6KUsQo', t: 'The Instagram ad strategy', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 60 },
  { id: 'r7v7nr6C2no', t: 'Why 90% of restaurant ads fail', s: '9:16', i: 'Advertising & Ad Agency', f: 'Short-Form (Reels & Shorts)', slug: 'ad-agency-video', feat: 0, o: 61 },

  /* CORRECTED from "Event Planners, Creative Agency". It is a coaching
     business FOR the wedding industry, not an event-planning company.
     Finding 5. */
  { id: '0aap4alrgdk', t: 'Wedding industry CEO course', s: '4:5', i: 'Business & Personal Branding', f: 'Online Course & E-Learning', slug: 'personal-branding-video', feat: 6, o: 6 },

  /* CORRECTED — "Restaurant & Food" dropped. It was a copy-paste artefact in
     source A, unsupported by source C and by both video titles. Finding 5. */
  { id: 'q8Us_7ZMxqY', t: 'Story arc, part one', s: '16:9', i: 'YouTube Channel', f: 'Online Course & E-Learning', slug: 'youtube-video-editing', feat: 7, o: 7 },
  { id: 'zb6qyP7zU78', t: 'Story arc, part two', s: '16:9', i: 'YouTube Channel', f: 'Online Course & E-Learning', slug: 'youtube-video-editing', feat: 0, o: 62 },

  { id: 'GIbOpOMjF5w', t: 'Kids short 02', s: '1012', i: 'Education & Coaching', f: 'Short-Form (Reels & Shorts)', slug: 'education-coaching-video', feat: 8, o: 8 },
  { id: 'vQUZtcqNUVE', t: 'Online course showreel', s: '4:5', i: 'Education & Coaching', f: 'Online Course & E-Learning', slug: 'education-coaching-video', feat: 0, o: 20 },
  /* ⚠️ MISFILED, KNOWINGLY. This belongs in "Manufacturing & Industrial",
     which does not exist in the 28-list. Portfolio-Catalogue.md §4c asks for
     that row. Filed here on the catalogue's own interim instruction, NOT
     because it fits. Move it the day the row exists. */
  { id: 'Cdwn1cidxvE', t: 'Tools & DIY tutorial showreel', s: '4:5', i: 'Education & Coaching', f: 'Tutorial & How-To', slug: 'education-coaching-video', feat: 0, o: 22 },
  /* ⚠️ The id begins with a hyphen. Quote it in any CSV, and in any shell
     command, or it is read as a flag. */
  { id: '-HrZ7PmPtrg', t: 'Kids short 03', s: '1012', i: 'Education & Coaching', f: 'Short-Form (Reels & Shorts)', slug: 'education-coaching-video', feat: 0, o: 63 },
  { id: 'WmIXSZc9Omo', t: 'Mystery letter', s: '9:16', i: 'Education & Coaching', f: 'Short-Form (Reels & Shorts)', slug: 'education-coaching-video', feat: 0, o: 64 },
  { id: 'wK8n9X4QLS8', t: 'Never procrastinate', s: '9:16', i: 'Education & Coaching', f: 'Short-Form (Reels & Shorts)', slug: 'education-coaching-video', feat: 0, o: 65 },
  { id: 'FGHLvZ8gv3g', t: 'Germs experiment', s: '9:16', i: 'Education & Coaching', f: 'Short-Form (Reels & Shorts)', slug: 'education-coaching-video', feat: 0, o: 66 },
  { id: 'k5Uv7edbZJI', t: 'Prince keeps forgetting', s: '1012', i: 'Education & Coaching', f: 'Short-Form (Reels & Shorts)', slug: 'education-coaching-video', feat: 0, o: 67 },
  { id: '6lePn7BX8J4', t: 'Medicine skip', s: '9:16', i: 'Education & Coaching', f: 'Short-Form (Reels & Shorts)', slug: 'education-coaching-video', feat: 0, o: 68 },

  { id: 'ro11a9PRaVs', t: 'Podcast intros compilation', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 21 },
  /* NEUTRALISED ×7 — the catalogue titles these by their GUEST's name
     ("Podcast intro — Elizabeth Husserl"). The guest is a real named person
     and is not the client, so no consent covers them either way. Numbered
     neutrally: "1 of 7" is true of this set and asserts nothing about the
     show's own episode order. */
  { id: 'GPegR9XaENI', t: 'Podcast intro (1 of 7)', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 37 },
  { id: 'niSouAnFGR0', t: 'Podcast intro (2 of 7)', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 38 },
  { id: 'S-cuYKmDmK4', t: 'Podcast intro (3 of 7)', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 39 },
  { id: 'qQsZkf4QfyA', t: 'Podcast intro (4 of 7)', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 40 },
  { id: 'A-51_t-9M1s', t: 'Podcast intro (5 of 7)', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 41 },
  { id: 'xO5sNykXpTM', t: 'Podcast intro (6 of 7)', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 42 },
  { id: 'J34kZwv0NDw', t: 'Podcast intro (7 of 7)', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 43 },
  { id: 'WC8bbLrEzOc', t: 'Podcast shorts compilation', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 44 },
  { id: 'C1aP9YXVOFs', t: 'Podcast intro — gym', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 45 },
  /* NEUTRALISED — catalogue title "Podcast short — Jaymini", a guest's name. */
  { id: 'q2hiA2g84YU', t: 'Podcast short — guest episode', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 46 },
  { id: '1WQeMP875GM', t: 'Podcast intro — lawyer episode', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 47 },
  { id: 'bT98FYI48mM', t: 'Podcast short — gym', s: '4:5', i: 'Podcast Channel', f: 'Podcast & Interview', slug: 'podcast-video', feat: 0, o: 48 },

  /* CORRECTED from "Automotive/Vehicle, Machineries". Finding 5. */
  { id: 'oL5SS-8LgVk', t: 'Boat retreat & launch', s: '4:5', i: 'Non-Profit & Social Cause', f: 'Explainer Video', slug: 'nonprofit-video', feat: 0, o: 23 },

  /* CORRECTED from "Doctors and Medical". Hypnotherapy filed under clinical
     medicine on a public page is a claim risk, not a tidy-up. Finding 5.
     No slug: "Mental Health & Therapy" is one of the four rows in the 28-list
     that source A's vocabulary never used, so the Website doc records none. */
  { id: 'h-T_FVLYMiM', t: 'Hypnotherapy course showreel', s: '4:5', i: 'Mental Health & Therapy', f: 'Online Course & E-Learning', slug: '', feat: 0, o: 36 },

  { id: 'Ptwyy3kOioc', t: 'Cookie recipe tutorial', s: '4:5', i: 'Food & Restaurant', f: 'Tutorial & How-To', slug: 'food-restaurant-video', feat: 0, o: 49 },
  { id: 'Wdh3BOftG5E', t: 'Real estate bridge loan', s: '4:5', i: 'Finance & Investment', f: 'Talking Head Video', slug: 'finance-video', feat: 0, o: 50 },
  { id: 'tXYLpEnnuCs', t: 'Business education showreel', s: '4:5', i: 'Finance & Investment', f: 'Talking Head Video', slug: 'finance-video', feat: 0, o: 52 },

  /* CORRECTED — "Doctors and Medical" dropped. Posture and physio content is
     not doctor content. Same claim risk as the row above. Finding 5. */
  { id: 'gB5JBkmJ3So', t: 'Posture & position', s: '4:5', i: 'Fitness & Wellness', f: 'UGC Style Video', slug: 'fitness-wellness-video', feat: 0, o: 51 },
];

/* Portfolio-Catalogue.md §5b. Held back — see INCLUDE_UNCONFIRMED above. */
const UNCONFIRMED = [
  { id: '_t9BaaYB-iA', s: '16:9' }, { id: 'dFIW4mG4lzI', s: '16:9' },
  { id: 'UAKO3AR2lzM', s: '4:5'  }, { id: 'pUDVBhFLvAU', s: '9:16' },
];


/* ---------------------------------------------------------------------------
 * RENDER
 * ------------------------------------------------------------------------- */

const esc = (s) => s
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Anchors come from the LABEL, not the taxonomy slug. See the note on `slug`
   in the data block above. These are page-local ids, never URLs. */
const anchorFor = (label) => label
  .toLowerCase().replace(/&/g, 'and')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function card(it) {
  const dim = SHAPES[it.s];
  const meta = esc(it.i) + ' \u00b7 ' + esc(it.f);
  /* width and height are the MEASURED pixel dimensions, so the browser
     reserves the right box before the image arrives. No layout shift, and no
     JavaScript to prevent it. */
  const still = '<img src="/assets/img/portfolio/' + it.id + '.jpg" width="' +
    dim.w + '" height="' + dim.h + '" loading="lazy" decoding="async" alt="Video still \u2014 ' +
    esc(it.t) + '">';
  const label = '<h3 class="work__title">' + esc(it.t) + '</h3>\n' +
    '          <p class="work__meta">' + meta + '</p>';

  /* PLAYERS === false: the still and its label. Nothing that loads. */
  if (!PLAYERS) {
    return '        <li class="work__item">\n' +
      '          ' + still + '\n' +
      '          ' + label + '\n' +
      '        </li>';
  }

  /* PLAYERS === true: THREAD-PLAN.md §6 option B. A closed <details> never
     loads its contents, so nothing is fetched from YouTube and no cookie is
     set until the visitor asks. <details> is real HTML — no JavaScript. */
  return '        <li class="work__item">\n' +
    '          <details class="work__play">\n' +
    '            <summary>' + still + '\n' +
    '              ' + label + '\n' +
    '            </summary>\n' +
    '            <iframe src="https://www.youtube-nocookie.com/embed/' + it.id +
    '" width="' + dim.w + '" height="' + dim.h + '" title="' + esc(it.t) +
    '" loading="lazy" allowfullscreen></iframe>\n' +
    '          </details>\n' +
    '        </li>';
}

function section(label, items) {
  const a = anchorFor(label);
  const cards = items.slice().sort((x, y) => x.o - y.o).map(card).join('\n');
  return '      <section class="work__group" id="' + a + '" aria-labelledby="' + a + '-h">\n' +
    '        <h2 id="' + a + '-h">' + esc(label) +
    ' <span class="work__count">' + items.length + '</span></h2>\n' +
    '        <ul class="work">\n' + cards + '\n        </ul>\n      </section>';
}

function build() {
  const live = ITEMS.slice();
  const byIndustry = new Map();
  for (const it of live) {
    if (!byIndustry.has(it.i)) byIndustry.set(it.i, []);
    byIndustry.get(it.i).push(it);
  }

  /* Sections run largest first, then alphabetically. Stated so it reads as a
     rule rather than a preference: the substantial bodies of work lead, and
     eight industries genuinely have one item each. That is the real data, and
     padding it would be the disease this project exists to avoid. */
  const groups = [...byIndustry.entries()].sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])
  );

  /* Featured is Portfolio-Catalogue.md §5c, which labels itself an INFERENCE,
     not a ruling: eight items, no industry repeated, and all three shapes
     present so the grid is tested by its own content. Masud replaces any of
     them freely — nothing depends on the specific eight. */
  const featured = live.filter((i) => i.feat).sort((a, b) => a.feat - b.feat);

  const filters = groups.map(([label, items]) =>
    '            <li><a href="#' + anchorFor(label) + '">' + esc(label) +
    ' <span class="work__count">' + items.length + '</span></a></li>'
  ).join('\n');

  const out = [];
  out.push('      <p class="work__lede">' + live.length +
           ' edits, in ' + groups.length + ' industries. Every still below is a video we cut.</p>');
  out.push('');
  out.push('      <section class="work__group" id="selected" aria-labelledby="selected-h">\n' +
    '        <h2 id="selected-h">Selected work</h2>\n        <ul class="work">\n' +
    featured.map(card).join('\n') + '\n        </ul>\n      </section>');
  out.push('');
  out.push('      <nav class="work__filters" aria-labelledby="filters-h">\n' +
    '        <h2 id="filters-h">Browse by industry</h2>\n        <ul>\n' + filters +
    '\n        </ul>\n' +
    '        <p class="work__note">Filtering by video format is not built yet.\n' +
    '          <span class="todo">[[Two taxonomy rows are missing before every\n' +
    '          item has an honest home \u2014 Portfolio-Catalogue.md \u00a74c:\n' +
    '          "Manufacturing &amp; Industrial" in the 28-list, and "Showreel /\n' +
    '          Compilation" in the 14-list. 27 of these items are compilation\n' +
    '          showreels and no format in the list describes one.]]</span></p>\n' +
    '      </nav>');
  for (const [label, items] of groups) { out.push(''); out.push(section(label, items)); }
  return out.join('\n');
}


/* ---------------------------------------------------------------------------
 * WRITE
 * ------------------------------------------------------------------------- */

const MARKER = /(<!--[^\n]*PORTFOLIO:GRID[^\n]*START[\s\S]*?-->)[\s\S]*?(<!--[^\n]*PORTFOLIO:GRID[^\n]*END[^\n]*-->)/;

if (DO_ASSETS) {
  if (!existsSync(ASSETS_SRC)) {
    console.error('FAIL  ' + ASSETS_SRC + ' not found. Run 04-Assets/portfolio/fetch-thumbnails.mjs first.');
    process.exit(1);
  }
  mkdirSync(ASSETS_DST, { recursive: true });
  const want = new Set(ITEMS.map((i) => i.id + '.jpg'));
  let copied = 0; const missing = [];
  for (const name of want) {
    const from = join(ASSETS_SRC, name);
    if (!existsSync(from)) { missing.push(name); continue; }
    copyFileSync(from, join(ASSETS_DST, name));
    copied++;
  }
  const extra = readdirSync(ASSETS_SRC).filter((f) => f.endsWith('.jpg') && !want.has(f));
  console.log('ASSETS ' + copied + ' still(s) copied into assets/img/portfolio/.');
  if (missing.length) console.error('FAIL  ' + missing.length + ' missing: ' + missing.join(', '));
  if (extra.length) {
    console.log('       ' + extra.length + ' file(s) in 04-Assets are not used by the page —');
    console.log('       the four source-B items held back, and nothing else. Expected.');
  }
  if (missing.length) process.exit(1);
}

const before = readFileSync(PAGE, 'utf8');
if (!MARKER.test(before)) {
  console.error('FAIL  portfolio/index.html has no PORTFOLIO:GRID markers.');
  console.error('      Was the page overwritten from _template/page-template.html?');
  process.exit(1);
}
const after = before.replace(MARKER, (_m, open, close) => open + '\n' + build() + '\n' + close);

if (after === before) {
  console.log('No change. ' + ITEMS.length + ' item(s) already rendered.');
} else if (CHECK_ONLY) {
  console.error('DRIFT portfolio/index.html \u2014 its grid no longer matches this file.');
  console.error('Run: node tools/build-portfolio.mjs');
  process.exit(1);
} else {
  writeFileSync(PAGE, after, 'utf8');
  console.log('WROTE portfolio/index.html \u2014 ' + ITEMS.length + ' items in ' +
              new Set(ITEMS.map((i) => i.i)).size + ' industries.');
}

if (!PLAYERS) {
  console.log('NOTE  PLAYERS is off. Stills only \u2014 R07 is open and the YouTube');
  console.log('      titles name the clients. See the header block.');
}
if (!INCLUDE_UNCONFIRMED) {
  console.log('NOTE  ' + UNCONFIRMED.length + ' source-B items held back \u2014 no confirmed client.');
}
