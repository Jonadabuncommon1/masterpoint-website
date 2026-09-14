"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { reshuffle } from "@/lib/shuffle";

type Slide = { image: string; alt: string };

export default function ShuffleBackdrop({
  slides,
  intervalMs = 4500,
  priorityFirst = true,
}: {
  slides: Slide[];
  intervalMs?: number;
  priorityFirst?: boolean;
}) {
  // Start deterministic (unshuffled, first slide active) so server and client
  // markup match on first paint — the shuffle itself only ever runs client-side.
  const order = useRef<Slide[]>(slides);
  const cursor = useRef(0);
  const [active, setActive] = useState(slides[0]);

  useEffect(() => {
    if (slides.length <= 1) return;
    order.current = reshuffle(slides);
    cursor.current = 0;
    const id = setInterval(() => {
      cursor.current += 1;
      if (cursor.current >= order.current.length) {
        const last = order.current[order.current.length - 1];
        order.current = reshuffle(slides, last);
        cursor.current = 0;
      }
      setActive(order.current[cursor.current]);
    }, intervalMs);
    return () => clearInterval(id);
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
            priority={priorityFirst && slide.image === slides[0].image}
            sizes="100vw"
            className="object-cover pointer-events-none select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
