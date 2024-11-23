import React from "react";
import Link from "next/link";
import Image from "next/image";
import { carBrands } from "@/data/brands";
export default function Brands() {
  return (
    <section className="boxcar-brand-section section-radius-top bg-1">
      <div className="boxcar-container">
        <div className="boxcar-title">
          <h2 className="wow fadeInUp">Explore Our Premium Brands</h2>
          <Link href={`/inventory-list-01`} className="btn-title">
            Show All Brands
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clipPath="url(#clip0_601_3199)">
                <path
                  d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z"
                  fill="#050B20"
                />
              </g>
              <defs>
                <clipPath id="clip0_601_3199">
                  <rect width={14} height={14} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="row">
          {/* cars-block */}
          {carBrands.map((car, index) => (
            <div
              key={index}
              className="cars-block style-1 col-lg-2 col-md-6 col-sm-6"
            >
              <div
                className={`inner-box wow fadeInUp`}
                data-wow-delay={car.wowDelay}
              >
                <div className="image-box">
                  <figure className="image">
                    <Link href={`/inventory-list-01`}>
                      <Image
                        alt={car.title}
                        src={car.src}
                        width={car.width}
                        height={car.height}
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h6 className="title">
                    <Link href={`/inventory-list-01`}>{car.title}</Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
