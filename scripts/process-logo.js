const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = path.join(__dirname, "assets-src/logo/source-logo.png");
const OUT_DIR = path.join(__dirname, "..", "public", "images", "logo");

// Measured from the source asset (5120x4040):
const BBOX = { minX: 695, maxX: 4632, minY: 1544, maxY: 2187 };
const WORDMARK_BOTTOM = 1948; // first transparent row after "MASTERPOINT" wordmark
const ICON_RIGHT = 1388; // stable right edge of the building icon glyph

async function demat(buffer, width, height, channels) {
  // Remove a flat white background matte and un-premultiply colour, producing real alpha.
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = buffer[i * channels];
    const g = buffer[i * channels + 1];
    const b = buffer[i * channels + 2];
    const minC = Math.min(r, g, b);
    const alpha = 255 - minC; // distance from white
    let nr = 0, ng = 0, nb = 0;
    if (alpha > 0) {
      nr = Math.max(0, Math.min(255, Math.round(((r - (255 - alpha)) * 255) / alpha)));
      ng = Math.max(0, Math.min(255, Math.round(((g - (255 - alpha)) * 255) / alpha)));
      nb = Math.max(0, Math.min(255, Math.round(((b - (255 - alpha)) * 255) / alpha)));
    }
    out[i * 4] = nr;
    out[i * 4 + 1] = ng;
    out[i * 4 + 2] = nb;
    out[i * 4 + 3] = alpha;
  }
  return out;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const full = sharp(SRC);
  const meta = await full.metadata();
  const { data, info } = await full.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const dematted = await demat(data, width, height, channels);

  // Crop to the full lockup bounding box (icon + MASTERPOINT + RESOURCES LTD)
  const cropW = BBOX.maxX - BBOX.minX;
  const cropH = BBOX.maxY - BBOX.minY;

  const fullLogoDark = sharp(dematted, { raw: { width, height, channels: 4 } }).extract({
    left: BBOX.minX,
    top: BBOX.minY,
    width: cropW,
    height: cropH,
  });

  // --- FOOTER VARIANT: full lockup, dark ink recoloured to near-white so it reads on #1A1A1A ---
  const croppedBuf = await fullLogoDark.clone().raw().toBuffer();
  const lightBuf = Buffer.from(croppedBuf);
  for (let i = 0; i < cropW * cropH; i++) {
    const r = lightBuf[i * 4], g = lightBuf[i * 4 + 1], b = lightBuf[i * 4 + 2], a = lightBuf[i * 4 + 3];
    if (a > 0 && Math.max(r, g, b) < 110) {
      // near-black/charcoal ink (wordmark + the dark icon bar) -> off-white; orange stays orange (its max channel is high)
      lightBuf[i * 4] = 245;
      lightBuf[i * 4 + 1] = 245;
      lightBuf[i * 4 + 2] = 245;
    }
  }
  await sharp(lightBuf, { raw: { width: cropW, height: cropH, channels: 4 } })
    .resize({ height: 320 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT_DIR, "masterpoint-logo-footer.png"));

  // --- NAV VARIANT: icon (full height) + "MASTERPOINT" wordmark only, dark ink (for white header) ---
  const navBuf = Buffer.from(croppedBuf);
  const relIconRight = ICON_RIGHT - BBOX.minX;
  const relWordmarkBottom = WORDMARK_BOTTOM - BBOX.minY;
  for (let y = relWordmarkBottom; y < cropH; y++) {
    for (let x = relIconRight; x < cropW; x++) {
      const idx = (y * cropW + x) * 4;
      navBuf[idx + 3] = 0;
    }
  }
  await sharp(navBuf, { raw: { width: cropW, height: cropH, channels: 4 } })
    .trim()
    .resize({ height: 400 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT_DIR, "masterpoint-logo-nav.png"));

  // Also export a dark full-lockup (transparent) version, useful on white sections e.g. footer top border, invoices
  await fullLogoDark
    .clone()
    .resize({ height: 320 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT_DIR, "masterpoint-logo-full-dark.png"));

  // Favicon source (icon only, square-ish crop, dark version on transparent)
  const iconOnlyBuf = Buffer.from(croppedBuf);
  await sharp(iconOnlyBuf, { raw: { width: cropW, height: cropH, channels: 4 } })
    .extract({ left: 0, top: 0, width: relIconRight, height: cropH })
    .resize({ width: 512, height: 512, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT_DIR, "masterpoint-icon.png"));

  console.log("Logo variants written to", OUT_DIR);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
