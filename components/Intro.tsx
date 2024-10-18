"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center mb-14 max-w-[50rem] mx-auto pt-8 sm:pt-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/gb_portrait.png"
              alt="George Badulescu portrait"
              width={180}
              height={180}
              quality="95"
              priority={true}
              className="h-55 w-55 rounded-full object-cover border-[0.35rem] border-white dark:border-black shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-4 mt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m George Badulescu.</span> I&apos;m a{" "}
        <span className="font-bold">software developer</span> and{" "}
        <span className="font-bold">Computer Science student</span> at Arizona State University, with{" "}
        <span className="font-bold">expertise in JavaScript and Java</span>.

      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-white shadow-lg px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 dark:bg-black-400 border border-white/[.2] active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
  className="bg-white shadow-lg p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-black-400 border border-white/[.2] dark:text-white/60 text-[1.35rem]"
  href="https://linkedin.com/in/george-badu"
  target="_blank"
>
  <BsLinkedin />
</a>

<a
  className="bg-white shadow-lg p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-black-400 dark:text-white/60 border border-white/[.2] text-[1.35rem]"
  href="https://github.com/gbchill"
  target="_blank"
>
  <FaGithubSquare />
</a>
      </motion.div>
    </section>
  );
}
