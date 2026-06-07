"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/portfolio/6.jpg')",
        }}
      />

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <p className="uppercase tracking-[8px] text-[#d9b7c4] text-sm md:text-base mb-8">
          Creative Concepts
        </p>

        <h1
          className="font-serif font-bold leading-none text-white"
          style={{
            fontSize: "clamp(4rem,8vw,7rem)",
          }}
        >
          Creating
        </h1>

        <h1
          className="font-serif font-bold leading-none mt-4"
          style={{
            color: "#b85c7a",
            fontSize: "clamp(4rem,8vw,7rem)",
          }}
        >
          Extraordinary
        </h1>

        <h1
          className="font-serif font-bold leading-none mt-4"
          style={{
            color: "#b85c7a",
            fontSize: "clamp(4rem,8vw,7rem)",
          }}
        >
          Celebrations
        </h1>

        <p className="mt-10 text-white/95 text-xl max-w-4xl mx-auto leading-relaxed">
          Creating unforgettable weddings, birthdays, anniversaries and premium
          celebrations across Chhattisgarh and Odisha.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6 pb-8">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full text-white font-semibold transition hover:scale-105"
            style={{
              backgroundColor: "#b85c7a",
            }}
          >
            Get A Quote
          </a>

          <a
            href="#portfolio"
            className="px-10 py-4 rounded-full border-2 text-white font-semibold transition hover:bg-white hover:text-black"
            style={{
              borderColor: "#b85c7a",
            }}
          >
            View Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
}