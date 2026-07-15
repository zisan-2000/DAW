import { AGENCY_CONFIG } from '@/lib/content'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: `About Us | ${AGENCY_CONFIG.shortName}`,
  description: 'Learn about our agency, mission, and team',
}

export default function AboutPage() {
  return (
    <div className="about-editorial w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About {AGENCY_CONFIG.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We're a team of digital strategists, designers, and developers passionate about helping businesses grow through technology.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in [YEAR], {AGENCY_CONFIG.shortName} started with a simple mission: to deliver exceptional digital solutions that drive real business results.
              </p>
              <p className="text-muted-foreground">
                Today, we work with {AGENCY_CONFIG.clientsServed}+ clients across {AGENCY_CONFIG.countriesServed} countries, delivering {AGENCY_CONFIG.projectsCompleted}+ successful projects.
              </p>
            </div>
            <div className="border border-border bg-card p-2">
              <div className="border border-border p-6 md:p-8">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-accent">Explore the agency</p>
                <nav className="divide-y divide-border" aria-label="About pages">
                  {[
                    ['/about/our-story', 'Our story', '01'],
                    ['/about/why-us', 'Why choose us', '02'],
                    ['/about/your-online-reputation', 'Your online reputation', '03'],
                    ['/about/concern', 'Tell us your concern', '04'],
                    ['/about/faq', 'Frequently asked questions', '05'],
                    ['/about/case-studies', 'Case studies', '06'],
                  ].map(([href, label, index]) => (
                    <Link key={href} href={href} className="group flex items-center justify-between gap-4 py-3 text-sm text-foreground transition-colors hover:text-accent">
                      <span>{label}</span>
                      <span className="font-mono text-[10px] text-muted-foreground transition-transform group-hover:translate-x-1">{index} / →</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">{AGENCY_CONFIG.yearsOfExperience}+</p>
              <p className="text-muted-foreground mt-2">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">{AGENCY_CONFIG.projectsCompleted}+</p>
              <p className="text-muted-foreground mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">{AGENCY_CONFIG.clientsServed}+</p>
              <p className="text-muted-foreground mt-2">Clients Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">{AGENCY_CONFIG.countriesServed}+</p>
              <p className="text-muted-foreground mt-2">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'We stay ahead of trends and embrace new technologies' },
              { title: 'Excellence', desc: 'Quality is non-negotiable in everything we do' },
              { title: 'Integrity', desc: 'We build trust through transparency and honesty' },
            ].map((value, i) => (
              <div key={i} className="p-6 border border-border rounded-xl bg-card">
                <h3 className="font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
