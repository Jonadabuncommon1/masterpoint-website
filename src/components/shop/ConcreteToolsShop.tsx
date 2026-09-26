"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/components/shop/CartContext";
import { whatsappLink } from "@/lib/whatsapp";

type ToolItem = {
  id: string;
  name: string;
  price: string;
  unit: string;
  images?: string[];
  video?: { src: string; poster?: string };
};

const SECTIONS = [
  {
    id: "finishing",
    label: "Finishing Materials",
    accent: "orange" as const,
    items: [
      {
        id: "colour-hardener",
        name: "Colour Hardener",
        price: "₦26,500",
        unit: "per 25kg bag",
        images: ["/images/tools/colour-hardener.jpg"],
      },
      {
        id: "antique-release",
        name: "Antique Release Agent",
        price: "₦56,500",
        unit: "per bag",
        images: ["/images/tools/antique-release.jpg"],
      },
      {
        id: "sealer-polish",
        name: "Sealer Polish",
        price: "₦5,800",
        unit: "per litre",
        images: ["/images/tools/sealer-polish.jpg"],
        video: { src: "/videos/tools/sealer-polish.mp4", poster: "/images/tools/sealer-polish.jpg" },
      },
      {
        id: "stain-plus",
        name: "Stain Plus",
        price: "₦4,700",
        unit: "per litre",
        images: ["/images/tools/sealer-polish.jpg"],
        video: { src: "/videos/tools/sealer-glossy.mp4", poster: "/images/tools/sealer-polish.jpg" },
      },
    ] as ToolItem[],
  },
  {
    id: "tools",
    label: "Tools & Equipment",
    accent: "blue" as const,
    items: [
      {
        id: "big-edger",
        name: "Big Edger",
        price: "₦25,000",
        unit: "each",
        images: ["/images/tools/edgers.jpg"],
        video: { src: "/videos/tools/edger-25k.mp4", poster: "/images/tools/edgers.jpg" },
      },
      {
        id: "medium-edger",
        name: "Medium Edger",
        price: "₦15,000",
        unit: "each",
        images: ["/images/tools/edgers.jpg"],
        video: { src: "/videos/tools/edger.mp4", poster: "/images/tools/edgers.jpg" },
      },
      {
        id: "border-roller",
        name: "Border Roller",
        price: "₦18,000",
        unit: "each",
        images: ["/images/tools/border-roller.jpg"],
      },
      {
        id: "medium-groover",
        name: "Medium Groover",
        price: "₦15,000",
        unit: "each",
        images: ["/images/tools/edgers.jpg"],
        video: { src: "/videos/tools/edger-2.mp4", poster: "/images/tools/edgers.jpg" },
      },
      {
        id: "turkey-groover",
        name: "Turkey Groover",
        price: "₦18,000",
        unit: "each",
        video: { src: "/videos/tools/tool-40k.mp4" },
      },
      {
        id: "pool-trowel",
        name: "Pool Trowel",
        price: "₦15,000",
        unit: "each",
        images: ["/images/tools/pool-trowel.jpg"],
      },
    ] as ToolItem[],
  },
  {
    id: "mats",
    label: "Stamping Mats",
    accent: "green" as const,
    items: [
      { id: "wooden-frame-mat", name: "Wooden Frame Mat", price: "₦280,000", unit: "pair of two", images: ["/images/tools/stamping-mats.jpg"] },
      { id: "versace-circle", name: "Versace Circle", price: "₦310,000", unit: "each", images: ["/images/tools/center-mat.jpg"] },
      { id: "wooden-plank", name: "Wooden Plank", price: "₦230,000", unit: "pair of two", images: ["/images/tools/stamping-mat-plank.jpg"] },
      { id: "large-ashlar", name: "Large Ashlar", price: "₦310,000", unit: "pair of two", images: ["/images/tools/stamping-mats.jpg"] },
      { id: "ashlar-stone", name: "Ashlar Stone", price: "₦275,000", unit: "pair of two", images: ["/images/tools/stamping-mat-2.jpg"] },
      { id: "vintage-mat", name: "Vintage Mat", price: "₦270,000", unit: "pair of two", images: ["/images/tools/stamping-mats.jpg"] },
      { id: "european-fan", name: "European Fan Mat", price: "₦280,000", unit: "pair of two", images: ["/images/tools/stamping-mats.jpg"] },
      { id: "orient-dream", name: "Orient Dream Mat", price: "₦260,000", unit: "pair of two", images: ["/images/tools/stamping-mat-plank.jpg"] },
      { id: "random-stone", name: "Random Stone Mat", price: "₦290,000", unit: "pair of two", images: ["/images/tools/stamping-mats.jpg"] },
      { id: "compass-circle", name: "Compass Circle Mat", price: "₦280,000", unit: "a piece", images: ["/images/tools/center-mat-2.jpg"] },
      { id: "medallion-circle", name: "Medallion Circle Mat", price: "₦220,000", unit: "each", images: ["/images/tools/center-mat.jpg"] },
    ] as ToolItem[],
  },
];

