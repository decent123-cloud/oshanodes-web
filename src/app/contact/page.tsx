import ContactForm from '../../components/ContactForm'

export const metadata = { title: 'Contact — Oshanodes Agro', description: 'Contact Oshanodes Agro for partnerships and inquiries.' }

export default function Contact(){
  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="section-kicker">Contact</p>
          <h1 className="section-title">Good things grow<br />through conversation.</h1>
          <p className="section-copy">Questions about our products, partnerships, or supply? We’d be glad to hear from you.</p>
        </div>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[28px] bg-[#0f5c32] p-8 text-white shadow-[0_24px_60px_-35px_rgba(10,67,37,0.65)]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7b36b]">Get in touch</p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.04em]">We’re here to help.</h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Email</p>
                <a href="mailto:oshanodestech@gmail.com" className="mt-1 inline-block font-medium hover:text-[#d7b36b]">oshanodestech@gmail.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Phone</p>
                <a href="tel:+2347053601636" className="mt-1 inline-block font-medium hover:text-[#d7b36b]">+234 705 360 1636</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Location</p>
                <p className="mt-1 font-medium">Benue Valley, Nigeria</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
