import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import ProjectsGallery from "@/components/projects/ProjectsGallery";

export const metadata: Metadata = {
  title: "Our Projects | Building Contractor Portfolio, Nationwide",
  description:
    "See the work of a building contractor who delivers. Browse Masterpoint Resources Ltd's portfolio of residential, commercial, structural, and estate infrastructure projects across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 sm:py-28">
        <Container>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Our Projects</span>
          <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
            Projects Delivered Nationwide
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            A look at our structural, finishing, estate infrastructure and roofing work across
            Nigeria. Tap a project to view the full gallery.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ProjectsGallery />
        </Container>
      </section>
    </>
  );
}
