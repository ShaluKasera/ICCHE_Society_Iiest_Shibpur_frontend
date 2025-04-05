import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";


const Festival = () => {
  const [festivalEvents, setFestivalEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token"); // Get token for authentication
  const isLoggedIn = !!token; // Check if user is logged in

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const response = await axios.get(
          "https://iccheweb.vercel.app/api/events/festivals"
        );
        if (response.data.success) {
          setFestivalEvents(response.data.data);
        } else {
          setError("Failed to fetch festival events");
        }
      } catch (err) {
        setError("Error fetching festival events");
      } finally {
        setLoading(false);
      }
    };

    fetchFestivals();
  }, []);

  const confirmDelete = (eventId) => {
    const toastId = toast.warn(
      <div>
        <p className="font-semibold text-gray-800">
          Are you sure you want to delete this event?
        </p>
        <div className="mt-2 flex gap-3 justify-center">
          <button
            onClick={() => {
              toast.dismiss(toastId);
              deleteFestival(eventId);
            }}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(toastId)}
            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-600"
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false, closeOnClick: false }
    );
  };

  const deleteFestival = async (eventId) => {
    try {
      await axios.delete(
        `https://iccheweb.vercel.app/api/admin/dashboard/events/festivals/${eventId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFestivalEvents((prev) =>
        prev.filter((event) => event._id !== eventId)
      );
      toast.success("Event deleted successfully!", {
        transition: Slide,
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to delete event. Please try again.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <Layout>
      <div className="container overflow-auto">
        <ToastContainer position="top-right" autoClose={3000} />

        <h1 className=" mb-4 text-center">Festivals</h1>

        {loading && (
          <p className="text-lg text-gray-600">Loading festival events...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && festivalEvents.length === 0 && (
          <p className="text-lg text-gray-500">No festival events found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
          {festivalEvents.map((event) => (
            <div
              key={event._id}
              className="border  bg-gray-100 rounded-lg p-0 shadow-md relative"
            >
              {event.coverImageURL && (
                <img
                  src={event.coverImageURL}
                  alt={event.title}
                  className="w-full h-48 object-cover border rounded-lg cursor-pointer"
                />
              )}

              <h1 className="text-4xl text-center font-bold mt-2">
                {event.title}
              </h1>
              <div className="py-6 px-10">
                <p className="text-gray-600">{event.description}</p>
                <p className="flex gap-2  ">
                  <FaLocationDot className="font-extrabold  mt-0 text-red-600 text-xl" />
                  {event.venue}
                </p>
                <p className="flex gap-2  ">
                  <MdDateRange className="font-extrabold  mt-0 text-red-600 text-2xl" />{" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="flex gap-2  ">
                  <PiStudentFill className="font-extrabold  mt-0 text-2xl" />
                  {event.studentsPresent}
                </p>
                <p>
                  <strong>Volunteers Present:</strong> {event.volunteersPresent}
                </p>
                <div className="flex justify-center items-center mt-3">
                <Link to='/gallery/festival' className=" no-underline px-3 py-2 rounded bg-gray-500 text-white hover:bg-gray-800 transition-colors  duration-300">
                     Images & Videos
                  </Link>
                </div>
              </div>
              {/* Delete & Edit Icons (Only if Logged In) */}
              {isLoggedIn && (
                <div className="absolute top-3 right-3 flex gap-3">
                  <button
                    onClick={() => confirmDelete(event._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete Event"
                  >
                    <FaTrash size={20} />
                  </button>
                  <button
                    onClick={() => toast.info("Edit feature coming soon!")}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit Event"
                  >
                    <FaEdit size={20} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Festival;
