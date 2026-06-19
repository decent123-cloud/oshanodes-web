"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero(){
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/oshanodes 1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-primary/65 mix-blend-multiply" />

      <div className="relative container min-h-[calc(100vh-4rem)] flex items-center">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="max-w-xl sm:max-w-2xl text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Sustainable Rice & Beans</p>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-extrabold leading-tight hero-title">Rebuilding the Food System Through Sustainable Agriculture</h1>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/products" className="inline-flex min-w-[160px] items-center justify-center px-5 py-3 bg-white text-primary rounded shadow">Explore Products</Link>
            <Link href="/contact" className="inline-flex min-w-[160px] items-center justify-center px-5 py-3 border border-white text-white rounded">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
