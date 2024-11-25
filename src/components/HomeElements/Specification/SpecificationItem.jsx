"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const SpecificationItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-300 text-blue-950 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-[#15216B]">{title}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#15216B]" />
        ) : (
          <Plus className="w-5 h-5 text-[#15216B]" />
        )}
      </button>

      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-200">{content}</div>
      )}
    </div>
  );
};

export default SpecificationItem;
