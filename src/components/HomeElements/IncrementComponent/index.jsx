"use client";
import React, { useState } from "react";

const index = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-[#EEF1FF]">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="bg-[#EEF1FF] p-8">
            <img
              src="/dingu.webp"
              alt="GPS Tracker Device"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#15216B]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#15216B]">
              Dingi Ultra Fast Vehicle GPS Tracker
            </h1>

            <p className="text-xl text-gray-600">
              Real-Time location tracking for any vehicle
            </p>

            <div className="text-3xl font-bold text-[#15216B]">$20.00</div>

            <div className="space-y-2">
              <p className="text-gray-600">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 rounded-full border-2 border-[#15216B] flex items-center justify-center text-[#15216B] text-xl font-bold hover:bg-[#15216B] hover:text-white transition"
                >
                  -
                </button>
                <span className="text-xl w-16 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 rounded-full border-2 border-[#15216B] flex items-center justify-center text-[#15216B] text-xl font-bold hover:bg-[#15216B] hover:text-white transition"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-[#15216B] text-white py-4 rounded-lg text-xl font-semibold hover:bg-blue-900 transition">
              Contact Us Today →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
