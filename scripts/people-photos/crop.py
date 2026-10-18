import sys
from PIL import Image, ImageFilter
import os
src = os.path.join(os.path.dirname(__file__), "../../public/images/")
out = sys.argv[1]
# file, slug, face cx, head top (hair), chin, head height target, top margin target
people = [
  ("vedant-subramanian.jpg", "vedant-subramanian", 561, 311, 980, 0.62, 0.025),
  ("srikanth-subramanian.jpg", "srikanth-subramanian", 397, 17, 501, 0.62, 0.025),
  ("Arjun-headshot.JPG", "arjun-subramanian", 764, 97, 1018, 0.62, 0.025),
  ("tk-subramanian.jpg", "tk-subramanian", 439, 193, 1206, 0.62, 0.025),
  ("arti-baskaran.jpg", "arti-baskaran", 681, 34, 639, 0.62, 0.025),
  ("Vikram-headshot.jpg", "vikram-sampath", 385, 304, 618, 0.50, 0.05),
  ("aarav-nesargi-2026.jpeg", "aarav-nesargi", 248, 38, 309, 0.50, 0.05),
]

from extend import extend

for f, slug, cx, top, chin, hfrac, m in people:
  im = Image.open(src + f).convert("RGB")
  W, H = im.size
  Fh = (chin - top) / hfrac
  Fw = Fh * 3 / 4
  x0 = cx - Fw / 2
  y0 = top - m * Fh
  pad_l = max(0, -x0); pad_r = max(0, x0 + Fw - W); pad_b = max(0, y0 + Fh - H)
  # Prefer shifting the frame over padding when the other side has room.
  if pad_l and x0 + Fw + pad_l <= W: x0, pad_l = 0, 0
  if pad_r and x0 - pad_r >= 0: x0, pad_r = x0 - pad_r, 0
  if y0 < 0: y0 = 0
  pl, pr, pb = (int(round(v)) for v in (pad_l, pad_r, pad_b))
  if pl or pr or pb:
    im = extend(im, pl, pr, pb)
    x0 += pl
  box = tuple(round(v) for v in (x0, y0, x0 + Fw, y0 + Fh))
  c = im.crop(box)
  c.save(f"{out}/{slug}.jpg", quality=88, optimize=True, progressive=True)
  print(f"{slug}: {c.size[0]}x{c.size[1]} head={(chin-top)/Fh:.0%} top={(top-y0)/Fh:.1%} pad L{pl} R{pr} B{pb}")
