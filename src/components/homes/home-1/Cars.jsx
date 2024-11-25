"use client";
import React from "react";
import { Star, StarHalf } from "lucide-react";
import Link from "next/link";

const StarRating = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <div style={{ display: "flex", gap: "2px" }}>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={index} size={18} fill="#FFD700" color="#FFD700" />
        ))}
        {hasHalfStar && <StarHalf size={18} fill="#FFD700" color="#FFD700" />}
        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <Star key={`empty-${index}`} size={18} color="#D1D5DB" />
        ))}
      </div>
      <span
        style={{
          color: "#6B7280",
          fontSize: "14px",
          marginLeft: "4px",
        }}
      >
        ({reviewCount})
      </span>
    </div>
  );
};

const AllGaragesCards = () => {
  const garages = [
    {
      id: 1,
      name: "Luxury Auto Garage",
      services: ["Engine Repair", "Oil Change", "Brake Service"],
      rating: 4.5,
      reviewCount: 120,
      image: "/1.jpg",
    },
    {
      id: 2,
      name: "Speedy Repairs",
      services: ["Tire Replacement", "Battery Service", "Alignment"],
      rating: 5,
      reviewCount: 250,
      image: "/2.jpg",
    },
    {
      id: 3,
      name: "Premium Car Care",
      services: ["Full Inspection", "Car Wash", "Detailing"],
      rating: 4,
      reviewCount: 90,
      image: "/2.jpg",
    },
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    justifyContent: "center",
    padding: "24px",
  };

  const cardStyle = {
    width: "350px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "all 0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  };

  const cardContentStyle = {
    padding: "16px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
  };

  const servicesContainerStyle = {
    fontSize: "14px",
    color: "#4b5563",
    marginBottom: "12px",
  };

  const servicesTitleStyle = {
    fontWeight: "500",
    marginBottom: "4px",
  };

  const servicesListStyle = {
    listStyleType: "disc",
    paddingLeft: "20px",
    lineHeight: "1.4",
  };

  const reviewStyle = {
    marginBottom: "12px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
  };

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "10px 10px" }}>All Garages</h2>
      <div style={containerStyle}>
        {garages.map((garage) => (
          <div
            key={garage.id}
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img src={garage.image} alt={garage.name} style={imageStyle} />
            <div style={cardContentStyle}>
              <h3 style={titleStyle}>{garage.name}</h3>
              <div style={servicesContainerStyle}>
                <p style={servicesTitleStyle}>Main Services:</p>
                <ul style={servicesListStyle}>
                  {garage.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              <div style={reviewStyle}>
                <StarRating
                  rating={garage.rating}
                  reviewCount={garage.reviewCount}
                />
              </div>
              <Link
                href={"/garage-profile"}
                style={buttonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#1d4ed8";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#2563eb";
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllGaragesCards;
