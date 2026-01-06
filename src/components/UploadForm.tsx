"use client";

import React, { useState } from "react";
import { Upload, FileText, Video, Music, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("paper");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    console.log("Uploaded:", { title, type, description, file });
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setTitle("");
      setDescription("");
      setFile(null);
    }, 3000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-serif text-amber-500 mb-2">
          Contribute to Serumpun
        </h2>
        <p className="text-stone-300">
          Upload your research or media to preserve our heritage.
        </p>
      </div>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center p-12 text-center"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Upload Successful!
          </h3>
          <p className="text-stone-300">Thank you for your contribution.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">
              Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-stone-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              placeholder="e.g., The Origins of Kerinchi Culture"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">
              Type
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "paper", label: "Research Paper", icon: FileText },
                { id: "audio", label: "Audio", icon: Music },
                { id: "video", label: "Video", icon: Video },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setType(item.id)}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                    type === item.id
                      ? "bg-amber-500/20 border-amber-500 text-amber-500"
                      : "bg-stone-900/30 border-white/5 text-stone-400 hover:bg-stone-800"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">
              Description
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full bg-stone-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
              placeholder="Provide a brief description of your upload..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">
              File
            </label>
            <div className="relative border-2 border-dashed border-white/10 rounded-xl p-8 hover:border-amber-500/50 transition-colors text-center cursor-pointer group">
              <input
                type="file"
                required
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept={
                  type === "paper"
                    ? ".pdf,.doc,.docx"
                    : type === "audio"
                    ? "audio/*"
                    : "video/*"
                }
              />
              <div className="flex flex-col items-center gap-2 text-stone-400 group-hover:text-amber-500 transition-colors">
                <Upload className="w-8 h-8" />
                <span className="text-sm">
                  {file ? file.name : "Click or drag to upload file"}
                </span>
                <span className="text-xs opacity-50">
                  {type === "paper"
                    ? "PDF, DOC up to 10MB"
                    : "MP3, MP4 up to 50MB"}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? <>Processing...</> : <>Upload Contribution</>}
          </button>
        </form>
      )}
    </div>
  );
}
