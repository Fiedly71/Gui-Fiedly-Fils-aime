'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  { title: 'Full-Stack Developer', description: 'Next.js, React, TypeScript, Node.js' },
  { title: 'UI/UX Design', description: 'Creating beautiful and intuitive interfaces' },
  { title: 'Brand Identity', description: 'Logos, posters & marketing materials' },
  { title: 'Best Practices', description: 'Clean, efficient, and maintainable code' }
];

export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12 text-center lg:text-left">
          <p className="text-sm uppercase tracking-widest text-[#666] mb-4 font-semibold">GD = Graphics & Development</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            I Know That Good Dev<br />Means Good Business
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="border-t-4 border-black pt-6">
              <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-lg text-[#666]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