const ACCENT = {
  orange: {
    tab: "bg-brand-orange text-white",
    price: "text-brand-orange",
    btn: "bg-brand-orange hover:bg-brand-orange-dark text-white",
    wa: "text-brand-orange hover:opacity-75",
  },
  blue: {
    tab: "bg-brand-blue text-white",
    price: "text-brand-blue",
    btn: "bg-brand-blue hover:bg-brand-blue-dark text-white",
    wa: "text-brand-blue hover:opacity-75",
  },
  green: {
    tab: "bg-brand-green text-brand-dark",
    price: "text-brand-green-dark",
    btn: "bg-brand-green hover:opacity-90 text-brand-dark",
    wa: "text-brand-green-dark hover:opacity-75",
  },
};

// Four border-radius variants that cycle through for an organic, uneven feel
const SHAPES = [
  "rounded-xl",
  "rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg",
  "rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg",
  "rounded-2xl",
];

const IMG_SHAPES = [
  "rounded-xl",
  "rounded-tl-3xl rounded-br-2xl rounded-tr-lg rounded-bl-lg",
  "rounded-tr-3xl rounded-bl-2xl rounded-tl-lg rounded-br-lg",
  "rounded-t-2xl",
];

function ToolCard({ item, accent, idx }: { item: ToolItem; accent: "orange" | "blue" | "green"; idx: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const cardShape = SHAPES[idx % 4];
  const imgShape = IMG_SHAPES[idx % 4];
  const styles = ACCENT[accent];
  const firstImage = item.images?.[0];

  function handleAdd() {
    addItem({ id: `tool-${item.id}`, name: item.name, unit: item.unit }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className={`break-inside-avoid mb-3 overflow-hidden border border-black/10 bg-white shadow-sm ${cardShape}`}>
      {item.video ? (
        <video
          src={item.video.src}
          poster={item.video.poster}
          controls
          muted
          playsInline
          preload="none"
          className={`w-full aspect-[4/3] object-cover bg-black/5 ${imgShape}`}
        />
      ) : firstImage ? (
        <div className={`relative aspect-[4/3] overflow-hidden ${imgShape}`}>
          <Image
            src={firstImage}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className={`aspect-[4/3] flex items-center justify-center bg-gray-100 ${imgShape}`}>
          <svg className="h-8 w-8 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        </div>
      )}

      <div className="p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-black/35">{item.unit}</p>
        <h3 className="mt-0.5 font-heading text-sm font-semibold leading-tight text-brand-dark">{item.name}</h3>
        <p className={`mt-1 text-base font-bold ${styles.price}`}>{item.price}</p>

        <button
          type="button"
          onClick={handleAdd}
          className={`mt-3 w-full rounded-lg py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
            added ? "bg-brand-green text-brand-dark" : styles.btn
          }`}
        >
          {added ? "Added ✓" : "Add to Order List"}
        </button>
        <a
          href={whatsappLink(
            `Hello Masterpoint, I am interested in: ${item.name} (${item.price} ${item.unit}). Please send more details.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 block text-center text-[11px] font-semibold transition-opacity ${styles.wa}`}
        >
          Enquire on WhatsApp →
        </a>
      </div>
    </div>
  );
}

export default function ConcreteToolsShop() {
  const [activeIdx, setActiveIdx] = useState(0);
  const section = SECTIONS[activeIdx];

  return (
    <div className="mt-16 border-t border-black/8 pt-14">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Decorative Concrete</span>
        <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-dark sm:text-3xl">
          Stamped Concrete Materials &amp; Tools
        </h2>
        <p className="mt-3 max-w-xl text-sm text-brand-dark/60">
          Professional-grade finishing materials, hand tools and stamping mats for decorative concrete work. Direct-supply pricing — no middlemen.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {SECTIONS.map((s, i) => {
          const isActive = i === activeIdx;
          const tabStyle = ACCENT[s.accent].tab;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                isActive ? tabStyle : "border border-black/10 bg-white text-brand-dark/60 hover:border-black/25 hover:text-brand-dark"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
        {section.items.map((item, i) => (
          <ToolCard key={item.id} item={item} accent={section.accent} idx={i} />
        ))}
      </div>
    </div>
  );
}
