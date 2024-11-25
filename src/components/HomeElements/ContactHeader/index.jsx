import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactHeader = () => {
  return (
    <>
      <header className="bg-white p-2 py-4 flex items-center justify-evenly fixed top-0 left-0 w-full shadow-lg z-50">
        {/* Left Side: Image and Text (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="w-12 h-12 relative">
            <Image
              src="/gpstrackerheaderlogo.webp"
              alt="GPS Tracker"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-blue-950 font-semibold">
              Dingi Ultra Fast Vehicle GPS Tracker
            </h1>
            <p className="text-gray-800 text-xs">World's Fastest GPS Tracker</p>
          </div>
        </div>

        {/* Right Side: Contact Button (Always Visible) */}
        <a
          href="#"
          className="bg-blue-950 text-white py-3.5 px-10 flex justify-center items-center rounded-lg w-full md:w-[50%]"
        >
          <span className="mr-2 font-semibold text-sm">Contact Us Today</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.854a.5.5 0 0 0 0-.708L6.707 3.707a.5.5 0 0 0-.708.708L9.793 7H1.5a.5.5 0 0 0 0 1h8.293l-3.793 3.793a.5.5 0 0 0 .708.708l4-4z" />
          </svg>
        </a>
      </header>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
        <Link
          href="/login"
          className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Login
        </Link>
        <Link
          href="/admin"
          className="bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          Admin Login
        </Link>
      </div>
    </>
  );
};

export default ContactHeader;
