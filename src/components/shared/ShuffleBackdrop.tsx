"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { reshuffle } from "@/lib/shuffle";

type Slide = { image: string; alt: string };

export default function ShuffleBackdrop({
  slides,
  intervalMs = 4500,
  preloadAll = false,
  onActiveChange,
}: {
  slides: Slide[];
  intervalMs?: number;
  /** Eagerly load every slide up front instead of just the first. Only sensible
   * for a small slide count (a handful of hero banners), not a big gallery. */
  preloadAll?: boolean;
  /** Fired with the active slide's index whenever it changes (including the
   * very first client-side shuffle), so a parent can sync other UI to it. */
  onActiveChange?: (index: number) => void;
}) {
  // Start deterministic (unshuffled, first slide active) so server and client
  // markup match on first paint, the shuffle itself only ever runs client-side.
  const order = useRef<Slide[]>(slides);
  const cursor = useRef(0);
  const [active, setActive] = useState(slides[0]);

  useEffect(() => {
    if (slides.length <= 1) return;
    order.current = reshuffle(slides);
    cursor.current = 0;
    onActiveChange?.(slides.indexOf(order.current[0]));
    const id = setInterval(() => {
      cursor.current += 1;
      if (cursor.current >= order.current.length) {
        const last = order.current[order.current.length - 1];
        order.current = reshuffle(slides, last);
        cursor.current = 0;
      }
      const next = order.current[cursor.current];
      setActive(next);
      onActiveChange?.(slides.indexOf(next));
    }, intervalMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-dark">
      {slides.map((slide) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: slide.image === active.image ? 1 : 0 }}
          aria-hidden={slide.image !== active.image}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={preloadAll || slide.image === slides[0].image}
            quality={90}
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
