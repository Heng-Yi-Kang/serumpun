"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import { useAuth } from "@/context/AuthContext";
import { User, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "password" || password === "admin") {
      login(username);
    } else {
      setError("Invalid credentials. Try 'password' or 'admin'.");
    }
  };

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Nav />

      <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-amber-900/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-stone-800/40 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl z-10"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-stone-400">
              Sign in to contribute to the archives
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-stone-600"
                  placeholder="Researcher Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-stone-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center mt-4">
              <Link
                href="/register"
                className="text-stone-400 hover:text-amber-500 text-sm transition-colors"
              >
                Don't have an account? Register here
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
