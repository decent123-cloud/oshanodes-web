import ProductCard from '../../components/ProductCard'
import ContactForm from '../../components/ContactForm'

export const metadata = { title: 'Products — Oshanodes Agro', description: 'Rice and Beans from Oshanodes Agro.' }

export default function Products(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <ProductCard title="Rice" desc="Premium quality, carefully processed, sustainably grown." src="/images/oshanodes 3.jpg" />
          <div className="mt-6">
            <h3 className="font-semibold">Benefits</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>Premium quality</li>
              <li>Carefully processed</li>
              <li>Sustainably grown</li>
            </ul>
          </div>
        </div>
        <div>
          <ProductCard title="Beans" desc="High protein, nutrient rich, sustainably produced." src="/images/oshanodes 4.jpg" />
          <div className="mt-6">
            <h3 className="font-semibold">Benefits</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>High protein</li>
              <li>Nutrient rich</li>
              <li>Carefully selected</li>
            </ul>
          </div>
        </div>
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
