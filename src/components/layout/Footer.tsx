import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/whatsapp";

const SOCIALS = [
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "youtube", label: "YouTube" },
] as const;

const SOCIAL_ICON_PATHS: Record<(typeof SOCIALS)[number]["key"], string> = {
  facebook: "M13.5 9H15V6.5h-1.75C11.6 6.5 10.5 7.6 10.5 9.25V11H9v2.5h1.5V19h2.5v-5.5h1.75L15 11h-2v-1.25c0-.4.1-.75.5-.75Z",
  instagram:
    "M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 6.1a2.35 2.35 0 1 1 0-4.7 2.35 2.35 0 0 1 0 4.7ZM16.1 6.9a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 5.4c1.87 0 2.1.007 2.84.04.68.03 1.05.14 1.3.24.32.12.55.27.79.51.24.24.39.47.51.79.1.25.21.62.24 1.3.033.74.04.97.04 2.84s-.007 2.1-.04 2.84c-.03.68-.14 1.05-.24 1.3-.12.32-.27.55-.51.79a2.12 2.12 0 0 1-.79.51c-.25.1-.62.21-1.3.24-.74.033-.97.04-2.84.04s-2.1-.007-2.84-.04c-.68-.03-1.05-.14-1.3-.24a2.12 2.12 0 0 1-.79-.51 2.12 2.12 0 0 1-.51-.79c-.1-.25-.21-.62-.24-1.3-.033-.74-.04-.97-.04-2.84s.007-2.1.04-2.84c.03-.68.14-1.05.24-1.3.12-.32.27-.55.51-.79.24-.24.47-.39.79-.51.25-.1.62-.21 1.3-.24.74-.033.97-.04 2.84-.04ZM12 4c-1.9 0-2.14.008-2.89.042-.75.034-1.26.154-1.7.328a3.53 3.53 0 0 0-1.28.833 3.53 3.53 0 0 0-.833 1.28c-.174.44-.294.95-.328 1.7C5.008 8.93 5 9.17 5 11.07v1.86c0 1.9.008 2.14.042 2.89.034.75.154 1.26.328 1.7.18.47.42.86.833 1.28.42.42.81.653 1.28.833.44.174.95.294 1.7.328.75.034.99.042 2.89.042s2.14-.008 2.89-.042c.75-.034 1.26-.154 1.7-.328a3.53 3.53 0 0 0 1.28-.833c.42-.42.653-.81.833-1.28.174-.44.294-.95.328-1.7.034-.75.042-.99.042-2.89v-1.86c0-1.9-.008-2.14-.042-2.89-.034-.75-.154-1.26-.328-1.7a3.53 3.53 0 0 0-.833-1.28 3.53 3.53 0 0 0-1.28-.833c-.44-.174-.95-.294-1.7-.328C14.14 4.008 13.9 4 12 4Z",
  linkedin:
    "M6.94 8.5a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88ZM5.5 10h2.88v8.5H5.5V10Zm5.25 0h2.76v1.16h.04c.385-.73 1.325-1.5 2.73-1.5 2.92 0 3.46 1.92 3.46 4.42v4.42h-2.88v-3.92c0-.935-.017-2.14-1.305-2.14-1.305 0-1.505 1.02-1.505 2.07v3.99h-2.88V10Z",
  youtube:
    "M21.6 8.2s-.21-1.48-.86-2.13c-.82-.86-1.74-.86-2.16-.91C15.6 5 12 5 12 5h-.01s-3.6 0-6.58.16c-.42.05-1.34.05-2.16.91-.65.65-.86 2.13-.86 2.13S2 9.93 2 11.65v1.62c0 1.72.19 3.45.19 3.45s.21 1.48.85 2.13c.82.86 1.9.83 2.38.92C7.15 19.96 12 20 12 20s3.6-.005 6.58-.17c.42-.05 1.34-.05 2.16-.91.65-.65.86-2.13.86-2.13S22 15.07 22 13.35v-1.62c0-1.72-.4-3.53-.4-3.53ZM9.95 14.9V9.7l5.4 2.6-5.4 2.6Z",
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white/80">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "url('/images/hero/footer-equipment-blueprint.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "620px auto",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/images/logo/masterpoint-logo-footer.png"
            alt="Masterpoint Resources Ltd"
            width={220}
            height={36}
            style={{ width: "auto", filter: "drop-shadow(0 0 1px rgba(255,255,255,0.6))" }}
            className="h-8 sm:h-9"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/60">{company.slogan}</p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={SOCIAL_ICON_PATHS[s.key]} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Materials Shop", "/materials"],
              ["Calculators", "/calculators"],
              ["Projects", "/projects"],
              ["FAQs", "/faq"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-brand-orange">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-brand-orange">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="transition-colors hover:text-brand-orange">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-brand-orange">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Get In Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>
                {company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.state}
              </span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5c0-.55.45-1 1-1H7l2 4.5-1.7 1.3a11 11 0 0 0 4.9 4.9l1.3-1.7 4.5 2v3a1 1 0 0 1-1 1c-8.3 0-15-6.7-15-15Z" />
              </svg>
              <span className="flex flex-col">
                {company.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="transition-colors hover:text-brand-orange">
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.5h18v12H3v-12Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
              </svg>
              <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-brand-orange">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
              </svg>
              <span>{company.workingHours}</span>
            </li>
          </ul>
          <a
            href={whatsappLink("Hello Masterpoint, I would like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-md bg-brand-blue px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Built for nationwide construction &amp; building materials supply.</p>
        </div>
      </div>
    </footer>
  );
}
