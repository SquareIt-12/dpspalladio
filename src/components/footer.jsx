import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logToGoogleSheet } from "./logToGoogleSheet";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone } = form;

    // Validation checks
    if (!name || name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return;
    }

    try {
      await push(ref(database, "popupEnquiries"), {
        name,
        email,
        mobile: phone,
        timestamp: Date.now(),
      });

      await logToGoogleSheet({
              name,
              email,
              mobile:phone,
              status: "Submitted",
              timestamp: new Date().toISOString(),
            })

      toast.success("Form submitted successfully!");
      setForm({ name: "", phone: "", email: "" });

      setTimeout(() => {
        navigate("/thanks");
      }, 1000); // wait for toast to show
    } catch (error) {
      console.error("Firebase error:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-9">
          {/* Contact Info */}
          <div className="lg:w-1/3 w-full ">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <a
              href="tel:+918808698649"
              className="mb-2 text-md flex items-center hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2 text-blue-400" />
              +91 8808698649
            </a>

            <a
              href="mailto:mohanyadav8808@gmail.com"
              className="mb-2 text-md flex items-center hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              mohanyadav8808@gmail.com
            </a>

            {/* <p className="text-sm flex items-start mb-6">
              <MapPin className="w-4 h-4 mr-2 mt-1 text-blue-400" />
              <span>
                <strong>AMIT KUMAR NISHAD</strong>
                <br />
                Ganesham Adept Pvt Ltd,
                <br />
                208, Cyber Heights,
                <br />
                Vibhuti Khand, Gomti Nagar,
                <br />
                Lucknow - 226010
              </span>
            </p> */}

            <div className="text-sm p-4">
              <h4 className="font-semibold mb-3 text-blue-400 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                RERA Numbers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                <div className="bg-gray-700 p-2 rounded">
                  <div className="text-gray-300 font-medium text-xs mb-1">
                    Phase-1:
                  </div>
                  <div className="text-blue-200 font-mono text-xs">
                    UPRERAPRJ357829
                  </div>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <div className="text-gray-300 font-medium text-xs mb-1">
                    Phase-2:
                  </div>
                  <div className="text-blue-200 font-mono text-xs">
                    UPRERAPRJ323529
                  </div>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <div className="text-gray-300 font-medium text-xs mb-1">
                    Phase-3:
                  </div>
                  <div className="text-blue-200 font-mono text-xs">
                    UPRERAPRJ308470
                  </div>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <div className="text-gray-300 font-medium text-xs mb-1">
                    Phase-4:
                  </div>
                  <div className="text-blue-200 font-mono text-xs">
                    UPRERAPRJ192087
                  </div>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <div className="text-gray-300 font-medium text-xs mb-1">
                    Phase-5:
                  </div>
                  <div className="text-blue-200 font-mono text-xs">
                    UPRERAPRJ626431
                  </div>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <div className="text-gray-300 font-medium text-xs mb-1">
                    Phase-6:
                  </div>
                  <div className="text-blue-200 font-mono text-xs">
                    UPRERAPRJ447396
                  </div>
                </div>
              </div>
              <div className="bg-blue-900/30 p-3 rounded border border-blue-400/30">
                <div className="text-blue-300 font-semibold text-xs mb-1">
                  Agent RERA:
                </div>
                <div className="text-blue-100 font-mono text-xs font-semibold">
                  UPRERAAGT17933
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-1/4 flex flex-col lg:items-center w-full">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-y-4">
              <li className="hover:text-orange-500">
                <a href="#overview">Overview</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="#features">Features</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="#floorplan">Floor Plan</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="#gallery">Gallery</a>
              </li>
              {/* <li className="hover:text-orange-500">
                <a href="#priceplan">Plans</a>
              </li> */}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl font-bold mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="*Name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Your Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="*Mobile No"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 float-right"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </section>
  );
};

export default ContactSection;
