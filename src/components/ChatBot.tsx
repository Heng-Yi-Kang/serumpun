"use client";

import { useState } from "react";
import { Send, Sparkles, User, Bot } from "lucide-react";
import { motion } from "framer-motion";

type Message = {
  id: number;
  role: "user" | "bot";
  content: string;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      content:
        "Peace be upon you. I am the guardian of Serumpun. Ask me anything about the Kerinchi heritage.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const responses: Record<string, string> = {
    "kerinchi people":
      "The Kerinchi people, also known as the Orang Kerinci, are an ethnic group native to the Kerinchi Valley in Jambi, Sumatra. They have a rich history dating back thousands of years and are known for their unique culture, including the 'Incung' script, which is one of the oldest scripts in Indonesia.",
    migration:
      "The migration of the Kerinchi people to the Malay Peninsula, particularly to areas like Pantai Dalam (Kampung Kerinchi) in Kuala Lumpur, occurred in various waves. Many sought better economic opportunities and brought with them their traditions, culinary heritage like Rendang, and social structures.",
    music:
      "Traditional Kerinchi music often features instruments like the 'Gendang' and 'Gong'. One of the most famous cultural expressions is the 'Tari Piring' or Plate Dance, which, while associated with the broader Minangkabau culture, is also deeply integrated into Kerinchi celebrations with its own local variations.",
  };

  const simulateStreaming = async (text: string) => {
    setIsTyping(true);
    const newMsgId = Date.now() + 1;

    // Add an empty bot message first
    setMessages((prev) => [
      ...prev,
      { id: newMsgId, role: "bot", content: "" },
    ]);

    let currentText = "";
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      currentText += (i === 0 ? "" : " ") + words[i];
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMsgId ? { ...msg, content: currentText } : msg
        )
      );
      // Wait for a small delay to simulate typing
      await new Promise((resolve) =>
        setTimeout(resolve, 30 + Math.random() * 50)
      );
    }
    setIsTyping(false);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input.toLowerCase().trim();
    setInput("");

    // Find the best match
    let responseText =
      "I'm sorry, I don't have specific information about that in my current wisdom source. Try asking about 'Kerinchi people', 'migration', or 'music'.";

    for (const key in responses) {
      if (currentInput.includes(key)) {
        responseText = responses[key];
        break;
      }
    }

    // Small initial delay before starting to "stream"
    await new Promise((resolve) => setTimeout(resolve, 500));
    await simulateStreaming(responseText);
  };

  return (
    <section
      id="chat"
      className="relative z-10 bg-stone-950 py-24 border-t border-white/10"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-6 h-6 text-amber-500" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ask Serumpun
          </h2>
          <p className="text-stone-400">
            Discover the unspoken stories and traditions of the Kerinchi people.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Chat Area */}
          <div className="h-[400px] md:h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "user" ? "bg-stone-700" : "bg-red-800"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="w-5 h-5 text-stone-300" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div
                  className={`p-4 rounded-2xl max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-stone-800 text-stone-200 rounded-tr-none"
                      : "bg-stone-950 border border-white/10 text-stone-300 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed">
                    {msg.content}
                    {isTyping &&
                      msg.id === messages[messages.length - 1]?.id &&
                      msg.role === "bot" && (
                        <span className="inline-block w-1 h-4 ml-1 bg-white animate-pulse" />
                      )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-stone-900/50">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Kerinchi people, Migration, or Music..."
                className="w-full bg-stone-950 border border-white/10 rounded-xl py-4 pl-6 pr-14 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-red-700 hover:bg-red-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
