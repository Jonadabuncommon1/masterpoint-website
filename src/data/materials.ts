export type Material = {
  id: string;
  name: string;
  category: string;
  unit: string;
  description: string;
  inStock: boolean;
};

export const materialCategories = [
  "Cement",
  "Reinforcement & Steel",
  "Aggregates",
  "Blocks",
  "Roofing",
  "Plumbing",
  "Electrical",
  "Tiles",
] as const;

export const materials: Material[] = [
  {
    id: "cement-dangote",
    name: "Dangote Cement (3X, 42.5N)",
    category: "Cement",
    unit: "50kg bag",
    description: "Direct-source Dangote cement, sold individually or by the trailer load.",
    inStock: true,
  },
  {
    id: "cement-bua",
    name: "BUA Cement",
    category: "Cement",
    unit: "50kg bag",
    description: "Direct-source BUA cement, sold individually or by the trailer load.",
    inStock: true,
  },
  {
    id: "brc-mesh",
    name: "BRC Mesh",
    category: "Reinforcement & Steel",
    unit: "per sheet",
    description: "Standard-gauge welded mesh for slabs, decking and screeds.",
    inStock: true,
  },
  {
    id: "tmt-12mm",
    name: "TMT Iron Rod — 12mm",
    category: "Reinforcement & Steel",
    unit: "per length",
    description: "High-tensile TMT reinforcement rod for general structural work.",
    inStock: true,
  },
  {
    id: "tmt-16mm",
    name: "TMT Iron Rod — 16mm",
    category: "Reinforcement & Steel",
    unit: "per length",
    description: "High-tensile TMT reinforcement rod for columns and heavy structural loads.",
    inStock: true,
  },
  {
    id: "structural-steel",
    name: "Structural Steel Sections",
    category: "Reinforcement & Steel",
    unit: "per length",
    description: "I-beams, channels and angle iron for steel-framed structures.",
    inStock: true,
  },
  {
    id: "granite-chippings",
    name: "Granite Chippings",
    category: "Aggregates",
    unit: "per tonne / trip",
    description: "Graded granite chippings for concrete works and driveways.",
    inStock: true,
  },
  {
    id: "gravel",
    name: "Gravel",
    category: "Aggregates",
    unit: "per tonne / trip",
    description: "Quality gravel for concrete, blockwork and general site use.",
    inStock: true,
  },
  {
    id: "hollow-block-9",
    name: "9-inch Hollow Block",
    category: "Blocks",
    unit: "per block",
    description: "Vibrated 9-inch hollow sandcrete blocks for load-bearing walls.",
    inStock: true,
  },
  {
    id: "hollow-block-6",
    name: "6-inch Hollow Block",
    category: "Blocks",
    unit: "per block",
    description: "Vibrated 6-inch hollow sandcrete blocks for internal partitioning.",
    inStock: true,
  },
  {
    id: "interlocking-blocks",
    name: "Interlocking Paving Blocks",
    category: "Blocks",
    unit: "per square metre",
    description: "Decorative interlocking pavers for driveways and walkways.",
    inStock: true,
  },
  {
    id: "aluminium-roofing",
    name: "Aluminium Long-Span Roofing Sheets",
    category: "Roofing",
    unit: "per length",
    description: "Durable long-span aluminium roofing sheets in a range of gauges and colours.",
    inStock: true,
  },
  {
    id: "plumbing-pipes",
    name: "Plumbing Pipes & Fittings",
    category: "Plumbing",
    unit: "per item",
    description: "PVC and composite pipework and fittings for water and waste systems.",
    inStock: true,
  },
  {
    id: "electrical-cables",
    name: "Electrical Cables & Accessories",
    category: "Electrical",
    unit: "per roll / item",
    description: "Standard-gauge cabling, conduit and accessories for site electrical work.",
    inStock: true,
  },
  {
    id: "porcelain-tiles",
    name: "Premium Porcelain Floor Tiles",
    category: "Tiles",
    unit: "per carton",
    description: "Premium porcelain tiles in a range of finishes for floors and exteriors.",
    inStock: true,
  },
  {
    id: "ceramic-tiles",
    name: "Ceramic Wall Tiles",
    category: "Tiles",
    unit: "per carton",
    description: "Quality ceramic wall tiles for kitchens, bathrooms and interiors.",
    inStock: true,
  },
];

export const materialsNote =
  "Sand and timber are not supplied. Every other material above is sourced directly, with nationwide delivery available.";

export const deliveryTerms = [
  "Bulk discounts available on trailer-load and site-wide orders",
  "Site delivery available nationwide with our own trucks",
  "Equipment such as excavators and concrete mixers can be made available at an additional cost",
  "Offloading arrangements are agreed with each client before dispatch",
];
