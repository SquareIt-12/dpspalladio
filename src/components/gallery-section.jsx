import React, { useState } from "react";

// Import images (adjust paths if different)

import gall1 from "/images/gall1.jpg";
import gall2 from "/images/gall2.jpg";
import gall3 from "/images/gall3.jpg";
import gall4 from "/images/gall4.jpg";

import gall5 from "/images/ris1.jpg";
import gall6 from "/images/ris2.jpg";

import gall8 from "/images/ris4.jpg";

import gall9 from "/images/ris5.jpg";
import gall10 from "/images/ris6.jpg";
import gall11 from "/images/ris7.jpg";
import gall12 from "/images/ris8.jpg";




export default function GallerySection() {
  const [popupImage, setPopupImage] = useState(null);

  const galleryRow2 = [
    { src: gall1, alt: "Gallery 1" },
    { src: gall2, alt: "Gallery 2" },
    { src: gall3, alt: "Gallery 3" },
    { src: gall4, alt: "Gallery 4" },
  ];

  const galleryRow3 = [
    { src: gall5, alt: "Gallery 5" },
    { src: gall6, alt: "Gallery 6" },
    { src: gall8, alt: "Gallery 8" },
    { src: gall9, alt: "Gallery 9" },

  ];

  const galleryRow4 = [
    { src: gall10, alt: "Gallery 10" },
    { src: gall11, alt: "Gallery 11" },
    { src: gall12, alt: "Gallery 12" },
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
    <section id="properties" className="block bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-8">
          <h2 className="text-xl font-medium text-center text-gray-800">
            Gallery
          </h2>
        </header>

        {/* First Row */}
        {/* <div className="flex flex-wrap -mx-2 mb-4">
          {galleryRow1.map((image, index) => (
            <PropertyItem key={index} image={image} />
          ))}
        </div> */}

        {/* Second Row */}
        <div className="flex flex-wrap -mx-2">
          {galleryRow2.map((image, index) => (
            <PropertyItem key={index} image={image} />
          ))}
        </div>

        {/* Third Row */}
        <div className="flex flex-wrap -mx-2">
          {galleryRow3.map((image, index) => (
            <PropertyItem key={index} image={image} />
          ))}
        </div>
        {/* fourth Row */}
        <div className="flex flex-wrap -mx-2">
          {galleryRow4.map((image, index) => (
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
              loading="lazy"
              alt="Popup"
              className="w-full h-auto rounded shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
