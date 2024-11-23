"use client";
import React from "react";
import VideoGuideHowToFix from "./GuideSideSection/GarageGuide/VideoGuideHowToFix";
import LineContact from "./GuideSideSection/GarageGuide/LineContact";
import WhatsAppContact from "./GuideSideSection/GarageGuide/WhatsAppContact";
import VideosUsingGPSTracker from "./GuideSideSection/UserGuideDingi/VideosUsingGPSTracker";
import UpdatingSimPlan from "./GuideSideSection/UserGuideDingi/UpdatingSimPlan";
import GuideForGPSTracker from "./GuideSideSection/UserGuideDingi/GuideForGPSTracker";

const GuideEditor = ({ type, title }) => {
  const renderContent = () => {
    switch (title) {
      case "How to Fix":
        return <VideoGuideHowToFix />;
      case "Line Contact":
        return <LineContact />;
      case "Contact Info":
        return <WhatsAppContact />;
      case "GPS Tracker Vid":
        return <VideosUsingGPSTracker />;
      case "GPS Tracker Guide":
        return <GuideForGPSTracker />;
      case "Updating Sim Plan":
        return <UpdatingSimPlan />;
      default:
        return (
          <div>
            <h2>Content not available</h2>
            <p>Please select a valid guide to edit.</p>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
};

export default GuideEditor;
