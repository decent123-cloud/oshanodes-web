"use client"
import { motion } from 'framer-motion'

interface ArticleContentProps {
  content: string
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const paragraphs = content.split('\n\n')

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="prose prose-lg max-w-none text-text space-y-4"
    >
      {paragraphs.map((para, idx) => {
        if (para.startsWith('-')) {
          const items = para.split('\n').filter(item => item.startsWith('-'))
          return (
            <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
              {items.map((item, i) => (
                <li key={i} className="text-slate-700">
                  {item.replace(/^-\s*/, '')}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={idx} className="text-slate-700 leading-relaxed">
            {para}
          </p>
        )
      })}
    </motion.article>
  )
}
