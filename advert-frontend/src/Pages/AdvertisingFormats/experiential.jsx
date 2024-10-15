import React from "react";
import "./experiential.css"; // You can add custom CSS for styling
import location_based from "../../assets/images/cs-1.jpeg";
import data_triggered from "../../assets/images/cs_6.jpeg";
import weather_triggered from "../../assets/images/cs-3.jpeg";

const Experiential = () => {
  return (
    <section className="advertising-formats1 py-4">
      <div className="container">
        <div className="row">
          {/* First Image */}
          <div className="col-12 col-md-4 mb-4">
            <div className="icon">
              <img
                src={location_based}
                alt="Hyper Targeting"
                className="img-fluid experiential_img"
              />
            </div>
          </div>

          {/* Second Image */}
          <div className="col-12 col-md-4 mb-4">
            <div className="icon">
              <img
                src={data_triggered}
                alt="Dynamic Content Serving"
                className="img-fluid experiential_img"
              />
            </div>
          </div>

          {/* Third Image */}
          <div className="col-12 col-md-4 mb-4">
            <div className="icon">
              <img
                src={weather_triggered}
                alt="Measurement + Attribution"
                className="img-fluid experiential_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiential;
