"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { Typewriter, Magnetic } from "@/components/ui/motion";

const ease = [0.22, 1, 0.36, 1] as const;
const words = ["GEORGE", "BADULESCU"];

const titles = [
  "SOFTWARE ENGINEER",
  "FULL STACK ENGINEER",
  "AI ENGINEER",
  "BACKEND ENGINEER",
  "CLOUD ENGINEER",
  "FOUNDER",
];

const socials = [
  { label: "Email", href: "mailto:georgebadulescu123@gmail.com", icon: BsEnvelope },
  { label: "LinkedIn", href: "https://linkedin.com/in/george-badu", icon: BsLinkedin },
  { label: "GitHub", href: "https://github.com/gbchill", icon: BsGithub },
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="flex min-h-[88vh] flex-col justify-center border-b-2 border-ink pb-14 pt-24">
      <motion.p
        className="flex items-center font-mono text-sm font-bold uppercase tracking-wide text-brand"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease }}
      >
        <Typewriter words={titles} />
      </motion.p>

      <h1 className="mt-4 text-6xl font-bold uppercase leading-[0.88] tracking-tight sm:text-7xl">
        {words.map((w, i) => (
          <span key={w} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%", filter: "blur(12px)" }}
              animate={{ y: "0%", filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.09 }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        className="mt-8 max-w-xl text-lg leading-relaxed text-subtle"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease, delay: 0.35 }}
      >
        I&apos;m a software engineer and recent Computer Science graduate from
        Arizona State University. I build full stack products end to end, from
        databases to the interfaces people actually use.
      </motion.p>


      <motion.div
        className="mt-8 flex flex-wrap items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Magnetic
          href="#contact"
          className="border-2 border-ink bg-brand px-6 py-3 font-mono text-sm font-bold uppercase text-white"
        >
          Get in touch
        </Magnetic>

        <div className="ml-1 flex items-center gap-1">
          {socials.map(({ label, href, icon: Icon }) => (
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
      </motion.div>
    </section>
  );
}
