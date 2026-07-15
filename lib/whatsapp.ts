import { AGENCY_CONFIG, HOMEPAGE } from '@/lib/content'

/** Build WhatsApp deep link from config; falls back to contact when placeholder */
export function getWhatsAppHref(message?: string) {
  const raw = AGENCY_CONFIG.whatsapp
  const text =
    message ?? HOMEPAGE.finalCta.whatsappMessage

  if (raw.startsWith('[')) {
    return `/contact?type=whatsapp`
  }

  const digits = raw.replace(/[^\d]/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
}
