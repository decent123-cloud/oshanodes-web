"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_ysfz8jr",
        "template_fjzggud",
        form.current,
        "Z1dx3OMM-6X7eNkKW"
      );

      alert("✅ Your message has been sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send your message. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white p-6 rounded shadow grid gap-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Full Name"
          className="p-3 border rounded"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="p-3 border rounded"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="phone"
          placeholder="Phone Number"
          className="p-3 border rounded"
        />

        <input
          name="subject"
          required
          placeholder="Subject"
          className="p-3 border rounded"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <select
          name="product"
          title="Select Product"
          className="p-3 border rounded"
        >
          <option value="">Select Product</option>
          <option value="Rice">Rice</option>
          <option value="Beans">Beans</option>
          <option value="Fresh Produce">Fresh Produce</option>
        </select>

        <input
          name="quantity"
          placeholder="Quantity Needed"
          className="p-3 border rounded"
        />
      </div>

      <textarea
        name="message"
        required
        placeholder="Write your message..."
        className="p-3 border rounded h-32"
      />

      <button
        type="submit"
        disabled={submitting}
        className="bg-primary text-white py-3 rounded hover:opacity-90 transition disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}