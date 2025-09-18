import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

// Images
import gall1 from "/images/gall1.webp";
import gall2 from "/images/gall2.webp";
import gall3 from "/images/gall3.webp";
import gall4 from "/images/gall4.webp";


export default function GallerySection() {
  const allGalleryImages = [
    {
      src: gall1,
      alt: "Gallery 1",
    },
    {
      src: gall2,
      alt: "Gallery 2",
    },
    {
      src: gall3,
      alt: "Gallery 3",
    },
    {
      src: gall4,
      alt: "Gallery 4",
    },
  ];

  const [popupIndex, setPopupIndex] = useState(null);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);

  const showPrev = () =>
    setPopupIndex((prevIndex) => (prevIndex - 1 + allGalleryImages.length) % allGalleryImages.length);

  const showNext = () =>
    setPopupIndex((prevIndex) => (prevIndex + 1) % allGalleryImages.length);

  const PropertyItem = ({ image, index }) => (
    <section className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4 scroll-mt-20">
      <div className="property-wrapper">
        <div className="property">
          <button
            onClick={() => openPopup(index)}
            className="image-popup cursor-pointer block w-full focus:outline-none rounded-lg overflow-hidden group"
          >
            <div className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-48 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <section id="gallery" className="block bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-[#C5A46D] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-sm">
            <CheckCircle className="w-5 h-5 mr-2" />
            Gallery
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          {allGalleryImages.map((image, index) => (
            <PropertyItem key={index} image={image} index={index} />
          ))}
        </div>
      </div>

      {/* Modal Popup with Prev/Next */}
      {popupIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closePopup}
        >
          <div
            className="max-w-4xl mx-auto p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          >
            <div className="flex items-center justify-center gap-4">
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="bg-white text-black border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                Prev
              </button>

              {/* Image */}
              <img
                src={allGalleryImages[popupIndex].src}
                alt={allGalleryImages[popupIndex].alt}
                className="w-full max-w-3xl h-auto rounded shadow-xl"
              />

              {/* Next Button */}
              <button
                onClick={showNext}
                className="bg-white text-black border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
