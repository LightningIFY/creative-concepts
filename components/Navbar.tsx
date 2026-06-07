"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Creative Concepts"
            width={50}
            height={50}
          />

          <div>
            <h2
              className="text-4xl text-[#d47b99] leading-none"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Creative Concepts
            </h2>

            <p className="text-xs tracking-[4px] text-white/70 mt-1">
              EVENTS & DECOR
            </p>
          </div>
        </a>

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
            className="px-7 py-3 rounded-full text-white font-medium transition"
            style={{
              backgroundColor: "#c96384",
            }}
          >
            Get A Quote
          </a>
        </div>
      </div>
    </nav>
  );
}