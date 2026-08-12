"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  showWordmark?: boolean;
};

export function Logo({
  className = "",
  width = 140,
  height = 40,
  priority = false,
  showWordmark = true,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`font-display font-bold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#ffffff_0%,#3d8bff_60%,#12d8ff_100%)] ${className}`}
        style={{ fontSize: Math.max(18, Math.round(height * 0.7)) }}
      >
        BKKNEX
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="BKKNEX"
      width={width}
      height={height}
      priority={priority}
      onError={() => setFailed(true)}
      className={className}
      style={{ height: "auto", width: "auto", maxHeight: height }}
    />
  );
}

export default Logo;
