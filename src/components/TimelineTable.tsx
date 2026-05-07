"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineItem } from "@/lib/content";

function TimelineRow({
  item,
  index,
  total,
}: {
  item: TimelineItem;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLast = index === total - 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex gap-4 sm:gap-6"
      style={{
        padding: "20px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.6s ease ${index * 60}ms, transform 0.6s ease ${index * 60}ms`,
      }}
    >
      {/* Date — desktop */}
      <div
        className="hidden sm:block shrink-0 pt-0.5 text-right font-mono"
        style={{ width: 80, fontSize: 14, color: "var(--color-accent)" }}
      >
        {item.date}
      </div>

      {/* Dot */}
      <div className="relative z-10 mt-1.5 flex shrink-0 items-center justify-center">
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: isLast
              ? "3px solid #6366f1"
              : "2px solid #d6d3d1",
            background: isLast ? "#6366f1" : "#fff",
            boxShadow: isLast
              ? "0 0 0 5px rgba(99,102,241,0.15)"
              : "none",
            transition: "all 0.3s ease",
          }}
          className="group-hover:!border-[#6366f1] group-hover:!bg-[#6366f1] group-hover:![box-shadow:0_0_0_5px_rgba(99,102,241,0.12)]"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className="font-mono sm:hidden"
          style={{ fontSize: 13, color: "var(--color-accent)", fontWeight: 600 }}
        >
          {item.date}
        </p>
        <p
          className="sm:mt-0"
          style={{ marginTop: 2, fontSize: 16, fontWeight: 600, lineHeight: 1.7 }}
        >
          {item.title}
        </p>
        {item.note && (
          <p style={{ marginTop: 6, fontSize: 15, lineHeight: 1.8, color: "var(--color-muted)" }}>
            {item.note}
          </p>
        )}
      </div>
    </div>
  );
}

export function TimelineTable({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {/* Gradient vertical line */}
      <div
        className="absolute sm:left-[92px]"
        style={{
          left: 6,
          top: 12,
          bottom: 12,
          width: 2,
          borderRadius: 2,
          background:
            "linear-gradient(to bottom, #6366f1, #a855f7 40%, #06b6d4 70%, transparent)",
        }}
      />

      <div>
        {items.map((item, i) => (
          <TimelineRow
            key={`${item.date}-${item.title}`}
            item={item}
            index={i}
            total={items.length}
          />
        ))}
      </div>
    </div>
  );
}
