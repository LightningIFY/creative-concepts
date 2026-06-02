import FadeIn from "./FadeIn";

const services = [
  {
    title: "Wedding Planning",
    desc: "Complete wedding planning, decoration and execution.",
  },
  {
    title: "Birthday Celebrations",
    desc: "Creative themes and memorable birthday experiences.",
  },
  {
    title: "Anniversary Events",
    desc: "Elegant celebrations for life's special milestones.",
  },
  {
    title: "Corporate Events",
    desc: "Professional conferences, launches and meetings.",
  },
  {
    title: "Decor & Styling",
    desc: "Premium floral décor, stage setups and venue styling.",
  },
  {
    title: "Entertainment",
    desc: "DJ, sound systems, artists and live performances.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <FadeIn>

        <h2 className="text-5xl font-bold mb-3">
          Our Services
        </h2>

        <p className="secondary-text mb-8">
          Complete event solutions under one roof.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="card p-8 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-2xl font-semibold primary-text mb-4">
                {service.title}
              </h3>

              <p className="secondary-text">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </FadeIn>
    </section>
  );
}