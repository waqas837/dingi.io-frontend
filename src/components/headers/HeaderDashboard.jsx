"use client";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
 
export default function HeaderDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchBoxRef = useRef(null);
  const layoutSearchRef = useRef(null);

  const handleFocus = () => {
    setIsSearchActive(true);
  };

  const handleBlur = () => {
    setIsSearchActive(false);
  };

  useEffect(() => {
    if (searchBoxRef.current) {
      if (isSearchActive) {
        searchBoxRef.current.classList.add("active");
        layoutSearchRef.current?.classList.add("active");
      } else {
        searchBoxRef.current.classList.remove("active");
        layoutSearchRef.current?.classList.remove("active");
      }
    }
  }, [isSearchActive]);

  return (
    <header className="boxcar-header header-style-ten">
      <div className="header-inner">
        <div className="inner-container">
          <div className="c-box">
            <div className="logo-inner">
              <div className="logo">
                <Link href="/">
                  <Image
                    alt="Boxcar logo"
                    title="Boxcar"
                    width={108}
                    height={26}
                    src="/images/logo.svg"
                  />
                </Link>
              </div>
              <div className="btn-box">
                <div ref={layoutSearchRef} className="layout-search style1">
                  <div className="search-box">
                    <svg
                      className="icon"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.29301 1.2876C3.9872 1.2876 1.29431 3.98048 1.29431 7.28631C1.29431 10.5921 3.9872 13.2902 7.29301 13.2902C8.70502 13.2902 10.0036 12.7954 11.03 11.9738L13.5287 14.4712C13.6548 14.5921 13.8232 14.6588 13.9979 14.657C14.1725 14.6552 14.3395 14.5851 14.4631 14.4617C14.5867 14.3382 14.6571 14.1713 14.6591 13.9967C14.6611 13.822 14.5947 13.6535 14.474 13.5272L11.9753 11.0285C12.7976 10.0006 13.293 8.69995 13.293 7.28631C13.293 3.98048 10.5988 1.2876 7.29301 1.2876ZM7.29301 2.62095C9.87824 2.62095 11.9584 4.70108 11.9584 7.28631C11.9584 9.87153 9.87824 11.9569 7.29301 11.9569C4.70778 11.9569 2.62764 9.87153 2.62764 7.28631C2.62764 4.70108 4.70778 2.62095 7.29301 2.62095Z"
                        fill="white"
                      />
                    </svg>
                    <input
                      type="search"
                      placeholder="Search Cars eg. Audi Q7"
                      className="show-search"
                      name="name"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                   
                </div>
              </div>
            </div>
            <div className="nav-out-bar">
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  <Nav />
                </ul>
              </nav>
            </div>
            <div className="right-box">
              <a href="#" className="haeder-img">
                <Image
                  width={50}
                  height={50}
                  src="/images/resource/header-img.png"
                  alt="Header image"
                />
              </a>
              <div className="mobile-navigation">
                <a href="#nav-mobile" title="Mobile navigation">
                  <svg
                    width={22}
                    height={11}
                    viewBox="0 0 22 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={22} height={2} fill="white" />
                    <rect y={9} width={22} height={2} fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-popup">
        <span className="search-back-drop" />
        <button className="close-search">
          <span className="fa fa-times" />
        </button>
        <div className="search-inner">
          <form onSubmit={(e) => e.preventDefault()} method="post">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Search..."
                required
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="nav-mobile" />
    </header>
  );
}
