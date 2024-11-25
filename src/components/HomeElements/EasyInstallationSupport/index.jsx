import Image from "next/image";
import React from "react";

const EasyInstallationSupport = () => {
  return (
    <div className="py-20 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full py-12 px-4 lg:px-20 bg-white gap-8">
        {/* Image Section */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md lg:max-w-full h-auto">
            <Image
              src="/easyinstallationok.webp"
              alt="Easy Installation Support"
              layout="responsive"
              width={1200}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full text-center lg:text-left">
          {/* Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-blue-900 leading-tight px-3">
            Easy installation <br />
            support for your <br />
            peace of mind
          </h2>

          {/* Description */}
          <div className="mt-8 space-y-4 px-3">
            <p className="text-sm sm:text-base lg:text-2xl text-blue-900 font-light">
              We understand that installing a GPS tracker can seem daunting.
            </p>
            <p className="text-sm sm:text-base lg:text-2xl text-blue-900 font-light">
              That’s why we offer comprehensive installation support to ensure a
              seamless experience.
            </p>
            <p className="text-sm sm:text-base lg:text-2xl text-blue-900 font-light">
              Our team is dedicated to guiding you through the process, making
              sure your tracker is installed correctly for optimal performance.
            </p>
            <p className="text-sm sm:text-base lg:text-2xl text-blue-900 font-light">
              In addition, we're developing an app with blueprints and diagrams
              in Thai to assist mechanics in popular vehicles throughout
              Thailand.
            </p>
            <p className="text-sm sm:text-base lg:text-2xl text-blue-900 font-light">
              This will simplify the installation process, so you can enjoy the
              benefits of your GPS tracker without hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyInstallationSupport;
