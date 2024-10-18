"use client";

import dynamic from "next/dynamic";

import Skills from "@/components/ui/Skills";
import Intro from "@/components/Intro";
import About from "@/components/About";
import { navItems } from "@/data/index";


const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });

// Dynamically import FloatingNav with SSR disabled and correct typing
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNav").then(mod => mod.FloatingNav), {
  ssr: false, // Disable server-side rendering for this component
});

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full overflow-x-hidden mx-auto">
       <FloatingNav navItems={navItems}/>
        <Intro/>
        <About/>
        <RecentProjects />
        <Experience />
        <Skills/>
        <Contact />
      </div>
    </main>
  );
};

export default Home;
