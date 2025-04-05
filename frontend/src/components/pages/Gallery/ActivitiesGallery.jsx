
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { AiOutlineDelete,AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ActivitiesGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAdmin(!!token);

    const fetchGallery = async () => {
      try {
        const response = await axios.get("https://iccheweb.vercel.app/api/admin/dashboard/gallery/activities/photos");
        if (response.data && response.data.success) {
          setGalleryItems(response.data.data);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error.message);
      }
    };

    fetchGallery();
  }, []);

  const confirmDelete = (itemId) => {
    const toastId = toast.warn(
      <div>
        <p className="font-semibold text-gray-800">
          Are you sure you want to delete this item?
        </p>
        <div className="mt-2 flex gap-3 justify-center">
          <button
            onClick={() => {
              toast.dismiss(toastId);
              deleteItem(itemId);
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

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`https://iccheweb.vercel.app/api/admin/dashboard/gallery/activities/photos/${itemId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setGalleryItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
      toast.success("Deleted successfully!", {
        transition: Slide,
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to delete. Try again.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <Layout>
      <ToastContainer position="top-right" />
      <div style={{ maxWidth: "1450px", margin: "0 auto", padding: "10px" }}>
        <h2 style={{ fontSize: "3.5rem", marginBottom: "10px", textAlign: "center", color: "#333" }}>
         Activity Gallery
        </h2>
        <p className="text-center text-gray-400 mt-10 text-2xl">Coming soon....</p>

        {/* {galleryItems.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "6px",
            }}
          >
            {galleryItems.map((item) => {
              const thumbnail = item.photos?.[0] || item.videos?.[0];

              return (
                <div key={item._id} style={{ position: "relative", textAlign: "center" }}>
                  {thumbnail ? (
                    thumbnail.includes(".mp4") ? (
                      <video
                        src={thumbnail}
                        controls
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "10px",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedMedia(thumbnail)}
                      />
                    ) : (
                      <img
                        src={thumbnail}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "5px",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedMedia(thumbnail)}
                      />
                    )
                  ) : null}

                  {isAdmin && (
                    <button
                      onClick={() => confirmDelete(item._id)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "red",
                      }}
                    >
                      <AiFillDelete size={24} />
                    </button>
                  )}

                  <h3 style={{ fontSize: "1.2rem", marginTop: "10px", color: "#333" }}>{item.title}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ fontSize: "1.2rem", color: "#666", textAlign: "center" }}>Loading gallery...</p>
        )}

       
        {selectedMedia && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedMedia(null)}
          >
            <div style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}>
              <button
                onClick={() => setSelectedMedia(null)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#fff",
                  border: "none",
                  padding: "8px",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  borderRadius: "10%",
                }}
              >
                ✖
              </button>

              {selectedMedia.includes(".mp4") ? (
                <video src={selectedMedia} controls style={{ width: "100%", maxHeight: "90vh", borderRadius: "10px" }} />
              ) : (
                <img src={selectedMedia} alt="Full view" style={{ width: "100%", maxHeight: "90vh", borderRadius: "10px" }} />
              )}
            </div>
          </div>
        )} */}
      </div>
    </Layout>
  );
};


export default ActivitiesGallery
