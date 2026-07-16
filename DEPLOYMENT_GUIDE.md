# Deployment & Customization Guide

## Quick Start

### 1. Customize Content

All placeholder content is in `/lib/content.ts`. Replace `[BRACKETS]` with your actual information:

```typescript
export const AGENCY_CONFIG = {
  name: "[YOUR AGENCY NAME]", // Replace with your agency name
  shortName: "ORM Defender", // Short brand name
  tagline: "[YOUR TAGLINE]", // Agency tagline
  email: "[contact@agency.com]", // Contact email
  phone: "[+1 (XXX) XXX-XXXX]", // Phone number
  whatsapp: "[+1234567890]", // WhatsApp number
  // ... more config
};
```

### 2. Update Colors

Edit `/app/globals.css` to change the accent color (currently orange/red):

```css
--accent: oklch(0.6 0.22 30); /* Change this to your brand color */
```

### 3. Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 4. Add Your Logo & Images

1. Generate or upload images to `/public/images/`
2. Update the logo in the Header component
3. Add team photos, case study images, testimonial avatars

## Deployment to Vercel

### One-Click Deploy

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your repository
4. Vercel auto-detects Next.js configuration
5. Click "Deploy"

### Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Environment Variables in Vercel

1. Go to Settings → Environment Variables
2. Add `NEXT_PUBLIC_SITE_URL` with your domain URL
3. Add any API keys needed for email notifications

## SEO Optimization

### Implemented

- ✅ Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ JSON-LD schema markup for Organization
- ✅ Dynamic meta tags for all pages
- ✅ Open Graph & Twitter Card support
- ✅ Mobile-friendly responsive design
- ✅ Fast page load times (optimized images)

### To Complete

1. **Update Open Graph image**: Create `/public/og-image.png` (1200×630px)
2. **Favicon**: Replace `/public/icon*.png` with your logo
3. **Analytics**:
   ```typescript
   // In layout.tsx, add your Google Analytics ID
   import { Analytics } from "@vercel/analytics/next";
   ```
4. **Google Search Console**: Submit sitemap at yourdomain.com/sitemap.xml

## Performance Optimization

### Already Optimized

- ✅ Next.js Image optimization
- ✅ Code splitting & lazy loading
- ✅ Framer Motion animations (optimized)
- ✅ CSS minification via Tailwind
- ✅ Static site generation (SSG)

### Lighthouse Targets

- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

### Tips to Improve Further

1. **Compress images**: Use tools like TinyPNG
2. **Monitor Core Web Vitals**: Use PageSpeed Insights
3. **Add caching headers**: Configured automatically on Vercel
4. **Consider CDN**: Vercel provides global CDN

## Adding Features

### Email Notifications

For contact form submissions, integrate with your backend:

```typescript
// In /app/contact/page.tsx, replace handleSubmit:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Send to your API
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Message sent!");
  }
};
```

### Adding Blog

Blog posts are currently in `/lib/content.ts`. For dynamic content:

1. Add CMS integration (Sanity, Contentful, etc.)
2. Or create `/app/blog/api/posts.ts` that fetches from your backend

### WhatsApp Integration

Add WhatsApp button to any page:

```typescript
const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=Hi%20${AGENCY_CONFIG.name}!`;
```

## Accessibility Features

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML elements
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Keyboard navigation
- ✅ Color contrast ratios met
- ✅ Focus indicators visible
- ✅ Reduced motion support

## Database Integration

For storing contact submissions, integrate with:

### Option 1: Supabase (PostgreSQL)

```bash
npm install @supabase/supabase-js
```

### Option 2: Firebase

```bash
npm install firebase
```

### Option 3: MongoDB

```bash
npm install mongodb
```

## Monitoring & Analytics

1. **Vercel Analytics**: Automatically enabled
2. **Google Analytics**: Add tracking ID to environment variables
3. **Sentry**: For error tracking in production

## Maintenance

### Monthly Tasks

- [ ] Check broken links
- [ ] Update blog posts
- [ ] Review case studies
- [ ] Monitor performance metrics

### Quarterly Tasks

- [ ] Update testimonials
- [ ] Refresh case study data
- [ ] Review SEO rankings
- [ ] Check security updates

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Web Vitals](https://web.dev/vitals/)

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Deployment Issues

1. Check environment variables in Vercel dashboard
2. Verify GitHub connection is authorized
3. Check build logs in Vercel dashboard

### Performance Issues

1. Run `npm run build` locally to check build size
2. Use Chrome DevTools to identify slow components
3. Check if images are properly optimized

## Next Steps

1. **Customize all content** in `/lib/content.ts`
2. **Add your images** to `/public/images/`
3. **Deploy to Vercel** for free
4. **Set up email notifications** for contact form
5. **Monitor analytics** to track performance

Good luck with your digital agency website! 🚀
