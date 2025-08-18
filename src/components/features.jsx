import React from "react";
import {
  Users,
  ShieldCheck,
  Power,
  Car,
  TreeDeciduous,
  Wifi,
  CheckCircle
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Club",
      description: "House High End Club house with modern facilities",
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Security System",
      description: "Gated Community, Access Control at entrance, CCTV surveillance",
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Power Back-up",
      description: "24/7 electricity backup for common and residential areas",
      icon: <Power className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Ample Parking",
      description: "Basement / Open Car Parking",
      icon: <Car className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Landscape",
      description: "Lush Green Parks with Jogging Tracks / Fountains / Water Bodies",
      icon: <TreeDeciduous className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Connectivity",
      description: "Wi-Fi enabled Campus",
      icon: <Wifi className="w-10 h-10 text-orange-500" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4" id="features">
      {/* Heading */}
      <header className="mb-12 flex justify-center">
        <div className="inline-flex items-center bg-orange-50 text-orange-600 px-6 py-2 rounded-full text-lg font-semibold shadow-sm">
          <CheckCircle className="w-5 h-5 mr-2" />
          Our Features
        </div>
      </header>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center bg-white border border-orange-100 rounded-lg p-6 shadow hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
