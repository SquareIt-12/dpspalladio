import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
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

    try {
      await push(ref(database, "popupEnquiries"), {
        name,
        email,
        mobile: phone,
        timestamp: Date.now(),
      });

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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Address */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.43345798907!2d81.00767049082496!3d26.782228974858402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x267a0ed6f239132c!2sRishita+Mulberry+Heights!5e0!3m2!1sen!2sin!4v1555399598278!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <a
              href="tel:+918808698649"
              className="mb-2 text-sm flex items-center"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-400" />
              +91 8808698649
            </a>
            <a
              href="mailto:mohanyadav8808@gmail.com"
              className="mb-2 text-sm flex items-center"
            >
              <Mail className="w-4 h-4 mr-2 text-blue-400" />
              mohanyadav8808@gmail.com
            </a>
            <p className="text-sm flex items-start">
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
            </p>
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
