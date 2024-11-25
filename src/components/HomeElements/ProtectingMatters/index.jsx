import React from "react";
import Image from "next/image";

const ProtectingMatters = () => {
  return (
    <div className="py-36">
      <div className="lg:flex md:flex lg:flex-row md:flex-row items-center w-full py-30 px-6 lg:px-20 bg-white">
        <div className="lg:w-3/5 w-full flex justify-start">
          <div className="relative w-full h-[600px]">
            <Image
              src="/matters.webp"
              alt="GPS Tracking Solution"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="lg:w-2/5 w-full text-left mb-6 lg:mb-0 lg:ml-16">
          <h2 className="text-5xl font-bold text-blue-900 leading-tight mb-8">
            Protecting what matters most
          </h2>

          <div className="space-y-6 text-xl text-blue-900 font-light">
            <p>
              In today's uncertain world, safeguarding what we value—especially
              our vehicles—is essential.
            </p>

            <p>They represent our freedom and connection to loved ones.</p>

            <p>
              At Dingi, we believe everyone deserves peace of mind when it comes
              to vehicle safety.
            </p>

            <p>
              Our GPS tracking technology is not just a tool; it's a commitment
              to ensuring that every journey is secure.
            </p>

            <p>
              By choosing our tracker, you're taking a proactive step toward
              protecting your vehicle and embracing a future where safety is a
              priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectingMatters;
