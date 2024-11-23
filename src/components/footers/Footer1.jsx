"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { apiUrl } from "../../../lib/api";

export default function Footer1() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/contacts/whatsapp`, {
          method: "GET",
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch contacts.");
        }
        setContactInfo(data);
      } catch (error) {
        console.log(error || "Error fetching contacts.");
      }
    };

    fetchContacts();
  }, []);

  return (
    <footer>
      <div className="footer-top">
        <div className="boxcar-container">
          <div className="right-box">
            <div className="top-left wow fadeInUp">
              <h6 className="title">Join BoxCar</h6>
              <div className="text">
                Receive pricing updates, shopping tips &amp; more!
              </div>
            </div>
            <div className="subscribe-form wow fadeInUp" data-wow-delay="100ms">
              <form
                onSubmit={(e) => e.preventDefault()}
                method="post"
                action="#"
              >
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="email"
                    defaultValue=""
                    placeholder="Your e-mail address"
                    required
                  />
                  <button
                    type="button"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">Sign Up</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-section">
        <div className="boxcar-container">
          <div className="row">
            {/* Footer Column */}
            <div className="footer-column-two col-lg-9 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="footer-widget links-widget wow fadeInUp"
                    data-wow-delay="100ms"
                  ></div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="footer-widget links-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  ></div>
                </div>
              </div>
            </div>
            {/* Contact Info */}
            <div className="footer-column col-lg-3 col-md-12 col-sm-12">
              <div
                className="footer-widget social-widget wow fadeInUp"
                data-wow-delay="400ms"
              >
                <h4 className="widget-title">Contact Info</h4>
                <div className="widget-content">
                  {contactInfo &&
                    contactInfo.map((val) => (
                      <p style={{ color: "white" }}>
                        {val.name || "N/A"} <br /> {val.phone_number || "N/A"}
                      </p>
                    ))}
                  <div className="social-icons">
                    <h6 className="title">Connect With Us</h6>
                    {/* <ul>
                      {socialMediaLinks.map((social, index) => (
                        <li key={index}>
                          <a href={social.link}>
                            <i className={social.iconClass} />
                          </a>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Footer Bottom */}
      <div className="footer-bottom">
        <div className="boxcar-container">
          <div className="inner-container">
            <div className="copyright-text wow fadeInUp">
              © <a href="#">2024 Boxcars.com. All rights reserved.</a>
            </div>
            <ul className="footer-nav wow fadeInUp" data-wow-delay="200ms">
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Notice</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
