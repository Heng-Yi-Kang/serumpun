"use client";
import { Search, Globe, Menu, X, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 text-white">
      <div className="flex items-center gap-2">
        <Globe className="h-8 w-8" />
        <span className="text-xl font-bold tracking-wider">SERUMPUN</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
        <Link
          href="/"
          className="text-sm font-medium hover:text-stone-300 transition-colors"
        >
          Home
        </Link>
        {/* <Link
          href="/#intro"
          className="text-sm font-medium hover:text-stone-300 transition-colors"
        >
          Heritage
        </Link> */}
        <Link
          href="/community"
          className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          Community
        </Link>
        {/* <Link
          href="/#chat"
          className="text-sm font-medium hover:text-stone-300 transition-colors"
        >
          Ask Serumpun
        </Link> */}

        <div className="h-4 w-px bg-white/30" />

        {user ? (
          <>
            <Link
              href="/upload"
              className="text-sm font-medium hover:text-stone-300 transition-colors"
            >
              Upload
            </Link>
            <button
              onClick={logout}
              className="text-sm font-medium hover:text-stone-300 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="text-sm font-medium hover:text-stone-300 transition-colors flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Login
          </Link>
        )}

        <div className="h-4 w-px bg-white/30" />
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest opacity-80 cursor-pointer hover:text-white">
            EN
          </span>
          <Search className="h-4 w-4 opacity-80 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 right-6 w-64 bg-stone-900 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <Link href="/" className="text-lg font-medium">
              Home
            </Link>
            <Link href="/#intro" className="text-lg font-medium">
              Heritage
            </Link>
            <Link
              href="/community"
              className="text-lg font-medium text-amber-500"
            >
              Community
            </Link>
            <Link href="/#chat" className="text-lg font-medium">
              Ask Serumpun
            </Link>
            {user ? (
              <>
                <Link href="/upload" className="text-lg font-medium">
                  Upload
                </Link>
                <button
                  onClick={logout}
                  className="text-left text-lg font-medium text-red-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="text-lg font-medium">
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
