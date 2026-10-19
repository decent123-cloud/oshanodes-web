import ProductCard from '../../components/ProductCard'
import ContactForm from '../../components/ContactForm'

export const metadata = { title: 'Products — Oshanodes Agro', description: 'Value-added staple foods and practical food-processing innovation from Oshanodes.' }

export default function Products(){
  const products = [
    {
      title: 'Rice',
      desc: 'A value-added staple, developed to bring quality and convenience to everyday meals.',
      src: '/images/products/rice.jpg'
    },
    {
      title: 'Beans',
      desc: 'No stomach upset and cramp-free beans. Protein-rich staple added to our growing range of improved everyday foods.',
      src: '/images/products/beans.png'
    },
    {
      title: 'Corn Flour',
      desc: 'Makes perfectly smooth fufu, improves gut health, and gives you long-lasting body energy.',
      src: '/images/products/corn-flour.png'
    },
    {
      title: 'Coming Soon',
      desc: 'Protein category.',
      src: '/images/products/chicken.png'
    }
  ]

  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="section-kicker">Our products</p>
          <h1 className="section-title">Everyday staples.<br />Improved with purpose.</h1>
          <p className="section-copy">Explore value-added rice and beans, along with practical technology developed to address challenges across the food chain.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} title={product.title} desc={product.desc} src={product.src} />
          ))}
        </div>
      </section>

      <section className="bg-white/75 py-16 md:py-20">
        <div className="container grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">For homes & businesses</p>
            <h2 className="section-title text-4xl md:text-5xl">Let’s find the right supply for you.</h2>
            <p className="section-copy">Tell us what you need and our team will follow up about availability and ordering.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
