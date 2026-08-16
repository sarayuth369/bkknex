"use client";

import { useLang } from "./LanguageProvider";
import Reveal from "./Reveal";

export function CTASection() {
  const { t } = useLang();
  return (
    <section className="relative py-24 sm:py-32 border-t border-[color:var(--border)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(18,60,140,0.30) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-30"
      />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-2)]">
            {t.cta.eyebrow}
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
            <span className="text-gradient">{t.cta.title}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
            {t.cta.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(255,255,255,0.6)]"
            >
              {t.cta.ctaPrimary}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="https://smfiot.bkknex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[rgba(11,17,32,0.5)] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[color:var(--brand-2)]"
            >
              {t.cta.ctaSecondary}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
