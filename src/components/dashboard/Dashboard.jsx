"use client";
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Video,
   Phone,
  Navigation,
  ChevronDown,
  ChevronRight,
  MapPin,
  X,
  LogOut,
} from "lucide-react";
import GuideEditor from "./GuideEditor";
import { useRouter } from "next/navigation";

const GuideAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [activeContent, setActiveContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  const menuItems = [
    {
      title: "Garage Guide",
      icon: <BookOpen size={20} />,
      subItems: [
        {
          title: "How to Fix",
          icon: <Video size={20} />,
          type: "video-guide",
        },
        {
          title: "Contact Info",
          icon: <Phone size={16} />,
          type: "text-guide",
        },
      ],
    },
    {
      title: "User Guide Dingi",
      icon: <Navigation size={20} />,
      subItems: [
        {
          title: "GPS Tracker Vid",
          icon: <Video size={16} />,
          type: "video-guide",
        },
        {
          title: "GPS Tracker Guide",
          icon: <MapPin size={16} />,
          type: "video-guide",
        },
        {
          title: "Updating Sim Plan",
          icon: <BookOpen size={16} />,
          type: "text-guide",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "256px",
          backgroundColor: "#1f2937",
          color: "white",
          padding: "20px",
          overflowY: "auto",
          display: isMobile && !isOpen ? "none" : "block",
          height: "150vh",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          BOXCARS
        </div>
        <nav>
          {menuItems.map((item, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <button
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  background: "none",
                  color: "#ccc",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => toggleSection(item.title)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {expandedSections[item.title] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {expandedSections[item.title] && (
                <div
                  style={{
                    marginLeft: "24px",
                    marginTop: "8px",
                  }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px",
                        background:
                          activeContent?.title === subItem.title
                            ? "#374151"
                            : "none",
                        color:
                          activeContent?.title === subItem.title
                            ? "white"
                            : "#ccc",
                        border: "none",
                        borderRadius: "20px",
                        cursor: "pointer",
                        width: "100%",
                      }}
                      onClick={() => setActiveContent(subItem)}
                    >
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px",
            background: "none",
            color: "#ccc",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
            marginTop: "auto",
          }}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f9f9f9",
          position: "relative",
        }}
      >
        {isMobile && isOpen && (
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        )}
        {activeContent ? (
          <GuideEditor type={activeContent.type} title={activeContent.title} />
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "#333",
            }}
          >
            <h2>Select a guide to edit</h2>
            <p>Choose a guide from the sidebar to start editing</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuideAdmin;
