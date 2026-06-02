import FadeIn from "./FadeIn";

export default function WhyUs() {
  return (
    <section className="section">

      <FadeIn>

        <p className="uppercase tracking-[0.3em] primary-text mb-4 text-center">
          Why Choose Us
        </p>

        <h2 className="text-5xl font-bold text-center mb-8">
          Creating Experiences That Matter
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card p-8">

            <h3 className="primary-text text-2xl font-bold mb-4">
              Premium Décor
            </h3>

            <p className="secondary-text">
              Elegant and customized décor solutions tailored for every celebration.
            </p>

          </div>

          <div className="card p-8">

            <h3 className="primary-text text-2xl font-bold mb-4">
              End-To-End Planning
            </h3>

            <p className="secondary-text">
              We manage everything from planning and coordination to final execution.
            </p>

          </div>

          <div className="card p-8">

            <h3 className="primary-text text-2xl font-bold mb-4">
              Trusted Service
            </h3>

            <p className="secondary-text">
              Professional execution and attention to detail for stress-free events.
            </p>

          </div>

        </div>

      </FadeIn>

    </section>
  );
}