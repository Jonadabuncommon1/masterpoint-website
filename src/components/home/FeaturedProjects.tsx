import Link from "next/link";
import ProtectedImage from "@/components/shared/ProtectedImage";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";

const SHOWCASE = [
  {
    image: "/images/projects/structural-build-04.jpg",
    title: "Structural Build",
    location: "Nationwide",
    span: "sm:col-span-2 sm:row-span-2",
    aspect: "aspect-[4/3] sm:aspect-auto",
  },
  {
    image: "/images/projects/stamped-concrete-06.jpg",
    title: "Estate Driveway Finishing",
    location: "Estate Infrastructure",
    span: "sm:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    image: "/images/projects/ikosi-isheri-1.jpg",
    title: "Residential Build",
    location: "Ikosi-Isheri LCDA, Lagos",
    span: "",
    aspect: "aspect-square",
  },
  {
    image: "/images/projects/port-harcourt-1.jpg",
    title: "Commercial Project",
    location: "Port Harcourt, Rivers State",
    span: "",
    aspect: "aspect-square",
  },
  {
    image: "/images/projects/roofing-01.jpg",
    title: "Roofing & Decking",
    location: "Nationwide",
    span: "sm:row-span-2",
    aspect: "aspect-[4/3] sm:aspect-auto",
  },
  {
    image: "/images/projects/tiling-finishing-02.jpg",
    title: "Interior Finishing",
    location: "Nationwide",
    span: "sm:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Projects Delivered Nationwide"
            description="Don't just take our word for it. See the structural, finishing and estate infrastructure work speaking for itself across Nigeria."
          />
          <Link
            href="/projects"
            className="shrink-0 rounded-md border-2 border-brand-dark px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            View Full Portfolio
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[180px]">
          {SHOWCASE.map((item) => (
            <Link
              key={item.image}
              href="/projects"
              className={`group relative overflow-hidden rounded-xl bg-brand-dark ${item.span} ${item.aspect}`}
            >
              <ProtectedImage
                src={item.image}
                alt={`${item.title}, ${item.location}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-heading text-sm font-semibold uppercase text-white">{item.title}</p>
                <p className="text-xs text-white/70">{item.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
