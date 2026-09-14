import Link from "next/link";
import Container from "@/components/shared/Container";
import { whatsappLink } from "@/lib/whatsapp";
import { company } from "@/data/company";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <Container className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-3xl font-semibold uppercase text-white sm:text-4xl">
            Don&apos;t Let Poor Materials Ruin Your Build
          </h2>
          <p className="mt-4 text-white/75">
            Every day you wait is a day closer to a rushed decision. Speak to our team today for a
            free consultation, or request a quote on materials for your site. {company.slogan}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-brand-orange px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-orange/20 transition-colors hover:bg-brand-orange-dark"
          >
            Request a Quote
          </Link>
          <a
            href={whatsappLink("Hello Masterpoint, I would like to make an enquiry about a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-2 border-brand-blue px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
