import React from "react";
// import price from "../assets/price.jpg";
import price1 from "../assets/pay.jpg";
import price2 from "../assets/list.jpg";

export default function PricePlanSection() {
  const handleImageClick = () => {
    window.open(price, "_blank");
  };

  return (
    <section id="priceplan" className="block bg-gray-100 py-12 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-xl font-medium mb-8 text-gray-800">
          Price List And Payment Plans 
        </h2>

        <div className="w-full">
          <div className="flex justify-center gap-6">
            {/* First Image */}
            <div className="w-[48%]">
              <button
                onClick={handleImageClick}
                className="block w-full hover:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 rounded-lg overflow-hidden transition-opacity duration-300"
              >
                <img
                  src={price1}
                  alt="price-list-1"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </button>
            </div>

            {/* Second Image */}
            <div className="w-[48%]">
              <button
                onClick={handleImageClick}
                className="block w-full hover:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 rounded-lg overflow-hidden transition-opacity duration-300"
              >
                <img
                  src={price2}
                  alt="price-list-2"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </button>
              <button className="p-3 bg-orange-500 text-white rounded-lg w-full cursor-pointer mt-3 hover:bg-orange-700 ">View All</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
