import React from "react";
import Image from "next/image";

const ComparisonTable = () => {
  const features = [
    "1 Second Location Tracking",
    "Real-Time Location Updates",
    "Live 3D Map Preview",
    "Free Installation Support",
    "Free Theft Recovery Support",
    "Driver Monitoring",
    "Geo-Fencing Capability",
    "Zero Hidden Fees",
    "Mobile & Web App",
    "One Year Warranty",
    "Discreet Placement",
  ];

  return (
    <div className="bg-white py-10  px-4 md:py-30  md:px-8">
      <div className="max-w-5xl mx-auto relative">
        {/* Header Section */}
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-5 h-32 md:h-40 bg-white rounded-tl-3xl border-r-0"></div>
          <div className="col-span-3 flex flex-col items-center justify-center h-32 md:h-40 bg-white border-2 border-b-0 rounded-t-3xl  z-20">
            <Image
              src="/ddd.webp"
              alt="VS"
              width={220}
              height={220}
              className="mx-auto"
            />
          </div>
          <div className="col-span-4 h-32 md:h-40 bg-white rounded-tr-3xl border-l-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[#1a237e] text-lg md:text-2xl font-medium">
                Regular Vehicle
              </div>
              <div className="text-[#1a237e] text-sm md:text-xl">
                GPS Trackers
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="grid grid-cols-12 gap-0">
                {/* Left Column */}
                <div
                  className={`col-span-5 bg-blue-100 py-6 px-8 md:py-8 md:px-12 text-[#1a237e] text-base md:text-xl border-r-0 ${
                    index !== features.length - 1
                      ? "border-b border-[#1a237e] border-opacity-20"
                      : ""
                  } ${index === 0 ? "rounded-tl-3xl" : ""}`}
                >
                  {feature}
                </div>

                {/* Middle Column */}
                <div
                  className={`col-span-3 bg-white py-6 md:py-8 flex justify-center items-center border-x-2 z-10 ${
                    index !== features.length - 1
                      ? "border-b border-[#1a237e] border-opacity-20"
                      : ""
                  }`}
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#92C63C"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 12L10 16L18 8"
                      stroke="#92C63C"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Right Column */}
                <div
                  className={`col-span-4 bg-blue-100 py-6 md:py-8 flex justify-center items-center border-l-0 ${
                    index !== features.length - 1
                      ? "border-b border-[#1a237e] border-opacity-20"
                      : ""
                  } ${index === 0 ? "rounded-tr-3xl" : ""}`}
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#EA4949"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 8L16 16M16 8L8 16"
                      stroke="#EA4949"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-5 h-10 md:h-12 bg-blue-100 rounded-bl-3xl border-r-0"></div>
          <div className="col-span-3 h-14 md:h-20 bg-white border-2 border-t-0 rounded-b-3xl mb-[-1rem] z-10"></div>
          <div className="col-span-4 h-10 md:h-12 bg-blue-100 rounded-br-3xl border-l-0"></div>
        </div>

        {/* Page Shadow Effect */}
        <div className="absolute inset-0 -bottom-8 bg-blue-100 -z-10 rounded-3xl transform translate-y-4 opacity-50"></div>
      </div>
    </div>
  );
};

export default ComparisonTable;
