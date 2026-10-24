#!/usr/bin/env python3
"""Build Sens & Conscience branded post images from a JSON spec.

Usage: python3 -I make_slides.py spec.json OUT_DIR

Spec (all keys except "slides" optional):
{
  "name": "Prénom Nom",
  "business": "Nom de l'entreprise",
  "website": "exemple.ch",
  "font": "/path/to/font.ttf",
  "slides": [
    {"type": "cover", "photo": "photo1.jpg", "kicker": "Entrepreneur·e de la semaine"},
    {"type": "photo", "photo": "photo2.jpg", "caption": "Texte court en bas"},
    {"type": "text", "title": "Sa mission", "body": "Deux ou trois phrases."},
    {"type": "quote", "photo": "photo1.jpg", "quote": "Une phrase forte."},
    {"type": "cta", "title": "Vous connaissez quelqu'un qui…", "body": "…"}
  ]
}

Writes slide-01.png… at 1080x1350 (4:5, the feed size for Instagram and
LinkedIn) plus carousel.pdf for a LinkedIn document post.
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

W, H = 1080, 1350
CREAM = (242, 238, 228)
SAND = (214, 205, 192)
TERRACOTTA = (192, 120, 71)
OLIVE = (135, 133, 108)
INK = (43, 40, 36)
MARGIN = 90

FONT_CANDIDATES = [
    Path.home() / ".cache/sens-conscience/DreamAvenue.ttf",
    Path("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"),
]
BODY_FONT = Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")


def font(path, size):
    for p in [path, *FONT_CANDIDATES]:
        if p and Path(p).exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default(size)


def body_font(size):
    return ImageFont.truetype(str(BODY_FONT), size) if BODY_FONT.exists() else font(None, size)


def fill_photo(path, size=(W, H)):
    img = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    return ImageOps.fit(img, size, Image.LANCZOS, centering=(0.5, 0.4))


def bottom_shade(img, start=0.45, strength=200):
    """Darken the lower part of a photo so white text stays readable."""
    shade = Image.new("L", (1, H))
    for y in range(H):
        t = max(0.0, (y / H - start) / (1 - start))
        shade.putpixel((0, y), int(strength * t))
    black = Image.new("RGB", (W, H), (0, 0, 0))
    return Image.composite(black, img, shade.resize((W, H)))


def wrap(draw, text, fnt, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=fnt) <= max_width:
            line = trial
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def draw_lines(draw, lines, fnt, x, y, fill, spacing=1.25):
    step = int(fnt.size * spacing)
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += step
    return y


def footer(draw, spec, color):
    text = " · ".join(v for v in [spec.get("business"), spec.get("website")] if v)
    if text:
        draw.text((MARGIN, H - MARGIN), text, font=body_font(30), fill=color, anchor="ls")


def cover(spec, s):
    img = bottom_shade(fill_photo(s["photo"]))
    d = ImageDraw.Draw(img)
    kicker = s.get("kicker", "Entrepreneur·e de la semaine").upper()
    d.text((MARGIN, H - 400), kicker, font=body_font(30), fill=SAND)
    name_lines = wrap(d, spec.get("name", ""), font(spec.get("font"), 92), W - 2 * MARGIN)
    y = draw_lines(d, name_lines, font(spec.get("font"), 92), MARGIN, H - 350, (255, 255, 255), 1.1)
    d.rectangle([MARGIN, y + 10, MARGIN + 120, y + 16], fill=TERRACOTTA)
    footer(d, spec, (255, 255, 255))
    return img


def photo(spec, s):
    img = fill_photo(s["photo"])
    if s.get("caption"):
        img = bottom_shade(img, 0.6)
        d = ImageDraw.Draw(img)
        lines = wrap(d, s["caption"], body_font(40), W - 2 * MARGIN)
        draw_lines(d, lines, body_font(40), MARGIN, H - MARGIN - 60 - 50 * len(lines), (255, 255, 255))
    return img


def text(spec, s, bg=CREAM, fg=INK):
    img = Image.new("RGB", (W, H), bg)
    d = ImageDraw.Draw(img)
    d.rectangle([MARGIN, 200, MARGIN + 120, 206], fill=TERRACOTTA)
    title_font = font(spec.get("font"), 72)
    y = draw_lines(d, wrap(d, s.get("title", ""), title_font, W - 2 * MARGIN), title_font, MARGIN, 250, fg, 1.15)
    paragraphs = [p for p in s.get("body", "").split("\n") if p.strip()]
    y += 50
    for p in paragraphs:
        y = draw_lines(d, wrap(d, p, body_font(42), W - 2 * MARGIN), body_font(42), MARGIN, y, fg, 1.4) + 30
    footer(d, spec, OLIVE)
    return img


def quote(spec, s):
    img = bottom_shade(fill_photo(s["photo"]), 0.25, 225)
    d = ImageDraw.Draw(img)
    qf = font(spec.get("font"), 68)
    lines = wrap(d, f"« {s['quote']} »", qf, W - 2 * MARGIN)
    y = H - MARGIN - 160 - int(qf.size * 1.2) * len(lines)
    y = draw_lines(d, lines, qf, MARGIN, y, (255, 255, 255), 1.2)
    d.text((MARGIN, y + 30), f"— {spec.get('name', '')}", font=body_font(36), fill=SAND)
    footer(d, spec, (255, 255, 255))
    return img


def cta(spec, s):
    return text(spec, s, bg=OLIVE, fg=CREAM)


BUILDERS = {"cover": cover, "photo": photo, "text": text, "quote": quote, "cta": cta}


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    spec_path, out = Path(sys.argv[1]), Path(sys.argv[2])
    spec = json.loads(spec_path.read_text(encoding="utf-8"))
    out.mkdir(parents=True, exist_ok=True)
    base = spec_path.parent
    pages = []
    for i, s in enumerate(spec["slides"], 1):
        if "photo" in s:
            s["photo"] = str((base / s["photo"]).resolve()) if not Path(s["photo"]).is_absolute() else s["photo"]
        img = BUILDERS[s["type"]](spec, s)
        path = out / f"slide-{i:02d}.png"
        img.save(path, optimize=True)
        pages.append(img)
        print(path)
    if len(pages) > 1:
        pages[0].save(out / "carousel.pdf", save_all=True, append_images=pages[1:], resolution=150)
        print(out / "carousel.pdf")


if __name__ == "__main__":
    main()
