"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-[115vh]
      flex
      items-center
      justify-center
      pt-32
      pb-24
      overflow-hidden
      "
    >
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/portfolio/6.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

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
        className="
        relative
        z-10
        text-center
        px-6
        max-w-6xl
        mx-auto
        pb-12
        "
      >
        <p
          className="
          uppercase
          tracking-[0.35em]
          text-[#d8b26e]
          mb-6
          text-sm
          "
        >
          Creative Concepts
        </p>

        <h1
          className="
          text-6xl
          md:text-8xl
          font-bold
          leading-tight
          text-white
          "
        >
          Creating

          <br />

          <span className="text-[#d8b26e]">
            Extraordinary
          </span>

          <br />

          <span className="text-[#d8b26e]">
            Celebrations
          </span>
        </h1>

        <p
          className="
          mt-8
          text-lg
          md:text-xl
          text-white/90
          max-w-3xl
          mx-auto
          leading-9
          "
        >
          Creating unforgettable weddings,
          birthdays, anniversaries and premium
          celebrations across Chhattisgarh and Odisha.
        </p>

        <div
          className="
          mt-14
          flex
          justify-center
          gap-6
          flex-wrap
          "
        >
          <a
            href="#contact"
            className="
            px-10
            py-4
            rounded-full
            bg-[#d8b26e]
            text-black
            font-semibold
            hover:scale-105
            transition
            "
          >
            Get A Quote
          </a>

          <a
            href="#portfolio"
            className="
            px-10
            py-4
            rounded-full
            border
            border-white
            text-white
            hover:bg-white
            hover:text-black
            transition
            "
          >
            View Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
}