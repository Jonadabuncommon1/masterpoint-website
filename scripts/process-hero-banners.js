// The hero banners are complete, pre-composed graphics (headline, copy, phone
// number and a "Get a Quote" button are all baked into the artwork itself),
// not plain photos. They are optimised as-is (resize cap + mozjpeg) and never
// cropped, since cropping would cut off text or buttons near the edges.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.join(__dirname, "assets-src", "hero-banners");
const OUT_DIR = path.join(__dirname, "..", "public", "images", "hero");

const FILES = [
  ["First.jpeg", "hero-banner-strength.jpg"],
  ["Second.jpeg", "hero-banner-safety.jpg"],
  ["Third.jpeg", "hero-banner-excellence.jpg"],
  ["fourth.jpeg", "hero-banner-equipment.jpg"],
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
