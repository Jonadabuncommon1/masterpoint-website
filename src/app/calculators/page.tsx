import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import CostEstimator from "@/components/calculators/CostEstimator";
import QuantityCalculator from "@/components/calculators/QuantityCalculator";

export const metadata: Metadata = {
  title: "Calculators",
  description:
    "Free interactive tools: a Building Material Cost Estimator and a Cement & Block Quantity Calculator to help you plan your project before you order.",
};

export default function CalculatorsPage() {
  return (
    <>
      <section className="bg-brand-blue py-20 sm:py-28">
        <Container>
          <span className="text-sm font-bold uppercase tracking-widest text-white/80">Free Tools</span>
          <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
            Plan Your Build With Confidence
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Two free tools to help you estimate cost and material quantities before you place an
            order or request a quote.
          </p>
        </Container>
      </section>

      <section className="bg-[#F7F7F7] py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <CostEstimator />
          <QuantityCalculator />
        </Container>
      </section>
    </>
  );
}
