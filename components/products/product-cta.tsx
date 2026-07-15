import { Link } from '@/i18n/navigation'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppHref } from '@/lib/whatsapp'

type ProductCtaProps = {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}

export function ProductCta({
  title = 'Ready to discuss your next step?',
  description = 'Tell us your goals and constraints. We will recommend a practical roadmap—without pressure or generic pitches.',
  primaryLabel = 'Request a Free Consultation',
  primaryHref = '/contact?type=consultation',
}: ProductCtaProps) {
  const whatsappHref = getWhatsAppHref(
    'Hello, I visited your Products page and would like to discuss a project.',
  )
  const isExternal = whatsappHref.startsWith('http')

  return (
    <section className="border-t border-white/8 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_70%)] p-8 md:p-12">
          <div className="bg-grid-fade pointer-events-none absolute inset-0 opacity-25" aria-hidden />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-surface-ink-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-surface-ink-foreground/60 sm:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href={primaryHref} className="w-full sm:w-auto">
                <Button className="h-12 w-full rounded-xl bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
                  {primaryLabel}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              {isExternal ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:w-auto"
                  >
                    <MessageCircle className="size-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              ) : (
                <Link href={whatsappHref} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:w-auto"
                  >
                    <MessageCircle className="size-4" />
                    Chat on WhatsApp
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
