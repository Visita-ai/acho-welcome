"use client";

import { motion } from "framer-motion";

const particles = [
  "left-[8%] top-[18%] h-24 w-24 sm:h-32 sm:w-32",
  "right-[10%] top-[24%] h-20 w-20 sm:h-28 sm:w-28",
  "bottom-[18%] left-[18%] h-16 w-16 sm:h-24 sm:w-24",
  "bottom-[12%] right-[22%] h-24 w-24 sm:h-36 sm:w-36",
];

export function BackgroundParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((className, index) => (
        <motion.span
          key={className}
          className={`absolute rounded-full bg-acho-green/25 blur-3xl ${className}`}
          animate={{
            opacity: [0.18, 0.38, 0.18],
            scale: [1, 1.16, 1],
            y: [0, index % 2 === 0 ? -14 : 14, 0],
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8,
          }}
        />
      ))}
    </div>
  );
}
