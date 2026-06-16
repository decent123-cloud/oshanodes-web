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
      <article className="container py-12">
        <ArticleHeader article={article} />

        <div className="mt-10 prose prose-lg max-w-4xl mx-auto">
          <ArticleContent content={article.content} />
        </div>

        {relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}
      </article>

      <section className="bg-gray-50 py-12 mt-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {prevArticle && (
              <Link
                href={`/blog/${prevArticle.slug}`}
                className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <p className="text-sm text-slate-500 mb-2">← Previous Article</p>
                <h3 className="font-bold hover:text-primary transition-colors">
                  {prevArticle.title}
                </h3>
              </Link>
            )}
            {nextArticle && (
              <Link
                href={`/blog/${nextArticle.slug}`}
                className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow md:text-right"
              >
                <p className="text-sm text-slate-500 mb-2">Next Article →</p>
                <h3 className="font-bold hover:text-primary transition-colors">
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
