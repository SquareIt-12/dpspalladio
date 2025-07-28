import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "/images/rishita-logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const reraHeight = 10; // Approximate height of RERA section
      setIsScrolled(window.scrollY > reraHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Overview", href: "#overview" },
    { name: "Features", href: "#features" },
    { name: "Floor Plan", href: "#floorplan" },
    { name: "Gallery", href: "#gallery" },
    // { name: "Plans", href: "#priceplan" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* RERA section - This will scroll with the page */}
      <div className="bg-gray-800 flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-white">
        <span className="lg:text-md md:text-md text-sm">
          Rera no: UPRERAAGT17933
        </span>
        <a
          href="tel:+918808698649"
          className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full flex items-center gap-2"
        >
          <Phone size={16} />
          <span>+91 8808698649</span>
        </a>
      </div>

      {/* Fixed Header - Position changes based on scroll */}
      <header
        className={`fixed left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? "top-0" : "top-11"
        }`}
      >
       {/* <header
        className="fixed left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100 transition-all duration-300 top-0"
      > */}
        <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
           
           <img src={Logo} alt="" className="h-32 w-32" style={{objectFit: 'contain'}} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium focus:text-orange-400 transition-colors duration-200 ${
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
            {/* <div className="hidden lg:flex">
              <a
                href="tel:+918808698649"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-sm"
              >
                <Phone size={16} />
                <span>+91 8808698649</span>
              </a>
            </div> */}

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


      {/* Spacer div to account for the header height - adjusts based on scroll */}
      {/* <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-16" : "h-26"
        }`}
      ></div> */}
    </>
  );
}
