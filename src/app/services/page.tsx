import type { Metadata } from "next";
import Link from "next/link";
import ProtectedImage from "@/components/shared/ProtectedImage";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import { services, designToBuildCapabilities } from "@/data/services";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/whatsapp";
import EquipmentShowcase from "@/components/home/EquipmentShowcase";

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Residential, commercial and industrial construction services, full design-to-build capability, and structural guarantees of 2 to 5 years, delivered nationwide.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 sm:py-28">
        <Container>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Our Services</span>
          <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
            Construction Services, End to End
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Trained, skilled personnel render every construction service your project needs, from
            the first drawing to the final finish.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="flex flex-col overflow-hidden rounded-xl border border-black/5 shadow-sm">
                <div className="relative h-52 w-full">
                  <ProtectedImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-brand-dark">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">{service.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-brand-dark/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F7F7] py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Design to Build"
              title="A Complete Service, Start to Finish"
              description="We offer a full service from design through to build, not just the physical construction work."
            />
            <ul className="mt-6 space-y-3">
              {designToBuildCapabilities.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 text-sm font-semibold text-brand-dark shadow-sm">
                  <svg className="h-5 w-5 shrink-0 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-brand-dark p-10 text-white">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Structural Guarantee
            </span>
            <p className="mt-4 font-heading text-4xl font-bold">
              {company.warranty.minYears}–{company.warranty.maxYears} Years
            </p>
            <p className="mt-4 text-white/70">{company.warranty.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-orange px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
              >
                Request a Quote
              </Link>
              <a
                href={whatsappLink("Hello Masterpoint, I would like to discuss a construction project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-brand-blue px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <EquipmentShowcase />
    </>
  );
}
