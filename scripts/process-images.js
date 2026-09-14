const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC_HERO = path.join(__dirname, "assets-src/hero");
const SRC_PROJECTS = path.join(__dirname, "assets-src/projects");
const OUT_HERO = path.join(__dirname, "..", "public", "images", "hero");
const OUT_EQUIP = path.join(__dirname, "..", "public", "images", "equipment");
const OUT_PROJECTS = path.join(__dirname, "..", "public", "images", "projects");

for (const d of [OUT_HERO, OUT_EQUIP, OUT_PROJECTS]) fs.mkdirSync(d, { recursive: true });

// Detect + strip flat UI/watermark bars (phone status bars, gallery chrome, camera caption strips)
// from the top and bottom of an image by scanning row luminance variance.
async function autotrimBars(inputPath) {
  const img = sharp(inputPath).rotate(); // auto-orient via EXIF
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  function rowStats(y) {
    let whiteCount = 0, blackCount = 0;
    const n = width;
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      if (r > 232 && g > 232 && b > 232) whiteCount++;
      else if (r < 42 && g < 42 && b < 42) blackCount++;
    }
    return { fracWhite: whiteCount / n, fracBlack: blackCount / n };
  }

  // A UI/watermark bar row is overwhelmingly one flat colour (background),
  // even if it also carries sparse dark text or light icons/glyphs on top of that flat field.
  const isBarRow = ({ fracWhite, fracBlack }) => fracWhite > 0.7 || fracBlack > 0.7;
  const maxScan = Math.floor(height * 0.22); // never eat more than 22% off either edge

  let top = 0;
  for (let y = 0; y < maxScan; y++) {
    if (isBarRow(rowStats(y))) top = y + 1;
    else break;
  }

  let bottom = height;
  for (let y = height - 1; y >= height - maxScan; y--) {
    if (isBarRow(rowStats(y))) bottom = y;
    else break;
  }

  if (bottom - top < height * 0.5) {
    // Safety: if this would remove more than half the image, trust nothing was actually wrong.
    return sharp(inputPath).rotate();
  }
  if (top === 0 && bottom === height) return sharp(inputPath).rotate();

  return sharp(inputPath).rotate().extract({ left: 0, top, width, height: bottom - top });
}

