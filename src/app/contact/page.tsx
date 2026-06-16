import ContactForm from '../../components/ContactForm'

export const metadata = { title: 'Contact — Oshanodes Agro', description: 'Contact Oshanodes Agro for partnerships and inquiries.' }

export default function Contact(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Get in touch</h3>
          <p className="mt-2">Email: oshanodestech@gmail.com</p>
          <p>Phone: +234 705 360 1636</p>
          <p>Location: Benue Valley, Nigeria</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
