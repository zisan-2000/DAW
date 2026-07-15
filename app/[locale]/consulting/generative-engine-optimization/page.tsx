// app/[locale]/consulting/generative-engine-optimization/page.tsx
"use client";

import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Sparkles,
  Search,
  Bot,
  Network,
  ChevronRight,
  CheckCircle,
  FileText,
  Radar,
  Code2,
  Target,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function GenerativeEngineOptimizationPage() {
  const t = useTranslations("generativeEngineOptimization");
  const [citationScore, setCitationScore] = useState(0);
  const [activeEngine, setActiveEngine] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animate citation score counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const target = 87;
            const increment = target / 35;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCitationScore(target);
                clearInterval(timer);
              } else {
                setCitationScore(Math.floor(current));
              }
            }, 30);
            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate engines
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEngine((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const engines = [
    { icon: Bot, name: "ChatGPT" },
    { icon: Search, name: "Perplexity" },
    { icon: Sparkles, name: "Gemini" },
    { icon: Network, name: "Copilot" },
  ];

  const services = [
    {
      icon: FileText,
      title: t("services.contentStructuring.title"),
      description: t("services.contentStructuring.description"),
      stat: t("services.contentStructuring.stat"),
      statLabel: t("services.contentStructuring.statLabel"),
    },
    {
      icon: Network,
      title: t("services.entityOptimization.title"),
      description: t("services.entityOptimization.description"),
      stat: t("services.entityOptimization.stat"),
      statLabel: t("services.entityOptimization.statLabel"),
    },
    {
      icon: Radar,
      title: t("services.aiCitationTracking.title"),
      description: t("services.aiCitationTracking.description"),
      stat: t("services.aiCitationTracking.stat"),
      statLabel: t("services.aiCitationTracking.statLabel"),
    },
    {
      icon: Code2,
      title: t("services.schemaMarkup.title"),
      description: t("services.schemaMarkup.description"),
      stat: t("services.schemaMarkup.stat"),
      statLabel: t("services.schemaMarkup.statLabel"),
    },
    {
      icon: Target,
      title: t("services.answerEngineeringy.title"),
      description: t("services.answerEngineeringy.description"),
      stat: t("services.answerEngineeringy.stat"),
      statLabel: t("services.answerEngineeringy.statLabel"),
    },
    {
      icon: Layers,
      title: t("services.competitiveGapAnalysis.title"),
      description: t("services.competitiveGapAnalysis.description"),
      stat: t("services.competitiveGapAnalysis.stat"),
      statLabel: t("services.competitiveGapAnalysis.statLabel"),
    },
  ];

  const testimonials = [
    {
      quote: t("testimonials.founder.quote"),
      name: t("testimonials.founder.name"),
      role: t("testimonials.founder.role"),
      metric: t("testimonials.founder.metric"),
      metricLabel: t("testimonials.founder.metricLabel"),
    },
    {
      quote: t("testimonials.cmo.quote"),
      name: t("testimonials.cmo.name"),
      role: t("testimonials.cmo.role"),
      metric: t("testimonials.cmo.metric"),
      metricLabel: t("testimonials.cmo.metricLabel"),
    },
    {
      quote: t("testimonials.director.quote"),
      name: t("testimonials.director.name"),
      role: t("testimonials.director.role"),
      metric: t("testimonials.director.metric"),
      metricLabel: t("testimonials.director.metricLabel"),
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-8">
                <span className="flex size-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  {t("hero.status")}
                </span>
              </div>
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {t("hero.eyebrow")}
              </span>
              <h1 className="mt-4 font-['Playfair_Display'] text-5xl font-bold leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
                {t("hero.title")}
                <br />
                <span className="italic text-accent">
                  {t("hero.titleAccent")}
                </span>
              </h1>
              <p className="mt-8 text-lg font-light text-foreground/60 md:text-xl leading-relaxed max-w-xl">
                {t("hero.description")}
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href="#consultation"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground font-semibold rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25"
                >
                  <span className="absolute inset-0 bg-foreground/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative flex items-center gap-3">
                    {t("hero.cta")}{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
                <Link
                  href="#process"
                  className="inline-flex items-center gap-2 px-10 py-4 border border-border text-foreground font-medium rounded-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
            </div>

            {/* Right Column - Citation Score Display */}
            <div className="flex justify-center lg:justify-end">
              <div ref={sectionRef} className="relative w-full max-w-lg">
                <div className="relative rounded-3xl border border-border bg-foreground/[0.03] backdrop-blur-xl p-10">
                  {/* Citation Score Counter */}
                  <div className="text-center mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40 mb-4">
                      {t("hero.citationLabel")}
                    </p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-mono text-8xl font-bold text-foreground tabular-nums">
                        {citationScore}
                      </span>
                      <span className="font-mono text-3xl font-light text-accent">
                        %
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-foreground/60">
                      {t("hero.citationDescription")}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

                  {/* Live Engine Indicator */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40 mb-6 text-center">
                      {t("hero.engines")}
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {engines.map((engine, index) => {
                        const Icon = engine.icon;
                        return (
                          <div
                            key={index}
                            className={`text-center p-3 rounded-xl transition-all duration-500 cursor-pointer ${
                              activeEngine === index
                                ? "bg-accent/10 border border-accent/30"
                                : "border border-transparent hover:bg-foreground/5"
                            }`}
                            onClick={() => setActiveEngine(index)}
                          >
                            <Icon
                              size={20}
                              className={`mx-auto mb-2 transition-colors ${
                                activeEngine === index
                                  ? "text-accent"
                                  : "text-foreground/40"
                              }`}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                              {engine.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 h-16 w-16 rounded-full border border-accent/20 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles size={24} className="text-accent" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 h-12 w-12 rounded-full border border-accent/20 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                    <Radar size={18} className="text-accent" />
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 rounded-2xl border border-border bg-foreground/[0.05] backdrop-blur-md px-5 py-3 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
                      <Radar size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60">
                        {t("hero.monitoringLabel")}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        24/7
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl border border-border bg-foreground/[0.05] backdrop-blur-md px-5 py-3 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
                      <Search size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60">
                        {t("hero.coverageLabel")}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        10K+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-foreground/[0.01]">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/30">
              {t("trustBar.label")}
            </span>
            <div className="flex flex-wrap items-center gap-10">
              {["chatgpt", "perplexity", "gemini", "copilot", "claude"].map(
                (source) => (
                  <span
                    key={source}
                    className="text-sm font-medium text-foreground/30 transition hover:text-foreground/60"
                  >
                    {t(`trustBar.${source}`)}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20">
            <div className="flex items-end justify-between">
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
                  {t("services.eyebrow")}
                </span>
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-semibold leading-tight text-foreground">
                  {t("services.title")}
                </h2>
              </div>
              <Link
                href="#consultation"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors"
              >
                {t("common.viewAll")} <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-foreground/[0.02] border border-border p-8 hover:bg-foreground/[0.04] hover:border-accent/20 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-2xl font-bold text-accent">
                        {service.stat}
                      </span>
                      <span className="text-xs text-foreground/40">
                        {service.statLabel}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="#consultation"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/40 group-hover:text-accent transition-colors"
                  >
                    {t("common.learnMore")}
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process - Timeline Style */}
      <section
        id="process"
        className="py-24 md:py-32 bg-foreground/[0.01] border-y border-border"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("process.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-semibold leading-tight text-foreground">
              {t("process.title")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="relative flex gap-8 pb-12 last:pb-0">
                {index < 3 && (
                  <div className="absolute left-[27px] top-16 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent" />
                )}

                <div className="relative flex-shrink-0">
                  <div className="flex size-14 items-center justify-center rounded-full border-2 border-accent/30 bg-background font-mono text-lg font-bold text-accent">
                    {String(step).padStart(2, "0")}
                  </div>
                </div>

                <div className="pt-3">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-foreground">
                      {t(`process.step${step}.title`)}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-xs font-mono text-accent">
                      {t(`process.step${step}.time`)}
                    </span>
                  </div>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed max-w-lg">
                    {t(`process.step${step}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("testimonials.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-semibold leading-tight text-foreground">
              {t("testimonials.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-border bg-foreground/[0.02] p-8 hover:bg-foreground/[0.04] hover:border-accent/20 transition-all duration-500"
              >
                <div className="absolute top-6 right-8 text-8xl font-['Playfair_Display'] text-accent/10 leading-none select-none">
                  "
                </div>

                <div className="relative">
                  <div className="flex items-center gap-1 text-accent mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="size-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-sm font-light text-foreground/80 leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-foreground/40 mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-lg font-bold text-accent">
                        {testimonial.metric}
                      </span>
                      <span className="text-xs text-foreground/40">
                        {testimonial.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 border-y border-border bg-foreground/[0.01]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: t("stats.citationsTracked") },
              { value: "3.2x", label: t("stats.avgVisibilityLift") },
              { value: "8", label: t("stats.enginesCovered") },
              { value: "200+", label: t("stats.clientsOptimized") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block font-mono text-4xl md:text-5xl font-bold text-accent mb-3">
                  {stat.value}
                </span>
                <span className="text-sm text-foreground/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="relative rounded-3xl border border-accent/20 bg-gradient-to-br from-background via-accent/[0.02] to-background p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-6">
                  <span className="flex size-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {t("consultation.eyebrow")}
                  </span>
                </span>
                <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-semibold leading-tight text-foreground mb-6">
                  {t("consultation.title")}
                </h2>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-light">
                  {t("consultation.description")}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-12">
                {["immediate", "confidential", "expert"].map((item) => (
                  <div
                    key={item}
                    className="text-center p-6 rounded-2xl bg-foreground/[0.02] border border-border"
                  >
                    <CheckCircle
                      size={24}
                      className="mx-auto mb-3 text-accent"
                    />
                    <p className="text-sm font-medium text-foreground">
                      {t(`consultation.benefits.${item}`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="max-w-xl mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder={t("consultation.form.emailPlaceholder")}
                    className="flex-1 bg-foreground/5 border border-border rounded-xl px-6 py-4 text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none transition-colors"
                  />
                  <button className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
                    {t("consultation.form.submit")}
                  </button>
                </div>
                <p className="text-center text-xs text-foreground/40 mt-4">
                  {t("consultation.form.disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
