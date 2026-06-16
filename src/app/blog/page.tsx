import { Metadata } from 'next'
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
    images: [{ url: '/images/oshanodes 5.jpg', alt: 'Agricultural knowledge hub' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Oshanodes Agro',
    description: 'Sustainable agriculture insights and agricultural tips',
    images: ['/images/oshanodes 5.jpg']
  }
}

interface BlogPageProps {
  searchParams: { search?: string; category?: string; page?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
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
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl">
            Discover insights on sustainable agriculture, farming practices, and agricultural innovation from Oshanodes Agro experts.
          </p>
          <SearchBar />
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold text-slate-500 mb-3">Filter by Category</p>
          <CategoryFilter selectedCategory={category} />
        </div>

        {search && (
          <p className="text-sm text-slate-600 mb-6">
            Search results for: <span className="font-semibold">"{search}"</span>
          </p>
        )}

        {featured.length > 0 && !search && !category && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <FeaturedArticle article={featured[0]} />
          </div>
        )}

        {displayedArticles.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
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
          <div className="text-center py-12">
            <p className="text-lg text-slate-600">
              {search ? 'No articles found. Try a different search.' : 'No articles in this category.'}
            </p>
          </div>
        )}
      </section>
    </>
  )
}
