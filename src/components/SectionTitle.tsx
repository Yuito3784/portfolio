import { type ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          {children}
        </div>
      ) : null}
    </div>
  );
}
