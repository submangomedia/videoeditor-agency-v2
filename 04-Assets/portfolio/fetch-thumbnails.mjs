// fetch-thumbnails.mjs — downloads one correctly-shaped thumbnail per portfolio item.
//
// WHY THIS EXISTS
//   YouTube's maxresdefault.jpg is always 1280x720. For a vertical video that is a
//   letterboxed 16:9 still, which is the wrong image for 56 of the 61 items in
//   02-Decisions\Portfolio-Catalogue.md. oardefault.jpg returns the ORIGINAL aspect
//   ratio instead — 1080x1350 or 1080x1920 — and exists for every vertical item.
//   The five genuinely landscape items have no oardefault, so they use maxresdefault,
//   which is the right shape for them.
//
//   Verified by measurement on 2026-09-03, not assumed. See the catalogue, finding 4.
//
// HOW TO RUN
//   cd "I:\My Drive\MANGO MEDIA - DEV\Projects\Video Editor\04-Assets\portfolio"
//   node fetch-thumbnails.mjs
//
//   Needs Node 18 or newer (for built-in fetch). No install, no dependencies.
//   Safe to re-run — it overwrites. Nothing here runs on Cloudflare; this is a local
//   tool, the same pattern as site\tools\sync-shared.mjs.
//
// OUTPUT
//   <VideoID>.jpg in this folder, one per item. 61 files expected.

import { writeFile } from "node:fs/promises";

// variant: "oar" = original aspect ratio (vertical items)
//          "max" = maxresdefault (the five genuinely landscape items)
const ITEMS = [
  ["HtF06XQq5VQ", "oar"], ["vQUZtcqNUVE", "oar"], ["ro11a9PRaVs", "oar"],
  ["Cdwn1cidxvE", "oar"], ["oL5SS-8LgVk", "oar"], ["ulOiBnEzNzw", "oar"],
  ["fKs9q1E9y94", "oar"], ["ggyM4XlELXo", "oar"], ["9lTVyaiEWMo", "max"],
  ["Bo5R1CDI7ok", "oar"], ["ImTQjAo486Q", "oar"], ["LmlOMKBNoew", "oar"],
  ["mIrb8pjJSuw", "oar"], ["K4DOxWjWhw4", "oar"], ["zCxBnpHJeWY", "oar"],
  ["2Ehpl9IE5HE", "oar"], ["pueZS7AXTUU", "oar"], ["BHgL_J-eMFU", "oar"],
  ["mdKx0eGpFbU", "oar"], ["0aap4alrgdk", "oar"], ["h-T_FVLYMiM", "oar"],
  ["GPegR9XaENI", "oar"], ["niSouAnFGR0", "oar"], ["S-cuYKmDmK4", "oar"],
  ["qQsZkf4QfyA", "oar"], ["A-51_t-9M1s", "oar"], ["xO5sNykXpTM", "oar"],
  ["J34kZwv0NDw", "oar"], ["WC8bbLrEzOc", "oar"], ["C1aP9YXVOFs", "oar"],
  ["q2hiA2g84YU", "oar"], ["1WQeMP875GM", "oar"], ["bT98FYI48mM", "oar"],
  ["Ptwyy3kOioc", "oar"], ["Wdh3BOftG5E", "oar"], ["IZIw8Q-z0ak", "oar"],
  ["gB5JBkmJ3So", "oar"], ["tXYLpEnnuCs", "oar"], ["LhHqpgKHfvE", "oar"],
  ["NxFnKPfNimQ", "oar"], ["_nt_Vt1rOaM", "oar"], ["vgKUxP8Wgtw", "oar"],
  ["P3lAp0aocO0", "oar"], ["ymfq-L9iLJw", "oar"], ["unWprrKQjqs", "oar"],
  ["1ctUzRbXVw4", "oar"], ["DDDVW6KUsQo", "oar"], ["r7v7nr6C2no", "oar"],
  ["q8Us_7ZMxqY", "max"], ["zb6qyP7zU78", "max"], ["GIbOpOMjF5w", "oar"],
  ["-HrZ7PmPtrg", "oar"], ["WmIXSZc9Omo", "oar"], ["wK8n9X4QLS8", "oar"],
  ["FGHLvZ8gv3g", "oar"], ["k5Uv7edbZJI", "oar"], ["6lePn7BX8J4", "oar"],
  // Found only in MangoMedia_Video_Embeds.xlsx. All four verified live 2026-09-03.
  ["_t9BaaYB-iA", "max"], ["dFIW4mG4lzI", "max"], ["UAKO3AR2lzM", "oar"],
  ["pUDVBhFLvAU", "oar"],
];

// SL 13 — Jay Macallister "MatthewShoutout", F7AuUoR3ip4 — is deliberately absent.
// That video returns HTTP 404. See the catalogue, finding 1.

const FILE = { oar: "oardefault.jpg", max: "maxresdefault.jpg" };

// YouTube serves a 120x90 grey placeholder (~1-2 KB) instead of a 404 when an image
// does not exist. Anything that small is a placeholder, not a thumbnail.
const MIN_BYTES = 5000;

let ok = 0, bad = 0;

for (const [id, variant] of ITEMS) {
  const url = `https://i.ytimg.com/vi/${id}/${FILE[variant]}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`FAIL  ${id}  HTTP ${res.status}  (${variant})`);
      bad++;
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < MIN_BYTES) {
      console.log(`FAIL  ${id}  placeholder image, ${buf.length} bytes  (${variant})`);
      bad++;
      continue;
    }
    await writeFile(`${id}.jpg`, buf);
    console.log(`ok    ${id}.jpg  ${(buf.length / 1024).toFixed(0)} KB  (${variant})`);
    ok++;
  } catch (err) {
    console.log(`FAIL  ${id}  ${err.message}`);
    bad++;
  }
}

console.log(`\n${ok} downloaded, ${bad} failed, ${ITEMS.length} attempted.`);
if (bad > 0) {
  console.log(
    "A failure usually means that video's visibility changed on YouTube.\n" +
    "Check the ID against 02-Decisions\\Portfolio-Catalogue.md before assuming the\n" +
    "script is wrong."
  );
}
