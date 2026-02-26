'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/5 to-black"></div>

      {/* Main content */}
      <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <p className="text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest mb-4">
                  Developer and Creator
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Gui Fiedly<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Fils-aime
                  </span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-gray-300 mb-6 font-light">
                Full-Stack Developer & Brand Designer
              </p>

              <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed mb-10">
                I create beautiful, modern digital experiences. Specializing in web development with Next.js and React, while designing memorable brand identities that capture your vision.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mb-10">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    10+
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Projects Completed</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    2+
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all text-base"
              >
                View My Work
              </motion.button>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/20">
                  <Image
                    src="/images/Gui.jpg"
                    alt="Gui Fiedly Fils-aime"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">Scroll to explore</p>
          <div className="w-6 h-10 border border-gray-700 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-2 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
