import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES, AGENCY_CONFIG, CASE_STUDIES } from '@/lib/content'
import {
  allServiceStaticParams,
  getService,
} from '@/lib/services/registry'
import { SpecialtyServicePage } from '@/components/services/specialty-service-page'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type PageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  const specialty = allServiceStaticParams()
  const legacy = SERVICES.map((service) => ({ slug: service.slug }))
  const seen = new Set<string>()
  return [...specialty, ...legacy].filter(({ slug }) => {
    if (seen.has(slug)) return false
    seen.add(slug)
    return true
  })
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const specialty = getService(slug)
  if (specialty) {
    return {
      title: `${specialty.seoTitle} | ${AGENCY_CONFIG.shortName}`,
      description: specialty.seoDescription,
      alternates: { canonical: `/services/${specialty.slug}` },
    }
  }

  const service = SERVICES.find((s) => s.slug === slug)
  return {
    title: `${service?.title ?? 'Service'} | ${AGENCY_CONFIG.shortName}`,
    description: service?.description,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params

  const specialty = getService(slug)
  if (specialty) {
    return <SpecialtyServicePage service={specialty} />
  }

  const service = SERVICES.find((s) => s.slug === slug)
  const relatedCaseStudies = CASE_STUDIES.filter(
    (cs) => cs.service === service?.id,
  ).slice(0, 2)

  if (!service) notFound()

  return (
    <div className="w-full">
      <section className="bg-gradient-to-b from-accent/10 to-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {service.title}
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
            {service.description}
          </p>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {service.capabilities.slice(0, 4).map((cap) => (
                  <li key={cap} className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span className="text-muted-foreground">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Our Approach
              </h2>
              <p className="mb-4 text-muted-foreground">
                We combine industry best practices with creative innovation to
                deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {relatedCaseStudies.length > 0 ? (
        <section className="border-y border-border bg-card/50 py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedCaseStudies.map((cs) => (
                <Link key={cs.id} href={`/about/case-studies/${cs.slug}`}>
                  <div className="cursor-pointer rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/50">
                    <h3 className="mb-2 font-semibold text-foreground hover:text-accent">
                      {cs.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {cs.summary}
                    </p>
                    <p className="text-sm text-accent">View Case Study →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Let&apos;s discuss how we can help you achieve your goals
          </p>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
