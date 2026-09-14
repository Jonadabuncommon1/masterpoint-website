"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

// Indicative average build cost per square metre (Naira), inclusive of materials and labour.
// These are ballpark planning figures only — review and update periodically as material
// and labour costs move, and always confirm with a formal site quotation.
const RATE_PER_SQM: Record<string, number> = {
  Shell: 150000,
  Standard: 280000,
  Premium: 420000,
};

const PROJECT_TYPES = ["Residential Building", "Commercial Plaza", "Warehouse / Industrial", "Renovation"];

function formatNaira(n: number) {
  return `₦${Math.round(n).toLocaleString("en-NG")}`;
}

export default function CostEstimator() {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [area, setArea] = useState(150);
  const [finish, setFinish] = useState<keyof typeof RATE_PER_SQM>("Standard");

  const { low, high } = useMemo(() => {
    const rate = RATE_PER_SQM[finish];
    const base = rate * Math.max(0, area);
    return { low: base * 0.85, high: base * 1.15 };
  }, [area, finish]);

  const message = `Hello Masterpoint, I used the Cost Estimator on your website.\nProject type: ${projectType}\nFloor area: ${area} sqm\nFinish level: ${finish}\nEstimated range: ${formatNaira(low)} - ${formatNaira(high)}\nPlease send me a firm quotation.`;

  return (
    <div id="cost-estimator" className="rounded-2xl border-2 border-brand-blue/20 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="font-heading text-xl font-semibold text-brand-dark">Building Material Cost Estimator</h3>
      <p className="mt-2 text-sm text-brand-dark/60">
        Get an instant, indicative range for your project before you speak to us.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-brand-dark">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mt-2 w-full rounded-md border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-dark">Finish Level</label>
          <select
            value={finish}
            onChange={(e) => setFinish(e.target.value as keyof typeof RATE_PER_SQM)}
            className="mt-2 w-full rounded-md border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          >
            {Object.keys(RATE_PER_SQM).map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-center justify-between text-sm font-semibold text-brand-dark">
            Floor Area
            <span className="text-brand-blue">{area} sqm</span>
          </label>
          <input
            type="range"
            min={20}
            max={2000}
            step={10}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="mt-3 w-full accent-brand-blue"
          />
        </div>
      </div>

      <div className="mt-7 rounded-xl bg-brand-blue/5 p-6 text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-brand-blue">Indicative Estimate</p>
        <p className="mt-2 font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
          {formatNaira(low)} – {formatNaira(high)}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-brand-dark/55">
          This is a rough planning figure only. Actual cost depends on your location, design,
          ground conditions and current material prices — request a firm quotation below.
        </p>
      </div>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block w-full rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
      >
        Request a Firm Quote
      </a>
    </div>
  );
}
