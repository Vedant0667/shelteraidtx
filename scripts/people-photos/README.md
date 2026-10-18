# People photos

Who We Are cards use 3:4 crops in `public/images/people`, all framed to one rule so heads match in size and position.

1. Measure the original: `swift scripts/people-photos/head.swift public/images/<file>`. This prints the face center, top of hair and chin, from macOS Vision.
2. Add or update the row in `people` in `crop.py`.
   - Board: head 62% of the card height, hair 2.5% below the top.
   - Officers: 50% and 5%.
3. Run `python3 scripts/people-photos/crop.py public/images/people`. It needs Pillow and numpy.
   - When a photo is too tight for the rule, `extend.py` widens the background: rows repeat at the sides, the shoulders continue on a slope, and the bottom is mirrored under the name gradient.
   - The top margin comes out short when the source has less room above the hair than the rule asks for (Srikanth: 2.2%).
   - Look at the result before shipping.
4. A changed crop needs a new URL, because the image optimizer caches by URL. Give the slug a new name in `crop.py`, or write to a new folder, and update the page.
