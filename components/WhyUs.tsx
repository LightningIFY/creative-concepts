import FadeIn from "./FadeIn";

export default function WhyUs() {
  return (
    <section className="section">
      <FadeIn>

      <p className="uppercase tracking-[0.3em] text-yellow-500 mb-4 text-center">
        Why Choose Us
      </p>

      <h2 className="text-5xl font-bold text-center mb-8">
        Creating Experiences That Matter
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="card text-[#c65d7b]">
          <h3 className="text-yellow-500 text-2xl font-bold mb-4">
            Premium Décor
          </h3>

          <p className="text-gray-400">
            Elegant and customized décor solutions tailored for
            every celebration.
          </p>
        </div>

        <div className="card text-[#c65d7b]">
          <h3 className="text-yellow-500 text-2xl font-bold mb-4">
            End-To-End Planning
          </h3>

          <p className="text-gray-400">
            We manage everything from planning and coordination
            to final execution.
          </p>
        </div>

        <div className="card text-[#c65d7b]">
          <h3 className="text-yellow-500 text-2xl font-bold mb-4">
            Trusted Service
          </h3>

          <p className="text-gray-400">
            Professional execution and attention to detail for
            stress-free events.
          </p>
        </div>

      </div>
    </FadeIn>
    </section>
  );
}