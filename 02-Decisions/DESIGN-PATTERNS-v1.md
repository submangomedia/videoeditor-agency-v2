# Design Patterns v1 — the components every page uses

**Written by T4, 2026-09-05, from the patterns proved on `site\index.html`.**
**Owner: T3.** This file is a handover, not a ruling. T3 amends or rejects any of
it. It exists because the homepage now looks like the reference and no other page
does, and the reason is mechanical: these patterns live in one page's
`<style>` block instead of in the stylesheet.

**Read with:** `site.css` §0 (the palette ruling) · `instructions.md` §5 (the
binding rules) · `RULINGS.md` R19, R32.

---

## 0. The problem this file exists to end

Four pages now carry their own private copy of the same CSS:

| Rule | `/` | `/services/` | `/pricing/` | `/portfolio/` |
|---|---|---|---|---|
| `.lede` | ✅ | ✅ | ✅ | ? |
| `.section` spacing | ✅ | ✅ | ✅ | ? |
| `.section > h2` | ✅ | ✅ | ✅ | ? |
| `.cta-block` | ✅ | ✅ | ✅ | ? |
| card surface | `.tile` | `.service` | `.rate-table` | its own |

**Three consequences, all live right now:**

1. **One hairline is four edits.** Change a border colour and you change it in
   four files or the site drifts.
2. **`/services/` and `/pricing/` have the section-spacing bug the homepage
   had** — `.section { margin-block: var(--space-7) }` stacking on top of
   `site.css`'s 120px `padding-block`, giving ~11rem of dead space between
   sections. Fixed on `/`; still present on both of those.
3. **R32 is applied on `/` and nowhere else.** Soft cards on the homepage,
   sharp cards on every other page.

**The fix is not "each thread copies the homepage."** That makes five copies
instead of four. The fix is that these move into `site.css` once and every page
deletes its local copy.

---

## 1. Two tokens to add

```css
:root {
  /* The one blue that is legible as TEXT on #090909.
     site.css §1 bans --accent (#273FB7) as text at 2.48:1. That ban is on the
     VALUE, not the hue. Measured 2026-09-05:
       #7891FF solid on #090909 ............ 6.92:1  PASS AA, AAA for large
       at 0.9 alpha (composites ~#6D83E6) .. 5.75:1  PASS AA
     Use for: step numbers, FAQ counters, eyebrow rules, hover borders.
     NEVER for body copy — that stays --ink-body. */
  --ink-accent: rgba(120, 145, 255, 0.9);

  /* The glow. Every "light flare" on mzmedia.digital is a .webp; these are the
     same shapes as gradients, so nothing is hosted and nothing is requested. */
  --glow-soft:   rgba(39, 63, 183, 0.30);
  --glow-strong: rgba(39, 63, 183, 0.45);
  --glow-line:   rgba(120, 145, 255, 0.55);
}
```

⚠️ **`--radius-card: 20px` already exists** — R32, ruled by Masud 2026-09-05.

---

## 2. The components

Lift these verbatim out of `site\index.html`'s `<style>` block. They are written
against tokens only — no literal hex, no second font, no second radius beyond
R32's two.

### 2a. `.eyebrow` — the section pre-label

Small, uppercase, muted, with a short accent rule. **It is a `<p>`, never an
`<h*>`** — keeping it out of the heading tree is what stops it competing with
the page's single `<h1>`.

### 2b. `.lede` — the intro paragraph under a heading

One step up in size, `--ink-muted`. Already in three files identically.

### 2c. `.tile` — the card

Not flat. A top-lit gradient over `--bg-raised` so the upper edge catches light,
`--radius-card`, and a hover state that lifts 2px and brightens the border.
**This replaces `.service`, `.rate-table`'s cells and `/portfolio/`'s item card.**

### 2d. `.grid` / `.grid--wide`

`repeat(auto-fit, minmax(17rem, 1fr))` — one rule serves the 6-up services grid,
the 4-up "why us" grid and the 2-up stats row. No per-section breakpoints.

