"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { apiUrl } from "../../../lib/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      const response = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage with expiration
        const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("tokenExpiration", expirationTime);

        // Show success toast
        toast.success("Login successful!");

        // Redirect to admin dashboard
        router.push("/dashboard");
      } else {
        // Handle errors
        setError(data.message || "Login failed. Please try again.");
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="login-section layout-radius">
      <Toaster />
      <div className="inner-container">
        <div className="right-box">
          <div className="form-sec">
            <h2 className="admin-title">Admin Login</h2>
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <div className="form_boxes">
                  <label>Email</label>
                  <input
                    required
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form_boxes">
                  <label>Password</label>
                  <input
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="btn-box">
                  <label className="contain">
                    Remember
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="form-submit">
                  <button type="submit" className="theme-btn">
                    Admin Login{" "}
                    <Image
                      alt=""
                      src="/images/arrow.svg"
                      width={14}
                      height={14}
                    />
                  </button>
                </div>
                {error && <p className="error-message">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
