import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'
import { getLatestArticles } from '@/data/articles'
import BlogCard from '@/components/blog/BlogCard'

export const metadata = {
  title: 'Oshanodes Agro',
  description: 'Oshanodes Agro produces premium rice and beans through sustainable farming practices in Nigeria.'
}

export default function Home(){
  const latestArticles = getLatestArticles(3)
  const featuredProducts = [
    {
      title: 'Rice',
      desc: 'Premium locally cultivated rice grown using sustainable methods and carefully processed for quality.',
      src: '/images/oshanodes 3.jpg'
    },
    {
      title: 'Beans',
      desc: 'High-quality nutrient-rich beans carefully cultivated and processed for everyday meals and trade.',
      src: '/images/beans.png'
    },
    {
      title: 'Fresh Produce',
      desc: 'A vibrant selection of farm produce sourced with care and delivered with consistency.',
      src: '/images/marketing-flier-1.jpeg'
    }
  ]
                                                                           
  return (
    <>
      <Hero />
      <section className="container py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Trusted Agriculture</p>
            <h2 className="text-3xl font-bold">Sustainable rice and beans grown for communities.</h2>
          </div>
          <Link href="/about" className="inline-block rounded bg-primary px-5 py-3 text-white">Learn More</Link>
        </div>
      </section>

      <section className="container py-12">
        <h3 className="text-2xl font-semibold">Our Impact</h3>
        <Stats />
      </section>

      <section className="container py-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Products</p>
            <h3 className="text-3xl font-semibold text-slate-900">Modern agricultural products presented with clarity and care.</h3>
          </div>
          <Link href="/products" className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">
            View All Products
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} title={product.title} desc={product.desc} src={product.src} />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h3 className="text-2xl font-semibold">Why Oshanodes Agro</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded bg-white p-6 shadow">Organic farming practices</div>
          <div className="rounded bg-white p-6 shadow">Quality rice and beans</div>
          <div className="rounded bg-white p-6 shadow">Community-first agriculture</div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary/10 to-transparent py-12">
        <div className="container">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Knowledge Hub</p>
            <h2 className="text-3xl font-bold">Latest Agricultural Insights</h2>
            <p className="mt-2 text-lg text-slate-600">Discover expert knowledge on sustainable farming, rice cultivation, beans production, and agricultural innovation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestArticles.map(article => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-block px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-darkgreen transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
