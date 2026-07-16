"use client";

import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { HOMEPAGE } from "@/lib/content";
import { CanvasText } from "@/components/ui/canvas-text";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-amber-500",
  "bg-purple-500",
  "bg-pink-500",
];

function LogoMark({
  name,
  username,
  description,
  initials,
  colorIndex,
}: {
  name: string;
  username: string;
  description: string;
  initials: string;
  colorIndex: number;
}) {
  return (
    <figure
      className={cn(
        "relative w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-border/80 bg-card hover:bg-muted/40",
      )}
      title={`${name} (illustrative placeholder)`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,var(--accent)_100%)] opacity-20" />
      <div className="relative flex flex-row items-center gap-3">
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white",
            AVATAR_COLORS[colorIndex % AVATAR_COLORS.length],
          )}
        >
          {initials}
        </span>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium whitespace-nowrap text-foreground">
            {name}
          </figcaption>
          <p className="text-xs text-muted-foreground">{username}</p>
        </div>
      </div>
      <p className="relative mt-3 text-xs text-muted-foreground">
        {description}
      </p>
    </figure>
  );
}

export function LogoMarqueeSection() {
  const t = useTranslations("homepage.logoMarquee");
  const reduced = useReducedMotion() ?? false;
  const logos = HOMEPAGE.logoMarquee.logos;
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRow = logos.slice(Math.ceil(logos.length / 2));

  return (
    <Section
      id="trusted-by"
      tone="light"
      padding="tight"
      className="-mt-px border-0"
      aria-labelledby="trusted-heading"
    >
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2
            id="trusted-heading"
            className="font-display max-w-2xl text-2xl leading-tight font-semibold tracking-tight text-balance text-muted-foreground sm:text-3xl md:text-4xl"
          >
            {t("headingPrefix")}{" "}
            <CanvasText
              text={t("headingHighlight")}
              className="text-4xl font-semibold sm:text-3xl md:text-4xl"
              backgroundClassName="bg-accent"
              colors={["var(--color-accent)", "var(--color-foreground)"]}
              lineGap={4}
              animationDuration={12}
            />
          </h2>
        </div>
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-24" />

        {reduced ? (
          <Container>
            <ul className="flex flex-wrap justify-center gap-3">
              {logos.map((logo, index) => (
                <li key={logo.name}>
                  <LogoMark
                    name={logo.name}
                    username={logo.username}
                    description={logo.description}
                    initials={logo.initials}
                    colorIndex={index}
                  />
                </li>
              ))}
            </ul>
          </Container>
        ) : (
          <div className="flex flex-col gap-4">
            <Marquee pauseOnHover className="[--duration:32s] [--gap:1rem]">
              {firstRow.map((logo, index) => (
                <LogoMark
                  key={logo.name}
                  name={logo.name}
                  username={logo.username}
                  description={logo.description}
                  initials={logo.initials}
                  colorIndex={index}
                />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:32s] [--gap:1rem]"
            >
              {secondRow.map((logo, index) => (
                <LogoMark
                  key={logo.name}
                  name={logo.name}
                  username={logo.username}
                  description={logo.description}
                  initials={logo.initials}
                  colorIndex={index + firstRow.length}
                />
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </Section>
  );
}
