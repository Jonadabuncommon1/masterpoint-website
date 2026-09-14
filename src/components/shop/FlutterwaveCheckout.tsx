"use client";

import Script from "next/script";
import { useState } from "react";
import { FLUTTERWAVE_PUBLIC_KEY, generateTxRef } from "@/lib/flutterwave";
import { whatsappLink } from "@/lib/whatsapp";

type Status = "idle" | "processing" | "success" | "error";

export default function FlutterwaveCheckout({ defaultAmount = 0 }: { defaultAmount?: number }) {
  const [scriptReady, setScriptReady] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(defaultAmount || 50000);
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState<string | null>(null);

  const keyConfigured = FLUTTERWAVE_PUBLIC_KEY.length > 0;

  function pay() {
    if (!keyConfigured || !scriptReady || !window.FlutterwaveCheckout) return;
    if (!name || !email || !phone || amount <= 0) return;

    const tx_ref = generateTxRef();
    setStatus("processing");

    window.FlutterwaveCheckout({
      public_key: FLUTTERWAVE_PUBLIC_KEY,
      tx_ref,
      amount,
      currency: "NGN",
      payment_options: "card,banktransfer,ussd",
      customer: { email, phone_number: phone, name },
      customizations: {
        title: "Masterpoint Resources Ltd",
        description: "Payment for construction materials / project deposit",
        logo: typeof window !== "undefined" ? `${window.location.origin}/images/logo/masterpoint-icon.png` : undefined,
      },
      callback: (response) => {
        console.log("Flutterwave response", response);
        setReference(tx_ref);
        setStatus("success");
      },
      onclose: () => {
        setStatus((s) => (s === "success" ? s : "idle"));
      },
    });
  }

  if (!keyConfigured) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-brand-blue/30 bg-brand-blue/5 p-6 text-center">
        <p className="text-sm font-semibold text-brand-dark">Online card payment is being set up.</p>
        <p className="mt-2 text-sm text-brand-dark/60">
          In the meantime, place your order and complete payment by bank transfer, arranged over WhatsApp.
        </p>
        <a
          href={whatsappLink("Hello Masterpoint, I would like to pay for my order/invoice. Please share your bank details.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-brand-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
        >
          Arrange Payment on WhatsApp
        </a>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-brand-green/30 bg-brand-green/5 p-6 text-center">
        <p className="font-heading text-lg font-semibold text-brand-dark">Payment Submitted</p>
        <p className="mt-2 text-sm text-brand-dark/65">
          Reference: <span className="font-mono">{reference}</span>. Please keep this for your
          records — our team will confirm your payment shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-brand-blue/20 bg-white p-6 shadow-sm sm:p-8">
      <Script
        src="https://checkout.flutterwave.com/v3.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <h3 className="font-heading text-lg font-semibold text-brand-dark">Pay a Deposit or Invoice Online</h3>
      <p className="mt-2 text-sm text-brand-dark/60">
        Secure card, bank transfer or USSD payment via Flutterwave.
      </p>

      <div className="mt-6 space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="w-full rounded-md border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-md border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="w-full rounded-md border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-dark">Amount (NGN)</label>
          <input
            type="number"
            min={1000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-2 w-full rounded-md border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={pay}
        disabled={!scriptReady || status === "processing" || !name || !email || !phone || amount <= 0}
        className="mt-6 w-full rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "processing" ? "Processing..." : "Pay Now"}
      </button>
      <p className="mt-3 text-xs text-brand-dark/45">
        Payments are processed securely by Flutterwave. Masterpoint never sees or stores your card details.
      </p>
    </div>
  );
}
