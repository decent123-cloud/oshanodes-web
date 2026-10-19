import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getRelatedArticles, articles } from '@/data/articles'
import ArticleHeader from '@/components/blog/ArticleHeader'
import ArticleContent from '@/components/blog/ArticleContent'
import RelatedArticles from '@/components/blog/RelatedArticles'
import Link from 'next/link'

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found — Oshanodes Agro'
    }
  }

  const articleUrl = `https://oshanodes.com/blog/${article.slug}`

  return {
    title: `${article.title} — Oshanodes Agro`,
    description: article.excerpt,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
      images: [
        {
          url: article.image,
          alt: article.title
        }
      ],
      url: articleUrl
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image]
    }
  }
}

export async function generateStaticParams() {
  return articles.map(article => ({
    slug: article.slug
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  if (process.env.BLOG_ENABLED !== 'true') notFound()

  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(params.slug, 3)

  // Find previous and next articles
  const articleIndex = articles.findIndex(a => a.slug === params.slug)
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null

  return (
    <>
      <article className="container max-w-6xl py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <ArticleHeader article={article} />
        </div>

        <div className="prose prose-lg mx-auto mt-10 max-w-3xl">
          <ArticleContent content={article.content} />
        </div>

        {relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}
      </article>

      <section className="mt-12 border-y border-slate-200 bg-white/75 py-12">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {prevArticle && (
              <Link
                href={`/blog/${prevArticle.slug}`}
                className="rounded-[24px] border border-slate-200/70 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">← Previous article</p>
                <h3 className="font-bold text-[#16372c] transition-colors hover:text-primary">
                  {prevArticle.title}
                </h3>
              </Link>
            )}
            {nextArticle && (
              <Link
                href={`/blog/${nextArticle.slug}`}
                className="rounded-[24px] border border-slate-200/70 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg md:text-right"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Next article →</p>
                <h3 className="font-bold text-[#16372c] transition-colors hover:text-primary">
                  {nextArticle.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
