import Link from "next/link";
import ShuffleBackdrop from "@/components/shared/ShuffleBackdrop";
import { heroSlides } from "@/data/hero";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden sm:min-h-[720px]">
      <ShuffleBackdrop slides={heroSlides} intervalMs={4500} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-brand-orange/60 bg-black/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange backdrop-blur-sm sm:text-sm">
            Nationwide Construction &amp; Building Materials
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold uppercase leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Structural Excellence for Your Next{" "}
            <span className="text-brand-orange">Landmark Project</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Property developers, structural engineers, homeowners and corporate estate firms trust
            Masterpoint for uncompromising quality and precision building solutions — backed by{" "}
            {company.yearsExperience} years of combined experience, nationwide.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/materials"
              className="rounded-md bg-brand-orange px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-orange/30 transition-transform hover:scale-[1.03] hover:bg-brand-orange-dark sm:text-base"
            >
              Order Materials Online
            </Link>
            <a
              href={whatsappLink("Hello Masterpoint, I would like to make an enquiry about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-brand-blue bg-black/20 px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-brand-blue sm:text-base"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${company.phones[0].tel}`}
              className="flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-bold uppercase tracking-wide text-white underline decoration-brand-orange decoration-2 underline-offset-4 sm:text-base"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
