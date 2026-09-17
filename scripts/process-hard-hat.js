const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = "C:\\Users\\ed\\Downloads\\Hard hat.jpeg";
const OUT = path.join(__dirname, "..", "public", "images", "hero", "hard-hat-3d.jpg");

async function main() {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  await sharp(SRC)
    .resize({ width: 1000, withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(OUT);
  const { size } = fs.statSync(OUT);
  console.log(path.basename(OUT), `${(size / 1024).toFixed(0)} KB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
