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
      <h2 className="text-5xl font-bold mb-12">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="card p-6"
          >
            <p className="text-gray-300 mb-4">
              "{review.text}"
            </p>

            <h3 className="text-[#c65d7b] font-semibold">
              {review.name}
            </h3>
          </div>
        ))}
      </div>
      </FadeIn>
    </section>
  );
}