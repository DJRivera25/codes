import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch } from "@headlessui/react";

const Register = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await axios.post("https://movieapp-api-lms1.onrender.com/users/register", {
        email,
        password,
      });
      toast.success("Registration successful! Redirecting...");
      setTimeout(() => (window.location.href = "/login"), 2000);
    } catch (error) {
      const msg = error.response?.data?.message || "Registration failed. Try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = (field) =>
    `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
      errors[field] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-violet-500"
    }`;

  return (
    <div className=" text-black min-h-screen flex items-center justify-center px-4 transition-colors">
      <ToastContainer />

      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-violet-700 dark:text-violet-300">Create Your Account</h1>
        </div>

        <p className="text-gray-600 dark:text-gray-300">Login to view our latest movies for free</p>

        <form onSubmit={handleSignup} className="space-y-4" noValidate>
          <div>
            <input
              type="email"
              aria-label="Email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses("email")}
              required
            />
          </div>
          <div></div>
          <div>
            <input
              type="password"
              aria-label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClasses("password")}
              required
            />
          </div>
          <div>
            <input
              type="password"
              aria-label="Confirm Password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputClasses("confirmPassword")}
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded font-semibold flex justify-center items-center transition disabled:opacity-50"
          >
            {loading ? (
              <span className="loader ease-linear rounded-full border-2 border-t-2 border-white h-5 w-5"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-violet-600 hover:underline font-medium">
            Log In
          </a>
        </p>
      </div>

      <style>{`
        .loader {
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Register;
