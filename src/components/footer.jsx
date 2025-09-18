import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { database } from "../firebase";

import {
  ref,
  push,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    const entry = {
      name,
      email,
      mobile,
      timestamp: Date.now(),
    };

    try {
      //  check duplicate entries
      // 🟢 Duplicate check by email + phone (last 10 minutes)
      const q = query(
        ref(database, "popupEnquiries"),
        orderByChild("email"),
        equalTo(email)
      );
      const snapshot = await get(q);

      let duplicateFound = false;
      if (snapshot.exists()) {
        snapshot.forEach((child) => {
          const data = child.val();
          if (data.mobile === phone) {
            // if submitted within 10 minutes
            if (Date.now() - (data.timestamp || 0) < 10 * 60 * 1000) {
              duplicateFound = true;
            }
          }
        });
      }

      if (duplicateFound) {
        toast.error("You’ve already submitted recently. Please wait a while.");
        return;
      }

      await push(ref(database, "popupEnquiries"), entry);

      // Save to allEnquiries (used by permanent tracking page)
      await push(ref(database, "allEnquiries"), entry);

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
    <section
      id="contact"
      className="bg-sky-100 mt-10  text-black py-12 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 gap-y-10">
          {/* Contact Info / Logo */}
          <div className="flex flex-col p-4">
            <div className="logo mb-4">
              <img
                src="/images/logo.svg"
                alt="DPS Palladio"
                className="h-32 w-32 object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed ">
              Palladio is built to elevate lifestyles while keeping community
              and nature at heart. Guided by trust, quality, and customer-first
              values, we continue to set new benchmarks in contemporary living.
              Our legacy is defined not only by the spaces we build but by the
              experiences we create.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col lg:items-center">
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
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <a
              href="tel:+919235555515"
              className="mb-2 text-md flex items-center hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2 text-blue-400" />
              +91 9235555515
            </a>

            <a
              href="mailto:sale@dpspalladio.com"
              className="mb-2 text-md flex items-center hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              sales@dpspalladio.com
            </a>

            <p className="text-sm flex items-start mb-2">
              <MapPin className="w-4 h-4 mr-2 mt-1 text-blue-400" />
              <span>
                <strong>Corporate Office Address</strong>
                <br />
                202, 2nd Floor, Cyber Heights,
                <br />
                Vibhuti Khand, Gomti Nagar,
                <br />
                Lucknow - 226010
              </span>
            </p>

            <p className="text-sm flex items-start mb-6">
              <MapPin className="w-4 h-4 mr-2 mt-1 text-blue-400" />
              <span>
                <strong>Site Address</strong>
                <br />
                GH-4, Pintail Park City,
                <br />
                Sultanpur Road, Opp Amul Dairy, Ahmamau,
                <br />
                Lucknow - 226010
              </span>
            </p>
          </div>

          {/* Contact Form */}
          <div>
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
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
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
