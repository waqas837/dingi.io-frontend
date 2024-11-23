import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
 import Link from "next/link";
import Pagination from "../common/Pagination";
export default function Favorite() {
  return (
    <section className="dashboard-widget-two">
      <div className="right-box">
        <Sidebar />
        <div className="right-box-two">
          <div className="title-box">
            <h3 className="title">My Favorites</h3>
            <span>Lorem ipsum dolor sit amet, consectetur.</span>
          </div>
          {/* cars-section-three */}
          <div className="cars-section-four">
            <div className="row wow fadeInUp">
              {/* car-block-four */}

              
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
          {/* End shop section two */}
        </div>
      </div>
    </section>
  );
}
