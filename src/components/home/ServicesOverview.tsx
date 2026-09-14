import Link from "next/link";
import ProtectedImage from "@/components/shared/ProtectedImage";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import { services } from "@/data/services";

export default function ServicesOverview() {
  const featured = services.slice(0, 6);

  return (
    <section className="bg-[#F7F7F7] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Construction Services, End to End"
            description="From architectural design through to final finishing, our trained and certified teams handle every stage of your build."
          />
          <Link
            href="/services"
            className="shrink-0 rounded-md border-2 border-brand-dark px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            View All Services
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="group relative overflow-hidden rounded-xl bg-brand-dark"
            >
              <div className="relative h-64 w-full">
                <ProtectedImage
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6">
                <h3 className="font-heading text-lg font-semibold uppercase text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/75 line-clamp-2">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
