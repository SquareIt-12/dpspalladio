import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left">
          © {year} Rishita Mulberry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
