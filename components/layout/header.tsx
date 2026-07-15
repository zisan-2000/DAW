"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { AGENCY_CONFIG } from "@/lib/content";
import { productNavSections } from "@/lib/products/nav";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";

type MenuItem = {
  label: string;
  href: string;
};

type MenuSection = {
  id: string;
  label: string;
  basePath: string;
  items: MenuItem[];
};

type NavigationItem = {
  id: string;
  label: string;
  href?: string;
  items?: MenuItem[];
};

const productSections: MenuSection[] = productNavSections;

const navLinkClass =
  "inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4";

const navLinkActiveClass = "text-accent";

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isActiveGroup(pathname: string, items: MenuItem[] = []) {
  return items.some((item) => isActivePath(pathname, item.href));
}

function ProductsDesktopDropdown() {
  const t = useTranslations("header");
  const pathname = usePathname();
  const active = isActiveGroup(
    pathname,
    productSections.flatMap((section) => [
      { label: section.label, href: section.basePath },
      ...section.items,
    ]),
  );

  return (
    <div className="group relative">
      <button
        type="button"
        className={`${navLinkClass} ${active ? navLinkActiveClass : ""}`}
        aria-haspopup="true"
      >
        {t("products")}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>

      <div
        className="
          invisible absolute left-1/2 top-full z-50
          w-[min(1050px,calc(100vw-48px))]
          -translate-x-1/2 translate-y-3 pt-5 opacity-0
          transition-all duration-200
          group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
          group-focus-within:visible group-focus-within:translate-y-0
          group-focus-within:opacity-100
        "
      >
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-black/10">
          <div className="border-b border-border/70 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t("productsEyebrow")}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {t("productsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-0 p-3 lg:grid-cols-5">
            {productSections.map((section) => {
              const sectionActive = isActivePath(pathname, section.basePath);

              return (
                <div
                  key={section.id}
                  className="rounded-xl p-3 transition-colors hover:bg-muted/60"
                >
                  <Link
                    href={section.basePath}
                    className={`group/title flex min-h-12 items-start justify-between gap-2 text-sm font-semibold leading-5 transition-colors hover:text-accent ${
                      sectionActive ? "text-accent" : "text-foreground"
                    }`}
                  >
                    <span>{section.label}</span>

                    <ArrowRight
                      size={15}
                      className="mt-0.5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover/title:translate-x-0 group-hover/title:opacity-100"
                    />
                  </Link>

                  <div className="mt-3 space-y-1 border-t border-border/70 pt-3">
                    {section.items.map((item) => {
                      const itemActive = isActivePath(pathname, item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block rounded-lg px-2 py-2 text-xs font-medium leading-4 transition-colors hover:bg-background hover:text-accent ${
                            itemActive ? "text-accent" : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopDropdown({ item }: { item: NavigationItem }) {
  const pathname = usePathname();
  const active = isActiveGroup(pathname, item.items);

  return (
    <div className="group relative">
      <button
        type="button"
        className={`${navLinkClass} ${active ? navLinkActiveClass : ""}`}
        aria-haspopup="true"
      >
        {item.label}

        <ChevronDown
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>

      <div
        className="
          invisible absolute left-1/2 top-full z-50
          w-[320px] -translate-x-1/2 translate-y-3
          pt-5 opacity-0 transition-all duration-200
          group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
          group-focus-within:visible group-focus-within:translate-y-0
          group-focus-within:opacity-100
        "
      >
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 text-card-foreground shadow-2xl shadow-black/10 dark:shadow-black/40">
          <div className="border-b border-border/70 px-3 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {item.label}
            </p>
          </div>

          <div className="max-h-[420px] overflow-y-auto py-2">
            {item.items?.map((subItem) => {
              const itemActive = isActivePath(pathname, subItem.href);

              return (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={`group/link flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    itemActive ? "text-accent" : "text-foreground"
                  }`}
                >
                  <span>{subItem.label}</span>

                  <ArrowRight
                    size={15}
                    className="translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const t = useTranslations("header");
  const tNav = useTranslations("nav");
  const pathname = usePathname();

  const serviceItems: MenuItem[] = [
    { label: t("services.fixMySearchResults"), href: "/services/fix-my-search-results" },
    {
      label: t("services.personalReputationManagement"),
      href: "/services/personal-reputation-management",
    },
    {
      label: t("services.businessReputationManagement"),
      href: "/services/business-reputation-management",
    },
    {
      label: t("services.aiReputationManagement"),
      href: "/services/ai-reputation-management",
    },
    { label: t("services.executiveBranding"), href: "/services/executive-branding" },
    { label: t("services.reviewManagement"), href: "/services/review-management" },
    { label: t("services.redditRemoval"), href: "/services/reddit-removal" },
    { label: t("services.wikipedia"), href: "/services/wikipedia" },
    { label: t("services.googleMapsSeo"), href: "/services/google-maps-seo" },
    {
      label: t("services.earnedMediaMarketing"),
      href: "/services/earned-media-marketing",
    },
    {
      label: t("services.expertWitnessServices"),
      href: "/services/expert-witness-services",
    },
  ];

  const consultingItems: MenuItem[] = [
    { label: t("consulting.reputationConsulting"), href: "/consulting/reputation-consulting" },
    {
      label: t("consulting.contentIdeaGeneration"),
      href: "/consulting/content-idea-generation",
    },
    { label: t("consulting.branding"), href: "/consulting/branding" },
    { label: t("consulting.crisisManagement"), href: "/consulting/crisis-management" },
    {
      label: t("consulting.generativeEngineOptimization"),
      href: "/consulting/generative-engine-optimization",
    },
    { label: t("consulting.publicRelations"), href: "/consulting/public-relations" },
  ];

  const aboutItems: MenuItem[] = [
    { label: t("about.ourStory"), href: "/about/our-story" },
    { label: t("about.yourOnlineReputation"), href: "/about/your-online-reputation" },
    { label: t("about.whyUs"), href: "/about/why-us" },
    { label: t("about.caseStudies"), href: "/about/case-studies" },
    { label: t("about.concern"), href: "/about/concern" },
    { label: t("about.faq"), href: "/about/faq" },
    { label: t("about.resources"), href: "/resources" },
  ];

  const navigationItems: NavigationItem[] = [
    { id: "services", label: t("services.label"), items: serviceItems },
    { id: "consulting", label: t("consulting.label"), items: consultingItems },
    { id: "about", label: t("about.label"), items: aboutItems },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const [activeProductSection, setActiveProductSection] = useState<
    string | null
  >(null);

  const reduced = useReducedMotion() ?? false;

  const phoneNumber = AGENCY_CONFIG.phone || "+1 (800) 555-0199";

  const phoneHref = `tel:${phoneNumber.replace(/[^+\d]/g, "")}`;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
    setActiveProductSection(null);
  };

  const toggleMobileSubmenu = (id: string) => {
    setActiveSubmenu((current) => (current === id ? null : id));
  };

  const toggleProductSection = (id: string) => {
    setActiveProductSection((current) => (current === id ? null : id));
  };

  const isHomeActive = pathname === "/";
  const isBlogActive = isActivePath(pathname, "/blog");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display flex shrink-0 items-center gap-2.5 text-lg font-semibold text-foreground transition-colors hover:text-accent"
          aria-label={`${AGENCY_CONFIG.shortName} home`}
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-sm font-bold text-accent-foreground shadow-sm">
            {AGENCY_CONFIG.shortName.replace(/[\[\]]/g, "").charAt(0) || "A"}
          </div>

          <span className="hidden 2xl:inline">{AGENCY_CONFIG.shortName}</span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-7"
          aria-label={tNav("primaryNavigation")}
        >
          <ProductsDesktopDropdown />

          {navigationItems.map((item) => (
            <DesktopDropdown key={item.id} item={item} />
          ))}

          <Link
            href="/blog"
            className={`${navLinkClass} ${isBlogActive ? navLinkActiveClass : ""}`}
          >
            {t("blog")}
          </Link>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <ThemeToggle />

          <LanguageSwitcher />

          <Link href="/contact?type=consultation">
            <Button className="h-10 whitespace-nowrap rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90">
              {t("freeConsultation")}
            </Button>
          </Link>

          <a
            href={phoneHref}
            className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            aria-label={tNav("callPhone", { phone: phoneNumber })}
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-accent/10">
              <Phone size={16} aria-hidden="true" />
            </span>

            <span className="hidden 2xl:inline">{phoneNumber}</span>
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />

          <LanguageSwitcher />

          <a
            href={phoneHref}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label={tNav("callPhone", { phone: phoneNumber })}
          >
            <Phone size={18} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-accent hover:bg-muted hover:text-accent"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? tNav("closeMenu") : tNav("openMenu")}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={
              reduced
                ? undefined
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <nav
              className="mx-auto max-h-[calc(100vh-5rem)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6"
              aria-label={tNav("mobileNavigation")}
            >
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`flex min-h-12 items-center rounded-xl px-3 font-medium transition-colors hover:bg-muted hover:text-accent ${
                  isHomeActive ? "text-accent" : "text-foreground"
                }`}
              >
                {t("home")}
              </Link>

              <div className="mt-1 overflow-hidden rounded-xl border border-transparent">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("products")}
                  className="flex min-h-12 w-full items-center justify-between gap-4 rounded-xl px-3 text-left font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
                  aria-expanded={activeSubmenu === "products"}
                  aria-controls="products-mobile-submenu"
                >
                  <span>{t("products")}</span>

                  <ChevronDown
                    size={17}
                    className={`shrink-0 transition-transform duration-200 ${
                      activeSubmenu === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeSubmenu === "products" && (
                    <motion.div
                      id="products-mobile-submenu"
                      initial={
                        reduced
                          ? false
                          : {
                              opacity: 0,
                              height: 0,
                            }
                      }
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={
                        reduced
                          ? undefined
                          : {
                              opacity: 0,
                              height: 0,
                            }
                      }
                      className="overflow-hidden"
                    >
                      <div className="mx-3 mb-3 space-y-2 border-l border-border pl-3">
                        {productSections.map((section) => {
                          const isSectionOpen =
                            activeProductSection === section.id;

                          return (
                            <div
                              key={section.id}
                              className="overflow-hidden rounded-xl bg-muted/40"
                            >
                              <button
                                type="button"
                                onClick={() => toggleProductSection(section.id)}
                                className="flex min-h-11 w-full items-center justify-between gap-3 px-3 text-left text-sm font-semibold text-foreground transition-colors hover:text-accent"
                                aria-expanded={isSectionOpen}
                              >
                                <span>{section.label}</span>

                                <ChevronDown
                                  size={15}
                                  className={`shrink-0 transition-transform ${
                                    isSectionOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isSectionOpen && (
                                  <motion.div
                                    initial={
                                      reduced
                                        ? false
                                        : {
                                            opacity: 0,
                                            height: 0,
                                          }
                                    }
                                    animate={{
                                      opacity: 1,
                                      height: "auto",
                                    }}
                                    exit={
                                      reduced
                                        ? undefined
                                        : {
                                            opacity: 0,
                                            height: 0,
                                          }
                                    }
                                    className="overflow-hidden"
                                  >
                                    <div className="space-y-1 border-t border-border/60 px-2 py-2">
                                      <Link
                                        href={section.basePath}
                                        onClick={closeMobileMenu}
                                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-accent hover:bg-background"
                                      >
                                        {t("viewAll")}
                                      </Link>

                                      {section.items.map((item) => {
                                        const itemActive = isActivePath(
                                          pathname,
                                          item.href,
                                        );

                                        return (
                                          <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-background hover:text-accent ${
                                              itemActive
                                                ? "text-accent"
                                                : "text-muted-foreground"
                                            }`}
                                          >
                                            {item.label}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-1 space-y-1">
                {navigationItems.map((item) => {
                  const isOpen = activeSubmenu === item.id;

                  return (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-xl border border-transparent"
                    >
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.id)}
                        className="flex min-h-12 w-full items-center justify-between gap-4 rounded-xl px-3 text-left font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
                        aria-expanded={isOpen}
                        aria-controls={`${item.id}-mobile-submenu`}
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          size={17}
                          className={`shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`${item.id}-mobile-submenu`}
                            initial={
                              reduced
                                ? false
                                : {
                                    opacity: 0,
                                    height: 0,
                                  }
                            }
                            animate={{
                              opacity: 1,
                              height: "auto",
                            }}
                            exit={
                              reduced
                                ? undefined
                                : {
                                    opacity: 0,
                                    height: 0,
                                  }
                            }
                            transition={{
                              duration: 0.2,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mx-3 mb-3 space-y-1 border-l border-border pl-3">
                              {item.items?.map((subItem) => {
                                const itemActive = isActivePath(
                                  pathname,
                                  subItem.href,
                                );

                                return (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={closeMobileMenu}
                                    className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-accent ${
                                      itemActive
                                        ? "text-accent"
                                        : "text-muted-foreground"
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className={`mt-1 flex min-h-12 items-center rounded-xl px-3 font-medium transition-colors hover:bg-muted hover:text-accent ${
                  isBlogActive ? "text-accent" : "text-foreground"
                }`}
              >
                {t("blog")}
              </Link>

              <div className="mt-5 border-t border-border pt-5">
                <Link
                  href="/contact?type=consultation"
                  onClick={closeMobileMenu}
                  className="block"
                >
                  <Button className="h-12 w-full rounded-xl bg-accent font-semibold text-accent-foreground shadow-sm hover:bg-accent/90">
                    {t("freeConsultation")}
                  </Button>
                </Link>

                <a
                  href={phoneHref}
                  className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Phone size={17} />
                  <span>{phoneNumber}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
