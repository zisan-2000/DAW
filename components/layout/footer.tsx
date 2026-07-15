import Link from 'next/link'
import { Mail, Phone, MapPin, Share2, Share, Heart, Play } from 'lucide-react'
import { AGENCY_CONFIG, SERVICES } from '@/lib/content'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
                {AGENCY_CONFIG.shortName.replace(/[\[\]]/g, '').charAt(0) || 'A'}
              </div>
              <span className="font-bold text-foreground">{AGENCY_CONFIG.shortName}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{AGENCY_CONFIG.tagline}</p>
            <div className="flex gap-3">
              {AGENCY_CONFIG.socialLinks.facebook && (
                <a href={AGENCY_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Share2 size={18} />
                </a>
              )}
              {AGENCY_CONFIG.socialLinks.linkedin && (
                <a href={AGENCY_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Share2 size={18} />
                </a>
              )}
              {AGENCY_CONFIG.socialLinks.instagram && (
                <a href={AGENCY_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Share size={18} />
                </a>
              )}
              {AGENCY_CONFIG.socialLinks.youtube && (
                <a href={AGENCY_CONFIG.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Play size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              {AGENCY_CONFIG.email !== '[contact@agency.com]' && (
                <li>
                  <a href={`mailto:${AGENCY_CONFIG.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Mail size={16} />
                    {AGENCY_CONFIG.email}
                  </a>
                </li>
              )}
              {AGENCY_CONFIG.phone !== '[+1 (XXX) XXX-XXXX]' && (
                <li>
                  <a href={`tel:${AGENCY_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Phone size={16} />
                    {AGENCY_CONFIG.phone}
                  </a>
                </li>
              )}
              {AGENCY_CONFIG.address !== '[Your Office Address, City, Country]' && (
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  {AGENCY_CONFIG.address}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {AGENCY_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent" /> by {AGENCY_CONFIG.shortName}
          </p>
        </div>
      </div>
    </footer>
  )
}
