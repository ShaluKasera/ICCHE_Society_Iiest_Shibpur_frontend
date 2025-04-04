import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../layout/Layout";

const Classroom = () => {
  const [classrooms, setClassrooms] = useState([]); // Ensure default is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get("https://iccheweb.vercel.app/api/classroom");

        if (Array.isArray(response.data.data)) {
          // Fix: Extract actual data array
          setClassrooms(response.data.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setError("Invalid response from server.");
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch classrooms.");
      } finally {
        setLoading(false);
      }
    };

    fetchClassrooms();
  }, []);

  return (
    <Layout>
      {/* Static Class Timings */}
      <div className="bg-gray-600 text-white text-center py-4  rounded-lg shadow-lg mb-6">
        <p className="text-5xl font-extrabold">Class Timings</p>
        <div className="text-md font-bold space-x-4 mt-1">
          <span>Tuesday (5-6 PM)</span>
          <span>Thursday (6-7 PM)</span>
          <span>Sunday (10-11 AM)</span>
        </div>
      </div>

      {/* Display Loading or Error */}
      {loading && (
        <p className="text-center text-lg mt-4">Loading classrooms...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      <h1 className="text-center">Last 6 Classes</h1>
      {/* Classroom Cards */}
      {classrooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {classrooms.map((classroom) => (
            <div
              key={classroom._id}
              className="bg-white rounded-2xl overflow-auto shadow-lg mb-3 border"
            >
              {/* Card Title */}
              <div className="bg-gray-800 text-white text-center py-2">
                <h3 className="text-lg font-bold">{classroom.day}</h3>
              </div>

              {/* Cover Image */}
              <img
                src={classroom.coverImageURL}
                alt={classroom.day}
                className="w-full h-48 object-cover"
              />

              {/* Attendance Info */}
              <div className="p-4">
                <p className="text-gray-700 font-medium">
                  Students Present:{" "}
                  <span className="text-green-600 font-bold">
                    {classroom.studentsPresent}
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Volunteers Present:{" "}
                  <span className="text-green-600 font-bold">
                    {classroom.volunteersPresent}
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Date:{" "}
                  <span className="text-green-600 font-bold">
                  {new Date(classroom.date).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-center text-gray-500">No classrooms available.</p>
        )
      )}
    </Layout>
  );
};

export default Classroom;
