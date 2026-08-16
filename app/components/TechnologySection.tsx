"use client";

import { useLang } from "./LanguageProvider";
import Reveal from "./Reveal";

export function TechnologySection() {
  const { t } = useLang();
  const TECHS = t.technology.items;

  return (
    <section
      id="technology"
      className="relative py-24 sm:py-32 border-t border-[color:var(--border)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(18,216,255,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-2)]">
              {t.technology.eyebrow}
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              {t.technology.title1}{" "}
              <span className="text-gradient">{t.technology.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--muted)]">
              {t.technology.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TECHS.map((tech, i) => (
            <Reveal
              key={`${tech.name}-${i}`}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="h-full"
            >
              <div className="group relative h-full rounded-2xl panel p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--border-strong)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                    {String(i + 1).padStart(2, "0")} · {tech.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--brand-2)]/70 shadow-[0_0_14px_var(--brand-glow)]" />
                </div>
                <div className="mt-8 font-display text-2xl sm:text-3xl font-semibold text-white">
                  {tech.name}
                </div>
                <p className="mt-3 text-[15px] text-[color:var(--muted)]">
                  {tech.desc}
                </p>

                <div className="mt-8 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(148,178,255,0.35),transparent)]" />
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-[color:var(--muted-2)]">
                  <span>
                    NODE.
                    {tech.name.replace(/\s+/g, "").toUpperCase().slice(0, 12)}
                  </span>
                  <span className="text-[color:var(--brand-2)]/80">
                    {t.technology.online}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={2} className="h-full md:col-span-2 lg:col-span-1">
            <div className="group relative h-full rounded-2xl panel panel-glow p-7 overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(18,216,255,0.16) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--brand-2)]">
                  {t.technology.core.eyebrow}
                </span>
                <div className="mt-8 font-display text-2xl sm:text-3xl font-semibold text-white">
                  {t.technology.core.title}
                </div>
                <p className="mt-3 text-[15px] text-[color:var(--muted)]">
                  {t.technology.core.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {TECHS.map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-full border border-[color:var(--border-strong)] bg-[rgba(11,17,32,0.6)] px-3 py-1 text-xs font-mono text-white/80"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
