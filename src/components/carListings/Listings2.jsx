"use client";
import React from "react";
import Image from "next/image";
import SelectComponent from "../common/SelectComponent";
 import Link from "next/link";
import Pagination from "../common/Pagination";
export default function Listings2() {
  return (
    <section className="cars-section-four v1 layout-radius">
      <div className="Dingi-container">
        <div className="Dingi-title-three wow fadeInUp">
          <ul className="breadcrumb">
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <span>Cars for Sale</span>
            </li>
          </ul>
          <h2>New and Used Cars For Sale</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form-box inventory"
          >
            <div className="form_boxes">
              <SelectComponent options={["New Used", "used", "new"]} />
            </div>
            <div className="form_boxes">
              <SelectComponent options={["Type", "Tufan", "Tufan"]} />
            </div>
            <div className="form_boxes">
              <SelectComponent options={["Make", "Tofan", "Tofan"]} />
            </div>
            <div className="form_boxes">
              <SelectComponent options={["Models", "2010", "2012"]} />
            </div>
            <div className="form_boxes">
              <SelectComponent options={["Years", "2010", "2012"]} />
            </div>
            <div className="form_boxes">
              <SelectComponent options={["Mileage", "2010", "2012"]} />
            </div>
            <div className="form_boxes">
              <SelectComponent options={["Price", "2010", "2012"]} />
            </div>
            <div className="form_boxes">
              <a href="#" title="" className="filter-btn filter-popup">
                <Image
                  alt=""
                  src="/images/icons/filter.svg"
                  width={24}
                  height={24}
                />
                More Filters
              </a>
            </div>
          </form>
          <div className="text-box v1">
            <div className="text">Showing 1 to 16 of 1559 vehicles</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form_boxes v3">
                <small>Sort by</small>

                <SelectComponent options={["Any Makes", "Audi", "Honda"]} />
              </div>
            </form>
          </div>
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
