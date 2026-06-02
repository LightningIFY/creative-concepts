import FadeIn from "./FadeIn";
export default function About() {
  return (
    <section
      id="about"
      className="section pt-24"
    >
      <FadeIn>
        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-500 mb-4">
            About Us
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Creative Concepts
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Creative Concepts is a full-service event management
            and décor company serving Raipur, Kantabanji,
            Mahasamund, Bagbahra, Bhilai, Durg, Bilaspur and
            Khariar Road.
          </p>

          <p className="text-gray-400 text-lg leading-9 mt-6">
            From intimate birthday celebrations to grand weddings,
            anniversaries and corporate events, we bring creativity,
            elegance and flawless execution to every occasion.
          </p>

        </div>
      </FadeIn>
    </section>
  );
}