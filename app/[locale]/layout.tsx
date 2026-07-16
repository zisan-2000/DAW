import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeSync } from "@/components/layout/theme-sync";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { SkipLink } from "@/components/a11y/skip-link";
import { MotionProvider } from "@/components/providers/motion-provider";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { AGENCY_CONFIG } from "@/lib/content";
import { generateOrganizationSchema } from "@/lib/seo";
import { isTheme } from "@/lib/theme";
import { routing, rtlLocales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: `${AGENCY_CONFIG.shortName} | Premium Digital Agency - Web Development, SEO & Marketing`,
  description: `${AGENCY_CONFIG.tagline} Specializing in web development, SEO, digital marketing, and branding solutions for global businesses.`,
  keywords: [
    "digital agency",
    "web development",
    "SEO",
    "digital marketing",
    "branding",
    "design",
  ],
  authors: [{ name: AGENCY_CONFIG.name }],
  creator: AGENCY_CONFIG.name,
  publisher: AGENCY_CONFIG.name,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    siteName: AGENCY_CONFIG.shortName,
    title: `${AGENCY_CONFIG.shortName} | Digital Agency`,
    description: AGENCY_CONFIG.tagline,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: AGENCY_CONFIG.shortName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCY_CONFIG.shortName} | Digital Agency`,
    description: AGENCY_CONFIG.tagline,
    images: ["/og-image.png"],
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f8" },
    { media: "(prefers-color-scheme: dark)", color: "#161225" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = rtlLocales.includes(locale as Locale) ? "rtl" : "ltr";
  const organizationSchema = generateOrganizationSchema();
  const themeCookie = (await cookies()).get("theme")?.value;
  const themeClass = isTheme(themeCookie) && themeCookie === "dark" ? "dark" : "";

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={cn(syne.variable, manrope.variable, themeClass)}
    >
      <body
        className="flex min-h-screen flex-col overflow-x-clip bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <ThemeSync />
        <OrganizationJsonLd data={organizationSchema} />
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            <SkipLink />
            <AnnouncementBar />
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
