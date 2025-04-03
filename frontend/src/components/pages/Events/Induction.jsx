import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Induction = () => {
  const [inductionEvents, setInductionEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  useEffect(() => {
    const fetchInductionEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/events/freshersInductions"
        );

        setInductionEvents(response.data.data || response.data);
      } catch (err) {
        setError("Error fetching induction events");
      } finally {
        setLoading(false);
      }
    };

    fetchInductionEvents();
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
              deleteInduction(eventId);
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

  const deleteInduction = async (eventId) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/admin/dashboard/events/freshersInductions/${eventId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setInductionEvents((prev) =>
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

        <h1 className="mb-4 text-center">Induction Events</h1>

        {loading && (
          <p className="text-lg text-gray-600">Loading induction events...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && inductionEvents.length === 0 && (
          <p className="text-lg text-gray-500">No induction events found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
          {inductionEvents.map((event) => (
            <div
              key={event._id}
              className="border  bg-gray-100 rounded-lg p-4 shadow-md relative"
            >
              {event.coverImageURL && (
                <img
                  src={event.coverImageURL}
                  alt={event.title}
                  className="w-full h-48 object-cover border rounded-lg cursor-pointer"
                />
              )}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-blue-600">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <p className="flex gap-2  ">
                  <MdDateRange className="font-extrabold  mt-0 text-red-600 text-2xl" />{" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="flex gap-2  ">
                  <FaLocationDot className="font-extrabold  mt-0 text-red-600 text-xl" />
                  {event.venue}
                </p>
                <p>
                  <strong>Chief Guest:</strong> {event.chiefGuest}
                </p>
                <p>
                  <strong>Freshers Present:</strong> {event.fresherPresent}
                </p>
                <p>
                  <strong>Volunteers Present:</strong> {event.volunteerPresent}
                </p>

                {/* Photos Section */}
                {event.photos && event.photos.length > 0 && (
                  <div className="mt-3">
                    <h3 className="font-semibold">Photos:</h3>
                    <div className="flex gap-2 overflow-x-auto">
                      {event.photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`Induction Photo ${index + 1}`}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Videos Section */}
                {event.videos && event.videos.length > 0 && (
                  <div className="mt-3">
                    <h3 className="font-semibold">Videos:</h3>
                    <div className="flex gap-2 overflow-x-auto">
                      {event.videos.map((video, index) => (
                        <video
                          key={index}
                          className="w-32 h-32 rounded-lg"
                          controls
                        >
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ))}
                    </div>
                  </div>
                )}

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
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Induction;
