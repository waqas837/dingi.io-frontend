"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How do I install the GPS tracker?",
      answer:
        "Our GPS tracker is designed for easy installation. You can have it professionally installed by a certified mechanic, and our support team is available to guide you through the process. If you need assistance, we can help you find a garage to install it for you when you contact our customer support.",
    },
    {
      question: "How does the tracking work?",
      answer:
        "The GPS tracker uses advanced technology to provide real-time location updates via our mobile and web apps. You can monitor your vehicle's location anytime, anywhere.",
    },
    {
      question: "What happens if my vehicle is stolen?",
      answer:
        "In the unfortunate event of theft, we offer free recovery support to help you and the authorities locate your vehicle quickly.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, there are no hidden fees or subscriptions to use the app forever. The SIM plan is free for the first year when you buy the tracker. After that, the renewal fee is just 200 Baht for unlimited use. We are Thailand's most affordable GPS tracker SIM providers with unbeatable prices throughout the country.",
    },
    {
      question: "How long does the battery last?",
      answer:
        "Our GPS tracker is designed to operate continuously without the need for frequent charging, ensuring consistent performance.",
    },
    {
      question: "Can I track multiple vehicles?",
      answer:
        "Yes, our system allows you to track multiple vehicles using a single account for convenience.",
    },
    {
      question:
        "Can I integrate the GPS tracker with my existing fleet management system?",
      answer:
        "Yes, our GPS tracking solution is compatible with many fleet management systems, allowing for seamless integration.",
    },
    {
      question: "What kind of support do you provide for installation?",
      answer:
        "We offer comprehensive installation support, including training for your mechanics and detailed guides to ensure a smooth installation process.",
    },
    {
      question: "What is the minimum order quantity for bulk purchases?",
      answer:
        "We can accommodate various order sizes, so please contact our sales team for specific bulk order details and pricing.",
    },
    {
      question: "Do you provide a warranty for the GPS trackers?",
      answer:
        "Yes, we offer a warranty for our GPS trackers, ensuring that you receive a reliable product.",
    },
    {
      question:
        "Can you customize the tracking features for our business needs?",
      answer:
        "Absolutely! We can work with you to customize features and functionalities to suit your specific business requirements.",
    },
    {
      question: "How can I monitor my fleet's performance with your tracker?",
      answer:
        "Our mobile and web apps provide detailed reports on driver behavior, route history, and vehicle performance, helping you manage your fleet effectively.",
    },
    {
      question: "Are there any hidden fees or subscriptions for using the app?",
      answer:
        "No, there are no hidden fees or subscriptions to use the app. The SIM plan is free for the first year when you purchase the tracker, and after that, the renewal fee is just 200 Baht. We pride ourselves on being Thailand's most affordable GPS tracker SIM providers, offering unbeatable prices across the country.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 md:max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-8 md:mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-200 hover:bg-blue-300 text-blue-950 p-3 md:p-5 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-3 md:px-6 py-2 md:py-4 text-left flex items-center justify-between gap-4"
                onClick={() => toggleAccordion(index)}
              >
                <span className=" text-sm md:text-base font-semibold">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-3 md:px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] py-4 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                <p className="text-blue-950 text-xs md:text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
