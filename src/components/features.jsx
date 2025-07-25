import React from "react";
import f1 from "/images/f1.png";
import f2 from "/images/f2.png";
import f3 from "/images/f3.png";
import f4 from "/images/f4.png";
import f5 from "/images/f5.png";
import f6 from "/images/f6.png";


export default function FeaturesSection() {

  const featuresRow1 = [
    {
      title: "Club",
      description: "House High End Club house with modern facilities",
      imgSrc: f1,
      imgAlt: "Club icon",
    },
    {
      title: "Security System",
      description:
        "Gated Community, Access Control at entrance, CCTV surveillance",
      imgSrc: f2,
      imgAlt: "Security System icon",
    },
    {
      title: "Power Back-up",
      description:
        "Gated Community, Access Control at entrance, CCTV surveillance",
      imgSrc: f3,
      imgAlt: "Power Back-up icon",
    },
  ];

  const featuresRow2 = [
    {
      title: "Ample Parking",
      description: "Basement / Open Car Parking",
      imgSrc: f4,
      imgAlt: "Ample Parking icon",
    },
    {
      title: "Landscape",
      description:
        "Lush Green Parks with Jogging Tracks / Fountains / Water Bodies",
      imgSrc: f5,
      imgAlt: "Landscape icon",
    },
    {
      title: "Connectivity",
      description: "Wi-Fi enabled Campus",
      imgSrc: f6,
      imgAlt: "Connectivity icon",
    },
  ];

  const FeatureBox = ({ feature }) => (
    <section className="w-full md:w-1/3 px-4 mb-8 scroll-mt-20 " id="features">
      <div className="feature-box">
        <header>
          <div className="text-center mb-4">
            <img
              src={feature.imgSrc}
              alt={feature.imgAlt}
              className="mx-auto"
              loading="lazy"
            />
          </div>
          <h4 className="text-center text-white text-lg font-medium mb-4">
            {feature.title}
          </h4>
        </header>
        <p className="text-center text-white text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </section>
  );

  return (
    <section
      id="features-boxes"
      className="block py-12"
      style={{ backgroundColor: "#2d2d32" }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-8">
          <h2 className="text-xl text-center text-white font-medium">
            Our Features
          </h2>
        </header>

        {/* First Row */}
        <div className="flex flex-wrap -mx-4 mb-4">
          {featuresRow1.map((feature, index) => (
            <FeatureBox key={index} feature={feature} />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap -mx-4">
          {featuresRow2.map((feature, index) => (
            <FeatureBox key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
