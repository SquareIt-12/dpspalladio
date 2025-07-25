import React from "react";
import floorPlanImg1 from "../assets/floor1.png";
import floorPlanImg2 from "../assets/floor2.png";

export default function FloorPlanSection() {
  const handleImageClick = () => {
    // You can implement image popup functionality here
    // For now, it will just open the image in a new tab
    window.open(floorPlanImg1, "_blank");
  };
  const handleImageClickOne = () => {
    // You can implement image popup functionality here
    // For now, it will just open the image in a new tab
    window.open(floorPlanImg2, "_blank");
  };

  return (
    <section id="floorplan" className="block bg-gray-100 py-12 scroll-mt-20 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-xl font-medium mb-8 text-gray-800">
          Floor Plan
        </h2>

        <div className="w-full">
          <div className="property-wrapper">
            <div className="property">
              <button
                onClick={handleImageClick}
                className="image-popup block w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300"
              >
                <div className="image-wrapper">
                  <div className="text-center">
                    <img
                      src={floorPlanImg1}
                      alt="Mulberry Heights Floor Plan"
                      className="mx-auto max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="property-wrapper">
            <div className="property">
              <button
                onClick={handleImageClickOne}
                className="image-popup block w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300"
              >
                <div className="image-wrapper">
                  <div className="text-center">
                    <img
                      src={floorPlanImg2}
                      alt="Mulberry Heights Floor Plan"
                      className="mx-auto max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
