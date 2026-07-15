import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { SkipLink } from "@/components/a11y/skip-link";
import { MotionProvider } from "@/components/providers/motion-provider";
import { AGENCY_CONFIG } from "@/lib/content";
import { generateOrganizationSchema } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c12" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-clip bg-background text-foreground antialiased">
        <MotionProvider>
          <SkipLink />
          <AnnouncementBar />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
