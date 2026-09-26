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
  requestPicture?: boolean;
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
        requestPicture: true,
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
        video: { src: "/videos/tools/edger-25k.mp4" },
        requestPicture: true,
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
        id: "rolling-mat",
        name: "Decorative Rolling Mat",
        price: "₦18,000",
        unit: "each",
        images: ["/images/tools/border-roller.jpg", "/images/tools/border-roller-2.jpg"],
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
        images: ["/images/tools/edgers.jpg"],
      },
      {
        id: "pool-trowel",
        name: "Pool Trowel (SERFA 45cm)",
        price: "₦15,000",
        unit: "each",
        images: ["/images/tools/pool-trowel.jpg"],
      },
      {
        id: "heavy-groover",
        name: "Heavy-Duty Concrete Groover",
        price: "₦40,000",
        unit: "each",
        video: { src: "/videos/tools/tool-40k.mp4" },
        requestPicture: true,
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
      { id: "orient-dream", name: "Orient Dream Mat", price: "₦260,000", unit: "pair of two", images: ["/images/tools/stamping-mat-wood-stone.jpg"] },
      { id: "random-stone", name: "Random Stone Mat", price: "₦290,000", unit: "pair of two", images: ["/images/tools/stamping-mats.jpg"] },
      { id: "diamond-herringbone", name: "Diamond Herringbone Mat", price: "₦280,000", unit: "pair of two", images: ["/images/tools/stamping-mat-diamond.jpg"] },
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
    badge: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
  },
  blue: {
    tab: "bg-brand-blue text-white",
    price: "text-brand-blue",
    btn: "bg-brand-blue hover:bg-brand-blue-dark text-white",
    wa: "text-brand-blue hover:opacity-75",
    badge: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
  },
  green: {
    tab: "bg-brand-green text-brand-dark",
    price: "text-brand-green-dark",
    btn: "bg-brand-green hover:opacity-90 text-brand-dark",
    wa: "text-brand-green-dark hover:opacity-75",
    badge: "bg-brand-green/10 text-brand-green-dark border-brand-green/20",
  },
};

const SHAPES = [
  "rounded-lg",
  "rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md",
  "rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md",
  "rounded-xl",
];

const IMG_SHAPES = [
  "rounded-t-lg",
  "rounded-tl-2xl rounded-br-lg rounded-tr-md",
  "rounded-tr-2xl rounded-bl-lg rounded-tl-md",
  "rounded-t-xl",
];

function ToolCard({ item, accent, idx }: { item: ToolItem; accent: "orange" | "blue" | "green"; idx: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const cardShape = SHAPES[idx % 4];
  const imgShape = IMG_SHAPES[idx % 4];
  const styles = ACCENT[accent];
  const firstImage = item.images?.[0];
  const hasMedia = item.video || firstImage;

  function handleAdd() {
    addItem({ id: `tool-${item.id}`, name: item.name, unit: item.unit }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className={`break-inside-avoid mb-2 overflow-hidden border border-black/10 bg-white shadow-sm ${cardShape}`}>
      {item.video ? (
        <video
          src={item.video.src}
          poster={item.video.poster}
          controls
          muted
          playsInline
          preload="none"
          className={`w-full aspect-square object-cover bg-black/5 ${imgShape}`}
        />
      ) : firstImage ? (
        <div className={`relative aspect-square overflow-hidden ${imgShape}`}>
          <Image
            src={firstImage}
            alt={item.name}
            fill
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="p-2">
        <p className="text-[9px] font-bold uppercase tracking-wider text-black/30">{item.unit}</p>
        <h3 className="mt-0.5 font-heading text-[11px] font-semibold leading-tight text-brand-dark">{item.name}</h3>
        <p className={`mt-0.5 text-sm font-bold ${styles.price}`}>{item.price}</p>

        {item.requestPicture && !hasMedia && (
          <a
            href={whatsappLink(
              `Hello Masterpoint, please send a picture of: ${item.name} (${item.price} ${item.unit}).`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-1.5 inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold ${styles.badge}`}
          >
            <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Request Picture
          </a>
        )}

        {item.requestPicture && hasMedia && (
          <p className={`mt-1 inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[9px] font-semibold ${styles.badge}`}>
            Request Picture
          </p>
        )}

        <button
          type="button"
          onClick={handleAdd}
          className={`mt-2 w-full rounded-md py-1 text-[10px] font-bold uppercase tracking-wide transition-colors ${
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
          className={`mt-1.5 block text-center text-[10px] font-semibold transition-opacity ${styles.wa}`}
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

      <div className="mb-6 flex flex-wrap gap-2">
        {SECTIONS.map((s, i) => {
          const isActive = i === activeIdx;
          const tabStyle = ACCENT[s.accent].tab;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                isActive ? tabStyle : "border border-black/10 bg-white text-brand-dark/60 hover:border-black/25 hover:text-brand-dark"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div className="columns-2 gap-2 sm:columns-3 md:columns-4 lg:columns-5">
        {section.items.map((item, i) => (
          <ToolCard key={item.id} item={item} accent={section.accent} idx={i} />
        ))}
      </div>
    </div>
  );
}
