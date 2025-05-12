"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <div
      className="flex flex-col items-center justify-center transition-colors duration-300"
      id="about"
      ref={ref}
    >
      <h1 className="heading text-center mb-8 text-gray-900 dark:text-white">
        About <span className="text-blue-500">Me</span>
      </h1>
      <div className="max-w-3xl p-8 bg-white dark:bg-black-400 rounded-lg shadow-lg border border-white/[.2]">
        <p className="mb-8 text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-light">
          I am currently in my{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            fourth year
          </span>{" "}
          of studying for a{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            B.S. in Computer Science
          </span>{" "}
          with a minor in{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            Romanian
          </span>{" "}
          at Arizona State University. With a{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            GPA of 3.85
          </span>
          , I am on track to graduate in May 2026. Throughout my academic journey, I have gained a strong foundation in{" "}
            <span className="font-medium text-gray-900 dark:text-gray-100">
              full-stack application development
            </span>
            , with expertise in modern technologies like{" "}
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Python, TypeScript, AWS, and PostgreSQL
            </span>
            .
        </p>
        
        <p className="mb-8 text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-light">
          I am always eager to expand my knowledge and have become proficient in{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            cloud technologies and DevOps practices
          </span>{" "}
          through both academic projects and self-directed learning. My recent projects have allowed me to work with technologies like{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            OpenCV, MediaPipe, Supabase, and FastAPI
          </span>
          , broadening my technical expertise.
        </p>
        
        <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-light">
          <span className="italic text-gray-900 dark:text-gray-100">
            When I&apos;m not coding
          </span>
          , I spend my time playing the guitar, working on projects, reading, and
          continuously seeking to learn new things. As I approach graduation, I am actively seeking{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            full-time software development opportunities
          </span>{" "}
          where I can leverage my skills and continue to grow professionally in the tech industry.
        </p>
      </div>
    </div>
  );
}