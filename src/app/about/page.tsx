import Team from '@/components/Team'

export const metadata = {
  title: 'About — Oshanodes Agro',
  description: 'Meet Oshanodes, a food innovation company improving staple foods through research and consumer feedback.',
  openGraph: {
    title: 'About — Oshanodes Agro',
    description: 'Meet Oshanodes, a food innovation company improving staple foods through research and consumer feedback.',
    type:'website',
    images:[{url:'/images/team/founder%20.png', alt:'Oshanodes Agro Founder'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'About — Oshanodes Agro',
    description:'Meet Oshanodes, a food innovation company improving staple foods through research and consumer feedback.',
    images:['/images/team/founder%20.png']
  }
}

export default function About(){
  return (
    <>
      <section id="about" className="container py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="section-kicker">About Oshanodes Agro</p>
            <h1 className="section-title">Improving staples.<br />Solving real needs.</h1>
            <p className="section-copy">
              Oshanodes turns locally produced crops into improved foods, using research and consumer feedback to make everyday staples better.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/products" className="inline-flex rounded-full bg-[#0f5c32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a4325]">Explore our products</a>
              <a href="/contact" className="inline-flex rounded-full border border-emerald-900/15 bg-white px-6 py-3 text-sm font-semibold text-[#0f5c32] transition hover:bg-emerald-50">Get in touch</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] bg-[#eaf0e8] p-3 shadow-[0_30px_70px_-35px_rgba(10,67,37,0.35)]">
            <img src="/images/team/founder%20.png" alt="Oshanodes Agro Founder" className="h-[420px] w-full rounded-[24px] object-cover object-top" />
            <div className="absolute bottom-7 left-7 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f5c32]">Our purpose</p>
              <p className="mt-1 font-semibold text-[#16372c]">Better staples through innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="About page sections" className="container -mt-4 pb-12 md:-mt-8">
        <div className="flex flex-wrap gap-3">
          <a href="#mission" className="inline-flex rounded-full border border-emerald-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c32] transition hover:bg-emerald-50">Mission &amp; vision</a>
          <a href="#journey" className="inline-flex rounded-full border border-emerald-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c32] transition hover:bg-emerald-50">Our journey</a>
          <a href="#team" className="inline-flex rounded-full bg-[#0f5c32] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a4325]">Meet the team</a>
        </div>
      </nav>

      <section id="mission" className="scroll-mt-24 bg-white/75 py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="premium-card rounded-[28px] p-8 md:p-10">
              <p className="section-kicker">Our mission</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#16372c]">Better staples, built around people.</h2>
              <p className="mt-4 leading-7 text-slate-600">To transform local crops into healthier, more convenient foods through safe, research-led innovation.</p>
            </div>
            <div className="rounded-[28px] bg-[#0f5c32] p-8 text-white shadow-[0_22px_50px_-32px_rgba(10,67,37,0.7)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7b36b]">Our vision</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em]">A trusted African food innovator.</h2>
              <p className="mt-4 leading-7 text-white/75">To solve real food challenges, add value to local crops, and strengthen food security through trusted products.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 container py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="section-kicker">Our journey</p>
          <h2 className="section-title text-4xl md:text-5xl">Progress, rooted in purpose.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {year:'2024', title:'Research begins', details:'Work began on combining technology, agriculture, and practical food problem-solving.'},
            {year:'2026', title:'First product launch', details:'Oshanodes launched its first commercial rice product on 2 February.'},
            { year: '2026', title: 'New solutions', details: 'Beans joined the portfolio, alongside development of the Oshkon grain-preservation machine.' }
          ].map(item => (
            <div key={item.year} className="premium-card rounded-[24px] p-7">
              <span className="text-sm font-extrabold tracking-[0.2em] text-[#0f5c32]">{item.year}</span>
              <h3 className="mt-4 text-xl font-bold text-[#16372c]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <Team />
    </>
  )
}
