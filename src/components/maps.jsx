import React from "react";

const Maps = () => {
  return (
    <div className="w-full h-96 overflow-hidden rounded-lg shadow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.223372286142!2d80.99346917522256!3d26.864643376675886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4ff6df19af%3A0x11c688ade433865c!2sOrigins%20Advertising%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749984209183!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  );
};

export default Maps;
