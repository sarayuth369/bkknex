import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--background-2)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo height={40} width={140} />
            <p className="mt-4 text-white/90 font-display text-lg">
              Building What Comes Next.
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Next-generation technology from Bangkok, Thailand.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
              Solutions
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://smfiot.bkknex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/85 hover:text-white"
                >
                  SMF IoT
                  <span aria-hidden className="text-[color:var(--brand-2)]">
                    ↗
                  </span>
                </a>
              </li>
              <li className="text-[color:var(--muted)]">Space — Coming Soon</li>
              <li className="text-[color:var(--muted)]">AI — Coming Soon</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
              Technology
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>IoT</li>
              <li>AI</li>
              <li>Automation</li>
              <li>Data</li>
              <li>Space Technology</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
              Corporate
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#about" className="text-white/85 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-white/85 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[color:var(--border)] pt-8">
          <div className="text-xs font-mono text-[color:var(--muted-2)]">
            © 2026 BKKNEX. All rights reserved.
          </div>
          <div className="text-xs font-mono text-[color:var(--muted-2)]">
            Bangkok, Thailand · 13.7563° N, 100.5018° E
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
