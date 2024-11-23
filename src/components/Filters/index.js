"use client"
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

const SearchFilterBar = () => {
  const [location, setLocation] = useState("Any Location");
  const [serviceType, setServiceType] = useState("Any Service");
  const [vehicleType, setVehicleType] = useState("All Vehicle Types");
  const [model, setModel] = useState("Any Model");
  const [brand, setBrand] = useState("Any Brand");
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    typeof window!=="undefined" && document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      typeof window!=="undefined" && document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const vehicleOptions = {
    Cars: { models: ["Sedan", "Hatchback"], brands: ["Toyota", "Honda"] },
    Bikes: { models: ["Sport", "Cruiser"], brands: ["Yamaha", "Suzuki"] },
    Trucks: { models: ["Heavy Duty", "Light Duty"], brands: ["Volvo", "Ford"] },
  };

  const popularServices = [
    "Any Service",
    "Oil Change",
    "Windscreen Repair",
    "Tracker Installation",
    "Dingi Certified Garages",
  ];

  const cities = [
    "Any Location",
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Seattle",
    "Denver",
    "Boston",
    "Portland",
    "Miami",
    "Atlanta",
  ];

  const handleDropdownClick = (identifier) => {
    setActiveDropdown(activeDropdown === identifier ? null : identifier);
  };

  const renderDropdown = (
    identifier,
    value,
    setValue,
    options,
    isLast = false
  ) => (
    <div
      style={{
        position: "relative",
        flex: 1,
        minWidth: "200px",
      }}
    >
      <button
        onClick={() => handleDropdownClick(identifier)}
        style={{
          width: "100%",
          padding: "12px 16px",
          textAlign: "left",
          border: `1px solid ${
            activeDropdown === identifier ? "#d1d5db" : "#e5e7eb"
          }`,
          borderRadius: "8px",
          backgroundColor: activeDropdown === identifier ? "#f9fafb" : "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          transition: "all 0.2s ease",
          outline: "none",
        }}
      >
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </span>
        <ChevronDown
          size={16}
          style={{
            transform:
              activeDropdown === identifier ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      {activeDropdown === identifier && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            width: "100%",
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            zIndex: 50,
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {options.map((option, index) => (
            <button
              key={option}
              onClick={() => {
                setValue(option);
                setActiveDropdown(null);
              }}
              style={{
                width: "100%",
                padding: "8px 16px",
                textAlign: "left",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                borderRadius:
                  index === 0
                    ? "8px 8px 0 0"
                    : index === options.length - 1
                    ? "0 0 8px 8px"
                    : "0",
                transition: "background-color 0.15s ease",
                ":hover": {
                  backgroundColor: "#f9fafb",
                },
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const handleVehicleTypeChange = (type) => {
    setVehicleType(type);
    setModel("Any Model");
    setBrand("Any Brand");
  };

  const getSearchQuery = () => {
    const params = new URLSearchParams();

    if (location !== "Any Location") {
      params.append("location", location.toLowerCase().replace(/\s+/g, "-"));
    }
    if (serviceType !== "Any Service") {
      params.append("service", serviceType.toLowerCase().replace(/\s+/g, "-"));
    }
    if (vehicleType !== "All Vehicle Types") {
      params.append("vehicle", vehicleType.toLowerCase());
      if (model !== "Any Model") {
        params.append("model", model.toLowerCase().replace(/\s+/g, "-"));
      }
      if (brand !== "Any Brand") {
        params.append("brand", brand.toLowerCase().replace(/\s+/g, "-"));
      }
    }

    return params.toString();
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "24px auto",
        padding: "0 16px",
      }}
    >
      <div
        ref={dropdownRef}
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          padding: isMobile ? "16px" : "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {renderDropdown("location", location, setLocation, cities)}

          {renderDropdown(
            "serviceType",
            serviceType,
            setServiceType,
            popularServices
          )}

          {renderDropdown(
            "vehicleType",
            vehicleType,
            handleVehicleTypeChange,
            Object.keys(vehicleOptions)
          )}

          {vehicleType !== "All Vehicle Types" &&
            renderDropdown(
              "model",
              model,
              setModel,
              vehicleOptions[vehicleType].models
            )}

          {vehicleType !== "All Vehicle Types" &&
            renderDropdown(
              "brand",
              brand,
              setBrand,
              vehicleOptions[vehicleType].brands
            )}

          <Link
            href={`/search?${getSearchQuery()}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "24px",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              width: isMobile ? "100%" : "auto",
              minWidth: "120px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
          >
            <Search size={16} />
            <span>Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
