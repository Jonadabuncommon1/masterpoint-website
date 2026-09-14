"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { useCart } from "@/components/shop/CartContext";
import FlutterwaveCheckout from "@/components/shop/FlutterwaveCheckout";
import { whatsappLink } from "@/lib/whatsapp";

export default function CartPage() {
  const { items, updateQty, removeItem, clear } = useCart();

  const orderMessage =
    items.length === 0
      ? ""
      : [
          "Hello Masterpoint, I would like to order the following materials:",
          ...items.map((i) => `• ${i.name}, Qty: ${i.qty} (${i.unit})`),
          "Please confirm availability, pricing and delivery.",
        ].join("\n");

  return (
    <>
      <section className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Order List</span>
          <h1 className="mt-4 font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
            Your Materials Order
          </h1>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-black/15 p-10 text-center">
                <p className="text-brand-dark/60">Your order list is empty.</p>
                <Link
                  href="/materials"
                  className="mt-4 inline-block rounded-md bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-orange-dark"
                >
                  Browse Materials
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-black/10 p-5"
                  >
                    <div>
                      <p className="font-heading text-base font-semibold text-brand-dark">{item.name}</p>
                      <p className="text-xs text-brand-dark/50">{item.unit}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center rounded-md border border-black/15">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="flex h-9 w-9 items-center justify-center hover:bg-black/5"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="flex h-9 w-9 items-center justify-center hover:bg-black/5"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="text-brand-dark/40 hover:text-red-500"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href={whatsappLink(orderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-brand-green px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-green-dark"
                  >
                    Send Order via WhatsApp
                  </a>
                  <button
                    onClick={clear}
                    className="rounded-md border-2 border-black/15 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-dark/60 hover:border-red-300 hover:text-red-500"
                  >
                    Clear List
                  </button>
                </div>
                <p className="text-xs text-brand-dark/45">
                  Prices vary with current market rates. Send your order list to receive confirmed
                  pricing and a delivery timeline before you pay.
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <FlutterwaveCheckout />
          </div>
        </Container>
      </section>
    </>
  );
}
