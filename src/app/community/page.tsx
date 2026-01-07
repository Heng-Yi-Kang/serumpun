"use client";

import Nav from "@/components/Nav";
import { motion } from "framer-motion";
import { Upload, Send } from "lucide-react";
import { useState } from "react";

export default function CommunityPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send FormData to your API here
  };

  return (
    <main className="min-h-screen bg-stone-900 text-white selection:bg-red-500/30">
      {/* Reusing Nav, but we might need to adjust its background since there is no Hero image here */}
      <div className="bg-stone-950">
        <Nav />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 max-w-3xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Share Your <span className="text-amber-500 italic">Story</span>
          </h1>
          <p className="text-lg text-stone-400 mb-12">
            Keep the heritage alive. Whether it's a photo of an heirloom, a
            recipe, or a memory of your grandmother's village, add your voice to
            the Serumpun archive.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-900/20 border border-green-500/30 p-8 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-serif text-green-400 mb-2">
              Terima Kasih!
            </h3>
            <p className="text-stone-300">
              Your story has been submitted for review and will appear on the
              homepage soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-stone-500 hover:text-white underline"
            >
              Submit another
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 bg-stone-800/50 p-8 md:p-10 rounded-3xl border border-white/5 hover:shadow-[0_0_30px_rgba(250,177,47,0.5)] transition-all duration-700 hover:scale-105"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-stone-500 font-semibold">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Hang Tuah"
                  className="w-full bg-stone-900 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-stone-500 font-semibold">
                  Story Title
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. The Lost Keris"
                  className="w-full bg-stone-900 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-stone-500 font-semibold">
                Your Story
              </label>
              <textarea
                required
                rows={5}
                placeholder="Write your memory here..."
                className="w-full bg-stone-900 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-amber-500/50 outline-none transition-all resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-stone-500 font-semibold">
                Upload Photo
              </label>
              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-stone-500 hover:border-amber-500/50 hover:bg-stone-900/50 transition-all cursor-pointer group">
                <Upload className="w-8 h-8 mb-3 group-hover:text-amber-500 transition-colors" />
                <span className="text-sm">
                  Click to upload or drag and drop
                </span>
                <span className="text-xs opacity-50 mt-1">
                  JPG, PNG up to 5MB
                </span>
                <input type="file" className="hidden" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>Submit Contribution</span>
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        )}
      </div>
    </main>
  );
}
