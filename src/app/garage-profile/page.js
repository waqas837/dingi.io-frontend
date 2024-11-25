"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin } from "lucide-react";
import Footer1 from "../../components/footers/Footer1";
import Header1 from "../../components/headers/Header1";

const GarageProfile = () => {
  const [userLocation, setUserLocation] = useState(null);

  const destination = {
    latitude: 35.8617,
    longitude: 104.1954,
  };
  // Fetch current location using the Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy, // optional: to check accuracy
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Unable to retrieve your location.");
        },
        {
          enableHighAccuracy: true, // Request high accuracy
          timeout: 5000, // Optional: set a timeout for location retrieval
          maximumAge: 0, // Optional: don't use cached location
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const containerStyle = {
    backgroundColor: "var(--theme-color-dark)", // light gray background
    padding: "40px 24px",
    minHeight: "100vh",
  };

  const headerStyle = {
    display: "flex",
    gap: "24px",
    flexDirection: "row",
    marginBottom: "32px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    maxWidth: "1200px",
    margin: "auto",
  };

  const imageStyle = {
    width: "320px",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    flex: 1,
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
  };

  const aboutUsStyle = {
    marginTop: "16px",
    fontSize: "16px",
    color: "#4b5563",
    lineHeight: "1.5",
  };

  const servicesStyle = {
    fontSize: "16px",
    color: "#4b5563",
    marginTop: "12px",
  };

  const servicesListStyle = {
    listStyleType: "none",
    paddingLeft: "0",
    lineHeight: "1.8",
    marginTop: "8px",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "16px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1D4ED8",
  };

  return (
    <>
      <Header1 />
      <div style={containerStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
          }}
        >
          Garage Profile
        </h2>

        <div style={headerStyle}>
          <img src="/1.jpg" alt="Garage" style={imageStyle} />
          <div style={detailsStyle}>
            <h3 style={titleStyle}>Luxury Auto Garage</h3>

            <div style={servicesStyle}>
              <h4 style={{ fontWeight: "500", color: "#1f2937" }}>
                Main Services:
              </h4>
              <ul style={servicesListStyle}>
                <li>
                  <span style={{ fontWeight: "500" }}>Engine Repair</span> -{" "}
                  <span style={{ color: "#1f2937" }}>$150</span>
                </li>
                <li>
                  <span style={{ fontWeight: "500" }}>Oil Change</span> -{" "}
                  <span style={{ color: "#1f2937" }}>$45</span>
                </li>
                <li>
                  <span style={{ fontWeight: "500" }}>Brake Service</span> -{" "}
                  <span style={{ color: "#1f2937" }}>$100</span>
                </li>
              </ul>
            </div>

            <div style={aboutUsStyle}>
              <h4 style={{ fontWeight: "500", color: "#1f2937" }}>About Us</h4>
              <p>
                We are a premium auto repair shop offering top-notch services
                for your vehicle.
              </p>
            </div>
            <p>+1(123)456-7890</p>
            <div style={{ display: "flex", gap: "16px" }}>
              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
                onClick={() => (window.location.href = "tel:+1(123)456-7890")}
              >
                <Phone size={18} />
                Call Us
              </button>

              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
                onClick={() => {
                  if (userLocation) {
                    // If the user's location is fetched, open Google Maps for directions
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${destination.latitude},${destination.longitude}`,
                      "_blank"
                    );
                  } else {
                    alert("Unable to fetch your location.");
                  }
                }}
              >
                <MapPin size={18} />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default GarageProfile;
