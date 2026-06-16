import Image from 'next/image'

export default function Team(){
  const cofounders = [
    {name: 'Co-founder 1', role: 'Co-founder', img: '/images/cofounder .png'},
    {name: 'Co-founder 2', role: 'Co-founder', img: '/images/cofounder 2.jpg'},
    {name: 'Co-founder 3', role: 'Co-founder', img: '/images/cofounder3.jpg'}
  ]

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold">Our Team & Supporters</h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3 items-start">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold">Funder</h3>
          <div className="mt-4 flex flex-col items-center text-center">
            <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-100">
              <Image src="/images/founder .png" alt="Funder" width={176} height={176} className="object-cover" />
            </div>
            <p className="mt-4 font-semibold">Funder Name</p>
            <p className="text-sm text-slate-600">Strategic partner and seed funder</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">Co-founders</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {cofounders.map((c) => (
              <div key={c.name} className="flex items-center gap-4 bg-white p-4 rounded shadow">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                  <Image src={c.img} alt={c.name} width={80} height={80} className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-slate-600">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">Replace the placeholder images in /public/images with the actual photos: funder.jpg, cofounder1.jpg, cofounder2.jpg, cofounder3.jpg.</p>
        </div>
      </div>
    </section>
  )
}
