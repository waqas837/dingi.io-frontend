"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { apiUrl } from "../../../lib/api";
 
export default function Login() {
  const router = useRouter();
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
      router.push("/dashboard");
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
        router.push("/");
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
    <section className="login-section layout-radius">
      <Toaster />
      <div className="inner-container">
        <div className="right-box">
          <div className="form-sec">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Sign in
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Register
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="form-box">
                  <form onSubmit={handleLogin}>
                    <div className="form_boxes">
                      <label>Email or Username</label>
                      <input
                        required
                        type="text"
                        name="email"
                        value={loginData.email}
                        onChange={(e) =>
                          setLoginData({ ...loginData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form_boxes">
                      <label>Password</label>
                      <input
                        required
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="btn-box">
                      <label className="contain">
                        Remember
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <a href="#" className="pasword-btn">
                        Forgotten password?
                      </a>
                    </div>
                    <div className="form-submit">
                      <button type="submit" className="theme-btn">
                        Login{" "}
                        <Image
                          alt=""
                          src="/images/arrow.svg"
                          width={14}
                          height={14}
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="form-box two">
                  <form onSubmit={handleRegister}>
                    <div className="form_boxes">
                      <label>Username</label>
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
                      />
                    </div>
                    <div className="form_boxes">
                      <label>Email</label>
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
                      />
                    </div>
                    <div className="form_boxes">
                      <label>Password</label>
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
                      />
                    </div>
                    <div className="form-submit">
                      <button type="submit" className="theme-btn">
                        Register{" "}
                        <Image
                          alt=""
                          src="/images/arrow.svg"
                          width={14}
                          height={14}
                        />
                      </button>
                    </div>
                    <div className="btn-box">
                      <label className="contain">
                        I accept the privacy policy
                        <input
                          required
                          type="checkbox"
                          defaultChecked="checked"
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
