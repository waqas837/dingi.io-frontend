"use client";
import SearchFilterBar from "../../Filters";
export default function Hero() {
  return (
    <section className="boxcar-banner-section-v1">
      <div className="container">
        <div className="banner-content">
          <span className="wow fadeInUp">
            Track, Protect, and Service Your Ride
          </span>
          <h2 className="wow fadeInUp" data-wow-delay="100ms">
            Complete Vehicle Care
          </h2>
          <div className="form-tabs">
            <div className="form-tab-content">
              <div
                className="form-tab-content wow fadeInUp"
                data-wow-delay="300ms"
              >
                <SearchFilterBar />
              </div>
              <span className="wow fadeInUp" data-wow-delay="400ms">
                Or Browse Certified Garages
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
