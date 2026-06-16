export type ArticleCategory = 'rice-farming' | 'bean-farming' | 'sustainability' | 'agricultural-tips' | 'company-news' | 'community-stories'

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: ArticleCategory
  author: string
  publishDate: string
  readingTime: number
  image: string
  featured?: boolean
}

export interface BlogFilters {
  search?: string
  category?: ArticleCategory
  page?: number
}

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  'rice-farming': 'Rice Farming',
  'bean-farming': 'Bean Farming',
  'sustainability': 'Sustainability',
  'agricultural-tips': 'Agricultural Tips',
  'company-news': 'Company News',
  'community-stories': 'Community Stories'
}

export const ARTICLES_PER_PAGE = 6
