export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--color-border)]/60">
      {/* Gradient top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), rgba(168,85,247,0.15), transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-2 py-12">
          <p className="text-sm font-medium gradient-text">Yuito Ohara</p>
          <p className="text-sm text-[var(--color-muted)]">
            &copy; 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
