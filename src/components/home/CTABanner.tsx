import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { whatsappLink } from "@/lib/whatsapp";
import { company } from "@/data/company";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand-rust py-16 sm:py-20">
      <Image
        src="/images/hero/section-cta-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-rust/95 via-brand-rust/70 to-brand-rust/40" />

      <Container className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <h2 className="text-balance font-engineering text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Don&apos;t Let Poor Materials Ruin Your Build
          </h2>
          <p className="mt-4 text-white/80">
            Every day you wait is a day closer to a rushed decision. Speak to our team today for a
            free consultation, or request a quote on materials for your site. {company.slogan}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-brand-orange px-8 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_25px_rgba(255,107,0,0.65)] transition-all hover:scale-[1.04] hover:bg-brand-orange-dark hover:shadow-[0_0_38px_rgba(255,107,0,0.9)]"
          >
            Request a Quote
          </Link>
          <a
            href={whatsappLink("Hello Masterpoint, I would like to make an enquiry about a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-brand-blue bg-brand-blue/10 px-8 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_25px_rgba(0,168,255,0.55)] transition-all hover:scale-[1.04] hover:bg-brand-blue hover:shadow-[0_0_38px_rgba(0,168,255,0.85)]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
