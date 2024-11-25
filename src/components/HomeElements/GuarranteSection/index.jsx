import React from "react";
import { Headphones, Truck, RefreshCcw, Shield } from "lucide-react";

const Guarantee = () => {
  const guarantees = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round the clock assistance",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Tracked Shipping",
      description: "Quick delivery service",
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "30 Day Returns",
      description: "Easy return policy",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Money Back Guarantee",
      description: "100% satisfaction guaranteed",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          {guarantees.map((item, index) => (
            <React.Fragment key={item.title}>
              <div className="w-full md:w-1/4 flex flex-col items-center text-center px-4 mb-8 md:mb-0">
                <div className="mb-4 text-blue-600">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              {index < guarantees.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-gray-200 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
