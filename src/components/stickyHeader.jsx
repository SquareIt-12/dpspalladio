import React, { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    { name: "HOME", href: "/", hasDropdown: false },
    { name: "ABOUT US", href: "/about", hasDropdown: false },
    {
      name: "SERVICES",
      href: "/services",
      hasDropdown: false,
    },
    { name: "WORK", href: "/work", hasDropdown: false },
    { name: "CONTACT US", href: "/contact", hasDropdown: false },
  ];

  return (
    <>
      <div className="flex flex-row justify-between items-center gap-4 sm:gap-6 px-2 sm:px-4 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-lg border-b border-blue-400/30 text-xs sm:text-base">
        {/* Phone */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="bg-blue-600 rounded-lg flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <a
            href="tel:+919559102222"
            className="text-white hover:text-blue-300 transition-colors"
          >
            +91-9559102222
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="bg-green-600 rounded-lg flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <a
            href="mailto:info@avcommunication.co"
            className="text-white hover:text-green-300 transition-colors break-all"
          >
            info@avcommunication.co
          </a>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        {/* Red top bar */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <div className="text-gray-800">
                  <img
                    src="/assets/Logo-2.png"
                    alt="AV Communication Logo"
                    className="h-14 lg:h-20 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-end space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-md font-medium text-sm tracking-wide transition-colors duration-200"
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}
                    >
                      <div className="py-2">
                        {item.dropdownItems?.map(
                          (dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-150"
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-2 border-t border-gray-100">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-md font-medium text-sm tracking-wide transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="px-4 py-3"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems?.map(
                        (dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors duration-150"
                          >
                            {dropdownItem.name}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
