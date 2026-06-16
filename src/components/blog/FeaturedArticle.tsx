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
      className="relative min-h-[500px] rounded-lg overflow-hidden"
    >
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-6 md:p-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-gold mb-3">
            Featured: {CATEGORY_LABELS[article.category]}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            {article.title}
          </h2>
          <p className="text-lg text-white/90 mb-4 max-w-2xl">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-6">
            <span>{article.author}</span>
            <span>•</span>
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded hover:bg-gold transition-colors"
          >
            Read Full Article
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
