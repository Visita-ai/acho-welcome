"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { ActionButtons } from "./action-buttons";
import { AnimatedProgress } from "./animated-progress";
import { BackgroundParticles } from "./background-particles";
import { BrandLogo } from "./brand-logo";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function ComingSoonPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-acho-white px-5 py-10 text-acho-navy sm:px-8">
      <BackgroundParticles />

      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.12 }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center"
      >
        <motion.div variants={fadeUp}>
          <BrandLogo />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-10 max-w-3xl text-4xl font-bold leading-[1.05] tracking-normal text-acho-navy sm:text-5xl md:text-6xl"
        >
          Estamos preparando algo incrível.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-base leading-8 text-acho-muted sm:text-lg"
        >
          O Achô! está sendo desenvolvido para ajudar você a encontrar lugares,
          serviços, eventos e oportunidades perto de onde está.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 w-full">
          <AnimatedProgress />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-acho-navy"
        >
          Lançamento em breve
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <ActionButtons />
        </motion.div>

        <motion.footer
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-2 text-sm text-acho-muted sm:mt-16"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-4 w-4 text-acho-green" />
            Campo Grande • MS
          </span>
          <span>Feito com ❤️ no Brasil</span>
        </motion.footer>
      </motion.section>
    </main>
  );
}
