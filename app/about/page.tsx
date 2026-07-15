import { AGENCY_CONFIG, TEAM } from '@/lib/content'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: `About Us | ${AGENCY_CONFIG.shortName}`,
  description: 'Learn about our agency, mission, and team',
}

export default function AboutPage() {
  return (
    <div className="w-full">
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
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl h-80 flex items-center justify-center border border-accent/20">
              <p className="text-muted-foreground text-center">[Add your company photo or video here]</p>
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
