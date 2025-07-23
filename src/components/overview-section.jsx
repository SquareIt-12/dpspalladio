import React from "react";

export default function OverviewSection() {
  return (
    <section
      className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20 "
      id="overview"
    >
      <div className="max-w-6xl mx-auto">
        {/* Overview Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-wide">
            Overview
          </h2>
        </div>

        {/* Content Text */}
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify font-light tracking-wide">
            Mulberry Heights offers the most open and refined lifestyle that one
            can wish for. At Mulberry Heights, we have created a luxurious haven
            giving you the choice of 2, 3 and 4 BHK apartments, bedecked with
            the most modern and handpicked features. Spread over an area of
            21.45 acres, comprising enigmatic towers with state-of-the-art
            facilities and amenities that meet global standards, Mulberry
            Heights presents the perfect picture of your life amidst a vast
            green landscape, with 80% open spaces, this Golf view facing project
            has everything that a holistic lifestyle requires. A peaceful
            experience of a habitat to security that lets you live without any
            worry. Mulberry Heights is a perfect sanctum for those who are
            looking for a wholesome life experience.
          </p>
        </div>
      </div>
    </section>
  );
}
