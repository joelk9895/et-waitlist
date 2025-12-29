"use client";

import { useState } from "react";
import BackgroundVideo from "./components/BackgroundVideo";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";
import { X, Play } from "lucide-react"; // Imported Play icon optionally if you want to add it to the button later
import { AnimatePresence, motion } from "framer-motion";

// REPLACE THIS WITH YOUR YOUTUBE VIDEO ID
const VIDEO_ID = "LdGMVdcVWNA";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col text-white font-sans overflow-hidden">
      <BackgroundVideo />
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-end px-8 sm:px-12 md:max-w-4xl z-10 pb-12 sm:pb-16">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-anton font-light uppercase leading-[1.2] tracking-wide max-w-3xl drop-shadow-lg"
          >
            Ethereal Techno <br />
            Is Becoming
            A Movement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/80 max-w-xl font-light leading-relaxed"
          >
            A new platform is rising - built for producers, inspired by fans, and driven by the sound that defines us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => setVideoModalOpen(true)}
              className="px-8 py-4 rounded-full font-medium text-lg border border-white/30 text-white hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Watch Video
            </button>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative flex flex-col items-center max-w-xl w-full"
            >
              <div className="relative w-full bg-zinc-900/80 border border-white/10 p-10 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden ring-1 ring-white/5">
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors z-10"
                >
                  <X size={22} />
                </button>

                <div className="relative text-center mb-10 space-y-3">
                  <h2 className="text-3xl font-anton uppercase tracking-wide bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Join the waitlist
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[280px] mx-auto font-light">
                    Enter your email and be the first to access the platform where music and community meet.
                  </p>
                </div>

                <div className="relative">
                  <SignupForm />
                </div>
              </div>

              <div className="mt-6 px-6 py-4 rounded-xl text-center bg-white/10 backdrop-blur-2xl">
                <p className="text-[11px] text-white/30 leading-relaxed font-light tracking-wide">
                  By joining, you agree to our <a href="/privacy" className="underline underline-offset-2 hover:text-white transition-colors">Privacy Policy</a>
                  <br className="hidden sm:block" /> and <a href="/terms" className="underline underline-offset-2 hover:text-white transition-colors">Terms of Service</a>.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            {/* Darker backdrop for cinema mode */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button - Floating inside slightly */}
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 backdrop-blur-md group"
              >
                <X size={24} />
              </button>

              {/* YouTube Iframe */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&showinfo=0&modestbranding=1&color=white`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}