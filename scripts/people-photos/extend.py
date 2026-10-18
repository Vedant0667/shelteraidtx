import numpy as np
from PIL import Image, ImageFilter

def suit_start(col):
  """First row from the top where the edge column turns dark (the jacket) and stays dark."""
  luma = col.mean(axis=1)
  dark = luma < 90
  for y in range(len(dark)):
    if dark[y:y+40].all(): return y
  return len(dark)

def extend(im, left, right, bottom, slope=0.45):
  """Widen a headshot: background rows repeat their edge pixel (slats stay sharp and horizontal);
  the jacket continues outward on a downward-sloping shoulder line; the bottom strip mirrors and blurs (it sits under the card's dark gradient)."""
  a = np.asarray(im).astype(np.float32)
  H, W, _ = a.shape
  out = np.zeros((H + bottom, W + left + right, 3), np.float32)
  out[:H, left:left+W] = a
  for side, pad in (("L", left), ("R", right)):
    if not pad: continue
    col = a[:, 0] if side == "L" else a[:, W-1]
    yb = suit_start(col)
    bg_rows = col[:yb]
    for d in range(1, pad + 1):
      x = left - d if side == "L" else left + W - 1 + d
      ys = np.arange(H)
      boundary = yb + d * slope
      src = np.where(ys < boundary, ys, np.clip(ys - d * slope, yb, H - 1)).astype(int)
      px = col[src].copy()
      # Rows above the sloped shoulder but at/below the edge's jacket start need background: repeat the slats above.
      gap = (ys >= yb) & (ys < boundary)
      if gap.any() and yb > 0:
        period = min(yb, 180)
        px[gap] = bg_rows[yb - 1 - ((ys[gap] - yb) % period)]
      out[:H, x] = px
  if bottom:
    # Mirror the rows above the edge: the shirt, tie and lapels continue instead of streaking.
    out[H:] = out[H-1:H-1-bottom:-1]
  img = Image.fromarray(out.clip(0, 255).astype(np.uint8))
  if bottom:
    strip = img.crop((0, H - 20, img.width, img.height)).filter(ImageFilter.GaussianBlur(10))
    img.paste(strip.crop((0, 20, strip.width, strip.height)), (0, H))
  # Soften the jacket's sloped edge and the seam a little so the join doesn't read as a cut.
  soft = img.filter(ImageFilter.GaussianBlur(3))
  mask = Image.new("L", img.size, 255)
  mask.paste(Image.new("L", (W - 8, H), 0), (left + 4, 0))
  return Image.composite(soft, img, mask.filter(ImageFilter.GaussianBlur(3)))
