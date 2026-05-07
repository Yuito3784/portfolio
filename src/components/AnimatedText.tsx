"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delayMs?: number;
  staggerMs?: number;
  gradient?: boolean;
};

export function AnimatedText({
  text,
  className = "",
  as: Tag = "span",
  delayMs = 0,
  staggerMs = 40,
  gradient = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);
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

  const chars = text.split("");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>}
      className={`block ${gradient ? "gradient-text" : ""} ${className}`}
      style={{ perspective: "600px", margin: 0 }}
    >
      {chars.map((char, i) => (
        <span
          key={`${i}-${char}`}
          className="inline-block"
          style={{
            animation: visible
              ? `text-reveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${delayMs + i * staggerMs}ms both`
              : "none",
            opacity: visible ? undefined : 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}
