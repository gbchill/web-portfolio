"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workExperience } from "@/data";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="experience" className="section border-b-2 border-ink">
      <SectionHeading>Experience</SectionHeading>

      <div ref={listRef} className="relative mt-10 pl-6 sm:pl-8">
        {/* timeline track */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-soft sm:left-[7px]" aria-hidden />
        {/* timeline draw-in */}
        <motion.div
          className="absolute left-[5px] top-2 bottom-2 w-px origin-top bg-brand sm:left-[7px]"
          style={{ scaleY: lineScale }}
          aria-hidden
        />

        <div className="space-y-8">
          {workExperience.map((job, i) => (
            <Reveal key={job.id} delay={Math.min(i, 3) * 0.05}>
              <article className="relative">
                {/* node */}
                <span
                  className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-canvas sm:-left-8"
                  aria-hidden
                />
                {/* header: company left, time + location right on one line */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-lg font-bold uppercase leading-tight text-ink transition-colors hover:text-brand"
                    >
                      {job.company}
                      <span aria-hidden className="text-brand transition-transform group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <h3 className="text-lg font-bold uppercase leading-tight text-ink">
                      {job.company}
                    </h3>
                  )}
                  <p className="whitespace-nowrap font-mono text-[11px] text-subtle">
                    {job.time} · {job.location}
                  </p>
                </div>

                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brand">
                  {job.role}
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-subtle">
                  {job.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2 py-0.5 font-mono text-[11px] uppercase text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
