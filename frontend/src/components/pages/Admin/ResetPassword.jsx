import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import Layout from "../../layout/Layout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Please enter both password fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const toastId = toast.loading("Resetting password...");

    try {
      const response = await axios.post(
        `https://iccheweb.vercel.app/api/admin/reset-password/${resetToken}`,
        { password }
      );

      if (response.status === 200) {
        toast.update(toastId, {
          render: "Password reset successful!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setIsSubmitted(true);
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Server error. Please try again.";
      setError(message);
      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[80%] max-w-xs mx-auto p-6 bg-white rounded-lg shadow-lg mt-7 text-xs sm:text-base">
          {!isSubmitted ? (
            <>
              <h1 className="text-xl font-bold text-start">Reset Your Password</h1>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <form className="flex flex-col gap-3 text-start" onSubmit={handleSubmit}>
                <div className="flex flex-col relative">
                  <label className="form-label">New Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
                    required
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className="flex flex-col relative">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
                    required
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                    onClick={handleToggleConfirmPassword}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button
                  type="submit"
                  className="border-2 border-gray-600 py-2 link px-5 mt-2 mb-4 rounded"
                >
                  Reset Password
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <FaCheckCircle className="text-green-500 text-5xl mb-2" />
              <p className="text-lg font-semibold text-gray-700">
                Your password has been successfully changed!
              </p>
              <Link
                to="/"
                className="text-black border-2 border-gray-600 py-2 link px-5 mt-2 mb-4 rounded no-underline"
              >
                Go to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
