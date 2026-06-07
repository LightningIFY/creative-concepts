"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-7xl mx-auto px-6 pt-20 md:pt-0"
      >
        {/* Top Text */}
        <p
          className="uppercase mb-10"
          style={{
            color: "#d8b16c",
            letterSpacing: "0.45em",
            fontSize: "0.95rem",
          }}
        >
          WEDDINGS • CORPORATE EVENTS • CELEBRATIONS
        </p>

        {/* Line 1 */}
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(3.8rem,6vw,5.8rem)",
            fontWeight: 400,
            lineHeight: "1.05",
            color: "#ffffff",
          }}
        >
          Crafting Exceptional Events
        </h1>

        {/* Line 2 */}
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(3.2rem,6vw,5.2rem)",
            fontWeight: 400,
            lineHeight: "1",
            color: "#ffffff",
            marginTop: "4px",
          }}
        >
          With
        </h2>

        {/* Line 3 */}
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            fontSize: "clamp(4rem,6vw,6rem)",
            fontWeight: 500,
            lineHeight: "1",
            color: "#c96384",
            marginTop: "-24px",
          }}
        >
          Style, Elegance & Grace
        </h2>

        {/* Description */}
        <p className="mt-10 text-white text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
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