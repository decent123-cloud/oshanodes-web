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
      className="prose prose-lg max-w-none space-y-6 text-text [&_li]:leading-8 [&_p]:text-[1.075rem] [&_p]:leading-9 [&_ul]:my-6 [&_ul]:space-y-3"
    >
      {paragraphs.map((para, idx) => {
        if (para.startsWith('-')) {
          const items = para.split('\n').filter(item => item.startsWith('-'))
          return (
            <ul key={idx} className="ml-4 list-disc space-y-2 marker:text-primary">
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
