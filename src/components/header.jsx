import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "../assets/mlogo1.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Overview", href: "#overview" },
    { name: "Features", href: "#features" },
    { name: "Floor Plan", href: "#floorplan" },
    { name: "Gallery", href: "#gallery" },
    { name: "Price Plan", href: "#priceplan" },
    { name: "Payment Plan", href: "#paymentplan" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - exact match to image */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* Building icon */}
                <img src={Logo} alt="" className="w-[100%] h-[8vh]" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? "text-orange-500"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Contact Button - exact match */}
            <div className="hidden lg:flex">
              <a
                href="tel:+918808698649"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-sm"
              >
                <Phone size={16} />
                <span>+91 8808698649</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-orange-500 p-2 rounded-md transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100">
              <div className="py-2 space-y-1 bg-white">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      item.active
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 py-3">
                  <a
                    href="tel:+917234008553"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 w-full shadow-sm"
                  >
                    <Phone size={16} />
                    <span>+91 7234008553</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
