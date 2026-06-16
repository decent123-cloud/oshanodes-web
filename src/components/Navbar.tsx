"use client"
import Image from 'next/image'
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
  <Image
    src="/images/oshanodes logo 5.jpeg"
    alt="Oshanodes Agro Logo"
    width={90}
    height={90}
  />
  <span className="font-bold text-green-700">
    Oshanodes Agro
  </span>
</div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="px-4 py-2 bg-primary text-white rounded">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/sustainability">Sustainability</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
