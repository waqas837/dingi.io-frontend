import Image from "next/image";

const SimpleSteps = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col w-5/6 min-h-screen bg-white py-12">
        {/* Section 1: Header */}
        <div className="flex flex-col items-center justify-center bg-white text-blue-950 py-4">
          <h1 className="text-5xl font-extrabold text-center leading-tight">
            Simple steps to secure your <br />
            vehicle
          </h1>
        </div>

        {/* Section 2: Description */}
        <div className="flex flex-col items-center justify-center bg-white py-4 px-6">
          <p className="text-xl text-blue-950 text-center leading-relaxed">
            Getting started with our GPS tracking solution is easy. <br />
            Follow these simple steps to ensure your vehicle's safety.
          </p>
        </div>

        {/* Section 3: Steps */}
        <div className="flex flex-col lg:flex-row justify-around items-center bg-white py-6 gap-4 px-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-2 max-w-sm">
            <Image
              alt="Order Your Tracker"
              src={"/f1.webp"}
              height={120}
              width={120}
            />
            <h2 className="text-3xl font-semibold text-blue-950">
              Order Your Tracker
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Select your GPS tracker <br />
              and enjoy a free SIM for <br />
              the first year. Feel <br />
              secure from day one.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-2 max-w-sm">
            <Image
              alt="Easily Install"
              src={"/f2.webp"}
              height={120}
              width={120}
            />
            <h2 className="text-3xl font-semibold text-blue-950">
              Easily Install
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Follow our step-by-step <br />
              guide or use our support <br />
              for seamless installation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-2 max-w-sm">
            <Image
              alt="Start Tracking"
              src={"/f3.webp"}
              height={120}
              width={120}
            />
            <h2 className="text-3xl font-semibold text-blue-950">
              Start Tracking
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Activate your tracker <br />
              and access real-time <br />
              data through our easy-to- <br />
              use app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
