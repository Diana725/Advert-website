import React from "react";
import "./OnCar.css"; // You can add custom CSS for styling
import location_based from "../../assets/images/maiko_img_5.jpeg";
import data_triggered from "../../assets/images/maiko_img_6.jpeg";
import weather_triggered from "../../assets/images/maiko_img_7.jpeg";

const OnCar = () => {
  return (
    <section className="pb-4">
      <div className="container text-center">
        <br />
        <div className="row">
          {/* Location-Based Image */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="icon">
              <img
                src={location_based}
                alt="Hyper Targeting"
                className="img-fluid taxi_top_img"
              />
            </div>
          </div>

          {/* Data-Triggered Image */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="icon">
              <img
                src={data_triggered}
                alt="Dynamic Content Serving"
                className="img-fluid taxi_top_img"
              />
            </div>
          </div>

          {/* Weather-Triggered Image */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="icon">
              <img
                src={weather_triggered}
                alt="Measurement + Attribution"
                className="img-fluid taxi_top_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnCar;
