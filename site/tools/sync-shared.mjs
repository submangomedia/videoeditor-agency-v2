/*
 * ============================================================================
 * sync-shared.mjs — keep the nav and footer identical across every page
 * ============================================================================
 *
 * WHAT THIS IS, AND WHAT IT IS NOT
 *
 * This is NOT a build step and NOT a framework. Cloudflare Pages never runs it.
 * The build command on Cloudflare stays EMPTY.
 *
 * It edits the real page files IN PLACE. Before it runs and after it runs, every
 * page in this repo is complete, valid, servable HTML. What is in the repository
 * is still what is served. If this script were deleted tomorrow the site would
 * carry on working and you would edit the nav by hand.
 *
 * It exists because of the one real cost of plain HTML: with no components, the
 * nav and footer are duplicated in all ten page files, and the failure mode is
 * SILENT — one page keeps the old nav and nobody notices for months.
 *
 *
 * HOW TO USE IT
 *
 *   node tools/sync-shared.mjs           push the template's header and footer
 *                                        into every page
 *
 *   node tools/sync-shared.mjs --check   report any page that has drifted,
 *                                        change nothing, exit 1 if any drift
 *
 * Run it from inside the site/ folder — the folder this tools/ directory sits
 * in. It only ever touches .html files below that folder, so it cannot see or
 * modify the research documents in the parent directory.
 *
 * ⚠️ RUN BOTH, IN THAT ORDER, AT THE END OF EVERY THREAD. --check must print
 *    "No drift" before Masud pushes. See THREAD-PLAN.md §1 Rule 4.
 *
 * The source of truth is the SHARED block inside _template/page-template.html.
 * Edit it there. Never edit a generated block inside a page file — the next run
 * overwrites it without warning.
 *
 * ⚠️ ONLY T3 AND T9 MAY EDIT _template/page-template.html. THREAD-PLAN.md §1
 *    Rule 2. A page thread that edits it rewrites the nav on nine pages it does
 *    not own, and this script will then happily propagate that everywhere.
 *
 * Requires Node, which is a single installer from nodejs.org. No npm install,
 * no node_modules, no dependencies. This file is the whole tool.
 * ============================================================================
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEMPLATE = join(REPO, '_template', 'page-template.html');

/* Folders never rewritten. _template is the source; the rest are noise. */
const SKIP_DIRS = new Set(['_template', '.git', 'node_modules', 'assets', 'tools']);

const BLOCKS = ['HEADER', 'FOOTER'];

const CHECK_ONLY = process.argv.includes('--check');


/* ---------------------------------------------------------------------------
 * Match a whole SHARED block: from the opening START comment through the
 * closing END comment. Written loosely on purpose so the decorative "====="
 * padding and the em dash in the markers cannot break it.
 * ------------------------------------------------------------------------- */
function blockRegex(name) {
  return new RegExp(
    `<!--[^\\n]*SHARED:${name}[^\\n]*START[\\s\\S]*?<!--[^\\n]*SHARED:${name}[^\\n]*END[\\s\\S]*?-->`
  );
}

/* Every .html file under the repo, except the skipped folders. */
function findPages(dir = REPO, found = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (!SKIP_DIRS.has(entry)) findPages(full, found);
    } else if (entry.endsWith('.html')) {
      found.push(full);
    }
  }
  return found;
}

/* contact/index.html -> /contact/     index.html -> / */
function urlPathFor(file) {
  const rel = relative(REPO, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/*
 * The ONE legitimate per-page difference inside a shared block: the current
 * page's own nav link carries aria-current="page". That is an accessibility
 * signal, not decoration, so it is applied here rather than dropped to keep the
 * blocks byte-identical.
 */
function applyAriaCurrent(block, urlPath) {
  return block.replace(
    new RegExp(`(<a href="${escapeRe(urlPath)}")(?![^>]*aria-current)`),
    '$1 aria-current="page"'
  );
}

/* Compare ignoring aria-current, so the marker above never reads as drift. */
function normalise(block) {
  return block.replace(/\s*aria-current="page"/g, '');
}


/* --------------------------------------------------------------------------- */

const template = readFileSync(TEMPLATE, 'utf8');

const source = {};
for (const name of BLOCKS) {
  const found = template.match(blockRegex(name));
  if (!found) {
    console.error(`FAIL  _template/page-template.html has no SHARED:${name} block.`);
    process.exit(1);
  }
  source[name] = found[0];
}

const pages = findPages();
let drifted = 0;
let written = 0;

for (const file of pages) {
  const before = readFileSync(file, 'utf8');
  const urlPath = urlPathFor(file);
  let after = before;
  const missing = [];

  for (const name of BLOCKS) {
    const rx = blockRegex(name);
    if (!rx.test(after)) {
      missing.push(name);
      continue;
    }
    after = after.replace(rx, () => applyAriaCurrent(source[name], urlPath));
  }

  const rel = relative(REPO, file).split(sep).join('/');

  if (missing.length) {
    console.error(`FAIL  ${rel} — no SHARED:${missing.join(' and SHARED:')} block. ` +
                  `Was this page copied from _template/page-template.html?`);
    drifted++;
    continue;
  }

  if (normalise(after) !== normalise(before)) {
    drifted++;
    if (CHECK_ONLY) {
      console.error(`DRIFT ${rel} — its nav or footer no longer matches the template.`);
    } else {
      writeFileSync(file, after, 'utf8');
      console.log(`FIXED ${rel}`);
      written++;
    }
  } else if (after !== before) {
    /* Only aria-current moved. Still worth writing, never worth reporting
       as drift. */
    if (!CHECK_ONLY) writeFileSync(file, after, 'utf8');
  }
}

console.log(`\n${pages.length} page(s) checked against _template/page-template.html.`);

if (CHECK_ONLY) {
  if (drifted) {
    console.error(`${drifted} page(s) have drifted. Run: node tools/sync-shared.mjs`);
    process.exit(1);
  }
  console.log('No drift. Every page carries the canonical nav and footer.');
} else {
  console.log(written ? `${written} page(s) updated.` : 'Nothing needed changing.');
}
