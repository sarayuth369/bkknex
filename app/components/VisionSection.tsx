"use client";

import { useLang } from "./LanguageProvider";
import Reveal from "./Reveal";

export function VisionSection() {
  const { t } = useLang();
  const FLOW = t.vision.steps;

  return (
    <section
      id="vision"
      className="relative py-24 sm:py-32 border-t border-[color:var(--border)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(18,60,140,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-30"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-2)]">
              {t.vision.eyebrow}
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              <span className="text-gradient">{t.vision.title}</span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--muted)]">
              {t.vision.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-20 mx-auto max-w-3xl">
          <ol className="relative flex flex-col">
            <div
              aria-hidden
              className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(61,139,255,0.6)_20%,rgba(18,216,255,0.6)_80%,transparent_100%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 overflow-hidden"
            >
              <div className="absolute inset-x-0 h-16 bg-[linear-gradient(180deg,transparent,rgba(18,216,255,0.95),transparent)] flow-line" />
            </div>

            {FLOW.map((step, i) => (
              <Reveal
                key={`${step.label}-${i}`}
                as="li"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="relative flex items-center gap-6 py-5 sm:py-6"
              >
                <div className="flex w-1/2 justify-end pr-6 sm:pr-10">
                  {i % 2 === 0 && (
                    <div className="text-right">
                      <div className="font-display text-xl sm:text-2xl font-semibold text-white">
                        {step.label}
                      </div>
                      <div className="mt-1 text-xs font-mono uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                        {step.note}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--brand-2)]/40 bg-[rgba(5,7,13,0.9)]">
                  <span className="font-mono text-[11px] text-[color:var(--brand-2)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex w-1/2 pl-6 sm:pl-10">
                  {i % 2 === 1 && (
                    <div className="text-left">
                      <div className="font-display text-xl sm:text-2xl font-semibold text-white">
                        {step.label}
                      </div>
                      <div className="mt-1 text-xs font-mono uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                        {step.note}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
