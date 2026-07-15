import { AGENCY_CONFIG } from './content'

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: AGENCY_CONFIG.name,
    alternateName: AGENCY_CONFIG.shortName,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/logo.png`,
    description: AGENCY_CONFIG.tagline,
    sameAs: [
      AGENCY_CONFIG.socialLinks.facebook,
      AGENCY_CONFIG.socialLinks.linkedin,
      AGENCY_CONFIG.socialLinks.instagram,
      AGENCY_CONFIG.socialLinks.youtube,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: AGENCY_CONFIG.phone,
      email: AGENCY_CONFIG.email,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: AGENCY_CONFIG.address,
    },
  }
}

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: AGENCY_CONFIG.name,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/logo.png`,
    description: AGENCY_CONFIG.tagline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: AGENCY_CONFIG.address,
      addressCountry: 'US',
    },
    telephone: AGENCY_CONFIG.phone,
    email: AGENCY_CONFIG.email,
    areaServed: 'Worldwide',
    priceRange: '$$',
  }
}

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export const generateArticleSchema = (article: {
  title: string
  description: string
  image?: string
  datePublished: string
  author: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/og-image.png`,
    datePublished: article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: AGENCY_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/logo.png`,
      },
    },
  }
}

export const generateServiceSchema = (service: {
  name: string
  description: string
  areaServed: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: AGENCY_CONFIG.name,
    },
    areaServed: service.areaServed,
  }
}
