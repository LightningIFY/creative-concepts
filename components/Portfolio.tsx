import Image from "next/image";

const images = [
  "/portfolio/7.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/1.jpg",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2 className="text-5xl font-bold mb-4">
        Our Recent Events
      </h2>

      <p className="text-gray-400 mb-12">
        A glimpse into the experiences we've created.
      </p>

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