"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Liquid } from "./liquid-gradient";
import type { Colors } from "./liquid-gradient";

const CTA_COLORS: Colors = {
  color1: "#ecfeff",
  color2: "#0f766e",
  color3: "#5eead4",
  color4: "#f0fdfa",
  color5: "#ffffff",
  color6: "#99f6e4",
  color7: "#0891b2",
  color8: "#0d9488",
  color9: "#2dd4bf",
  color10: "#67e8f9",
  color11: "#115e59",
  color12: "#ccfbf1",
  color13: "#06b6d4",
  color14: "#a5f3fc",
  color15: "#cffafe",
  color16: "#14b8a6",
  color17: "#0e7490",
};

type LiquidGradientButtonProps = {
  children: ReactNode;
  className?: string;
};

/** Visual button surface intended to live inside a Link or button. */
export function LiquidGradientButton({
  children,
  className,
}: LiquidGradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn(
        "group relative isolate flex h-10 items-center justify-center overflow-visible rounded-xl px-4 text-sm font-semibold text-white",
        className,
      )}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <span className="pointer-events-none absolute inset-x-[-6%] top-[12%] -z-20 h-[115%] overflow-hidden rounded-xl opacity-45 blur-xl transition-opacity group-hover:opacity-75">
        <Liquid isHovered={isHovered} colors={CTA_COLORS} />
      </span>
      <span className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-xl border border-white/20 bg-slate-950 shadow-sm">
        <Liquid isHovered={isHovered} colors={CTA_COLORS} />
        <span className="absolute inset-px rounded-[11px] border border-white/15" />
        <span className="absolute inset-x-[18%] top-0 h-px bg-white/80 blur-[1px]" />
      </span>
      <span className="relative z-10 whitespace-nowrap drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </span>
    </span>
  );
}

export default LiquidGradientButton;
