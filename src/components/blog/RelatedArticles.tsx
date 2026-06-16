"use client"
import { motion } from 'framer-motion'
import { Article } from '@/types/article'
import BlogCard from './BlogCard'

interface RelatedArticlesProps {
  articles: Article[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null

  return (
    <section className="mt-12 border-t pt-8">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <BlogCard article={article} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
