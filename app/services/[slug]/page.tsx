import { SERVICES, AGENCY_CONFIG, CASE_STUDIES } from '@/lib/content'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const generateStaticParams = () => {
  return SERVICES.map(service => ({
    slug: service.slug
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const service = SERVICES.find(s => s.slug === params.slug)
  return {
    title: `${service?.title} | ${AGENCY_CONFIG.shortName}`,
    description: service?.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug)
  const relatedCaseStudies = CASE_STUDIES.filter(cs => cs.service === service?.id).slice(0, 2)

  if (!service) {
    return <div className="py-20 text-center">Service not found</div>
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            {service.description}
          </p>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Key Benefits</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-muted-foreground">[Benefit 1 - Customize this content in /lib/content.ts]</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-muted-foreground">[Benefit 2]</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-muted-foreground">[Benefit 3]</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                [Add your service approach, methodology, and unique value proposition here]
              </p>
              <p className="text-muted-foreground">
                We combine industry best practices with creative innovation to deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 md:py-32 bg-card/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold text-foreground mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCaseStudies.map(cs => (
                <Link key={cs.id} href={`/case-studies/${cs.slug}`}>
                  <div className="p-6 border border-border rounded-xl bg-background hover:border-accent/50 transition-all cursor-pointer">
                    <h3 className="font-semibold text-foreground mb-2 hover:text-accent">{cs.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{cs.summary}</p>
                    <p className="text-sm text-accent">View Case Study →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
