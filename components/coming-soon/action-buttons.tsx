"use client";

import { Github, MailPlus } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";

const buttonMotion: Pick<
  HTMLMotionProps<"a">,
  "whileHover" | "whileTap" | "transition"
> = {
  whileHover: { y: -2, scale: 1.01 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 380, damping: 24 },
};

export function ActionButtons() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
      <motion.a
        {...buttonMotion}
        href="mailto:contato@acho.com.br?subject=Quero%20acompanhar%20novidades%20do%20Acho!"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-acho-navy px-6 text-sm font-semibold text-acho-white shadow-premium outline-none transition-colors hover:bg-acho-navy/95 focus-visible:ring-4 focus-visible:ring-acho-green/30 sm:w-auto"
      >
        <MailPlus aria-hidden="true" className="h-4 w-4" />
        Acompanhar novidades
      </motion.a>

      <motion.a
        {...buttonMotion}
        href="https://github.com"
        rel="noreferrer"
        target="_blank"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-acho-navy/10 bg-acho-white px-6 text-sm font-semibold text-acho-navy outline-none transition-colors hover:border-acho-green hover:bg-acho-soft focus-visible:ring-4 focus-visible:ring-acho-green/30 sm:w-auto"
      >
        <Github aria-hidden="true" className="h-4 w-4" />
        GitHub
      </motion.a>
    </div>
  );
}
