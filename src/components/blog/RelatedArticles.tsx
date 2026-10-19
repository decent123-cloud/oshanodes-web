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
    <section className="mt-16 border-t border-slate-200 pt-10">
      <h3 className="mb-7 text-3xl font-extrabold tracking-[-0.05em] text-[#16372c]">Keep reading</h3>
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
