import ProtectedImage from "@/components/shared/ProtectedImage";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import { equipmentShowcase } from "@/data/hero";

export default function EquipmentShowcase() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Plant, Equipment &amp; Safety"
          title="Equipped for Every Site"
          align="center"
          description="Selected plant and equipment can be made available for your project, and every site runs under strict PPE requirements."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {equipmentShowcase.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-xl border border-black/5 bg-[#F7F7F7] shadow-sm">
              <div className="relative h-56 w-full bg-white">
                <ProtectedImage
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6 pt-2">
                <h3 className="font-heading text-base font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
