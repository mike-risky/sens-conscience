---
name: bni-spotlight
description: Weekly BNI member spotlight for Nuray C. Posse (Sens & Conscience). Proposes the week's post format, collects the entrepreneur's name, website and 1–2 photos or a short video, writes French captions for LinkedIn and Instagram, builds the images or auto-edits a Reel, shows the draft, and publishes only after approval. Use for the Friday BNI post or when asked for a BNI / référencement / entrepreneur-of-the-week post.
---

# BNI weekly spotlight

Each week Nuray features one entrepreneur from her BNI chapter on LinkedIn and Instagram.
The user is on their phone, often early in the morning: keep messages short, ask everything in one go,
and do the work without further back-and-forth until the draft is ready.

All post text is in **French (Swiss usage)**: warm, simple, no hype. Use "vous" and the Swiss/French
conventions on the site (« guillemets », espace avant ? ! :). Never invent facts about the entrepreneur.
Everything you state about them must come from what the user said or from their website.

## Step 1: Propose this week's post (first message)

1. Read `history.md` (next to this file) to see the formats and people already used.
2. Pick the **recommended format** from the catalogue below. Don't reuse the last 2 weeks' formats,
   and alternate photo and video weeks when possible. Then pick 2 alternatives.
3. Send one message, in English unless the user writes in French:

   > **BNI post: this week**
   > Recommended: **<format>**, <one-line why>. Alternatives: <A>, <B>.
   > Send me:
   > 1. First and last name
   > 2. Website (and their Instagram / LinkedIn handle if you have it, so I can tag them)
   > 3. <exactly the media the chosen format needs>
   > 4. One sentence: what do they do / who is a good referral for them? (optional, I'll read their site otherwise)
   > Reply "B" or "C" to switch format.

## Step 2: Gather

- **Media.** Look for the files the user attached (the turn's uploads, the working directory, `~/`, `/tmp`;
  `find / -newer history.md -type f \( -iname '*.jp*g' -o -iname '*.png' -o -iname '*.heic' -o -iname '*.mov' -o -iname '*.mp4' \) 2>/dev/null`).
  Convert HEIC with `ffmpeg -i in.heic out.jpg` if needed. If a photo is only visible in the chat and not on disk,
  ask once for a share link (Google Drive / Dropbox / WeTransfer) and download it. As a last resort, ask whether
  you may use a photo from their website.
- **Website.** Fetch the site and pull out what they do, for whom, where they work, a distinctive detail, and
  any public social handles. Keep a 5-line fact sheet; it's the only source for the copy.
- Work in the scratchpad directory. **Never commit photos or videos to this repo** (it is the live website's repo).

## Step 3: Build

### Images: `scripts/make_slides.py`
Write a `spec.json` (format documented at the top of the script) and run
`python3 -I .claude/skills/bni-spotlight/scripts/make_slides.py spec.json OUT_DIR`.
It writes 1080x1350 PNGs in the site's palette (cream, terracotta, olive) plus `carousel.pdf`
for LinkedIn. For the brand font, first try:
`mkdir -p ~/.cache/sens-conscience && curl -sfL https://db.onlinewebfonts.com/t/5da49843f66caf14799662bd12aa55a2.ttf -o ~/.cache/sens-conscience/DreamAvenue.ttf`
(it falls back to DejaVu Serif if that fails). **Look at every slide** (Read the PNGs) before showing it:
check that the text fits, the face isn't covered, and the spelling is right.

### Short video: `scripts/make_reel.sh`
`.claude/skills/bni-spotlight/scripts/make_reel.sh OUT.mp4 "Prénom Nom" "site.ch" clip1.mov [photo.jpg clip2.mov …]`
crops to 9:16, keeps ≤6 s per clip and ≤30 s in total, turns photos into 3 s slow-zoom shots, burns in the name
(start) and website (end), and normalises the sound. Reorder the media so the strongest shot is first (the first 2 s
decide whether people keep watching). Extract 2–3 frames with ffmpeg and look at them before showing the result.
If the clips have no useful sound, tell the user to add a trending sound in the Instagram app when posting.

## Step 4: Draft → approval

Send the files with `SendUserFile` (`display: "render"` for images and video) plus, in the chat:

- **Instagram caption**: hook on line 1 (it's cut after ~125 characters), 3–6 short lines, a question or referral
  CTA, then 3–5 local hashtags (#Sion #Valais #BNI #EntrepreneursValais + one for their trade). Tag their handle.
  Suggest a **Collab** post (Instagram "Invite collaborator") so it shows on both accounts.
- **LinkedIn post**: hook line, 4–8 short lines, why you recommend them, who would be a good referral,
  a question to invite comments. Tag the person and their company page. Put the website in the **first comment**
  rather than the body (common practice; LinkedIn tends to show posts with outbound links to fewer people).
- Each caption in its own code block so it's one tap to copy.

End with: **"Post it now? (yes / change: …)"**. Never publish without an explicit yes for this draft.

## Step 5: Publish

If the Hyper marketing tools are connected, load the `hyper-marketing:instagram` and `hyper-marketing:linkedin`
skills and publish (carousel/photo/Reel on Instagram; document post from `carousel.pdf` or image post on
LinkedIn), then add the LinkedIn first comment with the website. Report the live links.

If they're not connected (the environment's network must allow `backend.hyperfx.ai`), say so in one line and give
the ready-to-post package instead: files as `display: "attach"` so they can be saved to the phone, captions in
code blocks, and the 4 taps to post on each app.

## Step 6: Log

Append one line to `history.md`: `| date | name | business | format | platforms | posted? |`, commit with message
`BNI spotlight: <name>` and push to the branch this session was told to use.

## Format catalogue

Ranked from what tends to perform for small local accounts (carousels get the most saves and engagement on both
networks; short Reels get the most reach on Instagram). Every format needs only photos or a ≤30 s clip.

| # | Format | Media to ask for | Build | Why it works |
|---|--------|------------------|-------|--------------|
| 1 | **Portrait carousel, "3 questions à…"**: cover + 3 Q&A slides + referral CTA | 1 portrait photo (+1 at work, optional) | slides: cover, text×3, cta | Carousels lead engagement and saves; Q&A reads like a mini-interview |
| 2 | **"Je vous recommande…"**: single strong photo, personal referral story in the caption | 1 photo | slides: cover only | Very BNI ("Givers Gain"); a personal endorsement is the most credible content |
| 3 | **Duo "Rencontre de la semaine"**: Nuray + the entrepreneur together | 1 photo of both of you (+1 solo) | cover + photo | Faces and real relationships beat logos; both networks see it |
| 4 | **Coulisses / behind the scenes**: workshop, hands, tools, office | 2 photos | cover + photo + cta | Human and concrete; easy to shoot in 30 s |
| 5 | **Citation**: a sentence they live by over their portrait | 1 photo + their sentence | quote + cta | Highly shareable; the entrepreneur reposts it |
| 6 | **Conseil d'expert**: their #1 tip for clients, in 3 slides | 1 photo + the tip (or taken from their site) | cover + text×2 + cta | Useful content gets saved and shared |
| 7 | **Reel 15–30 s "En 20 secondes"**: 3–5 quick clips of them working / greeting | 2–5 short clips (or clips + photos) | make_reel.sh | Highest reach on Instagram; no talking-head needed |
| 8 | **Reel "Une question"**: they answer one question to camera, ≤20 s | 1 clip filmed vertically | make_reel.sh (single clip) | Voice + face builds trust fast; LinkedIn shows it natively too |

Rotation guidance: roughly 2 photo weeks for 1 video week. Ask for vertical video, filmed in daylight.
