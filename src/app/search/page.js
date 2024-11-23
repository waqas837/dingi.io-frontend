"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MapPin, Search, Loader2 } from "lucide-react";
import GaragesCards from "../../components/search/GarageCards";
import Footer1 from "../../components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentPlace, setCurrentPlace] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const location = searchParams.get("location");
  const service = searchParams.get("service");
  const vehicle = searchParams.get("vehicle");
  const model = searchParams.get("model");
  const brand = searchParams.get("brand");

  useEffect(() => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });

          try {
            const APIkey = "888967e659b7496194fee3e499234af4";
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
            const response = await fetch(url);
            const data = await response.json();
            setCurrentPlace(data.results[0].formatted);
          } catch (error) {
            console.error("Error fetching place name:", error);
          }
        },
        (error) => {
          console.error("Error fetching location:", error.message);
        },
        options
      );
    }
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      const sampleData = [
        {
          id: 1,
          title: "Oil Change in New York",
          location: "New York",
          service: "Oil Change",
          vehicle: "Cars",
        },
        {
          id: 2,
          title: "Windscreen Repair in Chicago",
          location: "Chicago",
          service: "Windscreen Repair",
          vehicle: "Cars",
        },
      ];

      const filteredResults = sampleData.filter((item) => {
        return (
          (!location ||
            item.location.toLowerCase() === location.toLowerCase()) &&
          (!service || item.service.toLowerCase() === service.toLowerCase()) &&
          (!vehicle || item.vehicle.toLowerCase() === vehicle.toLowerCase()) &&
          (!model || model !== "any model") &&
          (!brand || brand !== "any brand")
        );
      });

      setResults(filteredResults);
      setIsLoading(false);
    };

    fetchResults();
  }, [location, service, vehicle, model, brand]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Search Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Search Results
          </h1>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {location && (
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                📍 {location}
              </span>
            )}
            {service && (
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                🔧 {service}
              </span>
            )}
            {vehicle && (
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                🚗 {vehicle}
              </span>
            )}
          </div>

          {/* Location Information */}
          {currentPlace && (
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Current location: {currentPlace}</span>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Found {results.length} matches
                </h2>
                <div className="text-sm text-gray-500">
                  Showing all {results.length} results
                </div>
              </div>
              <div className="grid gap-6">
                <GaragesCards />
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or browse all services
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SearchResultsLoading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header1 />
      <div className="pt-24 pb-12">
        <Suspense fallback={<SearchResultsLoading />}>
          <SearchResults />
        </Suspense>
      </div>
      <Footer1 />
    </div>
  );
};

export default SearchPage;
