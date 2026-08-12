"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Base64-encoded text — never appears as plain text in the HTML source. */
  encoded: string;
  /** Rendered CSS height in pixels. */
  height?: number;
  /** Font weight (Space Grotesk). */
  weight?: number;
  /** Fill color. */
  color?: string;
  className?: string;
  /** Accessible label. Keep generic — do NOT include the real name. */
  ariaLabel?: string;
};

/**
 * Renders text into a <canvas> at runtime so the string is not present
 * in the HTML source. Crawlers that don't OCR pixel content (Google,
 * Bing, standard scrapers) cannot associate the rendered characters
 * with the page. The decoded string only exists in memory client-side.
 */
export function PrivateName({
  encoded,
  height = 22,
  weight = 600,
  color = "#ffffff",
  className = "",
  ariaLabel = "Name withheld",
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Decode client-side; string only exists in memory
    let text = "";
    try {
      text =
        typeof window !== "undefined" && typeof atob === "function"
          ? decodeURIComponent(
              atob(encoded)
                .split("")
                .map(
                  (c) =>
                    "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2),
                )
                .join(""),
            )
          : "";
    } catch {
      text = "";
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Resolve the actual computed font-family from a DOM reference so
    // that Next.js's auto-adjusted `--font-space-grotesk` variable
    // (which the canvas context cannot read) is expanded correctly.
    const probe = document.createElement("span");
    probe.className = "font-display";
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    document.body.appendChild(probe);
    const resolvedFamily = getComputedStyle(probe).fontFamily || "sans-serif";
    document.body.removeChild(probe);

    const fontFamily = resolvedFamily;

    // Measure
    const measureCtx = document.createElement("canvas").getContext("2d");
    if (!measureCtx) return;
    measureCtx.font = `${weight} ${height}px ${fontFamily}`;
    const metrics = measureCtx.measureText(text);
    const width = Math.ceil(metrics.width) + 4;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * 1.4 * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${Math.ceil(height * 1.4)}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height * 1.4);
    ctx.font = `${weight} ${height}px ${fontFamily}`;
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = color;
    ctx.fillText(text, 2, height);
  }, [encoded, height, weight, color]);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className={className}
    />
  );
}

export default PrivateName;
