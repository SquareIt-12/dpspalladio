import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Submitted:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`
    );
    // Add your backend logic here (API, email service, etc.)
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Address Section */}
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

          {/* Contact Info Section */}
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

          {/* Contact Form Section */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl font-bold mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="*Name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Your Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="*Mobile No"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 float-right"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
