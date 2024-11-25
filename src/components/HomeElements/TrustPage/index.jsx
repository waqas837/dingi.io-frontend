import React from "react";
import Image from "next/image";

const TrustPage = () => (
  <div className="flex flex-col w-full pt-20">
    {/* Header */}
    <div className="w-full py-6 px-4 lg:px-20 bg-white text-center">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-900 px-2 leading-snug">
        Dingi - Your Trusted GPS Tracking Solution
      </h1>
      <p className="text-sm sm:text-lg lg:text-xl text-blue-900 mt-6 font-thin">
        Empowering You with the Tools and Support for Total Vehicle Security
      </p>
    </div>

    {/* Section Template */}
    {[
      {
        title: "One Second Response",
        content:
          "Our cutting-edge GPS technology offers accurate real-time tracking, giving you peace of mind and reducing anxiety about theft while ensuring quick response capability in emergencies.",
        image: "/onesecondresponse.webp",
        reverse: false,
      },
      {
        title: "Simplified Tracking",
        content:
          "Access real-time location updates and monitor driver behavior anytime, anywhere with our intuitive apps, empowering you with control over your vehicle’s safety and simplifying tracking and management.",
        image: "/simplifiedtracking.webp",
        reverse: true,
      },
      {
        title: "Theft Recovery Support",
        content:
          "In the unfortunate event of theft, we provide FREE recovery support to you and investigating authorities, offering reassurance during stressful situations and increasing the chances of recovering your vehicle.",
        image: "/theftrecoverysupport.webp",
        reverse: false,
      },
      {
        title: "Free Technical Support",
        content:
          "Our knowledgeable team is here to assist you at every step, from installation to using our apps, providing confidence that you have support when needed and building trust for an enhanced experience.",
        image: "/freetechnicalsupport.webp",
        reverse: true,
      },
      {
        title: "No Hidden Fees – Enjoy Free App Access",
        content:
          "At Dingi, we believe in transparency. That’s why we have no hidden fees or subscriptions for using our app—it's completely free to use for life! The only cost you'll incur is for the SIM plan, which is free for the first year when you purchase the GPS tracker. After that, the renewal fee is just 200 Baht, making it the most affordable option on the market.",
        image: "/freeapp.webp",
        reverse: false,
      },
      {
        title: "Need Help with Installation? We’ve Got You Covered",
        content:
          "If you're struggling to find a garage to install your GPS tracker, don’t worry! Our dedicated customer support team is here to assist you. We can help you locate a quality garage near you, ensuring your tracker is installed by experienced professionals.",
        image: "/helpforinstallation.webp",
        reverse: true,
      },
      {
        title: "Cost-Effective Security: Get Your First Year Free",
        content:
          "At Dingi, we offer the most affordable SIM plan in the market. When you purchase our GPS tracker, you enjoy the first year of service completely free! After the initial year, the renewal fee is just 200 Baht, ensuring you can keep your vehicle connected without breaking the bank.",
        image: "/firstyearfree.webp",
        reverse: false,
      },
    ].map((section, index) => (
      <div
        key={index}
        className={`flex flex-col ${
          section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center w-full py-12 px-4 lg:px-20 bg-white`}
      >
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-full">
            <Image
              src={section.image}
              alt={section.title}
              layout="responsive"
              width={1200}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0 px-4">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-blue-900">
            {section.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-900 mt-5 font-thin">
            {section.content}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default TrustPage;
