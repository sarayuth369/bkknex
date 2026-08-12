"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  name: string;
  title: string;
  quote: string;
  imageSrc?: string;
};

export function FounderCard({
  name,
  title,
  quote,
  imageSrc = "/founder.png",
}: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="group relative rounded-3xl panel panel-glow overflow-hidden">
      {/* ambient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 10%, rgba(61,139,255,0.20) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 50% 100%, rgba(18,216,255,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="grid sm:grid-cols-5 gap-0">
        {/* Portrait */}
        <div className="relative sm:col-span-3 aspect-[4/5] sm:aspect-auto sm:min-h-[520px] overflow-hidden">
          {/* soft grid backdrop */}
          <div
            aria-hidden
            className="absolute inset-0 bg-grid opacity-30"
          />
          {/* light halo behind portrait */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(210,230,255,0.28) 0%, rgba(5,7,13,0) 65%)",
            }}
          />

          {!imgFailed ? (
            <Image
              src={imageSrc}
              alt={`${name}, ${title}`}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover object-top mix-blend-lighten"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[color:var(--muted-2)]">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[rgba(11,17,32,0.6)] font-display text-3xl text-white">
                  {name
                    .split(" ")
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em]">
                  Portrait
                </div>
              </div>
            </div>
          )}

          {/* edge fades so white bg dissolves into card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,7,13,0.85) 0%, rgba(5,7,13,0) 18%, rgba(5,7,13,0) 65%, rgba(5,7,13,0.95) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,7,13,0.7) 0%, rgba(5,7,13,0) 15%, rgba(5,7,13,0) 85%, rgba(5,7,13,0.7) 100%)",
            }}
          />

          {/* scanline accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-6 right-6 bottom-6 h-px shimmer"
          />

          {/* corner markers */}
          {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map(
            (pos) => (
              <span
                key={pos}
                aria-hidden
                className={`absolute ${pos} h-3 w-3 border-[color:var(--brand-2)]/60`}
                style={{
                  borderTopWidth: pos.includes("top") ? 1 : 0,
                  borderBottomWidth: pos.includes("bottom") ? 1 : 0,
                  borderLeftWidth: pos.includes("left") ? 1 : 0,
                  borderRightWidth: pos.includes("right") ? 1 : 0,
                  borderStyle: "solid",
                }}
              />
            ),
          )}
        </div>

        {/* Quote + identity */}
        <div className="sm:col-span-2 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--brand-2)]">
              / Founder&apos;s Note
            </div>
            <svg
              aria-hidden
              className="mt-6 h-8 w-8 text-[color:var(--brand-2)]/70"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M9 8c-3 0-5 2-5 5v6c0 2 1 4 4 4h3v-8H7c0-2 1-3 3-3V8H9zm14 0c-3 0-5 2-5 5v6c0 2 1 4 4 4h3v-8h-4c0-2 1-3 3-3V8h-1z" />
            </svg>
            <blockquote className="mt-4 font-display text-xl sm:text-2xl leading-snug tracking-tight text-white">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>

          <div className="mt-10 border-t border-[color:var(--border)] pt-6">
            <div className="font-display text-lg text-white">{name}</div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">{title}</div>
            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-2)] pulse-soft" />
              BKKNEX · Bangkok
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderCard;
