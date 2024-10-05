import React from "react";
import mission_image from "../../assets/images/pexels-ibrahimboran-296492.jpg"; // Replace with your image path
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
              />
            </div>

            {/* Right Column: Text and Button */}
            <div className="col-md-6">
              <h2 className="display-5 fw-bold mb-4">Our Mission At TaxiAD</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non porttitor risus, quis bibendum orci. Maecenas orci turpis,
                cursus non elit vitae, rutrum accumsan risus. Nam commodo tortor
                urna, sit amet congue ex pulvinar et. Suspendisse bibendum nulla
                nunc, nec efficitur risus vehicula non. Sed maximus imperdiet
                placerat. Phasellus bibendum porta risus, at lacinia massa
                dictum id. Quisque ac placerat nulla.
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
                src={mission_image}
                alt="Leverage TaxiAd"
                className="img-fluid rounded"
              />
            </div>

            {/* Left Column: Text and Button (swapped) */}
            <div className="col-md-6 order-md-1">
              <h2 className="display-5 fw-bold mb-4">
                How You Can Leverage TaxiAd
              </h2>
              <p className="lead">
                Curabitur eget metus ut mauris suscipit aliquam nec nec velit.
                Nullam semper tincidunt magna, at tincidunt nisi gravida id.
                Donec sed diam vel massa tristique hendrerit non ac felis.
                Aenean sit amet nisi convallis, ultricies lacus in, fermentum
                augue. Phasellus nec lorem sit amet sapien vulputate venenatis
                ut vel purus.
              </p>

              {/* Learn More Button */}
              <NavLink to="/about" className="btn btn-success btn-lg mt-4">
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
