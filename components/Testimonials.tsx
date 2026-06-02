import FadeIn from "./FadeIn";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Amazing execution and planning. Everything was handled professionally.",
  },
  {
    name: "Priya Mehta",
    text: "The decor was stunning and the event ran perfectly.",
  },
  {
    name: "Corporate Client",
    text: "Professional team with excellent attention to detail.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">

      <FadeIn>

        <p className="uppercase tracking-[0.3em] primary-text text-center mb-4">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="card p-6"
            >

              <p className="secondary-text mb-4 italic">
                "{review.text}"
              </p>

              <h3 className="primary-text font-semibold">
                {review.name}
              </h3>

            </div>
          ))}

        </div>

      </FadeIn>

    </section>
  );
}