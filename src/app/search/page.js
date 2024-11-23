"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import GaragesCards from "../../components/search/GarageCards";
import Footer1 from "../../components/footers/Footer1";

// Separate component for the search results content
const SearchResults = () => {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentPlace, setCurrentPlace] = useState("");

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

          // Reverse geocoding using OpenCageData
          try {
            const APIkey = "888967e659b7496194fee3e499234af4"; // Replace with your OpenCage API key
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
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
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
    };

    fetchResults();
  }, [location, service, vehicle, model, brand]);

  return (
    <>
      <h1 className="text-white">Search Results</h1>
      {currentLocation && (
        <p className="text-white flex items-center">
          <MapPin className="mr-2" />
          Your current location: Latitude {currentLocation.latitude}, Longitude{" "}
          {currentLocation.longitude}
        </p>
      )}
      {currentPlace && (
        <p className="text-white flex items-center">
          <MapPin className="mr-2" />
          You are in: {currentPlace}
        </p>
      )}

      {results.length > 0 ? (
        <GaragesCards />
      ) : (
        <p className="text-white">
          No results found. Please try a different search.
        </p>
      )}
    </>
  );
};

// Loading component
const SearchResultsLoading = () => {
  return <div className="text-white p-4">Loading search results...</div>;
};

// Main page component
const SearchPage = () => {
  return (
    <div className="bg-[var(--theme-color-dark)]">
      <div className="p-4 pt-52">
        <Suspense fallback={<SearchResultsLoading />}>
          <SearchResults />
        </Suspense>
      </div>
      <Footer1 />
    </div>
  );
};

export default SearchPage;
