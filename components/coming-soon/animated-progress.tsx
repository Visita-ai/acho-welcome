"use client";

import { motion } from "framer-motion";

export function AnimatedProgress() {
  return (
    <div
      aria-label="Progresso do desenvolvimento"
      className="mx-auto h-2 w-full max-w-md overflow-hidden rounded-full bg-acho-soft"
      role="progressbar"
    >
      <motion.div
        className="h-full w-1/2 rounded-full bg-acho-green"
        animate={{ x: ["-100%", "220%"] }}
        transition={{
          duration: 2.1,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
    </div>
  );
}
