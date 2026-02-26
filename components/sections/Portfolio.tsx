'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { webProjects, designProjects } from '@/data/portfolio';

export default function Portfolio() {
  return (
    <section id="works" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">My Creative Portfolio Section</h2>
        </motion.div>

        {/* Web Projects Grid - 2 mobile, 4 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {webProjects.map((project, i) => (
            <motion.a 
              key={project.id} 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: i * 0.1 }} 
              className="group overflow-hidden rounded-lg cursor-pointer block"
            >
              <div className="relative h-40 md:h-48 bg-gray-100 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
              <div className="p-3 border border-t-0 border-gray-200 group-hover:border-black transition-colors">
                <h3 className="text-sm md:text-base font-bold text-black mb-1 truncate">{project.title}</h3>
                <p className="text-[#666] text-xs">Web Dev</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Design Projects Grid - 2 mobile, 4 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {designProjects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group overflow-hidden rounded-lg">
              <div className="relative h-40 md:h-48 bg-gray-100 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3 border border-t-0 border-gray-200">
                <h3 className="text-sm md:text-base font-bold text-black mb-1 truncate">{project.title}</h3>
                <p className="text-[#666] text-xs capitalize">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
