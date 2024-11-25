import React from "react";
import Image from "next/image";

const DontWait = () => {
  return (
    <div className="p-6 py-10 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
          Don’t Wait—Secure Your Vehicle Today!
        </h2>
      </div>

      {/* Contact Us Button */}
      <div className="text-center mb-12">
        <button className="px-6 py-3 md:px-8 md:py-4 bg-blue-900 text-white text-base md:text-xl font-semibold rounded-lg hover:bg-blue-800 transition">
          Contact Us Today ➜
        </button>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
          <Image
            src="/sim.webp"
            alt="Free One Year Sim Plan"
            width={48}
            height={48}
          />
          <div className="text-lg font-medium text-blue-900">
            Free One Year <br /> Sim Plan
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
          <Image
            src="/worried.webp"
            alt="Theft Recovery"
            width={48}
            height={48}
          />
          <div className="text-lg font-medium text-blue-900">
            Theft Recovery <br /> Free Support
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
          <Image
            src="/twentyfourserverice.webp"
            alt="24/7 Customer Support"
            width={48}
            height={48}
          />
          <div className="text-lg font-medium text-blue-900">
            24/7 Customer <br /> Support
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
          <Image
            src="/freeworld.webp"
            alt="Free Worldwide Shipping"
            width={48}
            height={48}
          />
          <div className="text-lg font-medium text-blue-900">
            Free Worldwide <br /> Shipping
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontWait;
