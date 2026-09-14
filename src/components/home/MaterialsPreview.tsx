import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import { materials } from "@/data/materials";
import { whatsappLink } from "@/lib/whatsapp";

export default function MaterialsPreview() {
  const featured = materials.slice(0, 6);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Building Materials Supply"
            title="Direct-Source Materials, Delivered Nationwide"
            description="Cement, steel, blocks, roofing, tiles and more, in stock and ready to go. Order online or request a quote and we deliver straight to your site."
          />
          <Link
            href="/materials"
            className="shrink-0 rounded-md bg-brand-orange px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
          >
            Browse Materials
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((material) => (
            <div
              key={material.id}
              className="flex flex-col rounded-xl border-2 border-brand-blue/15 bg-white p-6 transition-colors hover:border-brand-blue/50"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wide text-brand-blue">
                  {material.category}
                </span>
                {material.inStock && (
                  <span className="whitespace-nowrap rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-green-dark">
                    In Stock &amp; Ready
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-brand-dark">{material.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark/65">{material.description}</p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-dark/50">
                  {material.unit}
                </span>
                <a
                  href={whatsappLink(`Hello Masterpoint, please send me a quote for: ${material.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-brand-orange hover:text-brand-orange-dark"
                >
                  Request Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
