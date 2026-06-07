"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 md:gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt="Creative Concepts"
            width={42}
            height={42}
            className="rounded-sm"
          />

          <div className="min-w-0">
            <h2
              className="text-2xl md:text-4xl text-[#d47b99] leading-none whitespace-nowrap"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Creative Concepts
            </h2>

            <p className="hidden sm:block text-[10px] tracking-[4px] text-white/70 mt-1">
              EVENTS & DECOR
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white">
          <a href="#about" className="hover:text-[#d47b99] transition">
            About
          </a>

          <a href="#services" className="hover:text-[#d47b99] transition">
            Services
          </a>

          <a href="#portfolio" className="hover:text-[#d47b99] transition">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-[#d47b99] transition">
            Contact
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full text-white font-medium transition hover:opacity-90"
            style={{
              backgroundColor: "#c96384",
            }}
          >
            Get A Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col text-white">

            <a
              href="#about"
              className="px-6 py-4 border-b border-white/10"
            >
              About
            </a>

            <a
              href="#services"
              className="px-6 py-4 border-b border-white/10"
            >
              Services
            </a>

            <a
              href="#portfolio"
              className="px-6 py-4 border-b border-white/10"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="px-6 py-4 border-b border-white/10"
            >
              Contact
            </a>

            <a
              href="#contact"
              className="m-4 text-center px-6 py-3 rounded-full font-medium"
              style={{
                backgroundColor: "#c96384",
              }}
            >
              Get A Quote
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}