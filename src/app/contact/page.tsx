import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedText } from "@/components/AnimatedText";
import { TiltCard } from "@/components/TiltCard";

export const metadata = {
  title: "お問い合わせ",
};

export default function ContactPage() {
  return (
    <Container>
      <section className="pt-16 pb-10 sm:pt-24 sm:pb-14">
        <ScrollReveal variant="blur-up">
          <AnimatedText
            text="お問い合わせ"
            as="h1"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            staggerMs={40}
            gradient
          />
        </ScrollReveal>

        <ScrollReveal delayMs={300} variant="blur-up" className="mt-6">
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            お気軽にご連絡ください。
          </p>
        </ScrollReveal>
      </section>

      <div className="section-divider" />

      <section className="py-14 sm:py-20">
        <ScrollReveal variant="blur-up">
          <h2 className="text-2xl font-bold tracking-tight">ご連絡方法</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={100} variant="blur-up" className="mt-8">
          <TiltCard className="p-6">
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              メールやSNSのリンクは後ほど設置予定です。
            </p>
          </TiltCard>
        </ScrollReveal>
      </section>
    </Container>
  );
}
