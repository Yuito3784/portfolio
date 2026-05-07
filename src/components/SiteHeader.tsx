"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "プロフィール" },
  { href: "/works", label: "実績" },
  { href: "/contact", label: "お問い合わせ" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/60 bg-[var(--color-bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="text-base font-bold tracking-tight transition-opacity hover:opacity-70"
        >
          <span className="gradient-text">Yuito Ohara</span>
        </Link>

        <nav className="flex items-center gap-1 text-base">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative rounded-full px-4 py-2 transition-all duration-300",
                  active
                    ? "text-[var(--color-fg)] font-medium"
                    : "text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-accent-soft)]",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {active && (
                  <span className="absolute inset-x-2 -bottom-[9px] h-[2px] rounded-full bg-[var(--color-accent)]" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
