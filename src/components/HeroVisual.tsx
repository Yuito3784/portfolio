"use client";

import { useEffect, useRef } from "react";

const PARTICLES = [
  { top: 25, left: 20 },
  { top: 40, left: 65 },
  { top: 15, left: 50 },
  { top: 60, left: 30 },
  { top: 35, left: 75 },
  { top: 70, left: 45 },
] as const;

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame: number;
    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };

    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const blobs = container.querySelectorAll<HTMLElement>("[data-blob]");
      blobs.forEach((b, i) => {
        const f = (i + 1) * 8;
        b.style.transform = `translate(${cx * f}px, ${cy * f}px)`;
      });
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[360px] mx-auto select-none"
      aria-hidden="true"
    >
      {/* Rings */}
      <div
        className="absolute inset-6 rounded-full border border-[var(--color-accent)]/15"
        style={{ animation: "pulse-ring 4s ease-in-out infinite" }}
      />
      <div
        className="absolute inset-14 rounded-full border border-[var(--color-accent)]/10"
        style={{ animation: "pulse-ring 4s ease-in-out infinite 1.2s" }}
      />

      {/* Blobs */}
      <div
        data-blob
        className="absolute top-[12%] left-[8%] w-[55%] h-[55%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)",
          animation: "mesh-float-1 8s ease-in-out infinite",
          filter: "blur(40px)",
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        data-blob
        className="absolute top-[28%] right-[4%] w-[50%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          animation: "mesh-float-2 10s ease-in-out infinite",
          filter: "blur(40px)",
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        data-blob
        className="absolute bottom-[8%] left-[18%] w-[48%] h-[48%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)",
          animation: "mesh-float-3 12s ease-in-out infinite",
          filter: "blur(40px)",
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div
            className="w-16 h-16 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 backdrop-blur-sm"
            style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
          />
          <div
            className="absolute -inset-3 rounded-2xl border border-[var(--color-accent)]/10 rotate-12"
            style={{ animation: "pulse-ring 3s ease-in-out infinite 0.5s" }}
          />
        </div>
      </div>

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--color-accent)]/40"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationName: "float-particle",
            animationDuration: `${3 + i * 0.7}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
