import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <Hero />
      <Intro />
      <ChatBot />
    </main>
  );
}
