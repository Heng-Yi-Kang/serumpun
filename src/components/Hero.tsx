"use client";

import { motion } from "framer-motion";
import BlurText from "./BlurText";
import Nav from "./Nav";
import GradientText from "./GradientText";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/Kerinchi.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <Nav />
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-xl md:text-2xl mb-4"
        >
          Kerinchi Heritage
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-5xl md:text-8xl font-bold leading-tight max-w-4xl"
        >
          <BlurText
            text="Preserving the"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => {}}
            className="text-8xl mb-8"
          />

          <h1
            className="
            text-5xl md:text-8xl font-bold 
            bg-gradient-to-r from-[#FAB12F] via-[#FA812F] to-[#DD0303] 
            bg-clip-text text-transparent
            "
          >
            Soul of Kerinchi
          </h1>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-lg text-lg text-(var(--foreground))"
        >
          Explore the rich intangible cultural heritage of the Kerinchi
          community, a journey through time and tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg">
            <span className="block text-xs uppercase tracking-widest opacity-70">
              Experience
            </span>
            <span className="font-md">Cultural Chatbot</span>
          </div>
          <a
            href="#intro"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Start Exploring &darr;
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 text-center md:text-right">
        <p className="text-white/60 text-sm">Realised by Serumpun Team</p>
      </div>
    </div>
  );
}
