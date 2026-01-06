"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// Mock Data for the Vibe Check
const STORIES = [
  {
    id: 1,
    name: "Aishah Binti Razak",
    title: "The Sound of Gendang",
    story: "My grandfather taught me that the drum beat isn't just music, it's a heartbeat connecting us to the soil of Kerinchi.",
    image: "/gendang.jpg" // Replace with real image path later
  },
  {
    id: 2,
    name: "Haziq Zikri",
    title: "Recipe of Rendang Paku",
    story: "Every Eid, we cook the fern shoots exactly how our ancestors did in the highlands. It tastes like home.",
    image: "/api/placeholder/400/320"
  },
  {
    id: 3,
    name: "Sarah Lim",
    title: "Learning the Dance",
    story: "I am not Malay, but learning Tari Piring taught me balance and grace. The culture belongs to those who love it.",
    image: "/api/placeholder/400/320"
  },
];

export default function StoriesCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-swipe logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % STORIES.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-stone-900 py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Voices of the Community</h2>
            <p className="text-stone-400">Real stories from the people of Serumpun.</p>
        </div>

        <div className="relative h-[400px] w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-stone-800 rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-full bg-stone-700 relative">
                 {/* In real app, use <Image /> here */}
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-60" />
                 <div className="absolute bottom-4 left-4">
                    <p className="text-white font-serif text-xl">{STORIES[index].name}</p>
                    <p className="text-amber-500 text-sm">{STORIES[index].title}</p>
                 </div>
              </div>

              {/* Text Section */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-white/5" />
                <p className="text-lg md:text-2xl text-stone-200 leading-relaxed font-light italic">
                  "{STORIES[index].story}"
                </p>
                <div className="mt-8 flex gap-2">
                    {STORIES.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-amber-500' : 'w-2 bg-stone-600'}`} 
                        />
                    ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}