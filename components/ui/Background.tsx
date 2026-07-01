import React from "react";

// "clean" hybrid background: a fine grid fading from the top, one soft static brand glow,
// and a faint grain overlay. Pure CSS, theme-aware via CSS variables, no motion.
const grainUri =
  "url(\"data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"
  ) +
  "\")";

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft brand glow near the top */}
      <div
        className="absolute left-1/2 top-[-14%] h-[520px] w-[760px] -translate-x-1/2 rounded-full"
        style={{ background: "var(--glow)", filter: "blur(120px)" }}
      />
      {/* fine grid, drawn with currentColor-style var, fading out below */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 60%)",
        }}
      />
      {/* grain */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: grainUri, opacity: "var(--grain)" }}
      />
    </div>
  );
}
