"use client"
import { motion } from 'framer-motion'
import { Article, CATEGORY_LABELS } from '@/types/article'
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useState } from 'react'

interface ArticleHeaderProps {
  article: Article
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  const [shareOpen, setShareOpen] = useState(false)
  const articleUrl = `https://oshanodes.com/blog/${article.slug}`
  const shareText = `${article.title} - Read on Oshanodes Agro Blog`

  return (
    <>
      <motion.img
        src={article.image}
        alt={article.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 h-[280px] w-full rounded-[28px] object-cover shadow-[0_25px_60px_-35px_rgba(10,67,37,0.4)] sm:h-[380px] md:h-[480px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-900/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
            {CATEGORY_LABELS[article.category]}
          </span>
          <span className="text-sm text-slate-500">
            {article.readingTime} min read
          </span>
        </div>

        <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#16372c] md:text-6xl">{article.title}</h1>

        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-text">By {article.author}</p>
            <p className="text-sm text-slate-500">
              {new Date(article.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShareOpen(!shareOpen)}
              className="flex items-center gap-2 rounded-full border border-emerald-900/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-emerald-50"
              aria-label="Share article"
            >
              <Share2 size={20} />
              Share
            </button>
            {shareOpen && (
              <div className="absolute left-0 top-12 z-10 flex gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 hover:bg-gray-100"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} className="text-blue-600" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${articleUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 hover:bg-gray-100"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} className="text-blue-400" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 hover:bg-gray-100"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} className="text-blue-700" />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}
