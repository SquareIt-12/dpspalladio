import React, { useState } from "react";

// Import images (adjust paths if different)
import property01 from "../assets/property-01.jpg";
import property02 from "../assets/property-02.jpg";
import property03 from "../assets/property-03.jpg";
import property04 from "../assets/property-04.jpg";

import gall1 from "../assets/gall1.jpg";
import gall2 from "../assets/gall2.jpg";
import gall3 from "../assets/gall3.jpg";
import gall4 from "../assets/gall4.jpg";

export default function GallerySection() {
  const [popupImage, setPopupImage] = useState(null);

  const galleryRow1 = [
    { src: property01, alt: "Property 1" },
    { src: property02, alt: "Property 2" },
    { src: property03, alt: "Property 3" },
    { src: property04, alt: "Property 4" },
  ];

  const galleryRow2 = [
    { src: gall1, alt: "Gallery 1" },
    { src: gall2, alt: "Gallery 2" },
    { src: gall3, alt: "Gallery 3" },
    { src: gall4, alt: "Gallery 4" },
  ];

  const handleImageClick = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closeModal = () => setPopupImage(null);

  const PropertyItem = ({ image }) => (
    <section
      className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4 scroll-mt-20 "
      id="gallery"
    >
      <div className="property-wrapper">
        <div className="property">
          <button
            onClick={() => handleImageClick(image.src)}
            className="image-popup cursor-pointer block w-full focus:outline-none rounded-lg overflow-hidden group"
          >
            <div className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <section id="properties" className="block bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-8">
          <h2 className="text-xl font-medium text-center text-gray-800">
            Gallery
          </h2>
        </header>

        {/* First Row */}
        <div className="flex flex-wrap -mx-2 mb-4">
          {galleryRow1.map((image, index) => (
            <PropertyItem key={index} image={image} />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap -mx-2">
          {galleryRow2.map((image, index) => (
            <PropertyItem key={index} image={image} />
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="max-w-3xl mx-auto p-4">
            <img
              src={popupImage}
              alt="Popup"
              className="w-full h-auto rounded shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
