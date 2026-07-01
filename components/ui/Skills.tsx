"use client";

import React from "react";
import { skillGroups, certifications } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className="section border-b-2 border-ink">
      <SectionHeading>Skills</SectionHeading>

      {/* 2x2 bordered category grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={Math.min(i, 3) * 0.05}>
            <div
              className={`h-full border-2 border-ink p-5 ${i % 2 === 1 ? "sm:border-l-0" : ""} ${i >= 2 ? "border-t-0 sm:border-t-0" : ""} ${i === 1 ? "border-t-0 sm:border-t-2" : ""}`}
            >
              <div className="mb-4">
                <p className="font-mono text-xs font-bold uppercase tracking-wide text-brand">
                  {group.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default border border-line px-2.5 py-1 font-mono text-[11px] uppercase text-ink transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* certifications */}
      <Reveal delay={0.1}>
        <div className="mt-6 border-2 border-ink">
          <p className="border-b-2 border-ink px-5 py-2 font-mono text-xs font-bold uppercase tracking-wide text-brand">
            Certifications
          </p>
          <ul className="divide-y divide-soft">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center justify-between gap-3 px-5 py-3 text-sm text-ink"
              >
                <span className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 font-mono text-brand">
                    ▹
                  </span>
                  <span>
                    {cert.name}
                    {cert.issuer && (
                      <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-wide text-subtle">
                        {cert.issuer}
                      </span>
                    )}
                  </span>
                </span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 self-start font-mono text-xs uppercase text-brand transition-colors hover:text-ink"
                  >
                    Verify ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
