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
