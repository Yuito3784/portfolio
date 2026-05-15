"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";

export function PhotoCard({
  src,
  alt,
  objectPositionClassName,
  objectFitClassName,
  imageClassName,
}: {
  src: string;
  alt: string;
  objectPositionClassName?: string;
  objectFitClassName?: string;
  imageClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translateY(-4px) scale(1.02)";
    el.style.boxShadow = "0 16px 48px rgba(99,102,241,0.1)";
    el.style.borderColor = "rgba(99,102,241,0.25)";
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
    el.style.borderColor = "";
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] overflow-hidden"
      style={{
        borderRadius: 14,
        border: "1px solid var(--color-border)",
        transition:
          "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease, border-color 0.4s ease",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={[
          objectFitClassName ?? "object-cover",
          objectPositionClassName ?? "object-center",
          imageClassName ?? "",
        ].join(" ")}
        style={{ transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)" }}
      />
    </div>
  );
}
