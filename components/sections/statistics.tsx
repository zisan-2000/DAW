"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { AGENCY_CONFIG, HOMEPAGE } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/utils";

// Slightly stronger entrance than the default fadeUp — scale + rise,
// tuned for "counter" cards so they feel like they're landing into place.
const statCardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function StatItem({
  label,
  end,
  suffix,
  isPlaceholder,
  index,
  startCounting,
}: {
  label: string;
  end: number;
  suffix: string;
  isPlaceholder: boolean;
  index: number;
  startCounting: boolean;
}) {
  // useCountUp drives its own IntersectionObserver via `ref`, but we also
  // gate it on the parent's `startCounting` (tied to the same viewport
  // trigger as the stagger animation) so the digits start climbing right
  // as the card finishes landing, not before.
  const { ref, value } = useCountUp({ end, start: startCounting });

  return (
    <motion.div
      variants={statCardVariant}
      className={cn(
        "relative px-4 py-2 text-center sm:px-6",
        index > 0 && "sm:border-l sm:border-white/10",
      )}
    >
      <p
        ref={ref}
        className="font-display text-4xl font-semibold tracking-tight text-surface-ink-foreground tabular-nums sm:text-5xl lg:text-6xl"
      >
        {value}
        <span className="text-accent">{suffix}</span>
      </p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={startCounting ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-3 text-sm text-surface-ink-foreground/55"
      >
        {label}
      </motion.p>
      {isPlaceholder ? (
        <p className="mt-1 text-[10px] tracking-[0.14em] text-surface-ink-foreground/35 uppercase">
          Placeholder · editable
        </p>
      ) : null}
    </motion.div>
  );
}

export function StatisticsSection() {
  const t = useTranslations("homepage.statistics");
  const { statistics } = HOMEPAGE;

  const gridRef = useRef<HTMLDivElement>(null);
  // Fires once, when the stat grid itself scrolls into view — this is what
  // actually kicks off the count-up, independent of the header's own
  // viewport trigger above it.
  const gridInView = useInView(gridRef, { once: true, amount: 0.4 });

  return (
    <Section
      tone="ink"
      padding="default"
      bleed
      className="overflow-hidden"
      aria-labelledby="stats-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="mb-12 max-w-2xl md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
              },
            }}
          >
            <SectionHeader
              titleId="stats-heading"
              tone="ink"
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("note")}
            />
          </motion.div>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 gap-y-10 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {statistics.items.map((item, index) => (
            <StatItem
              key={item.valueKey}
              label={t(`items.${item.valueKey}`)}
              end={AGENCY_CONFIG[item.valueKey]}
              suffix={item.suffix}
              isPlaceholder={item.isPlaceholder}
              index={index}
              startCounting={gridInView}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
