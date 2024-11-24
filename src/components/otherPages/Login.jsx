"use client";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { apiUrl } from "../../../lib/api";

export default function Login() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login"); // "login" or "register"
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    if (token && tokenExpiration && new Date().getTime() < tokenExpiration) {
      router.push("/car-service-locator");
    } else {
      localStorage.removeItem("userToken");
      localStorage.removeItem("tokenExpiration");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("tokenExpiration", expirationTime);
        toast.success("Login successful!");
        router.push("/car-service-locator");
      } else {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      setError("Login failed. Please try again.");
      toast.error("Login failed. Please try again.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Successfully registered! Please login.");
        setActiveTab("login"); // Switch to login tab after registration
      } else {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <Toaster />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
        <div className="flex justify-center space-x-6 mb-8 border-b pb-6">
          <button
            className={`text-2xl font-semibold py-2 px-4 ${
              activeTab === "login"
                ? "border-b-4 border-blue-500 text-blue-600"
                : "text-gray-500"
            }`}
            type="button"
            onClick={() => setActiveTab("login")}
          >
            Sign In
          </button>
          <button
            className={`text-2xl font-semibold py-2 px-4 ${
              activeTab === "register"
                ? "border-b-4 border-green-500 text-green-600"
                : "text-gray-500"
            }`}
            type="button"
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-800">
                Email or Username
              </label>
              <input
                required
                type="text"
                name="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>
            </div>
          </form>
        )}

        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-800">
                Username
              </label>
              <input
                required
                type="text"
                name="username"
                value={registerData.username}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    username: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                required
                type="checkbox"
                className="rounded border-gray-300"
              />
              <span className="text-sm text-gray-600">
                I accept the privacy policy
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Register
              </button>
            </div>
          </form>
        )}

        {error && (
          <div className="mt-6 text-red-600 text-center font-semibold">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}
