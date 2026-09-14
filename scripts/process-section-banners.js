// One-off promotional banners used as a full section background elsewhere on
// the site (currently just the calculators teaser). Like the hero banners,
// these are complete graphics with their own baked-in headline, so they are
// only resized/compressed, never cropped.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.join(__dirname, "assets-src", "section-banners");
const OUT_DIR = path.join(__dirname, "..", "public", "images", "hero");

const FILES = [
  ["calculators-teaser.jpeg", "section-calculators-teaser.jpg"],
  ["cta-banner.jpeg", "section-cta-banner.jpg"],
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [src, out] of FILES) {
    await sharp(path.join(SRC_DIR, src))
      .resize({ width: 2400, withoutEnlargement: true })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(path.join(OUT_DIR, out));
    const { size } = fs.statSync(path.join(OUT_DIR, out));
    console.log(out, `${(size / 1024).toFixed(0)} KB`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
