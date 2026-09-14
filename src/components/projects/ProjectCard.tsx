"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { reshuffle } from "@/lib/shuffle";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const gallery = project.images.length > 0 ? project.images : (project.videos ?? []).map((v) => v.poster);
  const order = useRef<string[]>(gallery);
  const cursor = useRef(0);
  const [active, setActive] = useState(gallery[0]);
  const hasVideo = (project.videos?.length ?? 0) > 0;

  useEffect(() => {
    if (gallery.length <= 1) return;
    order.current = reshuffle(gallery);
    cursor.current = 0;
    const id = setInterval(() => {
      cursor.current += 1;
      if (cursor.current >= order.current.length) {
        order.current = reshuffle(gallery, order.current[order.current.length - 1]);
        cursor.current = 0;
      }
      setActive(order.current[cursor.current]);
    }, 3000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.slug]);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-dark text-left"
    >
      {gallery.map((src) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: src === active ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="pointer-events-none select-none object-cover transition-transform duration-500 group-hover:scale-110"
            draggable={false}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <span className="absolute left-3 top-3 rounded-full bg-brand-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
        {project.category}
      </span>

      {hasVideo && (
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-dark">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7Z" />
          </svg>
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-heading text-base font-semibold uppercase text-white">{project.title}</p>
        <p className="text-xs text-white/70">{project.location}</p>
      </div>
    </button>
  );
}
