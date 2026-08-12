import Reveal from "./Reveal";

export function AboutSection() {
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
              / About BKKNEX
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Building What
              <br />
              <span className="text-gradient">Comes Next.</span>
            </h2>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-7">
            <div className="space-y-6 text-lg text-white/85 leading-relaxed">
              <p>
                BKKNEX is a technology company focused on building what comes
                next.
              </p>
              <p className="text-[color:var(--muted)] text-base">
                We develop and explore technologies across connected systems,
                intelligent software, automation and emerging technology
                platforms.
              </p>
              <p className="text-[color:var(--muted)] text-base">
                Starting from Bangkok, our vision is to build technology with
                the potential to reach beyond borders — and eventually beyond
                Earth.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
              <div className="rounded-xl border border-[color:var(--border)] bg-[rgba(11,17,32,0.5)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                  Origin
                </div>
                <div className="mt-2 text-white font-medium">Bangkok, TH</div>
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-[rgba(11,17,32,0.5)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                  Focus
                </div>
                <div className="mt-2 text-white font-medium">Deep Tech</div>
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-[rgba(11,17,32,0.5)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
                  Horizon
                </div>
                <div className="mt-2 text-white font-medium">Beyond Earth</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
