import React from "react";
import {
  Users,
  TreeDeciduous,
  CheckCircle,
  Waves,
  Dumbbell,
  Baby,
  Footprints,
} from "lucide-react";

export default function FeaturesSection() {
  const featuresData = [
    {
      title: "Multipurpose Hall",
      description:
        "Spacious hall for community events, celebrations, and gatherings",
      icon: <Users className="w-10 h-10 text-blue-500" />,
      bgimg: "/images/feature1.jpg",
    },
    {
      title: "Swimming Pool",
      description:
        "Resort-style swimming pool with modern amenities for relaxation",
      icon: <Waves className="w-10 h-10 text-cyan-500" />,
      bgimg: "/images/feature2.webp",
    },
    {
      title: "Gymnasium",
      description:
        "Fully equipped fitness center with modern exercise equipment",
      icon: <Dumbbell className="w-10 h-10 text-red-500" />,
      bgimg: "/images/feature3.jpg",
    },
    {
      title: "Kids Play Area",
      description: "Safe and fun playground designed for children of all ages",
      icon: <Baby className="w-10 h-10 text-green-500" />,
      bgimg: "/images/feature4.jpg",
    },
    {
      title: "Jogging Track",
      description:
        "Dedicated jogging and walking track around landscaped gardens",
      icon: <Footprints className="w-10 h-10 text-orange-500" />,
      bgimg: "/images/feature5.jpeg",
    },
    {
      title: "Central Green",
      description:
        "Lush green central park area for relaxation and outdoor activities",
      icon: <TreeDeciduous className="w-10 h-10 text-emerald-500" />,
      bgimg: "/images/feature6.webp",
    },
  ];

  return (
    <section
      className="relative min-h-screen py-10 px-4 bg-fixed overflow-hidden bg-gray-300"
      style={{
        backgroundImage: 'url("/images/featuresBG.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="features"
    >
      {/* Dark overlay for whole section */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-140"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <header className="mb-12 flex justify-center">
          <div
            className="inline-flex items-center bg-[#C5A46D]
        text-white px-6 py-3 rounded-full text-lg font-semibold
        shadow-lg transition-all duration-300 hover:shadow-orange-500/25"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Amenities
          </div>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group relative text-center w-full aspect-[4/3] rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-700 transform overflow-hidden"
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: "fadeInUp 1s ease-out forwards",
                backgroundImage: `url(${feature.bgimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Per-card dark gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-500"></div>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

              {/* Content */}
              <div className="relative z-10 flex items-end justify-center h-full">
                <h4 className="text-lg sm:text-xl font-bold text-white rounded-lg inline px-4 py-2 bg-black/70 mb-4 transition-all duration-500 transform group-hover:scale-105">
                  {feature.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
