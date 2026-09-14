// Faint background photos for the 6 "Why Masterpoint" cards. Each is shown at
// very low opacity behind the card copy, so these are just resized/compressed,
// never cropped tight (object-cover in the component handles framing).
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.join(__dirname, "assets-src", "why-choose-us");
const OUT_DIR = path.join(__dirname, "..", "public", "images", "hero");

const FILES = [
  ["1.jpeg", "card-integrity-1.jpg"],
  ["2.jpeg", "card-integrity-2.jpg"],
  ["3.jpeg", "card-integrity-3.jpg"],
  ["4.jpeg", "card-integrity-4.jpg"],
  ["5.jpeg", "card-integrity-5.jpg"],
  ["6.jpeg", "card-integrity-6.jpg"],
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [src, out] of FILES) {
    await sharp(path.join(SRC_DIR, src))
      .resize({ width: 900, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(OUT_DIR, out));
    const { size } = fs.statSync(path.join(OUT_DIR, out));
    console.log(out, `${(size / 1024).toFixed(0)} KB`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
