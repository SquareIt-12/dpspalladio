import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { database, ref, push } from "../firebase";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EnquiryFormPopup() {
  const [showForm, setShowForm] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile } = form;

    // ✅ Validation checks
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
    if (!mobile || !phoneRegex.test(mobile)) {
      toast.error("Mobile number must be 10 digits.");
      return;
    }

    const entry = {
      name,
      email,
      mobile,
      timestamp: Date.now(),
    };

    try {
      await push(ref(database, "popupEnquiries"), entry);

      // Save to allEnquiries (used by permanent tracking page)
      await push(ref(database, "allEnquiries"), entry);

      toast.success("Form submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });
      navigate("/thanks"); // Redirect to thank you page

      // ✅ Close the form after slight delay to let toast show
      // setTimeout(() => setShowForm(false), 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(showForm)}
        className="fixed cursor-pointer bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4"
        title="Express Interest"
      >
        <Mail className="w-6 h-6" />
      </button>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed bottom-5 right-3 bg-white shadow-2xl p-4 rounded-md w-[280px] z-50 border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md font-semibold">EXPRESS YOUR INTEREST</h2>
            <button onClick={() => setShowForm(false)}>
              <X className="text-red-600 cursor-pointer" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*"
              className="w-full mb-3 p-1 border rounded bg-gray-100"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full mb-3 p-1 border rounded bg-gray-100"
            />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile*"
              className="w-full mb-3 p-1 border rounded bg-gray-100"
            />
            <button type="submit" className="w-full bg-black text-white py-2">
              SUBMIT
            </button>
          </form>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
