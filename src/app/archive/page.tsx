"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Info, X } from "lucide-react";
import Nav from "@/components/Nav";
import GradientText from "@/components/GradientText";

// Mock Data
const archiveItems = [
  {
    id: 1,
    title: "Zapin Johor",
    origin: "Johor, Malaysia",
    year: "1950s (Archival Footage)",
    style: "Traditional Dance",
    description:
      "A fast-paced traditional Malay dance believed to have originated from Arab missionaries. Zapin consists of leg movements where the dancers perform steps to the beat of the music.",
    videoUrl: "#", // Placeholder
  },
  {
    id: 2,
    title: "Dondang Sayang",
    origin: "Malacca, Malaysia",
    year: "1980s",
    style: "Music & Poetry",
    description:
      "A traditional Malay art form that combines elements of music, songs, and poetry. It is a form of love ballad influenced by Portuguese folk music.",
    videoUrl: "#", // Placeholder
  },
  {
    id: 3,
    title: "Mak Yong",
    origin: "Kelantan, Malaysia",
    year: "2000s (Performance)",
    style: "Dance Drama",
    description:
      "An ancient dance-drama form incorporating ritual elements, acting, vocal and instrumental music, and dance. It is performed mainly in Kelantan.",
    videoUrl: "#", // Placeholder
  },
  {
    id: 4,
    title: "Joget",
    origin: "Malacca, Malaysia",
    year: "1960s",
    style: "Social Dance",
    description:
      "A lively dance form enjoyed by the young and old. It is a social dance that is usually performed at cultural festivals and weddings.",
    videoUrl: "#", // Placeholder
  },
  {
    id: 5,
    title: "Gamelan Melayu",
    origin: "Pahang & Terengganu",
    year: "1990s",
    style: "Instrumental Ensemble",
    description:
      "The Malay Gamelan is a music ensemble featuring metallophones, xylophones, drums and gongs, traditionally performed in the royal courts.",
    videoUrl: "#", // Placeholder
  },
  {
    id: 6,
    title: "Kuda Kepang",
    origin: "Johor",
    year: "1970s",
    style: "Folk Dance",
    description:
      "A traditional Javanese horse dance brought to Malaya by immigrants. Dancers sit astride a flat horse made of woven bamboo and paint.",
    videoUrl: "#", // Placeholder
  },
];

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 pb-20 relative">
      <Nav />
      {/* Background Ambience */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

      <HeroSection />

      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archiveItems.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"></div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 px-4"
      >
        <GradientText
          colors={["#FAB12F", "#FA812F", "#DD0303"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl md:text-6xl font-serif mb-4 tracking-wide"
        >
          The Living Echoes
        </GradientText>

        <p className="text-lg md:text-xl font-light text-stone-300 max-w-2xl mx-auto italic">
          An Archive of Kerinchi Intangible Cultural Heritage
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-amber-600 mx-auto mt-6"
        />
      </motion.div>
    </section>
  );
}

function VideoCard({ item }: { item: (typeof archiveItems)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.3, type: "spring" } }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`bg-white/5 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-white/10 ${
        isExpanded
          ? "col-span-1 md:col-span-2 row-span-2 bg-white/10"
          : "hover:bg-white/10"
      }`}
    >
      <motion.div layout className="relative aspect-video bg-stone-900 group">
        {/* Placeholder for Video */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900 group-hover:from-stone-700 group-hover:to-stone-800 transition-colors">
          <Play className="w-12 h-12 text-amber-500 opacity-80 group-hover:scale-110 transition-transform" />
        </div>
        <div className="absolute top-2 right-2 bg-black/60 text-amber-100 text-xs px-2 py-1 rounded backdrop-blur-sm border border-white/10">
          {item.year}
        </div>
      </motion.div>

      <motion.div layout className="p-5">
        <motion.div layout className="flex justify-between items-start mb-2">
          <div>
            <motion.h3
              layout="position"
              className="text-xl font-serif text-stone-100 font-medium"
            >
              {item.title}
            </motion.h3>
            <motion.p
              layout="position"
              className="text-sm text-amber-500 font-medium uppercase tracking-wider"
            >
              {item.origin}
            </motion.p>
          </div>
          <motion.div layout>
            {isExpanded ? (
              <X className="w-5 h-5 text-stone-400 hover:text-white" />
            ) : (
              <Info className="w-5 h-5 text-stone-400 hover:text-white" />
            )}
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-amber-500/20 text-amber-500 border border-amber-500/20 text-xs rounded-full font-medium">
                  {item.style}
                </span>
              </div>
              <p className="text-stone-300 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              <div className="mt-4 flex justify-end">
                <button className="text-sm text-amber-500 font-semibold hover:text-amber-400 transition-colors flex items-center gap-1 group">
                  Watch Full Recording{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
