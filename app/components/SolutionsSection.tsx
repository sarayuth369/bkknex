import Reveal from "./Reveal";

type Status = "active" | "coming-soon";

type Solution = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: Status;
  href?: string;
  cta?: string;
  emphasized?: boolean;
  icon: React.ReactNode;
};

const IconIoT = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden className="h-8 w-8">
    <circle
      cx="24"
      cy="24"
      r="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <circle cx="24" cy="8" r="2" fill="currentColor" />
    <circle cx="24" cy="40" r="2" fill="currentColor" />
    <circle cx="8" cy="24" r="2" fill="currentColor" />
    <circle cx="40" cy="24" r="2" fill="currentColor" />
    <path
      d="M24 10v10M24 28v10M10 24h10M28 24h10"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const IconSpace = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden className="h-8 w-8">
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      stroke="currentColor"
      strokeWidth="1.4"
      transform="rotate(-22 24 24)"
    />
    <circle
      cx="24"
      cy="24"
      r="5"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="34" cy="14" r="1.5" fill="currentColor" />
  </svg>
);

const IconAI = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden className="h-8 w-8">
    <rect
      x="14"
      y="14"
      width="20"
      height="20"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M24 8v6M24 34v6M8 24h6M34 24h6M12 12l4 4M32 32l4 4M36 12l-4 4M12 36l4-4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="22" r="1.5" fill="currentColor" />
    <circle cx="28" cy="22" r="1.5" fill="currentColor" />
    <path
      d="M20 28c1.4 1.2 2.8 1.6 4 1.6s2.6-.4 4-1.6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const SOLUTIONS: Solution[] = [
  {
    id: "smf-iot",
    title: "SMF IoT",
    subtitle: "Smart Farm Intelligence",
    description:
      "Intelligent farming powered by IoT, sensors, automation and real-time data.",
    status: "active",
    href: "https://smfiot.bkknex.com",
    cta: "Explore SMF IoT",
    emphasized: true,
    icon: IconIoT,
  },
  {
    id: "space",
    title: "SPACE",
    subtitle: "Technology Beyond Earth",
    description: "Exploring technology beyond Earth.",
    status: "coming-soon",
    icon: IconSpace,
  },
  {
    id: "ai",
    title: "AI",
    subtitle: "Intelligent Systems",
    description: "Intelligent systems for a smarter future.",
    status: "coming-soon",
    icon: IconAI,
  },
];

function StatusBadge({ status }: { status: Status }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,216,255,0.35)] bg-[rgba(18,216,255,0.08)] px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-[color:var(--brand-2)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-2)] pulse-soft" />
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[rgba(11,17,32,0.6)] px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-[color:var(--muted)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--muted-2)]" />
      Coming Soon
    </span>
  );
}

function SolutionCard({ s, delay }: { s: Solution; delay: 0 | 1 | 2 | 3 }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${
            s.emphasized
              ? "border-[color:var(--brand-2)]/40 bg-[rgba(18,216,255,0.06)] text-[color:var(--brand-2)]"
              : "border-[color:var(--border)] bg-[rgba(16,25,50,0.5)] text-[color:var(--muted)]"
          }`}
        >
          {s.icon}
        </div>
        <StatusBadge status={s.status} />
      </div>

      <div className="mt-8">
        <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {s.title}
        </h3>
        <p className="mt-1 text-sm font-mono uppercase tracking-[0.18em] text-[color:var(--muted-2)]">
          {s.subtitle}
        </p>
      </div>

      <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--muted)]">
        {s.description}
      </p>

      <div className="mt-10 flex items-center justify-between">
        {s.status === "active" && s.cta ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
            {s.cta}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        ) : (
          <span className="text-sm text-[color:var(--muted-2)]">
            Currently in development
          </span>
        )}
      </div>
    </>
  );

  const baseClass = `group relative flex h-full flex-col rounded-2xl p-7 sm:p-8 panel transition-all duration-500 ${
    s.emphasized ? "panel-glow" : ""
  } ${
    s.status === "coming-soon" ? "opacity-90" : ""
  } hover:-translate-y-1 hover:border-[color:var(--border-strong)]`;

  if (s.href) {
    return (
      <Reveal delay={delay} as="article" className="h-full">
        <a
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {content}
        </a>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} as="article" className="h-full">
      <div className={baseClass}>{content}</div>
    </Reveal>
  );
}

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative py-24 sm:py-32 border-t border-[color:var(--border)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-2)]">
              / Our Solutions
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Technology for
              <br />
              <span className="text-gradient">What Comes Next.</span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--muted)]">
              From intelligent agriculture to space and artificial intelligence,
              BKKNEX develops technology platforms designed for the next
              generation.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.id} s={s} delay={(i + 1) as 1 | 2 | 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
