import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import MaterialsCatalogue from "@/components/shop/MaterialsCatalogue";
import { deliveryTerms, materialsNote } from "@/data/materials";

export const metadata: Metadata = {
  title: "Building Materials Shop | Order Online, Delivered Nationwide",
  description:
    "Buy cement, steel, blocks, roofing sheets, tiles, and more directly from Nigeria's trusted building materials supplier. Masterpoint Resources Ltd delivers to your site, nationwide. Order online today.",
};

export default function MaterialsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 sm:py-28">
        <Container>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Building Materials Supply
          </span>
          <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
            Order Materials Online
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            No middlemen, no mark-ups. Browse our catalogue, add what you need to your order list,
            and send it straight to our team, or request a quote directly on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <Link href="/cart" className="font-bold text-brand-blue hover:text-white">
              View My Order List →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <MaterialsCatalogue />
          <p className="mt-10 text-center text-sm text-brand-dark/50">{materialsNote}</p>
        </Container>
      </section>

      <section className="bg-[#F7F7F7] py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-semibold uppercase text-brand-dark">
            Delivery &amp; Equipment
          </h2>
          <ul className="mt-8 space-y-3">
            {deliveryTerms.map((term) => (
              <li key={term} className="flex items-start gap-3 rounded-lg bg-white p-4 text-sm text-brand-dark/75 shadow-sm">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {term}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
