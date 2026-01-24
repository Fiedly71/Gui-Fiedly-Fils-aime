"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Send email via mailto link (fallback) or API
    const mailtoLink = `mailto:isteah.gffilsaime@gmail.com?subject=New Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-10 shadow-xl shadow-black/20 sm:px-10 sm:py-14">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Get in touch</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let's Work Together</h2>
        </div>
        <p className="max-w-2xl text-base text-slate-200">Have a project in mind? Let's create something amazing together!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-300/50 focus:bg-white/10"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-300/50 focus:bg-white/10"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-300/50 focus:bg-white/10"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full border border-cyan-300/50 bg-cyan-400/10 px-6 py-3 font-semibold tracking-[0.08em] text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-400/20 inline-flex items-center justify-center gap-2"
        >
          Send Message
          <ArrowUpRight size={18} />
        </button>

        {submitted && (
          <p className="text-center text-sm text-cyan-300">Message ready to send! Your email client will open automatically.</p>
        )}
      </form>
    </section>
  );
}
