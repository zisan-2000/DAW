"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { ConsultationOnboarding } from "@/components/sections/consultation-onboarding";

export default function OnboardingPage() {
  const t = useTranslations("consultationOnboarding");

  const trustPoints = [
    { icon: Zap, label: t("hero.trust.fast") },
    { icon: ShieldCheck, label: t("hero.trust.confidential") },
    { icon: CheckCircle2, label: t("hero.trust.noObligation") },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
          <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute top-1/2 left-[-10%] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-bold text-foreground md:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Icon size={16} className="text-accent" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Wizard */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ConsultationOnboarding />
        </div>
      </section>
    </div>
  );
}
