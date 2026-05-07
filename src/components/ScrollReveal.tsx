"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealVariant = "blur-up" | "slide-right" | "scale" | "fade";

export function ScrollReveal({
  children,
  delayMs = 0,
  className = "",
  variant = "blur-up",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantStyles: Record<RevealVariant, { hidden: string; visible: string }> = {
    "blur-up": {
      hidden: "opacity-0 translate-y-10 scale-[0.97]",
      visible: "opacity-100 translate-y-0 scale-100",
    },
    "slide-right": {
      hidden: "opacity-0 -translate-x-16",
      visible: "opacity-100 translate-x-0",
    },
    scale: {
      hidden: "opacity-0 scale-[0.85]",
      visible: "opacity-100 scale-100",
    },
    fade: {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
  };

  const v = variantStyles[variant];

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        filter: visible ? "blur(0)" : variant === "scale" ? "blur(8px)" : variant === "blur-up" ? "blur(6px)" : "blur(3px)",
        transitionProperty: "opacity, transform, filter",
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      className={[
        visible ? v.visible : v.hidden,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

