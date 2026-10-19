export const metadata = { title: 'Our Impact — Oshanodes Agro', description: 'How Oshanodes aims to strengthen food security and create more value from local crops.' }

export default function Sustainability(){
  const commitments = [
    { number: '01', title: 'Food value', text: 'Improving everyday staples can help consumers get more value from locally produced crops.' },
    { number: '02', title: 'Food security', text: 'We aim to support access to more nutritious, convenient staple foods through practical innovation.' },
    { number: '03', title: 'Local solutions', text: 'Agricultural and processing technologies can address challenges across the food value chain.' },
  ]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0a4325]">
        <img src="/images/brand/rice_farm.png" alt="Lush rice field growing in the sun" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082c1b]/95 via-[#0b3c24]/80 to-[#0b3c24]/45" />
        <div className="container relative py-20 text-white md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7b36b]">Our impact</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] md:text-6xl">More value from the foods we rely on.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">We focus on real consumer needs, improving local staples and developing practical solutions that can strengthen food security.</p>
        </div>
      </section>
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="section-kicker">Our commitments</p>
          <h2 className="section-title text-4xl md:text-5xl">Innovation with value beyond the product.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {commitments.map((item) => (
            <article key={item.number} className="premium-card rounded-[28px] p-7 md:p-8">
              <span className="text-xs font-extrabold tracking-[0.24em] text-[#0f5c32]">{item.number}</span>
              <h3 className="mt-7 text-2xl font-bold tracking-[-0.05em] text-[#16372c]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container pb-16 md:pb-24">
        <div className="grid overflow-hidden rounded-[32px] bg-[#0f5c32] lg:grid-cols-2">
          <img src="/images/products/rice.jpg" alt="Oshanodes rice product" className="h-72 w-full object-cover lg:h-full" />
          <div className="p-8 text-white md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7b36b]">From local crops to better foods</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] md:text-4xl">Progress shaped by real needs.</h2>
            <p className="mt-4 leading-7 text-white/75">We research, develop, test, and refine products with consumer feedback—building solutions around the everyday challenges people experience with staple foods.</p>
            <a href="/contact" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0f5c32] transition hover:bg-emerald-50">Partner with us</a>
          </div>
        </div>
      </section>
    </>
  )
}
