"use client";

import { useMemo, useState } from "react";

type Item = { title: string; body: string };

export function ValueSelector({ items }: { items: Item[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(
    () => items[Math.min(activeIndex, items.length - 1)] ?? items[0],
    [activeIndex, items]
  );

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
        <p className="text-sm font-semibold">価値観の選択</p>
        <div className="mt-3 flex flex-col gap-2">
          {items.map((it, idx) => {
            const activeNow = idx === activeIndex;
            return (
              <button
                key={it.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-pressed={activeNow}
                className={[
                  "w-full rounded-lg border px-3 py-2 text-left transition-colors",
                  activeNow
                    ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-fg)]"
                    : "border-[var(--color-border)] bg-transparent text-[var(--color-muted)] hover:bg-[var(--color-accent-soft)]/40 hover:text-[var(--color-fg)]",
                ].join(" ")}
              >
                <span className="text-sm font-semibold">{it.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-[var(--color-muted)]">
                SELECTED
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight">
                {active.title}
              </p>
            </div>
            <div
              aria-hidden="true"
              className="mt-1 h-10 w-10 rounded-full bg-[var(--color-accent-soft)]"
            />
          </div>

          <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
            {active.body}
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--color-border)] bg-white/50 px-4 py-3">
              <p className="text-xs font-semibold text-[var(--color-muted)]">
                進め方
              </p>
              <p className="mt-1 text-sm">
                {active.title === "丁寧さ"
                  ? "仕様の穴を早めに潰す"
                  : active.title === "再現性"
                    ? "手順を固定し運用まで渡す"
                    : "不確実な点を先に共有する"}
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-white/50 px-4 py-3">
              <p className="text-xs font-semibold text-[var(--color-muted)]">
                成果イメージ
              </p>
              <p className="mt-1 text-sm">
                {active.title === "丁寧さ"
                  ? "後戻りの少ない実装"
                  : active.title === "再現性"
                    ? "引き継げる品質"
                    : "合意形成が速い開発"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

