"use client";

import { MailPlus } from "lucide-react";
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
        href="mailto:achoappservice@gmail.com?subject=Quero%20ficar%20por%20dentro%20das%20novidades%20do%20Acho!&body=Oi,%20time%20do%20Acho!%0A%0AQuero%20ficar%20por%20dentro%20das%20proximas%20novidades.%0A%0AMinha%20sugestao%20e:%20"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-acho-navy px-6 text-sm font-semibold text-acho-white shadow-premium outline-none transition-colors hover:bg-acho-navy/95 focus-visible:ring-4 focus-visible:ring-acho-green/30 sm:w-auto"
      >
        <MailPlus aria-hidden="true" className="h-4 w-4" />
        Fique por dentro das novidades
      </motion.a>
    </div>
  );
}
