'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { BLOG_POSTS, HOMEPAGE } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

function formatDate(value: string, locale: string) {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(parsed)
}

export function BlogPreviewSection() {
  const t = useTranslations('homepage.blogSection')
  const tPost = useTranslations('homepage.blogPosts')
  const locale = useLocale()
  const featured = BLOG_POSTS.filter((post) => post.featured).slice(0, 3)

  return (
    <Section
      tone="muted"
      padding="default"
      aria-labelledby="blog-heading"
    >
      <Container>
        <motion.div
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <SectionHeader
              titleId="blog-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>
          <motion.div variants={fadeUp} className="shrink-0">
            <Link href={HOMEPAGE.blogSection.cta.href}>
              <Button
                variant="outline"
                className="h-11 rounded-xl border-border px-5 hover:bg-background"
              >
                {t('ctaLabel')}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {featured.map((post) => (
            <motion.li key={post.id} variants={fadeUp}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-background transition-colors hover:border-accent/35">
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  {/* Featured visual placeholder — replace with real imagery later */}
                  <div className="relative h-44 overflow-hidden bg-surface-ink">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_20%_20%,color-mix(in_oklab,var(--accent)_30%,transparent),transparent_60%)]" />
                    <div className="absolute inset-0 bg-grid-fade opacity-35" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[11px] font-medium tracking-wide text-surface-ink-foreground backdrop-blur-sm">
                        {tPost(`${post.slug}.categoryLabel`)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                      {tPost(`${post.slug}.title`)}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {tPost(`${post.slug}.excerpt`)}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span className="inline-flex items-center gap-3">
                        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3.5" aria-hidden />
                          {post.readTime}
                        </span>
                      </span>
                    </div>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      {t('readArticle')}
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  )
}
