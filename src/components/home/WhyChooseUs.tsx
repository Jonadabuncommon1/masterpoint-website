import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";

const REASONS = [
  {
    title: `${12} Years of Structural Integrity`,
    body: "Over a decade of combined experience delivering builds that hold up to scrutiny and time.",
    icon: "M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4Z",
    image: "/images/hero/card-integrity-1.jpg",
  },
  {
    title: "Direct-Source Materials",
    body: "Cement, steel and finishing materials sourced directly, cutting out middleman mark-ups.",
    icon: "M4 7h16M4 12h16M4 17h10",
    image: "/images/hero/card-integrity-2.jpg",
  },
  {
    title: "Certified Site Supervision",
    body: "Every site runs under certified supervisors, national engineering standards and enforced PPE.",
    icon: "M9 12l2 2 4-4M7.5 3h9L21 7.5v9L16.5 21h-9L3 16.5v-9L7.5 3Z",
    image: "/images/hero/card-integrity-3.jpg",
  },
  {
    title: "On-Time, On-Budget",
    body: "Rigorous quality inspections and elite craftsmanship, delivered to programme and to budget.",
    icon: "M12 8v4l3 3M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
    image: "/images/hero/card-integrity-4.jpg",
  },
  {
    title: "2–5 Year Structural Guarantee",
    body: "A structural warranty on completed work, scaled to the condition and scope of your project.",
    icon: "M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4Z",
    image: "/images/hero/card-integrity-5.jpg",
  },
  {
    title: "Nationwide Reach",
    body: "Projects delivered across Lagos, Enugu, Abuja, Rivers, Ogun, Anambra and beyond.",
    icon: "M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9Z",
    image: "/images/hero/card-integrity-6.jpg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Masterpoint"
          title="Built on Unyielding Structural Integrity"
          description="We combine direct-source building materials, rigorous quality inspections and elite craftsmanship to deliver your projects on time and within budget, guaranteed."
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
