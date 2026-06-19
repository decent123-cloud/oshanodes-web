"use client"
import Image from 'next/image'
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex flex-wrap items-center justify-between h-16 gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/oshanodes logo 5.jpeg"
            alt="Oshanodes Agro Logo"
            width={48}
            height={48}
            className="w-10 h-10 rounded-full object-cover bg-white p-1 shadow-sm"
          />
          <span className="font-bold text-green-700 text-xs sm:text-sm md:text-base">
            Oshanodes Agro
          </span>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <nav className="hidden md:flex flex-wrap gap-4 items-center text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="px-4 py-2 bg-primary text-white rounded">Contact</Link>
        </nav>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-3">
            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">About</Link>
            <Link href="/products" className="block">Products</Link>
            <Link href="/sustainability" className="block">Sustainability</Link>
            <Link href="/gallery" className="block">Gallery</Link>
            <Link href="/blog" className="block">Blog</Link>
            <Link href="/contact" className="block">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
