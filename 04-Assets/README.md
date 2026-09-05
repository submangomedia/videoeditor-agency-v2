# 04-Assets

Staging for images before they enter `site\`. **Empty as of 2026-09-03.**

## Why assets stage here first

**Anything inside `site\` is published.** A client logo dropped there is live the
moment Masud pushes — including one you do not yet have permission to show.

This folder is the holding area. An asset moves to `site\assets\img\` only when it
is (a) permitted, (b) correctly sized, and (c) actually used by a page.

## Expected structure

```
04-Assets\
  ├── logo\           VEA's logo files — T3 measures the brand hexes from these
  ├── portfolio\      downloaded YouTube thumbnails, per THREAD-PLAN.md §6
  ├── clients\        client logos — ONLY those with written permission
  └── testimonials\   client photographs — ONLY those with written permission
```

## ⚠️ Three hard rules

**1. Thumbnails are downloaded, never hotlinked.** `img.youtube.com/vi/<ID>/…` is a
third-party request on every page load, and the image breaks the moment a video is
set private. T2 downloads each one into `portfolio\`.

**2. No logo without written permission.** This is the rule Q2 exists to enforce.
The research currently proposes putting **YouTube, Meta, Shopify, TikTok, Spotify
and LinkedIn** logos under a heading reading *"Trusted by creators and brands
worldwide"* — those are platforms, not clients — and another document puts
**Adidas and Nike** under *"Trusted by industry leaders."* Neither ships.

**3. Every image gets real alt text when it is placed.** Not "image", not the
filename. Mango's live site had 511 of 697 images with no alt text at all; that is
the standard being replaced, not inherited.

## Sizing

Decided by T3 alongside the design system, and recorded here when it is. Until then
do not batch-process anything — resizing the wrong way twice costs more than waiting.
