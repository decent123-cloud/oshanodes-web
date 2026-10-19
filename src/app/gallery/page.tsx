export const metadata = {
  title: 'Gallery — Oshanodes Agro',
  description: 'Explore photos of our sustainable rice and bean farms, harvests, and community work.',
  openGraph: {
    title:'Gallery — Oshanodes Agro',
    description:'Explore photos of our sustainable rice and bean farms, harvests, and community work.',
    type:'website',
    images:[{url:'/images/brand/rice_farm.png', alt:'Rice farming gallery'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'Gallery — Oshanodes Agro',
    description:'Explore photos of our sustainable rice and bean farms, harvests, and community work.',
    images:['/images/brand/rice_farm.png']
  }
}

const galleryItems = [
  { src: '/images/brand/rice_farm.png', label: 'Rice farm view' },
  { src: '/images/products/rice.jpg', label: 'Premium rice' },
  { src: '/images/products/beans.png', label: 'Quality beans' },
  { src: '/images/rice_9x16_shots/jollof_rice.jpeg', label: 'Jollof rice' },
  { src: '/images/rice_9x16_shots/prepared_rice_and_beans.jpeg', label: 'Rice and beans' },
  { src: '/images/rice_9x16_shots/prepared_rice_and_egg.jpeg', label: 'Rice and egg' },
  { src: '/images/brand/logo.jpeg', label: 'Brand identity' },
]

export default function Gallery(){
  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">The Oshanodes story</p>
            <h1 className="section-title">Rooted in the land.<br />Made for the table.</h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600 md:pb-2">A closer look at our farms, the food we grow, and the moments that bring it all together.</p>
        </div>
        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <figure key={item.src} className={`group relative overflow-hidden rounded-[24px] bg-emerald-950 shadow-[0_18px_42px_-28px_rgba(10,67,37,0.4)] ${index === 0 ? 'sm:row-span-2 sm:h-auto' : ''}`}>
              <img src={item.src} alt={item.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-lg font-bold text-white">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
