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
      {/* The banners are all a fixed 1600x533 (3:1) canvas. On phones that
          ratio reads as too short, so it's boosted to taller-than-square below
          the sm breakpoint (cropping the sides via object-cover, shifted left
          so the headline/CTA survive) and locked back to the native 3:1 - no
          cropping - from sm upward. */}
      <div className="relative aspect-[6/7] w-full overflow-hidden sm:aspect-[3/1]">
        <ShuffleBackdrop
          slides={heroSlides}
          intervalMs={6000}
          preloadAll
          onActiveChange={setActiveIndex}
          objectPosition="35% center"
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
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-10 lg:grid-cols-4 lg:px-8">
          {company.stats.map((stat) => (
            <div key={stat.label} className="text-center lg:border-l lg:border-white/10 lg:first:border-l-0">
              <p className="font-heading text-lg font-bold text-brand-orange sm:text-4xl">
                <StatCounter key={`${stat.label}-${activeIndex}`} value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
