
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-7xl mx-auto px-6 pt-20"
      >

        {/* Small Heading */}
        <p
          className="uppercase tracking-[10px] mb-10"
          style={{
            color: "#d8b16c",
            fontSize: "0.95rem",
            letterSpacing: "0.45em",
          }}
        >
          WEDDINGS • CORPORATE EVENTS • CELEBRATIONS
        </p>

        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 400,
            fontSize: "clamp(3rem,5vw,5rem)",
            lineHeight: "0.95",
            color: "#fff",
          }}
        >
          Crafting Exceptional Events
        </h1>

        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 400,
            fontSize: "clamp(2.8rem,4vw,4.5rem)",
            lineHeight: "0.9",
            color: "#fff",
            marginTop: "-6px",
          }}
        >
          With
        </h2>

        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(3.3rem,5vw,5.2rem)",
            lineHeight: "0.95",
            color: "#c96384",
            marginTop: "-12px",
          }}
        >
          Style, Elegance & Grace
        </h2>

        {/* Description */}
        <p className="mt-10 text-white/90 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Creating unforgettable weddings, birthdays, anniversaries and premium
          celebrations across Chhattisgarh and Odisha.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full text-white font-semibold transition hover:scale-105"
            style={{
              backgroundColor: "#c96384",
            }}
          >
            Get A Quote
          </a>

          <a
            href="#portfolio"
            className="px-10 py-4 rounded-full border-2 text-white font-semibold transition hover:bg-white hover:text-black"
            style={{
              borderColor: "#c96384",
            }}
          >
            View Portfolio
          </a>
        </div>

      </motion.div>
    </section>
  );
}

