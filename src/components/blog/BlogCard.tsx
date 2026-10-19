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
      whileHover={{ y: -5 }}
      className="h-full overflow-hidden rounded-[24px] border border-emerald-900/5 bg-white shadow-[0_18px_42px_-30px_rgba(10,67,37,0.35)] transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(10,67,37,0.4)]"
    >
      <Link href={`/blog/${article.slug}`} className="block overflow-hidden bg-[#edf4ed]">
        <img
          src={article.image}
          alt={article.title}
          className="h-52 w-full object-cover transition duration-500 hover:scale-[1.03]"
          onError={(event) => {
            const target = event.currentTarget as HTMLImageElement
            target.src = '/images/brand/rice_farm.png'
          }}
        />
      </Link>
      <div className="flex h-[calc(100%-13rem)] flex-col p-5 md:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
            {CATEGORY_LABELS[article.category]}
          </span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-extrabold leading-snug tracking-[-0.04em] text-[#16372c] transition-colors hover:text-primary">
            {article.title}
          </h3>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span>{article.author}</span>
          <span>{article.readingTime} min read</span>
        </div>
        <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex text-sm font-bold text-primary hover:text-[#0a4325]">
          Read article <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </motion.article>
  )
}
