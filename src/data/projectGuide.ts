export type GuideEntry = { name: string; detail: string };

export type GuideCategory = {
  slug: string;
  tabLabel: string;
  accent: "orange" | "blue" | "green";
  headline: string;
  intro: string;
  entryStyle: "price" | "step";
  entries: GuideEntry[];
};

export const guideCategories: GuideCategory[] = [
  {
    slug: "concrete-finishing-materials",
    tabLabel: "Concrete Finishing Materials",
    accent: "orange",
    headline: "Master the Art of Decorative Concrete Finishing",
    intro:
      "Colour, texture and a lasting seal are what turn a plain slab into decorative stamped concrete. Here's what it costs to stock the finishing materials.",
    entryStyle: "price",
    entries: [
      { name: "Colour Hardener", detail: "₦26,500 per 25kg bag" },
      { name: "Antique Release Agent", detail: "₦56,500 per bag" },
      { name: "Sealer Polish", detail: "₦5,800 per litre" },
      { name: "Stain Plus", detail: "₦4,700 per litre" },
    ],
  },
  {
    slug: "tools-and-equipment",
    tabLabel: "Tools & Equipment",
    accent: "blue",
    headline: "Get the Right Tools for Professional Stamped Concrete Work",
    intro:
      "Clean edges, crisp grooves and a smooth finish all come down to having the right hand tools on site.",
    entryStyle: "price",
    entries: [
      { name: "Big Edger", detail: "₦25,000 each" },
      { name: "Medium Edger", detail: "₦15,000 each" },
      { name: "Border Roller", detail: "₦18,000 each" },
      { name: "Medium Groover", detail: "₦15,000 each" },
      { name: "Turkey Groover", detail: "₦18,000 each" },
      { name: "Pool Trowel", detail: "₦15,000 each" },
    ],
  },
  {
    slug: "stamping-mats-circles",
    tabLabel: "Stamping Mats & Circles",
    accent: "green",
    headline: "Bring Texture and Pattern to Every Pour",
    intro:
      "Stamping mats and circles are what press a pattern, such as stone, plank or medallion, into wet concrete before it cures.",
    entryStyle: "price",
    entries: [
      { name: "Wooden Frame Mat", detail: "₦280,000 (pair of two pieces)" },
      { name: "Versace Circle", detail: "₦310,000 each" },
      { name: "Wooden Plank", detail: "₦230,000 (pair of two pieces)" },
      { name: "Large Ashlar", detail: "₦310,000 (pair of two pieces)" },
      { name: "Ashlar Stone", detail: "₦275,000 (pair of two pieces)" },
      { name: "Vintage Mat", detail: "₦270,000 (pair of two pieces)" },
      { name: "European Fan Mat", detail: "₦280,000 (pair of two pieces)" },
      { name: "Orient Dream Mat", detail: "₦260,000 (pair of two pieces)" },
      { name: "Random Stone Mat", detail: "₦290,000 (pair of two pieces)" },
      { name: "Compass Circle Mat", detail: "₦280,000 a piece" },
      { name: "Medallion Circle Mat", detail: "₦220,000" },
    ],
  },
  {
    slug: "structural-stages",
    tabLabel: "Structural Stages",
    accent: "orange",
    headline: "Know Every Stage of a Building, From DPC to Finishes",
    intro:
      "Every building rises through the same sequence of stages, from the damp-proof course to the final coat of paint.",
    entryStyle: "step",
    entries: [
      { name: "DPC level", detail: "" },
      { name: "DPC to window-sill level", detail: "" },
      { name: "Window-sill to lintel level", detail: "" },
      { name: "Lintel to roof level", detail: "" },
      { name: "Roof structure", detail: "" },
      { name: "Roof covering", detail: "" },
      { name: "Ceiling/roof finishing", detail: "" },
      { name: "Plastering/rendering", detail: "" },
      { name: "Floor screeding", detail: "" },
      { name: "Doors and windows", detail: "" },
      { name: "Electrical and plumbing installations", detail: "" },
      { name: "Painting and final finishes", detail: "" },
    ],
  },
  {
    slug: "structural-analysis-process",
    tabLabel: "Structural Analysis Process",
    accent: "blue",
    headline: "Understand How Engineers Analyse a Structure",
    intro:
      "Before a single block is laid, an engineer works through the same core process to prove a building is safe.",
    entryStyle: "step",
    entries: [
      {
        name: "Study the architectural drawings",
        detail: "Floor plans, elevations, sections, and every building dimension and level.",
      },
      {
        name: "Determine the structural system",
        detail: "Foundations, columns, beams, slabs, staircases and the roof structure.",
      },
      {
        name: "Calculate the loads",
        detail:
          "Dead load (self-weight of concrete, blocks and finishes), live/imposed load, wind load, and any other load such as water tanks or equipment.",
      },
      {
        name: "Combine the loads",
        detail: "Combine every load according to the applicable design code.",
      },
      {
        name: "Run the structural analysis",
        detail:
          "Determine reactions, bending moments, shear forces and axial forces, done by hand or with software on larger or more complex buildings.",
      },
      {
        name: "Design each structural member",
        detail: "Size and reinforce the slabs, beams, columns, staircases and foundations.",
      },
      {
        name: "Check safety and serviceability",
        detail: "Verify strength, deflection, cracking and overall stability.",
      },
      {
        name: "Prepare the structural drawings",
        detail: "Foundation layout, column layout, beam layout, slab reinforcement and structural details.",
      },
    ],
  },
  {
    slug: "rc-building-analysis",
    tabLabel: "RC Building Analysis",
    accent: "green",
    headline: "See a Real Structural Analysis, Foundation to Roof",
    intro:
      "A typical reinforced-concrete residential building in Nigeria, analysed stage by stage from DPC level upward.",
    entryStyle: "step",
    entries: [
      {
        name: "DPC / ground-floor level",
        detail:
          "Confirm the wall layout and column positions, and check the load transferred from walls and columns to the foundation.",
      },
      {
        name: "Ground-floor slab",
        detail:
          "Work out slab thickness, self-weight, floor finishes, ceiling/services load and live load, then calculate its bending, shear and reinforcement.",
      },
      {
        name: "Beams",
        detail:
          "For every beam: span, loads from slab and walls, support reactions, bending moment and shear force, then design the reinforcement and dimensions.",
      },
      {
        name: "Columns",
        detail:
          "Calculate loads transferred from roof/floor slabs, beams, walls and upper floors, then check axial load, bending, slenderness, reinforcement and concrete capacity.",
      },
      {
        name: "Upper floors",
        detail: "Repeat the slab-beam-column load-transfer analysis for every additional floor.",
      },
      {
        name: "Roof structure",
        detail:
          "Analyse roof dead load, roofing materials, ceiling load, maintenance/live load and wind effects, then design the roof members and connections.",
      },
      {
        name: "The load path",
        detail: "Roof → beams → columns → foundation → soil, and floor slab → beams → columns → foundation → soil.",
      },
      {
        name: "Foundation",
        detail: "Use the column and wall reactions to design the foundation.",
      },
    ],
  },
];
