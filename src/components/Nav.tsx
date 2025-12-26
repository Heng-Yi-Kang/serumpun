"use client";
import { Search, Globe, Menu } from "lucide-react";
import Link from "next/link";

export default function Narbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-center gap-2">
        <Globe className="h-8 w-8" />
        <span className="text-xl font-bold tracking-wider">SERUMPUN</span>
      </div>

      <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
        <Link
          href="#"
          className="text-sm font-medium hover:text-stone-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="#intro"
          className="text-sm font-medium hover:text-stone-300 transition-colors"
        >
          Heritage
        </Link>
        <Link
          href="#chat"
          className="text-sm font-medium hover:text-stone-300 transition-colors"
        >
          Ask Serumpun
        </Link>
        <div className="h-4 w-px bg-white/30" />
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest opacity-80">
            EN
          </span>
          <Search className="h-4 w-4 opacity-80" />
        </div>
      </div>

      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
    </nav>
  );
}
