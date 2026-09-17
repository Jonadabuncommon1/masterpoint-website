"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { guideCategories, type GuideCategory } from "@/data/projectGuide";

const ACCENT: Record<GuideCategory["accent"], { active: string; badge: string; text: string }> = {
  orange: {
    active: "bg-brand-orange text-white shadow-[0_0_18px_4px_rgba(255,107,0,0.55)]",
    badge: "bg-brand-orange",
    text: "text-brand-orange",
  },
  blue: {
    active: "bg-brand-blue text-white shadow-[0_0_18px_4px_rgba(0,168,255,0.55)]",
    badge: "bg-brand-blue",
    text: "text-brand-blue",
  },
  green: {
    active: "bg-brand-green text-brand-dark shadow-[0_0_18px_4px_rgba(0,230,118,0.6)]",
    badge: "bg-brand-green",
    text: "text-brand-green-dark",
  },
};

export default function ProjectStarterGuide() {
  const [activeSlug, setActiveSlug] = useState(guideCategories[0].slug);
  const active = guideCategories.find((c) => c.slug === activeSlug) ?? guideCategories[0];
  const accent = ACCENT[active.accent];

  return (
    <section id="project-guide" className="bg-[#F7F7F7] py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Steps in Starting Your Own Construction Project"
          description="Every construction venture needs different materials, tools and know-how. Look through each area below to get a feel for what you'd be getting into."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {guideCategories.map((category) => {
            const isActive = category.slug === activeSlug;
            const style = ACCENT[category.accent];
            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActiveSlug(category.slug)}
                className={`rounded-full px-4 py-2.5 text-sm font-bold transition-all ${
                  isActive
                    ? style.active
                    : "border border-black/10 bg-white text-brand-dark/70 hover:border-brand-orange/40 hover:text-brand-dark"
                }`}
              >
                {category.tabLabel}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <h3 className={`text-balance text-center font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl ${accent.text}`}>
            {active.headline}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-brand-dark/70">{active.intro}</p>

          {active.entryStyle === "price" ? (
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {active.entries.map((entry) => (
                <div
                  key={entry.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-black/5 bg-white p-4 shadow-sm"
                >
                  <span className="text-sm font-semibold text-brand-dark">{entry.name}</span>
                  <span className={`shrink-0 text-sm font-bold ${accent.text}`}>{entry.detail}</span>
                </div>
              ))}
            </div>
          ) : (
            <ol className="mt-8 space-y-3">
              {active.entries.map((entry, index) => (
                <li key={entry.name} className="flex gap-4 rounded-lg border border-black/5 bg-white p-4 shadow-sm">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${accent.badge}`}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-dark">{entry.name}</p>
                    {entry.detail && <p className="mt-1 text-sm leading-relaxed text-brand-dark/65">{entry.detail}</p>}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </Container>
    </section>
  );
}
