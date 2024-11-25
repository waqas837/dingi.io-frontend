import React from "react";
import SpecificationItem from "./SpecificationItem";

const Specification = () => {
  const specifications = [
    {
      id: "tech-specs",
      title: "Technical Specifications",
      content: (
        <div className="space-y-2">
          <p className="font-semibold">3 cm Width, 16 cm Length, 3 cm Height</p>
          <p>Supports 9V-90V, making it suitable for all vehicle types</p>
        </div>
      ),
    },
    {
      id: "vehicles",
      title: "Vehicles Supported",
      content: (
        <div className="space-y-2">
          <p className="font-semibold">9V-90V Voltage Range</p>
          <p>
            Supports Cars - 12-75v, Supports Trucks - 12-75v, Supports Motor
            Bikes - 12-75v, Supports Rental Cars - 12-75v, Supports Off-Road
            Vehicle - 12-90V, Supports Public Transport - 12-75 V
          </p>
        </div>
      ),
    },
    {
      id: "renewal",
      title: "Renewal Cost",
      content: (
        <div className="space-y-2">
          <p className="font-semibold">First Year Free</p>
          <p>
            After activating the GPS tracker with the device IMEI number, the
            SIM card will automatically be activated. A renewal will be required
            after 365 days of use, with a fee of just 200 Baht in Thailand. We
            offer the most affordable renewal plan on the market, providing
            unlimited use for one year.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#15216B] text-center mb-12">
        Specification you should know
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Specifications */}
        <div className="space-y-6">
          {specifications.map((spec) => (
            <SpecificationItem
              key={spec.id}
              title={spec.title}
              content={spec.content}
            />
          ))}
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center items-center">
          <img
            src="/specification.webp"
            alt="GPS Tracker"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Specification;
