// app/[locale]/consulting/branding/page.tsx
"use client";

import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Palette,
  Eye,
  Target,
  Zap,
  Diamond,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Gem,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function BrandingPage() {
  const t = useTranslations("branding");
  const [brandValue, setBrandValue] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animate brand value counter on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const target = 340;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setBrandValue(target);
                clearInterval(timer);
              } else {
                setBrandValue(Math.floor(current));
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

  const services = [
    {
      icon: Palette,
      title: t("services.brandStrategy.title"),
      description: t("services.brandStrategy.description"),
    },
    {
      icon: Eye,
      title: t("services.visualIdentity.title"),
      description: t("services.visualIdentity.description"),
    },
    {
      icon: Target,
      title: t("services.brandPositioning.title"),
      description: t("services.brandPositioning.description"),
    },
    {
      icon: Zap,
      title: t("services.brandMessaging.title"),
      description: t("services.brandMessaging.description"),
    },
    {
      icon: Layers,
      title: t("services.brandGuidelines.title"),
      description: t("services.brandGuidelines.description"),
    },
    {
      icon: Gem,
      title: t("services.rebranding.title"),
      description: t("services.rebranding.description"),
    },
  ];

  const brandElements = [
    {
      icon: Palette,
      element: t("elements.color"),
      description: t("elements.colorDesc"),
    },
    {
      icon: Sparkles,
      element: t("elements.logo"),
      description: t("elements.logoDesc"),
    },
    {
      icon: Diamond,
      element: t("elements.typography"),
      description: t("elements.typographyDesc"),
    },
  ];

  const testimonials = [
    {
      quote: t("testimonials.founder.quote"),
      name: t("testimonials.founder.name"),
      role: t("testimonials.founder.role"),
    },
    {
      quote: t("testimonials.ceo.quote"),
      name: t("testimonials.ceo.name"),
      role: t("testimonials.ceo.role"),
    },
    {
      quote: t("testimonials.director.quote"),
      name: t("testimonials.director.name"),
      role: t("testimonials.director.role"),
    },
  ];

  return (
    <main className="min-h-screen bg-surface-ink text-surface-ink-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
          {/* Decorative brand shapes */}
          <div className="absolute top-32 right-[20%] text-accent/10">
            <Diamond size={100} />
          </div>
          <div className="absolute bottom-32 left-[15%] text-accent/10">
            <Sparkles size={80} />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div>
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {t("hero.eyebrow")}
              </span>
              <h1 className="mt-4 font-['Playfair_Display'] text-4xl font-bold leading-[1.05] text-surface-ink-foreground md:text-6xl lg:text-7xl">
                {t("hero.title")}{" "}
                <span className="italic text-accent">
                  {t("hero.titleAccent")}
                </span>
              </h1>
              <p className="mt-6 text-lg font-light text-surface-ink-foreground/60 md:text-xl">
                {t("hero.description")}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#consultation"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-medium rounded-sm hover:bg-transparent hover:text-accent border border-accent transition-all duration-300"
                >
                  {t("hero.cta")} <ArrowRight size={18} />
                </Link>
                <Link
                  href="#process"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-surface-ink-foreground font-medium rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div>
                  <span className="font-mono text-2xl font-semibold text-accent">
                    15+
                  </span>
                  <span className="ml-2 text-sm text-surface-ink-foreground/60">
                    {t("hero.years")}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-semibold text-accent">
                    500+
                  </span>
                  <span className="ml-2 text-sm text-surface-ink-foreground/60">
                    {t("hero.brands")}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-sm text-surface-ink-foreground/60">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Brand Value Visualization */}
            <div className="relative flex items-center justify-center">
              <div
                ref={sectionRef}
                className="relative aspect-square w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                {/* Animated gradient rings */}
                <svg className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient
                      id="brandGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        className="text-accent"
                        stopColor="currentColor"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        className="text-accent"
                        stopColor="currentColor"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    className="text-white/5"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="42%"
                    cx="50%"
                    cy="50%"
                  />
                  <circle
                    className="text-white/10"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="transparent"
                    r="38%"
                    cx="50%"
                    cy="50%"
                  />
                  <circle
                    className="text-accent/30"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="transparent"
                    r="48%"
                    cx="50%"
                    cy="50%"
                    strokeDasharray="4 8"
                  />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Diamond size={36} className="text-accent mb-4" />
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-6xl font-bold text-surface-ink-foreground">
                      {brandValue}
                    </span>
                    <span className="font-mono text-2xl font-semibold text-accent">
                      %
                    </span>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wider text-accent mt-2">
                    {t("hero.valueLabel")}
                  </span>
                  <p className="mt-2 text-center text-xs text-surface-ink-foreground/60">
                    {t("hero.valueDescription")}
                  </p>
                </div>

                {/* Floating gems */}
                <div className="absolute top-6 right-8 text-accent/20 animate-pulse">
                  <Gem size={20} />
                </div>
                <div className="absolute bottom-8 left-6 text-accent/20 animate-pulse delay-200">
                  <Gem size={16} />
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full border-2 border-accent/30 bg-surface-ink" />
                <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full border-2 border-accent/30 bg-surface-ink" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/5 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <span className="text-sm font-medium uppercase tracking-wider text-surface-ink-foreground/60">
              {t("trustBar.label")}
            </span>
            {["brandingMagazine", "designWeek", "creativeReview", "aiga"].map(
              (source) => (
                <span
                  key={source}
                  className="font-['Playfair_Display'] text-xl font-semibold text-surface-ink-foreground/60 transition hover:text-surface-ink-foreground/90"
                >
                  {t(`trustBar.${source}`)}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("services.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-surface-ink-foreground">
              {t("services.title")}
            </h2>
            <p className="mt-4 text-lg text-surface-ink-foreground/60 max-w-lg mx-auto font-light">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-accent/30 hover:bg-white/[0.05]"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon size={28} className="text-accent" />
                  <h3 className="mt-4 font-['Playfair_Display'] text-xl font-semibold text-surface-ink-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-surface-ink-foreground/60">
                    {service.description}
                  </p>
                  <Link
                    href="#consultation"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-surface-ink-foreground"
                  >
                    {t("common.learnMore")} <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Elements Section */}
      <section className="border-t border-white/5 py-20 md:py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("elements.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-surface-ink-foreground">
              {t("elements.title")}
            </h2>
            <p className="mt-4 text-lg text-surface-ink-foreground/60 max-w-lg mx-auto font-light">
              {t("elements.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {brandElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-white/5 bg-surface-ink/50 p-8 backdrop-blur-sm transition-all hover:border-accent/30"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10">
                    <Icon size={32} className="text-accent mb-4" />
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-surface-ink-foreground mb-3">
                      {element.element}
                    </h3>
                    <p className="text-sm font-light text-surface-ink-foreground/60 leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("process.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-surface-ink-foreground">
              {t("process.title")}
            </h2>
            <p className="mt-4 text-lg text-surface-ink-foreground/60 max-w-lg mx-auto font-light">
              {t("process.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/30 font-mono text-xl font-semibold text-accent mb-4">
                    {String(step).padStart(2, "0")}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-surface-ink-foreground">
                    {t(`process.step${step}.title`)}
                  </h3>
                  <p className="mt-3 text-sm font-light text-surface-ink-foreground/60">
                    {t(`process.step${step}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/[0.02] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("testimonials.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-surface-ink-foreground">
              {t("testimonials.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/5 bg-surface-ink/50 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm font-light leading-relaxed text-surface-ink-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-surface-ink-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-surface-ink-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("portfolio.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-surface-ink-foreground">
              {t("portfolio.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-lg border border-white/5 aspect-[4/3] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-surface-ink flex items-center justify-center">
                  <Diamond
                    size={48}
                    className="text-accent/40 group-hover:text-accent/60 transition-colors"
                  />
                </div>
                <div className="absolute inset-0 bg-surface-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-surface-ink-foreground mb-2">
                      {t(`portfolio.item${item}.title`)}
                    </h3>
                    <p className="text-xs text-surface-ink-foreground/60 mb-4">
                      {t(`portfolio.item${item}.category`)}
                    </p>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-surface-ink-foreground transition-colors"
                    >
                      {t("common.viewCaseStudy")} <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-surface-ink via-accent/5 to-surface-ink p-8 md:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute top-10 right-10 text-accent/10">
              <Gem size={80} />
            </div>

            <div className="relative grid gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
                  {t("consultation.eyebrow")}
                </span>
                <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-surface-ink-foreground">
                  {t("consultation.title")}
                </h2>
                <p className="mt-4 text-surface-ink-foreground/60">
                  {t("consultation.description")}
                </p>
                <ul className="mt-6 space-y-2">
                  {["audit", "strategy", "roadmap"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-surface-ink-foreground"
                    >
                      <CheckCircle size={16} className="text-accent" />
                      {t(`consultation.benefits.${item}`)}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-accent text-accent-foreground font-medium rounded-sm hover:bg-transparent hover:text-accent border border-accent transition-all duration-300"
                >
                  {t("consultation.cta")} <ArrowRight size={18} />
                </Link>
              </div>

              <div className="flex flex-col justify-center rounded-lg bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-surface-ink-foreground/60">
                      {t("consultation.form.name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("consultation.form.namePlaceholder")}
                      className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-surface-ink-foreground placeholder:text-surface-ink-foreground/40 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-surface-ink-foreground/60">
                      {t("consultation.form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("consultation.form.emailPlaceholder")}
                      className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-surface-ink-foreground placeholder:text-surface-ink-foreground/40 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-surface-ink-foreground/60">
                      {t("consultation.form.company")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("consultation.form.companyPlaceholder")}
                      className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-surface-ink-foreground placeholder:text-surface-ink-foreground/40 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-medium rounded-sm hover:bg-transparent hover:text-accent border border-accent transition-all duration-300">
                    {t("consultation.form.submit")}
                  </button>
                  <p className="text-center text-xs text-surface-ink-foreground/60">
                    {t("consultation.form.disclaimer")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
