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
        className="w-full h-96 object-cover rounded-lg mb-8"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-wider font-bold text-primary bg-primary/10 px-3 py-1 rounded">
            {CATEGORY_LABELS[article.category]}
          </span>
          <span className="text-sm text-slate-500">
            {article.readingTime} min read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b">
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
              className="flex items-center gap-2 text-primary hover:text-darkgreen transition-colors"
              aria-label="Share article"
            >
              <Share2 size={20} />
              Share
            </button>
            {shareOpen && (
              <div className="absolute top-10 left-0 bg-white rounded shadow-lg p-3 z-10 flex gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:bg-gray-100 rounded"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} className="text-blue-600" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${articleUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:bg-gray-100 rounded"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} className="text-blue-400" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:bg-gray-100 rounded"
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
