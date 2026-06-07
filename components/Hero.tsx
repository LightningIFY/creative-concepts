"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/portfolio/6.jpg')",
        }}
      />

      {/* Very Dark Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Extra Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <p className="uppercase tracking-[8px] text-[#d4a5b5] text-sm md:text-base mb-8">
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
            color: "#c97a94",
            fontSize: "clamp(4rem,8vw,7rem)",
          }}
        >
          Extraordinary
        </h1>

        <h1
          className="font-serif font-bold leading-none mt-4"
          style={{
            color: "#c97a94",
            fontSize: "clamp(4rem,8vw,7rem)",
          }}
        >
          Celebrations
        </h1>

        <p className="mt-10 text-white/90 text-xl max-w-4xl mx-auto leading-relaxed">
          Creating unforgettable weddings, birthdays, anniversaries and premium
          celebrations across Chhattisgarh and Odisha.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full text-white font-semibold transition hover:scale-105"
            style={{
              backgroundColor: "#c97a94",
            }}
          >
            Get A Quote
          </a>

          <a
            href="#portfolio"
            className="px-10 py-4 rounded-full border-2 font-semibold transition hover:scale-105"
            style={{
              borderColor: "#c97a94",
              color: "#c97a94",
            }}
          >
            View Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
}