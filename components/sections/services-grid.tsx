'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code,
  Layers,
  Palette,
  Search,
  TrendingUp,
  Video,
  type LucideIcon,
} from 'lucide-react'
import { HOMEPAGE, SERVICES } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  Search,
  Code,
  Layers,
  Palette,
  Video,
}

export function ServicesGridSection() {
  const { servicesSection } = HOMEPAGE
  const services = [...SERVICES].sort((a, b) => a.order - b.order)

  return (
    <Section
      tone="muted"
      padding="default"
      aria-labelledby="services-heading"
    >
      <Container>
        <motion.div
          className="mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleId="services-heading"
              eyebrow={servicesSection.eyebrow}
              title={servicesSection.title}
              description={servicesSection.description}
            />
          </motion.div>
        </motion.div>

        {/* Editorial bento: 2 featured span 2 cols on large screens */}
        <motion.div
          className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Layers
            const featured = Boolean(service.featured)

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className={cn(
                  'group relative flex flex-col rounded-2xl border border-border/80 bg-background p-6 transition-colors sm:p-7',
                  'hover:border-accent/40 hover:bg-background',
                  featured
                    ? 'lg:col-span-3 min-h-[280px]'
                    : 'lg:col-span-2 min-h-[260px]',
                )}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col outline-none"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-muted text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-border/70 pt-5">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Explore Service
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
