import price1 from "/images/pay.jpg";
import price2 from "/images/list.jpg";
import fullPdf from "/images/ALL_IN_ONE_PRICELIST_APRIL2025.pdf"; // Path to the full PDF file

export default function PricePlanSection() {
  const handleImageClick = () => {
    window.open(price1, "_blank");
  };
  const handleImageClickOne = () => {
    window.open(price2, "_blank");
  };
   const handleViewAllClick = () => {
     window.open(fullPdf, "_blank"); // ✅ Open PDF in new tab
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
                  loading="lazy"
                  alt="price-list-1"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </button>
            </div>

            {/* Second Image */}
            <div className="w-[48%]">
              <button
                onClick={handleImageClickOne}
                className="block w-full hover:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 rounded-lg overflow-hidden transition-opacity duration-300"
              >
                <img
                  src={price2}
                  loading="lazy"
                  alt="price-list-2"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </button>
              <button
                onClick={handleViewAllClick}
                className="p-3 bg-orange-500 text-white rounded-lg w-full cursor-pointer mt-3 hover:bg-orange-700 "
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
