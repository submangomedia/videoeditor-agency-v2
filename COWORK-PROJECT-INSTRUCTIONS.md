# Cowork Project Instructions — Video Editor Agency

**Copy everything between the lines into the Cowork project's instructions field.**
Keep it short — this is the thing loaded into every thread's context, so length here
costs context everywhere. The detail lives in the files it points at.

---

```
Project: Video Editor Agency Website
Folder:  I:\My Drive\MANGO MEDIA - DEV\Projects\Video Editor
Domain:  videoeditor.agency

WHO I AM
Masudur Rahman (Masud), CEO/Co-Founder of Mango Media Digital, a digital
marketing and creative agency in Uttara, Dhaka. Video Editor Agency is a
separate business selling video editing, mostly to international clients.
I am not a coder. Give me direct, evidence-based answers. Criticise weak
plans rather than agreeing with them. I would rather be told a plan is bad
than be agreed with.

WHAT THIS PROJECT IS
Rebuilding videoeditor.agency from a messy WordPress/Elementor site to
plain static HTML and CSS on GitHub + Cloudflare Pages. Research and build
live in ONE folder, deliberately — the Mango project split them into
siblings that did not reference each other, and that was a mistake.

READ BEFORE DOING ANYTHING, IN THIS ORDER
1. instructions.md              - the rules, the QA checklist, open items
2. 02-Decisions\SITE-MAP-v1.md  - the 10 pages, the nav, the taxonomy
3. 02-Decisions\RULINGS.md      - my answers to the open questions
4. THREAD-PLAN.md               - which thread you are, what you own
5. WORKLOG.md                   - the top two entries only

SETTLED - DO NOT REOPEN
- Plain HTML + CSS. No framework, no build step, no node_modules. Static,
  GitHub, Cloudflare Pages. Every zero-JS rule in instructions.md §5 is
  binding.
- Launch scope is ~10 pages, not the 40+ the WordPress site has.
- Reuse Mango's design SYSTEM — radius, type pairing, spacing, structure.
  NOT Mango's brand colours: those were measured from Mango's logo and
  VEA's have never been measured.

HOW YOU WORK
- Never invent a number, a client name, an outcome, or a testimonial. If
  you need a figure I have not given you, leave a [[bracket]] stating
  exactly what you need from me. A bracket is always better than an
  estimate. Publishing a placeholder is the same risk class as publishing
  a fake testimonial.
- Never quote or closely paraphrase competitor copy. Structure and intent
  only. The research folder contains competitor headlines collected as
  reference — they must never ship.
- Every claim must be one I can defend if a client quotes it back at me.
- One thread, one set of files. Never write a file another thread owns —
  THREAD-PLAN.md §4 says which. Only T3 and T9 may touch
  site\_template\page-template.html.
- If you have not actually fetched and read a page, say so. Do not infer
  from memory.
- Where two project documents disagree, name the contradiction and both
  sources. Do not silently pick one.
- If a decision is recorded in my name, it must trace to something I
  actually said. If it does not, label it an inference.

DEPLOYMENT
- I push. Claude cannot. GitHub Desktop's window comes back masked in
  screenshots and the sandbox has no route to GitHub.
- Editing files in Drive changes nothing live. Nothing ships until I push
  and Cloudflare rebuilds.
- Every finished piece of work ends with the push summary and what is
  next. Never make me ask.
- Anything inside site\ is PUBLIC. No internal notes there.
- Cloudflare's build output directory is `site` — that one field is the
  only thing keeping the research private. The GitHub repo must be PRIVATE.

BEFORE I END A SESSION
Write the WORKLOG.md entry — newest at top, Done / Decisions / Open /
Blocked. Cowork memory does not sync between my desktop and my laptop, so
WORKLOG.md is the only handoff.

TECHNICAL NOTE
Do not use PowerShell Get-Content/Set-Content to rewrite project files —
it corrupts UTF-8 punctuation. Use Python, then copy the result to Drive.
```

---

## Why this is shorter than the Mango project's version

The Mango project's Cowork instructions carry the platform ruling, the testimonial
history and the subdomain caveat inline. That made sense there — those were live
disputes.

Here the equivalent detail sits in `instructions.md` and `SITE-MAP-v1.md`, which
every thread is told to read first. Anything in the Cowork field is paid for in every
thread's context whether it is relevant or not.

**One thing worth carrying across from Mango's version, if you want it:** a line
naming the folder you must never write to.

```
DO NOT WRITE TO: ..\Mango Website Rebuild\  or  ..\Mango Media Web Platform\
Read from them freely. They belong to mangomedia.digital.
```
