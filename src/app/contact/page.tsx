import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Masterpoint Resources Ltd for construction enquiries, materials orders and quotes. Call, WhatsApp or visit our Nsukka office.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 sm:py-28">
        <Container>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Contact Us</span>
          <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Reach us by phone, WhatsApp or email, or send a message below and we&apos;ll get back to you.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-[#F7F7F7] p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-dark">
                Office &amp; Yard Address
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.city}, {company.address.state}, {company.address.country}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F7F7F7] p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-dark">
                Phone &amp; WhatsApp
              </h3>
              <div className="mt-3 space-y-1 text-sm text-brand-dark/70">
                {company.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="block hover:text-brand-orange">
                    {p.display}
                  </a>
                ))}
              </div>
              <a
                href={whatsappLink("Hello Masterpoint, I would like to make an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-brand-green px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-[#F7F7F7] p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-dark">
                Email
              </h3>
              <a href={`mailto:${company.email}`} className="mt-3 block break-all text-sm text-brand-dark/70 hover:text-brand-orange">
                {company.email}
              </a>
            </div>

            <div className="rounded-2xl bg-[#F7F7F7] p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-dark">
                Working Hours
              </h3>
              <p className="mt-3 text-sm text-brand-dark/70">{company.workingHours}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
