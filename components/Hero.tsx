"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/portfolio/6.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">

        <p className="uppercase tracking-[0.3em] text-yellow-500 mb-4 text-sm md:text-base">
          Creative Concepts
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
          Creating
          <br />
          <span className="text-yellow-500">
            Extraordinary Celebrations
          </span>
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
          Creating unforgettable weddings, birthdays,
          anniversaries, corporate events and premium décor
          experiences across Chhattisgarh and Odisha.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:scale-105 transition"
          >
            Get A Quote
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            View Portfolio
          </a>

        </div>

      </div>

    </section>
  );
}