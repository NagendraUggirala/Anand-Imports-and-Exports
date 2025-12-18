import React from "react";

export default function TravelSafetyCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5fbff] to-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Transform Your <span className="text-blue-600">Global Trade Experience</span>?
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Join us in delivering quality-driven, efficient, and compliant import & export services through trusted sourcing and worldwide distribution networks.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
