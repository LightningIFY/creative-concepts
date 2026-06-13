import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="section pt-24">
      <FadeIn>

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] primary-text mb-4">
            About Us
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Creative Concepts
          </h2>

          <p className="secondary-text text-lg leading-8">
            Creative Concepts is a full-service event management
            and décor company serving Raipur, Kantabanji,
            Mahasamund, Bagbahra, Bhilai, Durg, Bilaspur and
            Khariar Road.
          </p>

          <p className="secondary-text text-lg leading-8 mt-4">
            At Creative Concepts, we believe every celebration deserves to be extraordinary. With a passion for innovation and an eye for timeless elegance, we transform ideas into immersive experiences that captivate, inspire, and leave lasting impressions. From intimate gatherings to grand-scale celebrations, every detail is thoughtfully curated to reflect your unique story and vision.
            Driven by creativity, precision, and impeccable execution, our team crafts bespoke events that seamlessly blend luxury with personalization. Whether it's a dream wedding, milestone celebration, or corporate gathering, we go beyond décor and planning—we create unforgettable moments, meaningful connections, and experiences that are remembered long after the event ends.
          </p>

        </div>

      </FadeIn>
    </section>
  );
}