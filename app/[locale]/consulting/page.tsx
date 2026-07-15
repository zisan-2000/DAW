<<<<<<< HEAD
import { redirect } from "next/navigation";

export default async function ConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/consulting/reputation-consulting`);
=======
import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consulting',
  description:
    'Strategic consulting for reputation, branding, crisis response and generative engine optimisation.',
}

const consultingLinks = [
  {
    href: '/consulting/reputation-consulting',
    label: 'Reputation Consulting',
  },
]

export default function ConsultingIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
        Consulting
      </h1>
      <p className="mt-4 text-muted-foreground">
        Explore strategic consulting engagements tailored to visibility,
        narrative and brand resilience.
      </p>
      <ul className="mt-10 space-y-3">
        {consultingLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
            >
              {item.label}
              <ArrowRight className="size-4" />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
>>>>>>> 84964f9d0959815355ecb583c96d067edfa3100c
}
