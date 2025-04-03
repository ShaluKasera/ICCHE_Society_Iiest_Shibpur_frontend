import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null); // State for modal

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/gallery");
        console.log("Gallery API Response:", response.data);

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

  return (
    <Layout>
      <div style={{ maxWidth: "1450px", margin: "0 auto", padding: "10px" }}>
        <h2 style={{ fontSize: "3.5rem", marginBottom: "10px", textAlign: "center", color: "#333" }}>
          Gallery
        </h2>

        {galleryItems.length > 0 ? (
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
                <div key={item._id} style={{ textAlign: "center" }}>
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

                  <h3 style={{ fontSize: "1.2rem", marginTop: "10px", color: "#333" }}>{item.title}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ fontSize: "1.2rem", color: "#666", textAlign: "center" }}>Loading gallery...</p>
        )}

        {/* Modal for Fullscreen Image/Video */}
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
            onClick={() => setSelectedMedia(null)} // Close modal when clicking outside
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
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
