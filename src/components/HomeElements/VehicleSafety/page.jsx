import React from "react";
import Image from "next/image";

const VehicleSafety = () => {
  return (
    <div className="bg-white py-16 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 py-4">
          Is Your Vehicle Truly Safe?
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          With vehicle theft rates increasing by 20% in Thailand last year,
          ensuring the safety of your vehicle has never been more critical.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-6">
        {/* First Feature */}
        <div className="bg-blue-100 rounded-3xl p-8 shadow-md text-center w-full h-[450px] flex flex-col justify-between">
          <div className="mx-auto mb-6 w-24 h-24 relative">
            <Image
              src="/worried.webp"
              alt="Worried Icon"
              layout="intrinsic" // Ensures correct aspect ratio
              width={96} // Width of the image
              height={96} // Height of the image
              objectFit="contain"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-900">Worried?</h3>
          <p className="text-gray-600 mt-4 text-lg">
            Worried about your vehicle’s safety? Theft can happen when you least
            expect it.
          </p>
        </div>

        {/* Second Feature */}
        <div className="bg-blue-100 rounded-3xl p-8 shadow-md text-center w-full h-[450px] flex flex-col justify-between">
          <div className="mx-auto mb-6 w-24 h-24 relative">
            <Image
              src="/anxious.webp"
              alt="Anxious Icon"
              layout="intrinsic" // Ensures correct aspect ratio
              width={96} // Width of the image
              height={96} // Height of the image
              objectFit="contain"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-900">Anxious?</h3>
          <p className="text-gray-600 mt-4 text-lg">
            Are you constantly anxious about not knowing where your vehicle is?
          </p>
        </div>

        {/* Third Feature */}
        <div className="bg-blue-100 rounded-3xl p-8 shadow-md text-center w-full h-[450px] flex flex-col justify-between">
          <div className="mx-auto mb-6 w-24 h-24 relative">
            <Image
              src="/youdeservebetter.webp"
              alt="You Deserve Better Icon"
              layout="intrinsic" // Ensures correct aspect ratio
              width={96} // Width of the image
              height={96} // Height of the image
              objectFit="contain"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-900">
            You Deserve Better
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            You deserve peace of mind in today’s unpredictable world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleSafety;
