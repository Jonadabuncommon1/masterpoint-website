export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "residential-buildings",
    title: "Residential Buildings",
    summary:
      "Bespoke family homes and residential estates built to last, from foundation to finishing.",
    points: [
      "Detached, semi-detached and terrace housing",
      "Duplexes, bungalows and estate housing units",
      "Full interior finishing and tiling included",
    ],
    image: "/images/projects/structural-build-03.jpg",
  },
  {
    slug: "commercial-plazas",
    title: "Commercial Plazas & Offices",
    summary:
      "Retail plazas, office blocks and mixed-use commercial developments delivered on programme.",
    points: [
      "Shopping plazas and retail units",
      "Corporate office fit-outs",
      "Mixed-use commercial developments",
    ],
    image: "/images/projects/structural-build-04.jpg",
  },
  {
    slug: "warehouses-industrial",
    title: "Warehouses & Industrial Units",
    summary: "Structurally engineered warehousing and industrial facilities built for heavy use.",
    points: [
      "Steel-framed warehouses and factory units",
      "Loading bays and industrial flooring",
      "Storage and logistics facilities",
    ],
    image: "/images/projects/structural-build-05.jpg",
  },
  {
    slug: "renovations-retrofitting",
    title: "Structural Renovations & Retrofitting",
    summary: "Renovation, reinforcement and modernisation of existing structures.",
    points: [
      "Structural upgrades and reinforcement",
      "Full and partial renovations",
      "Building assessment and remedial works",
    ],
    image: "/images/projects/structural-build-02.jpg",
  },
  {
    slug: "estate-infrastructure",
    title: "Estate Infrastructure",
    summary:
      "Roads, drainage and shared infrastructure that bring an estate to completion.",
    points: [
      "Estate road construction and paving",
      "Drainage and stormwater systems",
      "Decorative stamped-concrete driveways and walkways",
    ],
    image: "/images/projects/stamped-concrete-06.jpg",
  },
  {
    slug: "interior-finishing-tiling",
    title: "Interior Finishing & Tiling",
    summary:
      "Premium finishing that turns a shell into a place people are proud to hand over.",
    points: [
      "Porcelain and ceramic tiling",
      "Painting, screeding and plastering",
      "Fixtures, fittings and snagging",
    ],
    image: "/images/projects/tiling-finishing-02.jpg",
  },
  {
    slug: "roofing",
    title: "Roofing & Decking",
    summary: "Weathertight roofing systems engineered for durability and rainfall.",
    points: [
      "Aluminium roofing sheet installation",
      "Reinforced concrete decking",
      "Roof trusses and structural carpentry",
    ],
    image: "/images/projects/roofing-01.jpg",
  },
];

export const designToBuildCapabilities = [
  "Architectural design",
  "Structural drawings",
  "Bill of Quantities (BOQ)",
  "Town planning approvals",
  "Full project supervision",
];

export const safetyStandards = [
  "Certified site supervisors on every project",
  "Personal Protective Equipment (PPE) enforced on all sites",
  "Compliance with national engineering standards",
  "Rigorous quality inspection at every stage",
];
