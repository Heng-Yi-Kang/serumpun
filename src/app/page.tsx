import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ChatBot from "@/components/ChatBot";
import StoriesCarousel from "@/components/StoriesCarousel";
import Timeline from "@/components/Timeline"; // 1. Import it

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <Hero />
      <Intro />
      <Timeline /> {/* 2. Add it here */}
      <ChatBot />
      <StoriesCarousel />
    </main>
  );
}