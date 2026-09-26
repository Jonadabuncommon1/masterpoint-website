import type { Metadata } from "next";
import RotatingHardHat from "@/components/shared/RotatingHardHat";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import StatCounter from "@/components/shared/StatCounter";
import { company } from "@/data/company";
import { safetyStandards } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us | Nigeria's Certified Building Contractor",
  description:
    "Masterpoint Resources Ltd is a certified building contractor and building materials supplier with 12 years of experience across Nigeria. From Enugu to Lagos, we build and supply. Meet the team behind the work.",
};

const DIFFERENTIATORS = [
  {
    title: "Direct-Source Building Materials",
    body: "We source cement, steel and finishing materials direct, cutting out unnecessary mark-ups and passing the saving to your project.",
  },
  {
    title: "Rigorous Stage Inspections",
    body: "Every stage of the build is inspected before the next begins, from foundation through to final finishing.",
  },
  {
    title: "Skilled, Certified Workforce",
    body: "Trained personnel and certified site supervisors are assigned to every building contract we take on.",
  },
  {
    title: "On Time, On Budget",
    body: "We deliver your building project on time and within budget. That is the contractor's guarantee.",
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
            {company.yearsExperience} Years as Nigeria&apos;s Trusted Building Contractor
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{company.slogan}</p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Building Contractor and Materials Supplier, Nationwide"
              description={`${company.legalName} has spent over a decade taking on building contracts and supplying construction materials across Nigeria. Our senior management brings ${company.yearsExperience} years of certified experience to residential, commercial and industrial projects, alongside a full direct-source materials supply operation.`}
            />
            <p className="mt-5 text-brand-dark/70 leading-relaxed">
              Our clients range from homeowners building their first family home to property
              developers and corporate estate firms. Whether your project is a two-bedroom bungalow
              or a commercial plaza, our promise is the same: a certified building contractor who
              delivers on time, on budget and to specification.
            </p>
            <p className="mt-5 text-brand-dark/70 leading-relaxed">
              We are fully certified and compliant with national engineering standards. Every building
              contract we take on is backed by rigorous safety protocols, certified site supervisors
              and zero-compromise quality inspection from mobilisation to handover.
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
            title="What Makes Masterpoint the Right Contractor for Your Project"
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
              title="Certified, Compliant and Site-Safe"
              description="We hold national engineering compliance and enforce strict safety protocols on every building contract we take on."
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
            title="Engineering Leadership on Every Build"
            align="center"
            description="Every Masterpoint building contract is led by certified site supervisors and an engineering team with over a decade of hands-on experience, enforcing quality checks and safety at every stage from mobilisation to handover."
          />
        </Container>
      </section>
    </>
  );
}
