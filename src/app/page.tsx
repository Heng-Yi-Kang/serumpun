import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ChatBot from "@/components/ChatBot";
import StoriesCarousel from "@/components/StoriesCarousel";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <Hero />
      <Intro />
      <Timeline />
      <ChatBot />
      <StoriesCarousel />
    </main>
  );
}
