'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center justify-center pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-sm uppercase tracking-widest text-[#666] mb-2 font-semibold">Hello, I'am</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-none mb-4">
              Gui Fiedly
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-black mb-1">DEVELOPER AND CREATOR</p>
            <p className="text-base text-[#888] mb-8 font-light">FREELANCER</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-[#333] transition-colors">
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
