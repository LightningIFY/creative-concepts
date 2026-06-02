"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-pink-100">

      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        <a href="#" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Creative Concepts"
            width={45}
            height={45}
            priority
          />

          <div>

            <h2 className="text-3xl text-[#c65d7b]">
              Creative Concepts
            </h2>

            <p className="text-[10px] tracking-[0.25em] text-gray-500">
              EVENTS & DECOR
            </p>

          </div>

        </a>

        <div className="hidden md:flex items-center gap-8">

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>

          <a
            href="#contact"
            className="bg-[#c65d7b] text-white px-5 py-2 rounded-full"
          >
            Get A Quote
          </a>

        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-pink-100">

          <a href="#about" className="block px-6 py-4">
            About
          </a>

          <a href="#services" className="block px-6 py-4">
            Services
          </a>

          <a href="#portfolio" className="block px-6 py-4">
            Portfolio
          </a>

          <a href="#contact" className="block px-6 py-4">
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}