async function optimise(inputPath, outputPath, { maxDim = 1920, quality = 82 } = {}) {
  const pipeline = await autotrimBars(inputPath);
  await pipeline
    .resize({ width: maxDim, height: maxDim, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .withMetadata({}) // strip GPS/EXIF but keep orientation already baked in via rotate()
    .toFile(outputPath);
}

const HERO_OUTDOOR = [
  ["WhatsApp Image 2026-09-14 at 1.16.08 AM.jpeg", "hero-concrete-mixer-site.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.20.46 AM.jpeg", "hero-excavator-earthworks.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.20.47 AM.jpeg", "hero-excavator-fleet.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.34.46 AM (2).jpeg", "hero-concrete-mixer-close.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.34.47 AM.jpeg", "hero-haul-truck.jpg"],
];

const EQUIPMENT_STUDIO = [
  ["WhatsApp Image 2026-09-14 at 1.34.46 AM (1).jpeg", "equipment-ppe-kit.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.34.46 AM.jpeg", "equipment-crane-truck.jpg"],
  ["WhatsApp Image 2026-09-14 at 4.09.11 AM.jpeg", "equipment-road-roller.jpg"],
];

// filename -> [output slug, location/category label]
const PROJECT_FILES = [
  ["Enugu ezike, Enugu.jpg", "enugu-ezike-1", "Enugu Ezike, Enugu State"],
  ["Enugu Project.jpg", "enugu-project-1", "Enugu State"],
  ["Ikosi Isheri LCDA 2.jpg", "ikosi-isheri-2", "Ikosi-Isheri LCDA, Lagos"],
  ["Ikosi Isheri LCDA.jpg", "ikosi-isheri-1", "Ikosi-Isheri LCDA, Lagos"],
  ["Ikosi, Lagos Project pic 2.jpg", "ikosi-lagos-2", "Ikosi, Lagos"],
  ["Ikosi, Lagos Project.jpg", "ikosi-lagos-1", "Ikosi, Lagos"],
  ["Ketu, Lagos.jpg", "ketu-lagos", "Ketu, Lagos"],
  ["Mile 2, Lagos.jpg", "mile-2-lagos", "Mile 2, Lagos"],
  ["Nsukka, Enugu Project.jpg", "nsukka-enugu", "Nsukka, Enugu State"],
  ["Port Harcourt City 2.jpg", "port-harcourt-2", "Port Harcourt, Rivers State"],
  ["Port Harcourt City.jpg", "port-harcourt-1", "Port Harcourt, Rivers State"],
  ["IMG-20260911-WA0016.jpg", "structural-build-01", "Nationwide Site Works"],
  ["IMG-20260911-WA0017.jpg", "stamped-concrete-01", "Decorative Concrete Finishing"],
  ["IMG-20260911-WA0019(1).jpg", "structural-build-02", "Nationwide Site Works"],
  ["IMG-20260911-WA0020.jpg", "structural-build-03", "Nationwide Site Works"],
  ["IMG-20260911-WA0021.jpg", "structural-build-04", "Nationwide Site Works"],
  ["IMG-20260911-WA0022.jpg", "stamped-concrete-02", "Decorative Concrete Finishing"],
  ["IMG-20260911-WA0023.jpg", "stamped-concrete-03", "Decorative Concrete Finishing"],
  ["IMG-20260911-WA0025.jpg", "stamped-concrete-04", "Decorative Concrete Finishing"],
  ["IMG-20260911-WA0026.jpg", "structural-build-05", "Nationwide Site Works"],
  ["IMG-20260911-WA0031.jpg", "stamped-concrete-05", "Decorative Concrete Finishing"],
  ["IMG-20260911-WA0032.jpg", "stamped-concrete-06", "Decorative Concrete Finishing"],
  ["IMG-20260911-WA0033.jpg", "site-supervision-01", "Nationwide Site Works"],
  ["IMG-20260911-WA0034.jpg", "tiling-finishing-01", "Interior Finishing & Tiling"],
  ["IMG-20260911-WA0035.jpg", "tiling-finishing-02", "Interior Finishing & Tiling"],
  ["IMG-20260911-WA0037.jpg", "roofing-01", "Roofing & Decking"],
  ["IMG-20260911-WA0039.jpg", "roofing-02", "Roofing & Decking"],
  ["IMG-20260911-WA0040.jpg", "site-supervision-02", "Nationwide Site Works"],
  // IMG-20260911-WA0024.jpg intentionally excluded: a video-thumbnail screenshot, not a usable photo.
];

async function main() {
  console.log("Processing hero (outdoor) images...");
  for (const [src, out] of HERO_OUTDOOR) {
    await optimise(path.join(SRC_HERO, src), path.join(OUT_HERO, out), { maxDim: 2400, quality: 84 });
    console.log(" ", out);
  }

  console.log("Processing equipment (studio) images...");
  for (const [src, out] of EQUIPMENT_STUDIO) {
    await optimise(path.join(SRC_HERO, src), path.join(OUT_EQUIP, out), { maxDim: 1600, quality: 86 });
    console.log(" ", out);
  }

  console.log("Processing project photos...");
  const manifest = [];
  for (const [src, slug, location] of PROJECT_FILES) {
    const outFile = `${slug}.jpg`;
    await optimise(path.join(SRC_PROJECTS, src), path.join(OUT_PROJECTS, outFile), { maxDim: 1920, quality: 82 });
    manifest.push({ file: outFile, location });
    console.log(" ", outFile, "<-", src);
  }

  fs.writeFileSync(
    path.join(__dirname, "projects-manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
