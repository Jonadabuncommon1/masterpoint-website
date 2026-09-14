"use client";

import { useState } from "react";
import { useCart } from "@/components/shop/CartContext";
import { whatsappLink } from "@/lib/whatsapp";
import type { Material } from "@/data/materials";

export default function MaterialCard({ material }: { material: Material }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-col rounded-xl border-2 border-brand-blue/15 bg-white p-6 transition-colors hover:border-brand-blue/50">
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-wide text-brand-blue">{material.category}</span>
        {material.inStock && (
          <span className="whitespace-nowrap rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-green-dark">
            In Stock &amp; Ready
          </span>
        )}
      </div>
      <h3 className="mt-3 font-heading text-lg font-semibold text-brand-dark">{material.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark/65">{material.description}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-dark/50">{material.unit}</p>

      <div className="mt-4 flex items-center gap-3 border-t border-black/5 pt-4">
        <div className="flex items-center rounded-md border border-black/15">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-9 w-9 items-center justify-center text-brand-dark hover:bg-black/5"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="flex h-9 w-9 items-center justify-center text-brand-dark hover:bg-black/5"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            addItem({ id: material.id, name: material.name, unit: material.unit }, qty);
            setAdded(true);
            setQty(1);
            setTimeout(() => setAdded(false), 1800);
          }}
          className="flex-1 rounded-md bg-brand-orange px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
        >
          {added ? "Added ✓" : "Add to Order List"}
        </button>
      </div>
      <a
        href={whatsappLink(`Hello Masterpoint, please send me a quote for: ${material.name} (Qty: ${qty} ${material.unit})`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-center text-xs font-bold text-brand-dark/60 hover:text-brand-orange"
      >
        Or request a quote directly on WhatsApp →
      </a>
    </div>
  );
}
