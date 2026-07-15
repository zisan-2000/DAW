import { BLOG_POSTS, AGENCY_CONFIG } from '@/lib/content'
import { Calendar } from 'lucide-react'

export const generateStaticParams = () => {
  return BLOG_POSTS.map(post => ({
    slug: post.slug
  }))
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  return {
    title: `${post?.title} | ${AGENCY_CONFIG.shortName}`,
    description: post?.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    return <div className="py-20 text-center">Post not found</div>
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground my-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {post.date}
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">[Section 1]</h2>
            <p className="text-muted-foreground mb-4">
              Add your article content here. This is a template that you can customize with your blog post content.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">[Section 2]</h2>
            <p className="text-muted-foreground mb-4">
              Include key insights, examples, and actionable takeaways for your readers.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 my-8">
              <p className="text-foreground font-semibold mb-2">Key Takeaway:</p>
              <p className="text-muted-foreground">
                Main point or conclusion from this article
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-20 bg-card/50 border-t border-border">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
          <div className="space-y-4">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(relatedPost => (
              <a key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block p-4 border border-border rounded-lg hover:border-accent/50 transition-all">
                <h3 className="font-semibold text-foreground hover:text-accent">{relatedPost.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{relatedPost.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
