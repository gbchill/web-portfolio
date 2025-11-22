"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <div
      className="flex flex-col items-center justify-center transition-colors duration-300 mb-20 pb-10"
      id="about"
      ref={ref}
    >
      <h1 className="heading text-center mb-16 text-gray-900 dark:text-white">
        About <span className="text-blue-500">Me</span>
      </h1>
      <div className="max-w-3xl p-8 bg-white dark:bg-black-400 rounded-lg shadow-lg border border-white/[.2]">
        <p className="mb-8 text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-light">
          I&apos;m a fourth-year Computer Science student at ASU, graduating in May 2026.
          I&apos;ve been building software since I started college, and what drew me to programming was the ability to
          create tools that solve real problems. Over the past few years, I&apos;ve worked across the full stack, from
          database optimization to responsive frontends, using{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            TypeScript, Python, React, and AWS
          </span>
          .
        </p>

        <p className="mb-8 text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-light">
          This past summer at{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            Medtronic
          </span>
          , I built an enterprise analytics dashboard that processes over 10,000 test files daily across 5 global facilities.
          I got to work with production-scale databases (1M+ records) and deploy to real manufacturing environments.
          Before that, I worked with startups and nonprofits through DevX Solutions and Opportunity Hack, where I learned
          how to ship fast and iterate based on actual user feedback. I also picked up my{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            AWS Solutions Architect certification
          </span>{" "}
          along the way, which helped me understand cloud architecture beyond just writing code.
        </p>

        <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-light">
          Outside of internships, I love hackathons. I won $1,000 at a recent event for building{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            PhishGuard 360
          </span>
          , a Chrome extension that uses AI to detect phishing attempts. I also built{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            RacketVision
          </span>
          , an AI tennis coach that analyzes your form using computer vision. When I&apos;m not coding, you&apos;ll find me
          playing guitar, reading, or working on side projects. I&apos;m looking for full-time software engineering
          roles where I can keep building, learning, and working on challenging technical problems.
        </p>
      </div>
    </div>
  );
}