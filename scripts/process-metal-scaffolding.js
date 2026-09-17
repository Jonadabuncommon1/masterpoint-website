// The client re-photographed the same 5 structural-build sites once the
// bamboo scaffolding was replaced with galvanised metal scaffolding, so these
// simply overwrite the existing structural-build-0X.jpg files in place -
// same slot, same aspect ratio, every page that references them updates
// automatically.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = "C:\\Users\\ed\\Downloads\\Scalfolding";
const OUT_DIR = path.join(__dirname, "..", "public", "images", "projects");

const FILES = [
  ["2026-09-11_081026_metal-scaffolding.png", "structural-build-01.jpg"],
  ["2026-09-11_081031_metal-scaffolding.png", "structural-build-02.jpg"],
  ["2026-09-11_081036_metal-scaffolding.png", "structural-build-03.jpg"],
  ["2026-09-11_081100_metal-scaffolding.png", "structural-build-04.jpg"],
  ["2026-09-11_081302_metal-scaffolding.png", "structural-build-05.jpg"],
];

async function main() {
  for (const [src, out] of FILES) {
    const srcPath = path.join(SRC_DIR, src);
    const meta = await sharp(srcPath).metadata();
    const targetWidth = meta.width > meta.height ? 1600 : 1200;
    await sharp(srcPath)
      .resize({ width: targetWidth, withoutEnlargement: true })
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
