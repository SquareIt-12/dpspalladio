import React from "react";
import { CheckCircle } from "lucide-react"; // Step 1: import icon (optional)

export default function OverviewSection() {
  return (
    <section
      className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8  scroll-mt-20"
      id="overview"
    >
      <div className="max-w-7xl mx-auto  py-16 ">
        {/* Overview Heading with background & icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-[#C5A46D] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-sm">
            <CheckCircle className="w-5 h-5 mr-2" />
            Who We Are?
          </div>
        </div>

        {/* Content Text */}
        <div className="max-w-5xl mx-auto">
          <p className="text-black text-base sm:text-md leading-relaxed text-justify  tracking-wide">
            At Palladio, we believe a home is more than just four walls — it’s
            where life finds its rhythm, and every detail matters. With a vision
            rooted in excellence and innovation, we create spaces that blend
            timeless design, modern comfort, and sustainable living. From
            thoughtfully crafted layouts to premium amenities, Palladio is built
            to elevate lifestyles while keeping community and nature at heart.
            Guided by trust, quality, and customer-first values, we continue to
            set new benchmarks in contemporary living. Our legacy is defined not
            only by the spaces we build but by the experiences we create. Every
            project is a promise of comfort, elegance, and a future where you
            feel truly at home.
          </p>
        </div>
      </div>
    </section>
  );
}
