# -*- coding: utf-8 -*-
"""Square profile pictures from the Prigod Games mark, for the studio's social accounts.

    python tools/brand_avatar.py
    python tools/brand_avatar.py --out some/other/dir

This is studio branding, not game art, so it lives here rather than in a game repo, and
it writes to the studio's own logo folder by default:

    C:\\Alles\\Prigod Games\\Logos\\brand\\

    avatar_1024.png   general use (Reddit, YouTube, TikTok, Steam group, itch)
    avatar_512.png    for forms that want something smaller
    avatar_256.png    subreddit / small icon slots
    avatar_1024.jpg   for the odd form that refuses PNG

The source mark carries a lot of dead margin, which reads as a tiny logo once a platform
shrinks it into a 40px circle. So the mark is trimmed to its own bounding box and re-laid
on a square at a fixed fill fraction, sized so the whole hexagon stays inside the circle
that every platform crops to.

Every output is kept under 500 KB, which is Reddit's ceiling for a profile picture.
"""
import argparse
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "public", "prigod-games-mark.png")
# Same bytes as "Logos/PrigodGames logo klein weiss.png", which is the master.
DEFAULT_OUT = os.path.join(ROOT, "..", "Prigod Games", "Logos", "brand")

# The mark's bounding box spans this fraction of the square. 0.72 keeps the hexagon
# corners inside the inscribed circle (which covers 0.707 of the width at the diagonal)
# with a little air.
FILL = 0.72
MAX_BYTES = 500 * 1024


def trimmed_mark(im: Image.Image):
    """The logo without its background margin, as RGBA with the background knocked out."""
    im = im.convert("RGB")
    bg = im.getpixel((0, 0))
    mask = Image.new("L", im.size, 0)
    px, mpx = im.load(), mask.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b = px[x, y]
            if abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2]) > 60:
                mpx[x, y] = 255
    box = mask.getbbox()
    out = im.convert("RGBA")
    out.putalpha(mask)
    return out.crop(box), bg


def avatar(size: int, mark: Image.Image, bg: tuple) -> Image.Image:
    canvas = Image.new("RGB", (size, size), bg)
    target = int(size * FILL)
    scale = target / max(mark.width, mark.height)
    m = mark.resize((max(1, int(mark.width * scale)), max(1, int(mark.height * scale))),
                    Image.LANCZOS)
    canvas.paste(m, ((size - m.width) // 2, (size - m.height) // 2), m)
    return canvas


def save(im: Image.Image, out_dir: str, name: str, **kw) -> None:
    path = os.path.join(out_dir, name)
    im.save(path, optimize=True, **kw)
    n = os.path.getsize(path)
    flag = "OK" if n <= MAX_BYTES else "OVER 500 KB"
    print("%-18s %4dx%-4d %7.1f KB  %s" % (name, im.width, im.height, n / 1024.0, flag))


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=DEFAULT_OUT)
    args = ap.parse_args()
    out_dir = os.path.abspath(args.out)
    os.makedirs(out_dir, exist_ok=True)
    print("-> %s" % out_dir)

    mark, bg = trimmed_mark(Image.open(SRC))
    print("mark trimmed to %dx%d on background %s" % (mark.width, mark.height, bg))
    for size in (1024, 512, 256):
        save(avatar(size, mark, bg), out_dir, "avatar_%d.png" % size)
    save(avatar(1024, mark, bg), out_dir, "avatar_1024.jpg", quality=92, subsampling=0)


if __name__ == "__main__":
    main()
