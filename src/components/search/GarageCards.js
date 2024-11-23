"use client";
import React from "react";
import { Star, StarHalf } from "lucide-react";
import Link from "next/link";

const StarRating = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <Star key={index} size={18} fill="#FFD700" color="#FFD700" />
        ))}
        {hasHalfStar && <StarHalf size={18} fill="#FFD700" color="#FFD700" />}
        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <Star key={`empty-${index}`} size={18} color="#D1D5DB" />
        ))}
      </div>
      <span className="text-sm text-gray-500 ml-2">({reviewCount})</span>
    </div>
  );
};

const GaragesCards = () => {
  const garages = [
    {
      id: 1,
      name: "Luxury Auto Garage",
      services: ["Engine Repair", "Oil Change", "Brake Service"],
      rating: 4.5,
      reviewCount: 120,
      image: "/g1.jpg",
    },
    {
      id: 2,
      name: "Speedy Repairs",
      services: ["Tire Replacement", "Battery Service", "Alignment"],
      rating: 5,
      reviewCount: 250,
      image: "/g2.jpg",
    },
    {
      id: 3,
      name: "Premium Car Care",
      services: ["Full Inspection", "Car Wash", "Detailing"],
      rating: 4,
      reviewCount: 90,
      image: "/g2.jpg",
    },
    // Add more garages as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {garages.map((garage) => (
        <div
          key={garage.id}
          className="w-full bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={garage.image}
            alt={garage.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {garage.name}
            </h3>
            <div className="text-sm text-gray-600 mb-4">
              <p className="font-medium mb-1">Main Services:</p>
              <ul className="list-disc pl-5">
                {garage.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <StarRating
                rating={garage.rating}
                reviewCount={garage.reviewCount}
              />
            </div>
            <Link
              href={"/garage-profile"}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-colors duration-200 hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaragesCards;
