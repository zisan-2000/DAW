import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { LiquidGradientButton } from "@/components/ui/GitHubButton";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <section className="relative flex min-h-[min(85vh,720px)] items-center justify-center overflow-hidden px-4 py-20 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-105 w-170 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {t("eyebrow")}
        </p>

        <p
          aria-hidden="true"
          className="font-display mt-4 bg-linear-to-b from-foreground via-foreground/80 to-foreground/20 bg-clip-text text-[7rem] font-bold leading-none tracking-tight text-transparent sm:text-[9rem]"
        >
          404
        </p>

        <h1 className="font-display mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-balance text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            <LiquidGradientButton className="h-12 w-full px-6 text-[15px] font-bold sm:w-auto">
              {t("backToHome")}
            </LiquidGradientButton>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            {t("contactUs")}
            <ArrowRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
