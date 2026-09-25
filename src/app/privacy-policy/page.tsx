import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy and confidentiality policy of Masterpoint Resources Ltd, Nigeria's building contractor and building materials supplier. We protect your plans, personal details, and data.",
};

const lastUpdated = "14 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Legal</span>
        <h1 className="mt-3 font-heading text-3xl font-bold uppercase text-brand-dark sm:text-4xl">
          Privacy &amp; Confidentiality Policy
        </h1>
        <p className="mt-3 text-sm text-brand-dark/50">Last updated: {lastUpdated}</p>

        <div className="prose-custom mt-10 space-y-8 text-sm leading-relaxed text-brand-dark/80 sm:text-base">
          <p>
            {company.legalName} (&quot;Masterpoint&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;) is a building contractor and building materials supplier committed to
            protecting the privacy and confidentiality of everyone who visits this website, makes an
            enquiry, or engages us for construction or materials supply services. This policy explains what information we collect, how we use it,
            and the promises we make in return for your trust.
          </p>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">1. Information We Collect</h2>
            <p className="mt-3">We may collect the following information when you use this website or contact us:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Contact details you provide, such as your name, phone number and email address;</li>
              <li>Enquiry details submitted through our contact form, WhatsApp, phone or email;</li>
              <li>Building plans, architectural drawings, Bills of Quantities and site locations shared with us for a quotation or project;</li>
              <li>Materials order details, including items, quantities and delivery addresses;</li>
              <li>Payment details processed for you securely by our third-party payment provider, Flutterwave (we do not see or store your card details); and</li>
              <li>Basic technical information such as browser type, to help us keep this website working properly.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">2. How We Use Your Information</h2>
            <p className="mt-3">We use the information you share with us to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to your enquiry and prepare quotations;</li>
              <li>Plan, supervise and deliver construction projects and materials orders;</li>
              <li>Process payments for confirmed orders and invoices; and</li>
              <li>Communicate with you about the status of your project or order.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">3. Confidentiality of Plans &amp; Drawings</h2>
            <p className="mt-3">
              When you send us building plans, architectural drawings, or site locations, we treat
              this information as strictly confidential. We promise that your plans, drawings and
              personal contact details will never be sold, rented or disclosed to any third party
              other than the professionals directly engaged on your project, without your consent.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">4. Non-Disclosure Agreements</h2>
            <p className="mt-3">
              We regularly undertake government, corporate and other high-profile contracts that
              require additional confidentiality. Where required, we are pleased to enter into a
              formal Non-Disclosure Agreement (NDA) before any sensitive information is shared.
              Please raise this with our team before sending confidential material.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">5. Sharing of Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share limited information with
              trusted partners strictly where necessary to deliver your project or order, for
              example our payment processor (Flutterwave) to complete a transaction, or a logistics
              partner to fulfil a delivery.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">6. Data Security</h2>
            <p className="mt-3">
              We take reasonable technical and organisational measures to protect the information you
              share with us against unauthorised access, loss or misuse. No method of transmission
              over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">7. Cookies &amp; Local Storage</h2>
            <p className="mt-3">
              This website uses your browser&apos;s local storage to remember the contents of your
              materials order list between visits. This information stays on your own device and is
              not shared with us until you choose to send your order.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">8. Your Rights</h2>
            <p className="mt-3">
              You may ask us at any time what personal information we hold about you, request a
              correction, or ask us to delete information we no longer need to retain, in line with
              the Nigeria Data Protection Act 2023. To make a request, contact us using the details
              below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">9. Website Content &amp; Images</h2>
            <p className="mt-3">
              Photographs and videos of our completed and ongoing projects on this website belong to{" "}
              {company.legalName} and are protected by copyright. They are provided for viewing on
              this website only and may not be downloaded, copied or reused without our written
              permission.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">10. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this policy from time to time to reflect changes to our practices. The
              &quot;last updated&quot; date at the top of this page shows when it was last revised.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-brand-dark">11. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy &amp; Confidentiality Policy, please
              contact us at{" "}
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
