import React from "react";
import paymentImage from "../assets/payment.jpg";

export default function PaymentPlanSection() {
  const handleImageClick = () => {
    // Image popup functionality - opens image in new tab
    window.open(paymentImage, "_blank");
  };

  return (
    <section id="paymentplan" className="block bg-gray-100 py-12 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-xl font-medium mb-8 text-gray-800">
          Payment Plan
        </h2>

        <div className="w-full">
          <div className="property-wrapper">
            <div className="property">
              <button
                onClick={handleImageClick}
                className="image-popup cursor-pointer block w-full hover:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 rounded-lg overflow-hidden transition-opacity duration-300"
              >
                <div className="image-wrapper">
                  <div className="text-center">
                    <img
                      src={paymentImage}
                      alt="payment-plan"
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
