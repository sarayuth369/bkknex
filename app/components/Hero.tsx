import ParticleField from "./ParticleField";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(18,60,140,0.35) 0%, rgba(5,7,13,0) 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(18,216,255,0.10) 0%, rgba(5,7,13,0) 60%), var(--background)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-70">
        <ParticleField />
      </div>

      {/* Orbital rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-[900px] w-[900px] max-w-[120vw] max-h-[120vw]">
          <div className="absolute inset-0 rounded-full border border-[color:var(--border)] orbit-slow" />
          <div className="absolute inset-16 rounded-full border border-[color:var(--border)] orbit-reverse" />
          <div className="absolute inset-40 rounded-full border border-[color:var(--border-strong)] orbit-medium" />
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[color:var(--brand-2)] shadow-[0_0_20px_var(--brand-glow)]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-16 sm:pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[rgba(11,17,32,0.6)] px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-[color:var(--muted)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-2)] pulse-soft" />
            BKKNEX · Bangkok, Thailand
          </div>

          <h1 className="font-display mt-6 text-[clamp(2.6rem,7.2vw,6.25rem)] leading-[0.98] tracking-[-0.02em] font-semibold">
            <span className="text-gradient">Building What</span>
            <br />
            <span className="text-gradient">Comes Next.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/85">
            Next-generation technology from Bangkok.
          </p>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[color:var(--muted)]">
            We build intelligent technologies that connect the physical world,
            expand human capability, and shape the future.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#solutions"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(255,255,255,0.6)]"
            >
              Explore Solutions
              <span
                aria-hidden
                className="transition-transform group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[rgba(11,17,32,0.5)] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[color:var(--brand-2)]"
            >
              Discover BKKNEX
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>

          {/* Stat / marker row */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl">
            {[
              { k: "01", v: "IoT" },
              { k: "02", v: "AI" },
              { k: "03", v: "Automation" },
              { k: "04", v: "Space" },
            ].map((s) => (
              <div
                key={s.k}
                className="flex flex-col border-l border-[color:var(--border)] pl-4"
              >
                <span className="font-mono text-xs text-[color:var(--muted-2)]">
                  {s.k}
                </span>
                <span className="mt-1 text-white font-medium">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#solutions"
        aria-label="Scroll to solutions"
        className="absolute left-1/2 bottom-6 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[color:var(--muted)]"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="relative block h-8 w-[1px] bg-[color:var(--border-strong)] overflow-hidden">
          <span className="absolute left-0 right-0 h-3 bg-[color:var(--brand-2)] flow-line" />
        </span>
      </a>
    </section>
  );
}

export default Hero;
