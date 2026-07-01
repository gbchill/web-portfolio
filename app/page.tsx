import Skills from "@/components/ui/Skills";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ScrollProgress } from "@/components/ui/motion";
import { navItems } from "@/data/index";

const Home = () => {
  return (
    <main className="relative mx-auto w-full max-w-3xl px-6 sm:px-8">
      <ScrollProgress />
      <FloatingNav navItems={navItems} />
      <Intro />
      <About />
      <Experience />
      <RecentProjects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
