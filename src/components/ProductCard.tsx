"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProductCard({ title, desc, src }: { title: string; desc: string; src?: string }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-[0_12px_30px_-16px_rgba(15,118,110,0.28)] transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(15,118,110,0.35)]"
    >
      <div className="flex items-center justify-center overflow-hidden bg-emerald-50/80 p-4 sm:p-5">
        {src ? (
          <img
            src={src}
            alt={title}
            className="h-56 w-full object-contain transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-56 w-full items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-sm font-semibold text-emerald-800">
            Product image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{desc}</p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Enquire
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
