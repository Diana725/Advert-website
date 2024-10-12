import React from "react";
import "./OnCar.css"; // You can add custom CSS for styling
import location_based from "../../assets/images/maiko_img_5.jpeg";
import data_triggered from "../../assets/images/maiko_img_6.jpeg";
import weather_triggered from "../../assets/images/maiko_img_7.jpeg";

const OnCar = () => {
  return (
    <section className="advertising-formats">
      <div className="container text-center">
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="icon">
              {/* Add your first icon here */}
              <img
                src={location_based}
                alt="Hyper Targeting"
                className="taxi_top_img"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your second icon here */}
              <img
                src={data_triggered}
                alt="Dynamic Content Serving"
                className="taxi_top_img"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your third icon here */}
              <img
                src={weather_triggered}
                alt="Measurement + Attribution"
                className="taxi_top_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnCar;
