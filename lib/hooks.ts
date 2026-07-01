import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, _threshold = 0.75) {
  // Track which section crosses the vertical center of the viewport. This works
  // regardless of section height, unlike a visibility threshold which never
  // fires for sections taller than the viewport.
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
