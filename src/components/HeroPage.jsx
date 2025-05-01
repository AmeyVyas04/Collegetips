import React from "react";

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 text-center max-w-3xl">
        Empowering Parents & Seniors to Embrace the Digital World 🌐
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
        Learn how to use smartphones, video calls, online services, and more — one easy step at a time. No experience needed!
      </p>

      {/* Call to Action */}
      <button className="mt-8 bg-blue-600 text-white text-lg px-8 py-4 rounded-xl shadow hover:bg-blue-700 transition">
        Start Learning Now
      </button>

      {/* Image (Illustration or Photo)
      <img
        src="/images/hero-elderly-using-tablet.svg"
        alt="Elderly using digital device"
        className="mt-10 w-full max-w-md"
      /> */}
    </div>
  );
}
