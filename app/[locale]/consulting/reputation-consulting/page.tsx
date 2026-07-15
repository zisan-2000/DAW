// app/[locale]/consulting/reputation-consulting/page.tsx
"use client";

import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Shield,
  Star,
  Users,
  Clock,
  Award,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ReputationConsultingPage() {
  const t = useTranslations("reputationConsulting");
  const [score, setScore] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animate reputation score on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const target = 86;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setScore(target);
                clearInterval(timer);
              } else {
                setScore(Math.floor(current));
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
      icon: Shield,
      title: t("services.contentRemoval.title"),
      description: t("services.contentRemoval.description"),
    },
    {
      icon: Star,
      title: t("services.searchSuppression.title"),
      description: t("services.searchSuppression.description"),
    },
    {
      icon: Users,
      title: t("services.crisisManagement.title"),
      description: t("services.crisisManagement.description"),
    },
    {
      icon: Clock,
      title: t("services.monitoring.title"),
      description: t("services.monitoring.description"),
    },
    {
      icon: Award,
      title: t("services.brandBuilding.title"),
      description: t("services.brandBuilding.description"),
    },
    {
      icon: CheckCircle,
      title: t("services.privacyProtection.title"),
      description: t("services.privacyProtection.description"),
    },
  ];

  const testimonials = [
    {
      quote: t("testimonials.executive.quote"),
      name: t("testimonials.executive.name"),
      role: t("testimonials.executive.role"),
    },
    {
      quote: t("testimonials.entrepreneur.quote"),
      name: t("testimonials.entrepreneur.name"),
      role: t("testimonials.entrepreneur.role"),
    },
    {
      quote: t("testimonials.publicFigure.quote"),
      name: t("testimonials.publicFigure.name"),
      role: t("testimonials.publicFigure.role"),
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div>
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {t("hero.eyebrow")}
              </span>
              <h1 className="mt-4 font-['Playfair_Display'] text-4xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
                {t("hero.title")}{" "}
                <span className="italic text-accent">
                  {t("hero.titleAccent")}
                </span>
              </h1>
              <p className="mt-6 text-lg font-light text-foreground/60 md:text-xl">
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
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-medium rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div>
                  <span className="font-mono text-2xl font-semibold text-accent">
                    20+
                  </span>
                  <span className="ml-2 text-sm text-foreground/60">
                    {t("hero.years")}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-semibold text-accent">
                    10k+
                  </span>
                  <span className="ml-2 text-sm text-foreground/60">
                    {t("hero.clients")}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-sm text-foreground/60">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Reputation Score Visualization */}
            <div className="relative flex items-center justify-center">
              <div
                ref={sectionRef}
                className="relative aspect-square w-full max-w-md rounded-2xl border border-border bg-foreground/5 p-8 backdrop-blur-sm"
              >
                {/* Animated ring */}
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle
                    className="text-foreground/10"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="45%"
                    cx="50%"
                    cy="50%"
                  />
                  <circle
                    className="text-accent transition-all duration-1000 ease-out"
                    strokeWidth="6"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45%"
                    cx="50%"
                    cy="50%"
                    strokeDasharray={`${score * 2.83} 283`}
                    strokeDashoffset="0"
                  />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-6xl font-bold text-foreground">
                    {score}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider text-accent">
                    {t("hero.scoreLabel")}
                  </span>
                  <p className="mt-2 text-center text-xs text-foreground/60">
                    {t("hero.scoreDescription")}
                  </p>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full border-2 border-accent/30 bg-background" />
                <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full border-2 border-accent/30 bg-background" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <span className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              {t("trustBar.label")}
            </span>
            {["newsweek", "forbes", "entrepreneur", "inc"].map((source) => (
              <span
                key={source}
                className="font-['Playfair_Display'] text-xl font-semibold text-foreground/60 transition hover:text-foreground/90"
              >
                {t(`trustBar.${source}`)}
              </span>
            ))}
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
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              {t("services.title")}
            </h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-lg mx-auto font-light">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-border bg-foreground/[0.02] p-8 transition-all hover:border-accent/30 hover:bg-foreground/[0.05]"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon size={28} className="text-accent" />
                  <h3 className="mt-4 font-['Playfair_Display'] text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-foreground/60">
                    {service.description}
                  </p>
                  <Link
                    href="#consultation"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-foreground"
                  >
                    {t("common.learnMore")} <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="border-t border-border py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("process.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              {t("process.title")}
            </h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-lg mx-auto font-light">
              {t("process.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 font-mono text-lg font-semibold text-accent">
                    {String(step).padStart(2, "0")}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground">
                    {t(`process.step${step}.title`)}
                  </h3>
                </div>
                <p className="mt-4 pl-16 text-sm font-light text-foreground/60">
                  {t(`process.step${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-foreground/[0.02] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t("testimonials.eyebrow")}
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              {t("testimonials.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-background/50 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm font-light leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-background via-accent/5 to-background p-8 md:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
                  {t("consultation.eyebrow")}
                </span>
                <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                  {t("consultation.title")}
                </h2>
                <p className="mt-4 text-foreground/60">
                  {t("consultation.description")}
                </p>
                <ul className="mt-6 space-y-2">
                  {["confidential", "expert", "tailored"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground"
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

              <div className="flex flex-col justify-center rounded-lg bg-foreground/5 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground/60">
                      {t("consultation.form.name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("consultation.form.namePlaceholder")}
                      className="mt-1 w-full border-b border-border bg-transparent py-2 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground/60">
                      {t("consultation.form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("consultation.form.emailPlaceholder")}
                      className="mt-1 w-full border-b border-border bg-transparent py-2 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground/60">
                      {t("consultation.form.message")}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t("consultation.form.messagePlaceholder")}
                      className="mt-1 w-full border-b border-border bg-transparent py-2 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-medium rounded-sm hover:bg-transparent hover:text-accent border border-accent transition-all duration-300">
                    {t("consultation.form.submit")}
                  </button>
                  <p className="text-center text-xs text-foreground/60">
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
