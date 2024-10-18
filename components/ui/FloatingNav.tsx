"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious();

    if (current !== undefined && previous !== undefined) {
      let direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full shadow-lg border items-center justify-center space-x-4",
          "bg-white text-black border-gray-200",
          "dark:bg-black-400 dark:text-white dark:border-gray-800",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative items-center flex space-x-1",
            "text-black hover:scale-110", // Added font-bold here
            "dark:text-white"
          )}
        >        
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
