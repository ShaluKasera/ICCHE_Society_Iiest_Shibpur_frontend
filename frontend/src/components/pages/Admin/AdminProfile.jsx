import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../../layout/Layout";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Unauthorized. Please log in.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "https://iccheweb.vercel.app/api/admin/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("API Response:", response.data);
        if (response.data.success) {
          setAdmin(response.data.admin);
        } else {
          setError("Failed to load admin profile.");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        if (err.response) {
          if (err.response.status === 404) {
            setError("Profile not found. Please contact support.");
          } else if (err.response.status === 401) {
            setError("Unauthorized access. Please log in.");
          } else {
            setError("An error occurred while fetching data.");
          }
        } else {
          setError("Failed to fetch admin data. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdminProfile();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gray-200 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-full max-w-lg relative">
          {/* Profile Image */}
          {admin?.profileImageURL && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={admin.profileImageURL}
                alt="Profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow"
              />
            </div>
          )}

          {/* Profile Content */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold">{admin?.fullName || "N/A"}</h2>
            <div className="w-4/6 text-start mx-auto flex flex-col p-2">
              <div className="mb-2">
                <strong className="me-2">Email:</strong> {admin?.email || "N/A"}
              </div>
              <div className="mb-2">
                <strong className="me-2">Contact:</strong> {admin?.contactNumber || "N/A"}
              </div>
              <div className="mb-2">
                <strong className="me-2">Gender:</strong> {admin?.gender || "N/A"}
              </div>
              <div className="mb-2">
                <strong className="me-2">Unique ID:</strong> {admin?.uniqueId || "N/A"}
              </div>
              <div className="mb-2">
                <strong className="me-2">Role:</strong> {admin?.role || "N/A"}
              </div>

              {/* Volunteer-specific details */}
              {admin?.role === "Volunteer" && (
                <>
                  <div className="mb-2">
                    <strong className="me-2">Year:</strong> {admin?.year || "N/A"}
                  </div>
                  <div className="mb-2">
                    <strong className="me-2">Department:</strong> {admin?.department || "N/A"}
                  </div>
                  <div className="mb-2">
                    <strong className="me-2">Residence Type:</strong> {admin?.residenceType || "N/A"}
                  </div>
                  {admin?.residenceType === "Hostel" && (
                    <div className="mb-2">
                      <strong className="me-2">Hostel Name:</strong> {admin?.hostelName || "N/A"}
                    </div>
                  )}
                  {admin?.residenceType === "Hall" && (
                    <div className="mb-2">
                      <strong className="me-2">Hall Name:</strong> {admin?.hallName || "N/A"}
                    </div>
                  )}
                  {admin?.residenceType === "Day Scholar" && (
                    <div className="mb-2">
                      <strong className="me-2">Address:</strong> {admin?.address || "N/A"}
                    </div>
                  )}
                </>
              )}
            </div>

              
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
