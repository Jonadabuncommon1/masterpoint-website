import Link from "next/link";
import ShuffleBackdrop from "@/components/shared/ShuffleBackdrop";
import Container from "@/components/shared/Container";
import { calculatorsSlideshow } from "@/data/hero";

const TOOLS = [
  {
    title: "Building Material Cost Estimator",
    body: "Get an instant, indicative cost estimate for your project before you speak to us.",
    href: "/calculators#cost-estimator",
    icon: "M9 3h6l1 4H8l1-4ZM4 21h16M6 21V9h12v12",
  },
  {
    title: "Cement & Block Quantity Calculator",
    body: "Work out how much cement and how many blocks your build will need.",
    href: "/calculators#quantity-calculator",
    icon: "M3 3h8v8H3V3Zm10 0h8v5h-8V3ZM3 13h8v8H3v-8Zm10 3h8v5h-8v-5Z",
  },
];

export default function CalculatorsTeaser() {
  return (
    <section className="bg-brand-blue py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row">
          <div className="w-full lg:flex-1">
            <span className="text-sm font-extrabold uppercase tracking-widest text-white">
              Free Interactive Tools
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold uppercase text-white antialiased sm:text-4xl">
              Know Your Numbers Before You Hire a Contractor
            </h2>
            <p className="mt-4 max-w-xl font-medium text-white antialiased">
              Two free tools to help you budget accurately and understand your build costs before
              you spend a single naira.
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group flex flex-col rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-brand-dark">{tool.title}</h3>
                  <p className="mt-2 text-sm text-brand-dark/60">{tool.body}</p>
                  <span className="mt-4 text-sm font-bold text-brand-blue group-hover:text-brand-blue-dark">
                    Try it now →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sliding gallery of equipment/PPE photos, same height as the
              column on the left, changing every 2 seconds. */}
          <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-auto lg:w-[420px] lg:shrink-0">
            <ShuffleBackdrop slides={calculatorsSlideshow} intervalMs={2000} />
          </div>
        </div>
      </Container>
    </section>
  );
}
