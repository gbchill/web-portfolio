"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/data";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/motion";

export default function RecentProjects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="section border-b-2 border-ink">
      <SectionHeading>Projects</SectionHeading>

      <div className="mt-10 grid gap-0 sm:grid-cols-2">
        {projects.map((project, i) => {
          const isLink = Boolean(project.link);
          const inner = (
            <>
              <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-y-100" />
              <div className="relative z-10 flex h-full flex-col transition-colors duration-300 group-hover:text-white">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold uppercase text-ink group-hover:text-white">
                    {project.title}
                  </h3>
                  {isLink && (
                    <span
                      aria-hidden
                      className="-translate-x-1 font-mono text-lg text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-subtle group-hover:text-white">
                  {project.description}
                </p>

                {project.img && (
                  <div className="relative mt-4 aspect-[16/10] overflow-hidden border-2 border-ink">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs uppercase">
                  {project.tags.map((t, idx) => (
                    <span
                      key={t}
                      className="text-brand transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-white"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {isLink && (
                  <span className="mt-4 inline-block overflow-hidden font-mono text-[11px] font-bold uppercase tracking-wide text-brand group-hover:text-white">
                    <span className="inline-block -translate-x-[120%] transition-transform duration-300 ease-out group-hover:translate-x-0">
                      → View project
                    </span>
                  </span>
                )}
              </div>
            </>
          );

          const cls = `group relative block h-full overflow-hidden border-2 border-ink p-6 ${i % 2 === 1 ? "sm:border-l-0" : ""} ${i >= 2 ? "border-t-0" : ""}`;

          return (
            <Reveal key={project.id} delay={Math.min(i, 3) * 0.05}>
              {isLink ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
