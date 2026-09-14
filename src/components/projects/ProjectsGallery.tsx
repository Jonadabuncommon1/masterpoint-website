"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import Lightbox, { type LightboxItem } from "@/components/shared/Lightbox";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

export default function ProjectsGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const openProject = projects.find((p) => p.slug === openSlug);
  const lightboxItems: LightboxItem[] = openProject
    ? [
        ...openProject.images.map((src) => ({ type: "image" as const, src, alt: openProject.title })),
        ...(openProject.videos ?? []).map((v) => ({
          type: "video" as const,
          src: v.src,
          poster: v.poster,
          alt: openProject.title,
        })),
      ]
    : [];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...projectCategories] as const).map((cat) => (
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
        {filtered.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={() => {
              setOpenSlug(project.slug);
              setLightboxIndex(0);
            }}
          />
        ))}
      </div>

      {openProject && lightboxItems.length > 0 && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={() => setOpenSlug(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
