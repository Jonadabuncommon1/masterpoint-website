// Repeating equipment-blueprint pattern used as a faint tiled background
// across the whole footer. Resized only, never cropped, since it tiles.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = path.join(__dirname, "assets-src", "footer", "equipment-blueprint.png");
const OUT = path.join(__dirname, "..", "public", "images", "hero", "footer-equipment-blueprint.jpg");

async function main() {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  await sharp(SRC)
    .resize({ width: 1100, withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(OUT);
  const { size } = fs.statSync(OUT);
  console.log(path.basename(OUT), `${(size / 1024).toFixed(0)} KB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
