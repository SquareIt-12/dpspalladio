import { PhoneCall } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo.png"; // Adjust the path as necessary

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-2xl text-center p-6">
        <img className="mx-auto w-2/3 md:w-1/2" src={Logo} alt="logo" />
        <div className="">
          <h3 className="text-4xl md:text-6xl font-bold">
            Thank<span className="text-red-600 text-2xl">you!</span>
          </h3>
          <h3 className="text-lg mt-4">Your Submission has been Received.</h3>
          <h3 className="text-lg">We will be in touch and contact you soon!</h3>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 text-white font-bold rounded-lg bg-[#c92d12] shadow-md hover:bg-red-700 transition-all duration-300"
          >
            Back To Home Page
          </a>

          <div className="mt-6 space-y-4">
            <div className="bg-yellow-400 border-2 border-yellow-500 rounded-md py-3 px-4 text-lg font-semibold">
              Contact No:{" "}
              <a
                href="tel:+918808698649"
                className="text-white "
                style={{ textDecoration: "none" }}
              >
                +91 8808698649
              </a>
            </div>

            <div className="bg-green-600  border-2 border-green-700 rounded-md py-3 px-4 text-lg font-semibold text-white">
              Email ID:{" "}
              <a
                href="mailto:mohanyadav8808@gmail.com"
                className=" text-white"
                style={{ textDecoration: "none" }}
              >
                mohanyadav8808@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      {/* Floating CTA Buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50">
        <a
          href="tel:+918808698649"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/918808698649"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
