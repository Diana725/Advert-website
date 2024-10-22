import React from "react";
import mission_image from "../../assets/images/maiko_img_2.jpeg";
import mission_image2 from "../../assets/images/maiko_img_3.jpeg";
import { NavLink } from "react-router-dom";

const MissionSection = () => {
  return (
    <>
      {/* First Mission Section */}
      <section className="mission-section py-4">
        <div className="container custom-width px-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={mission_image}
                alt="TaxiAd Mission"
                className="img-fluid rounded"
                style={{ width: 500 }} /* Responsive to container */
              />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <h2 className="display-5 fw-bold mb-4 fs-1">
                Our Mission At AdLite Media
              </h2>
              <p className="lead fs-6">
                Connecting brands with their target audience through innovative
                taxi advertising is what we do best. Our dynamic taxi top
                billboards and in-car displays reach a broader audience,
                engaging customers as they move through busy cities. Let us take
                your brand’s story to the streets and bring it closer to your
                potential customers.
              </p>
              <a href="/about" className="btn btn-success btn-lg mt-2 fs-6">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Second Mission Section with reversed layout */}
      <section className="mission-section py-5">
        <div className="container custom-width">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src={mission_image2}
                alt="Leverage TaxiAd"
                className="img-fluid rounded"
                style={{ width: 500 }} /* Responsive to container */
              />
            </div>
            <div className="col-md-6 order-md-1 mt-3 mt-md-0">
              <h2 className="display-5 fw-bold mb-4 fs-1">
                Why Taxi Advertising
              </h2>
              <p className="lead fs-6">
                Taxi ads are a powerful out-of-home advertising solution that
                offer a higher audience penetration and the opportunity to
                create a standout marketing campaign. Leverage our taxi top
                billboards and in-car displays to engage your customers in
                innovative ways, day and night. Affordable and flexible, this
                advertising concept allows you to work within your budget while
                maximizing impact.
              </p>

              <a
                href="/advertising-formats"
                className="btn btn-success btn-lg mt-2 fs-6"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionSection;
