import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <FadeIn>
      <h2 className="text-5xl font-bold mb-4">
        Plan Your Next Event
      </h2>

      <p className="text-gray-400 mb-8">
        Phone: +91 9078437313
        <br />
        Email: chikigoyal1544@gmail.com
      </p>

      <form className="grid gap-4 max-w-3xl mx-auto text-left">

        <input
          placeholder="Your Name"
          className="p-4 rounded-xl bg-white border border-pink-100"
        />

        <input
          placeholder="Phone Number"
          className="p-4 rounded-xl bg-white border border-pink-100"
        />

        <input
          placeholder="Event Type"
          className="p-4 rounded-xl bg-white border border-pink-100"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your event"
          className="p-4 rounded-xl bg-white border border-pink-100"
        />

        <button
          className="bg-yellow-500 text-black p-4 rounded-xl font-semibold"
        >
          Send Inquiry
        </button>

      </form>
      </FadeIn>
    </section>
  );
}