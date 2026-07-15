import { BLOG_POSTS, AGENCY_CONFIG } from '@/lib/content'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export const metadata = {
  title: `Blog | ${AGENCY_CONFIG.shortName}`,
  description: 'Digital insights, trends, and expert tips',
}

export default function BlogPage() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground">Digital insights and industry trends</p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="border border-border rounded-xl bg-card hover:border-accent/50 transition-all cursor-pointer h-full overflow-hidden">
                  <div className="p-6 flex flex-col h-full">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mb-4">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-foreground mb-3 flex-1 hover:text-accent">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
