import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedText } from "@/components/AnimatedText";
import { TiltCard } from "@/components/TiltCard";
import { CaseStudyTemplateAccordion } from "@/components/CaseStudyTemplateAccordion";
import {
  certifications,
  devEnvironment,
  projects,
  skills,
} from "@/lib/content";

export const metadata = {
  title: "実績",
};

export default function WorksPage() {
  return (
    <Container>
      <section className="pt-16 pb-10 sm:pt-24 sm:pb-14">
        <ScrollReveal variant="blur-up">
          <AnimatedText
            text="実績"
            as="h1"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            staggerMs={60}
            gradient
          />
        </ScrollReveal>

        <ScrollReveal delayMs={300} variant="blur-up" className="mt-6">
          <p className="text-base leading-relaxed text-[var(--color-muted)]">
            これまでの業務経歴やスキル、取得資格などをまとめています。
          </p>
        </ScrollReveal>
      </section>

      <div className="section-divider" />

      {/* ═══ 技術スタック ═══ */}
      <section className="py-14 sm:py-20">
        <ScrollReveal variant="blur-up">
          <h2 className="text-2xl font-bold tracking-tight">技術スタック</h2>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.label} delayMs={i * 40} variant="scale">
              <span className="tag">
                {skill.label}
                <span className="text-[var(--color-accent)] text-sm font-medium ml-1">
                  {skill.years}
                </span>
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ 業務経歴 ═══ */}
      <section className="py-14 sm:py-20">
        <ScrollReveal variant="blur-up">
          <h2 className="text-2xl font-bold tracking-tight">業務経歴</h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ScrollReveal key={`${p.period}-${p.name}`} delayMs={i * 80} variant="blur-up">
              <TiltCard className="p-5 h-full">
                <p className="font-mono text-sm text-[var(--color-accent)]">
                  {p.period}
                </p>
                <p className="mt-2 text-base font-bold leading-relaxed">{p.name}</p>
                <p className="mt-1 text-base leading-relaxed text-[var(--color-muted)]">
                  {p.role}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ 資格 ═══ */}
      <section className="py-14 sm:py-20">
        <ScrollReveal variant="blur-up">
          <h2 className="text-2xl font-bold tracking-tight">免許・資格</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={100} variant="blur-up" className="mt-8">
          <div className="card overflow-hidden">
            <ul className="divide-y divide-[var(--color-border)]">
              {certifications.map((c) => (
                <li key={`${c.year}-${c.title}`} className="flex items-center gap-4 px-5 py-4">
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {c.year}
                  </span>
                  <span className="text-base">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </section>

      <div className="section-divider" />

      {/* ═══ 制作環境 ═══ */}
      <section className="py-14 sm:py-20">
        <ScrollReveal variant="blur-up">
          <h2 className="text-2xl font-bold tracking-tight">制作環境</h2>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {devEnvironment.map((item, i) => (
            <ScrollReveal key={item} delayMs={i * 40} variant="scale">
              <span className="tag">{item}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Case Study ═══ */}
      <section className="py-14 sm:py-20">
        <ScrollReveal variant="blur-up">
          <h2 className="text-2xl font-bold tracking-tight">Case Study テンプレート</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={100} variant="blur-up" className="mt-8">
          <CaseStudyTemplateAccordion />
        </ScrollReveal>
      </section>
    </Container>
  );
}
