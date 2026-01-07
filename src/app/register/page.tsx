"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  Calendar,
  GraduationCap,
  Briefcase,
  FileText,
  ArrowRight,
  Type,
  CheckCircle,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    education: "",
    title: "",
    occupation: "",
    essay: "",
  });
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/upload");
    }
  }, [user, router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  if (user) return null;

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Nav />

      <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden py-12">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-amber-900/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-stone-800/40 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl z-10 hover:shadow-[0_0_30px_rgba(250,177,47,0.5)] transition-all duration-700 hover:scale-105"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-white mb-2">
              Join the Archives
            </h1>
            <p className="text-stone-400">
              Register as a contributor to help preserve our heritage
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-stone-600"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Title (Honorific)
                </label>
                <div className="relative">
                  <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <select
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select Title
                    </option>
                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Dr">Dr.</option>
                    <option value="Prof">Prof.</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Date of Birth
                </label>
                <div className="relative date-input-wrapper">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500 pointer-events-none" />
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-stone-600 [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              {/* Education Level */}
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Education Level
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <select
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select Level
                    </option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Occupation
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="text"
                    name="occupation"
                    required
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-stone-600"
                    placeholder="Current Occupation"
                  />
                </div>
              </div>

              {/* Essay */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Why do you want to contribute?
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-4 w-5 h-5 text-stone-500" />
                  <textarea
                    name="essay"
                    required
                    value={formData.essay}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-stone-600 resize-none"
                    placeholder="Tell us about your interest in preserving Malay heritage..."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group mt-6"
            >
              <span>Submit Application</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center mt-4">
              <Link
                href="/login"
                className="text-stone-400 hover:text-amber-500 text-sm transition-colors"
              >
                Already have an account? Login here
              </Link>
            </div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-stone-900 border border-amber-500/20 rounded-2xl p-8 shadow-2xl overflow-hidden "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 text-amber-500">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <h2 className="text-2xl font-serif text-white mb-4">
                  Thank You for Your Interest!
                </h2>

                <p className="text-stone-300 mb-8 leading-relaxed">
                  We deeply appreciate your willingness to contribute to the
                  Serumpun Archives. Your application has been received and is
                  being reviewed by our team. Together, we keep the living
                  echoes alive.
                </p>

                <div className="flex gap-4 w-full">
                  <button
                    onClick={() => {
                      setShowModal(false);
                      router.push("/");
                    }}
                    className="flex-1 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Back to Home
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      router.push("/login");
                    }}
                    className="flex-1 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-xl font-bold transition-colors"
                  >
                    Login
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
