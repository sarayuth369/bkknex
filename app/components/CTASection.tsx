import Reveal from "./Reveal";

export function CTASection() {
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
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-30" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-2)]">
            / Next
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
            <span className="text-gradient">
              The Next Is Already
              <br className="hidden sm:block" /> Being Built.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
            Explore the technologies we&apos;re building today — and the
            possibilities we&apos;re preparing for tomorrow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(255,255,255,0.6)]"
            >
              Explore BKKNEX Solutions
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
              Visit SMF IoT
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
