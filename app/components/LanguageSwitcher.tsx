"use client";

import { useLang } from "./LanguageProvider";
import type { Lang } from "@/lib/i18n";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

export function LanguageSwitcher({ className = "", size = "sm" }: Props) {
  const { lang, setLang, t } = useLang();

  const pad = size === "sm" ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-xs";

  const Btn = ({ value, label }: { value: Lang; label: string }) => {
    const active = lang === value;
    const ariaLabel =
      value === "en" ? t.nav.switchToEnglish : t.nav.switchToThai;
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        aria-pressed={active}
        aria-label={ariaLabel}
        className={`${pad} font-mono uppercase tracking-[0.2em] rounded-md transition-colors ${
          active
            ? "text-white bg-[rgba(18,216,255,0.10)] border border-[rgba(18,216,255,0.35)]"
            : "text-[color:var(--muted)] hover:text-white border border-transparent"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1 rounded-lg border border-[color:var(--border)] bg-[rgba(11,17,32,0.5)] p-0.5 ${className}`}
    >
      <Btn value="en" label="EN" />
      <span
        aria-hidden
        className="h-3 w-px bg-[color:var(--border-strong)]"
      />
      <Btn value="th" label="TH" />
    </div>
  );
}

export default LanguageSwitcher;
