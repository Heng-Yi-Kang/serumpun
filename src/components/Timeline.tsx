"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Anchor, Sparkles } from "lucide-react";

// Mock Data
const TIMELINE_EVENTS = [
  {
    year: "19th Century",
    title: "Origins in Alam Kerinci",
    description: "The journey begins in the highlands of Jambi, Sumatra (Alam Kerinci). Our ancestors cultivated rice and developed a unique culture rich in oral traditions and mystic arts.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    year: "Late 1800s",
    title: "The Great Migration",
    description: "Driven by the spirit of 'Merantau' (wandering), early Kerinchi pioneers sailed across the straits, seeking new opportunities in the Malay Peninsula.",
    icon: <Anchor className="w-6 h-6" />,
  },
  {
    year: "1900s",
    title: "Settlement in KL",
    description: "They opened land in what is now known as Kampung Kerinchi and Pantai Dalam. The area became a hub for trade, agriculture, and silat brotherhoods.",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    year: "Present Day",
    title: "The Serumpun Initiative",
    description: "Today, we launch Serumpun to digitally preserve this intangible heritage. We are the bridge between the memories of the past and the technology of the future.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play logic (switch every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TIMELINE_EVENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-stone-950 py-24 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-950 to-stone-950" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            A Journey Through <span className="text-amber-500 italic">Time</span>
          </h2>
          <p className="text-stone-400">Tracing the footsteps of the Kerinchi people.</p>
        </div>

        {/* 1. HORIZONTAL LINE SECTION */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Gray Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-stone-800 -translate-y-1/2 rounded-full" />

          {/* Orange Progress Line (animates width based on active index) */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-amber-500 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeIndex / (TIMELINE_EVENTS.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {/* Points (Dots) */}
          <div className="relative flex justify-between w-full">
            {TIMELINE_EVENTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)} // Allow clicking to jump
                className={`relative w-4 h-4 rounded-full transition-all duration-300 z-10 flex items-center justify-center
                  ${index <= activeIndex ? "bg-amber-500 scale-125 shadow-[0_0_15px_rgba(245,158,11,0.5)]" : "bg-stone-700"}
                `}
              >
                {/* Pulse effect for active dot */}
                {index === activeIndex && (
                    <div className="absolute inset-0 w-full h-full bg-amber-500 rounded-full animate-ping opacity-75" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2. CONTENT DISPLAY SECTION */}
        <div className="max-w-3xl mx-auto text-center h-[300px]"> 
          {/* Fixed height prevents layout jumping */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-stone-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-xl rotate-3">
                  {TIMELINE_EVENTS[activeIndex].icon}
                </div>
              </div>

              <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold mb-4 tracking-widest uppercase">
                {TIMELINE_EVENTS[activeIndex].year}
              </span>

              <h3 className="text-3xl font-serif text-white mb-4">
                {TIMELINE_EVENTS[activeIndex].title}
              </h3>
              
              <p className="text-lg text-stone-300 leading-relaxed font-light">
                {TIMELINE_EVENTS[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}