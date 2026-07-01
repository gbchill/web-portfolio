"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useScroll, animate } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[6000] h-1 origin-left bg-brand"
      style={{ scaleX }}
    />
  );
}

export function prefersReduced() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Scramble({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!inView) return;
    if (prefersReduced()) return setOut(text);
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#/<>";
    let f = 0;
    const id = setInterval(() => {
      setOut(
        text
          .split("")
          .map((ch, i) => (ch === " " ? " " : i < f ? ch : chars[Math.floor(Math.random() * chars.length)]))
          .join("")
      );
      f += 0.5;
      if (f > text.length) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, text]);
  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  );
}

export function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const [text, setText] = useState(words[0] ?? "");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (prefersReduced()) {
      setReduced(true);
      setText(words[0] ?? "");
      return;
    }
    let wordIdx = 0;
    let charIdx = words[0]?.length ?? 0; // start fully typed on the first word
    let deleting = true; // first action is to delete the first word
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[wordIdx];
      if (!deleting) {
        charIdx += 1;
        setText(current.slice(0, charIdx));
        if (charIdx >= current.length) {
          deleting = true;
          timer = setTimeout(tick, 1300); // hold when fully typed
          return;
        }
        timer = setTimeout(tick, 70);
      } else {
        charIdx -= 1;
        setText(current.slice(0, charIdx));
        if (charIdx <= 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          timer = setTimeout(tick, 220); // pause before next word
          return;
        }
        timer = setTimeout(tick, 40);
      }
    };

    timer = setTimeout(tick, 1300); // hold the first word before deleting
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className={className}>
      {text}
      <span
        className="ml-0.5 inline-block w-[0.6ch] bg-brand align-baseline"
        style={{ height: "1em", animation: reduced ? "none" : "tw-blink 1s steps(2) infinite" }}
        aria-hidden
      />
    </span>
  );
}

export function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (prefersReduced()) return setVal(to);
    const ctrl = animate(0, to, { duration: 1.2, ease, onUpdate: setVal });
    return () => ctrl.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export function Magnetic({
  children,
  href,
  className,
  target,
  rel,
  ariaLabel,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      whileTap={{ scale: 0.96 }}
      onMouseMove={(e) => {
        if (prefersReduced()) return;
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 14);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 14);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

export function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-ink" style={{ background: reverse ? "var(--brand)" : "transparent" }}>
      <motion.div
        className="flex gap-6 whitespace-nowrap py-2 font-mono text-xs font-bold uppercase"
        style={{ color: reverse ? "#fff" : "var(--ink)" }}
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-6">
            {t}
            <span style={{ color: reverse ? "#fff" : "var(--brand)" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="heading">
      <span className="group relative inline-block">
        <Scramble text={children} />
        <span className="absolute -bottom-1 left-0 h-1 w-full origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
    </h2>
  );
}
