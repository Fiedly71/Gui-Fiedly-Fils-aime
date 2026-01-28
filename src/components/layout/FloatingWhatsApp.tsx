"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  const phoneNumber = "50932836938";
  const message = encodeURIComponent("Hi! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const linkedinUrl = "https://www.linkedin.com/in/gui-fiedly-fils-aime-8aab203a8";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <motion.a
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-2xl shadow-[#0A66C2]/40 transition-all hover:bg-[#0B5CAD] sm:h-12 sm:w-12"
        aria-label="Visit LinkedIn profile"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.136 1.445-2.136 2.939v5.668H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.369-1.85 3.6 0 4.267 2.368 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.99 20.452H3.68V9h3.31v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      </motion.a>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/50 transition-all hover:bg-green-600 hover:shadow-green-500/70 sm:h-16 sm:w-16"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} className="sm:h-8 sm:w-8" />
        <span className="absolute -right-1 -top-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
      </motion.a>
    </div>
  );
}
