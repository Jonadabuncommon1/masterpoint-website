export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Structural"
  | "Estate Infrastructure"
  | "Finishing"
  | "Roofing";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  images: string[];
  videos?: { src: string; poster: string }[];
};

const img = (name: string) => `/images/projects/${name}.jpg`;
const vid = (name: string) => ({ src: `/videos/${name}.mp4`, poster: `/images/projects/video-poster-${name}.jpg` });

export const projects: Project[] = [
  {
    slug: "ikosi-isheri-lagos",
    title: "Ikosi-Isheri LCDA Residence",
    location: "Ikosi-Isheri LCDA, Lagos",
    category: "Residential",
    images: [img("ikosi-isheri-1"), img("ikosi-isheri-2")],
  },
  {
    slug: "ikosi-lagos",
    title: "Ikosi Residential Project",
    location: "Ikosi, Lagos",
    category: "Residential",
    images: [img("ikosi-lagos-1"), img("ikosi-lagos-2")],
  },
  {
    slug: "lekki-lagos",
    title: "Lekki Site Development",
    location: "Lekki, Lagos",
    category: "Residential",
    images: [],
    videos: [vid("lekki-lagos-1"), vid("lekki-lagos-2")],
  },
  {
    slug: "ketu-lagos",
    title: "Ketu Residential Project",
    location: "Ketu, Lagos",
    category: "Residential",
    images: [img("ketu-lagos-1"), img("ketu-lagos-2")],
  },
  {
    slug: "mile-2-lagos",
    title: "Mile 2 Residential Project",
    location: "Mile 2, Lagos",
    category: "Residential",
    images: [img("mile-2-lagos")],
  },
  {
    slug: "badagry-road-lagos",
    title: "Badagry Road Project",
    location: "Badagry Road, Lagos",
    category: "Estate Infrastructure",
    images: [],
    videos: [vid("badagry-road-lagos")],
  },
  {
    slug: "sangotedo-ogun",
    title: "Sangotedo Site Project",
    location: "Sangotedo, Ogun State",
    category: "Residential",
    images: [],
    videos: [vid("sangotedo-ogun")],
  },
  {
    slug: "port-harcourt",
    title: "Port Harcourt City Project",
    location: "Port Harcourt, Rivers State",
    category: "Commercial",
    images: [img("port-harcourt-1"), img("port-harcourt-2")],
  },
  {
    slug: "enugu-ezike",
    title: "Enugu Ezike Residence",
    location: "Enugu Ezike, Enugu State",
    category: "Residential",
    images: [img("enugu-ezike-1")],
  },
  {
    slug: "enugu-project",
    title: "Enugu Residential Project",
    location: "Enugu State",
    category: "Residential",
    images: [img("enugu-project-1")],
  },
  {
    slug: "nsukka-enugu",
    title: "Nsukka Project",
    location: "Nsukka, Enugu State",
    category: "Residential",
    images: [img("nsukka-enugu")],
  },
  {
    slug: "nationwide-structural",
    title: "Structural Build Programme",
    location: "Nationwide",
    category: "Structural",
    images: [
      img("structural-build-01"),
      img("structural-build-02"),
      img("structural-build-03"),
      img("structural-build-04"),
      img("structural-build-05"),
      img("site-supervision-01"),
      img("site-supervision-02"),
    ],
    videos: [vid("site-video-01"), vid("site-video-02"), vid("site-video-03")],
  },
  {
    slug: "decorative-concrete",
    title: "Decorative Concrete & Estate Finishing",
    location: "Nationwide",
    category: "Estate Infrastructure",
    images: [
      img("stamped-concrete-01"),
      img("stamped-concrete-02"),
      img("stamped-concrete-03"),
      img("stamped-concrete-04"),
      img("stamped-concrete-05"),
      img("stamped-concrete-06"),
    ],
  },
  {
    slug: "interior-finishing",
    title: "Interior Finishing & Tiling",
    location: "Nationwide",
    category: "Finishing",
    images: [img("tiling-finishing-01"), img("tiling-finishing-02")],
  },
  {
    slug: "roofing-decking",
    title: "Roofing & Decking Works",
    location: "Nationwide",
    category: "Roofing",
    images: [img("roofing-01"), img("roofing-02")],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Structural",
  "Estate Infrastructure",
  "Finishing",
  "Roofing",
];
