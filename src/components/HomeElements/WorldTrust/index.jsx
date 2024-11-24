import Image from "next/image";

const WorldTrust = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white py-28">
      {/* Section 1: Header */}
      <div className="flex flex-col items-center justify-center bg-white text-blue-950 py-8">
        <h1 className="text-5xl font-extrabold text-center">
          The world trusts <br />
          Dingi to track their vehicles
        </h1>
      </div>

      {/* Section 2: Proven Results */}
      <div className="flex flex-col items-center justify-center bg-white py-8">
        <p className="text-xl text-gray-600">Proven Results You Can Trust</p>
      </div>

      {/* Section 3: Images in a Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 bg-white py-16">
        {/* Replace 'path-to-image' with your actual image paths */}
        <div className="flex justify-center items-center">
          <Image src="/1.webp" alt="Image 1" width={200} height={200} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/2.webp" alt="Image 2" width={200} height={200} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/3.webp" alt="Image 3" width={200} height={200} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/4.webp" alt="Image 4" width={200} height={200} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/5.webp" alt="Image 5" width={200} height={200} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/6.webp" alt="Image 6" width={200} height={200} />
        </div>
      </div>

      {/* Section 4: Stats Boxes */}
      <div className="flex flex-col items-center bg-white py-16">
        <div className="flex flex-col md:flex-row justify-around w-full max-w-5xl space-y-10 md:space-y-0">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-4xl font-bold text-blue-500">10 years</h2>
            <p className="text-gray-600">Innovating GPS tech</p>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-4xl font-bold text-blue-500">50M+</h2>
            <p className="text-gray-600">Users worldwide</p>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-4xl font-bold text-blue-500">460K+</h2>
            <p className="text-gray-600">Vehicles recovered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldTrust;
