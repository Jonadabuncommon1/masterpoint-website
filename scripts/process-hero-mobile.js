// Client-supplied square (1:1) versions of the 4 hero banners, purpose-built
// for phone view so nothing needs cropping there. Resized only.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.join(__dirname, "assets-src", "hero-mobile");
const OUT_DIR = path.join(__dirname, "..", "public", "images", "hero");

const FILES = [
  ["strength.jpeg", "hero-banner-strength-mobile.jpg"],
  ["safety.jpeg", "hero-banner-safety-mobile.jpg"],
  ["excellence.jpeg", "hero-banner-excellence-mobile.jpg"],
  ["equipment.jpeg", "hero-banner-equipment-mobile.jpg"],
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [src, out] of FILES) {
    await sharp(path.join(SRC_DIR, src))
      .resize({ width: 1080, withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(path.join(OUT_DIR, out));
    const { size } = fs.statSync(path.join(OUT_DIR, out));
    console.log(out, `${(size / 1024).toFixed(0)} KB`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
