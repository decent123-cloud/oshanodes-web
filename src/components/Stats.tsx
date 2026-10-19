"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const items = [
  { label: 'Distributed to', value: 3, suffix: ' Cities' },
  { label: 'Staple food products', value: 4 },
  { label: 'Making Impact Since', value: 2024 },
  { label: 'Machines Prototyped', value: 2 },
]

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    let start = 0
    const dur = 1200
    const step = Math.max(1, Math.ceil(value / 60))
    const interval = setInterval(() => {
      start += step
      if (start >= value) {
        setN(value)
        clearInterval(interval)
      } else {
        setN(start)
      }
    }, dur / 60)
    return () => clearInterval(interval)
  }, [value])

  return <span className="text-4xl font-extrabold tracking-[-0.06em] text-[#123928]">{n}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-4">
      <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card rounded-[24px] p-7 text-center"
          >
            <Counter value={item.value} suffix={item.suffix} />
            <div className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
