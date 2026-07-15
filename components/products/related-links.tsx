import { Link } from '@/i18n/navigation'
import { ArrowUpRight } from 'lucide-react'

export type RelatedLink = {
  label: string
  description?: string
  href: string
}

export function RelatedLinks({
  title = 'Related',
  links,
}: {
  title?: string
  links: RelatedLink[]
}) {
  if (!links.length) return null

  return (
    <section className="border-t border-border/70 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display font-semibold text-foreground transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </span>
                {link.description ? (
                  <span className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {link.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
