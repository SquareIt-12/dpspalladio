// import React, { useState } from "react";
// import { Mail, X } from "lucide-react";
// import { database, ref, push } from "../firebase";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// export default function EnquiryFormPopup() {
//   const [showForm, setShowForm] = useState(true);
//   const [form, setForm] = useState({ name: "", email: "", mobile: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, mobile } = form;

//     // ✅ Validation checks
//     if (!name || name.trim().length < 3) {
//       toast.error("Name must be at least 3 characters long.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     const phoneRegex = /^\d{10}$/;
//     if (!mobile || !phoneRegex.test(mobile)) {
//       toast.error("Mobile number must be 10 digits.");
//       return;
//     }

//     const entry = {
//       name,
//       email,
//       mobile,
//       timestamp: Date.now(),
//     };

//     try {
//       await push(ref(database, "popupEnquiries"), entry);

//       // Save to allEnquiries (used by permanent tracking page)
//       await push(ref(database, "allEnquiries"), entry);

//       toast.success("Form submitted successfully!");
//       setForm({ name: "", email: "", mobile: "" });
//       navigate("/thanks"); // Redirect to thank you page

//       // ✅ Close the form after slight delay to let toast show
//       // setTimeout(() => setShowForm(false), 1000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Error submitting form. Please try again.");
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <a
//         href=""
//         className="fixed cursor-pointer bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4"
//         title="Express Interest"
//       >
//         <Mail className="w-6 h-6" />
//       </a>
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Overlay */}
//           <div
//             className="absolute inset-0 backdrop-blur-[6px] bg-black/50 bg-opacity-50"
//             onClick={() => setShowForm(false)}
//           ></div>

//           {/* Centered Popup */}
//           <div className="relative bg-white shadow-2xl p-6 rounded-xl w-[400px] mx-auto border-2 border-orange-400">
//             {/* Centered Logo */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src="/images/rishita-logo.png"
//                 alt="Logo"
//                 className="h-12 w-auto"
//               />
//             </div>

//             {/* Header with Close Button */}
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-bold text-orange-600">
//                 EXPRESS YOUR INTEREST
//               </h2>
//               <button onClick={() => setShowForm(false)}>
//                 <X className="text-red-600 absolute top-2 right-2 cursor-pointer w-5 h-5" />
//               </button>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Name*"
//                 className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Email*"
//                 className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={form.mobile}
//                 onChange={handleChange}
//                 placeholder="Mobile*"
//                 className="w-full mb-4 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition-colors"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss={false}
//         draggable={false}
//         pauseOnHover={false}
//         theme="light"
//         transition={Bounce}
//       />
//     </>
//   );
// }

import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { database } from "../firebase"; // ✅ only database from here
import {
  ref,
  push,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database"; // ✅ helpers from firebase
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
      name: name.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      timestamp: Date.now(),
    };

    try {
      // 🔎 Check for exact duplicate (name + email + mobile)
      const enquiriesRef = ref(database, "popupEnquiries");
      const snapshot = await get(enquiriesRef);

      let duplicateFound = false;
      if (snapshot.exists()) {
        snapshot.forEach((child) => {
          const entry = child.val();
          if (
            entry.email.trim().toLowerCase() === email.trim().toLowerCase() &&
            entry.mobile.trim() === mobile.trim() &&
            entry.name.trim().toLowerCase() === name.trim().toLowerCase()
          ) {
            duplicateFound = true;
          }
        });
      }

      if (duplicateFound) {
        toast.error("Already submitted. Please wait for a while.");
        return;
      }

      // ✅ Save if no duplicate
      await push(enquiriesRef, entry);
      await push(ref(database, "allEnquiries"), entry);

      toast.success("Form submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <a
        href=""
        className="fixed cursor-pointer bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4"
        title="Express Interest"
      >
        <Mail className="w-6 h-6" />
      </a>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 backdrop-blur-[6px] bg-black/50 bg-opacity-50"
            onClick={() => setShowForm(false)}
          ></div>

          {/* Centered Popup */}
          <div className="relative bg-white shadow-2xl p-6 rounded-xl w-[400px] mx-auto border-2 border-orange-400">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/images/rishita-logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-orange-600">
                EXPRESS YOUR INTEREST
              </h2>
              <button onClick={() => setShowForm(false)}>
                <X className="text-red-600 absolute top-2 right-2 cursor-pointer w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile*"
                className="w-full mb-4 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
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
