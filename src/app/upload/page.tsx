"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import UploadForm from "@/components/UploadForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Determine if we need to redirect.
    // Since default value is null, we might want to check slightly differently in a real app (loading state),
    // but for this simple client-side mock, checking !isAuthenticated after render is okay-ish,
    // though a loading state in AuthContext would be better to avoid flicker.
    // For now, we'll just redirect if no user is found.
    const stored = localStorage.getItem("serumpun_user");
    if (!stored && !user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Nav />

      <div className="flex-1 p-6 md:p-12 relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 pt-10">
          <UploadForm />
        </div>
      </div>
    </main>
  );
}
