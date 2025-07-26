import React from "react";
import floorPlanImg1 from "/images/floor3.jpg";
import floorPlanImg2 from "/images/floor2.jpg";
import Mulberry from "/images/Mulberry-brochure.pdf";
import Serenity from "/images/Serenity-brochure.pdf";

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
  const handleMulberry = () => {
    window.open(Mulberry, "_blank");
  };
  const handleSerenity = () => {
    window.open(Serenity, "_blank");
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
                      loading="lazy"
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
                      loading="lazy"
                      alt="Mulberry Heights Floor Plan"
                      className="mx-auto max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-28 justify-between">
          <button
            onClick={handleMulberry}
            className="py-2 lg:p-3 bg-orange-500 lg:text-md md:text-md text-xs lg:w-full  text-white rounded-lg cursor-pointer mt-3 hover:bg-orange-700 "
          >
            Mulberry Heights Brochure
          </button>
          <button
            onClick={handleSerenity}
            className="py-2 lg:p-3 bg-orange-500 lg:text-md md:text-md text-xs text-white rounded-lg lg:w-full cursor-pointer mt-3 hover:bg-orange-700 "
          >
            Serenity Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
