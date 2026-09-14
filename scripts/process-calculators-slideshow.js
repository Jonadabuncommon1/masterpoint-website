// Equipment/PPE photos used as a sliding gallery beside the calculators
// teaser copy. Mixed aspect ratios are fine here (unlike the hero/section
// banners) since these are simple centred product shots with no text or
// buttons near the edges — moderate object-cover cropping is expected.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.join(__dirname, "assets-src", "calculators-slideshow");
const OUT_DIR = path.join(__dirname, "..", "public", "images", "hero");

const FILES = [
  ["WhatsApp Image 2026-09-14 at 8.44.15 AM.jpeg", "slide-road-roller.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.18 AM.jpeg", "slide-mixer-site-1.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.19 AM.jpeg", "slide-ppe-hat-vest.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.20 AM.jpeg", "slide-crane-truck.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.23 AM.jpeg", "slide-excavator-yellow.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.24 AM.jpeg", "slide-excavator-blue.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.26 AM.jpeg", "slide-mixer-site-2.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.29 AM.jpeg", "slide-ppe-vests.jpg"],
  ["WhatsApp Image 2026-09-14 at 8.44.30 AM.jpeg", "slide-ppe-helmet.jpg"],
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [src, out] of FILES) {
    await sharp(path.join(SRC_DIR, src))
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(OUT_DIR, out));
    const { size } = fs.statSync(path.join(OUT_DIR, out));
    console.log(out, `${(size / 1024).toFixed(0)} KB`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