### 2e. `.steps` — the numbered process list

A real `<ol>` with `counter-increment`, so the numbering cannot drift from the
text. ⚠️ **Take the grid rules exactly as written.** The first version put
`::before` in column 1 and `<h3>` in column 2, and the `<p>` then wrapped onto
row 2 back into the 4rem column — every paragraph rendered one word per line.
The number must span both rows and both text elements must be pinned to column 2.

### 2f. `.faq` — native `<details>` / `<summary>`

`[ 01 ]` numbering from a CSS counter, and a CSS-drawn chevron that rotates on
`[open]` because the attribute flips, not because a script runs. Includes
`::-webkit-details-marker { display: none }` — Safari ignores `list-style: none`.

### 2g. `.cta-block` — the closing banner

`--radius-card`, centred, with the heaviest glow of the page underneath it.

### 2h. The two glows

- **Hero** — `::before`, `z-index: -1`, `pointer-events: none`, two radial
  gradients lit from the top.
- **Section divider** — `.section + .section::before`, a 1px line that brightens
  toward the centre and fades at both ends, with a soft `box-shadow`. This is
  mzmedia.digital's `Glow Line Divider.webp`, in CSS.

### 2i. `.btn` motion

Transitions on transform, box-shadow and border-colour. A 1px lift on hover and
a coloured shadow under `.btn--primary`.

---

## 3. The rules that govern all of it

**On motion.** `instructions.md` §5 bans **scroll-triggered** reveals, JS
carousels, count-up counters and JS accordions. **It does not ban CSS.** Hover
and focus transitions need no script and degrade to nothing. `site.css`'s
existing `prefers-reduced-motion` block already kills every one of them for users
who ask, which is why none of these declares its own.

⚠️ **The scroll-driven glow and drift that makes mzmedia.digital feel alive
cannot be built here.** `site.css` §0 records Masud being shown that exact cost
when he chose "MZ Media style" on 2026-09-05. Do not reopen it.

**On the accent.** `--accent` is a FILL — a blue button with a white label at
8.46:1. It is never text and never a hairline on the dark background. Where a
blue is needed as text, it is `--ink-accent`, and that is the only exception.

**On radius.** R32 gives two tokens and only two. `--radius` for anything
clickable, `--radius-card` for anything you read. A third would need another
ruling.

**On icons.** ⚠️ **Unresolved, and it is the largest remaining gap.** Every icon
on mzmedia.digital is a hosted SVG — eye, flame, play. This project has none, and
`04-Assets\` contains no icon set. An icon font is an external dependency and a
render-blocking request; **inline SVG is the zero-JS answer**, but someone has to
choose or draw them. **Nothing on any page should ship a Unicode glyph or an
emoji as a substitute.** → for Masud and T3.

---

## 4. What each page thread does

Once §1 and §2 are in `site.css`:

1. **Delete your page's `<style>` block** — or reduce it to rules genuinely
   unique to that page.
2. **Swap your card class to `.tile`**, or point your class at `--radius-card`.
3. **Delete your local `.section { margin-block: … }`.** `site.css` owns section
   rhythm. That rule is the dead-space bug.
4. **Use `<p class="eyebrow">` above every section `<h2>`.**
5. **Use `.steps` for any numbered process and `.faq` for any Q&A**, rather than
   writing a new one.
6. **Check nothing on your page uses `--accent` as text or as a thin border.**

**Pages to update:** `/services/` and `/pricing/` (T6) · `/portfolio/` (T5) ·
the four audience pages (T7) · `/about/`, `/contact/`, `/privacy/`, `/terms/`,
`/404.html` (T8).

---

## 5. Two things this file does not settle

- **Icons** — §3, above. Blocked on a decision, not on effort.
- **Sherika** — `site.css` §1 records that mzmedia.digital's heading face is a
  commercial, self-hosted font this project has no licence for, and that Inter
  carries both roles until it does. That is R28 and it is still open.
