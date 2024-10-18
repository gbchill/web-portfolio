"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="flex flex-col items-center justify-center text-center py-10" // Adjusted padding for closer spacing
    >
      <div className="max-w-[53rem]">
        <h1 className="heading pb-5"> {/* Adjusted padding-bottom */}
          My <span className="text-blue-500">Skills</span>
        </h1>
        <ul className="flex pt-10 flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white shadow-lg borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
