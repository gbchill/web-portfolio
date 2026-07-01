"use client";

import React from "react";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading, Magnetic } from "@/components/ui/motion";

const links = [
  { label: "Email", href: "mailto:georgebadulescu123@gmail.com", icon: BsEnvelope },
  { label: "LinkedIn", href: "https://linkedin.com/in/george-badu", icon: BsLinkedin },
  { label: "GitHub", href: "https://github.com/gbchill", icon: BsGithub },
];

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <footer ref={ref} id="contact" className="section pb-16">
      <SectionHeading>Get In Touch</SectionHeading>

      <Reveal delay={0.05}>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-subtle">
          I'm open to full time software engineering roles and interesting
          projects. The fastest way to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <Magnetic
          href="mailto:georgebadulescu123@gmail.com"
          className="mt-6 border-2 border-ink bg-brand px-6 py-3 font-mono text-sm font-bold uppercase text-white"
        >
          Email Me ↗
        </Magnetic>
      </Reveal>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t-2 border-ink pt-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs uppercase tracking-wide text-subtle">
          © 2026 George Badulescu
        </p>
        <div className="flex items-center gap-1">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border-2 border-ink text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-canvas active:translate-y-0"
            >
              <Icon className="h-[1.05rem] w-[1.05rem]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
