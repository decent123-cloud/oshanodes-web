import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ProductCard from '../components/ProductCard'
import Team from '../components/Team'
import Link from 'next/link'

export const metadata = {
  title: 'Oshanodes Agro',
  description: 'Oshanodes transforms locally produced crops into improved staple foods through consumer-led innovation.'
}

export default function Home() {
  const featuredProducts = [
    {
      title: 'Premium Rice',
      desc: 'Value-added rice developed to bring greater quality and convenience to an everyday staple.',
      src: '/images/products/rice.jpg'
    },
    {
      title: 'Beans',
      desc: 'A familiar staple, thoughtfully developed for households and everyday meals.',
      src: '/images/products/beans.png'
    },
    {
      title: 'Corn Flour',
      desc: 'Makes perfectly smooth fufu, improves gut health, and gives you long-lasting body energy.',
      src: '/images/products/corn-flour.png'
    }
  ]

  const values = [
    {
      title: 'Consumer-first thinking',
      text: 'We start with everyday food challenges and build products around what people need.'
    },
    {
      title: 'Research-led innovation',
      text: 'We research, test, and refine safe, natural ways to make staple foods better.'
    },
    {
      title: 'More value from local crops',
      text: 'We improve locally produced staples and develop practical solutions across the food chain.'
    }
  ]

  return (
    <>
      <Hero />

      <nav aria-label="Home page sections" className="container pt-8">
        <div className="flex flex-wrap gap-3">
          <a href="#why-oshanodes" className="inline-flex rounded-full border border-emerald-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c32] transition hover:bg-emerald-50">Why Oshanodes</a>
          <a href="#home-products" className="inline-flex rounded-full border border-emerald-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c32] transition hover:bg-emerald-50">Our products</a>
          <a href="#home-impact" className="inline-flex rounded-full border border-emerald-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c32] transition hover:bg-emerald-50">Our impact</a>
          <a href="#team" className="inline-flex rounded-full bg-[#0f5c32] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a4325]">Meet the team</a>
        </div>
      </nav>

      <section id="why-oshanodes" className="scroll-mt-24 container py-16 md:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-kicker">Why Oshanodes</p>
            <h2 className="section-title">Food innovation that starts with everyday needs.</h2>
          </div>
          <p className="section-copy lg:mb-2">
            We bring together food research, agriculture, and technology to turn local crops into improved, value-added foods shaped by consumer needs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="premium-card rounded-[28px] p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7ee] text-lg font-bold text-[#0f5c32]">✓</div>
              <h3 className="text-2xl font-bold tracking-[-0.05em] text-[#16372c]">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="home-products" className="scroll-mt-24 bg-white/75 py-16 md:py-20">
        <div className="container">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Our products</p>
              <h2 className="section-title text-4xl md:text-5xl">Everyday staples, thoughtfully improved.</h2>
            </div>
            <Link href="/products" className="inline-flex items-center justify-center rounded-full border border-[#0f5c32]/10 bg-[#f2faf3] px-5 py-2.5 text-sm font-semibold text-[#0f5c32] transition hover:bg-[#e7f4eb]">
              View all products
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.title} title={product.title} desc={product.desc} src={product.src} />
            ))}
          </div>
        </div>
      </section>

      <section id="home-impact" className="scroll-mt-24 container py-16 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Our impact</p>
          <h2 className="section-title text-4xl md:text-5xl">Growing value through food innovation.</h2>
        </div>
        <Stats />
      </section>

      <Team />
    </>
  )
}
