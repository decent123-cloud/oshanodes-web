"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProductCard({ title, desc, src }: { title: string; desc: string; src?: string }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-emerald-900/5 bg-white shadow-[0_20px_50px_-28px_rgba(10,67,37,0.28)]"
    >
      <div className="overflow-hidden bg-[#eef4ee] p-4">
        {src ? (
          <img
            src={src}
            alt={title}
            className="h-64 w-full rounded-[20px] object-contain transition duration-500 group-hover:scale-[1.03]"
            onError={(event) => {
              const target = event.currentTarget as HTMLImageElement
              target.src = '/images/brand/rice_farm.png'
            }}
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center rounded-[20px] bg-gradient-to-br from-emerald-100 to-emerald-50 text-sm font-semibold text-emerald-800">
            Product image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold tracking-[-0.05em] text-slate-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{desc}</p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-emerald-900/10 bg-[#f4faf5] px-4 py-2.5 text-sm font-semibold text-[#0f5c32] transition hover:bg-[#eaf5ec]">
            Enquire
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
