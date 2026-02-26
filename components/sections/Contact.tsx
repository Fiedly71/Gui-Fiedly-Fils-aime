'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Instagram } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8">
            Take A Coffee & Chat With Me
          </h2>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.a href={`mailto:${contactInfo.email}`} whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-300">
                <Mail size={28} className="text-black" />
              </div>
              <p className="text-lg font-semibold text-black">{contactInfo.email}</p>
            </motion.a>

            {/* Phone */}
            <motion.a href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`} whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-300">
                <Phone size={28} className="text-black" />
              </div>
              <p className="text-lg font-semibold text-black">{contactInfo.phones[0]}</p>
            </motion.a>

            {/* Instagram */}
            <motion.a href="https://instagram.com/gd.digital.studio" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-300">
                <Instagram size={28} className="text-black" />
              </div>
              <p className="text-lg font-semibold text-black">@gd.digital.studio</p>
            </motion.a>
          </div>
        </motion.div>

        <div className="text-center text-sm text-[#555] border-t border-gray-300 pt-8 mt-12">
          <p>© {new Date().getFullYear()} GD Digital Studio</p>
          <p className="text-xs text-[#777] mt-1">Graphics & Development</p>
          <p className="mt-2">Designed & Built by Gui Fiedly Fils-aime</p>
        </div>
      </div>
    </section>
  );
}
