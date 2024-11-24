"use client";
import SearchFilterBar from "../../Filters";

export default function Hero() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 my-10">
        <div className="text-center">
          <span className="block text-lg font-semibold text-blue-400">
            Track, Protect, and Service Your Ride
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Complete Vehicle Care
          </h2>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <SearchFilterBar />
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="text-lg text-gray-300">
              Or Browse Certified Garages
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
