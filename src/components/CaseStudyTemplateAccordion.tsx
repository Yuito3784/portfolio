"use client";

import { useMemo, useState } from "react";

type Step = { key: string; title: string; body: string };

const steps: Step[] = [
  {
    key: "problem",
    title: "課題",
    body: "何が起きていて、何が困っていたのか。背景と前提を短く整理します。",
  },
  {
    key: "approach",
    title: "方針",
    body: "API / DB / 例外 / セキュリティなど、設計方針を「選んだ理由」込みで。",
  },
  {
    key: "architecture",
    title: "構成",
    body: "構成図（または説明）で、全体最適とボトルネックを見える化します。",
  },
  {
    key: "result",
    title: "結果",
    body: "速度 / 品質 / 運用の観点で、どこが改善したかを具体的に。",
  },
  {
    key: "tradeoffs",
    title: "捨てた案",
    body: "悩んだ選択と、その決断をなぜそうしたか。",
  },
];

export function CaseStudyTemplateAccordion() {
  const [openKey, setOpenKey] = useState<string>(steps[0]?.key ?? "problem");

  const active = useMemo(
    () => steps.find((s) => s.key === openKey) ?? steps[0],
    [openKey]
  );

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="card p-3">
        <p className="px-2 pb-2 text-xs font-semibold text-[var(--color-muted)]">
          構成ステップ
        </p>
        <div className="space-y-1">
          {steps.map((s, i) => {
            const isOpen = s.key === openKey;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setOpenKey(s.key)}
                className={[
                  "w-full rounded-xl px-3 py-2 text-left text-sm transition-all duration-200",
                  isOpen
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-fg)] font-medium"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-accent-soft)]/50",
                ].join(" ")}
                aria-pressed={isOpen}
              >
                <span className="mr-2 font-mono text-xs text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="card p-6">
          <p className="font-mono text-xs text-[var(--color-accent)]">DETAIL</p>
          <h3 className="mt-2 text-lg font-bold tracking-tight">
            {active.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {active.body}
          </p>
        </div>
      </div>
    </div>
  );
}
