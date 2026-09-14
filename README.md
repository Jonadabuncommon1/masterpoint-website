# Masterpoint Resources Ltd — Website

Corporate website for Masterpoint Resources Limited: construction services, building
materials supply, and project portfolio, with an online materials order list, two
planning calculators, and card/bank payment via Flutterwave.

## Tech stack

- **Next.js (App Router) + TypeScript + Tailwind CSS** — pages, components, styling
- **Sharp** (build-time only, see `scripts/`) — logo colour processing and photo optimisation
- **ffmpeg** (build-time only) — project video compression
- **Flutterwave** inline checkout (loaded directly from Flutterwave's own script, no extra
  dependency) — card / bank transfer / USSD payments

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY` — your live/test public key from the
  [Flutterwave dashboard](https://dashboard.flutterwave.com/settings/apis). Until this is
  set, the "Pay a Deposit or Invoice Online" section on `/cart` shows a WhatsApp-based
  fallback instead of the card form, so the site is always usable.

When deploying on Vercel, add the same variable under **Project Settings → Environment
Variables**.

## Editing content

Almost everything a client would want to change lives in `src/data/*.ts` as plain
objects/arrays — no JSX editing required:

| File | Controls |
|---|---|
| `company.ts` | Address, phone numbers, email, working hours, stats, warranty text |
| `services.ts` | Services list, design-to-build capabilities, safety standards |
| `materials.ts` | Materials catalogue, categories, delivery terms |
| `projects.ts` | Portfolio entries (images/videos per project) |
| `faq.ts` | FAQ questions and answers |
| `testimonials.ts` | Client quotes — **currently placeholders**, see note below |
| `hero.ts` | Homepage hero slideshow images, equipment showcase |

### Testimonials are placeholders

`src/data/testimonials.ts` contains representative, unattributed sample quotes (role +
project location, no invented personal names) because the client questionnaire didn't
include verbatim client reviews. Replace these with real client quotes as soon as they're
available.

### Indicative pricing in the calculators

`src/components/calculators/CostEstimator.tsx` uses a `RATE_PER_SQM` constant for its
indicative cost range, and `QuantityCalculator.tsx` uses rule-of-thumb block/cement
coverage figures. Both are clearly labelled "indicative" on the page. Review and update
the rate constant periodically as material and labour costs move — construction costs in
Nigeria change quickly, and hard-coding this in the data files would go stale.

## Images and videos

- `public/images/logo/` — processed logo variants (see `scripts/process-logo.js`)
- `public/images/hero/`, `public/images/equipment/`, `public/images/projects/` — processed
  photos (see `scripts/process-images.js`)
- `public/videos/` — compressed project videos

The `scripts/assets-src/` folder holds the original, unprocessed source files and the
processing scripts that produced everything in `public/`. Re-run
`node scripts/process-images.js` after replacing anything in `assets-src/` with a new
photo of the same role. Video compression was run manually via `ffmpeg`; see the git/agent
history for the exact command if new videos need compressing (target: H.264, ~854px wide,
CRF 30, AAC audio).

Run `npm run check-assets` (a small Python script) at any time to flag any image or video
in `public/` that's grown past a sensible size for a fast-loading page.

Gallery and hero photography is wrapped in `ProtectedImage`
(`src/components/shared/ProtectedImage.tsx`), which disables right-click "Save Image As"
and drag-to-save. This deters casual downloading but, like any client-side measure, cannot
stop a determined user (e.g. a browser screenshot) — there is no way to fully prevent that
on the open web.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, "Add New Project" → import the repository → framework preset "Next.js" is
   detected automatically.
3. Add the `NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY` environment variable (see above).
4. Deploy. Point your real domain at the Vercel project once ready, then update the
   `siteUrl`/`baseUrl` constants in `src/app/layout.tsx`, `src/app/sitemap.ts` and
   `src/app/robots.ts` to match the live domain.

## Legal pages

`src/app/privacy-policy` and `src/app/terms-conditions` are drafted specifically for
Masterpoint Resources Limited from the answers given in the client questionnaire. They are
a reasonable professional starting point, not a substitute for independent legal review
before relying on them for a live commercial site.
