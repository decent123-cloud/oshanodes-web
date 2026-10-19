import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles, getLatestArticles, getFeaturedArticles, searchArticles, getArticlesByCategory } from '@/data/articles'
import { ArticleCategory, ARTICLES_PER_PAGE } from '@/types/article'
import FeaturedArticle from '@/components/blog/FeaturedArticle'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import SearchBar from '@/components/blog/SearchBar'
import Pagination from '@/components/blog/Pagination'

export const metadata: Metadata = {
  title: 'Blog — Oshanodes Agro',
  description: 'Read articles about sustainable agriculture, rice farming, bean farming, and agricultural tips from Oshanodes Agro experts.',
  openGraph: {
    title: 'Blog — Oshanodes Agro',
    description: 'Read articles about sustainable agriculture, rice farming, bean farming, and agricultural tips.',
    type: 'website',
    images: [{ url: '/images/brand/rice_farm.png', alt: 'Agricultural knowledge hub' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Oshanodes Agro',
    description: 'Sustainable agriculture insights and agricultural tips',
    images: ['/images/brand/rice_farm.png']
  }
}

interface BlogPageProps {
  searchParams: { search?: string; category?: string; page?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  if (process.env.BLOG_ENABLED !== 'true') notFound()

  const search = searchParams.search || ''
  const category = searchParams.category as ArticleCategory | undefined
  const currentPage = parseInt(searchParams.page || '1')

  let filtered = articles

  if (search) {
    filtered = searchArticles(search)
  } else if (category) {
    filtered = getArticlesByCategory(category)
  }

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE)
  const start = (currentPage - 1) * ARTICLES_PER_PAGE
  const end = start + ARTICLES_PER_PAGE
  const displayedArticles = filtered.slice(start, end)

  const featured = getFeaturedArticles(1)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0f5c32]">
        <img src="/images/brand/rice_farm.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082c1b]/95 via-[#0b3c24]/85 to-[#0b3c24]/55" />
        <div className="container relative py-16 text-white md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7b36b]">Ideas for a better harvest</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.06em] md:text-6xl">Knowledge Hub</h1>
          <p className="mt-4 mb-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Discover insights on sustainable agriculture, farming practices, and agricultural innovation from Oshanodes Agro experts.
          </p>
          <div className="max-w-xl"><SearchBar /></div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8">
          <p className="section-kicker mb-4">Explore by topic</p>
          <CategoryFilter selectedCategory={category} />
        </div>

        {search && (
          <p className="text-sm text-slate-600 mb-6">
            Search results for: <span className="font-semibold">"{search}"</span>
          </p>
        )}

        {featured.length > 0 && !search && !category && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold tracking-[-0.04em] text-[#16372c]">Editor’s pick</h2>
            <FeaturedArticle article={featured[0]} />
          </div>
        )}

        {displayedArticles.length > 0 ? (
          <>
            <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {displayedArticles.map(article => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl="/blog"
              />
            )}
          </>
        ) : (
          <div className="premium-card rounded-[28px] py-16 text-center">
            <p className="text-lg text-slate-600">
              {search ? 'No articles found. Try a different search.' : 'No articles in this category.'}
            </p>
          </div>
        )}
      </section>
    </>
  )
}
