"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/portfolio/6.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-white/50" />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >

        <p className="uppercase tracking-[0.3em] text-pink-600 mb-4">
          Creative Concepts
        </p>

        <h1 className="text-5xl md:text-8xl font-bold leading-tight text-black">

          Creating

          <br />

          <span className="text-pink-600">
            Extraordinary Celebrations
          </span>

        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Creating unforgettable weddings,
          birthdays, anniversaries and
          premium celebrations across
          Chhattisgarh and Odisha.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-pink-600 text-white"
          >
            Get A Quote
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border border-pink-600 text-pink-600"
          >
            View Portfolio
          </a>

        </div>

      </motion.div>

    </section>
  );
}