"use client"
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative rounded-full bg-white shadow-[0_16px_38px_-28px_rgba(0,0,0,0.45)]">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border border-white/70 bg-white px-5 py-3.5 pr-14 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-800/30 focus:ring-4 focus:ring-white/20"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f5c32] text-white transition hover:bg-[#0a4325]"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </form>
  )
}
