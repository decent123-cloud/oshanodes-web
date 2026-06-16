"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const items = [
  {label:'Sustainable Farming', value:120},
  {label:'Quality Produce', value:98},
  {label:'Community Impact', value:45},
  {label:'Trusted Agriculture', value:20}
]

function Counter({value}:{value:number}){
  const [n,setN]=useState(0)

  useEffect(()=>{
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
  },[value])

  return <span className="text-3xl font-bold">{n}</span>
}

export default function Stats(){
  return (
    <section className="py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((it)=> (
          <motion.div key={it.label} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white p-6 rounded shadow text-center">
            <Counter value={it.value} />
            <div className="mt-2 text-sm">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
