import React from "react";
import Image from "next/image"; // Next.js Image component

const CustomerSaying = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 w-full pt-12">
      {/* Card 1: Header Section */}
      <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white shadow-lg rounded-lg w-full lg:w-1/4">
        <h2 className="text-2xl lg:text-4xl font-extrabold mb-2 text-gray-800">
          What our customers are saying
        </h2>
        <div className="flex justify-center items-center text-yellow-500 mb-2">
          <span className="text-xl lg:text-2xl">★★★★★</span>
        </div>
        <p className="text-gray-600 text-lg lg:text-2xl font-semibold">
          5000+ 5 Star reviews
        </p>
      </div>

      {/* Card 2: Great Technical Support */}
      <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white shadow-lg rounded-lg w-full lg:w-1/4">
        <Image
          src="/technicalsupport.jpg"
          alt="Technical Support"
          width={300}
          height={200}
          className="w-full h-auto"
        />
        <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
          Great Technical Support!
        </h3>
        <p className="text-gray-600 text-sm lg:text-base">
          “I was hesitant to invest in a GPS tracker, but after seeing how
          quickly and accurately it locates my vehicle, I know it was the right
          choice. The technical support during the installation was the best
          ever, making the process seamless. It has completely changed my
          perspective on vehicle security!”
        </p>
        <p className="text-gray-800 font-medium">
          SOFIA M.{" "}
          <span className="opacity-60 text-sm font-normal">/ Spain</span>
        </p>
      </div>

      {/* Card 3: Wow! Free Theft Recovery */}
      <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white shadow-lg rounded-lg w-full lg:w-1/4">
        <Image
          src="/carrecovering.jpg"
          alt="Theft Recovery"
          width={300}
          height={200}
          className="w-full h-auto"
        />
        <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
          Wow! Free Theft Recovery
        </h3>
        <p className="text-gray-600 text-sm lg:text-base">
          "I used to worry constantly about my car being stolen. Since
          installing the tracker, I feel a huge weight lifted off my shoulders.
          The real-time updates give me peace of mind I never thought I could
          have. When my vehicle was stolen, the free recovery support was
          invaluable. I was able to locate it quickly with their help."
        </p>
        <p className="text-gray-800 font-medium">
          AKASH P.{" "}
          <span className="opacity-60 text-sm font-normal">/ India</span>
        </p>
      </div>

      {/* Card 4: Super Affordable! */}
      <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white shadow-lg rounded-lg w-full lg:w-1/4">
        <Image
          src="/superaffordable.webp"
          alt="Affordable"
          width={300}
          height={200}
          className="w-full h-auto"
        />
        <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
          Super Affordable!
        </h3>
        <p className="text-gray-600 text-sm lg:text-base">
          "The mobile app is incredibly user-friendly and packed with features.
          I love being able to monitor my driver’s behavior and track my
          vehicle's location from my phone. With the free SIM plan for the first
          year and a renewal fee that costs just the price of a coffee, it’s an
          invaluable tool for any vehicle owner!"
        </p>
        <p className="text-gray-800 font-medium">
          EMMA J.{" "}
          <span className="opacity-60 text-sm font-normal">/ Australia</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerSaying;
