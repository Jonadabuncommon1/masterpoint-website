"use client";

import { useState } from "react";
import Image from "next/image";
import ShuffleBackdrop from "@/components/shared/ShuffleBackdrop";
import StatCounter from "@/components/shared/StatCounter";
import { heroSlides } from "@/data/hero";
import { company } from "@/data/company";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  return (
    <section>
      {/* The banners are all a fixed 1600x533 (3:1) canvas, so locking the
          container to that exact ratio means object-cover never has to crop
          anything - the whole picture is always visible, top to bottom. */}
      <div className="relative aspect-[3/1] w-full overflow-hidden">
        <ShuffleBackdrop
          slides={heroSlides}
          intervalMs={60000}
          preloadAll
          onActiveChange={setActiveIndex}
        />
        <h1 className="sr-only">
          Masterpoint Resources Ltd: Structural Excellence for Your Next Landmark Project
        </h1>
      </div>

      {/* The stat bar's backdrop follows whichever hero picture is showing, and
          the counters replay each time it changes, so the two stay in step. */}
      <div className="relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            key={activeSlide.image}
            src={activeSlide.image}
            alt=""
            fill
            quality={60}
            sizes="100vw"
            className="animate-[fade-in_1.4s_ease-in-out] object-cover object-center blur-2xl brightness-[0.35] saturate-150"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {company.stats.map((stat) => (
            <div key={stat.label} className="text-center lg:border-l lg:border-white/10 lg:first:border-l-0">
              <p className="font-heading text-3xl font-bold text-brand-orange sm:text-4xl">
                <StatCounter key={`${stat.label}-${activeIndex}`} value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
