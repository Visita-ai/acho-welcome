"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function BrandLogo() {
  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto h-28 w-28 overflow-hidden rounded-[1.75rem] bg-acho-white shadow-premium ring-1 ring-acho-navy/5 sm:h-32 sm:w-32"
    >
      <Image
        src="/acho-logo.jpeg"
        alt="Logo do Achô!"
        fill
        priority
        sizes="(max-width: 640px) 112px, 128px"
        className="object-cover"
      />
    </motion.div>
  );
}
