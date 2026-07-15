import { MetadataRoute } from 'next'
import { SERVICES, INDUSTRIES, CASE_STUDIES, BLOG_POSTS } from '@/lib/content'
import { PRODUCT_IDS } from '@/lib/products/types'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'
import { routing } from '@/i18n/routing'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

function localizedPath(path: string, locale: string) {
  if (locale === routing.defaultLocale) {
    return `${BASE_URL}${path}`
  }
  return `${BASE_URL}/${locale}${path}`
}

function alternates(path: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedPath(path, locale)]),
  )
}

function entriesForPath(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  priority: number,
): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: localizedPath(path, locale),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: alternates(path),
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ...entriesForPath('', 'weekly', 1),
    ...entriesForPath('/about', 'monthly', 0.8),
    ...entriesForPath('/services', 'monthly', 0.9),
    ...entriesForPath('/industries', 'monthly', 0.9),
    ...entriesForPath('/case-studies', 'weekly', 0.9),
    ...entriesForPath('/blog', 'weekly', 0.8),
    ...entriesForPath('/contact', 'monthly', 0.7),
  ]

  const servicePages = SERVICES.flatMap((service) =>
    entriesForPath(`/services/${service.slug}`, 'monthly', 0.8),
  )

  const industryPages = INDUSTRIES.flatMap((industry) =>
    entriesForPath(`/industries/${industry.slug}`, 'monthly', 0.8),
  )

  const caseStudyPages = CASE_STUDIES.flatMap((cs) =>
    entriesForPath(`/case-studies/${cs.slug}`, 'monthly', 0.8),
  )

  const blogPages = BLOG_POSTS.flatMap((post) =>
    entriesForPath(`/blog/${post.slug}`, 'weekly', 0.7),
  )

  const productHubPages = PRODUCT_IDS.flatMap((product) =>
    entriesForPath(`/products/${product}`, 'monthly', 0.85),
  )

  const productAudiencePages = PRODUCT_IDS.flatMap((product) =>
    AUDIENCE_ORDER.flatMap((audience) =>
      entriesForPath(`/products/${product}/${audience}`, 'monthly', 0.8),
    ),
  )

  const productCaseArchives = PRODUCT_IDS.flatMap((product) =>
    entriesForPath(`/products/${product}/case-studies`, 'weekly', 0.75),
  )

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...caseStudyPages,
    ...blogPages,
    ...productHubPages,
    ...productAudiencePages,
    ...productCaseArchives,
  ]
}
