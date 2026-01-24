"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  const phoneNumber = "50932836938";
  const message = encodeURIComponent("Hi! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/50 transition-all hover:bg-green-600 hover:shadow-green-500/70 sm:h-16 sm:w-16"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="sm:h-8 sm:w-8" />
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
      </span>
    </motion.a>
  );
}
