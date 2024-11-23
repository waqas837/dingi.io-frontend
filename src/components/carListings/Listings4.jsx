"use client";
import React from "react";
import ListingMap1 from "./MapComponent";
import Image from "next/image";
import SelectComponent from "../common/SelectComponent";
import Link from "next/link";
import Pagination from "../common/Pagination";
export default function Listings4() {
  return (
    <section className="cars-section-four v1 v5 section-radius-top">
      <div className="full-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="right-box">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-box inventory"
              >
                <div className="form_boxes">
                  <SelectComponent options={["New", "Used", "used", "new"]} />
                </div>
                <div className="form_boxes">
                  <SelectComponent options={["Make", "Tofan", "Tofan"]} />
                </div>
                <div className="form_boxes">
                  <SelectComponent options={["Models", "2010", "2012"]} />
                </div>
                <div className="form_boxes">
                  <SelectComponent
                    options={["Price", "2010", "2012", "", "", ""]}
                  />
                </div>
                <div className="form_boxes">
                  <a href="#" title="" className="filter-btn filter-popup">
                    <Image
                      alt=""
                      src="/images/icons/filter.svg"
                      width={24}
                      height={24}
                    />{" "}
                    More Filters
                  </a>
                </div>
              </form>
              <div className="text-box v2">
                <div className="text">Showing 1 to 16 of 1559 vehicles</div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form_boxes v3">
                    <small>Sort by</small>

                    <SelectComponent
                      options={["Any Make", "Audi", "Honda", "", "", ""]}
                    />
                  </div>
                </form>
              </div>

              <div className="pagination-sec v1">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <Pagination />
                  </ul>
                  <div className="text">Showing results 1-30 of 1,415</div>
                </nav>
              </div>
            </div>
          </div>
          <div className="map-column col-lg-6 col-md-12 col-sm-12">
            <ListingMap1 />
          </div>
        </div>
      </div>
    </section>
  );
}
