// Builds wide landscape hero canvases from source photos that are square or
// portrait. Each output is a single flat image: a blurred, darkened, cover-fit
// copy of the same photo fills the full canvas, with the original sharp photo
// composited on top, centred and fully visible (never cropped). Because the
// letterboxing is baked into the file at a wide ratio, a plain object-fit:cover
// in the browser fills every edge of the hero frame without ever cutting into
// the vehicle, at any realistic viewport ratio from tablet to ultra-wide 4K.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.join(__dirname, "assets-src", "hero");
const OUT_DIR = path.join(__dirname, "..", "public", "images", "hero");

// 2.4:1 comfortably covers phone/tablet/laptop/desktop hero ratios; anything
// more extreme (super ultra-wide 4K) only eats further into the blurred
// margin, never the sharp subject, because the subject is centred with a
// generous margin on every side.
const CANVAS_W = 3840;
const CANVAS_H = 1600;
const SUBJECT_MAX_W = Math.round(CANVAS_W * 0.66);
const SUBJECT_MAX_H = Math.round(CANVAS_H * 0.82);

const FILES = [
  ["WhatsApp Image 2026-09-14 at 1.16.08 AM.jpeg", "hero-concrete-mixer-site.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.20.46 AM.jpeg", "hero-excavator-earthworks.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.20.47 AM.jpeg", "hero-excavator-fleet.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.34.46 AM (2).jpeg", "hero-concrete-mixer-close.jpg"],
  ["WhatsApp Image 2026-09-14 at 1.34.47 AM.jpeg", "hero-haul-truck.jpg"],
];

async function buildOne(srcFile, outFile) {
  const srcPath = path.join(SRC_DIR, srcFile);
  const src = sharp(srcPath).rotate();
  const meta = await src.metadata();

  // Background: the SAME framing as the foreground (same centre, just scaled
  // bigger than the canvas) so the blurred edge is a genuine continuation of
  // the sharp centre rather than a differently-cropped, mismatched patch.
  const bgScale = Math.max(CANVAS_W / meta.width, CANVAS_H / meta.height) * 1.25;
  const bgW = Math.round(meta.width * bgScale);
  const bgH = Math.round(meta.height * bgScale);
  const background = await sharp(srcPath)
    .rotate()
    .resize(bgW, bgH, { kernel: sharp.kernel.lanczos3 })
    .extract({
      left: Math.round((bgW - CANVAS_W) / 2),
      top: Math.round((bgH - CANVAS_H) / 2),
      width: CANVAS_W,
      height: CANVAS_H,
    })
    .blur(64)
    .modulate({ brightness: 0.6, saturation: 1.15 })
    .toBuffer();

  // Foreground: the whole photo, uncropped, scaled up to a large, crisp
  // centrepiece with high-quality resampling and a touch of sharpening to
  // counter the upscale from the source's native resolution.
  const scale = Math.min(SUBJECT_MAX_W / meta.width, SUBJECT_MAX_H / meta.height);
  const subjectW = Math.round(meta.width * scale);
  const subjectH = Math.round(meta.height * scale);

  const feather = Math.round(Math.min(subjectW, subjectH) * 0.22);
  const maskSvg = `<svg width="${subjectW}" height="${subjectH}">
    <defs>
      <filter id="f" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="${feather}" />
      </filter>
    </defs>
    <rect x="${feather}" y="${feather}" width="${subjectW - feather * 2}" height="${subjectH - feather * 2}"
      fill="white" filter="url(#f)" />
  </svg>`;

  const featheredForeground = await sharp(srcPath)
    .rotate()
    .resize(subjectW, subjectH, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.1 })
    .ensureAlpha()
    .composite([{ input: Buffer.from(maskSvg), blend: "dest-in" }])
    .toBuffer();

  await sharp(background)
    .composite([
      {
        input: featheredForeground,
        left: Math.round((CANVAS_W - subjectW) / 2),
        top: Math.round((CANVAS_H - subjectH) / 2),
      },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(OUT_DIR, outFile));
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [src, out] of FILES) {
    await buildOne(src, out);
    const { size } = fs.statSync(path.join(OUT_DIR, out));
    console.log(out, `${(size / 1024).toFixed(0)} KB`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
