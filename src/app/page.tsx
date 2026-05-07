import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TimelineTable } from "@/components/TimelineTable";
import { TiltCard } from "@/components/TiltCard";
import Image from "next/image";
import { PhotoCard } from "@/components/PhotoCard";
import {
  aboutMe,
  biography,
  hobbies,
  person,
  timeline,
} from "@/lib/content";

/* ── Section Heading with gradient accent bar ── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span
        style={{
          width: 4,
          height: 30,
          borderRadius: 4,
          background: "linear-gradient(to bottom, #6366f1, #a855f7, #06b6d4)",
          flexShrink: 0,
        }}
      />
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>
    </div>
  );
}

/* ── Gradient divider ── */
function Divider() {
  return (
    <div
      style={{
        height: 1,
        background:
          "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.15) 20%, rgba(168,85,247,0.12) 50%, rgba(6,182,212,0.1) 80%, transparent 100%)",
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          Hero
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background mesh */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute rounded-full"
            style={{
              top: "-15%",
              right: "-8%",
              width: "55%",
              height: "65%",
              background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)",
              animation: "mesh-float-1 12s ease-in-out infinite",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: "-10%",
              left: "-8%",
              width: "50%",
              height: "55%",
              background: "radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)",
              animation: "mesh-float-2 15s ease-in-out infinite",
              filter: "blur(60px)",
            }}
          />
        </div>

        <Container>
          <div className="pt-8 pb-8 sm:pt-10 sm:pb-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-8 lg:items-center">
              {/* 左: テキスト */}
              <div className="order-2 lg:order-1">
                <div
                  style={{ animation: "fade-in-up 0.8s cubic-bezier(0.23,1,0.32,1) 0.3s both" }}
                >
                  <p className="text-lg leading-loose">{person.greeting}</p>

                  <ul
                    className="mt-4 space-y-0.5 text-lg leading-loose"
                    style={{
                      paddingLeft: 20,
                      borderLeft: "3px solid",
                      borderImage: "linear-gradient(to bottom, #6366f1, #a855f7) 1",
                    }}
                  >
                    {person.intro.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="mt-1.5 text-base leading-loose" style={{ color: "var(--color-muted)" }}>
                    {person.introNote}
                  </p>

                  <p className="mt-4 text-lg leading-loose">
                    {person.philosophy.split("\n").map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </p>

                  <p className="mt-4 text-lg leading-loose" style={{ color: "var(--color-muted)" }}>
                    {person.message.split("\n").map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </div>

              {/* 右: プロフィール写真 */}
              <div className="order-1 lg:order-2 flex justify-center"
                style={{
                  animation: "fade-in-up 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s both",
                }}
              >
                <div
                  className="relative"
                  style={{
                    padding: 3,
                    borderRadius: 22,
                    background: "linear-gradient(135deg, #6366f1, #a855f7, #06b6d4, #6366f1)",
                    backgroundSize: "300% 300%",
                    animation: "gradient-shift 4s ease infinite",
                  }}
                >
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      inset: -24,
                      borderRadius: 34,
                      background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
                      animation: "glow-pulse 3s ease-in-out infinite",
                      zIndex: -1,
                    }}
                  />
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "clamp(260px, 34vw, 340px)",
                      aspectRatio: "4 / 5",
                      borderRadius: 19,
                    }}
                  >
                    <Image
                      src="/images/profile.jpg"
                      alt={`${person.name} のプロフィール写真`}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 260px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════
          わたしについて
          ═══════════════════════════════════════════ */}
      <section className="relative">
        <Divider />
        <Container>
          <div className="py-16 sm:py-24">
            <ScrollReveal variant="blur-up">
              <SectionHeading>わたしについて</SectionHeading>
            </ScrollReveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aboutMe.map((item, i) => (
                <ScrollReveal key={item.title} delayMs={i * 120} variant="blur-up">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: 16,
                      padding: 1,
                      background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.12), rgba(6,182,212,0.15))",
                      transition: "box-shadow 0.4s ease, transform 0.4s ease",
                    }}
                  >
                    <TiltCard className="!border-0 p-7 h-full relative overflow-hidden !rounded-[15px]">
                      {/* Number watermark */}
                      <span
                        className="absolute top-2 right-4 select-none"
                        style={{
                          fontSize: 56,
                          fontWeight: 800,
                          lineHeight: 1,
                          background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.06))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-lg font-bold relative">{item.title}</p>
                      <p className="mt-3 text-base leading-relaxed relative" style={{ color: "var(--color-muted)" }}>
                        {item.body}
                      </p>
                    </TiltCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════
          経歴・出来事
          ═══════════════════════════════════════════ */}
      <section className="relative">
        <Divider />

        {/* Subtle background accent */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute rounded-full"
            style={{
              top: "10%",
              left: "-10%",
              width: "40%",
              height: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <Container>
          <div className="py-16 sm:py-24">
            <ScrollReveal variant="blur-up">
              <SectionHeading>経歴・出来事</SectionHeading>
            </ScrollReveal>

            <div className="mt-10">
              <TimelineTable items={timeline} />
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════
          略歴
          ═══════════════════════════════════════════ */}
      <section className="relative">
        <Divider />

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute rounded-full"
            style={{
              top: "20%",
              right: "-5%",
              width: "35%",
              height: "30%",
              background: "radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: "10%",
              left: "10%",
              width: "30%",
              height: "25%",
              background: "radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <Container>
          <div className="py-16 sm:py-24">
            <ScrollReveal variant="blur-up">
              <SectionHeading>略歴</SectionHeading>
              <p className="mt-4 text-base max-w-xl" style={{ color: "var(--color-muted)" }}>
                生い立ちから現在までの歩みを、写真と一緒にざっくり振り返っています。
              </p>
            </ScrollReveal>

            <div className="mt-12 space-y-24">
              {biography.map((section, sectionIdx) => (
                <div key={section.period}>
                  <ScrollReveal delayMs={sectionIdx * 60} variant="blur-up">
                    {/* Period badge */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "6px 18px",
                        borderRadius: 9999,
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.07))",
                        color: "#6366f1",
                        border: "1px solid rgba(99,102,241,0.2)",
                      }}
                    >
                      {section.period}
                    </span>
                    <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed max-w-2xl" style={{ color: "var(--color-muted)" }}>
                      {section.description}
                    </p>
                  </ScrollReveal>

                  {section.images.length > 0 && (
                    <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
                      {section.images.map((img, imgIdx) => (
                        <ScrollReveal
                          key={img.src}
                          delayMs={sectionIdx * 60 + imgIdx * 100}
                          variant="blur-up"
                        >
                          <PhotoCard
                            src={img.src}
                            alt={img.alt}
                            objectPositionClassName={img.objectPositionClassName}
                            objectFitClassName={img.objectFitClassName}
                            imageClassName={img.imageClassName}
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════
          趣味・好きなもの
          ═══════════════════════════════════════════ */}
      <section className="relative">
        <Divider />
        <Container>
          <div className="py-16 sm:py-24">
            <ScrollReveal variant="blur-up">
              <SectionHeading>趣味・好きなもの</SectionHeading>
            </ScrollReveal>

            {/* Vertical stack: most readable & stable */}
            <div className="mt-10 max-w-4xl space-y-5">
              {hobbies.map((hobby, i) => {
                const accentColors = [
                  "#6366f1",
                  "#a855f7",
                  "#06b6d4",
                  "#f59e0b",
                  "#10b981",
                  "#f43f5e",
                ];
                const color = accentColors[i % accentColors.length];
                return (
                  <ScrollReveal key={hobby.category} delayMs={i * 80} variant="blur-up">
                    <TiltCard className="p-6 relative overflow-hidden">
                      {/* Left accent bar */}
                      <div
                        className="absolute left-0 top-0 bottom-0"
                        style={{
                          width: 4,
                          background: `linear-gradient(180deg, ${color}, ${color}88)`,
                        }}
                      />

                      <div className="pl-2">
                        <p className="text-lg font-bold" style={{ color }}>
                          {hobby.category}
                        </p>

                        <ul
                          className="mt-3 grid grid-cols-1 gap-y-2 text-base leading-relaxed"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {hobby.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
