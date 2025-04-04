import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from '../../../layout/Layout'

const AddFarewellImages = () => {
  const [formData, setFormData] = useState({
    title: "",
    mediaType: "", // "photo" or "video"
  });
  const [mediaFile, setMediaFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setMediaFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.mediaType) {
      toast.error("Please select Photo or Video.");
      return;
    }
    if (!mediaFile) {
      toast.error("Please select a file to upload.");
      return;
    }

    const loadingToast = toast.loading("Uploading...");

    const endpoint =
      formData.mediaType === "photo"
        ? "http://localhost:8000/api/admin/dashboard/farewellGallery/photos/add-photos"
        : "http://localhost:8000/api/admin/dashboard/farewellGallery/videos/add-videos";

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    
    // ✅ Matches Backend Field Names
    if (formData.mediaType === "photo") {
      formDataToSend.append("photos", mediaFile); // Backend expects "photos"
    } else {
      formDataToSend.append("videos", mediaFile); // Backend expects "videos"
    }

    try {
      await axios.post(endpoint, formDataToSend, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.update(loadingToast, {
        render: "Media added successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        transition: Slide,
      });

      setFormData({ title: "", mediaType: "" });
      setMediaFile(null);
    } catch (error) {
      toast.update(loadingToast, {
        render: error.response?.data?.message || "Failed to upload media!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        transition: Slide,
      });
    }
  };

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} transition={Slide} />
      <div className="w-[90%] max-w-sm mx-auto p-6 min-w-2xs bg-white rounded-lg shadow-lg text-xs sm:text-base mt-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
          Add to Farewell images & videos
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dropdown for selecting Photo or Video */}
          <select
            name="mediaType"
            value={formData.mediaType}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition w-full"
            required
          >
            <option value="">Select Media Type</option>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>

          {/* Title Input */}
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 mt-3 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition w-full"
            required
          />

          {/* File Upload */}
          {formData.mediaType && (
            <input
              type="file"
              accept={formData.mediaType === "photo" ? "image/*" : "video/*"}
              onChange={handleFileChange}
              className="border p-2 rounded mt-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition w-full"
              required
            />
          )}

          <div className="mt-3">
            <button type="submit" className="border-2 link border-gray-600 py-2 px-5 mb-4 rounded w-full">
              Upload {formData.mediaType === "photo" ? "Photo" : "Video"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}


export default AddFarewellImages
