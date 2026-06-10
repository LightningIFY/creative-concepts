"use client";
import { FaInstagram } from "react-icons/fa";

import { Phone, MessageCircle, Camera } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Call */}
      <a
        href="tel:+919078437313"
        className="w-16 h-16 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center shadow-xl transition hover:scale-110"
      >
        <Phone size={30} color="white" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/creativeconceptsby_priyal/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 flex items-center justify-center shadow-xl transition hover:scale-110"
      >
        <FaInstagram size={30} color="white" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919078437313"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-xl transition hover:scale-110"
      >
        <MessageCircle size={30} color="white" />
      </a>

    </div>
  );
}