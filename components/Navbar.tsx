"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Header */}

      <div className="hidden md:block fixed top-0 left-0 w-full z-50 bg-yellow-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">

          <div>
            📞 +91 9078437313
          </div>

          <div>
            ✉️ chikigoyal1544@gmail.com
          </div>

          <div>
            Raipur • Bhilai • Durg • Bilaspur
          </div>

        </div>
      </div>

      {/* Main Navbar */}

      <nav className="fixed top-8 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo Area */}

          <a
            href="#"
            className="flex items-center gap-4"
          >
            <Image
              src="/logo.png"
              alt="Creative Concepts"
              width={60}
              height={60}
              priority
            />

            <div className="hidden sm:block">

              <h2
                className="text-3xl text-yellow-500"
                style={{
                  fontFamily:
                    "var(--font-playfair)",
                }}
              >
                Creative Concepts
              </h2>

              <p className="text-xs text-gray-400 tracking-widest">
                EVENTS & DECOR
              </p>

            </div>

          </a>

          {/* Desktop Links */}

          <div className="hidden md:flex items-center gap-10">

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#portfolio">
              Portfolio
            </a>

            <a href="#contact">
              Contact
            </a>

            <a
              href="#contact"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
            >
              Get A Quote
            </a>

          </div>

          {/* Mobile Button */}

          <button
            className="md:hidden text-3xl"
            onClick={() =>
              setOpen(!open)
            }
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="md:hidden bg-black border-t border-white/10">

            <a
              href="#about"
              className="block px-6 py-4"
            >
              About
            </a>

            <a
              href="#services"
              className="block px-6 py-4"
            >
              Services
            </a>

            <a
              href="#portfolio"
              className="block px-6 py-4"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="block px-6 py-4"
            >
              Contact
            </a>

          </div>
        )}

      </nav>
    </>
  );
}