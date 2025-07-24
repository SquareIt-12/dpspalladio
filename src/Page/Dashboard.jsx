// src/pages/AdminTable.jsx
import React, { useEffect, useState } from "react";
import { database, auth } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    const dbRef = ref(database, "popupEnquiries");
    onValue(dbRef, (snapshot) => {
      const records = snapshot.val();
      const formatted = records
        ? Object.entries(records).map(([id, values]) => ({
            id,
            ...values,
          }))
        : [];
      setData(formatted);
    });

    return () => unsubscribe();
  }, [navigate]);
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-600">
            Contact Submissions
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Id</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Mobile</th>
                <th className="px-4 py-3 text-left">Date/Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((entry, id) => (
                <tr key={entry.id}>
                  <td className="px-4 py-2">{id + 1}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.email}</td>
                  <td className="px-4 py-2">{entry.mobile}</td>
                  <td className="px-4 py-2">
                    {entry.timestamp
                      ? new Date(entry.timestamp).toLocaleString("en-IN")
                      : "N/A"}
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center px-4 py-6 text-gray-500"
                  >
                    No submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
