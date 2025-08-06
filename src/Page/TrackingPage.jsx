import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

const TrackingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, "allEnquiries");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const records = snapshot.val();
      const formatted = records
        ? Object.entries(records)
            .map(([id, values]) => ({
              id,
              ...values,
            }))
            .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0)) // newest first
        : [];
      setData(formatted);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-8 relative ">
      <button
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
          window.location.href = "/login";
        }}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4 absolute right-8 cursor-pointer"
      >
        Logout
      </button>

      <h2 className="text-2xl font-bold mb-6">All Enquiry Submissions</h2>

      <p className="mb-4 text-sm text-gray-500">
        Total enquiries: <strong>{data.length}</strong>
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border text-sm">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-3 py-2 border">#</th>
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Email</th>
              <th className="px-3 py-2 border">Mobile</th>
              <th className="px-3 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, idx) => (
              <tr key={entry.id}>
                <td className="px-3 py-1 border">{idx + 1}</td>
                <td className="px-3 py-1 border">{entry.name}</td>
                <td className="px-3 py-1 border">{entry.email}</td>
                <td className="px-3 py-1 border">{entry.mobile}</td>
                <td className="px-3 py-1 border">
                  {entry.timestamp
                    ? new Date(entry.timestamp).toLocaleString("en-IN")
                    : "N/A"}
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackingPage;
