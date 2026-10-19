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
        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
          !selectedCategory
            ? 'border-primary bg-primary text-white'
            : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-800/30 hover:text-primary'
        }`}
      >
        All Articles
      </Link>
      {categories.map(cat => (
        <Link
          key={cat}
          href={`/blog?category=${cat}`}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            selectedCategory === cat
              ? 'border-primary bg-primary text-white'
              : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-800/30 hover:text-primary'
          }`}
        >
          {CATEGORY_LABELS[cat]}
        </Link>
      ))}
    </div>
  )
}
