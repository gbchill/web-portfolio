"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render theme-dependent content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <div className="fixed bottom-5 right-5 w-[3rem] h-[3rem]" />
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      className="fixed bottom-5 right-5 z-[9999] flex h-11 w-11 items-center justify-center border-2 border-ink bg-canvas text-ink transition-colors hover:bg-brand hover:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
}