"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Liquid } from "./liquid-gradient";
import type { Colors } from "./liquid-gradient";

const CTA_COLORS: Colors = {
  color1: "#fff7ed",
  color2: "#9a3412",
  color3: "#fdba74",
  color4: "#fffbeb",
  color5: "#ffffff",
  color6: "#fcd34d",
  color7: "#c2410c",
  color8: "#c9843a",
  color9: "#f59e0b",
  color10: "#fb923c",
  color11: "#7c2d12",
  color12: "#ffedd5",
  color13: "#ea580c",
  color14: "#fdba74",
  color15: "#fed7aa",
  color16: "#d97706",
  color17: "#431407",
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
