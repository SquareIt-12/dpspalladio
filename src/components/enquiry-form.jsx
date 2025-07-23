import React, { useState } from "react";
import { Mail, X } from "lucide-react";

export default function EnquiryFormPopup() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4"
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

          <form>
            <input
              type="text"
              placeholder="Name*"
              className="w-full mb-3 p-1 border rounded bg-gray-100"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full mb-3 p-1 border rounded bg-gray-100"
            />
            <input
              type="tel"
              placeholder="Mobile*"
              className="w-full mb-3 p-1 border rounded bg-gray-100"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2"
            >
              SUBMIT
            </button>
          </form>
        </div>
      )}
    </>
  );
}
