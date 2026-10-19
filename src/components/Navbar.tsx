"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/sustainability', label: 'Sustainability' },
  // { href: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f9f7f3]/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-emerald-900/10 bg-white p-1 shadow-sm">
            <Image
              src="/images/brand/logo.jpeg"
              alt="Oshanodes Agro Logo"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-900/60">Agro</div>
            <div className="text-lg font-extrabold tracking-[-0.05em] text-[#123928]">Oshanodes</div>
          </div>
        </Link>

        <button
          className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-emerald-900">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#0f5c32] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(15,92,50,0.85)] transition hover:bg-[#0e4f2d]">
            Contact
          </Link>
        </nav>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="py-1.5 text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0f5c32] px-4 py-2.5 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
