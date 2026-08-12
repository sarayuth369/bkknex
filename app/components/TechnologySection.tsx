import Reveal from "./Reveal";

const TECHS = [
  {
    id: "iot",
    name: "IoT",
    tag: "Connected Systems",
    desc: "Connected physical systems.",
  },
  {
    id: "ai",
    name: "AI",
    tag: "Reasoning",
    desc: "Intelligent decision systems.",
  },
  {
    id: "automation",
    name: "Automation",
    tag: "Action",
    desc: "Technology that acts.",
  },
  {
    id: "data",
    name: "Data",
    tag: "Intelligence Layer",
    desc: "Turning information into intelligence.",
  },
  {
    id: "space",
    name: "Space Technology",
    tag: "Beyond Earth",
    desc: "Extending technology beyond Earth.",
  },
];

export function TechnologySection() {
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
              / Technology
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Built on Next-Generation{" "}
              <span className="text-gradient">Technology</span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--muted)]">
              A single ecosystem of interconnected technologies — designed to
              scale from a farm sensor to an orbital system.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TECHS.map((t, i) => (
            <Reveal
              key={t.id}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="h-full"
            >
              <div className="group relative h-full rounded-2xl panel p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--border-strong)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                    {String(i + 1).padStart(2, "0")} · {t.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--brand-2)]/70 shadow-[0_0_14px_var(--brand-glow)]" />
                </div>
                <div className="mt-8 font-display text-2xl sm:text-3xl font-semibold text-white">
                  {t.name}
                </div>
                <p className="mt-3 text-[15px] text-[color:var(--muted)]">
                  {t.desc}
                </p>

                {/* connector line */}
                <div className="mt-8 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(148,178,255,0.35),transparent)]" />
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-[color:var(--muted-2)]">
                  <span>NODE.{t.id.toUpperCase()}</span>
                  <span className="text-[color:var(--brand-2)]/80">ONLINE</span>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Central node card */}
          <Reveal
            delay={2}
            className="h-full md:col-span-2 lg:col-span-1"
          >
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
                  Core · BKKNEX
                </span>
                <div className="mt-8 font-display text-2xl sm:text-3xl font-semibold text-white">
                  Interconnected by design
                </div>
                <p className="mt-3 text-[15px] text-[color:var(--muted)]">
                  Every technology feeds the next. Signals become data. Data
                  becomes intelligence. Intelligence becomes action.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {TECHS.map((t) => (
                    <span
                      key={t.id}
                      className="rounded-full border border-[color:var(--border-strong)] bg-[rgba(11,17,32,0.6)] px-3 py-1 text-xs font-mono text-white/80"
                    >
                      {t.name}
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
