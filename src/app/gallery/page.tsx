export const metadata = {
  title: 'Gallery — Oshanodes Agro',
  description: 'Explore photos of our sustainable rice and bean farms, harvests, and community work.',
  openGraph: {
    title:'Gallery — Oshanodes Agro',
    description:'Explore photos of our sustainable rice and bean farms, harvests, and community work.',
    type:'website',
    images:[{url:'/images/oshanodes 5.jpg', alt:'Rice farming gallery'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'Gallery — Oshanodes Agro',
    description:'Explore photos of our sustainable rice and bean farms, harvests, and community work.',
    images:['/images/oshanodes 5.jpg']
  }
}

const galleryItems = [
    {
        src: 'marketing-flier-1.jpeg', label: 'marketing flier' },
  {src:'oshanodes 6.jpg', label:'research and development'},
  {src:'oshanodes 7.jpg', label:'volunteers, welcome!!!'},
  {src:'oshanodes 10.jpg', label:'Our priority'},
  {src:'oshanodes 11.jpg', label:'Quality Inspection'},
  {src:'oshanodes 12.jpg', label:'price tags'},
  {src:'oshanodes 13.jpg', label:'Crop Care'},
  {src:'oshanodes 6.jpg', label:'Team Members'},
]

export default function Gallery(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-3 text-sm text-slate-600">Browse our farm operations, community partnerships, harvest moments, and sustainable practices.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div key={item.src} className={`overflow-hidden rounded-xl shadow-lg ${index%3===0 ? 'lg:col-span-2' : ''}`}>
            <img src={`/images/${item.src}`} alt={item.label} className="w-full h-72 object-cover" />
            <div className="bg-white p-4">
              <p className="font-semibold">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
