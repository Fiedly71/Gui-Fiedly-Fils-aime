"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
};

export function MobileFeatureImage({ src, alt }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mt-6 md:hidden relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-contain"
        priority
      />
    </motion.div>
  );
}