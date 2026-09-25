import type { Metadata } from "next";
import RotatingHardHat from "@/components/shared/RotatingHardHat";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import StatCounter from "@/components/shared/StatCounter";
import { company } from "@/data/company";
import { safetyStandards } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us | 12 Years of Building Nigeria",
  description:
    "Masterpoint Resources Ltd is a building contractor with 12 years of certified construction experience across Nigeria. From Enugu to Lagos, we build structures that last. Meet the people behind the work.",
};

const DIFFERENTIATORS = [
  {
    title: "Direct-Source Materials",
    body: "We source cement, steel and finishing materials directly, cutting out unnecessary mark-ups and passing the benefit on to your project.",
  },
  {
    title: "Rigorous Quality Inspections",
    body: "Every stage of a build is inspected before the next begins, from foundation to final finishing.",
  },
  {
    title: "Elite Craftsmanship",
    body: "Trained, skilled personnel and certified site supervisors are assigned to every project we undertake.",
  },
  {
    title: "On Time, On Budget",
    body: "We deliver your projects on time and within budget, guaranteed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
        <Container className="relative">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">About Us</span>
          <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
            {company.yearsExperience} Years of Unyielding Structural Integrity
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{company.slogan}</p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Structural Excellence, Nationwide"
              description={`${company.legalName} has spent over a decade building structural excellence into every landmark project we touch. Our senior management team brings ${company.yearsExperience} years of combined experience to residential, commercial and industrial construction, alongside a full building materials supply operation.`}
            />
            <p className="mt-5 text-brand-dark/70 leading-relaxed">
              Our clients range from homeowners building their first family home to property
              developers, structural engineers and corporate estate firms delivering landmark
              developments. Whatever the scale, our promise is the same: uncompromising quality and
              precision building solutions.
            </p>
            <p className="mt-5 text-brand-dark/70 leading-relaxed">
              We are fully certified and compliant with national engineering standards, backed by
              rigorous safety protocols and certified site supervisors, to guarantee zero-compromise
              execution on every site.
            </p>
          </div>
          <RotatingHardHat />
        </Container>
      </section>

      <section className="bg-brand-dark py-16">
        <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {company.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-brand-orange">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-[#F7F7F7] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title="What Makes Masterpoint Different"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-semibold text-brand-dark">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Certification &amp; Safety"
              title="Compliant, Certified, Safe"
              description="We hold national engineering compliance and follow strict safety protocols on every site we operate."
            />
            <ul className="mt-6 space-y-3">
              {safetyStandards.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-dark/75">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Where We Work"
              title="Nationwide Coverage"
              description="Masterpoint has delivered construction work and materials across the following states, with nationwide coverage for new enquiries."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {company.statesServed.map((state) => (
                <span
                  key={state}
                  className="rounded-full border border-brand-blue/30 bg-brand-blue/5 px-4 py-1.5 text-sm font-medium text-brand-blue"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F7F7] py-20 sm:py-24">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow="Leadership &amp; Site Supervision"
            title="Engineering Leadership You Can Trust"
            align="center"
            description="Every Masterpoint project is led by certified site supervisors and an engineering leadership team with over a decade of hands-on experience, enforcing safety protocols and quality checks at every stage, from mobilisation to handover."
          />
        </Container>
      </section>
    </>
  );
}
