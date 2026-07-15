import { INDUSTRIES, AGENCY_CONFIG } from '@/lib/content'
import { Link } from '@/i18n/navigation'

export const metadata = {
  title: `Industries | ${AGENCY_CONFIG.shortName}`,
  description: 'Industries we serve and solutions we provide',
}

export default function IndustriesPage() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Industries We Serve</h1>
          <p className="text-lg text-muted-foreground">Specialized solutions for diverse sectors</p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map(industry => (
              <Link key={industry.id} href={`/industries/${industry.slug}`}>
                <div className="p-6 border border-border rounded-xl bg-card hover:border-accent/50 transition-all cursor-pointer h-full">
                  <h3 className="font-semibold text-foreground hover:text-accent">{industry.name}</h3>
                  <p className="text-sm text-accent mt-2">Learn more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
