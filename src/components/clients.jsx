import React from "react";
import { CheckCircle } from "lucide-react";

const PartnersClientsSection = () => {
  // Real client logos and filenames
  const clients = [
    { name: "Anandi Water Park", image: "anandi.png" },
    { name: "Tanishq", image: "Tanishq.png" },
    { name: "Kalyan", image: "kalyan.png" },
    { name: "Thumbs up", image: "thums-up.png" },
    { name: "Godrej", image: "godrej.png" },
    { name: "Eldeco", image: "eldeco.png" },
    { name: "Aisshpra", image: "aishpra.jpg" },
    { name: "HSJ", image: "HSJ.png" },
    { name: "SBI", image: "SBI.png" },
    { name: "Hazelnut", image: "Hazelnut.jpeg" },
    { name: "CMS", image: "CMS.png" },
    { name: "Blue world", image: "blue-world.png" },
    { name: "JKCement", image: "jkcement.png" },
    { name: "Jashn", image: "jashn.png" },
    { name: "Kamla", image: "kamla.jpg" },
    { name: "UP Suchana", image: "Suchana.jpg" },
    { name: "UP", image: "up-govern.png" },
    { name: "Police", image: "up-police.png" },
    { name: "Mr Brown ", image: "mr-brown.png" },
    { name: "Mohey", image: "mohey.png" },
    { name: "LPS", image: "LPS.png" },
    { name: "LULU", image: "LULU.png" },
    { name: "Bhasin", image: "bhasin.png" },
  ];

  // Duplicate list for infinite scroll effect
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="w-full py-24 bg-gray-300 overflow-hidden mb-14">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full lg:text-3xl md:text-2xl font-semibold mb-8 border border-blue-100">
            <CheckCircle className="w-4 h-4" />
            <h2 className="text-3xl font-bold ">Clients</h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trusted by leading brands and organizations across industries
        </p>
      </div>

      {/* Logo Slider */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-300 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-300 to-transparent z-10"></div>

        {/* Scrolling Logos */}
        <div className="flex animate-scroll w-max">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-8 group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-white group-hover:border-gray-300 p-3 md:p-4">
                {/* Actual Logo Image */}
                <img
                  src={`/assets/clients/${client.image}`}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Client Name */}
              {/* <p className="text-center mt-2 text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {client.name}
              </p> */}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 45s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnersClientsSection;
