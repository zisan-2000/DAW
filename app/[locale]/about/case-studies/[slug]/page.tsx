import { CASE_STUDIES, AGENCY_CONFIG } from '@/lib/content'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const generateStaticParams = () => {
  return CASE_STUDIES.map(cs => ({
    slug: cs.slug
  }))
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const cs = CASE_STUDIES.find(s => s.slug === slug)
  return {
    title: `${cs?.title} | ${AGENCY_CONFIG.shortName}`,
    description: cs?.summary,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = CASE_STUDIES.find(s => s.slug === slug)

  if (!caseStudy) {
    return <div className="py-20 text-center">Case study not found</div>
  }

  return (
    <div className="about-editorial w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{caseStudy.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{caseStudy.summary}</p>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-4xl font-bold text-accent mb-2">{caseStudy.results.metric1}</p>
              <p className="text-muted-foreground">{caseStudy.results.metric1Label}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-4xl font-bold text-accent mb-2">{caseStudy.results.metric2}</p>
              <p className="text-muted-foreground">{caseStudy.results.metric2Label}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-4xl font-bold text-accent mb-2">{caseStudy.results.metric3}</p>
              <p className="text-muted-foreground">{caseStudy.results.metric3Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Achieve Similar Results?</h2>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
