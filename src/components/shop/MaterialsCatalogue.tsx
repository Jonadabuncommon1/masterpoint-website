"use client";

import { useMemo, useState } from "react";
import MaterialCard from "@/components/shop/MaterialCard";
import { materials, materialCategories } from "@/data/materials";

export default function MaterialsCatalogue() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(
    () => (filter === "All" ? materials : materials.filter((m) => m.category === filter)),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...materialCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border-2 px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm ${
              filter === cat
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-black/10 text-brand-dark hover:border-brand-orange/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
}
