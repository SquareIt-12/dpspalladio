import { CheckCircle, Key } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className=" mx-auto p-8 py-16 lg:py-16 bg-white mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full lg:text-3xl md:text-2xl font-semibold mb-8 border border-blue-100">
            <CheckCircle className="w-4 h-4" />
            Who We Are?
          </div>
        </div>
      </div>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Section Title */}

            {/* Company Name & Description */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
                AV Communication
              </h3>
              {/* <p className="text-sm text-gray-600 mb-6 italic">
                (Rungreen Business Venture Pvt. Ltd.)
              </p> */}

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We help people, places, and business grow stronger. At AV
                Communication we're in the business of growth. Growing
                our partners businesses, growing the places we touch, and growing
                our people.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is rooted in TLC &ndash; Technology, Location, and
                Creativity &ndash; to promote well-being, brand visibility, and
                social impact through impactful events, strategic outreach, and
                meaningful, real-life audience engagement.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Events Executed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  100+
                </div>
                <div className="text-sm text-gray-600">Brand Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  10+
                </div>
                <div className="text-sm text-gray-600">Active Cities</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start md:justify-start">
              <Link to="/about" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Learn More
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/assets/gallery-optimized/5.jpg"
                  alt="AV Communication team at work - event planning and execution"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    {/* <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg> */}
                    <Key color="white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      10+ years of Experience
                    </div>
                    <div className="text-sm text-gray-600">
                      Unmatched Advertising Solutions
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
