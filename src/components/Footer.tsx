import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-white/80">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold tracking-[-0.05em] text-[#123928]">Oshanodes</div>
          <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
            Improving everyday staple foods through consumer-led research and practical innovation.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/sustainability">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>Email: oshanodestech@gmail.com</li>
            <li>Phone: +234 8149597806</li>
            <li>Minna, Niger State, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Oshanodes Agro. All rights reserved.
      </div>
    </footer>
  )
}
