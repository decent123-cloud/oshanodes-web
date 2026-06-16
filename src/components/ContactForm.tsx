"use client"
import { useState } from 'react'

export default function ContactForm(){
  const [submitting,setSubmitting] = useState(false)

  return (
    <form className="bg-white p-6 rounded shadow grid gap-4" onSubmit={e => {
      e.preventDefault()
      setSubmitting(true)
      setTimeout(() => setSubmitting(false), 800)
    }}>
      <div className="grid md:grid-cols-2 gap-4">
        <input required aria-label="Name" placeholder="Name" className="p-3 border rounded" />
        <input required type="email" aria-label="Email" placeholder="Email" className="p-3 border rounded" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input aria-label="Phone" placeholder="Phone" className="p-3 border rounded" />
        <select aria-label="Product" className="p-3 border rounded">
          <option value="rice">Rice</option>
          <option value="beans">Beans</option>
        </select>
      </div>
      <input aria-label="Quantity" placeholder="Quantity Needed" className="p-3 border rounded" />
      <textarea aria-label="Message" placeholder="Message" className="p-3 border rounded h-28" />
      <div className="text-right">
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
