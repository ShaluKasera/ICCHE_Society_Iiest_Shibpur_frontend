import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../layout/Layout";
import { FaCheckCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const toastId = toast.loading("Sending reset instructions...");

    try {
      const response = await axios.post(
        "https://iccheweb.vercel.app/api/admin/forget-password",
        { email }
      );

      if (!response.data.success) {
        toast.update(toastId, {
          render: "Invalid email. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        setError("Invalid email. Please try again.");
        setIsLoading(false);
        return;
      }

      toast.update(toastId, {
        render: "Email sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setIsSubmitted(true);
      setTimer(30);
    } catch (error) {
      let message = "Failed to send email. Please try again.";
      if (error.response) {
        if (error.response.status === 403) {
          message = "Admin approval pending. Contact the PIC or Admin.";
        } else if (error.response.status === 404) {
          message = "Admin not found.";
        }
      } else {
        message = "Network error. Please check your connection.";
      }

      setError(message);
      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Timer countdown and reset form after 30s
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (isSubmitted) {
      // ✅ Reset form after 30s
      setIsSubmitted(false);
      setEmail("");
    }
  }, [timer]);

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex items-center justify-center min-h-screen text-xs sm:text-base">
        <div className="lg:w-1/4 border border-slate-500 rounded-xl p-6 shadow-lg w-[250px] text-center">
          <h1 className="text-xl font-bold mb-3">Reset Your Password</h1>
          {error && <p className="text-red-600 mb-2">{error}</p>}

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col text-start">
              <label className="text-sm text-gray-800">
                Enter your email, and we'll send you reset instructions.
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="form-control mt-3"
                required
                disabled={isSubmitted}
              />
            </div>

            <button
              type="submit"
              className={`border-2 border-gray-600 py-2 link rounded ${
                isLoading || isSubmitted ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading || isSubmitted}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>

          {isSubmitted && (
            <div className="flex flex-col items-center mt-4">
              <FaCheckCircle className="text-green-500 text-3xl mb-1" />
              <p className="text-sm text-gray-700 font-medium">
                Reset password email sent! You can retry after {timer}s.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
