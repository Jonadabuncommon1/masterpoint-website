import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import Accordion from "@/components/shared/Accordion";
import { faqs } from "@/data/faq";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions clients most often ask before starting a project or placing a materials order with Masterpoint Resources Ltd.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 sm:py-28">
        <Container>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">FAQs</span>
          <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Answers to what clients most often ask before starting a project or placing an order.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-4xl">
          <Accordion items={faqs} />

          <div className="mt-12 rounded-xl bg-[#F7F7F7] p-8 text-center">
            <h2 className="font-heading text-xl font-semibold text-brand-dark">Still have a question?</h2>
            <p className="mt-2 text-sm text-brand-dark/65">
              Our team is happy to talk through your project or order in more detail.
            </p>
            <a
              href={whatsappLink("Hello Masterpoint, I have a question that isn't in your FAQ.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue-dark"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
