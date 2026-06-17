import Team from '@/components/Team'

export const metadata = {
  title: 'About — Oshanodes Agro',
  description: 'Learn about Oshanodes Agro, our mission, vision, and sustainable farming history.',
  openGraph: {
    title: 'About — Oshanodes Agro',
    description: 'Learn about Oshanodes Agro, our mission, vision, and sustainable farming history.',
    type:'website',
    images:[{url:'/images/founder .png', alt:'Oshanodes Agro Founder'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'About — Oshanodes Agro',
    description:'Learn about Oshanodes Agro, our mission, vision, and sustainable farming history.',
    images:['/images/founder .png']
  }
}

export default function About(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">About Oshanodes Agro</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
        <img src="/images/founder .png" alt="Oshanodes Agro Founder" className="w-full rounded shadow" />
        <div>
          <p>Oshanodes Agro is committed to sustainable farming practices that protect ecosystems while delivering premium rice and beans to communities.</p>
          <h3 className="mt-6 font-semibold">Mission</h3>
          <p>To provide healthy, high-quality agricultural products through sustainable and environmentally responsible farming practices.</p>
          <h3 className="mt-6 font-semibold">Vision</h3>
          <p>To become a trusted agricultural brand in West Africa by leading with innovation, quality, and community impact.</p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-bold">Our Journey</h2>
        <div className="mt-8 space-y-8">
          {[
            {year:'2018', title:'Founded', details:'Oshanodes Agro started with a small sustainable rice farm in the Benue Valley.'},
            {year:'2020', title:'Expanded', details:'We expanded production to include beans while refining sustainable land practices.'},
            {year:'2022', title:'Community Growth', details:'Partnered with local cooperatives to improve supply chain and community livelihoods.'},
            { year: '2024', title: 'Modern Farming', details: 'Invested in modern processing and quality control for premium rice and beans.' },
            { year: '2025', title: 'Sustainability Leader', details: 'Recognized for our commitment to sustainability and community impact in agriculture.' },
            { year: '2026', title: 'Future Growth', details: 'massive sales and Planning to expand into new markets and continue innovating in sustainable farming.' }
          ].map(item => (
            <div key={item.year} className="flex gap-4 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold">{item.year}</div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <Team />

    </section>
  )
}
