'use client';

import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="relative z-10 bg-stone-900 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-16 items-center"
        >
            <div className="md:w-1/2">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
                    The Spirit of <span className="italic text-red-500">Kerinchi</span>
                </h2>
                <div className="space-y-6 text-lg text-stone-300 leading-relaxed font-light">
                    <p>
                        Deep in the heart of the Malay Archipelago lies a shared heritage that binds us together. 
                        <strong> Serumpun</strong>—meaning "of the same stock" or "cluster"—celebrates the 
                        intricate tapestry of the Kerinchi community found across boundaries.
                    </p>
                    <p>
                        From the rhythmic beats of traditional drums to the whispered legends of old, 
                        the intangible cultural heritage of Kerinchi is a living testament to our ancestors' wisdom.
                        It is not just history; it is a heartbeat that continues to pulse through our daily lives, 
                        manifesting in our rituals, our arts, and our communal bonds.
                    </p>
                    <p>
                        Join us in preserving and exploring these ephemeral treasures—stories, songs, and skills 
                        that define who we are.
                    </p>
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-8">
                     <div>
                        <h3 className="text-2xl font-serif text-white mb-2">Oral Traditions</h3>
                        <p className="text-stone-400 text-sm">Folklore, pantuns, and the spoken wisdom passed down through generations.</p>
                     </div>
                     <div>
                        <h3 className="text-2xl font-serif text-white mb-2">Performing Arts</h3>
                        <p className="text-stone-400 text-sm">Traditional dances and music that narrate the soul of the community.</p>
                     </div>
                </div>
            </div>
            
            <div className="md:w-1/2 relative">
                {/* Decorative Elements */}
                 <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-white/20 opacity-50" />
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b border-r border-white/20 opacity-50" />
                 
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-stone-800">
                     {/* Placeholder for an intro image, maybe user has one later */}
                     <div className="absolute inset-0 flex items-center justify-center text-stone-600">
                        <span className="text-lg">[Cultural Image Placeholder]</span>
                     </div>
                     {/* Gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60" />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
