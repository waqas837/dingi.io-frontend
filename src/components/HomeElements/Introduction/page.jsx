import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center px-4 sm:px-6 md:px-20">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile Background */}
        <Image
          src="/carinwoodsmobile.webp"
          alt="Mobile Background"
          layout="fill"
          objectFit="cover"
          className="block md:hidden"
        />
        {/* Desktop Background */}
        <Image
          src="/carinwoodsweb.webp"
          alt="Web Background"
          layout="fill"
          objectFit="cover"
          className="hidden md:block"
        />
      </div>

      {/* Content Section */}
      <div className="relative text-white max-w-lg z-10 space-y-4 sm:space-y-6 mt-32 sm:mt-40 md:mt-20">
        {/* Title with Stars */}
        <div className="flex flex-col space-y-2">
          {/* Stars and Rating */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="gold"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="text-yellow-500 sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path d="M12 .587l3.668 7.431 8.212 1.179-5.938 5.788 1.406 8.19L12 18.897l-7.348 3.868 1.406-8.19L.12 9.197l8.212-1.179z" />
              </svg>
            ))}
            <p className="text-xs sm:text-sm md:text-base text-gray-200">
              Rated 5 Stars By 1000s
            </p>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight">
            Experience the World's <br />
            Fastest GPS Tracker
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed">
          Locate your vehicle in just 1 second with real-time tracking. Enjoy
          peace of mind as you monitor driver behavior and access critical
          data—all at your fingertips.
        </p>

        {/* Full-width Button */}
        <a
          href="#"
          className="inline-flex items-center justify-center w-full sm:w-3/4 md:w-2/4 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition duration-300 text-xs sm:text-sm md:text-lg"
        >
          Contact Us ➔
        </a>
      </div>
    </div>
  );
};

export default Introduction;
