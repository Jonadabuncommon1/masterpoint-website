import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import Accordion from "@/components/shared/Accordion";
import { faqs } from "@/data/faq";

export default function FAQPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers Before You Ask"
          align="center"
        />
        <div className="mt-12">
          <Accordion items={faqs.slice(0, 5)} />
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="text-sm font-bold text-brand-orange hover:text-brand-orange-dark">
            View all frequently asked questions →
          </Link>
        </div>
      </Container>
    </section>
  );
}
