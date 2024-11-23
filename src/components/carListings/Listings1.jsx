"use client";
import React from "react";
import Image from "next/image";
import SelectComponent from "../common/SelectComponent";
 import Link from "next/link";
import Pagination from "../common/Pagination";
export default function Listings1() {
  return (
    <section className="cars-section-four v1 layout-radius">
      <div className="boxcar-container">
        <div className="boxcar-title-three wow fadeInUp">
          <ul className="breadcrumb">
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <span>Cars for Sale</span>
            </li>
          </ul>
          <h2>New and Used Cars For Sale</h2>
        </div>
        <div className="text-box">
          <div className="text">Showing 1 to 16 of 1559 vehicles</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form_boxes v3">
              <small>Sort by</small>

              <SelectComponent options={["Any Makes", "Audi", "Honda"]} />
            </div>
          </form>{" "}
        </div>
         
        <div className="pagination-sec">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <Pagination />
            </ul>
            <div className="text">Showing results 1-30 of 1,415</div>
          </nav>
        </div>
      </div>
    </section>
  );
}
