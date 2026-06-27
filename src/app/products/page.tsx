import ProductCard from '../../components/ProductCard'
import ContactForm from '../../components/ContactForm'

export const metadata = { title: 'Products — Oshanodes Agro', description: 'Rice and Beans from Oshanodes Agro.' }

export default function Products(){
  const products = [
    {
      title: 'Rice',
      desc: 'Premium quality, carefully processed, sustainably grown and ready for bulk orders.',
      src: '/images/oshanodes 3.jpg'
    },
    {
      title: 'Beans',
      desc: 'High protein, nutrient rich, sustainably produced, and trusted by communities nationwide.',
      src: '/images/beans.png'
    },
    {
      title: 'Fresh Produce',
      desc: 'A dependable range of fresh farm produce sourced with attention to quality and consistency.',
      src: '/images/marketing-flier-1.jpeg'
    }
  ]

  return (
    <section className="container py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Products</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Premium agricultural products, showcased in a modern gallery.</h1>
        <p className="mt-3 text-lg text-slate-600">Each product is presented with the same polished layout so inquiries feel clear, professional, and easy to act on.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} title={product.title} desc={product.desc} src={product.src} />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Product Inquiry</h2>
        <div className="mt-4 md:w-2/3">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
