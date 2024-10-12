import React from "react";
import mission_image from "../../assets/images/maiko_img_2.jpeg";
import mission_image2 from "../../assets/images/maiko_img_3.jpeg"; // Replace with your image path
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";

const MissionSection = () => {
  return (
    <>
      {/* First Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* <h1 fw-bold>Our Mission</h1> */}
            {/* Left Column: Image */}
            <div className="col-md-6">
              <img
                src={mission_image}
                alt="TaxiAd Mission"
                className="img-fluid rounded"
                style={{ width: 900 }}
              />
            </div>

            {/* Right Column: Text and Button */}
            <div className="col-md-6">
              <h2 className="display-5 fw-bold mb-4">
                Our Mission At AdLite Media
              </h2>
              <p className="lead">
                Connecting brands with their target audience through innovative
                taxi advertising is what we do best. Our dynamic taxi top
                billboards and in-car displays reach a broader audience,
                engaging customers as they move through busy cities. Let us take
                your brand’s story to the streets and bring it closer to your
                potential customers.
              </p>
              <NavLink to="/about" className="btn btn-success btn-lg mt-4">
                Learn More
              </NavLink>
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* Second Mission Section with reversed layout */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Right Column: Image (swapped) */}
            <div className="col-md-6 order-md-2">
              <img
                src={mission_image2}
                alt="Leverage TaxiAd"
                className="img-fluid rounded"
              />
            </div>

            {/* Left Column: Text and Button (swapped) */}
            <div className="col-md-6 order-md-1">
              <h2 className="display-5 fw-bold mb-4">Why Taxi Advertising</h2>
              <p className="lead">
                Taxi ads are a powerful out-of-home advertising solution that
                offer a higher audience penetration and the opportunity to
                create a standout marketing campaign. Leverage our taxi top
                billboards and in-car displays to engage your customers in
                innovative ways, day and night. Affordable and flexible, this
                advertising concept allows you to work within your budget while
                maximizing impact.
              </p>

              {/* Learn More Button */}
              <NavLink
                to="/advertising-formats"
                className="btn btn-success btn-lg mt-4"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionSection;
