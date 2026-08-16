"use client";

import FounderCard from "./FounderCard";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export function AboutSection() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 border-t border-[color:var(--border)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(18,60,140,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-2)]">
              {t.about.eyebrow}
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              {t.about.title1}
              <br />
              <span className="text-gradient">{t.about.title2}</span>
            </h2>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-7">
            <div className="space-y-6 text-lg text-white/85 leading-relaxed">
              <p>{t.about.p1}</p>
              <p className="text-[color:var(--muted)] text-base">{t.about.p2}</p>
              <p className="text-[color:var(--muted)] text-base">{t.about.p3}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
              <div className="rounded-xl border border-[color:var(--border)] bg-[rgba(11,17,32,0.5)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                  {t.about.labels.origin}
                </div>
                <div className="mt-2 text-white font-medium">
                  {t.about.values.origin}
                </div>
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-[rgba(11,17,32,0.5)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                  {t.about.labels.focus}
                </div>
                <div className="mt-2 text-white font-medium">
                  {t.about.values.focus}
                </div>
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-[rgba(11,17,32,0.5)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                  {t.about.labels.horizon}
                </div>
                <div className="mt-2 text-white font-medium">
                  {t.about.values.horizon}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="mt-20">
          <FounderCard nameEncoded="U2FyYXl1dGg=" initials="S" />
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
