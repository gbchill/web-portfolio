"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrolled(v > 0.02);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-3 z-[5000] mx-auto flex w-fit max-w-[94vw] items-center gap-0.5 overflow-x-auto border-2 border-ink p-1 transition-[background-color,box-shadow] duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        scrolled ? "bg-canvas shadow-[4px_4px_0_0_var(--ink)]" : "bg-canvas/85 backdrop-blur-sm",
        className
      )}
    >
      {navItems.map((navItem) => {
        const active = activeSection === navItem.name;
        return (
          <Link
            key={navItem.link}
            href={navItem.link}
            onClick={() => {
              setActiveSection(navItem.name as SectionName);
              setTimeOfLastClick(Date.now());
            }}
            className="relative whitespace-nowrap px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide transition-colors duration-200"
          >
            {active && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 z-0 bg-brand"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors duration-200",
                active ? "text-white" : "text-ink hover:text-brand"
              )}
            >
              {navItem.name}
            </span>
          </Link>
        );
      })}
    </motion.nav>
  );
};
