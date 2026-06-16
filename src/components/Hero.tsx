"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero(){
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/oshanodes 1.jpg"
          alt="Sunrise over a rice farm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/65 mix-blend-multiply" />
      </div>

      <div className="relative container min-h-[calc(100vh-4rem)] flex items-center">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="max-w-2xl text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Sustainable Rice & Beans</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">Rebuilding the Food System Through Sustainable Agriculture</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">Oshanodes Agro produces premium rice and beans through sustainable farming practices that nourish communities and protect the environment.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded shadow">Explore Products</Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
