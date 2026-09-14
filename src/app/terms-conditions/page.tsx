import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The Masterpoint Resources Ltd Terms and Conditions of business.",
};

const lastUpdated = "14 September 2026";

export default function TermsConditionsPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Legal</span>
        <h1 className="mt-3 font-heading text-3xl font-bold uppercase text-brand-dark sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-brand-dark/50">Last updated: {lastUpdated}</p>

        <div className="prose-custom mt-10 space-y-8 text-sm leading-relaxed text-brand-dark/80 sm:text-base">
          <p>
            These Terms and Conditions govern your use of this website and any construction
            services or building materials supplied by {company.legalName} (&quot;Masterpoint&quot;,
            &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). By using this website, requesting a
            quotation, or placing an order, you agree to these terms.
          </p>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">1. Our Services</h2>
            <p className="mt-3">
              We provide construction services, including architectural design, structural
              drawings, Bills of Quantities, town planning approvals and full project supervision,
              alongside the direct supply of building materials, nationwide across Nigeria.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">2. Quotations &amp; Estimates</h2>
            <p className="mt-3">
              Any cost estimate shown on this website, including figures produced by our online
              calculators, is indicative only and provided for initial planning purposes. It does
              not constitute a binding quotation. A firm price will only be confirmed after we have
              reviewed your specific project or order in detail.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">3. Payment Terms for Construction Contracts</h2>
            <p className="mt-3">{company.payment.mobilisationDeposit}, with further instalments tied to agreed project milestones as set out in your specific contract.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">4. Payment Terms for Building Materials</h2>
            <p className="mt-3">{company.payment.materialsPolicy}</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">5. Delivery</h2>
            <p className="mt-3">
              We deliver building materials nationwide using our own trucks. Delivery timelines,
              minimum order sizes and any delivery charges will be confirmed with you before
              dispatch. Bulk discounts are available on trailer-load and site-wide orders. Selected
              plant and equipment can be made available for hire at an additional cost, subject to
              availability.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">6. Returns, Refunds &amp; Damaged Goods</h2>
            <p className="mt-3">{company.payment.returnsPolicy} Please inspect all deliveries on arrival before offloading wherever possible.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">7. Responsibility on Site</h2>
            <p className="mt-3">{company.payment.siteResponsibility}</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">8. Structural Guarantee</h2>
            <p className="mt-3">{company.warranty.text}</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">9. Safety &amp; Site Conduct</h2>
            <p className="mt-3">
              We maintain Personal Protective Equipment (PPE) requirements and certified site
              supervision on every project. Clients and visitors to an active construction site must
              follow the safety instructions of our site supervisors at all times.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">10. Online Payments</h2>
            <p className="mt-3">
              Where you choose to pay online, payments are processed securely by Flutterwave. We do
              not store your card details. A payment reference will be provided to you on completion,
              which should be quoted in any related correspondence.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">11. Intellectual Property</h2>
            <p className="mt-3">
              All content on this website, including text, photographs, videos and our logo, is the
              property of {company.legalName} unless otherwise stated, and may not be copied,
              downloaded or reused without our written permission.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">12. Confidentiality &amp; NDAs</h2>
            <p className="mt-3">
              Plans, drawings, site locations and personal information shared with us are kept
              confidential in line with our Privacy &amp; Confidentiality Policy. Non-Disclosure
              Agreements are available on request for government, corporate and other high-profile
              contracts.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">13. Limitation of Liability</h2>
            <p className="mt-3">
              While we take great care in the information provided on this website, it is provided
              for general guidance only. To the fullest extent permitted by law, {company.legalName}{" "}
              shall not be liable for any indirect or consequential loss arising from reliance on
              indicative figures shown on this website, in place of a formal quotation or contract.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">14. Governing Law</h2>
            <p className="mt-3">
              These terms are governed by the laws of the Federal Republic of Nigeria, and any
              disputes shall be subject to the exclusive jurisdiction of the Nigerian courts.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">15. Changes to These Terms</h2>
            <p className="mt-3">
              We may update these Terms and Conditions from time to time. The &quot;last
              updated&quot; date at the top of this page shows when it was last revised.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">16. Contact Us</h2>
            <p className="mt-3">
              For any questions about these terms, please contact us at{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-brand-orange">
                {company.email}
              </a>{" "}
              or {company.phones[0].display}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
