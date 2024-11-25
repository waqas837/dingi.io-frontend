import Image from "next/image";

const WorldTrust = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white py-14 md:py-28">
      {/* Section 1: Header */}
      <div className="flex flex-col items-center justify-center bg-white text-blue-950 py-6 md:py-8 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight">
          The world trusts <br />
          Dingi to track their vehicles
        </h1>
      </div>

      {/* Section 2: Proven Results */}
      <div className="flex flex-col items-center justify-center bg-white py-4 md:py-8 px-4">
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center">
          Proven Results You Can Trust
        </p>
      </div>

      {/* Section 3: Images in a Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 bg-white py-8 px-4 md:py-16">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex justify-center items-center border border-gray-200 rounded-md overflow-hidden"
          >
            <Image
              src={`/${index + 1}.webp`}
              alt={`Image ${index + 1}`}
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Section 4: Stats Boxes */}
      <div className="flex flex-col items-center bg-white py-8 md:py-16 px-4">
        <div className="flex flex-col sm:flex-row justify-around w-full max-w-5xl space-y-8 sm:space-y-0 sm:space-x-6">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">
              10 years
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Innovating GPS tech
            </p>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">
              50M+
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Users worldwide
            </p>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">
              460K+
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Vehicles recovered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldTrust;
