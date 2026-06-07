"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/portfolio/6.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-24"
      >
        <p
          className="uppercase tracking-[8px] text-sm mb-8"
          style={{
            color: "#d8b16c",
            letterSpacing: "8px",
          }}
        >
          CREATIVE CONCEPTS
        </p>

        <h1
          className="leading-none text-white"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(3.5rem,7vw,6rem)",
            fontWeight: 400,
          }}
        >
          Creating
        </h1>

        <h1
          className="leading-none mt-2"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(3.5rem,7vw,6rem)",
            fontWeight: 600,
            color: "#b85c7a",
          }}
        >
          Extraordinary
        </h1>

        <h1
          className="leading-none mt-2"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(3.5rem,7vw,6rem)",
            fontWeight: 600,
            color: "#b85c7a",
          }}
        >
          Celebrations
        </h1>

        <p className="mt-10 text-white/90 text-lg max-w-4xl mx-auto leading-relaxed">
          Creating unforgettable weddings, birthdays, anniversaries and premium
          celebrations across Chhattisgarh and Odisha.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
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