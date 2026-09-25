"use client";

import Logo from "./Logo";
import { useLang } from "./LanguageProvider";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--background-2)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo height={40} width={140} />
            <p className="mt-4 text-white/90 font-display text-lg">
              {t.footer.tagline}
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {t.footer.location}
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
              {t.footer.solutions}
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
              <li className="text-[color:var(--muted)]">
                {t.footer.space} — {t.footer.comingSoon}
              </li>
              <li className="text-[color:var(--muted)]">
                {t.footer.ai} — {t.footer.comingSoon}
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
              {t.footer.technology}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {t.footer.techList.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
              {t.footer.corporate}
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#about" className="text-white/85 hover:text-white">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white/85 hover:text-white">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center border-t border-[color:var(--border)] pt-8">
          <div className="text-xs font-mono text-[color:var(--muted-2)]">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
