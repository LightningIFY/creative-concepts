import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <a href="#">
          <Image
            src="/logo.png"
            alt="Creative Concepts"
            width={50}
            height={50}
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-10 text-white">

          <a
            href="#about"
            className="hover:text-yellow-500 transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-yellow-500 transition"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="hover:text-yellow-500 transition"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-500 transition"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}