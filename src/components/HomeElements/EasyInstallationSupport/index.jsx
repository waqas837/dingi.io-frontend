import Image from "next/image";
import React from "react";

const EasyInstallationSupport = () => {
  return (
    <div className="py-20">
      <div className="lg:flex lg:flex-row md:flex md:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
        {/* Image Section */}
        <div className="lg:w-full w-full flex justify-start lg:-ml-8">
          <div className="relative w-full h-full">
            <Image
              src="/easyinstallationok.webp"
              alt="First year free"
              layout="responsive"
              width={1200}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:ml-10">
          {/* Title */}
          <h2 className="text-6xl font-extrabold text-blue-900 px-3 leading-tight">
            Easy installation <br />
            support for your <br />
            peace of mind
          </h2>

          {/* Description */}
          <div className="mt-8 space-y-4 px-3">
            <p className="text-2xl text-blue-900 font-thin">
              We understand that installing a GPS tracker can seem daunting.
            </p>
            <p className="text-2xl text-blue-900 font-thin">
              That’s why we offer comprehensive installation support to ensure a
              seamless experience.
            </p>
            <p className="text-2xl text-blue-900 font-thin">
              Our team is dedicated to guiding you through the process, making
              sure your tracker is installed correctly for optimal performance.
            </p>
            <p className="text-2xl text-blue-900 font-thin">
              In addition, we're developing an app with blueprints and diagrams
              in Thai to assist mechanics in popular vehicles throughout
              Thailand.
            </p>
            <p className="text-2xl text-blue-900 font-thin">
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
