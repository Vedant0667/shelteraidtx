# OG Image Conversion Required

## Current Status
- **og-image.svg** exists (~270KB) - TOO LARGE for social media link previews
- **og-image.jpg** is referenced in metadata but DOES NOT EXIST YET

## Action Required
Convert `og-image.svg` to optimized JPG or PNG:

### Option 1: Using Online Tools
1. Open og-image.svg in browser
2. Take screenshot or use https://cloudconvert.com/svg-to-jpg
3. Compress to <100KB using https://tinyjpg.com
4. Save as `public/og-image.jpg` (1200×630px)

### Option 2: Using ImageMagick
```bash
convert og-image.svg -resize 1200x630 -quality 85 og-image.jpg
```

### Option 3: Using Figma/Photoshop
1. Import SVG
2. Export as JPG with quality 80-85%
3. Ensure file size <100KB

## Specifications
- **Dimensions:** 1200 × 630 pixels (exact)
- **Format:** JPG or PNG
- **File size:** <100KB (ideally 60-80KB)
- **Quality:** 80-85% compression
- **Color space:** RGB

## Verification
After creating og-image.jpg:
1. Check file exists: `ls -lh public/og-image.jpg`
2. Verify size: Should be <100KB
3. Test in https://www.opengraph.xyz/url/https://shelteraidtx.org
4. Delete this README once conversion is complete

## DO NOT DELETE og-image.svg
Keep the SVG as the source file for future edits.
