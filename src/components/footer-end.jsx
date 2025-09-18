import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#C5A46D] text-white py-4 px-6">
      <div className="max-w-7xl italic mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left">
          © {year} DPS Palladio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
