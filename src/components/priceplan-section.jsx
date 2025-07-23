import React from "react";
import price from "../assets/price.jpg";


export default function PricePlanSection() {

  const handleImageClick = () => {
    // Image popup functionality - opens image in new tab
    window.open(price, "_blank");
  };

  return (
    <section id="priceplan" className="block bg-gray-100 py-12 scroll-mt-20 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-xl font-medium mb-8 text-gray-800">
          Price Plan
        </h2>

        <div className="w-full">
          <div className="property-wrapper">
            <div className="property  cursor-pointer">
              <button
                onClick={handleImageClick}
                className="image-popup block w-full hover:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 rounded-lg overflow-hidden  transition-opacity duration-300"
              >
                <div className="image-wrapper">
                  <div className="text-center cursor-pointer">
                    <img
                      src={price}
                      alt="price-list"
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
