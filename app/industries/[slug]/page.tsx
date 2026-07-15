import { INDUSTRIES, AGENCY_CONFIG } from '@/lib/content'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const generateStaticParams = () => {
  return INDUSTRIES.map(ind => ({
    slug: ind.slug
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const industry = INDUSTRIES.find(i => i.slug === params.slug)
  return {
    title: `${industry?.name} Solutions | ${AGENCY_CONFIG.shortName}`,
    description: `Digital solutions tailored for the ${industry?.name} industry`,
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find(i => i.slug === params.slug)

  if (!industry) {
    return <div className="py-20 text-center">Industry not found</div>
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{industry.name} Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Specialized digital strategies for the {industry.name} industry
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Industry Challenges</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• [Key challenge specific to {industry.name}]</li>
                <li>• [Challenge 2]</li>
                <li>• [Challenge 3]</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Solutions</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Customized digital strategies</li>
                <li>✓ Industry-specific expertise</li>
                <li>✓ Proven ROI and results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Let's Discuss Your {industry.name} Needs</h2>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
