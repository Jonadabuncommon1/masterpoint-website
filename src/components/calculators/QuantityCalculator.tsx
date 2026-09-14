"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

// Typical rule-of-thumb coverage figures used in Nigerian site practice. Actual
// quantities vary with block size, mortar joint thickness and wastage — treat as
// a planning guide, not a final Bill of Quantities.
const BLOCKS_PER_SQM: Record<string, number> = {
  '6" Block': 13,
  '9" Block': 10,
};
const BLOCKS_PER_BAG_CEMENT = 45; // approx. blocks laid per 50kg bag of cement (mortar only)
const WASTAGE_FACTOR = 1.05;

export default function QuantityCalculator() {
  const [blockType, setBlockType] = useState<keyof typeof BLOCKS_PER_SQM>('9" Block');
  const [length, setLength] = useState(10);
  const [height, setHeight] = useState(3);

  const { blocks, bags } = useMemo(() => {
    const area = Math.max(0, length) * Math.max(0, height);
    const rawBlocks = area * BLOCKS_PER_SQM[blockType];
    const blocksWithWastage = Math.ceil(rawBlocks * WASTAGE_FACTOR);
    const bagsNeeded = Math.ceil(blocksWithWastage / BLOCKS_PER_BAG_CEMENT);
    return { blocks: blocksWithWastage, bags: bagsNeeded };
  }, [blockType, length, height]);

  const message = `Hello Masterpoint, I used the Cement & Block Quantity Calculator on your website.\nWall length: ${length}m, height: ${height}m\nBlock type: ${blockType}\nEstimated blocks needed: ${blocks}\nEstimated cement (mortar): ${bags} bags\nPlease send me a quote to supply these materials.`;

  return (
    <div id="quantity-calculator" className="rounded-2xl border-2 border-brand-blue/20 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="font-heading text-xl font-semibold text-brand-dark">Cement &amp; Block Quantity Calculator</h3>
      <p className="mt-2 text-sm text-brand-dark/60">
        Work out roughly how many blocks and bags of cement your wall will need.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-brand-dark">Block Type</label>
          <select
            value={blockType}
            onChange={(e) => setBlockType(e.target.value as keyof typeof BLOCKS_PER_SQM)}
            className="mt-2 w-full rounded-md border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          >
            {Object.keys(BLOCKS_PER_SQM).map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div />

        <div>
          <label className="flex items-center justify-between text-sm font-semibold text-brand-dark">
            Wall Length
            <span className="text-brand-blue">{length} m</span>
          </label>
          <input
            type="range"
            min={1}
            max={200}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="mt-3 w-full accent-brand-blue"
          />
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-semibold text-brand-dark">
            Wall Height
            <span className="text-brand-blue">{height} m</span>
          </label>
          <input
            type="range"
            min={1}
            max={10}
            step={0.5}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="mt-3 w-full accent-brand-blue"
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-brand-blue/5 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-blue">Blocks Needed</p>
          <p className="mt-2 font-heading text-3xl font-bold text-brand-dark">{blocks.toLocaleString()}</p>
        </div>
        <div className="rounded-xl bg-brand-blue/5 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-blue">Cement (Mortar)</p>
          <p className="mt-2 font-heading text-3xl font-bold text-brand-dark">{bags.toLocaleString()} bags</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-brand-dark/55">
        Includes a 5% wastage allowance. Figures are a planning guide only — final quantities
        depend on your specific design and site conditions.
      </p>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block w-full rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
      >
        Order These Materials
      </a>
    </div>
  );
}
