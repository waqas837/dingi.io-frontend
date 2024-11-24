import React from "react";
import Image from "next/image";

const ChooseDingi = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col w-full md:w-3/4 bg-white py-10 lg:py-20 px-4 lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-5xl font-bold text-blue-950">
            Why choose Dingi for your vehicle safety?
          </h1>
          <p className="text-base lg:text-xl text-blue-950 mt-4 lg:mt-6 leading-relaxed max-w-3xl">
            Imagine this: You're enjoying a day out, and suddenly, you receive a
            notification that your vehicle has been moved. In that moment, you
            realize you have the power to track its location instantly. This is
            the peace of mind our GPS tracker provides—keeping you connected and
            informed no matter where you are.
          </p>
        </div>

        {/* Section 1: Installation Process */}
        <div className="flex flex-row lg:flex-row items-center mb-8 lg:mb-12 gap-4 lg:gap-8">
          {/* Image on Left for all devices */}
          <div className="w-1/3 lg:w-1/3">
            <Image
              src="/c1.webp"
              alt="Installation process"
              width={150}
              height={75}
              className="w-full h-auto"
            />
          </div>
          {/* Text on Right */}
          <div className="w-2/3 lg:w-2/3 text-left">
            <h2 className="text-lg lg:text-2xl font-bold text-blue-950">
              Worried about the installation process?
            </h2>
            <p className="text-sm lg:text-lg text-blue-950 mt-2 lg:mt-4 leading-relaxed">
              Don't be! Our GPS tracker is designed for easy installation,
              featuring the longest cable length in the market, allowing you to
              fit it discreetly in any vehicle and location. Plus, we offer
              support to guide you every step of the way.
            </p>
          </div>
        </div>

        {/* Section 2: Real-Time Tracking */}
        <div className="flex flex-row lg:flex-row-reverse items-center mb-8 lg:mb-12 gap-4 lg:gap-8">
          {/* Image on Left for mobile, Right for desktop */}
          <div className="w-1/3 lg:w-1/3">
            <Image
              src="/c2.webp"
              alt="Real-time tracking"
              width={150}
              height={75}
              className="w-full h-auto"
            />
          </div>
          {/* Text on Right for mobile, Left for desktop */}
          <div className="w-2/3 lg:w-2/3 text-left">
            <h2 className="text-lg lg:text-2xl font-bold text-blue-950">
              Not convinced about real-time tracking?
            </h2>
            <p className="text-sm lg:text-lg text-blue-950 mt-2 lg:mt-4 leading-relaxed">
              Our technology delivers accurate updates in just 1 second, so you
              can always know where your vehicle is. We offer a 100% Money Back
              Guarantee if you are not happy for any reason.
            </p>
          </div>
        </div>

        {/* Section 3: Cost Concerns */}
        <div className="flex flex-row lg:flex-row items-center gap-4 lg:gap-8">
          {/* Image on Left for all devices */}
          <div className="w-1/3 lg:w-1/3">
            <Image
              src="/c3.webp"
              alt="Cost-effective solution"
              width={150}
              height={75}
              className="w-full h-auto"
            />
          </div>
          {/* Text on Right */}
          <div className="w-2/3 lg:w-2/3 text-left">
            <h2 className="text-lg lg:text-2xl font-bold text-blue-950">
              Think it's too expensive?
            </h2>
            <p className="text-sm lg:text-lg text-blue-950 mt-2 lg:mt-4 leading-relaxed">
              Our solution offers incredible value with no hidden fees. Just a
              simple renewal fee, the price of a cup of coffee, after the first
              year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseDingi;
