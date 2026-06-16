export const metadata = { title: 'Sustainability — Oshanodes Agro', description: 'Our sustainability practices and community impact.' }

export default function Sustainability(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Sustainability</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Sustainable Farming</h3>
          <p className="mt-2">We use organic practices, crop rotation, and reduced-chemical methods to protect soil health.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Water Conservation</h3>
          <p className="mt-2">Efficient irrigation and water management reduce waste and maximize yields.</p>
        </div>
      </div>
    </section>
  )
}
