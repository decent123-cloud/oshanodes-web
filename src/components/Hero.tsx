"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      <Image
        src="/images/brand/rice_farm.png"
        alt="Rice field at sunrise"
        fill
        priority
        className="object-cover opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2015]/90 via-[#0d2015]/60 to-[#0d2015]/30" />

      <div className="container relative z-10 py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl text-white"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e7d9a5]">Consumer-led food innovation</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[0.97] tracking-[-0.06em] md:text-6xl lg:text-[5rem]">
            Better staple foods, made around you.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
            We turn local crops into improved everyday foods through research, practical innovation, and customer feedback.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f5c32] shadow-lg shadow-black/15 transition hover:bg-emerald-50">
              Explore Products
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
