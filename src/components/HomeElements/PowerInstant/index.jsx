import React from "react";

const PowerInstant = () => {
  return (
    <div className="w-full overflow-x-hidden ">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8 py-12 sm:py-36 px-2">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
          Discover the Power of{" "}
          <span className="inline xs:hidden">
            <br />
          </span>
          Instant{" "}
          <span className="hidden xs:inline">
            <br />
          </span>
          Tracking—Watch Now!
        </h2>
      </div>

      {/* Dotted Line */}
      <div className="border-b border-dotted border-gray-300 max-w-7xl mx-auto"></div>

      {/* Video Container */}
      <div className="py-4 sm:py-10 px-2 sm:px-4 max-w-7xl mx-auto">
        <div className="relative w-full aspect-video bg-white rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/r3YFhLNBx14"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              maxHeight: "calc(100vh - 200px)",
              minHeight: "200px",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PowerInstant;
