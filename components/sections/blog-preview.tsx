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
  const primary = featured[0]
  const secondary = featured.slice(1)

  return (
    <Section
      tone="muted"
      padding="default"
      aria-labelledby="blog-heading"
    >
      <Container className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-8 h-56 bg-[radial-gradient(ellipse_50%_45%_at_10%_20%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_70%),radial-gradient(ellipse_42%_35%_at_92%_10%,color-mix(in_oklab,var(--foreground)_4%,transparent),transparent_72%)]"
          aria-hidden
        />
        <motion.div
          className="relative z-10 mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
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

        <motion.div
          className="relative z-10 grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {primary ? (
            <motion.article variants={fadeUp} className="group h-full">
              <Link
                href={`/blog/${primary.slug}`}
                className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/80 bg-background shadow-[0_30px_90px_-55px_color-mix(in_oklab,var(--accent)_45%,transparent)] transition duration-300 hover:-translate-y-1 hover:border-accent/35 transform-gpu [perspective:1200px] will-change-transform transition-[transform,box-shadow] duration-500 hover:[transform:translateY(-6px)_rotateX(6deg)_rotateY(-8deg)]"
              >
                <div className="relative min-h-72 overflow-hidden border-b border-border/70 bg-surface-ink">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_15%_20%,color-mix(in_oklab,var(--accent)_36%,transparent),transparent_58%),linear-gradient(130deg,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_55%)]" />
                  <div className="bg-grid-fade absolute inset-0 opacity-35" />
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 h-28 w-28 rounded-full border border-white/10" />
                    <div className="absolute right-10 bottom-8 h-24 w-24 rounded-full border border-white/10" />
                    <div className="absolute top-1/2 left-[22%] h-px w-[42%] rotate-[-14deg] bg-linear-to-r from-white/0 via-accent/70 to-white/0" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-surface-ink-foreground backdrop-blur-sm uppercase">
                      {tPost(`${primary.slug}.categoryLabel`)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                    Featured insight
                  </p>
                  <h3 className="mt-4 max-w-2xl font-display text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-[2rem]">
                    {tPost(`${primary.slug}.title`)}
                  </h3>
                  <p className="mt-4 max-w-2xl flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {tPost(`${primary.slug}.excerpt`)}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border/70 pt-5 text-xs text-muted-foreground">
                    <span>{primary.author}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <time dateTime={primary.date}>
                      {formatDate(primary.date, locale)}
                    </time>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" aria-hidden />
                      {primary.readTime}
                    </span>
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {t('readArticle')}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ) : null}

          <motion.ul className="grid gap-5" variants={staggerContainer}>
            {secondary.map((post, index) => (
              <motion.li key={post.id} variants={fadeUp}>
                <article className="group h-full overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/95 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_25px_70px_-48px_color-mix(in_oklab,var(--accent)_40%,transparent)] transform-gpu [perspective:1200px] will-change-transform transition-[transform,box-shadow] duration-500 hover:[transform:translateY(-6px)_rotateX(6deg)_rotateY(-8deg)]">
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                    <div className="relative h-44 overflow-hidden border-b border-border/70 bg-[linear-gradient(140deg,color-mix(in_oklab,var(--accent)_14%,var(--background)),var(--background))]">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_90%_15%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px)] bg-size-[26px_26px] opacity-50" />
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                        <span className="rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground backdrop-blur-sm">
                          {tPost(`${post.slug}.categoryLabel`)}
                        </span>
                        <span className="font-display text-xs tracking-[0.18em] text-muted-foreground/60">
                          0{index + 2}
                        </span>
                      </div>
                      <div className="absolute right-6 bottom-6 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                        <span className="h-px w-14 bg-linear-to-r from-accent/70 to-transparent" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                        {tPost(`${post.slug}.title`)}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {tPost(`${post.slug}.excerpt`)}
                      </p>
                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3.5" aria-hidden />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </Section>
  )
}
