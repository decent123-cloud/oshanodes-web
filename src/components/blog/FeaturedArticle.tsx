"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Article, CATEGORY_LABELS } from '@/types/article'

export default function FeaturedArticle({ article }: { article: Article }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[520px] overflow-hidden rounded-[30px] bg-[#0a4325] shadow-[0_30px_65px_-38px_rgba(10,67,37,0.5)]"
    >
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071f14]/95 via-[#0a4325]/40 to-transparent" />
      
      <div className="relative flex min-h-[520px] flex-col justify-end p-7 text-white md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.24em] text-[#e7d9a5]">
            Featured: {CATEGORY_LABELS[article.category]}
          </span>
          <h2 className="mb-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.05em] sm:text-4xl md:text-5xl">
            {article.title}
          </h2>
          <p className="mb-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {article.excerpt}
          </p>
          <div className="mb-6 flex flex-wrap gap-4 text-sm text-white/70">
            <span>{article.author}</span>
            <span>•</span>
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-[#f3e8c7]"
          >
            Read Full Article
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
