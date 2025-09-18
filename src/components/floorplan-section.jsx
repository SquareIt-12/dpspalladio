import React, { useState } from "react";
import floorPlanImg1 from "/images/floor-plan.png";
import floorPlanImg2 from "/images/floor-plan2.png";
import floorPlanImg3 from "/images/floor-plan3.png";
import floorPlanImg4 from "/images/floor-plan4.png";
import Palladio from "/images/palladio_brochure.pdf";
import { CheckCircle, X } from "lucide-react";

export default function FloorPlanSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (img) => setSelectedImage(img);
  const closePopup = () => setSelectedImage(null);

  return (
    <section id="floorplan" className="block bg-gray-100 py-12 scroll-mt-20 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-[#C5A46D] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-sm">
            <CheckCircle className="w-5 h-5 mr-2" />
            Floor Plan
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex lg:flex-row flex-col gap-2">
            {[floorPlanImg1, floorPlanImg4].map((img, idx) => (
              <div key={idx} className="w-full">
                <button
                  onClick={() => openPopup(img)}
                  className="block w-full cursor-pointer rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300"
                >
                  <img
                    src={img}
                    alt="Floor Plan"
                    className="mx-auto max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex lg:flex-row flex-col gap-2">
            {[floorPlanImg3, floorPlanImg2].map((img, idx) => (
              <div key={idx} className="w-full">
                <button
                  onClick={() => openPopup(img)}
                  className="block w-full cursor-pointer rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300"
                >
                  <img
                    src={img}
                    alt="Floor Plan"
                    className="mx-auto max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-x-28 justify-between">
          <button
            onClick={() => window.open(Palladio, "_blank")}
            className="py-2 lg:p-3 bg-[#bdd463] lg:text-lg md:text-md text-xs font-semibold lg:w-full transition-all duration-200 text-black rounded-lg cursor-pointer mt-3 hover:bg-[#bbe21f]"
          >
            Download Palladio Brochure
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Popup Floor Plan"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
