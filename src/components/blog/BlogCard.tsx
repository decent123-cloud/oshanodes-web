"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Article, CATEGORY_LABELS } from '@/types/article'

export default function BlogCard({ article }: { article: Article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <Link href={`/blog/${article.slug}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-wider text-primary font-semibold">
            {CATEGORY_LABELS[article.category]}
          </span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-lg font-bold text-text hover:text-primary transition-colors cursor-pointer">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>{article.author}</span>
          <span>{article.readingTime} min read</span>
        </div>
        <div className="mt-3 pt-3 border-t">
          <Link href={`/blog/${article.slug}`} className="text-primary font-semibold hover:underline">
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
