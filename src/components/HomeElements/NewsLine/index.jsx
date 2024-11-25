"use client";
import React from "react";

const index = () => {
  // StarIcon component
  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className="mx-4"
    >
      <path
        d="M15.212 0.219238L16.8716 13.2286L29.881 14.8882L16.8716 16.5479L15.212 29.5573L13.5524 16.5479L0.542969 14.8882L13.5524 13.2286L15.212 0.219238Z"
        fill="white"
      />
    </svg>
  );

  // MarqueeContent component
  const MarqueeContent = () => (
    <div className="flex items-center px-4">
      <span>1500+ HAPPY CUSTOMERS</span>
      <StarIcon />
      <span>FREE SIM PLAN</span>
      <StarIcon />
      <span>FREE SHIPPING</span>
      <StarIcon />
    </div>
  );

  return (
    <div>
      {/* Responsive Image */}
      <div className="w-full">
        <img
          src="/last.webp"
          alt="Responsive"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Running Headline */}
      <div className="w-full bg-blue-900 text-white text-lg md:text-xl font-semibold overflow-hidden">
        <div className="relative flex whitespace-nowrap py-4">
          <div className="animate-marquee flex">
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </div>
          <div className="animate-marquee2 flex absolute top-[1rem]">
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </div>

      {/* CSS for Marquee Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite; /* Increased duration to 30s */
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee2 {
          animation: marquee2 30s linear infinite; /* Increased duration to 30s */
        }
      `}</style>
    </div>
  );
};

export default index;
