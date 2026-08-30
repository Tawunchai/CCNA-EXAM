"""python zoom.py <image path> [factor]

Exhibits in this bank are 400-1200 px wide and their digits are unreadable at
native size — `[90/144]` and `[90/1441]` look the same until you enlarge them.
Writes an upscaled copy next to the other scratch files and prints the path to
Read. Factor defaults to whatever brings the width to ~1500 px.
"""
import os
import sys
import tempfile

from PIL import Image

if len(sys.argv) < 2:
    sys.exit('usage: python zoom.py <image path> [factor]')

src = sys.argv[1]
im = Image.open(src)
factor = int(sys.argv[2]) if len(sys.argv) > 2 else max(2, round(1500 / im.width)) if im.width < 1300 else 1

out_dir = os.path.join(tempfile.gettempdir(), 'ccna-audit-v4')
os.makedirs(out_dir, exist_ok=True)
out = os.path.join(out_dir, 'zoom_' + os.path.splitext(os.path.basename(src))[0] + '.png')

if factor > 1:
    im = im.resize((im.width * factor, im.height * factor), Image.LANCZOS)
im.save(out)

print(f'{src}  {Image.open(src).size} -> x{factor} -> {im.size}')
print(out)
