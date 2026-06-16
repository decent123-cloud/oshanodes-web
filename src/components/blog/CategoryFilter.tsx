"use client"
import { ArticleCategory, CATEGORY_LABELS } from '@/types/article'
import Link from 'next/link'

interface CategoryFilterProps {
  selectedCategory?: ArticleCategory
}

const categories: ArticleCategory[] = [
  'rice-farming',
  'bean-farming',
  'sustainability',
  'agricultural-tips',
  'company-news',
  'community-stories'
]

export default function CategoryFilter({ selectedCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
          !selectedCategory
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-text hover:bg-gray-200'
        }`}
      >
        All Articles
      </Link>
      {categories.map(cat => (
        <Link
          key={cat}
          href={`/blog?category=${cat}`}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            selectedCategory === cat
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-text hover:bg-gray-200'
          }`}
        >
          {CATEGORY_LABELS[cat]}
        </Link>
      ))}
    </div>
  )
}
