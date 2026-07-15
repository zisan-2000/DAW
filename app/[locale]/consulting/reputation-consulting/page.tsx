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
  const [isHovering, setIsHovering] = useState(false);
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
    <main className="min-h-screen bg-navy text-sand">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div>
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                {t("hero.eyebrow")}
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
                {t("hero.title")}{" "}
                <span className="italic text-gold">
                  {t("hero.titleAccent")}
                </span>
              </h1>
              <p className="mt-6 text-lg font-light text-slate md:text-xl">
                {t("hero.description")}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="#consultation" className="btn btn-primary">
                  {t("hero.cta")} <ArrowRight size={18} />
                </Link>
                <Link href="#process" className="btn btn-outline">
                  {t("hero.secondaryCta")}
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div>
                  <span className="font-mono text-2xl font-semibold text-gold">
                    20+
                  </span>
                  <span className="ml-2 text-sm text-slate">
                    {t("hero.years")}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-semibold text-gold">
                    10k+
                  </span>
                  <span className="ml-2 text-sm text-slate">
                    {t("hero.clients")}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-sm text-slate">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right Column - Reputation Score Visualization */}
            <div className="relative flex items-center justify-center">
              <div
                ref={sectionRef}
                className="relative aspect-square w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Animated ring */}
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle
                    className="text-white/10"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="45%"
                    cx="50%"
                    cy="50%"
                  />
                  <circle
                    className="text-gold transition-all duration-1000 ease-out"
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
                  <span className="font-mono text-6xl font-bold text-white">
                    {score}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider text-gold">
                    {t("hero.scoreLabel")}
                  </span>
                  <p className="mt-2 text-center text-xs text-slate">
                    {t("hero.scoreDescription")}
                  </p>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full border-2 border-gold/30 bg-navy" />
                <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full border-2 border-gold/30 bg-navy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/5 py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <span className="text-sm font-medium uppercase tracking-wider text-slate">
              {t("trustBar.label")}
            </span>
            {["newsweek", "forbes", "entrepreneur", "inc"].map((source) => (
              <span
                key={source}
                className="font-display text-xl font-semibold text-white/60 transition hover:text-white/90"
              >
                {t(`trustBar.${source}`)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="section-eyebrow">{t("services.eyebrow")}</span>
            <h2 className="section-title">{t("services.title")}</h2>
            <p className="section-subtitle mx-auto">{t("services.subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-gold/30 hover:bg-white/[0.05]"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon size={28} className="text-gold" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-slate">
                    {service.description}
                  </p>
                  <Link
                    href="#consultation"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-white"
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
      <section id="process" className="border-t border-white/5 py-20 md:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="section-eyebrow">{t("process.eyebrow")}</span>
            <h2 className="section-title">{t("process.title")}</h2>
            <p className="section-subtitle mx-auto">{t("process.subtitle")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 font-mono text-lg font-semibold text-gold">
                    {String(step).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {t(`process.step${step}.title`)}
                  </h3>
                </div>
                <p className="mt-4 pl-16 text-sm font-light text-slate">
                  {t(`process.step${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/[0.02] py-20 md:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="section-eyebrow">{t("testimonials.eyebrow")}</span>
            <h2 className="section-title">{t("testimonials.title")}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/5 bg-navy/50 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm font-light leading-relaxed text-sand">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-20 md:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-navy via-gold/5 to-navy p-8 md:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <span className="section-eyebrow">
                  {t("consultation.eyebrow")}
                </span>
                <h2 className="section-title">{t("consultation.title")}</h2>
                <p className="mt-4 text-slate">
                  {t("consultation.description")}
                </p>
                <ul className="mt-6 space-y-2">
                  {["confidential", "expert", "tailored"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-sand"
                    >
                      <CheckCircle size={16} className="text-gold" />
                      {t(`consultation.benefits.${item}`)}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary mt-8">
                  {t("consultation.cta")} <ArrowRight size={18} />
                </Link>
              </div>

              <div className="flex flex-col justify-center rounded-lg bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate">
                      {t("consultation.form.name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("consultation.form.namePlaceholder")}
                      className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate">
                      {t("consultation.form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("consultation.form.emailPlaceholder")}
                      className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate">
                      {t("consultation.form.message")}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t("consultation.form.messagePlaceholder")}
                      className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-white placeholder:text-slate/50 focus:border-gold focus:outline-none resize-none"
                    />
                  </div>
                  <button className="btn btn-primary w-full justify-center">
                    {t("consultation.form.submit")}
                  </button>
                  <p className="text-center text-xs text-slate">
                    {t("consultation.form.disclaimer")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.2rem;
          border: 1px solid transparent;
          border-radius: 2px;
          font-family: var(--font-body, "Inter", sans-serif);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: none;
          color: var(--white, #ffffff);
        }

        .btn-primary {
          background: var(--gold, #c9a96e);
          color: var(--navy, #121a2f);
          border-color: var(--gold, #c9a96e);
        }

        .btn-primary:hover {
          background: transparent;
          color: var(--gold, #c9a96e);
        }

        .btn-outline {
          border-color: rgba(255, 255, 255, 0.15);
          color: var(--white, #ffffff);
        }

        .btn-outline:hover {
          border-color: var(--gold, #c9a96e);
          color: var(--gold, #c9a96e);
        }

        .section-eyebrow {
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold, #c9a96e);
          margin-bottom: 1rem;
          display: inline-block;
        }

        .section-title {
          font-family: var(--font-display, "Playfair Display", serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--white, #ffffff);
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--slate, #6b7b8d);
          max-width: 560px;
          font-weight: 300;
        }
      `}</style>
    </main>
  );
}
