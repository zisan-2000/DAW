import { SERVICES, AGENCY_CONFIG } from '@/lib/content'
import Link from 'next/link'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export const metadata = {
  title: `Services | ${AGENCY_CONFIG.shortName}`,
  description: 'Our comprehensive digital services tailored to your business needs',
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive digital solutions designed to drive growth and transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              // @ts-ignore
              const Icon = Icons[service.icon] || Icons.Zap
              return (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <div className="group p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:bg-card transition-all cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
