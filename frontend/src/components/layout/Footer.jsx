import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone, FaLocationDot } from "react-icons/fa6";




const Footer = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Submitting your feedback...");
    setLoading(true);

    try {
      await axios.post(
        "https://iccheweb.vercel.app/api/feedback/add-feedback",
        formData
      );

      toast.update(loadingToast, {
        render: "Feedback submitted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        transition: Slide,
      });

      setFormData({ fullName: "", email: "", contact: "", message: "" });
    } catch (error) {
      toast.update(loadingToast, {
        render: "Failed to submit feedback!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        transition: Slide,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-100 border px-4 py-6">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        transition={Slide}
      />

      <div className="flex flex-col md:px-10 px-0 items-center gap-6 md:flex-row md:justify-center md:gap-8 lg:gap-12">
        <div className="w-full text-center">
          <div className="flex flex-col sm:flex-row mt-6">
            <div className="w-full sm:w-1/2  flex flex-col items-center sm:items-start p-4">
              <h2 className="text-lg font-extrabold mb-2">Contact Details</h2>
              <p className="text-start">If you want to be a part of Icche, please feel free to reach out to us.</p>
              <p className="text-gray-700 flex text-start">
                <FaPhone className="text-green-600 mt-1 me-2" />
                +91 7004610494, +91 9660014668, +91 829987013
              </p>
              <p className="text-gray-700 flex">
                <FaLocationDot className="text-red-500 mt-0.5 me-2"/>
                Slater Hall
              </p>
              <p className="text-gray-700">
                IIEST, Shibpur, Howrah, West Bengal
              </p>
            </div>

            <div className="w-full sm:w-1/2 flex  flex-col items-center p-4">
              <h2 className="text-lg font-semibold mb-2">Links</h2>
             
              
              <ul className=" text-start">
                <li className="mt-2">
                  <Link to='/' className="no-underline  text-black home-link">Home</Link>
                </li>
                <li className="mt-2"> 
                  <Link to='/gallery' className="no-underline  text-black home-link">Gallery</Link>
                </li>
                <li className="mt-2">
                  <Link to='/about/volunteers' className="no-underline text-black home-link">Volunteers</Link>
                </li>
                <li className="mt-2">
                  <Link to='/about/students' className="no-underline text-black home-link">Students</Link>
                </li>
                <li className="mt-2">
                  <Link to='/about/alumni' className="no-underline text-black home-link">Alumni</Link>
                </li>
                <li className="mt-2">
                  <Link to='/about' className="no-underline text-black home-link">About</Link>
                </li>
              </ul>
             
            </div>
            <div className="w-full sm:w-1/2 flex  flex-col items-center p-4">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <ul className="flex gap-6 mt-3">
                <li>
                  <Link
                    to="https://www.facebook.com/icchesistac"
                    target="_blank"
                  >
                    <BsFacebook className="size-7 text-blue-900" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/icche.iiests/"
                    target="_blank"
                  >
                    <FaSquareInstagram className="size-7 text-pink-800" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://whatsapp.com/channel/0029VaABXT57oQhYfacKWQ2b"
                    target="_blank"
                  >
                    <FaWhatsapp className="size-7 text-blue-700" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/icche-iiest/"
                    target="_blank"
                  >
                    <FaLinkedin className="size-7 text-blue-500" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-center mb-4">
            Feedback Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 ">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Your Name"
                className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="contact"
                placeholder="Your Contact Number"
                className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="3"
                placeholder="Your Message"
                className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white font-extrabold py-2 hover:bg-gray-900 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
