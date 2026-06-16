"use client"
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visiblePages = pages.filter(p => {
    if (p === 1 || p === totalPages) return true
    if (p >= currentPage - 1 && p <= currentPage + 1) return true
    return false
  })

  return (
    <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
      {currentPage > 1 && (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="p-2 rounded border hover:bg-gray-100 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </Link>
      )}

      {visiblePages[0] > 1 && (
        <>
          <Link href={`${baseUrl}?page=1`} className="px-3 py-2 rounded hover:bg-gray-100">
            1
          </Link>
          {visiblePages[0] > 2 && <span className="px-2">...</span>}
        </>
      )}

      {visiblePages.map(page => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          className={`px-3 py-2 rounded transition-colors ${
            page === currentPage
              ? 'bg-primary text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </Link>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2">...</span>
          )}
          <Link
            href={`${baseUrl}?page=${totalPages}`}
            className="px-3 py-2 rounded hover:bg-gray-100"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="p-2 rounded border hover:bg-gray-100 transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </Link>
      )}
    </div>
  )
}
