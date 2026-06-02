import Image from "next/image";

const images = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/7.jpg",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">

      <p className="uppercase tracking-[0.3em] text-yellow-500 mb-4">
        Portfolio
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Our Recent Events
      </h2>

      <p className="text-gray-400 mb-12">
        A glimpse into the experiences we've created.
      </p>

      {/* Video Section */}
      <div className="mb-16">

        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Event Highlights
        </h3>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <video
            controls
            playsInline
            className="w-full max-h-[700px] object-cover"
          >
            <source
              src="/portfolio/vid1.mp4"
              type="video/mp4"
            />
          </video>
        </div>

      </div>

      {/* Photos */}
      <div className="grid md:grid-cols-3 gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl"
          >
            <Image
              src={img}
              alt={`Event ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-80 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>

    </section>
  );
}