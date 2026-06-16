"use client"
import { motion } from 'framer-motion'

export default function ProductCard({title,desc,src}:{title:string;desc:string;src?:string}){
  return (
    <motion.article whileHover={{y:-6}} className="bg-white rounded shadow overflow-hidden">
      {src && <img src={src} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-sm">{desc}</p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-primary text-white rounded">Enquire</button>
        </div>
      </div>
    </motion.article>
  )
}
