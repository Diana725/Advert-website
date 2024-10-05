import React from "react";
import "./OnCar.css"; // You can add custom CSS for styling
import location_based from "../../assets/images/Location-based.png";
import data_triggered from "../../assets/images/pic2.png";
import weather_triggered from "../../assets/images/pic3.png";

const OnCar = () => {
  return (
    <section className="advertising-formats">
      <div className="container text-center">
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="icon">
              {/* Add your first icon here */}
              <img src={location_based} alt="Hyper Targeting" />
            </div>
            <h4>Location-Based</h4>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your second icon here */}
              <img src={data_triggered} alt="Dynamic Content Serving" />
            </div>
            <h4>Data Triggered</h4>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your third icon here */}
              <img src={weather_triggered} alt="Measurement + Attribution" />
            </div>
            <h4>Weather Triggered</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnCar;
