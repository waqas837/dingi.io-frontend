import React from "react";
import Image from "next/image";

const TrustPage = () => (
  <div className="flex flex-col w-full pt-40">
    {/* Header */}
    <div className="w-full py-6 px-6 lg:px-20 bg-white text-center">
      <h1 className="text-5xl font-bold text-blue-900 px-3">
        Dingi - Your Trusted GPS Tracking Solution
      </h1>
      <p className="text-xl text-blue-900 mt-14 font-thin">
        Empowering You with the Tools and Support for Total Vehicle Security
      </p>
    </div>

    {/* First Section */}
    <div className="lg:flex md:flex lg:flex-row md:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
      <div className="lg:w-full w-full flex justify-start lg:-ml-8">
        <div className="relative w-full h-full">
          <Image
            src="/onesecondresponse.webp"
            alt="GPS Tracking Solution"
            layout="responsive"
            width={1200} // You can adjust the width and height based on your image size
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:ml-10">
        <h2 className="text-5xl font-bold text-blue-900 px-3">
          One Second Response
        </h2>
        <p className="text-xl text-blue-900 mt-5 font-thin">
          Our cutting-edge GPS technology offers accurate real-time tracking,
          giving you peace of mind and reducing anxiety about theft while
          ensuring quick response capability in emergencies.
        </p>
      </div>
    </div>

    {/* Second Section */}
    <div className="flex flex-col-reverse md:flex md:flex-row lg:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
      <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:-ml-10">
        <h2 className="text-5xl font-bold text-blue-900 px-3">
          Simplified Tracking
        </h2>
        <p className="text-xl text-blue-900 mt-5 font-thin">
          Access real-time location updates and monitor driver behavior anytime,
          anywhere with our intuitive apps, empowering you with control over
          your vehicle’s safety and simplifying tracking and management.
        </p>
      </div>
      <div className="lg:w-full w-full flex justify-start lg:ml-8">
        <div className="relative w-full h-full">
          <Image
            src="/simplifiedtracking.webp"
            alt="Simplified Tracking"
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
    </div>

    {/* Third Section */}
    <div className="lg:flex md:flex lg:flex-row md:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
      <div className="lg:w-full w-full flex justify-start lg:-ml-8">
        <div className="relative w-full h-full">
          <Image
            src="/theftrecoverysupport.webp"
            alt="Theft recovery support"
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:ml-10">
        <h2 className="text-5xl font-bold text-blue-900 px-3">
          Theft Recovery Support
        </h2>
        <p className="text-xl text-blue-900 mt-5 font-thin">
          In the unfortunate event of theft, we provide <b>FREE</b> recovery
          support to you and investigating authorities, offering reassurance
          during stressful situations and increasing the chances of recovering
          your vehicle.
        </p>
      </div>
    </div>

    {/* Fourth Section */}
    <div className="flex  flex-col-reverse md:flex md:flex-row lg:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
      <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:-ml-10">
        <h2 className="text-5xl font-bold text-blue-900 px-3">
          Free Technical Support
        </h2>
        <p className="text-xl text-blue-900 mt-5 font-thin">
          Our knowledgeable team is here to assist you at every step, from
          installation to using our apps, providing confidence that you have
          support when needed and building trust for an enhanced experience.
        </p>
      </div>
      <div className="lg:w-full w-full flex justify-start lg:ml-8">
        <div className="relative w-full h-full">
          <Image
            src="/freetechnicalsupport.webp"
            alt="Free technical support"
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
    </div>

    {/* Fifth Section */}
    <div className="lg:flex md:flex lg:flex-row md:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
      <div className="lg:w-full w-full flex justify-start lg:-ml-8">
        <div className="relative w-full h-full">
          <Image
            src="/freeapp.webp"
            alt="Free app no fees"
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:ml-10">
        <h2 className="text-5xl font-bold text-blue-900 px-3">
          No Hidden Fees – Enjoy Free App Access
        </h2>
        <p className="text-xl text-blue-900 mt-5 font-thin">
          At Dingi, we believe in transparency. That’s why we have no hidden
          fees or subscriptions for using our app—it's completely free to use
          for life! The only cost you'll incur is for the SIM plan, which is
          free for the first year when you purchase the GPS tracker. After that,
          the renewal fee is just 200 Baht, making it the most affordable option
          on the market. Enjoy peace of mind knowing exactly what you're paying
          for.
        </p>
      </div>
    </div>

    {/* Sixth Section */}
    <div className="flex flex-col-reverse md:flex md:flex-row lg:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
      <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:-ml-10">
        <h2 className="text-5xl font-bold text-blue-900 px-3">
          Need Help with Installation? We’ve Got You Covered
        </h2>
        <p className="text-xl text-blue-900 mt-5 font-thin">
          If you're struggling to find a garage to install your GPS tracker,
          don’t worry! Our dedicated customer support team is here to assist
          you. We can help you locate a quality garage near you, ensuring your
          tracker is installed by experienced professionals. Rest assured, we
          only recommend trusted garages that meet our high standards for
          quality and service, so you can feel confident knowing your vehicle is
          in good hands.
        </p>
      </div>
      <div className="lg:w-full w-full flex justify-start lg:ml-8">
        <div className="relative w-full h-full">
          <Image
            src="/helpforinstallation.webp"
            alt="help for installation"
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
    </div>

    {/* Seventh Section */}
    <div className="lg:flex  lg:flex-row md:flex md:flex-row items-center w-full py-12 px-6 lg:px-20 bg-white">
      <div className="lg:w-full w-full flex justify-start lg:-ml-8">
        <div className="relative w-full h-full">
          <Image
            src="/firstyearfree.webp"
            alt="First year free"
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="lg:w-full w-full text-center lg:text-left mb-6 lg:mb-0 lg:ml-10">
        <h2 className="text-5xl font-bold text-blue-900 px-3">
          Cost-Effective Security: Get Your First Year Free
        </h2>
        <p className="text-xl text-blue-900 mt-5 font-thin">
          At Dingi, we offer the most affordable SIM plan in the market. When
          you purchase our GPS tracker, you enjoy the first year of service
          completely free! After the initial year, the renewal fee is just 200
          Baht, ensuring you can keep your vehicle connected without breaking
          the bank. With our unbeatable prices, you can rest easy knowing your
          GPS tracker will remain operational, providing you with uninterrupted
          security and peace of mind.
        </p>
      </div>
    </div>
  </div>
);

export default TrustPage;
