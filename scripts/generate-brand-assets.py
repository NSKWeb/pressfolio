"""Generate the static brand assets used for SEO/social previews."""
from PIL import Image, ImageDraw, ImageFont

# Brand palette matches src/styles/global.css
BG = (250, 250, 248)
INK = (26, 26, 26)
ACCENT = (214, 40, 40)

FONT_BOLD = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
]
FONT_REGULAR = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
]


def load(paths, size):
    for path in paths:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def centered(draw, text, font, center_x, y, fill):
    width = draw.textbbox((0, 0), text, font=font)[2]
    draw.text((center_x - width / 2, y), text, font=font, fill=fill)


def make_og():
    img = Image.new("RGB", (1200, 630), BG)
    draw = ImageDraw.Draw(img)
    draw.rectangle([0, 0, 1200, 22], fill=ACCENT)
    draw.rectangle([0, 608, 1200, 630], fill=ACCENT)

    centered(draw, "Press \u2192 Blog", load(FONT_BOLD, 104), 600, 150, INK)
    centered(draw, "Free press release to blog post converter", load(FONT_REGULAR, 42), 600, 300, ACCENT)
    centered(draw, "Auto-parse \u00b7 AI enhancement \u00b7 Markdown & HTML export", load(FONT_REGULAR, 34), 600, 380, (74, 74, 74))
    centered(draw, "PressFolio", load(FONT_BOLD, 46), 600, 490, INK)
    img.save("public/og-image.png", optimize=True)


def make_icon(size, path, radius_ratio=0.16):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    radius = int(size * radius_ratio)
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=INK)
    centered(draw, "P", load(FONT_BOLD, int(size * 0.6)), size / 2, size * 0.19, BG)
    img.save(path, optimize=True)


if __name__ == "__main__":
    make_og()
    make_icon(180, "public/apple-touch-icon.png", radius_ratio=0.0)
    print("Brand assets written to public/")