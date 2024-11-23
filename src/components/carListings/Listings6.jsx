"use client";
import React, { useState } from "react";
import Image from "next/image";
import SelectComponent from "../common/SelectComponent";
 import Link from "next/link";
import Pagination from "../common/Pagination";
import Slider from "rc-slider";

export default function Listings6() {
  const [price, setPrice] = useState([5000, 35000]);
  const handlePrice = (value) => {
    setPrice(value);
  };
  return (
    <section className="cars-section-four v1 v2 layout-radius">
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
        <div className="row">
          <div className="wrap-sidebar-dk side-bar col-xl-3 col-md-12 col-sm-12">
            <div className="sidebar-handle">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.75 4.50903C13.9446 4.50903 12.4263 5.80309 12.0762 7.50903H2.25C1.83579 7.50903 1.5 7.84482 1.5 8.25903C1.5 8.67324 1.83579 9.00903 2.25 9.00903H12.0762C12.4263 10.715 13.9446 12.009 15.75 12.009C17.5554 12.009 19.0737 10.715 19.4238 9.00903H21.75C22.1642 9.00903 22.5 8.67324 22.5 8.25903C22.5 7.84482 22.1642 7.50903 21.75 7.50903H19.4238C19.0737 5.80309 17.5554 4.50903 15.75 4.50903ZM15.75 6.00903C17.0015 6.00903 18 7.00753 18 8.25903C18 9.51054 17.0015 10.509 15.75 10.509C14.4985 10.509 13.5 9.51054 13.5 8.25903C13.5 7.00753 14.4985 6.00903 15.75 6.00903Z"
                  fill="#050B20"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.25 12.009C6.44461 12.009 4.92634 13.3031 4.57617 15.009H2.25C1.83579 15.009 1.5 15.3448 1.5 15.759C1.5 16.1732 1.83579 16.509 2.25 16.509H4.57617C4.92634 18.215 6.44461 19.509 8.25 19.509C10.0554 19.509 11.5737 18.215 11.9238 16.509H21.75C22.1642 16.509 22.5 16.1732 22.5 15.759C22.5 15.3448 22.1642 15.009 21.75 15.009H11.9238C11.5737 13.3031 10.0554 12.009 8.25 12.009ZM8.25 13.509C9.5015 13.509 10.5 14.5075 10.5 15.759C10.5 17.0105 9.5015 18.009 8.25 18.009C6.9985 18.009 6 17.0105 6 15.759C6 14.5075 6.9985 13.509 8.25 13.509Z"
                  fill="#050B20"
                />
              </svg>
              Show Filter
            </div>
            <div className="inventory-sidebar">
              <div className="inventroy-widget widget-location">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Location</label>

                      <SelectComponent
                        options={["New York", "Los Vegas", "California"]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="form_boxes">
                      <label>Search within</label>

                      <SelectComponent
                        options={["200 miles", "200 miles", "200 miles"]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="form_boxes">
                      <label>Zip Code</label>

                      <SelectComponent
                        options={["02111", "02111", "02111", "02111"]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Condition</label>

                      <SelectComponent
                        options={[
                          "New and Used",
                          "New York",
                          "Los Vegas",
                          "California",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="categories-box">
                      <h6 className="title">Type</h6>
                      <div className="cheak-box">
                        <label className="contain">
                          SUV (1,456)
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Sedan (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Hatchback (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Coupe (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Convertible (1,456)
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Make</label>

                      <SelectComponent
                        options={[
                          "Add Make",
                          "New York",
                          "Los Vegas",
                          "California",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Model</label>

                      <SelectComponent
                        options={[
                          "Add Model",
                          "New York",
                          "Los Vegas",
                          "California",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_boxes">
                      <label>Min year</label>

                      <SelectComponent
                        options={["2019", "2020", "2021", "2022"]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_boxes">
                      <label>Max year</label>

                      <SelectComponent
                        options={["2023", "2020", "2021", "2022"]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Mileage</label>

                      <SelectComponent
                        options={[
                          "Any Mileage",
                          "New York",
                          "Los Vegas",
                          "California",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Drive Type</label>

                      <SelectComponent
                        options={[
                          "Any Type",
                          "New York",
                          "Los Vegas",
                          "California",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="price-box">
                      <h6 className="title">Price</h6>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="row g-0"
                      >
                        <div className="form-column col-lg-6">
                          <div className="form_boxes">
                            <label>Min price</label>
                            <div className="drop-menu">${price[0]}</div>
                          </div>
                        </div>
                        <div className="form-column v2 col-lg-6">
                          <div className="form_boxes">
                            <label>Max price</label>
                            <div className="drop-menu">${price[1]}</div>
                          </div>
                        </div>
                      </form>
                      {/* <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style="left: 39.3939%; width: 60.6061%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 39.3939%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span></div> */}
                      <div className="widget-price">
                        <Slider
                          formatLabel={() => ``}
                          range
                          max={50000}
                          min={0}
                          defaultValue={price}
                          onChange={(value) => handlePrice(value)}
                          id="slider"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="categories-box border-none-bottom">
                      <h6 className="title">Transmission</h6>
                      <div className="cheak-box">
                        <label className="contain">
                          Automatic (1,456)
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Manual (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          CVT (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="categories-box border-none-bottom">
                      <h6 className="title">Fuel Type</h6>
                      <div className="cheak-box">
                        <label className="contain">
                          Diesel (1,456)
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Petrol (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Hybird (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Electric (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Exterior Color</label>

                      <SelectComponent
                        options={[
                          "Blue",
                          "New York",
                          "Los Vegas",
                          "California",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Interior Color</label>

                      <SelectComponent
                        options={[
                          "Black",
                          "New York",
                          "Los Vegas",
                          "California",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Doors</label>

                      <SelectComponent
                        options={["3", "New York", "Los Vegas", "California"]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_boxes">
                      <label>Cylinders</label>

                      <SelectComponent
                        options={["6", "New York", "Los Vegas", "California"]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="categories-box border-none-bottom m-0">
                      <h6 className="title">Key Features</h6>
                      <div className="cheak-box">
                        <label className="contain">
                          360-degree camera (1,456)
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Bluetooth (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Keyless start (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Navigation System (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Active head restraints (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Brake assist (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="contain">
                          Parking assist systems (1,456)
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <a href="#" title="" className="show-more">
                        Show 8 more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*widget end*/}
            </div>
          </div>
          <div className="col-xl-9 col-md-12 col-sm-12">
            <div className="text-box">
              <div className="text">Showing 1 to 16 of 1559 vehicles</div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form_boxes v3">
                  <small>Sort by</small>
                  <div className="drop-menu height-auto">
                    <div className="select">
                      <span>Any Makes</span>
                      <i className="fa fa-angle-down" />
                    </div>
                    <input type="hidden" required name="gender" />
                    <ul className="dropdown" style={{ display: "none" }}>
                      <li>Audi</li>
                      <li>Honda</li>
                    </ul>
                  </div>
                </div>
              </form>
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
        </div>
      </div>
    </section>
  );
}
