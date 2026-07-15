"use client";

// components/Footer.tsx
import { Mail, Phone, MapPin, Heart, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AGENCY_CONFIG, SERVICES } from "@/lib/content";
import { useState, useEffect } from "react";

export function Footer() {
  const t = useTranslations("footer");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: MapPin,
      url: AGENCY_CONFIG.socialLinks.facebook,
      label: "Facebook",
    },
    {
      icon: MapPin,
      url: AGENCY_CONFIG.socialLinks.linkedin,
      label: "LinkedIn",
    },
    {
      icon: MapPin,
      url: AGENCY_CONFIG.socialLinks.instagram,
      label: "Instagram",
    },
    { icon: MapPin, url: AGENCY_CONFIG.socialLinks.youtube, label: "YouTube" },
  ];

  return (
    <footer className="relative bg-surface-ink border-t border-white/5">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column - Spans 2 cols on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent font-mono text-lg font-bold text-accent-foreground">
                {AGENCY_CONFIG.shortName.replace(/[\[\]]/g, "").charAt(0) ||
                  "A"}
              </div>
              <div>
                <span className="font-['Playfair_Display'] text-xl font-semibold text-surface-ink-foreground">
                  {AGENCY_CONFIG.shortName}
                </span>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mt-0.5">
                  {AGENCY_CONFIG.name}
                </p>
              </div>
            </div>
            <p className="text-sm font-light text-surface-ink-foreground/60 leading-relaxed mb-8 max-w-sm">
              {AGENCY_CONFIG.tagline}
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8 max-w-sm">
              <label className="block text-xs font-medium uppercase tracking-wider text-surface-ink-foreground/60 mb-3">
                {t("newsletter.label")}
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-sm text-surface-ink-foreground placeholder:text-surface-ink-foreground/40 focus:border-accent focus:outline-none transition-colors"
                />
                <button className="px-4 py-2.5 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:bg-transparent hover:text-accent border border-accent transition-all duration-300">
                  {t("newsletter.subscribe")}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(
                (social) =>
                  social.url && (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-full border border-white/10 text-surface-ink-foreground/60 hover:text-accent hover:border-accent transition-all duration-300"
                    >
                      <social.icon size={16} />
                    </a>
                  ),
              )}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-surface-ink-foreground mb-6">
              {t("servicesHeading")}
            </h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-2 text-sm font-light text-surface-ink-foreground/60 hover:text-accent transition-colors"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-3" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-surface-ink-foreground mb-6">
              {t("companyHeading")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", key: "about" },
                { href: "/case-studies", key: "caseStudies" },
                { href: "/blog", key: "blog" },
                { href: "/contact", key: "contact" },
                { href: "/careers", key: "careers" },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-light text-surface-ink-foreground/60 hover:text-accent transition-colors"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-3" />
                    {t(`companyLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-surface-ink-foreground mb-6">
              {t("contactHeading")}
            </h3>
            <ul className="space-y-4">
              {AGENCY_CONFIG.email !== "[contact@agency.com]" && (
                <li>
                  <a
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="group flex items-start gap-3 text-sm font-light text-surface-ink-foreground/60 hover:text-accent transition-colors"
                  >
                    <Mail
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-surface-ink-foreground/40 group-hover:text-accent transition-colors"
                    />
                    <span>{AGENCY_CONFIG.email}</span>
                  </a>
                </li>
              )}
              {AGENCY_CONFIG.phone !== "[+1 (XXX) XXX-XXXX]" && (
                <li>
                  <a
                    href={`tel:${AGENCY_CONFIG.phone}`}
                    className="group flex items-start gap-3 text-sm font-light text-surface-ink-foreground/60 hover:text-accent transition-colors"
                  >
                    <Phone
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-surface-ink-foreground/40 group-hover:text-accent transition-colors"
                    />
                    <span>{AGENCY_CONFIG.phone}</span>
                  </a>
                </li>
              )}
              {AGENCY_CONFIG.address !==
                "[Your Office Address, City, Country]" && (
                <li className="group flex items-start gap-3 text-sm font-light text-surface-ink-foreground/60">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-surface-ink-foreground/40"
                  />
                  <span>{AGENCY_CONFIG.address}</span>
                </li>
              )}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-accent border border-accent/30 rounded-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  {t("getInTouch")} <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-surface-ink-foreground/40">
            © {new Date().getFullYear()} {AGENCY_CONFIG.name}.{" "}
            {t("rightsReserved")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs font-light text-surface-ink-foreground/40 hover:text-accent transition-colors"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/terms"
              className="text-xs font-light text-surface-ink-foreground/40 hover:text-accent transition-colors"
            >
              {t("termsOfService")}
            </Link>
            <Link
              href="/cookies"
              className="text-xs font-light text-surface-ink-foreground/40 hover:text-accent transition-colors"
            >
              {t("cookiePolicy")}
            </Link>
          </div>
          <p className="flex items-center gap-1.5 text-xs font-light text-surface-ink-foreground/40">
            {t("madeWith")}{" "}
            <Heart size={12} className="text-accent fill-accent" />{" "}
            {AGENCY_CONFIG.shortName}
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-all duration-300"
          aria-label={t("backToTop")}
        >
          <ArrowUpRight size={20} className="rotate-45" />
        </button>
      )}
    </footer>
  );
}
