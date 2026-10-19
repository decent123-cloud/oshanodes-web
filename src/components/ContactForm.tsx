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
      className="grid gap-4 rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_22px_55px_-35px_rgba(10,67,37,0.28)] md:p-8"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Full Name"
          className="rounded-xl border border-slate-200 bg-[#fbfcfa] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-800/50 focus:ring-4 focus:ring-emerald-900/5"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="rounded-xl border border-slate-200 bg-[#fbfcfa] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-800/50 focus:ring-4 focus:ring-emerald-900/5"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="phone"
          placeholder="Phone Number"
          className="rounded-xl border border-slate-200 bg-[#fbfcfa] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-800/50 focus:ring-4 focus:ring-emerald-900/5"
        />

        <input
          name="subject"
          required
          placeholder="Subject"
          className="rounded-xl border border-slate-200 bg-[#fbfcfa] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-800/50 focus:ring-4 focus:ring-emerald-900/5"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <select
          name="product"
          title="Select Product"
          className="rounded-xl border border-slate-200 bg-[#fbfcfa] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-emerald-800/50 focus:ring-4 focus:ring-emerald-900/5"
        >
          <option value="">Select Product</option>
          <option value="Rice">Rice</option>
          <option value="Beans">Beans</option>
          <option value="Oshkon">Oshkon grain-preservation machine</option>
        </select>

        <input
          name="quantity"
          placeholder="Quantity Needed"
          className="rounded-xl border border-slate-200 bg-[#fbfcfa] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-800/50 focus:ring-4 focus:ring-emerald-900/5"
        />
      </div>

      <textarea
        name="message"
        required
        placeholder="Write your message..."
        className="h-36 rounded-xl border border-slate-200 bg-[#fbfcfa] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-800/50 focus:ring-4 focus:ring-emerald-900/5"
      />

      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-[#0f5c32] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0a4325] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}