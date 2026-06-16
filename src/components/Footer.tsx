import Link from "next/link"

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg text-primary">Oshanodes Agro</h3>
          <p className="mt-2 text-sm">Rebuilding the Food System Through Sustainable Agriculture</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm">Email: oshanodestech@gmail.com</p>
          <p className="text-sm">Phone: +234 705 360 1636</p>
          <p className="text-sm">Location: Benue Valley, Nigeria</p>
        </div>
        <div>
          <h4 className="font-semibold">Social</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noreferrer" className="text-primary">Facebook</a></li>
            <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="text-primary">Twitter</a></li>
            <li><a href="https://www.instagram.com/yourhandle" target="_blank" rel="noreferrer" className="text-primary">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noreferrer" className="text-primary">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 text-sm py-3 text-center">© {new Date().getFullYear()} Oshanodes Agro. All rights reserved.</div>
    </footer>
  )
}
