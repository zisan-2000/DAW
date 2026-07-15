import { CASE_STUDIES, AGENCY_CONFIG } from '@/lib/content'
import { Link } from '@/i18n/navigation'

export const metadata = {
  title: `Case Studies | ${AGENCY_CONFIG.shortName}`,
  description: 'Explore our portfolio of successful projects and case studies',
}

export default function CaseStudiesPage() {
  return (
    <div className="about-editorial w-full">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground">Real results from real clients</p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map(cs => (
              <Link key={cs.id} href={`/case-studies/${cs.slug}`}>
                <div className="p-6 border border-border rounded-xl bg-card hover:border-accent/50 transition-all cursor-pointer h-full">
                  <h3 className="font-semibold text-foreground mb-2 hover:text-accent">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cs.summary}</p>
                  <div className="flex gap-4 mb-4">
                    <div>
                      <p className="text-xl font-bold text-accent">{cs.results.metric1}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.metric1Label}</p>
                    </div>
                  </div>
                  <p className="text-sm text-accent">View Case Study →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
