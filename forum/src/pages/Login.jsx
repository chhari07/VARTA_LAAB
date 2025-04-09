/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAuth } from "../Firebase/AuthContext";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"; // Import icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div
    style={{
      backgroundImage:
        "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Roadside_Tea_Shop_-_Dock_Eastern_Boundary_Road_-_Kidderpore_-_Kolkata_2016-01-24_9099.JPG/1280px-Roadside_Tea_Shop_-_Dock_Eastern_Boundary_Road_-_Kidderpore_-_Kolkata_2016-01-24_9099.JPG')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-md p-6 bg-white/80 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 pr-10"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <EyeIcon className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white  bg-gradient-to-r from-sky-700 to-blue-600 "
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
