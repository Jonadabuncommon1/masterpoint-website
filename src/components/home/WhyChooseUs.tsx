import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";

const REASONS = [
  {
    title: `${12} Years as a Certified Building Contractor`,
    body: "Over a decade contracting residential, commercial and industrial builds across Nigeria. Certified, inspected and guaranteed from ground up.",
    icon: "M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4Z",
    image: "/images/hero/card-integrity-1.jpg",
  },
  {
    title: "Direct-Source Building Materials",
    body: "We supply cement, steel and finishing materials direct from source, cutting out mark-ups and keeping your project on budget.",
    icon: "M4 7h16M4 12h16M4 17h10",
    image: "/images/hero/card-integrity-2.jpg",
  },
  {
    title: "Certified Site Supervision",
    body: "Every build runs under certified supervisors, enforcing national engineering standards and PPE requirements at every stage.",
    icon: "M9 12l2 2 4-4M7.5 3h9L21 7.5v9L16.5 21h-9L3 16.5v-9L7.5 3Z",
    image: "/images/hero/card-integrity-3.jpg",
  },
  {
    title: "On Time, On Budget",
    body: "We deliver your build to programme and to budget. That is the contractor's commitment, not just a slogan.",
    icon: "M12 8v4l3 3M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
    image: "/images/hero/card-integrity-4.jpg",
  },
  {
    title: "2 to 5 Year Structural Guarantee",
    body: "A written structural warranty on completed work, scaled to your project's scope and condition. That is how confident we are.",
    icon: "M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4Z",
    image: "/images/hero/card-integrity-5.jpg",
  },
  {
    title: "Nationwide Building Contractor",
    body: "We take on building contracts across Lagos, Enugu, Abuja, Rivers, Ogun, Anambra and beyond. Wherever your site is.",
    icon: "M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9Z",
    image: "/images/hero/card-integrity-6.jpg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="One Contractor. Certified. Nationwide."
          description="From foundation to final finishing, we are the building contractor and direct-source materials supplier that handles your entire build. No juggling multiple teams. No nasty surprises."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/5"
            >
              <Image
                src={reason.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-[0.16] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.26]"
              />
              <div className="relative p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-brand-dark">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">{reason.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
