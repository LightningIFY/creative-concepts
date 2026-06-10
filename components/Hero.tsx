"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_am9dwku",
        "template_o96f0oa",
        {
          name: form.name,
          phone: form.phone,
          event: form.event,
          email: form.email,
          message: form.message,
        },
        "V-eO-ficAfHiv3skj"
      );

      alert("Inquiry sent successfully!");

      setForm({
        name: "",
        phone: "",
        event: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send inquiry.");
      console.error(err);
    }

    setLoading(false);
  };

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

        <form
          onSubmit={sendEmail}
          className="grid gap-4 max-w-3xl mx-auto text-left"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-white border border-pink-100"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="p-4 rounded-xl bg-white border border-pink-100"
          />

          <input
            name="event"
            value={form.event}
            onChange={handleChange}
            placeholder="Event Type"
            required
            className="p-4 rounded-xl bg-white border border-pink-100"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="p-4 rounded-xl bg-white border border-pink-100"
          />

          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your event"
            required
            className="p-4 rounded-xl bg-white border border-pink-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#c96384] text-white p-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </FadeIn>
    </section>
  );
}