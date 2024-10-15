import React from "react";
import "./experiential.css";
import location_based from "../../assets/images/cs-1.jpeg";
import data_triggered from "../../assets/images/cs-5.jpeg";
import weather_triggered from "../../assets/images/cs-3.jpeg";

const Experiential = () => {
  return (
    <section className="advertising-formats1">
      <div className="container text-center">
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="icon">
              <img
                src={location_based}
                alt="Hyper Targeting"
                className="experiential_img"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
              <img
                src={data_triggered}
                alt="Dynamic Content Serving"
                className="experiential_img2"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="icon">
              <img
                src={weather_triggered}
                alt="Measurement + Attribution"
                className="experiential_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiential;
